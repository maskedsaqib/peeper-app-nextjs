"use client";
import React from 'react';

const TokenCards: React.FC = () => {
  return (
    <section id="tokens" className="mt-32 w-full">
      <h2 className="text-4xl font-bold text-center mb-16">Our Tokens</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-white">PEP</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">PEEPER Token</h3>
          <p className="text-white/70 mb-6">Governance token for the Peeper ecosystem. Vote on proposals and shape the future of the platform.</p>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium hover:shadow-lg transition-shadow">
            Buy PEP
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-white">pPT</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Peeper Points</h3>
          <p className="text-white/70 mb-6">Earn by engaging with the platform. Use points for premium features and exchange for PEP tokens.</p>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg transition-shadow">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TokenCards;