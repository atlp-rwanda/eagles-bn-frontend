import React, { useState } from 'react';
/* import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as Logo } from '../assets/logo.svg'; */
import './header.scss';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            {/* <Logo className="logo" /> */}
            Logo
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
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          // <CloseMenu className="menu-icon" />
          <span>Close</span>
        ) : (
          // <MenuIcon className="menu-icon" />
          <span>Menu</span>
        )}
      </div>
    </div>
  );
};

export default Header;
