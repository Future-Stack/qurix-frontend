'use client';

import React from 'react';

// Fallback SVGs
const RobotIconFallback = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EBF3FF" />
    <rect x="18" y="24" width="28" height="20" rx="6" fill="#4D8CFA" />
    <rect x="22" y="28" width="20" height="12" rx="3" fill="#1D2A44" />
    <circle cx="28" cy="34" r="2.5" fill="#4D8CFA" />
    <circle cx="36" cy="34" r="2.5" fill="#4D8CFA" />
    <rect x="29" y="16" width="6" height="8" fill="#4D8CFA" />
    <circle cx="32" cy="14" r="4" fill="#FFAF38" />
  </svg>
);

const BookIconFallback = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#F0FFF4" />
    <path d="M16 44C20 40 28 40 32 44C36 40 44 40 48 44V24C44 20 36 20 32 24C28 20 20 20 16 24V44Z" fill="#06530B" />
    <path d="M32 24V44" stroke="#043807" strokeWidth="2" />
    <circle cx="32" cy="15" r="4" fill="#FFAF38" />
  </svg>
);

const GearsIconFallback = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#FFF8F5" />
    <circle cx="28" cy="28" r="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3" />
    <path d="M20 44L44 20" stroke="#4D8CFA" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const ChatTemplatesIconFallback = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#FFF5FA" />
    <path d="M38 38C38 43.5 33.5 48 28 48C26 48 24.5 47.5 23 46.5L16 49L17.5 42.5C16.5 41 16 39.5 16 38C16 32.5 20.5 28 28 28C35.5 28 38 32.5 38 38Z" fill="#06530B" />
    <circle cx="23" cy="38" r="2" fill="#FFFFFF" />
    <circle cx="28" cy="38" r="2" fill="#FFFFFF" />
    <circle cx="33" cy="38" r="2" fill="#FFFFFF" />
  </svg>
);

// Figma Node 318:11423 Floral Background Ornaments
const FloralCardBackground = () => (
  <>
    {/* Top Right Mint Flower */}
    <svg 
      className="absolute top-2.5 right-2.5 w-14 h-14 text-[#BEECC5] opacity-75 pointer-events-none select-none transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:opacity-90" 
      viewBox="0 0 100 100" 
      fill="currentColor"
    >
      <g transform="translate(50, 50)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse key={i} rx="5" ry="18" transform={`rotate(${angle}) translate(0, -15)`} />
        ))}
        <circle r="4" fill="#9CD8A7" />
      </g>
    </svg>

    {/* Top Left Soft Large Petals */}
    <svg 
      className="absolute -top-12 -left-12 w-48 h-48 text-[#EDF8EE] opacity-90 pointer-events-none select-none" 
      viewBox="0 0 200 200" 
      fill="currentColor"
    >
      <g transform="translate(50, 50)">
        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
          <ellipse key={i} rx="16" ry="60" transform={`rotate(${angle}) translate(0, -50)`} />
        ))}
      </g>
    </svg>
  </>
);

interface LearnBooksProps {
  userName?: string;
  roleName?: string;
  avatarUrl?: string;
}

export function LearnBooksContent({
  userName = "UX-SHAKIL",
  roleName = "My Account",
  avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
}: LearnBooksProps) {
  const learningItems = [
    {
      id: 'ai-chat-assistant',
      title: 'AI Chat Assistant',
      description: 'Analyze client requirements and identify missing information before starting the project.',
      icon: <RobotIconFallback />
    },
    {
      id: 'learn-book',
      title: 'Learn Book',
      description: 'Learn professional communication, response etiquette, and Fiverr best practices.',
      icon: <BookIconFallback />
    },
    {
      id: 'service-knowledge',
      title: 'Service Knowledge',
      description: 'Learn what each service includes, its scope, and expected deliverables.',
      icon: <GearsIconFallback />
    },
    {
      id: 'message-templates',
      title: 'Message Templates',
      description: 'Analyze client requirements and identify missing information before starting the project.',
      icon: <ChatTemplatesIconFallback />
    }
  ];

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-white select-none">
      
      {/* Profile Header */}
      <div className="w-full flex items-center gap-4 border-b border-[#E2E8F0] px-6 lg:px-[30px] pt-6 lg:pt-[30px] pb-6 shrink-0 bg-white">
        <div className="w-[64px] h-[64px] rounded-full p-[2.5px] figma-avatar-ring shrink-0">
          <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center overflow-hidden">
            <img 
              src={avatarUrl} 
              alt={userName} 
              className="w-full h-full rounded-full object-cover pointer-events-none" 
            />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[20px] text-[#0F172A] leading-tight">
            {userName}
          </h2>
          <p className="text-[13px] text-[#64748B] mt-0.5">
            {roleName}
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="flex-1 overflow-y-auto flex justify-center bg-white">
        <div className="w-full max-w-[1000px] border-x border-[#E2E8F0] min-h-full flex-1 px-6 py-6 flex flex-col">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {learningItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-gradient-to-b from-[#F5FBF6] via-[#FAFDFB] to-white h-[175px] w-full p-5 rounded-[24px] border border-[#E0F2E3] shadow-[0_4px_16px_rgba(6,83,11,0.03)] hover:shadow-[0_12px_28px_rgba(6,83,11,0.09)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                {/* Floral Ornaments from Figma Node 318:11423 */}
                <FloralCardBackground />

                {/* Card Icon */}
                <div className="relative z-10 shrink-0 size-[48px] rounded-2xl bg-white border border-[#E2F4E6] shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="relative z-10 space-y-1">
                  <h4 className="font-bold text-[16px] text-[#06530B] leading-tight group-hover:text-[#043E08] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-[#64748B] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default function EmployeeLearnBooksPage() {
  return (
    <LearnBooksContent 
      userName="UX-SHAKIL"
      roleName="My Account"
      avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    />
  );
}
