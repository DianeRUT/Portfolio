import React, { useState, useEffect } from "react";

function Header() {
  const roles = ["Software Engineer", "IT Supporter", "Digital Marketer"];
  const [currentRole, setCurrentRole] = useState(0); // This is used to track the role index.

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [roles.length]);

  return (
    <header className="header">
      <img src="/k.jpg" alt="Your Name" className="profile-picture" />
     
      <div className="container">
      <p className="paragraph size32">Hello, It’s Me! 👋</p>
      <p className="paragraph size64">
        Diane INGABIRE RUTAGENGWA
      </p>
      <p className="paragraph size32">
        And I’m{" "}
        <span className="rotating-text">{roles[currentRole]}</span>
      </p>
    </div>
      <p className="paragraph size32">A Full-Stack Developer, Building robust solutions that power ideas—front to back.🚀</p>
  
      <a
          href="/D resume.pdf" 
          rel="noopener noreferrer"
          className="cta-button"
        >
          Download CV <span className="arrow">→</span>
        </a>
    </header>
  );
}

export default Header;
