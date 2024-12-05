import PlayerService from '../../src/PlayerService';

import db_test from '../dbtest'



beforeEach(() => {
  // reset table before tests
  db_test.exec('DELETE FROM players');
});

afterAll(() => {
  db_test.exec('DELETE FROM players');
  // close the base after tests
  db_test.close();
});

describe('PlayerService', () => {
  test('Add a player', () => {
    PlayerService.addPlayer('Player1');
    const player = PlayerService.getPlayer('Player1');
    expect(player).toEqual({ pseudo: 'Player1', points: 0, rank: 1 });
  });

  test('Cannot add a player with existing name', () => {
    PlayerService.addPlayer('existingPlayer');
    expect(() => PlayerService.addPlayer('existingPlayer')).toThrow('Pseudo "existingPlayer" already exists.');
  });

  test('Update points from a player', () => {
    PlayerService.addPlayer('updatePlayer');
    PlayerService.updatePoints('updatePlayer', 50);
    const player = PlayerService.getPlayer('updatePlayer');
    expect(player?.points).toBe(50);
  });

  test('Delete all players', () => {
    PlayerService.addPlayer('toBeDeleted1');
    PlayerService.addPlayer('toBeDeleted2');
    PlayerService.deleteAllPlayers();
    const players = PlayerService.getAllPlayers();
    expect(players).toHaveLength(0);
  });
});
