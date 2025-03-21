"use client";
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 flex flex-col items-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          The Next Generation Social Platform
        </h1>
        <p className="text-xl text-white/80 mb-8 px-4">
          Join the decentralized social revolution. Connect, share, and earn with Peeper's innovative Web3 social experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium hover:shadow-lg transition-shadow">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">1.2M+</span>
          <span className="text-white/70 mt-2">Active Users</span>
        </div>
        <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">250K+</span>
          <span className="text-white/70 mt-2">Daily Posts</span>
        </div>
        <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
          <span className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">$2.5M</span>
          <span className="text-white/70 mt-2">Rewards Distributed</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;