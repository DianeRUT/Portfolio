import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My <span style={{ color:'#64ffda'}}>Projects</span></h2>
      <div className="project-grid">
        <div className="project-card">
        <img src="11.jpg" alt="Project 1" />
          <h3>AI Chatbot for Customer Support</h3>
          <p>An AI-driven chatbot to provide efficient and personalized customer service. 🚀</p>
        </div>
        <div className="project-card">
        <img src="12.png" alt="Project 1" />
          <h3>Responsive E-Commerce Design</h3>
          <p>Designed a responsive layout for an e-commerce site prototype to enhance user experience. 🌐</p>
        </div>
        <div className="project-card">
        <img src="13.png" alt="Project 1" />
          <h3>Future Work</h3>
          <p>Stay tuned for exciting projects! More innovative ideas on the way. 🔧⏳</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

























































// src/components/Projects.js
// import React from 'react';
// import ProjectCard from './ProjectCard';

// const projects = [
//   {
//     title: "Project One",
//     description: "An amazing project built with Node.js and React.",
//     image: "Restaurant Chatbot.png",  // Add image path here
//   },
 
// ];

// function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <h2>Projects</h2>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;
