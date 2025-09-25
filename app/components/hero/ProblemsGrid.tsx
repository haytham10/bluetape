'use client';

import { motion } from 'framer-motion';
import { DollarSign, Clock, FileText } from 'lucide-react';
import { itemVariants } from './animations';

export function ProblemsGrid() {
  return (
    <motion.div className="my-24" variants={itemVariants}>
      <motion.div className="mb-12" variants={itemVariants}>
        <motion.p className="text-gray-400 mb-4 text-xl text-center font-medium" variants={itemVariants}>
          Stop losing money on:
        </motion.p>
        <motion.div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8 }} />
      </motion.div>
      <div className="grid sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {/* Permit Fines */}
        <motion.div className="group relative" variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl blur-sm group-hover:from-red-500/10 transition-all duration-300"></div>
          <div className="relative p-8 bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-800/50 transition-all duration-500 hover:bg-gray-900/40">
            <motion.div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-red-500/20 transition-all duration-300" whileHover={{ scale: 1.1 }}>
              <DollarSign className="w-8 h-8 text-red-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-white">Permit Fines</h3>
            <p className="text-gray-300 leading-relaxed">$2,000+ fines when licenses expire unexpectedly</p>
            <div className="mt-4 pt-4 border-t border-gray-800/50">
              <span className="font-bold text-2xl text-red-400">$2,000+</span>
              <span className="text-gray-500 text-sm ml-2">average fine</span>
            </div>
          </div>
        </motion.div>

        {/* Wasted Hours */}
        <motion.div className="group relative" variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent rounded-xl blur-sm group-hover:from-yellow-500/10 transition-all duration-300"></div>
          <div className="relative p-8 bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-800/50 transition-all duration-500 hover:bg-gray-900/40">
            <motion.div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-500/20 transition-all duration-300" whileHover={{ scale: 1.1 }}>
              <Clock className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-white">Wasted Hours</h3>
            <p className="text-gray-300 leading-relaxed">Hours hunting for missing certificates and documents</p>
            <div className="mt-4 pt-4 border-t border-gray-800/50">
              <span className="font-bold text-2xl text-yellow-400">24+</span>
              <span className="text-gray-500 text-sm ml-2">hours/month lost</span>
            </div>
          </div>
        </motion.div>

        {/* Project Delays */}
        <motion.div className="group relative" variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl blur-sm group-hover:from-orange-500/10 transition-all duration-300"></div>
          <div className="relative p-8 bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-800/50 transition-all duration-500 hover:bg-gray-900/40">
            <motion.div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-500/20 transition-all duration-300" whileHover={{ scale: 1.1 }}>
              <FileText className="w-8 h-8 text-orange-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-white">Project Delays</h3>
            <p className="text-gray-300 leading-relaxed">Projects delayed by compliance paperwork chaos</p>
            <div className="mt-4 pt-4 border-t border-gray-800/50">
              <span className="font-bold text-2xl text-orange-400">3-5</span>
              <span className="text-gray-500 text-sm ml-2">days per project</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
