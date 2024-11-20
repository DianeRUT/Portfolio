// src/components/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-fixed">
      <div className="contact">
        <a href="https://x.com/DiRutagengwa" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="contact-icon" />
        </a>

        <a href="www.linkedin.com/in/diane-ingabire-rutagengwa-065815134" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
        </a>
        <a href="https://github.com/DianeRUT" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
        </a>

        <a href="mailto:ingabirerdianna250@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
