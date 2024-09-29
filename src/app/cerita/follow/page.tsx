"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/cerita/NavBar';

// Definisikan tipe untuk komentar
interface Comment {
  username: string;
  content: string;
  avatar: string;
}

// Definisikan tipe untuk postingan
interface Post {
  username: string;
  time: string;
  content: string;
  image: string;
  likes: number;
  commentsCount: number;
  avatar: string; // Tambahkan properti avatar untuk postingan
}

// Array avatar unik
const avatars: string[] = [
  '/images/cerita/avatarGebi.webp',
  '/images/cerita/profile2.jpg',
  '/images/cerita/profile3.jpg',
  '/images/cerita/profile4.jpg',
  '/images/cerita/profile5.webp',
];

// Helper function untuk mendapatkan avatar secara acak
const getRandomAvatar = () => {
  return avatars[Math.floor(Math.random() * avatars.length)];
};

// Data Postingan dengan avatar unik
const postsData: Post[] = [
  {
    username: 'Yamete Yes Now',
    time: 'July 1st at 8:12 PM',
    content: `DADU BERHADIAH Hai ol! Daripada gabut malam jumat mending ikut event dadu kita aja! Berhadiah "SUMMER SURFING" tiap sesi nya loh 🥳 Hari : Kamis, 25 Juli 2024 Jam : 20.00 WIB Regist 199c ke panitia (boleh req sesi) dan boleh ikut lebih dari 1 slot HADIAH TIAP SESI : 5.000 COIN`,
    image: '/images/cerita/awaw12.jpg',
    likes: 21,
    commentsCount: 21,
    avatar: '/images/cerita/profile5.jpg',
  },
  {
    username: 'Gebian',
    time: 'July 2nd at 9:14 PM',
    content: `Join our gaming night this Friday! Exciting rewards and fun await. Don't miss out!`,
    image: '/images/cerita/profile4.webp',
    likes: 15,
    commentsCount: 10,
    avatar: '/images/cerita/avatarGebi.webp',
  },
];

const initialComments: Comment[][] = postsData.map(() => []);

const emojis: string[] = [
  '😀', '😁', '😂', '🤣', '😃', '😅', '😆', '😉', '😊', '😎', '😯', '😫',
  '🥱', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🤑',
];

