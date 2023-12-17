import React, { useState, useEffect } from 'react';

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState('processing'); // 'processing', 'success', 'failure'

  useEffect(() => {
    // Simulate a delay for processing payment
    const paymentTimeout = setTimeout(() => {
      // Simulate a successful payment
      setPaymentStatus('success');
    }, 2000);

    // Clean up the timeout on component unmount or if payment is successful
    return () => {
      clearTimeout(paymentTimeout);
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
