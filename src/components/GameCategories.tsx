import React from 'react';

const players = [
  { name: 'HOYOVERSE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
  { name: 'HONOR OF KINGS', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
  { name: 'PUBG MOBILE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
  { name: 'MobaPay', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
];

const popularGames = [
  { name: 'HOYOVERSE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
  { name: 'HONOR OF KINGS', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
  { name: 'PUBG MOBILE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
  { name: 'MobaPay', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
];

const GameCategories = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Cari Player</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Lihat Semua &gt;</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {players.map((player, index) => (
              <div key={index} className="bg-white shadow-md rounded overflow-hidden">
                <img src={player.image} alt={player.name} className="w-full h-36 object-cover md:h-48"/>
                <div className="p-4">
                  <h3 className="text-sm md:text-xl font-bold">{player.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Game Populer</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Lihat Semua &gt;</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularGames.map((game, index) => (
              <div key={index} className="bg-white shadow-md rounded overflow-hidden">
                <img src={game.image} alt={game.name} className="w-full h-36 object-cover md:h-48"/>
                <div className="p-4">
                  <h3 className="text-sm md:text-xl font-bold">{game.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
