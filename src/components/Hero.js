import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={`${process.env.PUBLIC_URL}/assets/intro4.jpg`} alt="Space" />
      </div>
      <div className="content">
        <h1>At Brains Media Solutions, we transform your ideas into dynamic digital experiences.</h1>
      </div>
    </div>
  );
};

export default Hero;
