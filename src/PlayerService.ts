import db from './db';

class PlayerService {
  static addPlayer(pseudo: string): void {
    const stmt = db.prepare('INSERT INTO players (pseudo, points) VALUES (?, ?)');
    try {
      stmt.run(pseudo, 0);
    } catch (err) {
      throw new Error(`Le pseudo "${pseudo}" existe déjà.`);
    }
  }

  static updatePoints(pseudo: string, points: number): void {
    const stmt = db.prepare('UPDATE players SET points = ? WHERE pseudo = ?');
    const result = stmt.run(points, pseudo);
    if (result.changes === 0) {
      throw new Error(`Le joueur "${pseudo}" n'existe pas.`);
    }
  }

  static getPlayer(pseudo: string): { pseudo: string; points: number; rank: number } | null {
    const stmt = db.prepare('SELECT * FROM players WHERE pseudo = ?');
    const player: any = stmt.get(pseudo);
    if (!player) {
      return null;
    }

    // Calculer le classement du joueur
    const rankStmt = db.prepare(`
      SELECT COUNT(*) + 1 AS rank
      FROM players
      WHERE points > ?
    `);
    const rankResult: any = rankStmt.get(player.points);

    return {
      pseudo: player.pseudo,
      points: player.points,
      rank: rankResult.rank,
    };
  }

  static getAllPlayers(): { pseudo: string; points: number }[] {
    const stmt = db.prepare('SELECT * FROM players ORDER BY points DESC');
    return stmt.all() as { pseudo: string; points: number; }[];
  }

  static deleteAllPlayers(): void {
    const stmt = db.prepare('DELETE FROM players');
    stmt.run();
  }
}

export default PlayerService;
