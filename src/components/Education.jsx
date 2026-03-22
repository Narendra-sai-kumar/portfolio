import React from 'react';
import './Education.css';

const Education = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">
                  <i className="fas fa-university"></i> {edu.institution}
                </p>
                <div className="edu-details">
                  <span><i className="far fa-calendar"></i> {edu.year}</span>
                  <span><i className="fas fa-star"></i> {edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
