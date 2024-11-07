const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const highPriorityList = document.getElementById('highPriorityList');
const mediumPriorityList = document.getElementById('mediumPriorityList');
const lowPriorityList = document.getElementById('lowPriorityList');

// Load TODO items by priority
function loadTodos() {
  fetch('/api/todos')
    .then(res => res.json())
    .then(todos => {
      // Clear existing lists
      highPriorityList.innerHTML = '';
      mediumPriorityList.innerHTML = '';
      lowPriorityList.innerHTML = '';

      // Group tasks by priority and append to respective lists
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `${todo.task} <button onclick="deleteTask(${todo.id})">Delete</button>`;

        if (todo.priority === 'High') {
          highPriorityList.appendChild(li);
        } else if (todo.priority === 'Medium') {
          mediumPriorityList.appendChild(li);
        } else {
          lowPriorityList.appendChild(li);
        }
      });
    });
}

// Add a new task with selected priority
function addTask() {
  const task = taskInput.value;
  const priority = prioritySelect.value;  // Ensure this is a string
  if (!task) return;
  
  fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, priority })  // Ensure priority is a string here
  }).then(() => {
    taskInput.value = '';
    loadTodos();
  });
}

// Delete a task by ID
function deleteTask(id) {
  fetch(`/api/todos/${id}`, { method: 'DELETE' })
    .then(() => loadTodos());
}

loadTodos();  // Initial load
