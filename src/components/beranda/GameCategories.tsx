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

const GameCategories = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Lihat Semua &gt;</a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {category.items.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded overflow-hidden text-center">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm md:text-lg font-bold">{item.name}</h3>
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
