import React from 'react';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <i className="fas fa-folder-open"></i>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
