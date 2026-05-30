import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Technologies',
      skills: ['React', 'Node.js', 'Vite', 'Swing', 'Tailwind CSS']
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'IntelliJ IDEA', 'Maven', 'Gradle']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((cat, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title accent">{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
