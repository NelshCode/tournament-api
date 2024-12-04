import Database from 'better-sqlite3';
// use :memory to keep in RAM
const db_test = new Database(":memory:", { verbose: console.log });

db_test.exec(`
  CREATE TABLE IF NOT EXISTS players (
    pseudo TEXT PRIMARY KEY,
    points INTEGER NOT NULL DEFAULT 0
  );
`);

export default db_test;
