const todoList = document.getElementById('todoList');
const taskInput = document.getElementById('taskInput');

// Load TODO items
function loadTodos() {
  fetch('/api/todos')
    .then(res => res.json())
    .then(todos => {
      todoList.innerHTML = '';
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `${todo.task} <button onclick="deleteTask(${todo.id})">Delete</button>`;
        todoList.appendChild(li);
      });
    });
}

// Add a new task
function addTask() {
  const task = taskInput.value;
  if (!task) return;
  fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task })
  }).then(() => {
    taskInput.value = '';
    loadTodos();
  });
}

// Delete a task
function deleteTask(id) {
  fetch(`/api/todos/${id}`, { method: 'DELETE' })
    .then(() => loadTodos());
}

loadTodos();  // Initial load