const Follow: React.FC = () => {
  // State untuk komentar setiap postingan
  const [comments, setComments] = useState<Comment[][]>(initialComments);
  
  // State untuk input komentar setiap postingan
  const [newComments, setNewComments] = useState<string[]>(postsData.map(() => ''));
  
  // State untuk mengetahui postingan mana yang sedang aktif (menampilkan komentar)
  const [activeCommentIndex, setActiveCommentIndex] = useState<number | null>(null);
  
  // State untuk mengetahui emoji picker mana yang sedang aktif
  const [showEmojiPicker, setShowEmojiPicker] = useState<number | null>(null);

  // Mengambil data komentar dari sessionStorage jika tersedia
  useEffect(() => {
    const savedComments = sessionStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Menyimpan komentar ke sessionStorage setiap kali ada perubahan
  useEffect(() => {
    sessionStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  // Fungsi untuk toggle tampilan komentar
  const toggleComments = (index: number) => {
    setActiveCommentIndex(activeCommentIndex === index ? null : index);
    setShowEmojiPicker(null); // Tutup emoji picker saat komentar diganti
  };

  // Fungsi untuk menambahkan komentar
  const addComment = (postIndex: number, content: string) => {
    if (content.trim()) {
      const updatedComments = [...comments];
      updatedComments[postIndex] = [
        ...updatedComments[postIndex],
        {
          username: 'Anda',
          content: content.trim(),
          avatar: getRandomAvatar(), // Avatar acak untuk setiap komentar baru
        },
      ];
      setComments(updatedComments);

      // Reset input komentar untuk postingan tersebut
      const updatedNewComments = [...newComments];
      updatedNewComments[postIndex] = '';
      setNewComments(updatedNewComments);
    }
  };

  // Fungsi untuk toggle emoji picker per postingan
  const toggleEmojiPickerForPost = (index: number) => {
    setShowEmojiPicker(showEmojiPicker === index ? null : index);
  };

  // Fungsi untuk menangani pemilihan emoji
  const handleEmojiSelect = (postIndex: number, emoji: string) => {
    const updatedNewComments = [...newComments];
    updatedNewComments[postIndex] += emoji;
    setNewComments(updatedNewComments);
    setShowEmojiPicker(null);
  };

  // Menutup emoji picker jika pengguna mengklik di luar picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const emojiPicker = document.querySelector('.emoji-picker');
      if (emojiPicker && !emojiPicker.contains(event.target as Node)) {
        setShowEmojiPicker(null);
      }
    };

    if (showEmojiPicker !== null) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showEmojiPicker]);

  return (
    <div>
      <Header />
      <div className="mt-10 flex flex-col md:flex-row">
        <NavBar />
        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-4">
          {postsData.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-auto">
              {/* Header Postingan */}
              <div className="flex items-center mb-2">
                <Image
                  src={post.avatar}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <div>
                  <h3 className="font-bold text-sm">{post.username}</h3>
                  <p className="text-gray-600 text-xs">{post.time}</p>
                </div>
              </div>
              
              {/* Konten Postingan */}
              <p className="mb-2 text-sm">{post.content}</p>
              <div className="relative w-full pb-[100%] mb-2 bg-gray-200 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt="Post Image"
                  fill
                  className="absolute inset-0 object-cover"
                />
              </div>
              
              {/* Tombol Like dan Comment */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>❤️</span>
                    <span>{post.likes}</span>
                  </button>
                  <button
                    className="flex items-center space-x-1"
                    onClick={() => toggleComments(index)}
                  >
                    <span>💬</span>
                    <span>{comments[index].length}</span>
                  </button>
                </div>
                <button className="flex items-center space-x-1 text-sm">
                  <span>👋</span>
                  <span>Hello...</span>
                </button>
              </div>
              
              {/* Bagian Komentar */}
              {activeCommentIndex === index && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg relative">
                  {/* Daftar Komentar */}
                  {comments[index].map((comment, commentIndex) => (
                    <div key={commentIndex} className="flex items-center mb-4">
                      <Image
                        src={comment.avatar}
                        alt={`${comment.username} Profile Picture`}
                        width={30}
                        height={30}
                        className="rounded-full mr-2"
                      />
                      <div className="text-sm text-gray-700">
                        <h4 className="font-bold">{comment.username}</h4>
                        <p>{comment.content}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Input Komentar */}
                  <div className="flex items-start mt-2 relative">
                    <Image
                      src="/images/cerita/profile2.jpg"
                      alt="Default Profile Picture"
                      width={30}
                      height={30}
                      className="rounded-full mr-2"
                    />
                    <input
                      type="text"
                      value={newComments[index]}
                      onChange={(e) => {
                        const updatedNewComments = [...newComments];
                        updatedNewComments[index] = e.target.value;
                        setNewComments(updatedNewComments);
                      }}
                      placeholder="Tulis komentar..."
                      className="flex-1 border border-gray-300 rounded-lg p-2"
                    />
                    <button
                      onClick={() => addComment(index, newComments[index])}
                      className="ml-2 bg-blue-500 text-white rounded-lg px-3 py-1 mt-1.5"
                    >
                      Kirim
                    </button>
                    <button
                      onClick={() => toggleEmojiPickerForPost(index)}
                      className="ml-2 text-gray-600"
                    >
                      <Image
                      src="https://ik.imagekit.io/nk4zisz8e/Emot.png?updatedAt=1727489804266"
                      alt="Emoji"
                      width={20}
                      height={20}
                      className='mt-3'
                      />
                    </button>
                    {showEmojiPicker === index && (
                      <div className="absolute z-10 emoji-picker">
                        <div className="grid grid-cols-5 gap-2 p-2 bg-white border border-gray-300 rounded-lg">
                          {emojis.map((emoji, emojiIndex) => (
                            <button
                              key={emojiIndex}
                              onClick={() => handleEmojiSelect(index, emoji)}
                              className="text-xl"
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Follow;
