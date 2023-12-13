import React from 'react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';
import { MdOutlinePhone, MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="links-container">
        <div className="company-info">
          <h4 className="company-name">Yard Care</h4>
          <p className="company-pitch">
            We specialize in transforming ordinary yards into stunning retreats,
            offering simplicity, elegance, and a touch of beauty. Let your
            backyard become a masterpiece of cleanliness and tranquility with
            our dedicated services
          </p>
        </div>
        <div className="important-links">
          <h4 className="container-heading">Important Links</h4>
          <div className="links">
            <Link className="link">Support</Link>
            <Link className="link">Privacy & Policy</Link>
            <Link className="link">Terms & Conditions</Link>
            <Link className="link">Our Network</Link>
          </div>
        </div>
        <div className="important-links">
          <h4 className="container-heading">Our Services</h4>
          <div className="links">
            <Link className="link">Garden Care</Link>
            <Link className="link">Hardscape Cleaning</Link>
            <Link className="link">Landscaping Enhancements</Link>
            <Link className="link">Mulching & Soil Care</Link>
          </div>
        </div>
        <div className="important-links">
          <h4 className="container-heading">Contact Us</h4>
          <div className="links">
            <p className="link flex-link">
              <MdOutlinePhone />
              +263-774-065-463
            </p>
            <Link className="link flex-link">
              <MdOutlineEmail />
              takudzwamusinga@gmail.com
            </Link>
            <button className="message-btn">SEND US A MESSAGE</button>
          </div>
        </div>
      </div>
      <div className="copyrights-container">
        <p className="copyrights-text"></p>
      </div>
    </footer>
  );
};

export default Footer;
