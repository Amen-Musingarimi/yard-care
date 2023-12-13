import React, { useState, useEffect } from 'react';
import customerTestimonials from '../../helpers/testimonialData';
import '../../styles/Testimonials.css';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';

const Testimonials = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex + 1) % customerTestimonials.length
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentCard = customerTestimonials[currentCardIndex];

  return (
    <div className="testimonialsContainer">
      <div className="heading-cont">
        <h2 className="sectionHeading">We Give Awesome Service,</h2>
        <h2 className="sectionHeading">
          See How <span className="dif-text">Customers Love Us.</span>
        </h2>
      </div>

      <div className="quoteContainer">
        <div className="quote-cont">
          <ImQuotesLeft />
          <p className="quote">{currentCard.testimonial}</p>
          <ImQuotesRight />
        </div>
        <div className="customer-details">
          <img
            src={currentCard.image}
            alt="Customer"
            className="customer-image"
          />
          <h4 className="customer-name">{currentCard.name}</h4>
          <p className="customer-location">{currentCard.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
