
import React from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id='about-us' className="about">
      <div className="container">
        <div className="content">
          <div className="text">
            <h2>About Us</h2>
            <p>
              Brains Media Solutions is dedicated to transforming your ideas into dynamic digital experiences.
              We specialize in providing innovative solutions that help businesses grow and thrive in the digital age.
              Our team of experts is committed to delivering high-quality services tailored to meet your unique needs.
            </p>
            <p>
              With years of experience in the industry, we understand the importance of staying ahead of the curve.
              We leverage the latest technologies and best practices to ensure that your business stands out in a crowded market.
              Partner with us and let us help you achieve your goals with creativity and efficiency.
            </p>
            <button className="cta-button">Learn More</button>
          </div>
          <div className="image">
            <img src="/assets/img1.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
