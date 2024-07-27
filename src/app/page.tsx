import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/Home/HeroSection';
import GameCategories from '@/components/Home/GameCategories';
import RecommendedPlayers from '@/components/Home/RecommendedPlayers';
import MobileLegends from '@/components/Home/MobileLegends';
import Footer from '@/components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <GameCategories />
      <RecommendedPlayers />
      <MobileLegends />
      <Footer />
    </>
  );
};

export default HomePage;
