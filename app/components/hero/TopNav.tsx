'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Users } from 'lucide-react';

export function TopNav() {
  return (
    <motion.nav className="bg-[#0a0a0a]/95 border-b border-gray-800/30 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div>
          <Image src="/logo/logo-wide.png" alt="BlueTape" width={140} height={28} className="h-7 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300" priority />
        </div>

        <div className="flex items-center gap-4">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2375b4]/10 to-[#2375b4]/5 rounded-full border border-[#2375b4]/20 hover:border-[#2375b4]/40 transition-all duration-300">
                <motion.div className="w-2 h-2 bg-[#2375b4] rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <Users className="w-4 h-4 text-[#2375b4]" />
                <span className="text-sm font-medium text-gray-300">200+ contractors</span>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm border border-gray-700 shadow-lg" sideOffset={5}>
                Contractors already on our waitlist
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </div>
    </motion.nav>
  );
}
