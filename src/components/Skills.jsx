import React from 'react';
import './styles.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      icon: 'fas fa-laptop-code'
    },
    {
      category: 'Backend & Database',
      skills: ['Python', 'Django', 'Node js', 'Sql', 'Mysql'],
      icon: 'fas fa-palette'
    },
    {
      category: 'Tools',
      skills: ['Git', 'Webpack', 'VS Code', 'Chrome DevTools', 'NPM'],
      icon: 'fas fa-tools'
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container fade-in">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <i className={category.icon}></i>
              <h3>{category.category}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-visual">
        <div className="rotating-cube">
          <div className="cube-face front">React</div>
          <div className="cube-face back">JS</div>
          <div className="cube-face right">CSS3</div>
          <div className="cube-face left">HTML5</div>
          <div className="cube-face top">Python</div>
          <div className="cube-face bottom">Sql</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;