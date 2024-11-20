import React from 'react';

function Header() {
  return (
    <header className="header">
      <img src="/k.jpg" alt="Your Name" className="profile-picture" />
      <p>
        A Full-Stack Developer, Building robust solutions that power ideas—front to back.🚀
      </p>
      <a href="#projects" className="cta-button">Explore My Work</a>
    </header>
  );
}

export default Header;
