// src/App.jsx
import React from 'react';
import YogaAdmissionForm from './components/yogaform';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <YogaAdmissionForm />
      </div>
    </div>
  );
};

export default App;
