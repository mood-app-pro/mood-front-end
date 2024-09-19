'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';

const images = [
  "/images/banner/banner-test.png",
  "/images/banner/banner-test2.jpg",
  "/images/banner/banner-test.png",
];

const TopupGamePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Swipe functionality
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    trackMouse: true,
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative w-full h-96 bg-gray-200" {...handlers}>
          <div className="relative h-full overflow-hidden">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
                  index === currentIndex
                    ? 'translate-x-0'
                    : index < currentIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
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
          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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

        {/* Trending Section */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Trending Sekarang</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="bg-white p-4 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/images/icons/mobile-legends.webp" // Replace with actual voucher image
                      alt="Voucher"
                      width={100}
                      height={100}
                      className="w-24 h-24 mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold">UniPin Voucher {index + 1}</h3>
                    <p className="text-sm text-gray-600">Lihat Voucher ({index + 10})</p>
                    <Link href="/topupgame/category">
                    <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full">TOP UP</button>
</Link>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Game Category Menu */}
        <section className="text-center py-4">
          <div className="container mx-auto">
            <div className="inline-flex space-x-4 border-b border-gray-300">
              <button className="text-gray-700 hover:text-orange-500 px-4 py-2">Game Stellar</button>
              <button className="text-gray-700 hover:text-orange-500 px-4 py-2">Game PC</button>
              <button className="text-gray-700 hover:text-orange-500 px-4 py-2">Voucher Game</button>
              <button className="text-gray-700 hover:text-orange-500 px-4 py-2">Game Lokal</button>
              <button className="text-gray-700 hover:text-orange-500 px-4 py-2">Lainnya</button>
            </div>
          </div>
        </section>

        {/* Voucher Game Grid */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="bg-white p-4 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/images/icons/mobile-legends.webp" // Replace with actual voucher image
                      alt="Voucher"
                      width={100}
                      height={100}
                      className="w-24 h-24 mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold">UniPin Voucher {index + 1}</h3>
                    <p className="text-sm text-gray-600">Lihat Voucher ({index + 10})</p>
                    <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full">TOP UP</button>
                  </div>
                ))}
            </div>

            {/* Button Lihat Banyak */}
            <div className="text-center mt-8">
              <button className="bg-orange-500 text-white px-8 py-2 rounded-full">Lihat Banyak</button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              <button className="w-3 h-3 bg-gray-400 rounded-full"></button>
              <button className="w-3 h-3 bg-gray-400 rounded-full"></button>
              <button className="w-3 h-3 bg-gray-400 rounded-full"></button>
            </div>
          </div>
        </section>

        {/* Game Lokal Section */}
        <section className="py-8 bg-gray-100">
          <h2 className="text-2xl font-semibold text-center mb-6">Game Lokal</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="bg-white p-4 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/images/icons/mobile-legends.webp" // Replace with actual voucher image
                      alt="Voucher"
                      width={100}
                      height={100}
                      className="w-24 h-24 mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold">UniPin Voucher {index + 1}</h3>
                    <p className="text-sm text-gray-600">Lihat Voucher ({index + 10})</p>
                    <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full">TOP UP</button>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TopupGamePage;
