import React, { useEffect, useState } from 'react';
import './style.css';


const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentImageIndex ? 'active' : ''
            }`} >

            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;


