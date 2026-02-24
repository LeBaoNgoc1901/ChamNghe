import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-1 group ${className}`}>
      <div className="relative w-20 h-20 flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>
      <span className="text-2xl font-serif font-bold tracking-tight text-primary">
        Chạm Nghề
      </span>
    </div>
  );
};
