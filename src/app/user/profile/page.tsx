import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const UserProfile = () => {
  return (
    <>
      <Header />
      <section className="pt-24 pb-8 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/3 space-y-6">
              <div className="bg-yellow-950 shadow-md rounded-lg p-6 text-center">
                <img
                  src="/images/cerita/awaw.jpg"
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-white font-mono">Pras Manurung Handoyono</h2>
                <hr />
                <p className="text-gray-300 mb-2">@username</p>
                <div className="text-gray-100 text-sm">
                  <span>ID: 12312312</span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <h3 className="text-lg font-medium">Bio</h3>
                </div>
                <p className="text-gray-500">Ini adalah bio singkat. Tulis sesuatu tentang dirimu di sini.</p>
                <div className="flex mt-4 overflow-x-scroll">
                  <img src="/images/cerita/avatarGebi.webp" alt="image1" className="w-12 h-12 rounded-full flex-shrink-0 m-2" />
                  <img src="/images/cerita/aw12.jpg" alt="image2" className="w-12 h-12 rounded-full flex-shrink-0 m-2" />
                  <img src="/images/cerita/awaw.jpg" alt="image3" className="w-12 h-12 rounded-full flex-shrink-0 m-2" />
                  <img src="/images/cerita/awaw.jpg" alt="image3" className="w-12 h-12 rounded-full flex-shrink-0 m-2" />
                  <img src="/images/cerita/awaw.jpg" alt="image3" className="w-12 h-12 rounded-full flex-shrink-0 m-2" />
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Koleksi Hadiah</h3>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Semua </a>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-gray-500">Sementara belum menerima gift</p>
                </div>
              </div>

              {/* Top Sultan Section */}
              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Top Sultan</h3>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Semua</a>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-gray-500">Sementara tidak ada data</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-2/3">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex space-x-6 mb-6">
                  <h3 className="text-lg font-medium text-purple-500 border-b-2 border-purple-500 pb-2">Skills</h3>
                  <h3 className="text-lg font-medium text-gray-500">Momen</h3>
                </div>
                <div className="bg-gray-100 p-16 rounded-lg text-center">
                  <img src="/images/cerita/awaw.jpg" alt="Empty State" className="w-12 h-12 mx-auto mb-4 rounded-full" />
                  <p className="text-gray-500">User ini belum memiliki player link</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProfile;
