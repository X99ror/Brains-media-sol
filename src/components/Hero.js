import "./styles/Hero.css"
import React from 'react'
import IntroImg from "../assets/intro.jpg"


const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Space" />

        </div>
        <div className="content">
          
        <h1>"At Brains Media Solutions, we transform your ideas into dynamic digital experiences."</h1>
        
        
       
          
        
        </div>
    </div>
  )
}

export default Hero