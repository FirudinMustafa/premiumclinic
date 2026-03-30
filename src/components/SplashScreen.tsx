'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Only show on fresh site visits (not internal navigation)
    const hasVisited = sessionStorage.getItem('pc_visited');
    if (hasVisited) return;

    setVisible(true);
    sessionStorage.setItem('pc_visited', '1');

    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setVisible(false), 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/10 splash-ring-1" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-gold/15 splash-ring-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-gold/20 splash-ring-3" />
      </div>

      {/* Gold line pulse */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

      {/* Logo */}
      <div className="relative splash-logo">
        <Image
          src="/images/logo.png"
          alt="Premium Clinic"
          width={280}
          height={80}
          className="h-20 w-auto brightness-0 invert"
          priority
        />
      </div>

      {/* Divider */}
      <div className="w-16 h-0.5 gold-gradient my-6 splash-divider" />

      {/* Slogan */}
      <p className="text-gold-light text-lg tracking-[0.3em] uppercase font-light splash-slogan">
        Premium Care
      </p>
      <p className="text-gray-500 text-sm mt-2 tracking-widest splash-slogan-sub">
        Since 2013
      </p>

      {/* Heartbeat line */}
      <div className="mt-10 splash-heartbeat">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="text-gold/60">
          <path
            d="M0 20 L20 20 L25 20 L30 8 L35 32 L40 12 L45 28 L50 20 L55 20 L120 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="heartbeat-path"
          />
        </svg>
      </div>
    </div>
  );
}
