import React from 'react';
import whyUsReasons from '../../helpers/whyUsReasons';
import '../../styles/WhyUs.css';

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <div className="heading-div">
        <h2 className="section-heading">
          Transform Your Outdoor Space with YardCare
        </h2>
        <p className="supporting-text">
          Embrace the beauty of your outdoor haven with YardCare, where
          exceptional service meets pristine landscapes. Discover why we stand
          out in the yard care industry:
        </p>
      </div>
      <div className="reasons-container">
        {whyUsReasons.map((reason, index) => (
          <div key={index} className="reason">
            <img src={reason.icon} alt="ReasonIcon" className="reason-icon" />
            <h4 className="reason-heading">{reason.heading}</h4>
            <p className="reason-text">{reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
