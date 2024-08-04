// pages/chat.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Chat {
  id: number;
  username: string;
  message: string;
  time: string;
  avatar: string;
}

interface Service {
  id: number;
  name: string;
  rating: number;
  price: string;
  image: string;
}

const chats: Chat[] = [
  {
    id: 1,
    username: 'RobbyHabibi',
    message: 'Bisa terima order sekarang?',
    time: '07/24/2024',
    avatar: '/path/to/avatar.jpg',
  },
  // Add more chat items as needed
];

const services: Service[] = [
  {
    id: 1,
    name: 'Mobile Legend',
    rating: 5.0,
    price: 'Handle 1',
    image: '/path/to/service.jpg',
  },
  // Add more service items as needed
];

const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<Chat>(chats[0]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = (chat: Chat) => {
    setSelectedChat(chat);
    setIsChatOpen(true);
  };

  const backToChats = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden bg-gray-100 mt-16">
        {/* Chat List */}
        <div className={`md:w-1/4 w-full bg-white p-4 overflow-y-auto ${isChatOpen ? 'hidden md:block' : 'block'}`}>
          <h2 className="text-xl font-bold mb-4">Chat</h2>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center p-2 mb-2 cursor-pointer hover:bg-gray-200 rounded-lg"
              onClick={() => openChat(chat)}
            >
              <Image
                src={chat.avatar}
                alt={chat.username}
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <div>
                <p className="font-bold">{chat.username}</p>
                <p className="text-sm text-gray-600">{chat.message}</p>
                <p className="text-xs text-gray-400">{chat.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className={`md:w-1/2 w-full bg-white p-4 flex flex-col justify-between overflow-hidden ${isChatOpen ? 'block' : 'hidden md:block'}`}>
          <div className="flex items-center mb-4">
            <button onClick={backToChats} className="md:hidden mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <Image
              src={selectedChat.avatar}
              alt={selectedChat.username}
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <div>
              <p className="font-bold">{selectedChat.username}</p>
              <p className="text-sm text-gray-600">{selectedChat.message}</p>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 mb-4 rounded-lg overflow-y-auto">
            <div className="flex mb-4">
              <Image
                src={selectedChat.avatar}
                alt={selectedChat.username}
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
              <div className="bg-white p-2 rounded-lg shadow">
                <p>{selectedChat.message}</p>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div className="bg-yellow-950 text-white p-2 rounded-lg shadow">
                <p>bisa bang , abang mau berapa jam ?</p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-2 border-t">
            <input
              type="text"
              placeholder="Ketikkan Sesuatu..."
              className="flex-1 p-2 border rounded-l-lg"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9 9m0 0l9-9m-9 9V3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Available Services */}
        <div className="md:w-1/4 w-full bg-white p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Layanan Yang Tersedia</h2>
          {services.map((service) => (
            <div key={service.id} className="bg-white p-4 mb-4 rounded-lg shadow">
              <Image
                src={service.image}
                alt={service.name}
                width={60}
                height={60}
                className="rounded-full mb-2"
              />
              <p className="font-bold">{service.name}</p>
              <p className="text-sm text-gray-600">{service.price}</p>
              <button className="mt-2 bg-green-500 text-white p-2 rounded-lg">
                Order
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatPage;
