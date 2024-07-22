import React from 'react';
import './styles/Mission.css';
import { FaBullseye, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

const missionPoints = [
  {
    icon: <FaBullseye />,
    title: "Achieve Excellence",
    description: "We strive for excellence in everything we do, delivering top-quality solutions that exceed our clients' expectations."
  },
  {
    icon: <FaHandsHelping />,
    title: "Support Growth",
    description: "Our mission is to support the growth of businesses by providing innovative and effective digital solutions."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovate Continuously",
    description: "We believe in continuous innovation, constantly seeking new ways to improve and stay ahead in the digital world."
  }
];

const Mission = () => {
  return (
    <section id="mission"  className="mission-section">
      <div className="container">
        <h2>Our Mission</h2>
        <div className="mission-content">
          {missionPoints.map((point, index) => (
            <div key={index} className="mission-card">
              <div className="icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
