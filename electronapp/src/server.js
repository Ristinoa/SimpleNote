// server.js
const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('src/public'));
app.use('/api', todoRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Export a function to start the server
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = startServer;
