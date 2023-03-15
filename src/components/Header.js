import React from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/Context';

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

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <button className="btn ham-btn" onClick={toggleSmNavLinks}>
          {smNavLinksOpen ? <FaTimes color="#fff" /> : <FaBars />}
        </button>
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
            <Link to="/" onClick={closeSmNavLinks}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeSmNavLinks}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSmNavLinks}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
