import { NavLink } from 'react-router-dom';
import '../components/styles/NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="nav-container">
        <h1 className="companyName">Yard Care Cleaners</h1>
        <div className="nav-links">
          <NavLink to="/" exact="true" activeclassname="active">
            Services
          </NavLink>
          <NavLink to="/pricing" activeclassname="active">
            Pricing
          </NavLink>
          <NavLink to="/getAquote" activeclassname="active">
            Get a Quote
          </NavLink>
          <NavLink to="/becomeAmember" activeclassname="active">
            Become A Member
          </NavLink>
          <NavLink to="/contactUs" activeclassname="active">
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
