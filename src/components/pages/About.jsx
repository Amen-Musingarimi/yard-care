import React from 'react';
import '../styles/About.css';
import lawnmower from '../images/lawnmower.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="intro-container">
        <img src={lawnmower} alt="lawn-mower" className="intro-image" />
        <div className="intro-text-container">
          <h4 className="intro-heading">
            We are no. 1 yard care service provider company in Zimbabwe
          </h4>
          <p className="intro-text">
            As a leading yard care service provider, we take pride in elevating
            your outdoor experience to new heights. Our commitment to
            excellence, sustainability, and innovation sets us apart, ensuring
            that your yard becomes a masterpiece of cleanliness and beauty. Join
            us on this journey to create outdoor spaces that not only captivate
            the eye but also nurture the soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
