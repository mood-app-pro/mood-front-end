'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const images = [
  "/images/banner/Banner.png",
  "/images/banner/Banner2.png",
  "/images/banner/Banner3.png",
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    trackMouse: true,
  });

  return (
    <section className="relative mx-auto w-full h-64 md:h-80 lg:h-96 text-white mt-16" {...handlers}>
      <div className="relative h-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="h-full w-full px-4">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={100}
                sizes="(max-width: 550px) 100vw, (max-width: 768px) 100vw, (max-width: 1000px) calc(100vw - 32px), 1000px" // Mengurangi ukuran gambar untuk memberikan ruang
              />
            </div>
            {index === 0 && currentIndex === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-2xl md:text-4xl font-bold">Bertemu Teman Mabar Baru.</h1>
                <p className="text-lg md:text-xl mt-4">Tidak Akan Main Sendiri Lagi</p>
              </div>
            )}
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
    </section>
  );
};

export default HeroSection;
