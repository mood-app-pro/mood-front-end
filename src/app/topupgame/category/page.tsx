import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const TopupCategoryPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
      {/* Main Content */}
      <main className="flex-grow pt-12"> {/* Tambahkan padding-top agar tidak tertutup header */}
        {/* Hero Section */}
        <section className="relative w-full h-64 bg-white">
          <Image
            src="/images/banner-category.jpg" // Replace with your background image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Category Banner"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 p-8 flex flex-col items-center text-center text-gray-800">
            <img
              src="/images/game-icon.png" // Replace with game icon
              alt="Game Icon"
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h1 className="text-3xl font-bold">Honor Of Kings</h1>
            <p className="text-sm">Proses Cepat, Layanan Chat 24/7 & Instan</p>
          </div>
        </section>

        <div className="container mx-auto p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Kiri */}
            <aside className="lg:w-1/4 bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Tentang Game</h2>
              <p className="text-sm text-gray-600 mb-4">
                Honor of Kings adalah game populer yang menyediakan top-up cepat dan layanan instan. Layanan kami tersedia 24/7.
              </p>
              <div className="bg-yellow-500 p-4 rounded-lg">
                <h3 className="text-gray-800 font-bold">Testimoni</h3>
                <p className="text-black text-sm">Belum ada ulasan dan penilaian.</p>
              </div>
            </aside>

            {/* Form Utama */}
            <div className="lg:w-3/4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700 space-y-6">
                {/* Step 1: Pilih Nominal */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">1. Pilih Nominal yang Ingin Anda Beli</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {['16 Token', '32 Token', '64 Token', '128 Token', '256 Token', '512 Token'].map((option, index) => (
                      <button 
                        key={index} 
                        className="border border-yellow-500 p-4 rounded-lg text-center hover:bg-yellow-500 hover:text-white transition"
                      >
                        {`Honor of Kings ${option}`}
                        <p className="text-sm mt-2">$29.99</p> {/* Example price */}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Masukkan Data Akun */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">2. Masukkan Data Akun Anda</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Masukkan User ID"
                      className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                      type="text"
                      placeholder="Masukkan Server ID"
                      className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Pastikan User ID dan Server ID sudah benar. ID dapat ditemukan di dalam game.
                  </p>
                </div>

                {/* Step 3: Pilih Metode Pembayaran */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">3. Pilih Metode Pembayaran</h3>
                  <select className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4">
                    <option>QRIS</option>
                    <option>E-Wallet (OVO, Dana, GoPay)</option>
                    <option>Convenience Store</option>
                    <option>Virtual Account</option>
                  </select>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Image src="/images/payment-icons/ovo.png" alt="OVO" width={50} height={50} />
                    <Image src="/images/payment-icons/gopay.png" alt="GoPay" width={50} height={50} />
                    <Image src="/images/payment-icons/dana.png" alt="Dana" width={50} height={50} />
                    <Image src="/images/payment-icons/virtual-account.png" alt="Virtual Account" width={50} height={50} />
                  </div>
                </div>

                {/* Step 4: Masukkan Kode Promo */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">4. Masukkan Kode Promo</h3>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Masukkan Kode Promo"
                      className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600">Gunakan</button>
                  </div>
                </div>

                {/* Step 5: Masukkan Nomor WhatsApp */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">5. Masukkan Nomor WhatsApp</h3>
                  <input
                    type="text"
                    placeholder="Masukkan nomor WhatsApp Anda"
                    className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <p className="text-sm text-gray-500 mt-2">Nomor ini akan digunakan untuk pengiriman bukti transaksi.</p>
                </div>

                {/* Tombol Beli */}
                <div className="text-center mt-8">
                  <button className="w-full bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 transition">
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TopupCategoryPage;
