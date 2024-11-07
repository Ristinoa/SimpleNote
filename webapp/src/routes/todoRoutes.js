const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all TODOs
router.get('/todos', (req, res) => {
  db.getTodos((err, rows) => {
    if (err) {
      console.error("Error fetching todos:", err);
      return res.status(500).json({ error: "Failed to retrieve todos" });
    }
    res.json(rows);
  });
});

// ! 10/30/2024 - modified add method to handle task & priority fields
router.post('/todos', (req, res) => {
  const { task, priority } = req.body;
  
  if (!task || !priority) {
    return res.status(400).json({ error: "Task and priority are required" });
  }

  db.addTodo(task, priority, (err) => {
    if (err) {
      console.error("Error adding todo:", err);
      return res.status(500).json({ error: "Failed to add todo" });
    }
    res.status(201).json({ success: true });
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