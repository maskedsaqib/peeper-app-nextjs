"use client";
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full">
      <h2 className="text-4xl font-bold text-center mb-16">About Peeper</h2>
      
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
        <p className="text-lg text-white/80 mb-6">
          Peeper is a revolutionary social platform built on decentralized technology. Our mission is to create a social network where users have control over their data, content, and are rewarded for their contributions.
        </p>
        <p className="text-lg text-white/80 mb-6">
          Unlike traditional social networks, Peeper uses blockchain technology to ensure transparency, security, and fair compensation for all participants in the ecosystem.
        </p>
        <p className="text-lg text-white/80">
          Join us in building the future of social media where privacy is respected, creativity is rewarded, and communities thrive without arbitrary censorship or data exploitation.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;