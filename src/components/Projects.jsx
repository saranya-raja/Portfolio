import React from 'react';
import './styles.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution with React and Node.js',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Creative portfolio with 3D animations and smooth transitions',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Three.js', 'GSAP'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity app with drag-and-drop functionality',
      image: '/api/placeholder/400/250',
      tags: ['Vue.js', 'Firebase', 'SCSS'],
      liveLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid fade-in">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="image-placeholder"></div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href={project.codeLink} className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;