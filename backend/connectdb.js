// connectdb.js
const mongoose = require('mongoose');

// Add this line to log the connection status
console.log('Connecting to MongoDB...');

const MONGODB_URI = 'mongodb+srv://aadishskjain:0hxQCGjxvHCdjKG2@cluster0.iebe3fk.mongodb.net/flexmoney?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
