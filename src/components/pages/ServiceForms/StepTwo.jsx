import React, { useState } from 'react';
import formImage from '../../images/form 1.webp';
import '../../styles/Forms.css';

const StepTwo = ({ formData, nextStep, prevStep, handleChange }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { date, time } = formData;

  const handleNext = () => {
    if (!date || !time) {
      setErrorMessage(
        'Please fill in both the date and time fields before proceeding.'
      );
    } else {
      const selectedDateTime = new Date(`${date}T${time}`);
      const currentDateTime = new Date();

      if (selectedDateTime <= currentDateTime) {
        setErrorMessage('Please select a date and time in the future.');
      } else {
        nextStep();
      }
    }
  };

  return (
    <div className="step-div">
      <div className="form-container">
        <p className="step-description">
          When would be the most suitable time for us to provide the service
          you've selected? Please advise.
        </p>
        <div className="dotted-border-container"></div>
        <span className="step-heading">Step 2 of 4</span>
        <input
          type="date"
          value={date}
          required
          className="step-input"
          onChange={(e) => handleChange('date', e.target.value)}
        />
        <input
          type="time"
          value={time}
          required
          className="step-input"
          onChange={(e) => handleChange('time', e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="btn-container">
          <button onClick={prevStep} className="previous-btn">
            Previous
          </button>
          <button onClick={handleNext} className="submit-btn">
            PROCEED
          </button>
        </div>
      </div>
      <img src={formImage} alt="FormImage" />
    </div>
  );
};

export default StepTwo;
