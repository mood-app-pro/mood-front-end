"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  comments: number;
  avatar: string;
}

const posts: Post[] = [
  {
    username: 'Diana',
    time: 'July 1st at 8:12 PM',
    content: 'DADU BERHADIAH Hai ol! Daripada gabut malam jumat mending ikut event dadu kita aja! Berhadiah "SUMMER SURFING" tiap sesi nya loh 🥳 Hari : Kamis, 25 Juli 2024 Jam : 20.00 WIB Regist 199c ke panitia (boleh req sesi) dan boleh ikut lebih dari 1 slot HADIAH TIAP SESI : 5.000 COIN',
    image: '/images/cerita/awaw11.jpg',
    likes: 21,
    comments: 21,
    avatar: '/images/cerita/profile1.jpg',
  },
  {
    username: 'Tian Siskayanti',
    time: 'July 2nd at 9:14 PM',
    content: 'Join our gaming night this Friday! Exciting rewards and fun await. Don\'t miss out!',
    image: '/images/cerita/aw12.jpg',
    likes: 15,
    comments: 10,
    avatar: '/images/cerita/profile3.jpg',
  },
];

const initialComments: Comment[][] = [
  [
    {
      username: 'Ryan',
      content: 'Komentar pertama untuk post Awaw. Menarik sekali eventnya!',
      avatar: 'https://ik.imagekit.io/nk4zisz8e/27b52905-25f4-454b-b8e8-daa373972804.webp?updatedAt=1727487911247',
    },
    {
      username: 'Siti',
      content: 'Aku juga mau ikut event ini, semoga menang!',
      avatar: 'https://ik.imagekit.io/nk4zisz8e/27b52905-25f4-454b-b8e8-daa373972804.webp?updatedAt=1727487911247',
    },
  ],
  [
    {
      username: 'Budi',
      content: 'Wow, gaming night! Seru banget!',
      avatar: 'https://ik.imagekit.io/nk4zisz8e/27b52905-25f4-454b-b8e8-daa373972804.webp?updatedAt=1727487911247',
    },
  ],
];

const emojis: string[] = [
  '😀', '😁', '😂', '🤣', '😃', '😅', '😆', '😉', '😊', '😎',
  '😯', '😫', '🥱', '😴', '😌', '😛', '😜', '😝', '🤤', '😒',
  '😓', '😔', '😕', '🤑',
];

const CeritaPage: React.FC = () => {
  // State untuk komentar setiap postingan
  const [comments, setComments] = useState<Comment[][]>(initialComments);

  // State untuk input komentar setiap postingan
  const [newComments, setNewComments] = useState<string[]>(posts.map(() => ''));

  // State untuk mengetahui postingan mana yang sedang aktif (menampilkan komentar)
  const [activeCommentIndex, setActiveCommentIndex] = useState<number | null>(null);

  // State untuk mengetahui emoji picker mana yang sedang aktif
  const [showEmojiPickerIndex, setShowEmojiPickerIndex] = useState<number | null>(null);

  const [helloClicked, setHelloClicked] = useState(false);
  const [isLoggedIn] = useState(true); // Ganti ini dengan status login aktual Anda

  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lastHelloTime = localStorage.getItem('lastHelloTime');
    if (lastHelloTime) {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - Number(lastHelloTime);
      if (timeDiff < 12 * 60 * 60 * 1000) {
        setHelloClicked(true);
      }
    }
  }, []);

  // Menutup emoji picker jika pengguna mengklik di luar picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPickerIndex(null);
      }
    };

    if (showEmojiPickerIndex !== null) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showEmojiPickerIndex]);

  const toggleComments = (index: number) => {
    setActiveCommentIndex(activeCommentIndex === index ? null : index);
    setShowEmojiPickerIndex(null); // Tutup emoji picker saat komentar diganti
  };

  const addComment = (postIndex: number, content: string, avatar: string) => {
    if (content.trim()) {
      const updatedComments = [...comments];
      updatedComments[postIndex].push({
        username: 'Anda',
        content: content.trim(),
        avatar: avatar,
      });
      setComments(updatedComments);

      // Reset input komentar untuk postingan tersebut
      const updatedNewComments = [...newComments];
      updatedNewComments[postIndex] = '';
      setNewComments(updatedNewComments);
    }
  };

  const handleHelloClick = (postIndex: number, avatar: string) => {
    if (!helloClicked) {
      const helloMessage = 'Hello!';
      addComment(postIndex, helloMessage, avatar); // Tambahkan komentar segera
      setHelloClicked(true);
      localStorage.setItem('lastHelloTime', new Date().getTime().toString());
    }
  };

  const toggleEmojiPickerForPost = (index: number) => {
    setShowEmojiPickerIndex(showEmojiPickerIndex === index ? null : index);
  };

  const handleEmojiSelect = (postIndex: number, emoji: string) => {
    const updatedNewComments = [...newComments];
    updatedNewComments[postIndex] += emoji;
    setNewComments(updatedNewComments);
    setShowEmojiPickerIndex(null);
  };

  return (
    <>
      <Header />
      <div className="mt-10 flex flex-col md:flex-row">
        <NavBar />
        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-auto relative">
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
                    onClick={() => toggleComments(index)}
                    className="flex items-center space-x-1"
                  >
                    <span>💬</span>
                    <span>{comments[index].length}</span>
                  </button>
                </div>
                <button
                  className="flex items-center space-x-1 text-sm"
                  onClick={() => handleHelloClick(index, post.avatar)}
                  disabled={helloClicked}
                >
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
                        placeholder="Add a comment..."
                        className="border rounded-lg p-2 flex-1"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            addComment(index, newComments[index], '/images/cerita/profile2.jpg');
                          }
                        }}
                      />    
                      {isLoggedIn && (
                        <button
                          onClick={() => addComment(index, newComments[index], '/images/cerita/profile2.jpg')}
                          className="ml-2 mt-1.5 bg-blue-500 text-white rounded-lg px-2 py-1"
                        >
                          Kirim
                        </button>
                      )}
                      {isLoggedIn && (
                        <button
                          onClick={() => toggleEmojiPickerForPost(index)}
                          className="ml-2 mt-2.5"
                        >
                          <Image
                            src="https://ik.imagekit.io/nk4zisz8e/Emot.png?updatedAt=1727489804266"
                            alt="Emoji"
                            width={20}
                            height={20}
                          />
                        </button>
                      )}
                    </div>

                  {showEmojiPickerIndex === index && (
                    <div
                      ref={emojiPickerRef}
                      className="emoji-picker absolute z-10 bg-slate-800 border-2 border-orange-900 rounded shadow-lg p-2 mt-2 flex flex-wrap"
                      style={{ top: '100%', left: '0' }}
                    >
                      {emojis.map((emoji, emojiIndex) => (
                        <button
                          key={emojiIndex}
                          onClick={() => handleEmojiSelect(index, emoji)}
                          className="m-1 hover:bg-gray-200 p-1 rounded text-xl"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CeritaPage;
