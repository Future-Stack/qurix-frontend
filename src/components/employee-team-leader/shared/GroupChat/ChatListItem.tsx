'use client';

import React from 'react';
import { Edit2, Image as ImageIcon, Paperclip, CheckCheck } from 'lucide-react';

interface ChatListItemProps {
  name: string;
  avatar?: string;
  message: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
  isTyping?: boolean;
  hasAttachment?: boolean;
  hasImage?: boolean;
  isSentByMeAndRead?: boolean;
  isActive?: boolean;
  onClick: () => void;
}

export default function ChatListItem({
  name,
  avatar,
  message,
  time,
  unreadCount = 0,
  isOnline = false,
  isTyping = false,
  hasAttachment = false,
  hasImage = false,
  isSentByMeAndRead = false,
  isActive = false,
  onClick,
}: ChatListItemProps) {
  const fallbackInitial = name.trim().charAt(0).toUpperCase();

  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex items-center justify-between p-3.5 rounded-[16px] w-full transition-all duration-200 cursor-pointer select-none ${
        isActive 
          ? 'bg-[#f2fff6] shadow-sm border border-emerald-200/70' 
          : 'bg-white hover:bg-slate-50 border border-transparent'
      }`}
    >
      <div className="flex gap-4 items-center flex-1 min-w-0">
        {/* Avatar */}
        <div className="relative shrink-0 size-[56px]">
          <div className="size-[56px] rounded-full overflow-hidden border border-gray-100 flex items-center justify-center bg-gray-50">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name} 
                className="size-full object-cover pointer-events-none"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('span')) {
                    const span = document.createElement('span');
                    span.className = 'text-gray-500 font-semibold text-lg';
                    span.innerText = fallbackInitial;
                    parent.appendChild(span);
                  }
                }}
              />
            ) : (
              <span className="text-gray-500 font-semibold text-lg">{fallbackInitial}</span>
            )}
          </div>
          {/* Status Dot */}
          <span className={`absolute bottom-0 right-0 size-[14px] rounded-full border-2 border-white shadow-sm ${
            isOnline ? 'bg-[#22c55e]' : 'bg-[#a19791]'
          }`} />
        </div>

        {/* Message details */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <p className="font-['Roboto'] font-normal text-[16px] text-black truncate w-full">
            {name}
          </p>
          <div className="flex gap-2 items-center w-full">
            {/* Status Type Icon */}
            {isTyping && (
              <Edit2 className="size-3.5 text-[#06530b] shrink-0 animate-bounce" />
            )}
            {hasImage && (
              <ImageIcon className="size-3.5 text-[#a19791] shrink-0" />
            )}
            {hasAttachment && (
              <Paperclip className="size-3.5 text-[#a19791] shrink-0" />
            )}
            {isSentByMeAndRead && (
              <CheckCheck className="size-4 text-[#06530b] shrink-0" />
            )}
            
            <p className={`font-['Roboto'] text-[13px] truncate flex-1 ${
              isTyping ? 'text-[#06530b] font-medium' : 'text-[#a19791]'
            }`}>
              {message}
            </p>
          </div>
        </div>
      </div>

      {/* Right column indicators */}
      <div className="flex flex-col gap-3.5 items-end justify-between shrink-0 pl-2 self-stretch">
        <p className="font-['Roboto'] text-[11px] text-[#a19791] font-condensed">
          {time}
        </p>
        
        {unreadCount > 0 ? (
          <div className="bg-[#06530b] h-5 min-w-5 flex items-center justify-center px-1.5 rounded-full shadow-sm animate-pulse">
            <span className="font-['Roboto'] font-bold text-[10px] text-white">
              {unreadCount}
            </span>
          </div>
        ) : (
          /* Placeholder to maintain vertical layout alignment height */
          <div className="h-5" />
        )}
      </div>
    </div>
  );
}
