import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">Hi there, I'm</h2>
        <h1 className="hero-title">Nur Mohammad</h1>
        <h3 className="hero-role accent">Competitive Programmer & Aspiring Software Engineer</h3>
        <p className="hero-description">
          Passionate about solving complex algorithmic problems and building robust software solutions. 
          Currently pursuing B.Sc. in CSE at Daffodil International University.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <div className="social-links">
            <a href="https://github.com/nur-008" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nur-mohammad-6377a8359/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://vjudge.net/user/nur_cse_diu" target="_blank" rel="noreferrer" title="VJudge Profile"><FaCode /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
