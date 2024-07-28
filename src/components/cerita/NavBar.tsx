'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Navigation bar for mobile */}
      <div className="bg-gray-900 text-white p-4 md:hidden">
        <nav className="flex justify-around">
          <Link href="/cerita" className={`block ${isActive('/cerita') ? 'text-yellow-400 font-bold' : ''}`}>
            Hot
          </Link>
          <Link href="/cerita/follow" className={`block ${isActive('/cerita/follow') ? 'text-yellow-400 font-bold' : ''}`}>
            Mengikuti
          </Link>
          <Link href="/ceritaNotifikasi" className={`block ${isActive('/ceritaNotifikasi') ? 'text-yellow-400 font-bold' : ''}`}>
            Notifikasi
          </Link>
        </nav>
      </div>
      {/* Sidebar for larger screens */}
      <div className="hidden md:block md:w-1/5 bg-gray-900 text-white p-2">
        <nav className="space-y-2">
          <Link href="/cerita" className={`block ${isActive('/cerita') ? 'text-yellow-400 font-bold' : ''}`}>
            Hot
          </Link>
          <Link href="/cerita/follow" className={`block ${isActive('/cerita/follow') ? 'text-yellow-400 font-bold' : ''}`}>
            Mengikuti
          </Link>
          <Link href="/ceritaNotifikasi" className={`block ${isActive('/ceritaNotifikasi') ? 'text-yellow-400 font-bold' : ''}`}>
            Notifikasi
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
