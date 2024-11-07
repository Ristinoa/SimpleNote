const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static('src/public'));

// Route API requests to todoRoutes
app.use('/api', todoRoutes);

// Default route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
