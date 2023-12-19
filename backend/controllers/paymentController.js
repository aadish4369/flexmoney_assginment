// backend/controllers/paymentController.js
const mockPayment = async () => {
    // Simulate a payment process with a random success or failure
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generate a random number (0 or 1) to simulate success or failure
        const randomResult = Math.random() < 0.5;
  
        if (randomResult) {
          resolve({ success: true, message: 'Payment successful!' });
        } else {
          resolve({ success: false, message: 'Payment failed. Please try again.' });
        }
      }, 2000); // Simulating a delay for the payment process
    });
  };
  
  module.exports = {
    mockPayment,
  };
  