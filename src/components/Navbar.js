import React, { useState } from 'react';
import './Navbar.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={isOpen ? "menu open" : "menu"}>
        <ul className='ul_items'>
          <li className='nav_item'>Home</li>
          <li className='nav_item'>About</li>
          <li className='nav_item'>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
