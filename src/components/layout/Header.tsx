'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginModal from '@/components/login/LoginModal';

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <header className="bg-white shadow-md py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo/mood.png"
              width={115}
              height={75}
              alt="Logo"
              priority
            />
          </Link>
          <nav className="hidden lg:flex space-x-4 items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Beranda
            </Link>
            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-800 flex items-center"
                onClick={() => setShowServices(!showServices)}
              >
                Semua Layanan
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {showServices && (
                <div className="absolute left-0 mt-2 py-2 w-48 bg-white border rounded shadow-xl z-10">
                  <Link href="/layanan1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Layanan 1
                  </Link>
                  <Link href="/layanan2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Layanan 2
                  </Link>
                  <Link href="/layanan3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Layanan 3
                  </Link>
                </div>
              )}
            </div>
            <Link href="/cerita" className="text-gray-600 hover:text-gray-800">
              Cerita
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <input type="text" placeholder="Search" className="px-3 py-1 border rounded-full text-sm" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <button
              className="bg-gray-800 text-white px-3 py-1 rounded flex items-center text-sm"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              ID
              <Image
                src="/images/icons/icons-global.svg"
                width={14}
                height={10}
                alt="Globe"
                style={{ marginLeft: '4px' }}
              />
            </button>
            {showLanguages && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white border rounded shadow-xl z-10">
                <Link href="/indonesia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Indonesia
                </Link>
                <Link href="/english" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  English
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center text-sm">
            Top Up
          </Link>
          <button
            className="bg-yellow-950 text-white px-3 py-1 rounded flex items-center text-sm"
            onClick={toggleLoginModal}
          >
            Login
          </button>
          <button
            className="lg:hidden text-gray-600 hover:text-gray-800 flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden px-4 py-2">
          <nav className="space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-gray-800">
              Beranda
            </Link>
            <div className="relative">
              <button
                className="w-full text-left text-gray-600 hover:text-gray-800 flex items-center"
                onClick={() => setShowServices(!showServices)}
              >
                Semua Layanan
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {showServices && (
                <div className="mt-2 py-2 w-full bg-white border rounded shadow-xl z-10">
                  <Link href="/layanan1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Layanan 1
                  </Link>
                  <Link href="/layanan2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Layanan 2
                  </Link>
                  <Link href="/layanan3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Layanan 3
                  </Link>
                </div>
              )}
            </div>
            <Link href="/cerita" className="block text-gray-600 hover:text-gray-800">
              Cerita
            </Link>
          </nav>
          <div className="relative mt-4">
            <input type="text" placeholder="Search" className="w-full px-3 py-1 border rounded-full text-sm" />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />
    </header>
  );
};

export default Header;
