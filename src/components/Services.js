import React from 'react';
import './styles/Services.css';
import { FaCode, FaBullhorn, FaChartLine, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and modern websites tailored to your business needs.",
    cta: "Learn More"
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    description: "Enhancing your online presence with innovative marketing strategies.",
    cta: "Learn More"
  },
  {
    icon: <FaChartLine />,
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to attract more traffic.",
    cta: "Learn More"
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications for both Android and iOS platforms.",
    cta: "Learn More"
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description: "Designing visually appealing graphics that represent your brand identity.",
    cta: "Learn More"
  }
];

const Services = () => {
  return (
    <section id="services" className="service-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-content">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="cta-button">{service.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
