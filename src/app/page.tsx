import React from "react";
import Header from "@/components/Layout/Header";
import HeroSection from "@/components/Beranda/HeroSection";
import GameCategories from "@/components/Beranda/GameCategories";
import RecommendedPlayers from "@/components/Beranda/RecommendedPlayers";
import MobileLegends from "@/components/Beranda/MobileLegends";
import Footer from "@/components/Layout/Footer";

const BerandaPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <GameCategories />
      <RecommendedPlayers />
      <MobileLegends />
      {/* <Footer /> */}
    </>
  );
};

export default BerandaPage;
