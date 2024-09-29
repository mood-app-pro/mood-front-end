"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const players = [
  {
    name: 'Diana Tria',
    game: 'Mobile Legends',
    description: 'Saya Adalah Cewek Penyuka Kelinci Oleh Karena Itu Hero Saya Nana',
    image: 'https://ik.imagekit.io/hcjmc2xxt/361cb86e0ae9686a2f8c077a812c54c9.jpg?updatedAt=1727249911097',
    status: 'Online',
    rating: '5.0',
    matches: '22 Match',
    reviews: '99% Rewatch',
  },
  {
    name: 'Lestari',
    game: 'Mobile Legends',
    description: 'Saya Adalah Cewek Penyuka Kelinci Oleh Karena Itu Hero Saya Nana',
    image: 'https://ik.imagekit.io/hcjmc2xxt/f15e39f59a3785c4c10a7317714479ad.jpg?updatedAt=1727247528917',
    status: 'Online',
    rating: '5.0',
    matches: '22 Match',
    reviews: '99% Rewatch',
  },
  {
    name: 'Ika Aerulia',
    game: 'Mobile Legends',
    description: 'Saya Adalah Cewek Penyuka Kelinci Oleh Karena Itu Hero Saya Nana',
    image: 'https://i.pinimg.com/originals/6b/38/f5/6b38f501d32f6d6404a3f5cd9cb7a8e8.jpg',
    status: 'Online',
    rating: '5.0',
    matches: '22 Match',
    reviews: '99% Rewatch',
  },
];

const RecommendedPlayers: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-yellow-950 py-8 text-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-20 lg:px-40 xl:px-56">
        <h2 className="text-2xl font-bold mb-4">REKOMENDASI TOP PLAYER</h2>
        <Slider {...settings}>
          {players.map((player) => (
            <div key={player.name} className="bg-gray-800 rounded overflow-hidden shadow-md flex h-auto">
              <div className="flex flex-row w-full">
              <div className="flex-shrink-0 relative h-48 p-2"> {/* Tambahkan padding di sini */}
                  <div className="border border-white rounded-lg overflow-hidden h-full relative w-[180px]">
                    <Image
                      src={player.image}
                      alt={player.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center w-2/3 p-4">
                  <h3 className="text-xl font-bold text-white">{player.name}</h3>
                  <p className="text-lg text-gray-300">{player.game}</p>
                  <p className="text-sm text-white">{player.description}</p>
                  <p className="text-sm text-green-400">{player.status}</p>
                  <div className="flex items-center justify-start mt-2">
                    <div className="flex space-x-2">
                      <span className="text-sm text-gray-300">{player.matches}</span>
                      <span></span>
                      <span className="text-sm text-gray-300">{player.reviews}</span>
                    </div>
                    <span className="text-sm bg-yellow-500 text-gray-800 px-2 py-1 rounded ml-3">{player.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {players.length === 0 && (
          <div className="text-center text-white mt-4">
            <p>Tidak ada pemain yang direkomendasikan saat ini.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendedPlayers;
