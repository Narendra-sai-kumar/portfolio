import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-code"></i> Frontend
            </h3>
            <div className="skill-tags">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-server"></i> Backend
            </h3>
            <div className="skill-tags">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-tools"></i> Tools
            </h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-vial"></i> Testing
            </h3>
            <div className="skill-tags">
              {skills.testing.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
