import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  const [displayMenu, setdisplayMenu] = useState(false);
  const toggleMenu = () => {
    setdisplayMenu(!displayMenu);
  };
  return (
    <header>
      <nav>
        <div className='logo'>
          <h1>Donaldo</h1>
        </div>
        <ul className={displayMenu ? 'open nav-list' : 'nav-list'}>
          <li className='nav-list-item'>
            <NavLink exact to='/' className='nav-link' onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          {/* <li className='nav-list-item'>
            <NavLink to='/Portfolio' className='nav-link' onClick={toggleMenu}>
              Portfolio
            </NavLink>
          </li> */}
          <li className='nav-list-item'>
            <NavLink to='/About' className='nav-link' onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          {/* <li className='nav-list-item'>
            <NavLink to='/Blog' className='nav-link' onClick={toggleMenu}>
              Blog
            </NavLink>
          </li> */}
          <li className='nav-list-item'>
            <NavLink to='/Contact' className='nav-link' onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          className={
            displayMenu
              ? 'hamburger hamburger--spin is-active'
              : 'hamburger hamburger--spin'
          }
          type='button'
          onClick={toggleMenu}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
        <p className='nav-footer'>Copyright &copy; 2021 DONALDO</p>
      </nav>
    </header>
  );
};

export default Navigation;
