import React from 'react';

const Services = () => {
  return (
    // Services Section
    <section id="services" className="services">
      <h2>Our <span style={{ color:'#64ffda'}}> Services </span>  </h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Crafting responsive and scalable websites using modern frameworks.</p>
          <button>Learn More</button>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Designing user-friendly and visually appealing interfaces.</p>
          <button>Learn More</button>
        </div>
        <div className="service-card">
          <h3>API Integration</h3>
          <p>Building secure and efficient APIs for seamless communication.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
