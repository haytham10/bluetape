import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../supabaseClient';

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('waitlist').insert([{ email }]);
    setLoading(false);
    if (!error) {
      setIsSubmitted(true);
    } else {
      console.error(error);
      alert('There was an error joining the waitlist. Please try again.');
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Animated background elements */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
  <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">Join the Early Access List</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Be among the first contractors to experience BlueTape. Get exclusive early access pricing and help shape the product with your feedback.</p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto group">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 transform focus:scale-105" />
              <button type="submit" className="btn-accent px-8 py-4 whitespace-nowrap flex items-center justify-center" disabled={loading}>
                {loading ? (
                  <span className="w-5 h-5 mr-2 inline-block border-2 border-white border-t-orange-500 border-b-transparent rounded-full animate-spin" style={{ borderRightColor: 'transparent' }}></span>
                ) : null}
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4 animate-pulse">Over 500 contractors have already joined. Be next!</p>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-white rounded-lg p-8 transform scale-105 animate-pulse">
            <CheckCircle className="text-green-500 mx-auto mb-4 animate-bounce" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">You're In!</h3>
            <p className="text-gray-600">Thanks for joining the waitlist! We'll be in touch soon with updates on early access.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
