"use client";

import React, { useState } from 'react';
import { 
  Search, Edit, MoreVertical, Paperclip, Smile, Mic, Video, Phone, ChevronDown, Archive, 
  AlertTriangle, X, BellOff, Bookmark, LogOut, Trash2, Edit2
} from 'lucide-react';
import { Dropdown, DropdownItem } from '@/components/ui/Dropdown/Dropdown';
import { ConfirmationModal } from '@/components/ui/Modal/ConfirmationModal';
import { UrgentActionModal } from '@/components/ui/Modal/UrgentActionModal';

const mockChats = [
  { id: 1, type: 'group', name: 'franchys || Innosight || FO822580...', preview: 'Marina is typing....', time: '07:38 am', unread: 20, isOnline: true, avatar: 'https://i.pravatar.cc/150?u=11' },
  { id: 2, type: 'group', name: 'tprice34 || tech_omega || FO2228CA90708', preview: 'Marina is typing....', time: '08:48 am', unread: 0, isOnline: false, avatar: 'https://i.pravatar.cc/150?u=12', badges: true },
  { id: 3, type: 'individual', name: 'hayzee152 | bits_wise | FO82252...', preview: 'Meet me before presentation.......', time: '01:08 pm', unread: 0, isOnline: false, avatar: 'https://i.pravatar.cc/150?u=13' },
  { id: 4, type: 'individual', name: 'Hossain Mishu', handle: '@hossainmishu', preview: 'Appologise guys i will not be able to contribute...', time: '01:55 pm', unread: 0, isOnline: true, avatar: 'https://i.pravatar.cc/150?u=32' },
  { id: 5, type: 'individual', name: 'Darlene Robertson', preview: 'Sent an attachment', time: '01:34 pm', unread: 80, isOnline: false, avatar: 'https://i.pravatar.cc/150?u=15' },
  { id: 6, type: 'group', name: 'Official Announcement | Softvence', preview: 'Meet me before presentation.......', time: '07:59 pm', unread: 10, isOnline: false, avatar: 'https://i.pravatar.cc/150?u=16' },
];

