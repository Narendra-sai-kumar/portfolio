import React from 'react';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-badge">Welcome to My Portfolio</div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{data.name}</span>
        </h1>
        <h2 className="hero-subtitle">{data.title}</h2>
        <p className="hero-tagline">{data.tagline}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>
        <div className="hero-social">
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={`mailto:${data.email}`} aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
