import React from 'react';
import { SiCodeforces } from 'react-icons/si';
import { FaTrophy, FaTerminal, FaCode } from 'react-icons/fa';
import './CPStats.css';

const CPStats = () => {
  const stats = [
    {
      platform: 'Codeforces',
      handle: 'UnpairedNur008',
      solved: '700+',
      icon: <SiCodeforces />,
      link: 'https://codeforces.com/profile/UnpairedNur008',
      color: '#1f8acb'
    },
    {
      platform: 'Beecrowd',
      handle: '1034900',
      solved: '200+',
      icon: <FaTerminal />, // Using FaTerminal instead of SiBeecrowd to be safe
      link: 'https://judge.beecrowd.com/en/profile/1034900',
      color: '#fbbe00'
    },
    {
      platform: 'VJudge',
      handle: 'nur_cse_diu',
      solved: 'Active',
      icon: <FaCode />,
      link: 'https://vjudge.net/user/nur_cse_diu',
      color: '#4caf50'
    }
  ];

  return (
    <section id="cp" className="cp-stats">
      <h2 className="section-title">Competitive Programming</h2>
      <p className="section-subtitle">Problem solving is at the heart of what I do.</p>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <a key={index} href={stat.link} target="_blank" rel="noreferrer" className="stat-card">
            <div className="stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
            <h3 className="stat-platform">{stat.platform}</h3>
            <p className="stat-handle">{stat.handle}</p>
            <div className="stat-count">
              <FaTrophy className="trophy-icon" />
              <span>{stat.solved} Problems Solved</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CPStats;
