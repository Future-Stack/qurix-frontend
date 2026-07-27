"use client";

import React, { useState } from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockChats, initialMockMessages } from '@/components/shared/Communication/mockData';

export default function TeamLeaderFavoritesPage() {
  const [activeTab, setActiveTab] = useState<'messages' | 'contacts'>('messages');

  const profileInfo = {
    name: 'Team Leader',
    role: 'Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=31'
  };

  const favoriteGroups = mockChats.filter(chat => chat.type === 'group');
  const favoriteContacts = mockChats.filter(chat => chat.type === 'individual');

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* Top Tab Switcher Header */}
      <div className="px-6 py-3 bg-white border-b border-[#E2E8F0] select-none shrink-0 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-xl text-[#0F172A] leading-tight">
            Favorites
          </h2>
          <div className="w-px h-6 bg-[#E2E8F0]" />
          <div className="flex gap-1 bg-[#F1F5F9] p-1 rounded-full">
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'messages'
                  ? 'bg-[#06530B] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Favorite Groups
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'contacts'
                  ? 'bg-[#06530B] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Favorite Contacts
            </button>
          </div>
        </div>
      </div>

      {/* Communication Layout matching Messages style */}
      <div className="flex-1 overflow-hidden">
        <CommunicationLayout 
          type={activeTab === 'messages' ? 'favorites' : 'contacts'}
          title={activeTab === 'messages' ? 'Favorite Groups' : 'Favorite Contacts'}
          panel="team-leader"
          profileInfo={profileInfo}
          items={activeTab === 'messages' ? favoriteGroups : favoriteContacts}
          initialMessages={initialMockMessages}
        />
      </div>
    </div>
  );
}
