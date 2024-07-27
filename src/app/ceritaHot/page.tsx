'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const posts = [
  {
    username: 'bbymov',
    time: 'July 1st at 8:12 PM',
    content: `DADU BERHADIAH (MERCY) Hai ol! Daripada gabut malam jumat mending ikut event dadu kita aja! Berhadiah "SUMMER SURFING" tiap sesi nya loh 🥳 Hari : Kamis, 25 Juli 2024 Jam : 20.00 WIB Regist 199c ke panitia (boleh req sesi) dan boleh ikut lebih dari 1 slot HADIAH TIAP SESI : 5.000 COIN`,
    image: 'https://i.pinimg.com/originals/6b/38/f5/6b38f501d32f6d6404a3f5cd9cb7a8e8.jpg',
    likes: 21,
    comments: 21,
  },
  {
    username: 'anotheruser',
    time: 'July 2nd at 9:14 PM',
    content: `Join our gaming night this Friday! Exciting rewards and fun await. Don't miss out!`,
    image: 'https://i.pinimg.com/originals/6b/38/f5/6b38f501d32f6d6404a3f5cd9cb7a8e8.jpg',
    likes: 15,
    comments: 10,
  },
];

const CeritaHot: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-10 flex flex-col md:flex-row">
        {/* Navigation bar for mobile */}
        <div className="bg-gray-900 text-white p-4 md:hidden">
          <nav className="flex justify-around">
            <a href="#" className="block text-yellow-400 font-bold">
              Hot
            </a>
            <a href="#" className="block">
              Mengikuti
            </a>
            <a href="#" className="block">
              Notifikasi
            </a>
          </nav>
        </div>

        {/* Sidebar for larger screens */}
        <div className="hidden md:block md:w-1/5 bg-gray-900 text-white p-2">
          <nav className="space-y-2">
            <a href="#" className="block text-yellow-400 font-bold">
              Hot
            </a>
            <a href="#" className="block">
              Mengikuti
            </a>
            <a href="#" className="block">
              Notifikasi
            </a>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 mb-4 max-w-3xl mx-auto">
              <div className="flex items-center mb-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <h3 className="font-bold text-sm">{post.username}</h3>
                  <p className="text-gray-600 text-xs">{post.time}</p>
                </div>
              </div>
              <p className="mb-2 text-sm">{post.content}</p>
              <div className="relative w-full pb-[56.25%] mb-2 bg-gray-200 overflow-hidden rounded-lg">
                <img src={post.image} alt="Post Image" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>❤️</span>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                </div>
                <button className="flex items-center space-x-1 text-sm">
                  <span>👋</span>
                  <span>Hello...</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CeritaHot;
