import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../../../image/d.jpg';
import img2 from '../../../../image/e.jpg';
import img3 from '../../../../image/f.jpg';

const Banner = () => {
  return (
    <div className="relative">

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        style={{ height: '60px'}}
      >
        {/* Replace the carousel items with your own images */}
        <div>
          <img style={{height:500 , width: 1800}}  src={img1} alt="Carousel Image 1" />
        </div>
        <div>
          <img style={{height:500 , width: 1800}} className='w-full h-80' src={img2} alt="Carousel Image 2" />
        </div>
        <div>
          <img style={{height:500 , width: 1800}} className='w-full h-80' src={img3} alt="Carousel Image 3" />
        </div>
      </Carousel>

      <div className="absolute inset-0 bg-opacity-75 bg-gray-900 align-center text-center">
        <div className="container mx-auto px-8 py-8 my-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold mb-4 text-center">
            Welcome to LanguageLine.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-8 ">
          50 destinations in 20 countries
          </p>
          <button href="#shop" className="btn btn-primary btn-lg align-middle text-center">
            Explore
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
