import React, { useState } from 'react';
import './navigation.scss';
import logo from '../../../components/assets/logo.png';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            {/*<Logo className="logo" />*/}
            <img src={logo} alt="app-logo" />
          </a>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">CONTACT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">BLOG</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <span className="menu-icon">Close</span>
          // <CloseMenu className="menu-icon" />
        ) : (
          <span className="menu-icon">Menu</span>
          // <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
