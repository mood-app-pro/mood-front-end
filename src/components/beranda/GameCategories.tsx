"use client";

import React, { useState, useEffect } from 'react';

const categories = [
  {
    title: 'Cari Player',
    items: [
      { name: 'Ciaa', games: 'Mobile Legend', image: 'https://ik.imagekit.io/nk4zisz8e/2eca793c7dd16ae111b8368544b2d85d.jpg?updatedAt=1727433808148', link: '#' },
      { name: 'RRQ Dyfaa', games: 'Mobile Legend', image: 'https://ik.imagekit.io/nk4zisz8e/2a6bb4e45524ecfe146462a390f6ab58.jpg?updatedAt=1727434104634', link: '#' },
      { name: 'Xcurate', games: 'Mobile Legend', image: 'https://ik.imagekit.io/nk4zisz8e/9b09b9bdda0b73bfef6d9e0126be1aff.jpg?updatedAt=1727433808128', link: '#' },
      { name: 'Vilsa Sania', games: 'Mobile Legend', image: 'https://ik.imagekit.io/nk4zisz8e/6930d8c5784e575c2c040c7c10ce7544.jpg?updatedAt=1727433807435', link: '#' },
      { name: 'Udil Surbakti ', games: 'Mobile Legend', image: 'https://ik.imagekit.io/nk4zisz8e/f93dd34ae697aadbeed7a7377353eaf7.jpg?updatedAt=1727421434084', link: '#' },
      { name: 'Beebie', games: 'Mobile Legend', image: 'https://ik.imagekit.io/nk4zisz8e/05630ddb8d3dc44acf362eb0cfa43ce9.jpg?updatedAt=1727433808011', link: '#' },
    ],
  },
  {
    title: 'Game Populer',
    items: [
      { name: 'PUBG Mobile', image: 'https://ik.imagekit.io/nk4zisz8e/Games/3062.webp?updatedAt=1727422581604', link: '#' },
      { name: 'Mobile Legends', image: 'https://ik.imagekit.io/nk4zisz8e/Games/3020.webp?updatedAt=1727422582517', link: '#' },
      { name: 'Honor Of Kings', image: 'https://ik.imagekit.io/nk4zisz8e/Games/4531.webp?updatedAt=1727422585181', link: '#' },
      { name: 'Free Fire', image: 'https://ik.imagekit.io/nk4zisz8e/Games/3060.webp?updatedAt=1727422910003', link: '#' },
      { name: 'Mobile Legends Adventure', image: 'https://ik.imagekit.io/nk4zisz8e/Games/3162.webp?updatedAt=1727422909450', link: '#' },
      { name: 'Roblox', image: 'https://ik.imagekit.io/nk4zisz8e/Games/Roblox.webp?updatedAt=1727422587326', link: '#' },
      { name: 'Call Of Duty Global', image: 'https://ik.imagekit.io/nk4zisz8e/Games/3746.webp?updatedAt=1727422585018', link: '#' },
      { name: 'Ace Racer', image: 'https://ik.imagekit.io/nk4zisz8e/Games/4773.webp?updatedAt=1727422909495', link: '#' },
    ],
  },
];

const GameCategories: React.FC = () => {
  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0); // Initialize to 0 or default value

  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const getInitialItemsToShow = () => {
    if (windowWidth < 768) {
      return 3; // Mobile
    } else if (windowWidth < 1024) {
      return 4; // Tablet
    } else {
      return 5; // Desktop
    }
  };

  const handleShowAll = (index: number) => {
    if (expandedCategoryIndex === index) {
      setExpandedCategoryIndex(null);
    } else {
      setExpandedCategoryIndex(index);
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">{category.title}</h2>
              <button
                onClick={() => handleShowAll(idx)}
                className="text-xs md:text-sm text-gray-600 hover:text-gray-800"
              >
                {expandedCategoryIndex === idx ? 'Sembunyikan' : 'Lihat Semua'} &gt;
              </button>
            </div>

            <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5`}>
              {windowWidth > 0 && category.items.slice(
                0,
                expandedCategoryIndex === idx ? category.items.length : getInitialItemsToShow()
              ).map((item, index) => (
                <div key={`item-${index}`} className="bg-white shadow-md rounded-lg overflow-hidden text-center transition-transform transform hover:scale-105">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {/* Menggunakan rasio aspek responsif: 2:3 pada mobile dan 3:2 pada desktop */}
                    <div className="aspect-w-2 h-44 md:aspect-w-3 md:aspect-h-2 bg-gray-200 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top transition-transform duration-300 transform hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xs md:text-sm lg:text-base font-bold text-gray-800 truncate">
                        {item.name}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameCategories;
