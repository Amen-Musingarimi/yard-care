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
    image: null,
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
    if (field === 'image') {
      setFormData({ ...formData, image: value });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSubmit = () => {
    const {
      address,
      service,
      date,
      time,
      name,
      phoneNumber,
      email,
      description,
    } = formData;
    const message = `Address: ${address}\nService: ${service}\nDate: ${date}\nTime: ${time}\nName: ${name}\nPhone: ${phoneNumber}\nEmail: ${email}\nDescription: ${description}`;
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
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
