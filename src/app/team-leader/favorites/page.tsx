'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Edit,
  MoreHorizontal
} from 'lucide-react';
import ActiveUserAvatar from '@/components/employee-team-leader/shared/GroupChat/ActiveUserAvatar';
import ChatListItem from '@/components/employee-team-leader/shared/GroupChat/ChatListItem';
import ChatArea from '@/components/employee-team-leader/shared/GroupChat/ChatArea';
import GroupDetailsSidebar from '@/components/employee-team-leader/shared/GroupChat/GroupDetailsSidebar';
import ContactDetailsSidebar from '@/components/employee-team-leader/shared/Contact/ContactDetailsSidebar';

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
  isFavorite: boolean;
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
  isFavorite: boolean;
}

export default function TeamLeaderFavoritesPage() {
  const [activeTab, setActiveTab] = useState<'messages' | 'contacts'>('messages');

  // Messages Tab State
  const [activeMessageId, setActiveMessageId] = useState<string | null>('1'); // Default to Innosight Group
  const [isMessageDetailsOpen, setIsMessageDetailsOpen] = useState(false);
  const [messagesSearchQuery, setMessagesSearchQuery] = useState('');

  // Contacts Tab State
  const [activeContactId, setActiveContactId] = useState<string | null>('1'); // Default to Annette Black
  const [isContactDetailsOpen, setIsContactDetailsOpen] = useState(false);
  const [contactsSearchQuery, setContactsSearchQuery] = useState('');

  const avatars = {
    shakil: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    franchys: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    tprice34: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    hayzee152: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    beautipholl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80',
    kevicav: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    annette: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    cody: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    floyd: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    marvin: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    ralph: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    mishu: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    darlene: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
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

  // Mock message threads (pre-populating some as favorites)
  const [messageThreads, setMessageThreads] = useState<UserThread[]>([
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
      members: groupMembers.default,
      isFavorite: true
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
      members: groupMembers.full,
      isFavorite: false
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
      members: groupMembers.default,
      isFavorite: false
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
      members: groupMembers.default,
      isFavorite: false
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
      members: groupMembers.default,
      isFavorite: true
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
      members: groupMembers.default,
      isFavorite: true
    },
  ]);

  // Mock contacts (pre-populating some as favorites)
  const [contacts, setContacts] = useState<ContactThread[]>([
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
      memberSince: '12 May 2026',
      isFavorite: true
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
      memberSince: '15 June 2026',
      isFavorite: false
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
      memberSince: '20 July 2026',
      isFavorite: false
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
      memberSince: '10 June 2026',
      isFavorite: true
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
      memberSince: '14 July 2026',
      isFavorite: false
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
      memberSince: '18 July 2026',
      isFavorite: true
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
      memberSince: '04 November 2026',
      isFavorite: false
    }
  ]);

  const activeOnlineUsers = [
    { name: 'franchys', src: avatars.franchys },
    { name: 'tprice34', src: avatars.tprice34 },
    { name: 'hayzee152', src: avatars.hayzee152 },
    { name: 'beautipholl', src: avatars.beautipholl },
  ];

  // Toggle favorite message group handler
  const handleToggleFavoriteMessage = (id: string) => {
    setMessageThreads(prev =>
      prev.map(t => t.id === id ? { ...t, isFavorite: !t.isFavorite } : t)
    );
  };

  // Toggle favorite contact handler
  const handleToggleFavoriteContact = (id: string) => {
    setContacts(prev =>
      prev.map(c => c.id === id ? { ...c, isFavorite: !c.isFavorite } : c)
    );
  };

  // Filters
  const favoritedMessageThreads = messageThreads.filter(t => t.isFavorite);
  const filteredMessageThreads = favoritedMessageThreads.filter(t =>
    t.name.toLowerCase().includes(messagesSearchQuery.toLowerCase()) ||
    t.message.toLowerCase().includes(messagesSearchQuery.toLowerCase())
  );
  const selectedMessageThread = messageThreads.find(t => t.id === activeMessageId) || null;

  const favoritedContacts = contacts.filter(c => c.isFavorite);
  const filteredContacts = favoritedContacts.filter(c =>
    c.name.toLowerCase().includes(contactsSearchQuery.toLowerCase()) ||
    c.message.toLowerCase().includes(contactsSearchQuery.toLowerCase())
  );
  const selectedContact = contacts.find(c => c.id === activeContactId) || null;

  // Sync active message thread selection if current choice is unfavorited
  useEffect(() => {
    if (activeMessageId && !messageThreads.find(t => t.id === activeMessageId)?.isFavorite) {
      const nextActive = messageThreads.find(t => t.isFavorite);
      setActiveMessageId(nextActive ? nextActive.id : null);
    }
  }, [messageThreads, activeMessageId]);

  // Sync active contact selection if current choice is unfavorited
  useEffect(() => {
    if (activeContactId && !contacts.find(c => c.id === activeContactId)?.isFavorite) {
      const nextActive = contacts.find(c => c.isFavorite);
      setActiveContactId(nextActive ? nextActive.id : null);
    }
  }, [contacts, activeContactId]);

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] md:h-[calc(100vh-54px)] lg:h-[calc(100vh-60px)] min-h-[600px] overflow-hidden -m-6 lg:-m-[30px]">

      {/* Dynamic Tab Switcher Header */}
      <div className="px-6 lg:px-8 py-3 bg-white border-b border-[#eaecf0] select-none shrink-0 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-['Roboto'] font-bold text-[24px] text-black leading-tight tracking-tight">
            Favorites
          </h2>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex gap-1.5 bg-slate-100/80 p-1.5 rounded-full shadow-inner">
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'messages'
                  ? 'bg-[#06530b] text-white shadow-sm'
                  : 'text-gray-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              Favorite Groups
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'contacts'
                  ? 'bg-[#06530b] text-white shadow-sm'
                  : 'text-gray-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              Favorite Contacts
            </button>
          </div>
        </div>
      </div>

      {/* Main split dashboard list + conversation area */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* Tab 1: Favorite Messages (Groups) */}
        {activeTab === 'messages' && (
          <>
            {/* Left Side Pane: Message threads */}
            <div className={`w-full lg:w-[469px] border-r border-[#dadada] flex flex-col h-full bg-white shrink-0 transition-transform duration-300 z-10 ${
              activeMessageId && !isMessageDetailsOpen ? 'hidden lg:flex' : activeMessageId && isMessageDetailsOpen ? 'hidden lg:flex' : 'flex'
            }`}>

              {/* Active online members list */}
              <div className="px-6 py-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3.5 overflow-x-auto pb-1.5 scrollbar-none">
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
                    Favorite Groups
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
                    placeholder="Search favorites"
                    value={messagesSearchQuery}
                    onChange={(e) => setMessagesSearchQuery(e.target.value)}
                    className="w-full h-full bg-[#f5f5f5] text-sm text-gray-800 pl-11 pr-4 rounded-[15px] border border-transparent focus:bg-white focus:border-[#eaecf0] focus:outline-none transition-all placeholder:text-[#a19791]"
                  />
                </div>
              </div>

              {/* Message threads list */}
              <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-2 bg-white scrollbar-thin">
                {filteredMessageThreads.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <p className="text-sm font-medium text-gray-400 font-sans">No favorite groups found.</p>
                    <p className="text-xs text-gray-400 font-sans mt-1">Mark groups as favorite to see them here.</p>
                  </div>
                ) : (
                  filteredMessageThreads.map((thread) => (
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
                      isActive={activeMessageId === thread.id}
                      onClick={() => {
                        setActiveMessageId(thread.id);
                        setIsMessageDetailsOpen(false); // Close details when switching
                      }}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Middle Pane: Chat Area Feed */}
            <div className={`flex-1 h-full bg-slate-50 transition-transform duration-300 ${
              activeMessageId ? 'flex' : 'hidden lg:flex'
            }`}>
              <ChatArea
                activeChat={
                  selectedMessageThread
                    ? {
                        id: selectedMessageThread.id,
                        name: selectedMessageThread.name,
                        avatar: selectedMessageThread.avatar,
                        status: selectedMessageThread.isOnline ? 'Active Now' : 'Offline',
                        isOnline: selectedMessageThread.isOnline
                      }
                    : null
                }
                onBack={() => {
                  setActiveMessageId(null);
                  setIsMessageDetailsOpen(false);
                }}
                onHeaderClick={() => setIsMessageDetailsOpen(!isMessageDetailsOpen)}
                countdownSeconds={0}
              />
            </div>

            {/* Right Side Pane: Contact Details Sidebar (Dynamic) */}
            {selectedMessageThread && (
              <GroupDetailsSidebar
                isOpen={isMessageDetailsOpen}
                onClose={() => setIsMessageDetailsOpen(false)}
                name={selectedMessageThread.name}
                avatar={selectedMessageThread.avatar}
                serviceLine={selectedMessageThread.serviceLine}
                teamName={selectedMessageThread.teamName}
                status={selectedMessageThread.status}
                createdDate={selectedMessageThread.createdDate}
                startDate={selectedMessageThread.startDate}
                deliveryDeadline={selectedMessageThread.deliveryDeadline}
                initialSeconds={selectedMessageThread.initialSeconds}
                members={selectedMessageThread.members}
                onFavorite={() => handleToggleFavoriteMessage(selectedMessageThread.id)}
                isFavorite={selectedMessageThread.isFavorite}
              />
            )}
          </>
        )}

        {/* Tab 2: Favorite Contacts */}
        {activeTab === 'contacts' && (
          <>
            {/* Left Side Pane: Contact List */}
            <div className={`w-full lg:w-[469px] border-r border-[#dadada] flex flex-col h-full bg-[#fafafa] lg:bg-white shrink-0 transition-transform duration-300 z-10 ${
              activeContactId && !isContactDetailsOpen ? 'hidden lg:flex' : activeContactId && isContactDetailsOpen ? 'hidden lg:flex' : 'flex'
            }`}>

              {/* Active online members list */}
              <div className="px-6 py-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3.5 overflow-x-auto pb-1.5 scrollbar-none">
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
                    Favorite Contacts
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
                    placeholder="Search favorites"
                    value={contactsSearchQuery}
                    onChange={(e) => setContactsSearchQuery(e.target.value)}
                    className="w-full h-full bg-[#f5f5f5] text-sm text-gray-800 pl-11 pr-4 rounded-[15px] border border-transparent focus:bg-white focus:border-[#eaecf0] focus:outline-none transition-all placeholder:text-[#a19791]"
                  />
                </div>
              </div>

              {/* Contacts List */}
              <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-2 bg-white scrollbar-thin">
                {filteredContacts.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <p className="text-sm font-medium text-gray-400 font-sans">No favorite contacts found.</p>
                    <p className="text-xs text-gray-400 font-sans mt-1">Mark contacts as favorite to see them here.</p>
                  </div>
                ) : (
                  filteredContacts.map((contact) => (
                    <ChatListItem
                      key={contact.id}
                      name={contact.name}
                      avatar={contact.avatar}
                      message={contact.message}
                      time={contact.time}
                      unreadCount={contact.unreadCount}
                      isOnline={contact.isOnline}
                      isTyping={contact.isTyping}
                      hasAttachment={contact.hasAttachment}
                      hasImage={contact.hasImage}
                      isSentByMeAndRead={contact.isSentByMeAndRead}
                      isActive={activeContactId === contact.id}
                      onClick={() => {
                        setActiveContactId(contact.id);
                        setIsContactDetailsOpen(false); // Close details when switching
                      }}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Middle Pane: Chat Area Feed */}
            <div className={`flex-1 h-full bg-slate-50 transition-transform duration-300 ${
              activeContactId ? 'flex' : 'hidden lg:flex'
            }`}>
              <ChatArea
                activeChat={
                  selectedContact
                    ? {
                        id: selectedContact.id,
                        name: selectedContact.name,
                        avatar: selectedContact.avatar,
                        status: selectedContact.isOnline ? 'Active Now' : 'Offline',
                        isOnline: selectedContact.isOnline
                      }
                    : null
                }
                onBack={() => {
                  setActiveContactId(null);
                  setIsContactDetailsOpen(false);
                }}
                onHeaderClick={() => setIsContactDetailsOpen(!isContactDetailsOpen)}
                countdownSeconds={0}
              />
            </div>

            {/* Right Side Pane: Contact Details Sidebar (Dynamic) */}
            {selectedContact && (
              <ContactDetailsSidebar
                isOpen={isContactDetailsOpen}
                onClose={() => setIsContactDetailsOpen(false)}
                name={selectedContact.name}
                username={selectedContact.username}
                avatar={selectedContact.avatar}
                serviceLine={selectedContact.serviceLine}
                teamName={selectedContact.teamName}
                phoneNumber={selectedContact.phoneNumber}
                email={selectedContact.email}
                employeeId={selectedContact.employeeId}
                memberSince={selectedContact.memberSince}
                onFavorite={() => handleToggleFavoriteContact(selectedContact.id)}
                isFavorite={selectedContact.isFavorite}
              />
            )}
          </>
        )}

      </div>
    </div>
  );
}
