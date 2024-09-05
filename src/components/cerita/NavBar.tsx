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
      <div className="bg-yellow-950 text-white p-2 md:hidden">
        <nav className="flex justify-around">
          <Link href="/cerita" className={`block flex items-center ${isActive('/cerita') ? 'bg-yellow-400 text-yellow-950 font-bold py-1 px-2 rounded' : 'py-1 px-2 rounded'}`}>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2m4 0h9m-9 4h5m1 0h5M3 14h3m9 4h7m-7-8h7M3 6h18M3 18h6m0 0v2m-4-2h4"></path></svg>
            <span className="text-sm">Hot</span>
          </Link>
          <Link href="/cerita/follow" className={`block flex items-center ${isActive('/cerita/follow') ? 'bg-yellow-400 text-yellow-950 font-bold py-1 px-2 rounded' : 'py-1 px-2 rounded'}`}>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M6 20h12m-6-8h.01M12 4h.01M9 8h6"></path></svg>
            <span className="text-sm">Mengikuti</span>
          </Link>
          <Link href="/cerita/notif" className={`block flex items-center ${isActive('/cerita/notif') ? 'bg-yellow-400 text-yellow-950 font-bold py-1 px-2 rounded' : 'py-1 px-2 rounded'}`}>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C17.213 14.791 17 14.4 17 14V10c0-3.866-2.239-7-5-7S7 6.134 7 10v4c0 .4-.213.791-.595 1.195L5 17h5m4 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="text-sm">Notifikasi</span>
          </Link>
        </nav>
      </div>
      {/* Sidebar for larger screens */}
      <div className="hidden md:block md:w-1/6 bg-yellow-950 text-white p-2">
        <nav className="space-y-2">
          <Link href="/cerita" className={`block flex items-center ${isActive('/cerita') ? 'bg-yellow-400 text-yellow-950 font-bold py-1 px-2 rounded' : 'py-1 px-2 rounded'}`}>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2m4 0h9m-9 4h5m1 0h5M3 14h3m9 4h7m-7-8h7M3 6h18M3 18h6m0 0v2m-4-2h4"></path></svg>
            <span className="text-sm">Hot</span>
          </Link>
          <Link href="/cerita/follow" className={`block flex items-center ${isActive('/cerita/follow') ? 'bg-yellow-400 text-yellow-950 font-bold py-1 px-2 rounded' : 'py-1 px-2 rounded'}`}>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M6 20h12m-6-8h.01M12 4h.01M9 8h6"></path></svg>
            <span className="text-sm">Mengikuti</span>
          </Link>
          <Link href="/cerita/notif" className={`block flex items-center ${isActive('/cerita/notif') ? 'bg-yellow-400 text-yellow-950 font-bold py-1 px-2 rounded' : 'py-1 px-2 rounded'}`}>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C17.213 14.791 17 14.4 17 14V10c0-3.866-2.239-7-5-7S7 6.134 7 10v4c0 .4-.213.791-.595 1.195L5 17h5m4 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="text-sm">Notifikasi</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
