import Database from 'better-sqlite3';

// Connexion à la base SQLite (le fichier `players.db` sera créé s'il n'existe pas)
const db = new Database('players.db', { verbose: console.log });

// Création de la table des joueurs
db.exec(`
  CREATE TABLE IF NOT EXISTS players (
    pseudo TEXT PRIMARY KEY,
    points INTEGER NOT NULL DEFAULT 0
  );
`);

// Export de la connexion pour l'utiliser dans d'autres fichiers
export default db;
