import React from 'react';

const StepFour = ({ formData, prevStep, handleSubmit }) => {
  const { description } = formData;

  return (
    <div>
      <h2>Step 4: Additional Information</h2>
      <textarea
        value={description}
        onChange={(e) => handleSubmit('description', e.target.value)}
        placeholder="Enter any additional details..."
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepFour;
