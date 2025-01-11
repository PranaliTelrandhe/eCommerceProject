import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const banners = [
  "../assets/images/fashion11.jpg",
  "https://via.placeholder.com/1200x400?text=Banner+2",
  "https://via.placeholder.com/1200x400?text=Banner+3",
  "https://via.placeholder.com/1200x400?text=Banner+4",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer); // Clear the interval on unmount
  }, [currentIndex]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="myntra-slider-container">
      {/* Left Arrow */}
      <button className="slider-arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Slider Images */}
      <div className="slider">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {index === currentIndex && (
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="slider-image"
              />
            )}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="slider-arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots for Navigation */}
      <div className="slider-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
