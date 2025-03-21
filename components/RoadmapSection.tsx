"use client";
import React from 'react';

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="w-full">
      <h2 className="text-4xl font-bold text-center mb-16">Our Roadmap</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-indigo-500/50 pl-10 pb-10 ml-6">
          {/* Q1 2023 */}
          <div className="mb-12 relative">
            <div className="absolute -left-[52px] w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Q1 2023 - Foundation</h3>
            <p className="text-white/80">
              Platform concept development, team formation, and initial funding round. Technical architecture design and prototype development.
            </p>
          </div>
          
          {/* Q2 2023 */}
          <div className="mb-12 relative">
            <div className="absolute -left-[52px] w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Q2 2023 - Alpha Release</h3>
            <p className="text-white/80">
              Alpha version launch with core social features. Private testing with select users and early adopters. Token economics finalization.
            </p>
          </div>
          
          {/* Q3 2023 */}
          <div className="mb-12 relative">
            <div className="absolute -left-[52px] w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Q3 2023 - Beta & Token Launch</h3>
            <p className="text-white/80">
              Public beta release. PEP token launch on major exchanges. Implementation of reward system and governance mechanisms.
            </p>
          </div>
          
          {/* Q4 2023 */}
          <div className="mb-12 relative">
            <div className="absolute -left-[52px] w-10 h-10 bg-indigo-600/50 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Q4 2023 - Expansion</h3>
            <p className="text-white/80">
              Mobile app release. Advanced features implementation. Strategic partnerships with content creators and other Web3 projects.
            </p>
          </div>
          
          {/* Q1 2024 */}
          <div className="relative">
            <div className="absolute -left-[52px] w-10 h-10 bg-indigo-600/30 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white/30 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Q1 2024 - Full Platform</h3>
            <p className="text-white/80">
              Complete platform release with all features. Developer API. Cross-chain integration and enhanced decentralization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;