import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YogaAdmissionForm from './components/yogaform';
import Payment from './components/payment';

const App = () => {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
          {/* Use Routes instead of Switch */}
          <Routes>
            {/* Route for Yoga Admission Form */}
            <Route path="/" element={<YogaAdmissionForm />} />

            {/* Route for Payment Component */}
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
