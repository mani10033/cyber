
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import Img27 from '/src/images/home.png'
import Img28 from '/src/images/slide1.png'
import Img29 from '/src/images/slide2.png'
import Img30 from '/src/images/slide3.png'
import Img31 from '/src/images/slide4.png'
import Img32 from '/src/images/slide5.png'


function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
         <div className="slider">
          <img src={Img27} height={250} alt="" />
        </div> 
        <div className="slider">
        <img src={Img28}  height={250} alt="" />
        </div>
        <div className="slider">
        <img src={Img32} height={250} alt="" /> 
        </div>
        <div className="slider">
        <img src={Img30} height={250} alt="" />
        </div>
        <div className="slider">
        <img src={Img31} height={250} alt="" />
        </div>
        <div className="slider">
        <img src={Img29} height={250} alt="" />
        </div>
        
        
      </Slider>
    </div>
    
  );
}

export default Slide