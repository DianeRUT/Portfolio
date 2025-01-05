// src/components/About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'; // Updated import
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About <span style={{ color:'#64ffda'}}>Me</span></h2>
      <p>
      My name is <strong>Diane INGABIRE RUTAGENGWA,</strong> And I'm a <strong>Software Developer</strong> who loves crafting seamless web experiences 🌐, an <strong>AI enthusiast</strong> turning ideas into intelligent solutions 🤖, an <strong>IT Support wizard</strong> solving tech puzzles 🛠️, and a <strong>Digital Marketer</strong> spreading brand magic ✨. I’m all about blending creativity with technology to make cool stuff happen! 🚀
      </p>
      <div className="skills-container">
        <h3>Core Skills</h3>
        <div className="skills-list">
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} className="skill-icon" />
            <span>React</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
            <span>MongoDB</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCode} className="skill-icon" />
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
