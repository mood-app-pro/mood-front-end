import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/cerita/NavBar';

const posts = [
  {
    username: 'Awaw',
    time: 'July 1st at 8:12 PM',
    content: `DADU BERHADIAH Hai ol! Daripada gabut malam jumat mending ikut event dadu kita aja! Berhadiah "SUMMER SURFING" tiap sesi nya loh 🥳 Hari : Kamis, 25 Juli 2024 Jam : 20.00 WIB Regist 199c ke panitia (boleh req sesi) dan boleh ikut lebih dari 1 slot HADIAH TIAP SESI : 5.000 COIN`,
    image: '/images/cerita/awaw11.jpg',
    likes: 21,
    comments: 21,
  },
  {
    username: 'anotheruser',
    time: 'July 2nd at 9:14 PM',
    content: `Join our gaming night this Friday! Exciting rewards and fun await. Don't miss out!`,
    image: '/images/cerita/aw12.jpg',
    likes: 15,
    comments: 10,
  },
];

const CeritaPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-10 flex flex-col md:flex-row">
        <NavBar />
        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-auto">
              <div className="flex items-center mb-2">
                <Image
                  src="/images/cerita/awaw.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <div>
                  <h3 className="font-bold text-sm">{post.username}</h3>
                  <p className="text-gray-600 text-xs">{post.time}</p>
                </div>
              </div>
              <p className="mb-2 text-sm">{post.content}</p>
              <div className="relative w-full pb-[100%] mb-2 bg-gray-200 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt="Post Image"
                  fill
                  className="absolute inset-0 object-cover"
                />
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

export default CeritaPage;
