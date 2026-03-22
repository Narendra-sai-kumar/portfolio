import React from 'react';
import './Experience.css';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line"></div>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="job-role">{job.role}</h3>
                  <span className="job-duration">{job.duration}</span>
                </div>
                <div className="timeline-company">
                  <i className="fas fa-building"></i> {job.company}
                  <span className="location"> | <i className="fas fa-map-marker-alt"></i> {job.location}</span>
                </div>
                <ul className="job-highlights">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
