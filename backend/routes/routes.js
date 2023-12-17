const express = require('express');
const router = express.Router();
const User = require('../modals/user');
const Enrollment = require('../modals/enrollment'); // Import the Enrollment model
const Batch = require('../modals/batch'); // Import the Batch model

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

    // Perform additional actions with the form data or store in other collections

    res.json({ message: 'Form data received and saved successfully!' });
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for Getting Enrollment Details
router.get('/enrollmentDetails/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    // Find enrollment details for the specified user
    const enrollmentDetails = await Enrollment.find({ user: userId }).populate('user').populate('batch');
    res.json(enrollmentDetails);
  } catch (error) {
    console.error('Error fetching enrollment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
