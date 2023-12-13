import React, { useState, useEffect } from 'react';
import customerTestimonials from '../../helpers/testimonialData';
import '../../styles/Testimonials.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { FaQuoteLeft } from 'react-icons/fa';

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

  const previousCard = () => {
    setCurrentCardIndex(
      (prevIndex) =>
        (prevIndex - 1 + customerTestimonials.length) %
        customerTestimonials.length
    );
  };

  const nextCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + 1) % customerTestimonials.length
    );
  };

  const currentCard = customerTestimonials[currentCardIndex];

  return (
    <div className="testimonialsContainer">
      <h2 className="sectionHeading">What People Think About Us</h2>
      <div className="borderTop"></div>
      <div className="quoteContainer">
        <button className="quoteBtn" onClick={previousCard}>
          <GrPrevious className="icon" />
        </button>
        <div className="quoteCard">
          <img src={currentCard.image} alt="UserImage" className="userImager" />
          <span className="quoteSign">
            <FaQuoteLeft />
          </span>
          <p className="quote">{currentCard.testimonial}</p>
          <div className="nameCont">
            <h3 className="clientName">{currentCard.name}</h3>
            <p className="clientProfession">{currentCard.location}</p>
          </div>
        </div>
        <button className="quoteBtn" onClick={nextCard}>
          <GrNext className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
