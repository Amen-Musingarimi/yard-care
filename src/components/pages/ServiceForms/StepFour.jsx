import React from 'react';
import formImage from '../../images/form 1.webp';
import '../../styles/Forms.css';

const StepFour = ({ formData, prevStep, handleChange, handleSubmit }) => {
  const { description } = formData;

  const handleDescriptionChange = (value) => {
    handleChange('description', value);
  };

  return (
    <div className="step-div">
      <div className="form-container">
        <p className="step-description">
          Please provide us with any additional information or any other details
          that you believe would make our work easier. Please advise.
        </p>
        <div className="dotted-border-container"></div>
        <span className="step-heading">Step 4 of 4</span>
        <textarea
          value={description}
          className="step-input"
          onChange={(e) => handleDescriptionChange(e.target.value)}
          placeholder="Enter any additional details..."
        />
        <div className="btn-container">
          <button onClick={prevStep} className="previous-btn">
            Previous
          </button>
          <button onClick={handleSubmit} className="submit-btn">
            SUBMIT
          </button>
        </div>
      </div>
      <img src={formImage} alt="FormImage" />
    </div>
  );
};

export default StepFour;
