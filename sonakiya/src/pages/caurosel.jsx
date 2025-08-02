import React, { useState,useEffect } from "react";
import a7 from "../images/home/a7.png";
import a8 from "../images/home/a8.png";
import a9 from "../images/home/a9.png";
import a10 from "../images/home/a10.png";
import a11 from "../images/home/a11.png";
import a12 from "../images/home/a12.png";
import a13 from "../images/home/a13.png";
import a14 from "../images/home/a14.png";
import a15 from "../images/home/a15.png";

const images = [a7, a8, a9, a10, a11, a12, a13, a14, a15];

const Carousel = () => {
  const visibleCount = 3;
  const [index, setIndex] = useState(0);

  const totalSlides = Math.ceil(images.length / visibleCount);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Loop back to 0 if at the end
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides); // Loop to the end if at the start
  };

  // Autoplay functionality
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Autoplay every 3 seconds

    return () => clearInterval(autoplayInterval); // Cleanup on unmount
  }, []);

  // Calculate visible images for current "page"
  const visibleImages = images.slice(
    index * visibleCount,
    index * visibleCount + visibleCount
  );

  return (
   
    <div className="carousel-container">
    <button className="nav-btn left" onClick={prevSlide}>
      ❮
    </button>

    <div className="carousel-wrapper">
      {visibleImages.map((img, i) => (
        <div className="carousel-slide" key={i}>
          <img src={img} alt={`img-${i}`} className="carousel-img" />
        </div>
      ))}
    </div>

    <button className="nav-btn right" onClick={nextSlide}>
      ❯
    </button>
  </div>
  );
};

export default Carousel;
