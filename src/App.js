
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import Footer from './components/Footer'
import Mission from './components/Mission';



function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ImageSlider/>
    <Mission/>
    <AboutUs/>
    <Vision/>
    <Services/>
    <Footer/>
    
    </>
  );
}

export default App;
