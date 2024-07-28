import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/beranda/HeroSection";
import GameCategories from "@/components/beranda/GameCategories";
import RecommendedPlayers from "@/components/beranda/RecommendedPlayers";
import MobileLegends from "@/components/beranda/MobileLegends";
import Footer from "@/components/layout/Footer";

const BerandaPage: React.FC = () => {
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

export default BerandaPage;
