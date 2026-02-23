import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-1 group ${className}`}>
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="transform group-hover:scale-105 transition-transform duration-500"
        >
          {/* Definitions for Gradients */}
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8DB6A0" />
              <stop offset="50%" stopColor="#FF6F61" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C6B6FF" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Heart Swirls - Green to Pink */}
          <path 
            d="M50 85C50 85 20 65 15 45C10 25 30 15 50 35C70 15 90 25 85 45C80 65 50 85 50 85Z" 
            stroke="url(#heartGradient)" 
            strokeWidth="3" 
            strokeLinecap="round"
            className="opacity-40"
          />
          
          {/* Swirling Lines - Green */}
          <path 
            d="M30 35C25 40 25 55 40 75" 
            stroke="#8DB6A0" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            className="opacity-80"
          />
          
          {/* Swirling Lines - Pink */}
          <path 
            d="M70 35C75 40 75 55 60 75" 
            stroke="#FF6F61" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            className="opacity-80"
          />

          {/* Charcoal Human Figure */}
          <g fill="#3E2C2C">
            {/* Head */}
            <circle cx="48" cy="42" r="4" />
            {/* Body */}
            <path d="M48 46C48 46 44 50 44 58C44 66 48 72 52 70C56 68 54 58 54 50C54 48 52 46 48 46Z" />
            {/* Arms */}
            <path d="M48 50C48 50 42 52 40 50" stroke="#3E2C2C" strokeWidth="2" strokeLinecap="round" />
            <path d="M52 50C52 50 56 45 58 40" stroke="#3E2C2C" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Lotus Flower - Pink/Purple */}
          <path 
            d="M58 40C58 40 56 36 58 34C60 32 62 34 62 34C62 34 64 32 66 34C68 36 66 40 66 40C66 40 68 42 66 44C64 46 62 44 62 44C62 44 60 46 58 44C56 42 58 40 58 40Z" 
            fill="#FF6F61" 
            fillOpacity="0.8"
          />
          
          {/* Sparkles */}
          <circle cx="35" cy="45" r="1" fill="#C6B6FF" className="animate-pulse" />
          <circle cx="65" cy="55" r="1" fill="#C6B6FF" className="animate-pulse" />
          <path d="M42 38L43 36L44 38L42 38Z" fill="#FF6F61" />
        </svg>
      </div>
      <span className="text-2xl font-serif font-bold tracking-tight text-primary">
        Chạm Nghề
      </span>
    </div>
  );
};
