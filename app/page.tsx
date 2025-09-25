'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <Footer />
    </div>
  );
}