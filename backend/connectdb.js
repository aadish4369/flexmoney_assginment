require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

// Add this line to log the connection status
console.log('Connecting to MongoDB...');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
