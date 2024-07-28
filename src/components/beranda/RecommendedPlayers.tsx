import React from 'react';

const players = [
  { name: 'Player', game: 'Mobile Legends', image: 'https://i.pinimg.com/originals/6b/38/f5/6b38f501d32f6d6404a3f5cd9cb7a8e8.jpg', status: 'Online', rating: '5.0', matches: '22 Match', reviews: '99% Rewatch' },
  { name: 'Player', game: 'Mobile Legends', image: 'https://i.pinimg.com/originals/6b/38/f5/6b38f501d32f6d6404a3f5cd9cb7a8e8.jpg', status: 'Online', rating: '5.0', matches: '22 Match', reviews: '99% Rewatch' },
];

const RecommendedPlayers: React.FC = () => {
  return (
    <section className="bg-yellow-950 py-8 text-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-20 lg:px-40 xl:px-56">
        <h2 className="text-2xl font-bold mb-4">REKOMENDASI TOP PLAYER</h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {players.map((player, index) => (
            <div key={index} className="bg-gray-800 rounded overflow-hidden shadow-md flex h-32 sm:h-40">
              <div className="w-1/3 flex items-center justify-center h-full">
                <img src={player.image} alt={player.name} className="h-full w-full object-cover rounded-l" />
              </div>
              <div className="p-2 sm:p-4 flex flex-col justify-between w-2/3">
                <div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold">{player.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base">{player.game}</p>
                  <p className="text-xs md:text-sm mt-2">{player.status}</p>
                </div>
                <div className="flex items-center justify-between mt-2 sm:mt-4">
                  <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
                    <span className="text-xs md:text-sm">{player.matches}</span>
                    <span className="text-xs md:text-sm">{player.reviews}</span>
                  </div>
                  <span className="text-xs md:text-sm bg-yellow-500 text-gray-800 px-2 py-1 rounded">{player.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedPlayers;
