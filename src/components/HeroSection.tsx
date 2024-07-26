import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-96 md:h-120 flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(https://buatlogoonline.com/wp-content/uploads/2020/03/Web-Banner-1-01-01-01.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Bertemu Teman Mabar Baru.</h1>
        <p className="text-lg md:text-xl mt-4">Tidak Akan Main Sendiri Lagi</p>
      </div>
    </section>
  );
};

export default HeroSection;
