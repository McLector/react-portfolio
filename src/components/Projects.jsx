import React, { useState } from 'react';
import bookIcon from '../assets/book.png';
import houseIcon from '../assets/house.png';
import websiteIcon from '../assets/website.png';

function Projects() {
  const [activeDetails, setActiveDetails] = useState(null);

  const toggleDetails = (index) => {
    setActiveDetails(activeDetails === index ? null : index);
  };

  const projects = [
    {
      title: 'Book Management System (C++)',
      icon: bookIcon,
      description: 'A command-line application to manage a book collection.',
      details: `• Built using C++ with clean terminal UI.\n
• Supports adding unlimited book entries.\n
• Includes real-time keyword-based search.\n
• Features exit option that instantly terminates program.\n
• Designed for beginners and helps practice file I/O, structs, and dynamic memory.`,
    },
    {
      title: 'Housing Budget Calculator',
      icon: houseIcon,
      description: 'Estimates total costs and time for housing projects.',
      details: `• Calculates paint cost, labor cost, and total expenses based on room dimensions.\n
• Estimates days needed for painting and flooring tasks.\n
• Uses functions for modularity and clean logic.\n
• Great exercise in math operations, constants, and flow control.\n
• Could be extended to handle multiple houses or units.`,
    },
    {
      title: 'React Portfolio Website',
      icon: websiteIcon,
      description: 'Single-page application portfolio built in React.',
      details: `• Responsive and mobile-friendly using Bootstrap and custom CSS.\n
• Components for About Me, Projects, and Contact sections.\n
• Version controlled using Git and deployed to GitHub.\n
• Image background with a cool blue theme.\n
• Great practice for React props, hooks, layout, and styling.`,
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-description">
        Here are a few of the projects I’ve worked on recently.
      </p>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.icon} alt={`${project.title} icon`} className="project-icon" />
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="see-more-btn" onClick={() => toggleDetails(index)}>
              {activeDetails === index ? 'Hide details' : 'See more details'}
            </button>
            {activeDetails === index && (
              <div className="project-details">
                {project.details.split('\n').map((line, idx) => (
                  <p key={idx}>{line.trim()}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
