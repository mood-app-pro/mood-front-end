import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-950 py-8 text-white">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Toko</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                Topup Koin
                </Link>
                </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                Topup Voucher Games
                </Link>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Telusuri</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:underline">
                Beranda
                </Link>
                </li>
              <li className="mb-2">
                <Link href="/cerita"  className="hover:underline">Moment</Link>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Bantuan</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">Panduan</Link>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Perusahaan</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">Tentang Kami</Link>
                </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">Hubungi Kami</Link>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></Link>
              <Link href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></Link>
              <Link href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></Link>
              <Link href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitch"></i></Link>
              <Link href="#" className="text-white hover:text-gray-400"><i className="fab fa-discord"></i></Link>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">FOR GAMERS, BY GAMERS.™</h2>
        </div>
        <div className="text-center text-sm">
          <p>&copy; 2024 Mood. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="hover:underline">Syarat dan Ketentuan</Link> | 
            <Link href="#" className="hover:underline">Aspek Legal</Link> | 
            <Link href="#" className="hover:underline">Kebijakan Privasi</Link> | 
            <Link href="#" className="hover:underline">Pengaturan Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