const mockMessages = [
  { id: 1, sender: 'Theresa Webb', time: '04:41 pm', text: 'Hi, how are you all?', avatar: 'https://i.pravatar.cc/150?u=21', date: 'Nov 4, 2026' },
  { id: 2, sender: 'Theresa Webb', time: '04:41 pm', text: 'How many of you prepared the prsentation?', avatar: 'https://i.pravatar.cc/150?u=21' },
  { id: 3, sender: 'Courtney Henry', time: '05:14 pm', text: 'Hello Mojixa! I am just about to start the prepration.', avatar: 'https://i.pravatar.cc/150?u=22' },
  { id: 4, sender: 'Esther Howard', time: '01:55 pm', text: 'Appologise guys i will not be able to contribute in presentation as I am having fever since 2 days.', avatar: 'https://i.pravatar.cc/150?u=23', date: 'Today' },
  { id: 5, sender: 'Darrell Steward', time: '01:34 pm', text: 'No issue, take some rest.', avatar: 'https://i.pravatar.cc/150?u=24' },
  { id: 6, sender: 'Darrell Steward', time: '01:34 pm', text: 'What about others?', avatar: 'https://i.pravatar.cc/150?u=24' },
  { id: 7, sender: 'You', time: '10:45 am', text: 'I just completed it last night.', avatar: 'https://i.pravatar.cc/150?u=30', isMe: true },
];

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [isChatListOpen, setIsChatListOpen] = useState(true);

  // Modal States
  const [isDeleteChatModalOpen, setIsDeleteChatModalOpen] = useState(false);
  const [isLeaveGroupModalOpen, setIsLeaveGroupModalOpen] = useState(false);
  const [isClearHistoryModalOpen, setIsClearHistoryModalOpen] = useState(false);
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState(false);

  const activeChatData = mockChats.find(c => c.id === activeChat);

  const messageOptions: DropdownItem[] = [
    { label: 'Mark all as read', onClick: () => {} },
    { label: 'Show unread chat', onClick: () => {} },
    { label: 'Show archives', warning: true, onClick: () => {} },
  ];

  const handleChatSelect = (id: number) => {
    setActiveChat(id);
    // On mobile, hide chat list when a chat is selected
    if (window.innerWidth < 1024) {
      setIsChatListOpen(false);
    }
  };

  return (
    <div className="flex h-full max-w-full overflow-hidden my-1 mx-2 ">
      
      {/* Left Sidebar - Chat List */}
      <div className={`w-full lg:w-[380px] border-r border-[#E2E8F0] flex-col h-full bg-white shrink-0 ${isChatListOpen ? 'flex' : 'hidden lg:flex'}`}>
        {/* User Profile Header */}
        <div className="p-5 flex items-center gap-3 border-b border-[#E2E8F0]">
          <div className="w-12 h-12 rounded-full border-2 border-green-500 p-0.5 shrink-0">
            <img src="https://i.pravatar.cc/150?u=30" alt="Me" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-bold text-[#0F172A] text-lg truncate">Omega Force</h2>
            <p className="text-xs text-[#64748B] truncate">Admin Panel</p>
          </div>
        </div>

        {/* Active Members Bubble Row */}
        <div className="px-5 py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[1,2,3,4].map(i => (
            <div key={i} className="relative shrink-0">
              <img src={`https://i.pravatar.cc/150?u=${i+40}`} alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          ))}
          <div className="w-10 h-10 shrink-0 rounded-full bg-green-50 flex items-center justify-center text-green-700 font-bold text-xs shadow-sm">
            18+
          </div>
        </div>

        {/* Messages Header & Search */}
        <div className="px-5 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[17px] font-bold text-[#0F172A]">Messages</h3>
            <div className="flex gap-2 text-gray-400">
              <button className="hover:text-gray-600 transition-colors"><Edit className="w-4 h-4" /></button>
              <Dropdown 
                align="right"
                trigger={<button className="hover:text-gray-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>}
                items={messageOptions}
              />
            </div>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Archived Chats */}
        <div className="px-5 pb-2">
          <div className="w-full flex justify-between items-center bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl px-4 py-3 cursor-pointer hover:bg-[#DCFCE7] transition-colors">
            <span className="text-sm font-bold text-green-700">Archived Chats</span>
            <Archive className="w-4 h-4 text-green-600" />
          </div>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {mockChats.map((chat) => (
            <div 
              key={chat.id} 
              onClick={() => handleChatSelect(chat.id)}
              className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer hover:bg-[#F8FAFC] transition-colors ${activeChat === chat.id ? 'bg-[#F0FDF4] border-r-2 border-green-500' : ''}`}
            >
              <div className="relative shrink-0">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="text-sm font-bold text-[#0F172A] truncate pr-2">{chat.name}</h4>
                  <span className="text-[10px] font-medium text-[#94A3B8] whitespace-nowrap">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-[#64748B] truncate flex items-center gap-1">
                    {chat.preview.includes('attachment') || chat.preview.includes('picture') ? (
                      <Paperclip className="w-3 h-3" />
                    ) : null}
                    {chat.preview}
                  </p>
                  {chat.unread > 0 && (
                    <div className="bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[20px] text-center ml-2">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Area - Active Chat */}
      <div className={`flex-1 flex-col h-full bg-white ${activeChatData ? 'flex' : 'hidden lg:flex'}`}>
        {activeChatData ? (
          <>
            {/* Chat Header */}
            <div className="px-6 py-4 flex justify-between items-center border-b border-[#E2E8F0]">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsRightPanelOpen(true)}>
                <div className="w-12 h-12 rounded-full border-2 border-green-500 p-0.5 relative shrink-0">
                  <img src={activeChatData.avatar} alt="Chat Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h2 className="font-bold text-[#0F172A] text-lg mb-1">{activeChatData.name}</h2>
                  
                  {activeChatData.type === 'group' ? (
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2 hidden sm:flex">
                        <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=50" alt="" />
                        <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=51" alt="" />
                        <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=52" alt="" />
                        <div className="w-6 h-6 rounded-full border border-white bg-green-700 text-white text-[10px] font-bold flex items-center justify-center">7+</div>
                      </div>
                      {activeChatData.badges && (
                        <>
                          <div className="bg-[#06530B] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            3D 9H 25M 53S
                          </div>
                          <Dropdown
                            align="left"
                            trigger={
                              <div className="flex items-center gap-1 bg-[#475569] text-white text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer">
                                WIP <ChevronDown className="w-3 h-3" />
                              </div>
                            }
                            items={[
                              { label: 'WIP', onClick: () => {} },
                              { label: 'Delivered', onClick: () => {} },
                              { label: 'Canceled', onClick: () => {} },
                              { label: 'Refund', onClick: () => {} },
                              { label: 'Hold', onClick: () => {} }
                            ]}
                          />
                          <div className="flex items-center gap-1 bg-[#FEE2E2] text-[#EF4444] border border-[#FCA5A5] text-[10px] font-bold px-2 py-0.5 rounded">
                            <AlertTriangle className="w-3 h-3" /> URGENT <span className="w-2 h-2 rounded-full bg-orange-500 ml-1"></span>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <p className="text-xs text-[#94A3B8]">Last seen 4 minute ago</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                  <Video className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                  <Phone className="w-4 h-4" />
                </button>
                <Dropdown 
                  align="right"

                  trigger={
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  }
                  items={activeChatData.type === 'individual' ? [
                    { label: 'Mute chat', onClick: () => {} },
                    { label: 'View info', onClick: () => setIsRightPanelOpen(true) },
                    { label: 'Add favorite', onClick: () => {} },
                    { label: 'Archive chat', onClick: () => {} },
                    { label: 'Clear chat', danger: true, onClick: () => setIsClearHistoryModalOpen(true) },
                    { label: 'Delete chat', danger: true, onClick: () => setIsDeleteChatModalOpen(true) }
                  ] : [
                    { label: 'Mute chat', onClick: () => {} },
                    { label: 'View info', onClick: () => setIsRightPanelOpen(true) },
                    { label: 'Add favorite', onClick: () => {} },
                    { label: 'Archive chat', onClick: () => {} },
                    { label: 'Clear chat', danger: true, onClick: () => setIsClearHistoryModalOpen(true) },
                    { label: 'Leave group', danger: true, onClick: () => setIsLeaveGroupModalOpen(true) },
                    { label: 'Mark as urgent', danger: true, onClick: () => setIsUrgentModalOpen(true) }
                  ]}
                />
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {mockMessages.map((msg, index) => {
                const showDate = msg.date;
                const isFirstInSequence = index === 0 ;

                // const isFirstInSequence = index === 0 || mockMessages[index - 1].sender !== msg.sender;
                return (
                  <React.Fragment key={msg.id}>
                    {showDate && (
                      <div className="flex justify-center my-6">
                        <span className="text-[11px] font-bold text-[#0F172A]">{msg.date}</span>
                      </div>
                    )}
                    <div className={`flex gap-3 w-full ${msg.isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full shrink-0 relative mt-1">
                        {isFirstInSequence ? (
                          <>
                            <img src={msg.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                            {!msg.isMe && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></div>}
                          </>
                        ) : (
                          <div className="w-full h-full"></div>
                        )}
                      </div>

                      {/* Message Content */}
                      <div className={`max-w-[85%] sm:max-w-[70%] flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                        {isFirstInSequence && (
                          <div className={`flex items-baseline gap-2 mb-1 ${msg.isMe ? 'pr-1 justify-end' : 'pl-1 justify-start'}`}>
                            <span className="text-sm font-bold text-[#0F172A]">{msg.sender}</span>
                            <span className="text-[10px] text-[#94A3B8]">{msg.time}</span>
                          </div>
                        )}
                        <div className={`flex items-center gap-2 group/msg ${msg.isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div 
                            className={`px-4 py-3 text-[13px] ${
                              msg.isMe 
                                ? `bg-[#06530B] text-white rounded-[20px] ${isFirstInSequence ? 'rounded-tr-none' : ''}` 
                                : `bg-[#F8FAFC] text-[#475569] rounded-[20px] ${isFirstInSequence ? 'rounded-tl-none' : ''}`
                            }`}
                          >
                            {msg.text}
                          </div>
                          
                          <div className={`opacity-0 group-hover/msg:opacity-100 transition-opacity ${msg.isMe ? 'mr-1' : 'ml-1'}`}>
                            <Dropdown
                              align={msg.isMe ? 'right' : 'left'}
                              trigger={
                                <button className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                              }
                              items={msg.isMe ? [
                                { label: 'Reply', onClick: () => {} },
                                { label: 'Edit text', onClick: () => {} },
                                { label: 'Copy Text', onClick: () => {} },
                                { label: 'Forward', onClick: () => {} },
                                { label: 'Pin Message', onClick: () => {} },
                                { label: 'Delete', danger: true, onClick: () => {} }
                              ] : [
                                { label: 'Reply', onClick: () => {} },
                                { label: 'Copy text', onClick: () => {} },
                                { label: 'Forward', onClick: () => {} },
                                { label: 'Pin message', onClick: () => {} }
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#E2E8F0]">
              <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  placeholder="Your message....." 
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm py-2"
                />
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-white">
            <p className="text-[#64748B] font-medium">Select a chat to start messaging</p>
          </div>
        )}
      </div>

      {/* Right Sidebar - Contact/Project Info */}
      {activeChatData && isRightPanelOpen && (
        <div className="w-full lg:w-[360px] border-l border-[#E2E8F0] bg-white flex flex-col h-full shrink-0 overflow-y-auto no-scrollbar absolute lg:relative right-0 top-0 bottom-0 z-10 shadow-xl lg:shadow-none">
          
          {/* Header Info */}
          <div className="p-6 border-b border-[#E2E8F0] relative">
            <button 
              onClick={() => setIsRightPanelOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex flex-col items-center pt-2">
              <div className="w-24 h-24 rounded-full border-2 border-green-500 p-0.5 relative mb-4">
                <img src={activeChatData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              </div>
              <h2 className="font-bold text-[#0F172A] text-xl mb-1 text-center">{activeChatData.name}</h2>
              {activeChatData.type === 'individual' ? (
                <p className="text-sm text-[#94A3B8]">{activeChatData.handle || '@username'}</p>
              ) : (
                <p className="text-xs text-[#94A3B8]">Created at: Jun 28, 2026</p>
              )}
            </div>
          </div>

          {/* Details Table */}
          <div className="p-6 border-b border-[#E2E8F0] space-y-4">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#64748B]">Service Line</span>
              <span className="font-bold text-[#06530B]">CUSTOM-FSD</span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#64748B]">Team</span>
              <span className="font-bold text-[#00AB0C]">Future Stack</span>
            </div>
            
            {activeChatData.type === 'individual' ? (
              <>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Phone number</span>
                  <span className="font-bold text-[#00AB0C]">+880 123456789</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Work email</span>
                  <span className="font-bold text-[#00AB0C]">email@softvence.com</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Employee ID</span>
                  <span className="font-bold text-[#00AB0C]">16056</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Member Since</span>
                  <span className="font-bold text-[#00AB0C]">18 July 2026</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Project Status</span>
                  <span className="font-bold text-[#00AB0C]">Planing</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Start Date</span>
                  <span className="font-bold text-[#00AB0C]">18 July 2026, 1:23 AM</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Delivery Deadline</span>
                  <span className="font-bold text-[#00AB0C]">30 July 2026, 4:57 PM</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-[#64748B]">Time Remain</span>
                  <span className="font-bold text-[#00AB0C]">3D: 9H: 25M: 53S</span>
                </div>
              </>
            )}
          </div>

          {/* Attachments */}
          <div className="p-6 border-b border-[#E2E8F0]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#0F172A] text-[15px]">Attachments</h3>
              <span className="text-[11px] text-[#94A3B8]">25 items</span>
            </div>
            <div className="flex bg-[#F8FAFC] rounded-lg p-1 mb-4">
              <button className="flex-1 bg-white shadow-sm rounded-md py-1.5 text-xs font-bold text-[#0F172A]">Media</button>
              <button className="flex-1 py-1.5 text-xs font-bold text-[#64748B]">Links</button>
              <button className="flex-1 py-1.5 text-xs font-bold text-[#64748B]">Files</button>
            </div>
            <div className="flex gap-2 mb-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-14 h-14 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                  <img src={`https://picsum.photos/id/${i+100}/100`} alt="Media" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <button className="text-xs font-bold text-[#00AB0C] hover:underline">See all</button>
          </div>

          {/* Members (Only for Group) */}
          {activeChatData.type === 'group' && (
            <div className="p-6 border-b border-[#E2E8F0]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[#0F172A] text-[15px]">Members <span className="text-[11px] font-normal text-[#94A3B8] ml-1">12 members</span></h3>
                <button className="bg-[#06530B] hover:bg-[#05290b] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors">
                  Add New
                </button>
              </div>
              <div className="space-y-4 mb-3">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=40" className="w-8 h-8 rounded-full object-cover" alt="Member" />
                  <span className="text-[13px] font-bold text-[#0F172A]">Imran Hossain</span>
                  <span className="bg-[#ECFDF5] text-[#00AB0C] text-[10px] font-bold px-2 py-0.5 rounded-md">admin</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=41" className="w-8 h-8 rounded-full object-cover" alt="Member" />
                  <span className="text-[13px] font-bold text-[#0F172A]">UX Shakil</span>
                  <span className="bg-[#ECFDF5] text-[#00AB0C] text-[10px] font-bold px-2 py-0.5 rounded-md">admin</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=42" className="w-8 h-8 rounded-full object-cover" alt="Member" />
                  <span className="text-[13px] font-bold text-[#0F172A]">Hossain Mishu</span>
                </div>
              </div>
              <button className="text-xs font-bold text-[#00AB0C] hover:underline">See all</button>
            </div>
          )}

          {/* Actions */}
          <div className="p-4 space-y-1 pb-10">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 rounded-xl transition-colors text-[13px] font-bold text-[#475569]">
              <BellOff className="w-4 h-4" /> Mute chat
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 rounded-xl transition-colors text-[13px] font-bold text-[#475569]">
              <Bookmark className="w-4 h-4" /> Add favorite
            </button>
            {activeChatData.type === 'individual' ? (
              <>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 rounded-xl transition-colors text-[13px] font-bold text-[#475569]">
                  <Archive className="w-4 h-4" /> Clear chat
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 rounded-xl transition-colors text-[13px] font-bold text-red-500">
                  <Trash2 className="w-4 h-4" /> Delete chat
                </button>
              </>
            ) : (
              <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 rounded-xl transition-colors text-[13px] font-bold text-red-500">
                <LogOut className="w-4 h-4" /> Leave Group
              </button>
            )}
          </div>

        </div>
      )}

      {/* Confirmation Modals */}
      {activeChatData && (
        <>
          <ConfirmationModal
            isOpen={isDeleteChatModalOpen}
            onClose={() => setIsDeleteChatModalOpen(false)}
            onConfirm={() => console.log('Deleted chat')}
            title={`Delete chat with ${activeChatData.name}?`}
            description="All messages and shared media, links, files will be deleted and won't be able to restore again."
            confirmText="Delete"
          />
          
          <ConfirmationModal
            isOpen={isLeaveGroupModalOpen}
            onClose={() => setIsLeaveGroupModalOpen(false)}
            onConfirm={() => console.log('Left group')}
            title={`Leave group chat from ${activeChatData.name}?`}
            description="You won't be able to see later messages and send message in this group anymore."
            confirmText="Leave group"
          />
          
          <ConfirmationModal
            isOpen={isClearHistoryModalOpen}
            onClose={() => setIsClearHistoryModalOpen(false)}
            onConfirm={() => console.log('Cleared history')}
            title="Clear chat history?"
            description="All messages and shared media, links, files will be removed and chat will still show in your list."
            confirmText="Clear chat"
          />
          
          <UrgentActionModal
            isOpen={isUrgentModalOpen}
            onClose={() => setIsUrgentModalOpen(false)}
            onConfirm={(explanation, notifyAll) => {
              console.log('Marked as urgent', { explanation, notifyAll });
            }}
          />
        </>
      )}
    </div>
  );
}
