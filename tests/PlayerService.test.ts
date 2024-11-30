import PlayerService from '../src/PlayerService';
import db from '../src/db';

beforeEach(() => {
  // Réinitialiser la table avant chaque test
  db.exec('DELETE FROM players');
});

afterAll(() => {
  // Fermer la base après tous les tests
  db.close();
});

describe('PlayerService', () => {
  test('Ajoute un joueur', () => {
    PlayerService.addPlayer('Player1');
    const player = PlayerService.getPlayer('Player1');
    expect(player).toEqual({ pseudo: 'Player1', points: 0, rank: 1 });
  });

  test('Ne peut pas ajouter un joueur avec un pseudo déjà existant', () => {
    PlayerService.addPlayer('Player1');
    expect(() => PlayerService.addPlayer('Player1')).toThrow('Le pseudo "Player1" existe déjà.');
  });

  test('Met à jour les points d’un joueur', () => {
    PlayerService.addPlayer('Player1');
    PlayerService.updatePoints('Player1', 50);
    const player = PlayerService.getPlayer('Player1');
    expect(player?.points).toBe(50);
  });

  test('Supprime tous les joueurs', () => {
    PlayerService.addPlayer('Player1');
    PlayerService.addPlayer('Player2');
    PlayerService.deleteAllPlayers();
    const players = PlayerService.getAllPlayers();
    expect(players).toHaveLength(0);
  });
});
