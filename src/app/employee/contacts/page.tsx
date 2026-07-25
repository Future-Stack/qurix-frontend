'use client';

import React, { useState } from 'react';
import {
  Search,
  Edit,
  MoreHorizontal,
  Archive
} from 'lucide-react';
import ActiveUserAvatar from '@/components/employee-team-leader/shared/GroupChat/ActiveUserAvatar';
import ChatListItem from '@/components/employee-team-leader/shared/GroupChat/ChatListItem';
import ChatArea from '@/components/employee-team-leader/shared/GroupChat/ChatArea';
import ContactDetailsSidebar from '@/components/employee-team-leader/shared/Contact/ContactDetailsSidebar';

interface GroupMember {
  name: string;
  role: string;
  avatar: string;
}

interface ContactThread {
  id: string;
  name: string;
  username: string;
  avatar: string;
  message: string;
  time: string;
  unreadCount?: number;
  isOnline: boolean;
  isTyping?: boolean;
  hasAttachment?: boolean;
  hasImage?: boolean;
  isSentByMeAndRead?: boolean;

  // Contact details
  serviceLine: string;
  teamName: string;
  phoneNumber: string;
  email: string;
  employeeId: string;
  memberSince: string;
}

export default function EmployeeContactsPage() {
  const [activeChatId, setActiveChatId] = useState<string | null>('6'); // Default to Hossain Mishu
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const avatars = {
    shakil: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    annette: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    cody: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    floyd: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    marvin: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    ralph: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    mishu: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    darlene: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  };

  const activeOnlineUsers = [
    { name: 'Annette', src: avatars.annette },
    { name: 'Cody', src: avatars.cody },
    { name: 'Floyd', src: avatars.floyd },
    { name: 'Marvin', src: avatars.marvin }
  ];

  const threads: ContactThread[] = [
    {
      id: '1',
      name: 'Annette Black',
      username: '@annetteblack',
      avatar: avatars.annette,
      message: 'Meet me before presentation.......',
      time: '01:08 pm',
      unreadCount: 0,
      isOnline: true,
      serviceLine: 'CUSTOM-FSD',
      teamName: 'Future Stack',
      phoneNumber: '+880 123456789',
      email: 'annette@softvence.com',
      employeeId: '16045',
      memberSince: '12 May 2026'
    },
    {
      id: '2',
      name: 'Cody Fisher',
      username: '@codyfisher',
      avatar: avatars.cody,
      message: 'Marina is typing.....',
      time: '03:48 am',
      isOnline: true,
      isTyping: true,
      serviceLine: 'CUSTOM-FSD',
      teamName: 'Future Stack',
      phoneNumber: '+880 123456789',
      email: 'cody@softvence.com',
      employeeId: '16048',
      memberSince: '15 June 2026'
    },
    {
      id: '3',
      name: 'Floyd Miles',
      username: '@floydmiles',
      avatar: avatars.floyd,
      message: 'Sent a picture',
      time: '12:01 pm',
      isOnline: false,
      hasImage: true,
      serviceLine: 'ANNOUNCEMENTS',
      teamName: 'Softvence HR',
      phoneNumber: '+880 123456789',
      email: 'floyd@softvence.com',
      employeeId: '16052',
      memberSince: '20 July 2026'
    },
    {
      id: '4',
      name: 'Marvin McKinney',
      username: '@marvinmckinney',
      avatar: avatars.marvin,
      message: 'Sent an attachment',
      time: '01:34 pm',
      unreadCount: 80,
      isOnline: false,
      hasAttachment: true,
      serviceLine: 'CUSTOM-FSD',
      teamName: 'Future Stack',
      phoneNumber: '+880 123456789',
      email: 'marvin@softvence.com',
      employeeId: '16054',
      memberSince: '10 June 2026'
    },
    {
      id: '5',
      name: 'Ralph Edwards',
      username: '@ralphedwards',
      avatar: avatars.ralph,
      message: 'Meet me before presentation.......',
      time: '07:59 pm',
      unreadCount: 10,
      isOnline: false,
      serviceLine: 'CUSTOM-FSD',
      teamName: 'Future Stack',
      phoneNumber: '+880 123456789',
      email: 'ralph@softvence.com',
      employeeId: '16055',
      memberSince: '14 July 2026'
    },
    {
      id: '6',
      name: 'Hossain Mishu',
      username: '@hossainmishu',
      avatar: avatars.mishu,
      message: 'What about others?',
      time: '01:34 pm',
      isOnline: true,
      serviceLine: 'CUSTOM-FSD',
      teamName: 'Future Stack',
      phoneNumber: '+880 123456789',
      email: 'hnmishu@softvence.com',
      employeeId: '16056',
      memberSince: '18 July 2026'
    },
    {
      id: '7',
      name: 'Darlene Robertson',
      username: '@darlenerobertson',
      avatar: avatars.darlene,
      message: 'Hello! Are you there?',
      time: 'Last seen 4 minute ago',
      isOnline: false,
      serviceLine: 'ANNOUNCEMENTS',
      teamName: 'Softvence HR',
      phoneNumber: '+880 123456789',
      email: 'darlene@softvence.com',
      employeeId: '16057',
      memberSince: '04 November 2026'
    }
  ];

  const filteredThreads = threads.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedThread = threads.find(t => t.id === activeChatId) || null;

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] md:h-[calc(100vh-54px)] lg:h-[calc(100vh-60px)] min-h-[600px] overflow-hidden -m-6 lg:-m-[30px]">

      {/* Account Info Profile Header */}
      <div className="px-6 lg:px-8 py-4 bg-white border-b border-[#eaecf0] select-none shrink-0 flex items-center gap-4">
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

      {/* Main split dashboard list + conversation area */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* Left Side Pane: Message threads */}
        <div className={`w-full lg:w-[469px] border-r border-[#dadada] flex flex-col h-full bg-white shrink-0 transition-transform duration-300 z-10 ${activeChatId && !isDetailsOpen ? 'hidden lg:flex' : activeChatId && isDetailsOpen ? 'hidden lg:flex' : 'flex'
          }`}>
          {/* Active online members list */}
          <div className="px-6 py-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-3.5 overflow-x-auto pb-1.5 scrollbar-thin">
              {activeOnlineUsers.map((user) => (
                <ActiveUserAvatar
                  key={user.name}
                  name={user.name}
                  src={user.src}
                  isOnline={true}
                />
              ))}

              <div className="relative shrink-0 select-none group cursor-pointer">
                <div className="size-[56px] rounded-full bg-[#f2fff6] border border-green-100 flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200">
                  <span className="font-['Roboto'] text-[#06530b] text-[14px] font-bold">18+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-6 py-4 flex flex-col gap-4 shrink-0 bg-white">
            <div className="flex items-center justify-between">
              <span className="font-['Roboto'] font-semibold text-[20px] text-[#454852]">
                Messages
              </span>
              <div className="flex items-center gap-3 text-[#a19791]">
                <button className="p-1.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" title="Write message">
                  <Edit className="size-5 stroke-[2]" />
                </button>
                <button className="p-1.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" title="Options">
                  <MoreHorizontal className="size-5 stroke-[2]" />
                </button>
              </div>
            </div>

            <div className="relative h-[52px] w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-[17px] stroke-[2]" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full bg-[#f5f5f5] text-sm text-gray-800 pl-11 pr-4 rounded-[15px] border border-transparent focus:bg-white focus:border-[#eaecf0] focus:outline-none transition-all placeholder:text-[#a19791]"
              />
            </div>
          </div>

          {/* Message threads list */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-2 bg-white scrollbar-thin">
            <div className="bg-[#f7f5f4] hover:bg-slate-100 transition-colors duration-150 rounded-[11px] p-4 flex items-center justify-between cursor-pointer select-none mb-3 border border-transparent">
              <span className="font-['Roboto'] font-normal text-[18px] text-[#06530b]">
                Archived Chats
              </span>
              <Archive className="size-5 text-[#06530b] stroke-[2]" />
            </div>

            {filteredThreads.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8 font-sans">No chats match your search.</p>
            ) : (
              filteredThreads.map((thread) => (
                <ChatListItem
                  key={thread.id}
                  name={thread.name}
                  avatar={thread.avatar}
                  message={thread.message}
                  time={thread.time}
                  unreadCount={thread.unreadCount}
                  isOnline={thread.isOnline}
                  isTyping={thread.isTyping}
                  hasAttachment={thread.hasAttachment}
                  hasImage={thread.hasImage}
                  isSentByMeAndRead={thread.isSentByMeAndRead}
                  isActive={activeChatId === thread.id}
                  onClick={() => {
                    setActiveChatId(thread.id);
                    setIsDetailsOpen(false); // Close details when switching chats
                  }}
                />
              ))
            )}
          </div>
        </div>

        {/* Middle Pane: Chat Area Feed */}
        <div className={`flex-1 h-full bg-slate-50 transition-transform duration-300 ${activeChatId ? 'flex' : 'hidden lg:flex'
          }`}>
          <ChatArea
            activeChat={
              selectedThread
                ? {
                  id: selectedThread.id,
                  name: selectedThread.name,
                  avatar: selectedThread.avatar,
                  status: selectedThread.id === '7' ? 'Last seen 4 minute ago' : (selectedThread.isOnline ? 'Active Now' : 'Offline'),
                  isOnline: selectedThread.isOnline
                }
                : null
            }
            onBack={() => {
              setActiveChatId(null);
              setIsDetailsOpen(false);
            }}
            onHeaderClick={() => setIsDetailsOpen(!isDetailsOpen)}
            countdownSeconds={0}
          />
        </div>

        {/* Right Side Pane: Contact Details Sidebar (Dynamic) */}
        {selectedThread && (
          <ContactDetailsSidebar
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            name={selectedThread.name}
            username={selectedThread.username}
            avatar={selectedThread.avatar}
            serviceLine={selectedThread.serviceLine}
            teamName={selectedThread.teamName}
            phoneNumber={selectedThread.phoneNumber}
            email={selectedThread.email}
            employeeId={selectedThread.employeeId}
            memberSince={selectedThread.memberSince}
          />
        )}

      </div>
    </div>
  );
}
