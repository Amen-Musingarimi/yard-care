import React from 'react';
import { useState } from 'react';
import formImage from '../../images/form 1.webp';
import '../../styles/Forms.css';

const StepThree = ({ formData, nextStep, prevStep, handleChange }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { name, phoneNumber, email } = formData;

  const handleNext = () => {
    if (!name || !phoneNumber || !email) {
      setErrorMessage(
        'Please fill in all the Name, PhoneNumber and Email fields before proceeding.'
      );
    }
    nextStep();
  };

  return (
    <div className="step-div">
      <div className="form-container">
        <p className="step-description">
          Please provide us with your essential contact details to facilitate
          effective communication and service delivery. Kindly provide your full
          name, email address, and phone number so that we can stay in touch and
          address your needs promptly.
        </p>
        <div className="dotted-border-container"></div>
        <span className="step-heading">Step 3 of 4</span>
        <input
          type="text"
          value={name}
          required
          className="step-input"
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="tel"
          value={phoneNumber}
          required
          className="step-input"
          onChange={(e) => handleChange('phoneNumber', e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="email"
          value={email}
          required
          className="step-input"
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="Email"
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

export default StepThree;
