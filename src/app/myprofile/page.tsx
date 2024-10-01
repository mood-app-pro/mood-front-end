import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const MyProfile = () => {
  return (
    <>
      <Header />
      <section className="pt-24 pb-8 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/3 space-y-6">
              <div className="bg-yellow-950 text-white shadow-md rounded-lg p-6 text-center">
                <h2 className="text-lg font-medium mb-4">Photo Profile</h2>
                <img
                  src="http://localhost:3000/images/cerita/aw12.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <button className="px-4 py-2 bg-brown-500 text-white rounded">Upload Foto</button>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Albums (0 / 6)</h2>
                <div className="grid grid-cols-3 gap-4">
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <div key={index} className="album-square w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-8 h-24 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-2/3 space-y-6">
              {/* Nickname Section */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">Nickname</label>
                <input
                  type="text"
                  placeholder="Nickname"
                  className="border border-gray-300 rounded w-full px-4 py-2 mb-2"
                />
                <p className="text-xs text-red-500">Setiap Minggu Dapat Diubah Satu Kali, Harap Ubah Dengan Hati - Hati!</p>
              </div>

              {/* Voice Intro Section */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">Intro Suara</label>
                <div className="w-full h-16 bg-brown-500 rounded-lg flex items-center justify-center text-white">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19V6l7 7-7 7z"
                    ></path>
                  </svg>
                  <span className="ml-2 text-lg">Tap Untuk Rekam</span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">Bio</label>
                <textarea
                  placeholder="Silahkan Perkenalkan Diri Secara Singkat"
                  className="border border-gray-300 rounded w-full px-4 py-2"
                ></textarea>
              </div>

              {/* Gender Section */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <label className="block text-gray-700 text-sm font-medium mb-4">Jenis Kelamin</label>
                <div className="flex space-x-4">
                  <button className="w-1/2 p-4 bg-gray-100 rounded-lg flex items-center justify-center space-x-2">
                    <svg
                      className="w-8 h-8 text-brown-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5z"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Pria</span>
                  </button>
                  <button className="w-1/2 p-4 bg-gray-100 rounded-lg flex items-center justify-center space-x-2">
                    <svg
                      className="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5z"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Wanita</span>
                  </button>
                </div>
              </div>

              {/* Birthday Section */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <label className="block text-gray-700 text-sm font-medium mb-4">Birthday</label>
                <div className="flex space-x-4">
                  <select className="border border-gray-300 rounded w-1/3 px-4 py-2">
                    <option>Tanggal</option>
                  </select>
                  <select className="border border-gray-300 rounded w-1/3 px-4 py-2">
                    <option>Bulan</option>
                  </select>
                  <select className="border border-gray-300 rounded w-1/3 px-4 py-2">
                    <option>Tahun</option>
                  </select>
                </div>
              </div>

              {/* Save Button */}
              <div className="text-right">
                <button className="px-6 py-2 bg-brown-500 text-white rounded">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyProfile;
