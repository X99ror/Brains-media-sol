import React from 'react';
import Slider from 'react-slick';
import Intro1 from "../assets/intro1.jpg"
import Intro2 from "../assets/intro2.jpg"
import Intro3 from "../assets/intro3.jpg"
import Intro4 from "../assets/intro4.jpg"
import  './styles/ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    Intro1,
    Intro2,
    Intro3,
    Intro4
    
  ];

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
