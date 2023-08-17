import React from 'react';
import { useState } from 'react';
import formImage from '../../images/form 1.webp';
import '../../styles/Forms.css';

const StepOne = ({ formData, nextStep, handleChange }) => {
  const { address, service } = formData;
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (!address || !service) {
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
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="Enter your address"
          required
        />
        <select
          value={service}
          onChange={(e) => handleChange('service', e.target.value)}
          required
        >
          <option value="">Select a service</option>
          <option value="Lawn Mowing and Maintenance">
            Lawn Mowing and Maintenance
          </option>
          <option value="Leaf and Debris Removal">
            Leaf and Debris Removal
          </option>
          <option value="Garden Care">Garden Care</option>
        </select>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button onClick={handleNext}>Proceed</button>
      </div>

      <img src={formImage} alt="FormImage" />
    </div>
  );
};

export default StepOne;
