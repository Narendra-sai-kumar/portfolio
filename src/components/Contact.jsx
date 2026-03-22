import React from 'react';
import './Contact.css';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations, opportunities, or just a friendly hello!</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{data.location}</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
