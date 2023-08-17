import React from 'react';
import '../styles/About.css';

const About = () => {
  const companyName = 'Yard Care';
  return (
    <div className="about-container">
      <h3 className="about-page-heading">About Us</h3>
      <div className="inception-container">
        <h4 className="about-section-heading">Our Inception</h4>
        <p className="about-section-description">
          Founded in the year 2023,{' '}
          <span className="company-name">{companyName}</span> emerged with a
          novel vision to redefine outdoor space care and maintenance. Our
          journey began with a team of dedicated individuals, passionate about
          curating cleaner, healthier, and more inviting yards for every
          community we serve.
        </p>
        <p className="about-section-description">
          With a fresh perspective and unwavering determination, we're poised to
          make a lasting impact on the way outdoor spaces are perceived and
          cherished. <span className="company-name">{companyName}</span> stands
          as a testament to our belief that even the smallest actions can lead
          to remarkable transformations.
        </p>
      </div>

      <div className="inception-container">
        <h4 className="about-section-heading">A Commitment to the Future</h4>
        <p className="about-section-description">
          We embrace the potential to set new standards in excellence and
          innovation. Our commitment to environmental stewardship and a greener
          tomorrow drives our every endeavor.
        </p>
        <p className="about-section-description">
          Since our establishment,{' '}
          <span className="company-name">{companyName}</span> has already begun
          weaving a network of satisfied customers and a reputation for
          delivering beyond expectations. We look forward to each opportunity to
          showcase our dedication to revitalizing outdoor spaces and to
          contribute to a more vibrant world.
        </p>
        <p className="about-section-description">
          Join us in this exciting journey of growth, transformation, and
          sustainable living.
        </p>
      </div>

      <div className="inception-container">
        <h4 className="about-section-heading">Our Expertise in Early Stages</h4>
        <p className="about-section-description">
          <span className="company-name">{companyName}</span> is quickly
          becoming a frontrunner in yard cleaning solutions. Our initial
          portfolio is a testament to our dedication to transforming ordinary
          outdoor spaces into remarkable landscapes. Our promise remains clear:
          customized solutions that cater to the unique needs of our clients.
        </p>
      </div>
      <div className="inception-container">
        <h4 className="about-section-heading">Vision</h4>
        <div className="dotted-border-container"></div>
        <p className="about-section-description">
          Crafting the future of pristine and inviting outdoor environments.
        </p>
      </div>
      <div className="inception-container">
        <h4 className="about-section-heading">Mission Ahead</h4>
        <div className="dotted-border-container"></div>
        <p className="about-section-description">
          Elevating outdoor lifestyles through innovative yard cleaning
          practices and environmental responsibility.
        </p>
      </div>

      <div className="inception-container">
        <h4 className="about-section-heading">Dedication to Quality</h4>
        <p className="about-section-description">
          <span className="company-name">{companyName}</span> is not just a yard
          cleaning service; it's a commitment to fostering positive change.
          While we're in the early stages of growth, our focus on quality is
          unyielding. Our commitment is rooted in a strict quality policy
          designed to ensure consistent excellence in every service we provide.
        </p>
        <p className="about-section-description">
          Aligned with industry regulations and customer expectations,{' '}
          <span className="company-name">{companyName}</span> is dedicated to
          delivering yard cleaning services that reflect our core values and
          dedication to creating a greener, cleaner world.
        </p>
      </div>

      <div className="inception-container">
        <h4 className="about-section-heading">Our Objectives</h4>
        <p className="about-section-description">
          At <span className="company-name">{companyName}</span>, our objectives
          include:
        </p>
        <ul>
          <li className="about-section-description">
            Crafting tailored yard cleaning solutions that set industry
            benchmarks.
          </li>
          <li className="about-section-description">
            Providing efficient services that balance cost-effectiveness and
            quality.
          </li>
          <li className="about-section-description">
            Garnering customer satisfaction and loyalty through exceptional
            service.
          </li>
          <li className="about-section-description">
            Building transparent communication channels that foster
            collaboration.
          </li>
          <li className="about-section-description">
            Nurturing sustainable growth that benefits both our company and the
            environment.
          </li>
          <li className="about-section-description">
            Fostering a team of passionate professionals through ongoing
            training and development.
          </li>
          <li className="about-section-description">
            Attracting top talent to join us on our journey, driving innovation
            and excellence.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
