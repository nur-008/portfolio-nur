import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Eid Greeting App',
      description: 'A React-based web application to send personalized Eid greetings to friends and family with a modern UI.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/nur-008/eid-greeting',
      demo: 'https://eid-greeting-23r7.vercel.app/',
    },
    {
      title: 'Library Management System',
      description: 'A comprehensive system to manage books, members, and transactions in a library environment (Work in Progress).',
      tags: ['Java', 'Swing', 'MySQL'],
      github: '#',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> Code</a>
                <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
