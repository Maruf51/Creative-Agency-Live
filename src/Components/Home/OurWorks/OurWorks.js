import React from 'react';
import './OurWorks.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'

const OurWorks = () => {
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          autoplay: true,
          slidesToShow: 3,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          responsive: [
              {
                breakpoint: 991.98,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
              }
          ]
        };
   
    return (
        <div className="our-works py-5">
            <div className="container our-works-container">
                <h2 className="text-white text-center p-5">Here are some of <span className="green-text">our works</span></h2>
                <Slider {...settings}>
                <div>
                    <img className="carousel-image" src={carousel1} alt="1" />
                </div>
                <div>
                    <img className="carousel-image" src={carousel2} alt="2" />
                </div>
                <div>
                    <img className="carousel-image" src={carousel4} alt="3" />
                </div>
                <div>
                    <img className="carousel-image" src={carousel5} alt="4" />
                </div>
                </Slider>
            </div>
        </div>
    );
};

export default OurWorks;