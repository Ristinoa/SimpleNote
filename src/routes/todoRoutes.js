const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all TODOs
router.get('/todos', (req, res) => {
  db.getTodos((err, rows) => {
    if (err) return res.status(500).send("Error retrieving tasks");
    res.json(rows);
  });
});

// Add a new TODO
router.post('/todos', (req, res) => {
  const { task } = req.body;
  db.addTodo(task, (err) => {
    if (err) return res.status(500).send("Error adding task");
    res.status(201).send("Task added");
  });
});

// Delete a TODO by ID
router.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.deleteTodo(id, (err) => {
    if (err) return res.status(500).send("Error deleting task");
    res.send("Task deleted");
  });
});

module.exports = router;