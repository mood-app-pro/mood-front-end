import React from 'react';

const categories = [
  {
    title: 'Cari Player',
    items: [
      { name: 'HOYOVERSE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
      { name: 'HONOR OF KINGS', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
      { name: 'PUBG MOBILE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
      { name: 'MobaPay', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
    ],
  },
  {
    title: 'Game Populer',
    items: [
      { name: 'HOYOVERSE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
      { name: 'HONOR OF KINGS', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
      { name: 'PUBG MOBILE', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
      { name: 'MobaPay', image: 'https://www.prz.co.id/assets/thumbnail/mobile-legends.webp' },
    ],
  },
];

const GameCategories: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">{category.title}</h2>
              <a href="#" className="text-xs md:text-sm text-gray-600 hover:text-gray-800">Lihat Semua &gt;</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {category.items.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden text-center transition-transform transform hover:scale-105">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2 md:p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-gray-800 truncate">{item.name}</h3>
                  </div>
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
