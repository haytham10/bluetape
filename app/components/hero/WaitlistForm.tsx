'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Briefcase, CheckCircle, Mail, User } from 'lucide-react';
import { itemVariants } from './animations';

type FormData = { name: string; email: string; trade: string };

export function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', trade: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const filledFields = Object.values(formData).filter((f) => f.trim() !== '').length;
    setProgress((filledFields / 3) * 100);
  }, [formData]);

  // Listen for prefill event dispatched by the inline CTA
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ email?: string }>;
      if (custom.detail?.email) {
        setFormData((prev) => ({ ...prev, email: custom.detail!.email! }));
      }
    };
    window.addEventListener('prefill-waitlist', handler as EventListener);
    return () => window.removeEventListener('prefill-waitlist', handler as EventListener);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.trade.trim()) {
        throw new Error('Please fill in all fields');
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }
      await new Promise((res) => setTimeout(res, 1500));
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <motion.div id="waitlist-form" variants={itemVariants}>
      {isSuccess ? (
        <div className="max-w-sm mx-auto bg-green-500/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-white mb-2">You&apos;re on the list</h3>
          <p className="text-gray-400 text-sm">We&apos;ll notify you when BlueTape launches</p>
        </div>
      ) : (
        <div className="max-w-sm mx-auto space-y-6">
          {/* 50% Off Incentive */}
          <div className="bg-gradient-to-r from-[#FF7A00]/10 to-[#FF7A00]/5 backdrop-blur-sm border border-[#FF7A00]/20 rounded-xl p-4 mb-4">
            <p className="text-[#FF7A00] font-semibold text-lg mb-1">Limited Time Offer</p>
            <p className="text-gray-300 text-sm">
              Join our waitlist for <span className="font-semibold text-white">50% off</span> your first three months
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <User className="w-4 h-4" />
                </div>
                <Input name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleInputChange} className="pl-9 bg-gray-900/20 backdrop-blur-sm border-gray-700/30 text-white placeholder:text-gray-500 focus:border-[#2375b4]/50 focus:ring-1 focus:ring-[#2375b4]/20 h-12 text-base rounded-xl transition-all duration-300" disabled={isLoading} />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <Mail className="w-4 h-4" />
                </div>
                <Input name="email" type="email" placeholder="your-email@company.com" value={formData.email} onChange={handleInputChange} className="pl-9 bg-gray-900/20 backdrop-blur-sm border-gray-700/30 text-white placeholder:text-gray-500 focus:border-[#2375b4]/50 focus:ring-1 focus:ring-[#2375b4]/20 h-12 text-base rounded-xl transition-all duration-300" disabled={isLoading} />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <Briefcase className="w-4 h-4" />
                </div>
                <Input name="trade" type="text" placeholder="Your trade (e.g., Plumbing)" value={formData.trade} onChange={handleInputChange} className="pl-9 bg-gray-900/20 backdrop-blur-sm border-gray-700/30 text-white placeholder:text-gray-500 focus:border-[#2375b4]/50 focus:ring-1 focus:ring-[#2375b4]/20 h-12 text-base rounded-xl transition-all duration-300" disabled={isLoading} />
              </div>
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <p className="text-[11px] text-gray-500 text-center">
              By clicking &quot;Join Waitlist&quot;, you agree to our <Link href="/terms" className="text-[#2375b4] hover:underline">Terms of Service</Link> and{' '}
              <Link href="/privacy" className="text-[#2375b4] hover:underline">Privacy Policy</Link>. We will only use your information for product updates and news.
            </p>

            {/* optional: could show progress visually later */}
            <input type="hidden" value={progress} readOnly />

            <Button type="submit" disabled={isLoading} className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold py-3 px-6 text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7A00]/25 disabled:opacity-50 group">
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Joining...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              )}
            </Button>
          </form>
        </div>
      )}
    </motion.div>
  );
}
