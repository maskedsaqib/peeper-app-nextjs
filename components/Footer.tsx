"use client";
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 pb-10">
      <div className="border-t border-white/10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Logo width={30} height={30} />
              <span className="ml-2 text-lg font-semibold text-white">Peeper</span>
            </div>
            <p className="mt-4 text-white/60 text-sm">
              The next generation social platform built on decentralized technology.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white text-sm">Home</a></li>
              <li><a href="#tokens" className="text-white/60 hover:text-white text-sm">Tokens</a></li>
              <li><a href="#roadmap" className="text-white/60 hover:text-white text-sm">Roadmap</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white text-sm">About</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white text-sm">Discord</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm">Twitter</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm">Telegram</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm">Medium</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Subscribe</h3>
            <p className="text-white/60 text-sm mb-2">Stay updated with our newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l-md px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-indigo-500" 
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 rounded-r-md">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-5 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Peeper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;