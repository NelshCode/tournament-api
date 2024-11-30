import request from 'supertest';
import express from 'express';
import playerRoutes from '../src/playerRoutes';
import db from '../src/db';

// Configure un serveur Express pour les tests
const app = express();
app.use(express.json());
app.use('/api', playerRoutes);

beforeEach(() => {
  // Réinitialiser la table avant chaque test
  db.exec('DELETE FROM players');
});

afterAll(() => {
  db.close();
});

describe('API Routes', () => {
  test('Ajoute un joueur via POST /api/players', async () => {
    const res = await request(app)
      .post('/api/players')
      .send({ pseudo: 'Player1' });
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('Joueur ajouté : Player1');
  });

  test('Retourne un joueur via GET /api/players/:pseudo', async () => {
    await request(app).post('/api/players').send({ pseudo: 'Player1' });
    const res = await request(app).get('/api/players/Player1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ pseudo: 'Player1', points: 0, rank: 1 });
  });

  test('Retourne 404 si un joueur n’existe pas', async () => {
    const res = await request(app).get('/api/players/Unknown');
    expect(res.status).toBe(404);
  });

  test('Supprime tous les joueurs via DELETE /api/players', async () => {
    await request(app).post('/api/players').send({ pseudo: 'Player1' });
    const res = await request(app).delete('/api/players');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Tous les joueurs ont été supprimés.');
  });
});
