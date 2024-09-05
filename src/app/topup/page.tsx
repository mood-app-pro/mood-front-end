import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const Topup = () => {
  return (
    <>
      <Header />
      <section className="pt-24 py-8"> {/* Added pt-24 to create space below the header */}
        <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">Pusat Top Up</h1>
          <div className="mb-6 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Masukkan ID Akun"
              className="border border-gray-300 rounded px-4 py-2 w-full md:max-w-lg"
            />
            <button className="px-6 py-2 bg-yellow-900 text-white rounded hover:bg-yellow-950 transition-colors duration-200 w-full md:w-auto">
              Cek Akun
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array(16)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 text-center transition-transform transform hover:scale-105"
                >
                  <div className="bg-yellow-400 text-white text-sm rounded px-2 py-1 mb-2 inline-block">
                    Bonus 10%
                  </div>
                  <div className="text-lg font-semibold mb-2">Rp. 10.000</div>
                  <div className="text-gray-500">+ 100 Diamonds</div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Topup;
