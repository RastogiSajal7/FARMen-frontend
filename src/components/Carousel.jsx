import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Wheat from '../assets/images/wheat.jpg';
import carouselagri from "../assets/images/carouselagri.png";
function MyCarousel() {
  return (
    <>
    <div className='p-12'>
    <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={1500}>
      <div>
        <img src={Wheat} alt="Vegetables and Fruits" />
        <p className=""></p>
      </div>
      <div>
        <img src={carouselagri} alt="Vegetables and Fruits" />
        <p className=""></p>
      </div>
      <div>
        <img src={Wheat} alt="Spices" />
        <p className=""></p>
      </div>
      <div>
        <img src={carouselagri} alt="Wheat" />
        <p className=""></p>
      </div>
    </Carousel>
    </div>
    </>
  );
}

export default MyCarousel;
