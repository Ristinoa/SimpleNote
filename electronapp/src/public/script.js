const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const highPriorityList = document.getElementById('highPriorityList');
const mediumPriorityList = document.getElementById('mediumPriorityList');
const lowPriorityList = document.getElementById('lowPriorityList');

// Determine if running in development or production
const isDevelopment = window.location.href.includes('localhost');
const apiBaseUrl = isDevelopment ? 'http://localhost:3000/api' : 'http://127.0.0.1:3000/api';

// Load TODO items by priority
async function loadTodos() {
  try {
    const response = await fetch(`${apiBaseUrl}/todos`);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos. Status: ${response.status}`);
    }
    const todos = await response.json();

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
  } catch (error) {
    console.error('Error loading todos:', error);
  }
}

// Add a new task with selected priority
async function addTask() {
  const task = taskInput.value;
  const priority = prioritySelect.value;
  if (!task) return;

  try {
    const response = await fetch(`${apiBaseUrl}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, priority })
    });

    if (!response.ok) {
      throw new Error(`Failed to add task. Status: ${response.status}`);
    }

    taskInput.value = '';
    await loadTodos();
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

// Delete a task by ID
async function deleteTask(id) {
  try {
    const response = await fetch(`${apiBaseUrl}/todos/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(`Failed to delete task. Status: ${response.status}`);
    }

    await loadTodos();
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}

// Listen for Enter key press in the task input field
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Initial load
loadTodos();
