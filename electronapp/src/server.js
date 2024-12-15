const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const path = require('path');

const app = express();

app.use(bodyParser.json());

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
if (isDevelopment) {
  app.use(express.static('src/public'));
} else {
  const publicPath = path.join(__dirname, 'public');
  app.use(express.static(publicPath));
}

// API Routes
app.use('/api', todoRoutes);

// Serve frontend files
app.get('/', (req, res) => {
  if (isDevelopment) {
    res.sendFile(path.join(__dirname, 'src', 'public', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 3000;

// Start the server
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on ${isDevelopment ? `http://localhost:${PORT}` : `port ${PORT}`}`);
  });

  // Log incoming requests
  app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });
}

function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on ${isDevelopment ? 'http://localhost:3000' : 'packaged environment'}`);
  });

  // Test the API route (optional, for debugging purposes)
  fetch('http://localhost:3000/api/todos')
    .then(response => response.json())
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Error fetching todos:', error));
}

module.exports = startServer;
