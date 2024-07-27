import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/Home/HeroSection';
import GameCategories from '@/components/Home/GameCategories';
import RecommendedPlayers from '@/components/Home/RecommendedPlayers';
import MobileLegends from '@/components/Home/MobileLegends';
import Footer from '@/components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection/>
    </>
  );
};

export default HomePage;
