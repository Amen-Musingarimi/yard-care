import React from 'react';

const StepOne = ({ formData, nextStep, handleChange }) => {
  const { address, service } = formData;

  const handleNext = () => {
    // Perform validation if needed before proceeding to the next step
    nextStep();
  };

  return (
    <div>
      <h2>Step 1: Enter Address and Select Service</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => handleChange('address', e.target.value)}
        placeholder="Enter your address"
      />
      <select
        value={service}
        onChange={(e) => handleChange('service', e.target.value)}
      >
        <option value="">Select a service</option>
        <option value="Lawn Mowing and Maintenance">
          Lawn Mowing and Maintenance
        </option>
        <option value="Leaf and Debris Removal">Leaf and Debris Removal</option>
        <option value="Garden Care">Garden Care</option>
      </select>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;
