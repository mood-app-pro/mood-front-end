import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-950 py-8 text-white">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-56">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-xs md:text-sm">Toko</h3>
            <ul className="text-xs">
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
            <h3 className="font-semibold mb-4 text-xs md:text-sm">Telusuri</h3>
            <ul className="text-xs">
              <li className="mb-2">
                <Link href="/" className="hover:underline">
                  Beranda
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/cerita" className="hover:underline">
                  Moment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xs md:text-sm">Bantuan</h3>
            <ul className="text-xs">
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Panduan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xs md:text-sm">Perusahaan</h3>
            <ul className="text-xs">
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Tentang Kami
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xs md:text-sm">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#">
                <Image src="/images/icons/icons-facebook.svg" width={24} height={24} alt="Facebook" />
              </Link>
              <Link href="#">
                <Image src="/images/icons/icons-instagram.svg" width={24} height={24} alt="Instagram" />
              </Link>
              <Link href="#">
                <Image src="/images/icons/icons-twitterx.svg" width={24} height={24} alt="Twitter" />
              </Link>
              <Link href="#">
                <Image src="/images/icons/icons-line.svg" width={24} height={24} alt="YouTube" />
              </Link>
              <Link href="#">
                <Image src="/images/icons/icons-phone.svg" width={24} height={24} alt="Twitch" />
              </Link>
              <Link href="#">
                <Image src="/images/icons/icons-tik-tok.svg" width={24} height={24} alt="Discord" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-base md:text-lg font-semibold">FOR GAMERS, BY GAMERS.™</h2>
        </div>
        <div className="text-center text-xs">
          <p>&copy; 2024 Mood. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="hover:underline">
              Syarat dan Ketentuan
            </Link>{' '}
            |{' '}
            <Link href="#" className="hover:underline">
              Aspek Legal
            </Link>{' '}
            |{' '}
            <Link href="#" className="hover:underline">
              Kebijakan Privasi
            </Link>{' '}
            |{' '}
            <Link href="#" className="hover:underline">
              Pengaturan Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
