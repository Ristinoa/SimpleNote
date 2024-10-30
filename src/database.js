const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/todo.db'); // upgrades, people! UPGRADES!!

// Initialize the TODO table
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, task TEXT NOT NULL)");
});

// Query all elements from todo list, useful for displaying
const getTodos = (callback) => {
  db.all("SELECT * FROM todos", callback);
};

// Database action for adding a new todo item
const addTodo = (task, callback) => {
  db.run("INSERT INTO todos (task) VALUES (?)", [task], callback);
};

// Database action for deleting an element from the todo list
const deleteTodo = (id, callback) => {
  db.run("DELETE FROM todos WHERE id = ?", [id], callback);
};

module.exports = { getTodos, addTodo, deleteTodo };