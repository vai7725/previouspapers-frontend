import React from 'react';
import logo from '../assets/logo.webp';
import { RxCross2 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/Context';
import { AiOutlineHome } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';

const Header = () => {
  const { state, dispatch } = GlobalContext();
  const { smNavLinksOpen } = state;

  const toggleSmNavLinks = () => {
    return dispatch({
      type: 'TOGGLE_SM_NAV_LINKS',
      payload: smNavLinksOpen,
    });
  };
  const closeSmNavLinks = () => dispatch({ type: 'CLOSE_SM_NAV_LINKS' });

  const activeStyle = ({ isActive }) => {
    if (isActive) {
      return {
        opacity: 1,
      };
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink exact="true" to="/" style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to="/contact">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink style={activeStyle} to="/contribute">
              Contribute
            </NavLink>
          </li>
        </ul>
        <div className="ham-login">
          <Link to="/login" className="btn login-btn">
            Log In
          </Link>
          <button className="btn ham-btn" onClick={toggleSmNavLinks}>
            {smNavLinksOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>
      <div
        className={`${
          smNavLinksOpen
            ? 'sm-screen-links-show sm-screen-links'
            : 'sm-screen-links'
        }`}
      >
        <ul className="nav-links-sm">
          <li>
            <NavLink style={activeStyle} to="/" onClick={closeSmNavLinks}>
              <span className="nav-icons">
                <AiOutlineHome className="nav-icon" />
                Home
              </span>
              <BsArrowRight className="nav-arrow" />
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to="/about" onClick={closeSmNavLinks}>
              <span className="nav-icons">
                <HiOutlineUserGroup className="nav-icon" />
                About
              </span>
              <BsArrowRight className="nav-arrow" />
            </NavLink>
          </li>
          <li>
            <NavLink
              style={activeStyle}
              to="/contact"
              onClick={closeSmNavLinks}
            >
              <span className="nav-icons">
                <BiHelpCircle className="nav-icon" />
                Contact
              </span>
              <BsArrowRight className="nav-arrow" />
            </NavLink>
          </li>

          <li>
            <NavLink
              style={activeStyle}
              to="/contribute"
              onClick={closeSmNavLinks}
            >
              <span className="nav-icons">
                <FiUpload className="nav-icon" />
                Contribute
              </span>
              <BsArrowRight className="nav-arrow" />
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
