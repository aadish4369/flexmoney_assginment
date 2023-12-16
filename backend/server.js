const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint for handling form data
app.post('/api/submitForm', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  // Perform additional actions with the form data (e.g., store in a database)

  res.json({ message: 'Form data received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
