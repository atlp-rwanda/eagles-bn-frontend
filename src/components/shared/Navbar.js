import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import blankProfile from '../assets/blank-profile-picture.png';
import '../styles/Navbar.scss';

const Navbar = () => (
  <nav className="navbar" data-testid="navbar">
    <NavLink to="/" className="navbar__logo">
      <img src={logo} alt="app-logo" />
    </NavLink>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li className="profile-menu">
        <NavLink to="/profile">
          <img src={blankProfile} alt="profile" />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
