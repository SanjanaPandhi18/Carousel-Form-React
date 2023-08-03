import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCarousel from './ImageCarousel';
import './style.css';
const RandomKittenCarousel = () => {
  const [randomKittenImages, setRandomKittenImages] = useState([]);

  useEffect(() => {
    const fetchRandomKittenImages = async () => {
      try {
        const getRandomImage = async () => {
          const randomWidth = Math.floor(Math.random() * 300) + 200; // Random width 
          const randomHeight = randomWidth + 50; // Random height 

          const response = await axios.get(
            `https://placekitten.com/${randomWidth}/${randomHeight}` // random height and width for a new image each time
          );
          return response.config.url;
        };

        //  three different random image URLs 
        const randomImageUrls = await Promise.all([
          getRandomImage(),
          getRandomImage(),
          getRandomImage(),
        ]);

        setRandomKittenImages(randomImageUrls);
      } catch (error) {
        console.error('Error fetching random kitten images:', error);
      }
    };

    fetchRandomKittenImages();
  }, []); 

  return (
    <div>
      {randomKittenImages.length > 0 ? (
        <ImageCarousel images={randomKittenImages} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomKittenCarousel;


