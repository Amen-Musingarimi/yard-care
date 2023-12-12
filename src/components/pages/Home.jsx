import React from 'react';
import WhyUs from './HomeSections/WhyUs';
import { Link } from 'react-router-dom';
import homeDark from '../images/home-dark.png';

const Home = () => {
  return (
    <div className="home-div">
      <div className="home-main-cont">
        <div className="home-text">
          <p className="name-text">Your Trusted Yard Cleaning Partner</p>
          <p className="home-description">
            We are <span className="company-name">Yard Care</span>, your
            dedicated yard cleaning experts. With a commitment to maintaining
            clean, beautiful outdoor spaces, we take pride in transforming your
            yards into vibrant havens. From meticulous lawn care to eco-friendly
            debris removal, we're here to rejuvenate your surroundings while
            upholding our responsibility to keep the environment green. Welcome
            to a world where your yard's beauty meets our passion for clean,
            sustainable living.
          </p>
          <div className="home-links-container">
            <Link to="/services" className="services-link">
              WHAT WE DO
            </Link>
            <Link to="/book" className="book-link">
              BOOK A CLEAN-UP
            </Link>
          </div>
        </div>
        <img src={homeDark} alt="plantImage" className="home-image" />
      </div>
      <div className="home-service-list">
        <p className="home-service">Lawn Mowing and Maintenance</p>
        <p className="home-service">Landscaping Enhancements</p>
        <p className="home-service">Garden Care</p>
        <p className="home-service">Leaf and Debris Removal</p>
        <p className="home-service">Hardscape Cleaning</p>
      </div>
      <WhyUs />
    </div>
  );
};

export default Home;
