'use client';

import React from 'react';

interface ActiveUserAvatarProps {
  src?: string;
  name: string;
  isOnline?: boolean;
}

export default function ActiveUserAvatar({ src, name, isOnline = true }: ActiveUserAvatarProps) {
  // Safe fallback if src is not provided or fails to load
  const fallbackInitial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="relative shrink-0 select-none group cursor-pointer">
      <div className="size-[56px] rounded-full overflow-hidden border border-gray-100 flex items-center justify-center bg-emerald-50 hover:scale-105 transition-transform duration-200 shadow-sm">
        {src ? (
          <img 
            src={src} 
            alt={name} 
            className="size-full object-cover pointer-events-none" 
            onError={(e) => {
              // Replace with fallback text
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const span = document.createElement('span');
                span.className = 'text-[#06530b] font-bold text-lg';
                span.innerText = fallbackInitial;
                parent.appendChild(span);
              }
            }}
          />
        ) : (
          <span className="text-[#06530b] font-bold text-lg">{fallbackInitial}</span>
        )}
      </div>

      {/* Online indicator dot */}
      {isOnline && (
        <span className="absolute bottom-0 right-0 size-[14px] bg-[#22c55e] border-2 border-white rounded-full shadow-sm" />
      )}
      
      {/* Tooltip */}
      <div className="absolute top-[64px] left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none z-10">
        {name}
      </div>
    </div>
  );
}
