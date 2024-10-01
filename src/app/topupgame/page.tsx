'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';

// Tipe untuk kategori game
type GameCategory = 'gameSelular' | 'gamePC' | 'voucherGame' | 'pulsa';

// Tipe untuk gameCategories
type GameCategories = {
  [key in GameCategory]: string[];
};

const bannerImages = [
  "/images/banner/Banner.png",
  "/images/banner/Banner2.png",
  "/images/banner/Banner3.png",
];

const trendingVouchers = new Array(10).fill("/images/voucher/Voucher.webp");
const localGameVouchers = new Array(5).fill("/images/voucher/LokalVoucher.webp");

const TopupGamePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<GameCategory>('gameSelular');

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Swipe functionality
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length),
    trackMouse: true,
  });

  // Kategori voucher game
  const gameCategories: GameCategories = {
    gameSelular: new Array(5).fill("/images/voucher/LokalVoucher.webp"),
    gamePC: new Array(5).fill("/images/voucher/LokalVoucher.webp"), 
    voucherGame: new Array(5).fill("/images/voucher/LokalVoucher.webp"), 
    pulsa: new Array(5).fill("/images/voucher/LokalVoucher.webp"),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative w-full h-96 bg-gray-200" {...handlers}>
          <div className="relative h-full overflow-hidden">
            {bannerImages.map((src, index) => (
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
            {bannerImages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </section>

        {/* Trending Sekarang Section */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold text-center text-white mb-8 py-10">Trending Sekarang</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {trendingVouchers.map((src, index) => (
                <div key={index} className="relative bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-10 text-white">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 w-24 h-24 mt-2">
                    <Image
                      src={src}
                      alt={`Voucher ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded border-4 border-yellow-500"
                    />
                  </div>
                  <div className="pt-16 text-center justify-center items-center">
                    <h3 className="text-lg font-semibold mb-2">Voucher {index + 1}</h3>
                    <p className="text-sm mb-4 mx-4">Harga: Rp. {index * 10000 + 10000}</p>
                    <Link href="/topupgame/category">
                      <button className="mt-2 bg-orange-500 text-white px-4 rounded-full hover:bg-orange-600 transition duration-200">
                        TOP UP
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voucher Game Section with Tabs */}
        <section className="py-8 bg-gray-900 mb-8">
          <h2 className="text-2xl font-semibold text-center mb-8 text-white">Voucher Game</h2>
          <div className="flex justify-center space-x-4 mb-4">
            {Object.keys(gameCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as GameCategory)}
                className={`px-4 py-2 text-white transition duration-200 ${
                  activeTab === category
                    ? 'underline font-bold underline-offset-4'
                    : 'opacity-60'
                }`}
              >
                {category === 'gameSelular' ? 'Game Selular' : category === 'gamePC' ? 'Game PC' : category === 'voucherGame' ? 'Voucher Game' : 'Pulsa'}
              </button>
            ))}
          </div>
          
          {/* Konten berdasarkan kategori yang dipilih */}
          <div className="container mx-auto px-4 mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {gameCategories[activeTab]?.map((src, index) => (
                <div key={index} className="relative bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-10 text-white">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 w-24 h-24">
                    <Image
                      src={src}
                      alt={`Voucher ${activeTab} ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded border-4 border-yellow-500"
                    />
                  </div>
                  <div className="pt-16 text-center items-center justify-center">
                    <h3 className="text-lg font-semibold mb-2">{activeTab === 'gameSelular' ? 'Game Selular' : activeTab === 'gamePC' ? 'Game PC' : activeTab === 'voucherGame' ? 'Voucher Game' : 'Pulsa'} {index + 1}</h3>
                    <p className="text-sm mb-4">Harga: Rp. {index * 10000 + 10000}</p>
                    <button className="mt-2 bg-orange-500 text-white px-4 rounded-full hover:bg-orange-600 transition duration-200">
                      TOP UP
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Lokal Section */}
        <section className="py-8 bg-gray-900">
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">Game Lokal</h2>
          <div className="container mx-auto px-4 mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {localGameVouchers.map((src, index) => (
                <div key={index} className="relative bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-10 text-white">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 w-24 h-24">
                    <Image
                      src={src}
                      alt={`Voucher Game Lokal ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="border-4 border-yellow-500 rounded"
                    />
                  </div>
                  <div className="pt-16 text-center items-center justify-center">
                    <h3 className="text-lg font-semibold mb-2">Voucher Game Lokal {index + 1}</h3>
                    <p className="text-sm mb-4">Harga: Rp. {index * 10000 + 10000}</p>
                    <button className="mt-2 bg-orange-500 text-white px-4 rounded-full hover:bg-orange-600 transition duration-200">
                      TOP UP
                    </button>
                  </div>
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
