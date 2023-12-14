import React from 'react';
import '../styles/About.css';
import lawnmower from '../images/lawnmower.jpg';
import aboutContent from '../helpers/aboutContent';

const About = () => {
  return (
    <div className="about-container">
      <div className="intro-container">
        <img src={lawnmower} alt="lawn-mower" className="intro-image" />
        <div className="intro-text-container">
          <h2 className="intro-heading">
            We are no. 1 yard care service provider company in Zimbabwe
          </h2>
          <p className="intro-text">
            Welcome to <span className="company-name">Yard Care</span>, where we
            redefine outdoor living with a passion for transforming yards into
            stunning retreats. As a leading yard care service provider, we take
            pride in elevating your outdoor experience to new heights. Our
            commitment to excellence, sustainability, and innovation sets us
            apart, ensuring that your yard becomes a masterpiece of cleanliness
            and beauty. Join us on this journey to create outdoor spaces that
            not only captivate the eye but also nurture the soul.
          </p>
        </div>
      </div>
      <div className="about-data-container">
        {aboutContent.map((about) => (
          <div className="about-item">
            <h4 className="about-item-heading">{about.heading}</h4>
            <p className="about-item-description">{about.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
