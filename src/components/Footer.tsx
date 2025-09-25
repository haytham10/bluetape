import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
			<div className="flex items-center mb-4">
				<img src="/logo-icon.png" alt="BlueTape Logo" className="h-8 w-8 mr-1" />
				<span className="font-bold text-primary-400 text-xl ml-1">BlueTape</span>
			</div>
			<p className="text-gray-400 max-w-md">Helping small contractors stay compliant, avoid fines, and focus on what they do best - building.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="#solution" className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">Features</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1" rel="nofollow noopener">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1" rel="nofollow noopener">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1" rel="nofollow noopener">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1" rel="nofollow noopener">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 BlueTape. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
