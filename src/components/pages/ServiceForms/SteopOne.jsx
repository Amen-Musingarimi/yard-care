import React, { useState } from 'react';
import formImage from '../../images/form 1.webp';
import yardCleaningServices from '../../helpers/services';
import '../../styles/Forms.css';

const StepOne = ({ formData, nextStep, handleChange }) => {
  const { address, service } = formData;
  const [errorMessage, setErrorMessage] = useState('');
  const [addressValid, setAddressValid] = useState(false);

  const validateAddress = (value) => {
    const trimmedAddress = value.trim();
    if (trimmedAddress.length >= 10) {
      setAddressValid(true);
      setErrorMessage('');
    } else {
      setAddressValid(false);
      setErrorMessage('Address should have at least 10 characters.');
    }
  };

  const handleNext = () => {
    if (!addressValid || !service) {
      setErrorMessage(
        'Please fill in both the address and service fields before proceeding.'
      );
      return;
    }
    nextStep();
  };

  return (
    <div className="step-div">
      <div className="form-container">
        <p className="step-description">
          Kindly complete the brief form below, so that we can provide you with
          an accurate quotation.
        </p>
        <div className="dotted-border-container"></div>
        <span className="step-heading">Step 1 of 4</span>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            handleChange('address', e.target.value);
            validateAddress(e.target.value);
          }}
          placeholder="Enter your address e.g 11 Down Street Wallview Harare"
          className="step-input"
          required
        />
        <select
          value={service}
          onChange={(e) => handleChange('service', e.target.value)}
          className="step-input"
          required
        >
          <option value="">Select a service</option>
          {yardCleaningServices.map((service) => (
            <option
              key={service.name}
              value={service.name}
              className="dropdown-option"
            >
              {service.name}
            </option>
          ))}
        </select>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleNext} className="submit-btn step1-btn">
          PROCEED
        </button>
      </div>

      <img src={formImage} alt="FormImage" />
    </div>
  );
};

export default StepOne;
