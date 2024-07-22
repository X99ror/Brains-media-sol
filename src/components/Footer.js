import {  FaGlobe, FaInstagram, FaLandmark, FaLinkedin, FaMailBulk, FaPhoneAlt,  FaWhatsapp } from "react-icons/fa"
import "./styles/Footerstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"



const Footer = () => {
  return (
    <div id="contact" className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="contact">
                   <h4> <FaLandmark size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                   Plot No 28, 2nd Floor, Ganeshpur Road,
                   Belagavi - Karnataka 591108</h4>
                </div>
                <div className="contact">
                   <h4> <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                    contact@brainsmediasolutions.com</h4>
                </div>
                <div className="contact">
                   <h4> <FaPhoneAlt size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                   +(91) 953 553 3588
                     +(91) 994 536 3588</h4>
                </div>
                <div className="contact">
                   <h4> <FaGlobe size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                   <NavLink className='web' to='http://www.brainsmediasolutions.com/'>http://www.brainsmediasolutions.com/</NavLink></h4>
                </div>
            </div>

            <div className="right">
            <div className="Social">
             <FaInstagram size={30} style={{color:"#fff" , marginRight:"2rem"}}/>
             <FaLinkedin size={30} style={{color:"#fff" , marginRight:"2rem"}}/>
             <FaWhatsapp size={30} style={{color:"#fff" , marginRight:"2rem"}}/>
            </div>

            </div>
        </div>

    </div>
  )
}

export default Footer;