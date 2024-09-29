'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';

const bannerImages = [
  "/images/banner/Banner.png",
  "/images/banner/Banner2.png",
  "/images/banner/Banner3.png",
];

const trendingVouchers = new Array(10).fill("/images/voucher/Voucher.webp"); // Simpan URL dalam array

const localGameVouchers = new Array(5).fill("/images/voucher/LokalVoucher.webp"); // Simpan URL dalam array

const TopupGamePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-900"> {/* Ubah background keseluruhan jika diperlukan */}
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
                <div key={index} className="relative bg-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 text-white">
                  {/* Gambar yang sedikit keluar dari kartu */}
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
                  {/* Konten Kartu */}
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

        {/* Voucher Game Grid Section */}
        <section className="py-8 bg-gray-50 mb-8">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">Voucher Game</h2>
          <div className="container mx-auto px-4 mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {localGameVouchers.map((src, index) => (
                <div key={index} className="relative bg-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 text-white">
                  {/* Gambar yang sedikit keluar dari kartu */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 w-24 h-24">
                    <Image
                      src={src}
                      alt={`Local Game Voucher ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded border-4 border-yellow-500"
                    />
                  </div>
                  {/* Konten Kartu */}
                  <div className="pt-16 text-center justify-center items-center">
                    <h3 className="text-lg font-semibold mb-2">Local Game Voucher {index + 1}</h3>
                    <p className="text-sm mb-4">Harga: Rp. {index * 15000 + 15000}</p>
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
        <section className="py-8 bg-gray-100">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Game Lokal</h2>
          <div className="container mx-auto px-4 mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {localGameVouchers.map((src, index) => (
                <div key={index} className="relative bg-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 text-white">
                  {/* Gambar yang sedikit keluar dari kartu */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 w-24 h-24">
                    <Image
                      src={src}
                      alt={`Local Game Voucher ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded border-4 border-yellow-500"
                    />
                  </div>
                  {/* Konten Kartu */}
                  <div className="pt-16 text-center items-center justify-center">
                    <h3 className="text-lg font-semibold mb-2">UniPin Voucher {index + 1}</h3>
                    <p className="text-sm mb-4">Harga: Rp. {index * 20000 + 20000}</p>
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
