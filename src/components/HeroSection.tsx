import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  isLoaded: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded }) => (
  <section className="bg-white py-24 relative overflow-hidden">
    {/* Layer 1: animated radial gradients */}
    <div className="absolute inset-0 z-0 bg-animated" aria-hidden="true" />
    {/* Layer 2: soft grid overlay with edge fade */}
    <div className="absolute inset-0 z-[1] bg-grid opacity-[0.10] mask-fade pointer-events-none" aria-hidden="true" />
    {/* Layer 3: morphing gradient blobs */}
    <div className="absolute inset-0 z-[2] pointer-events-none">
      <div className="absolute -top-16 -left-10 w-72 h-72 bg-blue-500/25 blur-3xl rounded-full animate-blob" />
      <div className="absolute top-10 right-[-60px] w-80 h-80 bg-orange-500/20 blur-3xl rounded-full animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-60px] left-[20%] w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full animate-blob animation-delay-4000" />
    </div>
    {/* Layer 4: subtle shimmer beams */}
    <div className="absolute inset-0 z-[3] pointer-events-none">
      <div className="absolute -top-6 left-0 right-0 h-24 gradient-beam animate-shimmer opacity-20" />
      <div className="absolute top-1/3 -left-10 right-[-10px] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[1px]" />
    </div>
    <div className="container">
      <div className={`relative z-10 text-center ${isLoaded ? 'animate-fade-in' : ''}`}> 
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Stop Losing Money to <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text animate-pulse"> Compliance Fines</span>
        </h1>
    <p className={`text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed ${isLoaded ? 'animate-slide-up' : ''}`}>
          Small contractors lose thousands in fines and stop-work orders because tracking permits and licenses is a nightmare. BlueTape automates compliance so you never miss a deadline again.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 ${isLoaded ? 'animate-slide-up' : ''}`}>
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary text-lg group">
            Get Early Access <ArrowRight className="ml-2 inline transition-transform duration-200 group-hover:translate-x-1" size={20} />
          </button>
          <div className="text-gray-600 text-sm">Join 500+ contractors already on the waitlist</div>
        </div>
        {/* Hero Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto ${isLoaded ? 'animate-fade-in' : ''}`}>
          <div className="card">
            <div className="text-3xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform duration-200">$5,000+</div>
            <div className="text-gray-600">Average fine for expired permits</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-200">40%</div>
            <div className="text-gray-600">Of contractors face stop-work orders</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-200">20+ hrs</div>
            <div className="text-gray-600">Monthly admin time wasted</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
