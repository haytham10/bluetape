'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Tooltip from '@radix-ui/react-tooltip';
import { TopNav } from './hero/TopNav';
import { HeadlineBlock } from './hero/HeadlineBlock';
import { DashboardPreview } from './hero/DashboardPreview';
import { ProblemsGrid } from './hero/ProblemsGrid';
import { WaitlistForm } from './hero/WaitlistForm';
import { containerVariants } from './hero/animations';

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Animation variants are shared via ./hero/animations

  // itemVariants are defined in ./hero/animations for subcomponents


  return (
    <Tooltip.Provider>
      {/* Top navigation */}
      <TopNav />

      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] min-h-screen flex items-center relative overflow-hidden py-20">
  {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2375b4]/5 rounded-full blur-3xl"
            animate={{
              y: [-10, 10, -10]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1] as [number, number, number, number]
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2275b4]/3 rounded-full blur-3xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number, number, number, number] }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#FF7A00]/30 rounded-full"
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          {/* subtle grid overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="w-full h-full opacity-[0.08]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }}
            />
          </div>
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto px-6 relative z-10"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          
          {/* Side-by-side hero layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Headline content */}
            <div className="text-center lg:text-left">
              <HeadlineBlock />
            </div>
            
            {/* Right side - Dashboard preview */}
            <div className="flex justify-center">
              <DashboardPreview />
            </div>
          </div>

          {/* Problem cards */}
          <ProblemsGrid />

          {/* Waitlist form */}
          <WaitlistForm />
        </motion.div>
      </section>
    </Tooltip.Provider>
  );
}
