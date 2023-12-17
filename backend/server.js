const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes'); // Import the routes
const connectdb = require('./connectdb'); // Import the MongoDB connection

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
