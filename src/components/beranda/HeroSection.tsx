'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const images = [
  "/images/banner/banner-test.png",
  "/images/banner/banner-test2.jpg",
  "/images/banner/banner-test.png",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Waktu Slider

    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    trackMouse: true,
  });

  return (
    <section className="relative h-96 md:h-120 text-white" {...handlers}>
      <div className="relative h-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{ transition: 'transform 0.5s ease-in-out' }}
          >
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Bertemu Teman Mabar Baru.</h1>
        <p className="text-lg md:text-xl mt-4">Tidak Akan Main Sendiri Lagi</p>
      </div>
    </section>
  );
};

export default HeroSection;
