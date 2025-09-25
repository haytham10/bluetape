import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollY, mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen }) => (
  <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 shadow-lg backdrop-blur' : 'bg-white/80 shadow-sm backdrop-blur'}`}> 
    <div className="container">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
        	<img src="/logo-icon.png" alt="BlueTape Logo" className="h-8 w-8 mr-1" />
          <span className="font-bold text-primary-600 text-xl ml-1">BlueTape</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-gray-700 hover:text-primary-700 transition-all duration-200 relative group">
            Problem
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#solution" className="text-gray-700 hover:text-primary-700 transition-all duration-200 relative group">
            Solution
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-700 transition-all duration-200 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Join Waitlist</button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={`md:hidden border-t transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-4">
          <a href="#problem" className="text-gray-700 hover:text-primary-700 transition-colors duration-200 hover:translate-x-2 transform" onClick={() => setMobileMenuOpen(false)}>Problem</a>
          <a href="#solution" className="text-gray-700 hover:text-primary-700 transition-colors duration-200 hover:translate-x-2 transform" onClick={() => setMobileMenuOpen(false)}>Solution</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-700 transition-colors duration-200 hover:translate-x-2 transform" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <button onClick={() => { document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="btn-primary text-center">Join Waitlist</button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
