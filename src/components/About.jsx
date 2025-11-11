import React from 'react';
import './styles.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content fade-in">
        <div className="about-text">
          <h3>Creating Digital Experiences with Passion</h3>
          <p>
            I'm a passionate developer and designer who loves to create 
            beautiful, functional websites and applications. With a keen eye 
            for design and attention to detail, I bring ideas to life through code.
          </p>
          <p>
            When I'm not coding, you can find me exploring new design trends, 
            reading about the latest tech innovations, or enjoying a good cup 
            of coffee while sketching out new ideas.
          </p>
        </div>
        
        <div className="about-visual">
          <div className="floating-elements">
            <div className="floating-element element-1">
              <i className="fas fa-code"></i>
            </div>
            <div className="floating-element element-2">
              <i className="fas fa-palette"></i>
            </div>
            <div className="floating-element element-3">
              <i className="fas fa-magic"></i>
            </div>
            <div className="floating-element element-4">
              <i className="fas fa-rocket"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;