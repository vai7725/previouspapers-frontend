import React from 'react';
import logo from '../assets/logo.webp';
import { RxCross2 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/Context';
import { AiOutlineHome } from 'react-icons/ai';
import { BiHelpCircle, BiUser } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';
import { GrLogout } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../helper/helperFns';
import { Toaster, toast } from 'react-hot-toast';

const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch } = GlobalContext();
  const { smNavLinksOpen, isUserLoggedIn, userCredentials, profileModalOpen } =
    state;

  const { firstName, email } = userCredentials;

  const firstLetter = isUserLoggedIn && firstName.split('')[0].toUpperCase();

  const closeSmNavLinks = () => dispatch({ type: 'CLOSE_SM_NAV_LINKS' });
  const closePopUp = () => {
    dispatch({ type: 'CLOSE_POP_UP' });
  };

  const activeStyle = ({ isActive }) => {
    if (isActive) {
      return {
        opacity: 1,
      };
    }
  };

  return (
    <header className="header">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
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

          {/* <li>
            <NavLink style={activeStyle} to="/contribute">
              Contribute
            </NavLink>
          </li> */}
        </ul>
        <div className="ham-login">
          {isUserLoggedIn ? (
            <button
              className={`${
                profileModalOpen
                  ? 'profile_btn_group_border profile_group_btn btn'
                  : 'profile_group_btn btn'
              }`}
              onClick={() => {
                return dispatch({
                  type: 'TOGGLE_PROFILE_BTN_MODAL',
                  payload: !profileModalOpen,
                });
              }}
            >
              <span className="btn profile_btn">{firstLetter}</span>
            </button>
          ) : (
            <Link to="/login" className="btn login-btn">
              Log In
            </Link>
          )}

          <button
            className="btn ham-btn"
            onClick={() => {
              return dispatch({
                type: 'TOGGLE_SM_NAV_LINKS',
                payload: smNavLinksOpen,
              });
            }}
          >
            {smNavLinksOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>
      <div
        className={`${
          smNavLinksOpen ? 'popUP-box-show popUP-box' : 'popUP-box'
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

          {/* <li>
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
          </li> */}
        </ul>
      </div>
      <div
        className={`${
          profileModalOpen ? 'popUP-box-show popUP-box' : 'popUP-box'
        }`}
      >
        <ul className="popUp-modal-content">
          <header className="popUp-modal-head">
            <span className="btn profile_btn profile_btn_popUp">
              {firstLetter}
            </span>{' '}
            {email}
          </header>
          <main className="popUp-modal-links">
            <li>
              <Link
                onClick={closePopUp}
                to={`/profile`}
                className="popUp-modal-link"
              >
                <BiUser className="popUp_modal_icon" />
                Profile
              </Link>
            </li>
          </main>
          <footer className="popUp-modal-footer">
            <button
              className="logOut-btn btn"
              onClick={() => logOutUser(navigate, dispatch, toast)}
            >
              <span onClick={closePopUp} className="popUp-modal-link">
                <GrLogout className="popUp_modal_icon" />
                Log out
              </span>
            </button>
          </footer>
        </ul>
      </div>
    </header>
  );
};

export default Header;
