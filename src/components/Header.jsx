import React, { useState, useEffect } from 'react';
import './styles.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'About', icon: 'fas fa-user' },
    { name: 'Skills', icon: 'fas fa-code' },
    { name: 'Projects', icon: 'fas fa-briefcase' },
    { name: 'Contact', icon: 'fas fa-envelope' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <span className="logo-text">Saran</span>
          <div className="logo-glow"></div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  href={`#${item.name.toLowerCase()}`} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;