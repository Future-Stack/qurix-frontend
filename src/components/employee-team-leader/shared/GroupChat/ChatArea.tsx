'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Paperclip, 
  Smile, 
  Send, 
  ArrowLeft, 
  MoreHorizontal, 
  Phone, 
  Video,
  Mic,
  AlertTriangle,
  Eye
} from 'lucide-react';

interface GroupMember {
  name: string;
  role: string;
  avatar: string;
}

interface Message {
  id: string;
  senderName: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
  avatar?: string;
}

interface ChatMetadata {
  id: string;
  name: string;
  avatar?: string;
  status: string;
  isOnline: boolean;
  priority?: string;
  serviceLine?: string;
  teamName?: string;
  createdDate?: string;
  startDate?: string;
  deliveryDeadline?: string;
  initialSeconds?: number;
  members?: GroupMember[];
}

interface ChatAreaProps {
  activeChat: ChatMetadata | null;
  onBack: () => void;
  onHeaderClick?: () => void;
  countdownSeconds: number;
}

export default function ChatArea({ activeChat, onBack, onHeaderClick, countdownSeconds }: ChatAreaProps) {
  const [inputText, setInputText] = useState('');
  const [timeLeft, setTimeLeft] = useState(countdownSeconds);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Avatar profiles
  const avatars = {
    theresa: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    courtney: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    esther: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    darrell: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    shakil: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
  };

  // Chat histories per thread
  const [conversations, setConversations] = useState<Record<string, Message[]>>({
    '1': [
      { id: '1-1', senderName: 'franchys', text: 'Hi UX-SHAKIL, did you check the Innosight design requirements?', sender: 'them', timestamp: '07:30 am', avatar: avatars.theresa },
      { id: '1-2', senderName: 'franchys', text: 'I am working on the wireframes now.', sender: 'them', timestamp: '07:32 am', avatar: avatars.theresa },
      { id: '1-3', senderName: 'You', text: 'Yes, looking great. I am reviewing the colors now.', sender: 'me', timestamp: '07:35 am' },
    ],
    '2': [
      { id: '2-1', senderName: 'Theresa Webb', text: 'Hi, how are you all?', sender: 'them', timestamp: '06:41 pm', avatar: avatars.theresa },
      { id: '2-2', senderName: 'Theresa Webb', text: 'How many of you prepared the prsentation?', sender: 'them', timestamp: '06:42 pm', avatar: avatars.theresa },
      { id: '2-3', senderName: 'Courtney Henry', text: 'Hello Mojixa! I am just about to start the prepration.', sender: 'them', timestamp: '05:14 pm', avatar: avatars.courtney },
      { id: '2-4', senderName: 'Esther Howard', text: 'Appologise guys i will not be able to contribute in presentation as i am having fever since 2 days.', sender: 'them', timestamp: '01:55 pm', avatar: avatars.esther },
      { id: '2-5', senderName: 'Darrell Steward', text: 'No issue, take some rest.', sender: 'them', timestamp: '01:34 pm', avatar: avatars.darrell },
      { id: '2-6', senderName: 'Darrell Steward', text: 'What about others?', sender: 'them', timestamp: '01:35 pm', avatar: avatars.darrell },
      { id: '2-7', senderName: 'You', text: 'I just completed it last night.', sender: 'me', timestamp: '10:45 am' },
    ],
    '3': [
      { id: '3-1', senderName: 'hayzee152', text: 'Hi, are we still meeting before the presentation today?', sender: 'them', timestamp: '01:00 pm', avatar: avatars.esther },
      { id: '3-2', senderName: 'hayzee152', text: 'Meet me before presentation.......', sender: 'them', timestamp: '01:01 pm', avatar: avatars.esther },
    ],
    '4': [
      { id: '4-1', senderName: 'beautipholl', text: 'Hi team, sent a design mockup draft.', sender: 'them', timestamp: '12:01 pm', avatar: avatars.esther },
      { id: '4-2', senderName: 'beautipholl', text: 'Sent a picture', sender: 'them', timestamp: '12:01 pm', avatar: avatars.esther },
    ],
    '5': [
      { id: '5-1', senderName: 'kevicav', text: 'Here are the tech wide code guidelines.', sender: 'them', timestamp: '01:32 pm', avatar: avatars.darrell },
      { id: '5-2', senderName: 'kevicav', text: 'Sent an attachment', sender: 'them', timestamp: '01:34 pm', avatar: avatars.darrell },
    ],
    '6': [
      { id: '6-1', senderName: 'Announcement Bot', text: 'Softvence official policy changes have been posted.', sender: 'them', timestamp: '07:58 pm', avatar: avatars.theresa },
      { id: '6-2', senderName: 'Announcement Bot', text: 'Meet me before presentation.......', sender: 'them', timestamp: '07:59 pm', avatar: avatars.theresa },
    ]
  });

  useEffect(() => {
    setTimeLeft(countdownSeconds);
  }, [countdownSeconds, activeChat]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const d = Math.floor(timeLeft / (24 * 3600));
  const h = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat, conversations]);

  if (!activeChat) {
    return (
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 h-full select-none text-center">
        <div className="size-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#a19791] border border-gray-100">
          <MessageSquareIcon className="size-8" />
        </div>
        <h3 className="font-['Roboto'] font-semibold text-[20px] text-gray-800">
          Select a chat to start messaging
        </h3>
        <p className="text-gray-400 text-sm mt-1.5 max-w-sm font-sans">
          Choose a conversation thread from the left menu to view project details and chat with team members.
        </p>
      </div>
    );
  }

  const isGroupChat = activeChat.members && activeChat.members.length > 0;
  const messageList = conversations[activeChat.id] || [];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChat) return;

    const currentChat = activeChat;

    const newMessage: Message = {
      id: `${currentChat.id}-${Date.now()}`,
      senderName: 'You',
      text: inputText,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
    };

    setConversations((prev) => ({
      ...prev,
      [currentChat.id]: [...(prev[currentChat.id] || []), newMessage],
    }));
    setInputText('');

    // Trigger mock response
    setTimeout(() => {
      const autoReply: Message = {
        id: `${currentChat.id}-reply-${Date.now()}`,
        senderName: isGroupChat 
          ? (currentChat.members?.[0]?.name ?? '') 
          : (currentChat.name.split('||')[0]?.split('|')[0]?.trim() ?? currentChat.name),
        text: `Got it! Thanks for reaching out. We will process this details shortly.`,
        sender: 'them',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        avatar: isGroupChat ? currentChat.members?.[0]?.avatar : currentChat.avatar || avatars.theresa,
      };
      setConversations((prev) => ({
        ...prev,
        [currentChat.id]: [...(prev[currentChat.id] || []), autoReply],
      }));
    }, 1500);
  };

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
      
      {/* Group / Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#eaecf0] select-none shrink-0 bg-white shadow-sm z-10">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <button 
            onClick={onBack}
            className="lg:hidden p-1.5 hover:bg-slate-50 rounded-lg text-gray-500 shrink-0 cursor-pointer"
          >
            <ArrowLeft className="size-5" />
          </button>

          {/* Click profile header to open Details sidebar */}
          <div 
            onClick={onHeaderClick}
            className="flex items-center gap-4 min-w-0 cursor-pointer hover:bg-slate-50/70 p-1.5 rounded-2xl transition-all duration-200"
          >
            {/* Multi-avatar stack for groups, single for direct */}
            {isGroupChat ? (
              <div className="relative shrink-0 size-[74px]">
                <div className="absolute inset-0 border-2 border-emerald-800/10 rounded-full" />
                <div className="size-[56px] rounded-full overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm">
                  <div className="grid grid-cols-2 size-full">
                    <img src={activeChat.members?.[0]?.avatar} alt="" className="size-full object-cover border-r border-b border-white" />
                    <img src={activeChat.members?.[1]?.avatar} alt="" className="size-full object-cover border-b border-white" />
                    <img src={activeChat.members?.[2]?.avatar} alt="" className="size-full object-cover border-r border-white" />
                    <div className="bg-[#f2fff6] flex items-center justify-center text-[8px] font-bold text-[#06530b]">
                      {(activeChat.members?.length ?? 0) > 3 ? `+${(activeChat.members?.length ?? 0) - 3}` : '7+'}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative shrink-0">
                <div className="size-[56px] rounded-full overflow-hidden border border-gray-100 flex items-center justify-center bg-gray-50">
                  {activeChat.avatar ? (
                    <img src={activeChat.avatar} alt={activeChat.name} className="size-full object-cover" />
                  ) : (
                    <span className="text-gray-500 font-bold">{activeChat.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                {activeChat.isOnline && (
                  <span className="absolute bottom-0 right-0 size-[13px] bg-[#22c55e] border-2 border-white rounded-full" />
                )}
              </div>
            )}

            {/* Profile title & Status/Priority Tags */}
            <div className="min-w-0 flex flex-col gap-1">
              <h4 className="font-['Roboto'] font-bold text-[16px] md:text-[18px] text-black truncate tracking-tight">
                {activeChat.name}
              </h4>
              
              {isGroupChat ? (
                <div className="flex flex-wrap items-center gap-2 mt-0.5">
                  <div className="flex -space-x-1.5 shrink-0">
                    <img className="size-5 rounded-full ring-2 ring-white object-cover" src={activeChat.members?.[0]?.avatar} alt="" />
                    <img className="size-5 rounded-full ring-2 ring-white object-cover" src={activeChat.members?.[1]?.avatar} alt="" />
                    <img className="size-5 rounded-full ring-2 ring-white object-cover" src={activeChat.members?.[2]?.avatar} alt="" />
                    <div className="size-5 rounded-full bg-emerald-800 ring-2 ring-white flex items-center justify-center text-[7px] text-white font-bold shrink-0">
                      {(activeChat.members?.length ?? 0) > 3 ? `+${(activeChat.members?.length ?? 0) - 3}` : '7+'}
                    </div>
                  </div>

                  {/* Dynamic Time Countdown */}
                  {timeLeft > 0 && (
                    <div className="bg-[#06530b] text-white px-2 py-0.5 rounded-[5px] text-[12px] font-semibold font-mono tracking-wide shadow-sm">
                      {d}D {h}H {m}M {s}S
                    </div>
                  )}

                  {/* Project Status */}
                  <span className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-[5px] text-[11px] font-['Roboto'] font-medium shrink-0">
                    {activeChat.status}
                  </span>

                  {/* Priority Tag / Urgent Toggle */}
                  {activeChat.priority === 'Urgent' && (
                    <div className="bg-[#ef4444] text-white px-2 py-0.5 rounded-[5px] text-[11px] font-['Roboto'] font-bold flex items-center gap-1.5 shrink-0 shadow-sm">
                      <AlertTriangle className="size-3 text-white fill-white" />
                      <span className="uppercase tracking-wider text-[10px]">URGENT</span>
                      <div className="relative w-6 h-3 bg-[#dc2626] rounded-full p-0.5 flex items-center justify-end cursor-pointer">
                        <div className="size-2 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-[#a19791] font-medium truncate">
                  {activeChat.status || (activeChat.isOnline ? 'Active Now' : 'Offline')}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2 text-[#a19791] shrink-0 pr-2 md:pr-4">
          <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" title="Video Call">
            <Video className="size-[20px]" />
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" title="Voice Call">
            <Phone className="size-[20px]" />
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" title="More Options">
            <MoreHorizontal className="size-[20px]" />
          </button>
        </div>
      </div>

      {/* Messages History List */}
      <div className="flex-1 bg-slate-50/50 p-6 overflow-y-auto space-y-5 scrollbar-thin">
        {messageList.map((msg, index) => {
          const isMe = msg.sender === 'me';
          
          // Render a Date separator block if first message or different day
          const showDateHeader = index === 0;

          return (
            <div key={msg.id} className="space-y-4">
              {showDateHeader && (
                <div className="flex items-center justify-center py-2">
                  <span className="bg-white border border-slate-100 text-slate-500 px-3.5 py-1 rounded-full text-xs font-condensed tracking-wide shadow-sm">
                    {index === 0 ? 'Today' : 'Previous Messages'}
                  </span>
                </div>
              )}

              <div className={`flex w-full ${isMe ? 'justify-end' : 'justify-start'} gap-3.5 items-start`}>
                {!isMe && (
                  <div className="size-10 rounded-full overflow-hidden border border-gray-100 bg-gray-100 shrink-0 select-none shadow-sm">
                    <img 
                      src={msg.avatar || activeChat.avatar || avatars.theresa} 
                      alt="" 
                      className="size-full object-cover" 
                    />
                  </div>
                )}
                
                <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[75%]`}>
                  {!isMe && (
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="font-['Roboto'] font-medium text-xs text-gray-800">{msg.senderName}</span>
                      <span className="text-[9px] text-gray-400 font-condensed">{msg.timestamp}</span>
                    </div>
                  )}
                  {isMe && (
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[9px] text-gray-400 font-condensed">{msg.timestamp}</span>
                      <span className="font-['Roboto'] font-bold text-xs text-gray-800">You</span>
                    </div>
                  )}

                  <div className={`px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed font-sans shadow-sm ${
                    isMe 
                      ? 'bg-[#06530b] text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>

                {isMe && (
                  <div className="size-10 rounded-full overflow-hidden border border-gray-100 bg-gray-100 shrink-0 select-none shadow-sm">
                    <img src={avatars.shakil} alt="" className="size-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>

      {/* Input Message Footer */}
      <form 
        onSubmit={handleSend}
        className="px-6 py-4 border-t border-[#eaecf0] bg-white flex items-center justify-between gap-3 shrink-0"
      >
        <div className="flex gap-3.5 items-center flex-1">
          <button 
            type="button"
            className="p-1 text-[#a19791] hover:text-slate-800 rounded-lg cursor-pointer shrink-0 transition-colors"
            title="Attach file"
          >
            <Paperclip className="size-5.5" />
          </button>

          <input 
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Your message....."
            className="flex-1 text-[14px] font-sans text-gray-800 focus:outline-none placeholder:text-gray-400 py-1"
          />
        </div>

        <div className="flex gap-3.5 items-center shrink-0">
          <button 
            type="button"
            className="p-1 text-[#a19791] hover:text-slate-800 rounded-lg cursor-pointer transition-colors"
            title="Add Emoji"
          >
            <Smile className="size-5.5" />
          </button>
          
          {inputText.trim() ? (
            <button 
              type="submit"
              className="p-1.5 bg-[#06530b] text-white rounded-lg cursor-pointer shadow-sm hover:bg-emerald-950 transition-colors"
              title="Send Message"
            >
              <Send className="size-4" />
            </button>
          ) : (
            <button 
              type="button"
              className="p-1 text-[#a19791] hover:text-slate-800 rounded-lg cursor-pointer transition-colors"
              title="Voice Message"
            >
              <Mic className="size-5.5" />
            </button>
          )}
        </div>
      </form>
      
    </div>
  );
}

function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
