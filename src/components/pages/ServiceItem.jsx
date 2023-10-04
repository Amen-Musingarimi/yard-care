import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ name, description, image }) => {
  return (
    <div className="service-item-container">
      <img src={image} alt="ServiceImage" className="service-image" />
      <h4 className="service-name">{name}</h4>
      <p className="service-description">{description}</p>
      <Link to="/book" className="redirect-btn">
        Book A Service
      </Link>
    </div>
  );
};

export default ServiceItem;
