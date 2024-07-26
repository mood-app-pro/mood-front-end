'use client';

import React, { useState } from 'react';

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-8" /> {/* Update dengan path logo Anda */}
          <nav className="hidden md:flex space-x-4 items-center text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-800">Beranda</a>
            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-800 flex items-center"
                onClick={() => setShowServices(!showServices)}
              >
                Semua Layanan <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {showServices && (
                <div className="absolute left-0 mt-2 py-2 w-48 bg-white border rounded shadow-xl z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Layanan 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Layanan 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Layanan 3</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-800">Cerita</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input type="text" placeholder="Search" className="px-3 py-1 border rounded-full text-sm"/>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path></svg>
            </button>
          </div>
          <button
            className="bg-gray-800 text-white px-3 py-1 rounded flex items-center text-sm"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <img src="https://www.svgrepo.com/show/50040/global.svg" alt="Global" className="w-4 h-4 mr-1" />
            ID
          </button>
          {showLanguages && (
            <div className="absolute right-0 mt-2 py-2 w-32 bg-white border rounded shadow-xl z-10">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Indonesia</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">English</a>
            </div>
          )}
          <button className="bg-yellow-400 text-white px-3 py-1 rounded flex items-center text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
            Topup
          </button>
          <button className="bg-yellow-950 text-white px-3 py-1 rounded flex items-center text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A2.5 2.5 0 007 20h10a2.5 2.5 0 001.879-4.196l-5-6.5a2.5 2.5 0 00-3.758 0l-5 6.5z"></path></svg>
            Login
          </button>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800 flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="space-y-4 px-4 py-2">
            <a href="#" className="block text-gray-600 hover:text-gray-800">Beranda</a>
            <div className="relative">
              <button
                className="w-full text-left text-gray-600 hover:text-gray-800 flex items-center"
                onClick={() => setShowServices(!showServices)}
              >
                Semua Layanan <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {showServices && (
                <div className="mt-2 py-2 w-full bg-white border rounded shadow-xl z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Layanan 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Layanan 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Layanan 3</a>
                </div>
              )}
            </div>
            <a href="#" className="block text-gray-600 hover:text-gray-800">Cerita</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
