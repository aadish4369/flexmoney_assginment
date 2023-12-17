// routes/routes.js
const express = require('express');
const router = express.Router();

router.post('/submitForm', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  // Perform additional actions with the form data (e.g., store in a database)

  res.json({ message: 'Form data received successfully!' });
});

module.exports = router;
