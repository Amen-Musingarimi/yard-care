import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../styles/FooterSocials.css';

const FooterSocials = () => {
  return (
    <div className="socials-container">
      <Link>
        <FaFacebook />
      </Link>
      <Link>
        <FaTwitter />
      </Link>
      <Link>
        <FaInstagram />
      </Link>
      <Link>
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default FooterSocials;
