'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, DollarSign, ArrowRight } from 'lucide-react';
import { itemVariants } from './animations';
import { Button } from '@/components/ui/button';

export function HeadlineBlock() {
  return (
    <motion.div className="space-y-10" variants={itemVariants}>
      {/* Kicker */}
      <motion.div className="flex justify-center" variants={itemVariants}>
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
          Compliance that pays for itself
        </span>
      </motion.div>

      <motion.h1 className="text-5xl sm:text-6xl lg:text-8xl font-light text-white leading-[0.85] tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
        Never Get Hit With Another{' '}
        <motion.span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2375b4] to-[#2275b4] relative">
          $2,000 Fine
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2375b4] to-[#2275b4] rounded-full" />
        </motion.span>
      </motion.h1>
      
      <motion.p className="text-[1.15rem] sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }} variants={itemVariants}>
        BlueTape monitors every license, permit, and certificate.<br />Stores the docs, sends early reminders.
      </motion.p>

      {/* Primary CTA Button */}
      <motion.div className="flex" variants={itemVariants}>
        <Button
          onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          aria-label="Join the BlueTape waitlist"
          className="group inline-flex items-center gap-2 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold h-12 px-6 rounded-full shadow-lg shadow-[#FF7A00]/15"
        >
          Join Waitlist
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </motion.div>

      {/* Feature benefits */}
      <motion.div className="flex items-center justify-center gap-8 mt-8" variants={itemVariants}>
        <div className="flex items-center gap-2 text-gray-400">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">Renewals on autopilot</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Shield className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium">100% audit‑ready</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <DollarSign className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">Prevent $2k+ fines</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
