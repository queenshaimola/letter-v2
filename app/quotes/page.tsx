'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function QuotesPage() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out' | ''>('');
  const [showFinalBtn, setShowFinalBtn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const quotes = [
    "I hope you remember you matter...",
    "You are precious...",
    "I hope the world would treat you better. . ."
  ];

  const displayTime = 3000; // 3 detik teks terlihat
  const fadeTime = 1500;    // 1.5 detik durasi fade

  useEffect(() => {
    // Putar musik otomatis saat halaman dibuka
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log('Audio error:', err));
    }

    const timer = setTimeout(() => {
      runQuoteAnimation(0);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const runQuoteAnimation = (index: number) => {
    if (index < quotes.length) {
      setCurrentQuoteIndex(index);
      setFadeState('fade-in');

      setTimeout(() => {
        setFadeState('fade-out');

        setTimeout(() => {
          runQuoteAnimation(index + 1);
        }, fadeTime);

      }, displayTime);
    } else {
      setTimeout(() => {
        setShowFinalBtn(true);
      }, 500);
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Poppins:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <main className="min-h-screen w-full flex justify-center items-center font-['Caveat',cursive] p-5 relative overflow-hidden bg-[#0c0c0c] text-white text-center">
        {/* Background Video Fullscreen */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-screen h-screen object-cover -z-20 opacity-50"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
          Browser Anda tidak mendukung video tag.
        </video>

        {/* Overlay Gelap */}
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-[4px] -z-10" />

        {/* Musik Latar */}
        <audio ref={audioRef} loop src="/audio/music.mp3" />

        {/* Wadah Teks yang Berganti-ganti */}
        <div className="max-w-[800px] w-[90%] p-5 z-10">
          {!showFinalBtn ? (
            <h1
              className={`text-[2.8rem] leading-[3.5rem] tracking-[1px] text-[#fffdf9] [text-shadow:0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-[1500ms] ease-in-out ${
                fadeState === 'fade-in'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-[10px]'
              }`}
            >
              {quotes[currentQuoteIndex]}
            </h1>
          ) : (
            <Link
              href="/"
              className="inline-block mt-[30px] bg-white/20 text-white px-7 py-2.5 text-lg font-['Poppins',sans-serif] font-normal rounded-full border border-white/40 backdrop-blur-md cursor-pointer no-underline transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-white/35 hover:-translate-y-0.5 animate-fadeIn"
            >
              ❤️
            </Link>
          )}
        </div>
      </main>
    </>
  );
}