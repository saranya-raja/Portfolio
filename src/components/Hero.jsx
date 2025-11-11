import React, { useState, useEffect } from 'react';
import './styles.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = ['Web Developer', 'UI/UX Designer', 'Creative Thinker', 'Problem Solver'];

  // Function to handle resume view
  const handleResumeView = () => {
    const resumeUrl = '/Saranya_Raja_Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(tick, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles]);

  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in">
        <div className="hero-text">
          <div className="greeting">Hello, I'm</div>
          <h1 className="hero-title">
            <span className="name-glow">Saranya</span> Raja
          </h1>
          <h2 className="hero-subtitle">
            I'm a <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
Enthusiastic Python Full Stack Developer skilled in HTML, CSS, JavaScript, Python, and Django for creating responsive web applications.
Passionate about building user-friendly, scalable solutions and continuously learning new technologies.
Eager to contribute to real-world projects and grow as a versatile developer.
          </p>
          <div className="hero-buttons">
            <button onClick={handleResumeView} className="btn btn-primary">
              <i className="fas fa-eye"></i>
              View Resume
            </button>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-paper-plane"></i>
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="computer-scene">
            <div className="computer">
              {/* Monitor */}
              <div className="monitor">
                <div className="monitor-frame">
                  <div className="monitor-screen">
                    <div className="screen-content">
                      <div className="welcome-text">
                        <span className="hi-text">Hi!</span>
                        <span className="welcome-text-main">Welcome</span>
                      </div>
                      <div className="terminal">
                        <div className="terminal-header">
                          <div className="terminal-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                          </div>
                          <span className="terminal-title">terminal — bash — 80×24</span>
                        </div>
                        <div className="terminal-body">
                          <div className="command-line">
                            <span className="prompt">visitor@saranya-portfolio:~$</span>
                            <span className="command"> welcome</span>
                          </div>
                          <div className="output-line">
                            <span className="output">Hello! I'm Saranya 👋</span>
                          </div>
                          <div className="output-line">
                            <span className="output">Welcome to my creative space!</span>
                          </div>
                          <div className="output-line">
                            <span className="output blinking-cursor">_</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="screen-glow"></div>
                  </div>
                </div>
                <div className="monitor-stand">
                  <div className="stand-neck"></div>
                  <div className="stand-base"></div>
                </div>
              </div>
              
              {/* Keyboard */}
              <div className="keyboard">
                <div className="keyboard-body">
                  <div className="keyboard-keys">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className="key"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="floating-elements">
                <div className="floating-element element-1">{"</>"}</div>
                <div className="floating-element element-2">{/* CSS Icon */}</div>
                <div className="floating-element element-3">{/* JS Icon */}</div>
                <div className="floating-element element-4">⚛️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to Explore</p>
      </div>
    </section>
  );
};

export default Hero;