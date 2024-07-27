'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex justify-center mb-4">
          <Image src="/images/logo/mood.png" width={60} height={60} alt="Logo" priority />
        </div>
        <p className="text-center text-sm mb-6">
          Temukan Partner Baru untuk Bermain. Tidak Lagi Bermain Sendirian.
        </p>
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-start text-sm px-4">
            <Image src="/images/icons/icons-facebook.svg" width={24} height={24} alt="Facebook" className="mr-2" />
            Login Dengan Facebook
          </button>
          <button className="w-full bg-red-600 text-white py-2 rounded flex items-center justify-start text-sm px-4">
            <Image src="/images/icons/icons-google.svg" width={24} height={24} alt="Google" className="mr-2" />
            Login Dengan Google
          </button>
          <button className="w-full bg-yellow-950 text-white py-2 rounded flex items-center justify-start text-sm px-4">
            <Image src="/images/icons/icons-phone.svg" width={24} height={24} alt="Phone" className="mr-2" />
            Login Dengan Nomor HP
          </button>
          <button className="w-full bg-gray-800 text-white py-2 rounded flex items-center justify-start text-sm px-4">
            <Image src="/images/icons/icons-apple.svg" width={24} height={24} alt="Apple" className="mr-2" />
            Login Dengan Apple
          </button>
        </div>
        <div className="text-center text-sm mt-6">
          <p>Atau Masuk Dengan</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <Image src="/images/icons/icons-line.svg" width={24} height={24} alt="Facebook" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <Image src="/images/icons/icons-twitterx.svg" width={24} height={24} alt="Twitter" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <Image src="/images/icons/icons-tik-tok.svg" width={24} height={24} alt="Tiktok" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <Image src="/images/icons/icons-instagram.svg" width={24} height={24} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
