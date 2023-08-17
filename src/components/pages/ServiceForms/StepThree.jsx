import React from 'react';

const StepThree = ({ formData, nextStep, prevStep, handleChange }) => {
  const { name, phoneNumber, email } = formData;

  const handleNext = () => {
    // Perform validation if needed before proceeding to the next step
    nextStep();
  };

  return (
    <div>
      <h2>Step 3: Enter Contact Information</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Full Name"
      />
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => handleChange('phoneNumber', e.target.value)}
        placeholder="Phone Number"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="Email"
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepThree;
