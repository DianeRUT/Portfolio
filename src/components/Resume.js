import React from "react";

const Resume = () => {
  const experiences = [
    {
      role: "IT Support Technician",
      company: "INKLUDI",
      duration: "September 2022 - Present",
      description: [
        "Led as a team leader providing IT solutions.",
        "Performed troubleshooting and maintenance.",
        "Handled operating system installation and configuration.",
      ],
    },
    {
      role: "Digital Marketing Intern",
      company: "Quakebrandfix",
      duration: "June 2021 - May 2022",
      description: [
        "Identified trends and insights for marketing strategies.",
        "Planned and directed marketing campaigns.",
        "Optimized content for the website and social media platforms.",
        "Handled customer complaints with empathy and composure.",
      ],
    },
    {
      role: "Marketing Assistant",
      company: "Catchyz",
      duration: "April 2020 - January 2021",
      description: [
        "Supported the marketing team in day-to-day tasks.",
        "Assisted in planning and executing marketing campaigns.",
      ],
    },
    {
      role: "IT Intern",
      company: "Airtel Rwanda",
      duration: "December 2019 - March 2020",
      description: [
        "Supported IT operations and maintenance.",
        "Worked on basic troubleshooting tasks.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "kLab.rw",
      duration: "September 2017 - August 2018",
      description: [
        "Developed software solutions under supervision.",
        "Collaborated with the engineering team for platform enhancements.",
      ],
    },
  ];

  const education = [
    {
      degree: "Higher National Diploma",
      field: "Computer Software Engineering",
      institution: "AltSchool Africa",
      duration: "September 2023 - September 2024",
    },
    {
      degree: "Bachelor's Degree",
      field: "Information Technology",
      institution: "University of Rwanda",
    },
  ];

  return (
    <section id="resume" className="resume-section">
      <h2>Experience</h2>
      <div className="resume-list">
        {experiences.map((experience, index) => (
          <div key={index} className="resume-item">
            <h3 className="resume-role">{experience.role}</h3>
            <h4 className="resume-company">
              {experience.company} <span>• {experience.duration}</span>
            </h4>
            <ul className="resume-description">
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Education</h2>
      <div className="resume-list">
        {education.map((edu, index) => (
          <div key={index} className="resume-item">
            <h3 className="resume-degree">{edu.degree} in {edu.field}</h3>
            <h4 className="resume-institution">{edu.institution}</h4>
            {edu.duration && <p className="resume-duration">{edu.duration}</p>}
          </div>
        ))}
      </div>

      {/* See Full CV Link */}
      <div className="cv-link-container">
        <a
          href="/D resume.pdf" // Replace with the correct path to your CV
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
        >
          See Full CV <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Resume;
