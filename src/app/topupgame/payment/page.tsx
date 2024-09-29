import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-8 pt-24">
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-brown-800 mb-4">Terima Kasih!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Harap lengkapi pembayaran. Pesanan kamu <span className="font-semibold">#B77422046TN</span> menunggu pembayaran sebelum dikirim.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Harap Dibayar Sebelum <span className="font-semibold">2024-09-08 23:24:41</span>. Segera lakukan pembayaran sesuai dengan kode bayar/nomor VA yang tercantum. Pastikan nominal pembayaran juga sesuai dengan total bayar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/icons/mobile-legends.webp" 
                  alt="Product Image"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-brown-800">MOBILE LEGEND - 1412 Diamond</h3>
                  <p className="text-sm text-gray-600">Nickname: Nobels</p>
                  <p className="text-sm text-gray-600">ID: 198262897</p>
                  <p className="text-sm text-gray-600">Server: 2988</p>
                  <p className="text-sm text-gray-600">SN: ############</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brown-800">Metode Pembayaran</h4>
                <p className="text-sm text-gray-600">QRIS</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brown-800">Nomor Invoice</h4>
                <p className="text-sm text-gray-600">#B77422046TN</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brown-800">Status Pembelian</h4>
                <span className="inline-block bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">Pending</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-brown-800 mb-2">Total Pembayaran</h4>
              <div className="bg-brown-800 text-black text-2xl font-bold px-6 py-3 rounded-lg">Rp 324.603</div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-brown-800 mb-2">Scan untuk Membayar</h4>
              <Image
                src="/images/qr-code-placeholder.png" // Ganti dengan gambar QR Code yang sesuai
                alt="QR Code"
                width={150}
                height={150}
                className="border border-gray-300"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
