const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/todo.db'); // upgrades, people! UPGRADES!!

// Initialize the TODO table
// ! 10/30/2024 - rebuilt database to add priority field

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY,
    task TEXT NOT NULL,
    priority TEXT NOT NULL
  )`);
});

// Query all elements from todo list
const getTodos = (callback) => {
  db.all("SELECT * FROM todos", callback);
};

const addTodo = (task, priority, callback) => {
  db.run("INSERT INTO todos (task, priority) VALUES (?, ?)", [task, priority], callback);
};

// Database action for deleting an element from the todo list
const deleteTodo = (id, callback) => {
  db.run("DELETE FROM todos WHERE id = ?", [id], callback);
};

module.exports = { getTodos, addTodo, deleteTodo };