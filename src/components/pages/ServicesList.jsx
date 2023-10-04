import React from 'react';
import '../styles/Services.css';
import ServiceItem from './ServiceItem';
import yardCleaningServices from '../helpers/services';
import '../styles/Services.css';

const ServicesList = () => {
  console.log(yardCleaningServices);
  return (
    <div className="services-container">
      <h3 className="services-heading">What We Offer</h3>
      <div className="services-items-container">
        {yardCleaningServices.map((service) => (
          <ServiceItem
            key={service.name}
            name={service.name}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
