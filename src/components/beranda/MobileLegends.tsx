"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const legends = [
  { name: 'Renbo', rating: 5.0, price: '500 | Koin/Game', totalHandle: '1 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/renbo.jpg?updatedAt=1727404566638' },
  { name: 'Ash', rating: 5.0, price: '300 | Koin/Game', totalHandle: '4 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/ash.jpg?updatedAt=1727404724303' },
  { name: 'Chincaaw', rating: 5.0, price: '600 | Koin/Game', totalHandle: '1 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/chincaaw.jpg?updatedAt=1727404724068' },
  { name: 'Kairi', rating: 5.0, price: '820 | Koin/Game', totalHandle: '2 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/kairi.jpg?updatedAt=1727404723860' },
  // Ketika Memunculkan Semua
  { name: 'Aeronshiki', rating: 4.5, price: '400 | Koin/Game', totalHandle: '9 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/598c3b57950f85cf9b048dd92ab8b237.jpg?updatedAt=1727419033919' },
  { name: 'Nnael', rating: 4.8, price: '800 | Koin/Game', totalHandle: '3 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/9028c5c0dc6789c9df5bb11ba5b0bb89.jpg?updatedAt=1727419033894' },
  { name: 'Valeka', rating: 4.5, price: '400 | Koin/Game', totalHandle: '7 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/1b03ce09c55f4f4a536e63afdc6aad2a.jpg?updatedAt=1727421773838' },
  { name: 'Celiboy', rating: 4.8, price: '800 | Koin/Game', totalHandle: '3 Handle', image: 'https://ik.imagekit.io/nk4zisz8e/db7bb1f01601d136b6d1b0fe8845bb7b.jpg?updatedAt=1727421433498' },
];

const coins = {
  image: 'https://ik.imagekit.io/hcjmc2xxt/skull-game-coin-vector-removebg-preview.png?updatedAt=1727342710808',
  star: 'https://ik.imagekit.io/hcjmc2xxt/images-removebg-preview.png?updatedAt=1727362208761',
};

const MobileLegends: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="py-8 bg-white text-gray-800">
      <div className="container mx-auto px-2 sm:px-4 md:px-20 lg:px-40 xl:px-56">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black">Mobile Legend</h2>
          <button 
            onClick={toggleShowAll} 
            className="text-sm text-gray-800 hover:text-black"
          >
            {showAll ? "Tutup" : "Lihat Semua"} &gt;
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {legends.slice(0, showAll ? legends.length : 4).map((legend, index) => (
            <div key={index} className="bg-[#3b1f1f] text-white rounded overflow-hidden shadow-md">
              <img src={legend.image} alt={legend.name} className="w-full h-40 sm:h-48 object-cover object-top" />
              <div className="p-2 sm:p-4">
                <h3 className="text-sm sm:text-lg font-mono">{legend.name}</h3>
                <div className="flex items-center space-x-2">
                  <Image
                    src={coins.star}
                    alt="Koins"
                    width={17}
                    height={17}
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <p className="text-xs sm:text-sm">{legend.rating} | {legend.totalHandle}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src={coins.image}
                    alt="Koins"
                    width={17}
                    height={17}
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <p className="text-xs sm:text-sm">{legend.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileLegends;
