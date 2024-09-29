// app/cerita/notif/page.tsx
import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/cerita/NavBar';

const notifications = [
  {
    id: 1,
    user: 'Gebian',
    time: 'July 1 at 5:12 PM',
    action: 'Mengikuti Anda',
    avatar: '/images/cerita/avatarGebi.webp',
  },
  {
    id: 2,
    user: 'bbymoy',
    time: 'July 1 at 5:12 PM',
    action: 'Menyukai Anda Cerita Anda',
    avatar: '/images/cerita/aw12.jpg',
  },
  {
    id: 3,
    user: 'bbymoy',
    time: 'July 1 at 5:12 PM',
    action: 'Mengomentari Cerita Anda "Bagus Bangettt !!!"',
    avatar: '/images/cerita/aw12.jpg',
  },
  {
    id: 4,
    user: 'Aylisia',
    time: 'Sept 24 at 5:12 PM',
    action: 'Mengomentari Cerita Anda "Bagus Bangettt !!!"',
    avatar: '/images/cerita/profile2.jpg',
  },
  {
    id: 5,
    user: 'bbymoy',
    time: 'July 1 at 5:12 PM',
    action: 'Mengomentari Cerita Anda "Bagus Bangettt !!!"',
    avatar: '/images/cerita/aw12.jpg',
  },
  {
    id: 6,
    user: 'bbymoy',
    time: 'July 1 at 5:12 PM',
    action: 'Mengomentari Cerita Anda "😍😝😼 !!!"',
    avatar: '/images/cerita/aw12.jpg',
  },
  {
    id: 7,
    user: 'bbymoy',
    time: 'July 1 at 5:12 PM',
    action: 'Mengomentari Cerita Anda "Bagus Bangettt !!!"',
    avatar: '/images/cerita/aw12.jpg',
  },
  {
    id: 8,
    user: 'bbymoy',
    time: 'July 1 at 5:12 PM',
    action: 'Mengomentari Cerita Anda "Bagus Bangettt !!!"',
    avatar: '/images/cerita/aw12.jpg',
  },
  {
    id: 9,
    user: 'bbymoy',
    time: 'July 1 at 5:12 PM',
    action: 'Mengomentari Cerita Anda "Bagus Bangettt !!!"',
    avatar: '/images/cerita/aw12.jpg',
  },
];

const NotifPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-10 flex flex-col md:flex-row">
        <NavBar />
        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-auto">
              <div className="flex items-center mb-2">
                <Image
                  src={notification.avatar}
                  alt={notification.user}
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <div>
                  <h3 className="font-bold text-sm">{notification.user}</h3>
                  <p className="text-gray-600 text-xs">{notification.time}</p>
                </div>
              </div>
              <p className="mt-2 text-sm">{notification.action}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotifPage;
