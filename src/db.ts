import Database from 'better-sqlite3';

// connect to db (create file players.db if it does not exists)
const db = new Database('players.db', { verbose: console.log });

// create player table
db.exec(`
  CREATE TABLE IF NOT EXISTS players (
    pseudo TEXT PRIMARY KEY,
    points INTEGER NOT NULL DEFAULT 0
  );
`);

// export connexion to be used
// in a production envirronement db should run on another service and we should connect to it 
export default db;
