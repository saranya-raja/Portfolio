import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2, 
  Twitter,
  Send 
} from 'lucide-react';
import './styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Social media links
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/saranya-raja/'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/saranya-r-855bba312'


    },
    {
      name: 'LeetCode',
      icon: Code2,
      url: 'https://leetcode.com/saranya-raja/'
    },
   
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content fade-in">
          <div className="contact-info">
            <h3>Let's Create Something Amazing Together</h3>
            <p>
              I'm always interested in new opportunities and creative projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">EMAIL</span>
                  <span className="contact-value">Saranyar.becse@gmail.com</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">PHONE</span>
                  <span className="contact-value">+91 6374420413</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">LOCATION</span>
                  <span className="contact-value">Villupuram, Tamilnadu, India</span>
                </div>
              </div>
            </div>
            
            <div className="social-section">
              <h4>Follow Me On</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      className="social-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={social.name}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;