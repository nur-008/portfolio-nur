import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a B.Sc. student in Computer Science and Engineering at <span className="accent">Daffodil International University</span>, 
            expected to graduate in 2028. My journey in coding started in my first semester, and I've been 
            hooked on problem-solving ever since.
          </p>
          <p>
            I believe that every complex problem has a logical solution. My background in competitive 
            programming has sharpened my analytical skills and taught me how to write efficient, 
            clean code under pressure.
          </p>
          <div className="about-info">
            <div className="info-item">
              <strong>Location:</strong> Naogaon, Bangladesh
            </div>
            <div className="info-item">
              <strong>Education:</strong> B.Sc. in CSE, DIU
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
