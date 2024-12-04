import request from 'supertest';


const BASE_URL = 'http://localhost:3000'; // target URL
describe('API Endpoints', () => {
  let FirstPlayer: string = 'FirstPlayer';
  let SecondPlayer: string = 'SecondPlayer';

  it('should add a new player', async () => {
    const response = await request(BASE_URL)
      .post('/api/players')
      .send({ pseudo: FirstPlayer })
      .set('Accept', 'application/json');
    
    expect(response.status).toBe(201);
    expect(response.body.message).toBe(`Added player : ${FirstPlayer}`);
  });

  it('should update points for an existing player', async () => {
    const response = await request(BASE_URL)
      .put(`/api/players/${FirstPlayer}/points`)
      .send({ points: 100 })
      .set('Accept', 'application/json');
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`Points updated for : ${FirstPlayer}`);
  });

  it('should retrieve player information with rank', async () => {
    const response = await request(BASE_URL)
      .get(`/api/players/${FirstPlayer}`)
      .set('Accept', 'application/json');
    
    expect(response.status).toBe(200);
    expect(response.body.pseudo).toBe(FirstPlayer);
    expect(response.body.points).toBe(100);  // Assurez-vous que les points sont bien mis à jour
    expect(response.body.rank).toBeDefined();
  });

  it('should retrieve all players sorted by points', async () => {
    const setup = await request(BASE_URL)
      .post('/api/players')
      .send({ pseudo: SecondPlayer })
      .set('Accept', 'application/json');
    const response = await request(BASE_URL)
      .get('/api/players')
      .set('Accept', 'application/json');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0].points).toBeGreaterThanOrEqual(response.body[1]?.points);
  });

  it('should delete all players', async () => {
    const response = await request(BASE_URL)
      .delete('/api/players')
      .set('Accept', 'application/json');
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('All players were deleted.');
  });
});
