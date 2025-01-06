import React, { useState, useEffect } from 'react';
import './Carosel.css';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [images.length]); // Only runs if images length changes

  return (
    <div className="carousel" style={{ marginTop: '0' }}>
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
        loading="lazy"
      />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
