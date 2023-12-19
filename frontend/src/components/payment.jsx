import React, { useState, useEffect } from 'react';

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState('processing'); // 'processing', 'success', 'failure'

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getPaymentStatus'); // Replace with your actual backend endpoint
        const data = await response.json();

        // Check if the payment status is true or false
        if (data.success) {
          setPaymentStatus('success');
        } else {
          setPaymentStatus('failure');
        }
      } catch (error) {
        console.error('Error fetching payment status:', error);
        setPaymentStatus('failure');
      }
    };

    // Fetch payment status on component mount
    fetchPaymentStatus();

    // Clean up on component unmount
    return () => {
      // Additional cleanup if needed
    };
  }, []);

  return (
    <div>
      <h2>Processing Payment...</h2>
      {paymentStatus === 'success' && (
        <div className="text-green-500 mt-4">
          Payment successful! You have successfully completed the virtual payment.
        </div>
      )}
      {paymentStatus === 'failure' && (
        <div className="text-red-500 mt-4">
          Payment failed. Please try again or contact customer support.
        </div>
      )}
    </div>
  );
};

export default Payment;
