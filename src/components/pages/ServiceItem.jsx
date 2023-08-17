import React from 'react';

const ServiceItem = ({ name, description, image }) => {
  return (
    <div className="service-item-container">
      <img src={image} alt="ServiceImage" className="service-image" />
      <h4 className="service-name">{name}</h4>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceItem;
