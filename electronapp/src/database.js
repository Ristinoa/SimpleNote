const sqlite3 = require('sqlite3').verbose();
const { app } = require('electron');
const path = require('path');
const fs = require('fs');

// Determine database path
const dbPath = path.join(app.getPath('userData'), 'todo.db');
console.log('Database Path:', dbPath);

// Ensure the database file exists in the user data directory
if (!fs.existsSync(dbPath)) {
  const defaultDbPath = path.join(__dirname, '../data/todo.db'); // Default DB in source
  if (fs.existsSync(defaultDbPath)) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    fs.copyFileSync(defaultDbPath, dbPath);
  }
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Initialize the TODO table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY,
    task TEXT NOT NULL,
    priority TEXT NOT NULL
  )`);
});

// Export the necessary functions
const getTodos = (callback) => {
  db.all("SELECT * FROM todos", callback);
};

const addTodo = (task, priority, callback) => {
  db.run("INSERT INTO todos (task, priority) VALUES (?, ?)", [task, priority], callback);
};

const deleteTodo = (id, callback) => {
  db.run("DELETE FROM todos WHERE id = ?", [id], callback);
};

// Exporting functions for use in routes
module.exports = { getTodos, addTodo, deleteTodo };
