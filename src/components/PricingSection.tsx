import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingSection: React.FC = () => (
  <section id="pricing" className="py-20 bg-white">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="subtext">Plans that grow with your business. Start small, scale up as needed.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Tier */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-2xl font-semibold mb-4">Basic</h3>
          <div className="text-4xl font-bold mb-4"><span className="group-hover:text-primary-600 transition-colors duration-200">$49</span><span className="text-xl font-normal text-gray-600">/month</span></div>
          <p className="text-gray-600 mb-6">Perfect for solo contractors</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>1-2 users</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>Unlimited permits & licenses</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>Automated email alerts</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>Document storage</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>Email support</span></li>
          </ul>
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="w-full btn-primary">Get Started</button>
        </div>
        {/* Pro Tier - Most Popular */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 transform scale-105 relative hover:scale-110 transition-all duration-300 shadow-2xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">Most Popular</div>
          <h3 className="text-2xl font-semibold mb-4">Pro</h3>
          <div className="text-4xl font-bold mb-4">$129<span className="text-xl font-normal text-blue-100">/month</span></div>
          <p className="text-blue-200 mb-6">For growing teams</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center"><CheckCircle className="text-green-400 mr-3 hover:scale-110 transition-transform duration-200" size={20} /><span>Up to 10 users</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-400 mr-3 hover:scale-110 transition-transform duration-200" size={20} /><span>Multi-project support</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-400 mr-3 hover:scale-110 transition-transform duration-200" size={20} /><span>Mobile app access</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-400 mr-3 hover:scale-110 transition-transform duration-200" size={20} /><span>Calendar integrations</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-400 mr-3 hover:scale-110 transition-transform duration-200" size={20} /><span>Priority support</span></li>
          </ul>
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">Get Started</button>
        </div>
        {/* Enterprise Tier */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
          <div className="text-4xl font-bold mb-4"><span className="group-hover:text-primary-600 transition-colors duration-200">$299</span><span className="text-xl font-normal text-gray-600">+/month</span></div>
          <p className="text-gray-600 mb-6">For larger operations</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>Unlimited users</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>Custom reports</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>API integrations</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>Dedicated account manager</span></li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" size={20} /><span>White-label options</span></li>
          </ul>
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="w-full btn-primary">Contact Sales</button>
        </div>
      </div>
      <div className="text-center mt-12"><p className="text-gray-600">All plans include a 30-day free trial. No credit card required.</p></div>
    </div>
  </section>
);

export default PricingSection;
