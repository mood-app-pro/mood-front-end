import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-yellow-950 py-8 text-white">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Toko</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Topup Koin</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Topup Voucher Games</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Telusuri</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Beranda</a></li>
              <li className="mb-2"><Link href="/ceritaHot"  className="hover:underline">Moment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Bantuan</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Panduan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Perusahaan</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Tentang Kami</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Hubungi Kami</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitch"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-discord"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">FOR GAMERS, BY GAMERS.™</h2>
        </div>
        <div className="text-center text-sm">
          <p>&copy; 2024 Mood. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:underline">Syarat dan Ketentuan</a> | 
            <a href="#" className="hover:underline">Aspek Legal</a> | 
            <a href="#" className="hover:underline">Kebijakan Privasi</a> | 
            <a href="#" className="hover:underline">Pengaturan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
