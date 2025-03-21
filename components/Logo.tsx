"use client";
import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 50, height = 50, className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      className={className}
      aria-label="Peeper Logo"
    >
      {/* Main circle with gradient */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="url(#peeper-gradient)" 
      />
      
      {/* Eye pupil */}
      <circle 
        cx="50" 
        cy="50" 
        r="20" 
        fill="#FFFFFF" 
      />
      
      {/* Pupil */}
      <circle 
        cx="50" 
        cy="50" 
        r="12" 
        fill="#000000" 
      />
      
      {/* Shine/highlight */}
      <circle 
        cx="44" 
        cy="44" 
        r="5" 
        fill="#FFFFFF" 
        fillOpacity="0.8" 
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="peeper-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B4DFF" />
          <stop offset="100%" stopColor="#00BFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;