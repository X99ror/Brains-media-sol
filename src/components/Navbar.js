import { Link } from "react-router-dom"
import "./styles/Navbarstyles.css"
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click,setClick]= useState(false);
    const handleOnclick = () => setClick(!click);
  return (
    <>
    <div className="header">
        <Link to="/">
             <h1>BRAINS MEDIA.</h1>
        </Link>     
             <ul className={click ? "nav-menu active":"nav-menu"}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                <a href="#mission">Mission</a>
                </li>
                <li>
                    <a href="#vision">Vision</a>
                </li>
                <li>
                    <a href="#about-us">About Us</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
             </ul>

        <div className="hamburger" onClick={handleOnclick}>
            {click ? (<FaTimes size={20} style={{color : "#000"}}/>
            ):(<FaBars size={20} style={{color : "#000"}}/>)}
        </div>
    </div>
    </>
  )
}

export default Navbar
