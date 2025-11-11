import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 Saranyar.becse@gmail.com. All rights reserved.</p>
            <p>Made with <span className="heart">♥</span>React.js</p>
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">Back to Top</a>
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;