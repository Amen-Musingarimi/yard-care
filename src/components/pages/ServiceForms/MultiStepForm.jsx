import React, { useState } from 'react';
import StepOne from './SteopOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    service: '',
    date: '',
    time: '',
    name: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const {
      service,
      date,
      time,
      name,
      phoneNumber,
      email,
      description,
    } = formData;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString(
      'en-US',
      {
        hour: 'numeric',
        minute: 'numeric',
      }
    );

    const message = `Hi Yard Care, this is ${name}. I need the ${service} service on ${formattedDate} at ${formattedTime}. My contact number is ${phoneNumber} and email is ${email}. Description: ${description}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+263712539755';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.location.href = whatsappLink;
  };

  return (
    <div>
      {step === 1 && (
        <StepOne
          formData={formData}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <StepThree
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      )}
      {step === 4 && (
        <StepFour
          formData={formData}
          prevStep={prevStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
