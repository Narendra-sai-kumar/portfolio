import React from 'react';
import './Certifications.css';

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-line"></div>
        </div>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <p className="cert-name">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
