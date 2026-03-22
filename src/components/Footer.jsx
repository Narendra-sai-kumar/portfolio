import React from 'react';
import './Footer.css';

const Footer = ({ name }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">N</span>arendra
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/narendra-vanamadi/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/narendra-vanamadi" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
