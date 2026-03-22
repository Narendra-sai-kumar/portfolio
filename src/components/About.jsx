import React from 'react';
import './About.css';

const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="placeholder-avatar">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="about-description">{data.summary}</p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4.5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
