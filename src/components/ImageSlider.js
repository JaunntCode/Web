import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img8 from "../assets/logo3.svg";
const images = [
    {
      src: {img8},
      alt: 'Image 1'
    },
    {
      src: {img8},
      alt: 'Image 2'
    },
    {
      src: {img8},
      alt: 'Image 3'
    }
  ];
  const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        }
      ]
    };
    return (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      );
    };  
export default ImageSlider;
