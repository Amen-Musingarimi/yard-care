import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../components/styles/main.css';

const NavBar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>YCC</h3>
      <nav ref={navRef}>
        <NavLink to="/" exact="true" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/about" exact="true" activeclassname="active">
          About Us
        </NavLink>
        <NavLink to="/services" exact="true" activeclassname="active">
          Services
        </NavLink>
        <NavLink to="/contact" exact="true" activeclassname="active">
          Get A Quote
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
