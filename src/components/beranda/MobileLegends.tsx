import React from 'react';

const legends = [
  { name: 'bby.moy', rating: 5.0, price: '450k/Game', image: 'https://i.pinimg.com/736x/20/db/61/20db61aec965747c6d53680488df308d.jpg' },
  { name: 'bby.moy', rating: 5.0, price: '450k/Game', image: 'https://i.pinimg.com/736x/20/db/61/20db61aec965747c6d53680488df308d.jpg' },
  { name: 'bby.moy', rating: 5.0, price: '450k/Game', image: 'https://i.pinimg.com/736x/20/db/61/20db61aec965747c6d53680488df308d.jpg' },
  { name: 'bby.moy', rating: 5.0, price: '450k/Game', image: 'https://i.pinimg.com/736x/20/db/61/20db61aec965747c6d53680488df308d.jpg' },
];

const MobileLegends: React.FC = () => {
  return (
    <section className="py-8 bg-white text-gray-800">
      <div className="container mx-auto px-2 sm:px-4 md:px-20 lg:px-40 xl:px-56">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black">Mobile Legend</h2>
          <a href="#" className="text-sm text-gray-800 hover:text-black">Lihat Semua &gt;</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {legends.map((legend, index) => (
            <div key={index} className="bg-[#3b1f1f] text-white rounded overflow-hidden shadow-md">
              <img src={legend.image} alt={legend.name} className="w-full h-32 sm:h-48 object-cover"/>
              <div className="p-2 sm:p-4">
                <h3 className="text-sm sm:text-lg font-bold">{legend.name}</h3>
                <p className="text-xs sm:text-sm">⭐ {legend.rating} | Handle 1</p>
                <p className="text-xs sm:text-sm">5k/Game</p>
                <p className="text-xs sm:text-sm">{legend.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileLegends;
