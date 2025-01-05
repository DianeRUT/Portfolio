// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><a href="#about" className="nav-item">About</a></li>
        <li><a href="#projects" className="nav-item">Projects</a></li>
        <li><a href="#services" className="nav-item">Services</a></li>
        <li><a href="#messages" className="nav-item">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
