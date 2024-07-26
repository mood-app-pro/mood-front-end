import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/HeroSection';
import GameCategories from '@/components/GameCategories';
import RecommendedPlayers from '@/components/RecommendedPlayers';
import MobileLegends from '@/components/MobileLegends';
import Footer from '@/components/layout/Footer';

const HomePage = () => {
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
