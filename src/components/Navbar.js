// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><a href="#about" className="nav-item">About</a></li>
        <li><a href="#projects" className="nav-item">Projects</a></li>
        <li><a href="#resume" className="nav-item">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
