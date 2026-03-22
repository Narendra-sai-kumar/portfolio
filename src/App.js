import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { resumeData } from './data/resumeData';
import './App.css';

const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'contact', title: 'Contact' },
];

function App() {
  return (
    <div className="app">
      <Navbar sections={sections} />
      <main>
        <Hero data={resumeData} />
        <About data={resumeData} />
        <Skills skills={resumeData.skills} />
        <Experience experience={resumeData.experience} />
        <Education education={resumeData.education} />
        <Projects projects={resumeData.projects} />
        <Certifications certifications={resumeData.certifications} />
        <Contact data={resumeData} />
      </main>
      <Footer name={resumeData.name} />
    </div>
  );
}

export default App;
