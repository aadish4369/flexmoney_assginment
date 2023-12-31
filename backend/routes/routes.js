const express = require('express');
const router = express.Router();
const User = require('../modals/user');
const Enrollment = require('../modals/enrollment'); // Import the Enrollment model
const Batch = require('../modals/batch'); // Import the Batch model
const Payment = require('../modals/payment'); // Import the Batch model
const { mockPayment } = require('../controllers/paymentController');



router.post('/submitForm', async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Create a new user in the User collection
    const newUser = new User({
      name: formData.firstName + ' ' + formData.lastName,
      age: formData.age,
      // Add other user details as needed
    });

    // Save the new user to the database
    await newUser.save();

    // Create a new batch in the Batch collection
    const newBatch = new Batch({
      startTime: formData.batchStartTime,
      endTime: formData.batchEndTime,
    });

    // Save the new batch to the database
    await newBatch.save();

    // Create a new enrollment in the Enrollment collection
    const newEnrollment = new Enrollment({
      user: newUser._id, // Reference to the newly created user
      batch: newBatch._id, // Reference to the newly created batch
      enrollmentDate: new Date(),
      status: 'Active', // You can set an initial status as needed
    });

    // Save the new enrollment to the database
    await newEnrollment.save();

    const paymentAmount = 500;
  
    // Create a new payment in the Payment collection
    const newPayment = new Payment({
      user: newUser._id,
      amount: paymentAmount,
      batchStartTime: formData.batchStartTime,
      batchEndTime: formData.batchEndTime,
    });

    // Save the new payment to the database
    await newPayment.save();

    // Perform additional actions with the form data or store in other collections

    res.json({ message: 'Form data received and saved successfully!' });
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/getMockData', async (req, res) => {
  try {
    // Mock data retrieval process
    const mockData = await mockPayment(); // Adjust based on your data retrieval logic

    res.json({ mockData });
  } catch (error) {
    console.error('Error fetching mock data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

