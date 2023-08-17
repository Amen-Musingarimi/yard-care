import React from 'react';

const StepTwo = ({ formData, nextStep, prevStep, handleChange }) => {
  const { date, time } = formData;

  const handleNext = () => {
    // Perform validation if needed before proceeding to the next step
    nextStep();
  };

  return (
    <div>
      <h2>Step 2: Choose Date and Time</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => handleChange('date', e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => handleChange('time', e.target.value)}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepTwo;
