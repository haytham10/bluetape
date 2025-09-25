import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900/30 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <Image 
            src="/logo/logo-wide.png" 
            alt="BlueTape" 
            width={120} 
            height={24} 
            className="h-5 w-auto brightness-0 invert opacity-40 hover:opacity-60 transition-opacity duration-300" 
          />
        </div>
        <p className="text-gray-600 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
          © 2025 BlueTape • Privacy Policy • Terms of Service
        </p>
      </div>
    </footer>
  );
}
