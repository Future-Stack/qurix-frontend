'use client';

import React from 'react';

// Localhost asset URLs from Figma MCP server
const imgSpark21 = "http://localhost:3845/assets/d768b024e0c59b8299da20740695ed0b078e12cb.svg";
const imgBookIconAsset = "http://localhost:3845/assets/bbd1f7861c911c2de6de3116a3941a54869f24ce.svg";
const imgServiceKnowledgeAsset = "http://localhost:3845/assets/bc5475ab7ba18472f9f4f9a569683d31ff4197ce.svg";
const imgMessageTemplatesAsset = "http://localhost:3845/assets/700c24717748d5a7d1a7331c0aee34809ed31964.svg";

// Fallback SVGs
const RobotIconFallback = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#F0FFF4" />
    <path d="M16 44C20 40 28 40 32 44C36 40 44 40 48 44V24C44 20 36 20 32 24C28 20 20 20 16 24V44Z" fill="#22C55E" />
    <path d="M32 24V44" stroke="#166534" strokeWidth="2" />
    <circle cx="32" cy="15" r="4" fill="#FFAF38" />
  </svg>
);

const GearsIconFallback = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#FFF8F5" />
    <circle cx="28" cy="28" r="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3" />
    <path d="M20 44L44 20" stroke="#4D8CFA" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const ChatTemplatesIconFallback = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#FFF5FA" />
    <path d="M38 38C38 43.5 33.5 48 28 48C26 48 24.5 47.5 23 46.5L16 49L17.5 42.5C16.5 41 16 39.5 16 38C16 32.5 20.5 28 28 28C35.5 28 38 32.5 38 38Z" fill="#22C55E" />
    <circle cx="23" cy="38" r="2" fill="#FFFFFF" />
    <circle cx="28" cy="38" r="2" fill="#FFFFFF" />
    <circle cx="33" cy="38" r="2" fill="#FFFFFF" />
  </svg>
);

// Leaf/Spark ornament from Figma
const LeafSparkOrnament = () => (
  <div className="absolute top-3 right-3 size-[25px] pointer-events-none select-none">
    <img 
      src={imgSpark21} 
      alt="" 
      className="size-full object-contain opacity-80"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  </div>
);

export default function TeamLeaderLearnBooksPage() {
  const avatars = {
    shakil: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  };

  const learningItems = [
    {
      id: 'ai-chat-assistant',
      title: 'AI Chat Assistant',
      description: 'Analyze client requirements and identify missing information before starting the project.',
      assetUrl: '',
      fallbackIcon: <RobotIconFallback />
    },
    {
      id: 'learn-book',
      title: 'Learn Book',
      description: 'Learn professional communication, response etiquette, and Fiverr best practices.',
      assetUrl: imgBookIconAsset,
      fallbackIcon: <BookIconFallback />
    },
    {
      id: 'service-knowledge',
      title: 'Service Knowledge',
      description: 'Learn what each service includes, its scope, and expected deliverables.',
      assetUrl: imgServiceKnowledgeAsset,
      fallbackIcon: <GearsIconFallback />
    },
    {
      id: 'message-templates',
      title: 'Message Templates',
      description: 'Analyze client requirements and identify missing information before starting the project.',
      assetUrl: imgMessageTemplatesAsset,
      fallbackIcon: <ChatTemplatesIconFallback />
    }
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] md:h-[calc(100vh-54px)] lg:h-[calc(100vh-60px)] min-h-[600px] overflow-hidden -m-6 lg:-m-[30px] bg-white select-none">
      
      {/* Account Info Profile Header */}
      <div className="px-6 lg:px-8 py-4 bg-white border-b border-[#dadada] select-none shrink-0 flex items-center gap-4 h-[129px]">
        <div className="relative shrink-0 flex items-center justify-center size-[74px]">
          <div className="absolute inset-0 border-[3px] border-[#06530b] rounded-full scale-[0.94]" />
          <div className="absolute inset-0 border-2 border-white rounded-full scale-[0.91]" />
          
          <div className="size-[54px] rounded-full overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center shadow-sm">
            <img 
              src={avatars.shakil} 
              alt="UX-SHAKIL" 
              className="size-full object-cover pointer-events-none" 
            />
          </div>
        </div>

        <div>
          <h2 className="font-['Roboto'] font-bold text-[20px] text-black leading-tight">
            UX-SHAKIL
          </h2>
          <p className="font-['Roboto'] font-normal text-[14px] text-[#a19791] mt-0.5">
            My Account
          </p>
        </div>
      </div>

      {/* Main content pane */}
      <div className="flex-1 overflow-y-auto flex justify-center bg-white">
        <div className="w-full lg:w-[975px] lg:border-l lg:border-r border-[#dadada] min-h-full px-4 lg:px-[24.5px] py-6 flex flex-col items-center">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[16px] gap-y-[18px] w-full max-w-[926px] self-start">
            {learningItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white h-[162px] w-full lg:w-[298px] p-5 rounded-[20px] border border-gray-100/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(6,83,11,0.08)] hover:scale-[1.01] transition-all duration-200 relative overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                {/* Spark/Leaf ornament */}
                <LeafSparkOrnament />

                {/* Card Graphic/Icon */}
                <div className="shrink-0 size-[45px] flex items-center justify-center">
                  {item.assetUrl ? (
                    <img 
                      src={item.assetUrl} 
                      alt={item.title} 
                      className="size-full object-contain pointer-events-none" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.fallback-icon');
                          if (fallback) (fallback as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                  ) : null}
                  <div className={`fallback-icon ${item.assetUrl ? 'hidden' : 'block'}`}>
                    {item.fallbackIcon}
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-1 mt-2">
                  <h4 className="font-['Roboto'] font-medium text-[16px] text-[#06530b] leading-tight group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-['Roboto'] font-normal text-[#747474] text-[12px] leading-[20px] line-clamp-2">
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
