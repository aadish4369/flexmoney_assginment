// src/components/YogaAdmissionForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mocking a function that simulates the payment process
const CompletePayment = async (paymentDetails) => {
  // Simulate a successful payment after 2 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful payment for demo purposes
      resolve({ success: true, message: 'Payment successful!' });
    }, 2000);
  });
};

const YogaAdmissionForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    selectedBatch: '',
    batchStartTime: '',
    batchEndTime: '',
  });

  const [error, setError] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleInputChange = (e) => {
    if (e.target.name === 'selectedBatch') {
      const [batchStartTime, batchEndTime] = e.target.value.split('-');
      setFormData({
        ...formData,
        batchStartTime: batchStartTime.trim(),
        batchEndTime: batchEndTime.trim(),
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validatePaymentData = () => {
    if (!formData.batchStartTime || !formData.batchEndTime) {
      setError('Please select a valid batch.');
      return false;
    }
    // Add other payment data validation logic as needed
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate payment data
    if (!validatePaymentData()) {
      return;
    }

    // Validate age within the range of 18-65
    const age = parseInt(formData.age, 10);
    if (isNaN(age) || age < 18 || age > 65) {
      setError('Age must be between 18 and 65.');
      return;
    }

    // Reset error if age is valid
    setError('');

    try {
      // Make a POST request to the Express backend
      const response = await fetch('http://localhost:5000/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully.');
        // Simulate payment for demo purposes
        const paymentResponse = await CompletePayment(formData);
        setPaymentStatus(paymentResponse.success);
      } else {
        console.error('Failed to send form data.');
        setPaymentStatus(false);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setPaymentStatus(false);
    }

    setTimeout(() => {
      // In a real-world scenario, you would navigate to the payment component here
      navigate('/payment');
    }, 2000);
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="firstName"
            type="text"
            placeholder="Jane"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lastName"
            type="text"
            placeholder="Doe"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              error ? 'border-red-500' : 'border-gray-200'
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="age"
            type="number"
            placeholder="30"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="selectedBatch">
            Select Batch
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="selectedBatch"
            name="selectedBatch"
            value={formData.selectedBatch}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Choose a Batch
            </option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <p className="text-gray-600 text-xs italic">
            Note: Participants can choose any batch in a month and can move to any other batch next month. In the same month, they need to be in the same batch
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>

      {paymentStatus !== null && (
        <div className={`mt-4 ${paymentStatus ? 'text-green-500' : 'text-red-500'}`}>
          {paymentStatus ? 'Sucessfully uploaded!' : 'Please try again.'}
        </div>
      )}
    </form>
  );
};

export default YogaAdmissionForm;
