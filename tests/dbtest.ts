import Database from 'better-sqlite3';

// Connexion à la base SQLite (le fichier `players.db` sera créé s'il n'existe pas)
const db_test = new Database(":memory:", { verbose: console.log });

// Création de la table des joueurs
db_test.exec(`
  CREATE TABLE IF NOT EXISTS players (
    pseudo TEXT PRIMARY KEY,
    points INTEGER NOT NULL DEFAULT 0
  );
`);

// Export de la connexion pour l'utiliser dans d'autres fichiers
export default db_test;
