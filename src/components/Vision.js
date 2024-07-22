import React from 'react';
import './styles/Vision.css';

const Vision = () => {
  return (
    <section id='vision' className="vision-section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>
              At Brains Media Solutions, our vision is to be at the forefront of digital innovation, empowering businesses to thrive in the digital era. We aim to revolutionize the way companies interact with technology, making it more accessible, efficient, and impactful.
            </p>
            <p>
              We envision a world where every business, regardless of size, can harness the power of digital solutions to achieve their full potential. Through cutting-edge technology, creative strategies, and a commitment to excellence, we strive to shape a future where digital transformation drives sustainable growth and success.
            </p>
          </div>
          <div className="vision-image">
            <img src="/assets/img2.jpg" alt="Our Vision" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
