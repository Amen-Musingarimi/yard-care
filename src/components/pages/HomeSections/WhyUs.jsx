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
          Embrace the beauty of your outdoor haven with YardCare Pro, where
          exceptional service meets pristine landscapes. Discover why we stand
          out in the yard care industry:
        </p>
      </div>
      <div className="reasons-container">
        {whyUsReasons.map((reason, index) => (
          <div key={index} className="reason">
            <div className="icon">{reason.icon}</div>
            <div className="reason-content">
              <h3 className="reason-heading">{reason.heading}</h3>
              <p className="reason-text">{reason.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
