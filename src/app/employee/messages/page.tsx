'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Edit,
  MoreHorizontal,
  Archive
} from 'lucide-react';
import ActiveUserAvatar from '@/components/employee-team-leader/shared/GroupChat/ActiveUserAvatar';
import ChatListItem from '@/components/employee-team-leader/shared/GroupChat/ChatListItem';
import ChatArea from '@/components/employee-team-leader/shared/GroupChat/ChatArea';
import GroupDetailsSidebar from '@/components/employee-team-leader/shared/GroupChat/GroupDetailsSidebar';

interface GroupMember {
  name: string;
  role: string;
  avatar: string;
}

interface UserThread {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
  unreadCount?: number;
  isOnline: boolean;
  isTyping?: boolean;
  hasAttachment?: boolean;
  hasImage?: boolean;
  isSentByMeAndRead?: boolean;

  // Dynamic project details
  serviceLine: string;
  teamName: string;
  status: string;
  priority: string;
  createdDate: string;
  startDate: string;
  deliveryDeadline: string;
  initialSeconds: number;
  members: GroupMember[];
}

export default function EmployeeMessagesPage() {
  const [activeChatId, setActiveChatId] = useState<string | null>('2');
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Shared seconds counters for active ticking
  const [timeCounters, setTimeCounters] = useState<Record<string, number>>({
    '1': 293153,
    '2': 293153,
    '3': 216000,
    '4': 0,
    '5': 86400,
    '6': 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeCounters((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((key) => {
          const val = next[key];
          if (val !== undefined && val > 0) {
            next[key] = val - 1;
          }
        });
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const avatars = {
    shakil: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    franchys: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    tprice34: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    hayzee152: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    beautipholl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80',
    kevicav: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  };

  const groupMembers = {
    default: [
      { name: 'Imran Hossain', role: 'admin', avatar: avatars.franchys },
      { name: 'Hossain Mishu', role: 'member', avatar: avatars.tprice34 },
      { name: 'UX Shakil', role: 'member', avatar: avatars.shakil },
    ],
    full: [
      { name: 'Imran Hossain', role: 'admin', avatar: avatars.franchys },
      { name: 'Hossain Mishu', role: 'member', avatar: avatars.tprice34 },
      { name: 'UX Shakil', role: 'member', avatar: avatars.shakil },
      { name: 'Theresa Webb', role: 'member', avatar: avatars.shakil },
    ]
  };

  const threads: UserThread[] = [
    {
      id: '1',
      name: 'franchys || Innosight || FO822580....',
      avatar: avatars.franchys,
      message: 'Marina is typing.....',
      time: '07:38 am',
      unreadCount: 20,
      isOnline: true,
      isTyping: true,
      serviceLine: 'CUSTOM-FSD',
      teamName: 'Innosight Design',
      status: 'WIP',
      priority: 'Urgent',
      createdDate: 'Jun 28, 2026',
      startDate: '18 July 2026, 1:23 AM',
      deliveryDeadline: '30 July 2026, 4:57 PM',
      initialSeconds: 293153,
      members: groupMembers.default
    },
    {
      id: '2',
      name: 'tprice34 || tech_omega || FO2228CA90708',
      avatar: avatars.tprice34,
      message: 'Marina is typing.....',
      time: '03:48 am',
      isOnline: true,
      isTyping: true,
      serviceLine: 'CUSTOM-FSD',
      teamName: 'Future Stack',
      status: 'WIP',
      priority: 'Urgent',
      createdDate: 'Jun 28, 2026',
      startDate: '18 July 2026, 1:23 AM',
      deliveryDeadline: '30 July 2026, 4:57 PM',
      initialSeconds: 293153,
      members: groupMembers.full
    },
    {
      id: '3',
      name: 'hayzee152 | bits_wise | FO82252....',
      avatar: avatars.hayzee152,
      message: 'Meet me before presentation.......',
      time: '01:08 pm',
      isOnline: true,
      isSentByMeAndRead: true,
      serviceLine: 'BITS-WISE-DEV',
      teamName: 'Bits Team',
      status: 'Planing',
      priority: 'Normal',
      createdDate: 'Jul 10, 2026',
      startDate: '20 July 2026, 10:00 AM',
      deliveryDeadline: '28 July 2026, 6:00 PM',
      initialSeconds: 216000,
      members: groupMembers.default
    },
    {
      id: '4',
      name: 'beautipholl || tech_omega || F180....',
      avatar: avatars.beautipholl,
      message: 'Sent a picture',
      time: '12:01 pm',
      isOnline: false,
      hasImage: true,
      serviceLine: 'TECH-OMEGA-DESIGN',
      teamName: 'Alpha Design',
      status: 'Review',
      priority: 'Low',
      createdDate: 'May 15, 2026',
      startDate: '01 June 2026, 9:00 AM',
      deliveryDeadline: '20 June 2026, 5:00 PM',
      initialSeconds: 0,
      members: groupMembers.default
    },
    {
      id: '5',
      name: 'kevicav||tech_wide||FO722BD311...',
      avatar: avatars.kevicav,
      message: 'Sent an attachment',
      time: '01:34 pm',
      unreadCount: 80,
      isOnline: false,
      hasAttachment: true,
      serviceLine: 'TECH-WIDE-ENG',
      teamName: 'Wide Stack',
      status: 'WIP',
      priority: 'Urgent',
      createdDate: 'Apr 1, 2026',
      startDate: '10 April 2026, 9:00 AM',
      deliveryDeadline: '15 June 2026, 5:00 PM',
      initialSeconds: 86400,
      members: groupMembers.default
    },
    {
      id: '6',
      name: 'Official Announcement | Softvence',
      avatar: '',
      message: 'Meet me before presentation.......',
      time: '07:59 pm',
      unreadCount: 10,
      isOnline: false,
      serviceLine: 'ANNOUNCEMENTS',
      teamName: 'Softvence HR',
      status: 'Delivered',
      priority: 'Low',
      createdDate: 'Jan 1, 2026',
      startDate: '01 Jan 2026, 9:00 AM',
      deliveryDeadline: '01 Jan 2026, 9:00 AM',
      initialSeconds: 0,
      members: groupMembers.default
    },
  ];

  const activeOnlineUsers = [
    { name: 'franchys', src: avatars.franchys },
    { name: 'tprice34', src: avatars.tprice34 },
    { name: 'hayzee152', src: avatars.hayzee152 },
    { name: 'beautipholl', src: avatars.beautipholl },
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
            <div className="bg-[#f7f5f4] hover:bg-orange-50/60 transition-colors duration-150 rounded-[11px] p-4 flex items-center justify-between cursor-pointer select-none mb-3 border border-transparent">
              <span className="font-['Roboto'] font-normal text-[18px] text-[#e66b00]">
                Archived Chats <span className="text-sm font-semibold text-[#e66b00]/80">(2)</span>
              </span>
              <Archive className="size-5 text-[#e66b00] stroke-[2]" />
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
                  status: selectedThread.status,
                  isOnline: selectedThread.isOnline,
                  priority: selectedThread.priority,
                  members: selectedThread.members,
                  serviceLine: selectedThread.serviceLine,
                  teamName: selectedThread.teamName,
                  createdDate: selectedThread.createdDate,
                  startDate: selectedThread.startDate,
                  deliveryDeadline: selectedThread.deliveryDeadline
                }
                : null
            }
            onBack={() => {
              setActiveChatId(null);
              setIsDetailsOpen(false);
            }}
            onHeaderClick={() => setIsDetailsOpen(!isDetailsOpen)}
            countdownSeconds={activeChatId ? (timeCounters[activeChatId] ?? 0) : 0}
          />
        </div>

        {/* Right Side Pane: Group Details Sidebar (Dynamic) */}
        {selectedThread && (
          <GroupDetailsSidebar
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            name={selectedThread.name}
            avatar={selectedThread.avatar}
            serviceLine={selectedThread.serviceLine}
            teamName={selectedThread.teamName}
            status={selectedThread.status}
            createdDate={selectedThread.createdDate}
            startDate={selectedThread.startDate}
            deliveryDeadline={selectedThread.deliveryDeadline}
            initialSeconds={timeCounters[selectedThread.id] ?? 0}
            members={selectedThread.members}
          />
        )}

      </div>
    </div>
  );
}
