"use client";
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center">
        <Logo width={40} height={40} />
        <span className="ml-3 text-xl font-semibold text-white">Peeper</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
        <a href="#tokens" className="text-white/80 hover:text-white transition-colors">Tokens</a>
        <a href="#roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</a>
        <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
      </div>
      
      <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium hover:shadow-lg transition-shadow">
        Connect
      </button>
    </nav>
  );
};

export default Navbar;