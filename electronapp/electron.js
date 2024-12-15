const { app, BrowserWindow } = require('electron');
const path = require('path');
const startServer = require('./src/server');

let mainWindow;

// Determine whether we're in development or production mode
const isDevelopment = process.env.NODE_ENV === 'development' || !app.isPackaged;

// Start the server in both development and production modes
startServer();

app.on('ready', () => {
  require('./src/database'); // Initialize the database
  createWindow();
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDevelopment) {
    // Development mode: Use localhost
    console.log('Running in development mode: Loading from localhost');
    mainWindow.loadURL('http://localhost:3000');
  } else {
    // Production mode: Load static files from the app package
    console.log('Running in production mode: Loading from packaged app');
    mainWindow.loadFile(path.join(__dirname, 'src', 'public', 'index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
