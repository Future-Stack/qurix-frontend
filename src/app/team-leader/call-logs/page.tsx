'use client';

import React, { useState } from 'react';
import { 
  Search, 
  MoreHorizontal,
  MoreVertical,
  Phone, 
  Video, 
  MessageSquare, 
  ArrowLeft,
  ArrowUpRight,
  ArrowDownLeft,
  PhoneMissed,
  PhoneOff
} from 'lucide-react';
import ActiveUserAvatar from '@/components/employee-team-leader/shared/GroupChat/ActiveUserAvatar';

interface CallHistoryItem {
  id: string;
  type: 'Outgoing' | 'Incoming' | 'Missed' | 'Answered' | 'Declined' | 'Failed';
  time: string;
  date: string;
  outcome: 'Unanswered' | 'Answered' | 'Declined' | 'Failed' | 'Missed';
}

interface CallLogItem {
  id: string;
  name: string;
  avatar: string;
  type: 'Outgoing' | 'Incoming' | 'Missed' | 'Answered' | 'Declined' | 'Failed';
  time: string;
  badgeText?: string; // e.g. "20", "80", "10"
  isOnline: boolean;
  statusText: string;
  history: CallHistoryItem[];
}

export default function TeamLeaderCallLogsPage() {
  const [activeCallId, setActiveCallId] = useState<string | null>('1'); // Default to Theresa Webb matching Figma
  const [searchQuery, setSearchQuery] = useState('');

  const avatars = {
    shakil: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    theresa: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    dianne: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    darlene: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    mishu: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    wade: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    cameron: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  };

  const activeOnlineUsers = [
    { name: 'Annette', src: avatars.theresa },
    { name: 'Cody', src: avatars.wade },
    { name: 'Floyd', src: avatars.shakil },
    { name: 'Marvin', src: avatars.cameron }
  ];

  const callLogs: CallLogItem[] = [
    {
      id: '1',
      name: 'Theresa Webb',
      avatar: avatars.theresa,
      type: 'Outgoing',
      time: '03:48 am',
      isOnline: true,
      statusText: 'Last seen 4 minute ago',
      history: [
        { id: '1-1', type: 'Outgoing', time: '03:48 am', date: 'Today', outcome: 'Unanswered' }
      ]
    },
    {
      id: '2',
      name: 'Dianne Russell',
      avatar: avatars.dianne,
      type: 'Incoming',
      time: '07:38 am',
      badgeText: '20',
      isOnline: true,
      statusText: 'Active Now',
      history: [
        { id: '2-1', type: 'Incoming', time: '07:38 am', date: 'Today', outcome: 'Answered' },
        { id: '2-2', type: 'Outgoing', time: '04:15 pm', date: 'Yesterday', outcome: 'Answered' }
      ]
    },
    {
      id: '3',
      name: 'Darlene Robertson',
      avatar: avatars.darlene,
      type: 'Missed',
      time: '01:08 pm',
      isOnline: true,
      statusText: 'Last seen 2 hours ago',
      history: [
        { id: '3-1', type: 'Missed', time: '01:08 pm', date: 'Today', outcome: 'Missed' },
        { id: '3-2', type: 'Incoming', time: '10:30 am', date: 'Yesterday', outcome: 'Answered' }
      ]
    },
    {
      id: '4',
      name: 'Hossain Mishu',
      avatar: avatars.mishu,
      type: 'Answered',
      time: '12:01 pm',
      isOnline: false,
      statusText: 'Offline',
      history: [
        { id: '4-1', type: 'Incoming', time: '12:01 pm', date: 'Today', outcome: 'Answered' }
      ]
    },
    {
      id: '5',
      name: 'Wade Warren',
      avatar: avatars.wade,
      type: 'Declined',
      time: '01:34 pm',
      badgeText: '80',
      isOnline: false,
      statusText: 'Last seen 1 day ago',
      history: [
        { id: '5-1', type: 'Incoming', time: '01:34 pm', date: 'Today', outcome: 'Declined' },
        { id: '5-2', type: 'Outgoing', time: '11:20 am', date: 'Yesterday', outcome: 'Answered' }
      ]
    },
    {
      id: '6',
      name: 'Cameron Williamson',
      avatar: avatars.cameron,
      type: 'Failed',
      time: '07:59 pm',
      badgeText: '10',
      isOnline: false,
      statusText: 'Last seen 3 days ago',
      history: [
        { id: '6-1', type: 'Outgoing', time: '07:59 pm', date: 'Today', outcome: 'Failed' },
        { id: '6-2', type: 'Incoming', time: '09:45 am', date: 'Yesterday', outcome: 'Answered' }
      ]
    }
  ];

  const filteredLogs = callLogs.filter(log => 
    log.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedLog = callLogs.find(log => log.id === activeCallId) || null;

  const renderCallIcon = (type: CallLogItem['type'], colorClass = '') => {
    switch (type) {
      case 'Outgoing':
        return <ArrowUpRight className={`size-4 text-[#22c55e] ${colorClass}`} />;
      case 'Incoming':
      case 'Answered':
        return <ArrowDownLeft className={`size-4 text-[#22c55e] ${colorClass}`} />;
      case 'Missed':
        return <PhoneMissed className={`size-4 text-[#ef4444] ${colorClass}`} />;
      case 'Declined':
        return <PhoneOff className={`size-4 text-red-500 ${colorClass}`} />;
      case 'Failed':
        return <PhoneOff className={`size-4 text-[#ef4444] ${colorClass}`} />;
      default:
        return <Phone className={`size-4 text-gray-500 ${colorClass}`} />;
    }
  };

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

      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Side Pane: Recent Calls List */}
        <div className={`w-full lg:w-[469px] border-r border-[#dadada] flex flex-col h-full bg-white shrink-0 transition-transform duration-300 z-10 ${
          activeCallId ? 'hidden lg:flex' : 'flex'
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

          {/* Search bar & Recent Call Header */}
          <div className="px-6 py-4 flex flex-col gap-4 shrink-0 bg-white">
            <div className="flex items-center justify-between">
              <span className="font-['Roboto'] font-semibold text-[20px] text-[#454852]">
                Recent Call
              </span>
              <div className="flex items-center gap-3 text-[#a19791]">
                <button className="p-1.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" title="Options">
                  <MoreVertical className="size-5 stroke-[2]" />
                </button>
              </div>
            </div>

            <div className="relative h-[52px] w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-[17px] stroke-[2]" />
              <input
                type="text"
                placeholder="Search user name or number"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full bg-[#f5f5f5] text-sm text-gray-800 pl-11 pr-4 rounded-[15px] border border-transparent focus:bg-white focus:border-[#eaecf0] focus:outline-none transition-all placeholder:text-[#a19791]"
              />
            </div>
          </div>

          {/* Call Logs list */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-2 bg-white scrollbar-thin">
            {filteredLogs.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8 font-sans">No call logs match your search.</p>
            ) : (
              filteredLogs.map((log) => {
                const isActive = activeCallId === log.id;
                return (
                  <div
                    key={log.id}
                    onClick={() => setActiveCallId(log.id)}
                    className={`p-3 rounded-[16px] flex items-center justify-between cursor-pointer select-none transition-all duration-150 ${
                      isActive 
                        ? 'bg-[#f2fff6] shadow-sm border border-emerald-200/70' 
                        : 'bg-white hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <div className="flex gap-[19px] items-center">
                      <div className="relative size-[56px] shrink-0">
                        <div className="size-[56px] rounded-full overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center shadow-sm">
                          <img src={log.avatar} alt={log.name} className="size-full object-cover" />
                        </div>
                        {log.isOnline && (
                          <span className="absolute bottom-0 right-0 size-[14px] bg-[#22c55e] border-2 border-white rounded-full" />
                        )}
                      </div>

                      <div className="flex flex-col gap-1 items-start">
                        <p className="font-['Roboto'] font-normal text-[18px] text-black tracking-tight leading-tight">
                          {log.name}
                        </p>
                        <div className="flex gap-2 items-center">
                          {renderCallIcon(log.type)}
                          <p className="font-['Roboto'] font-normal text-[#a19791] text-[14px]">
                            {log.type} Call
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 items-end shrink-0">
                      <p className="font-['Roboto'] font-normal text-[#a19791] text-[12px] font-mono">
                        {log.time}
                      </p>
                      {log.badgeText ? (
                        <div className="bg-[#06530b] h-[16px] min-w-[23px] px-1 flex items-center justify-center rounded-[7px] shadow-sm">
                          <span className="font-['Roboto'] font-bold text-[12px] text-white">
                            {log.badgeText}
                          </span>
                        </div>
                      ) : (
                        <div className="h-[16px]" /> // spacer
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Side Pane: Call Details Feed */}
        <div className={`flex-1 h-full bg-white transition-transform duration-300 flex flex-col ${
          activeCallId ? 'flex' : 'hidden lg:flex'
        }`}>
          {selectedLog ? (
            <>
              {/* Selected Contact Header */}
              <div className="px-6 lg:px-8 py-4 border-b border-[#eaecf0] select-none shrink-0 flex items-center justify-between bg-white shadow-sm z-10">
                <div className="flex gap-[17px] items-center min-w-0">
                  {/* Mobile Back Button */}
                  <button 
                    onClick={() => setActiveCallId(null)}
                    className="lg:hidden p-2 -ml-2 text-gray-500 hover:bg-slate-50 rounded-xl cursor-pointer"
                  >
                    <ArrowLeft className="size-5 stroke-[2.5]" />
                  </button>

                  <div className="relative shrink-0 flex items-center justify-center size-[74px]">
                    <div className="absolute inset-0 border-[3px] border-[#06530b] rounded-full scale-[0.94]" />
                    <div className="absolute inset-0 border-2 border-white rounded-full scale-[0.91]" />
                    <div className="size-[56px] rounded-full overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center shadow-sm">
                      <img src={selectedLog.avatar} alt={selectedLog.name} className="size-full object-cover" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 items-start justify-center min-w-0">
                    <h4 className="font-['Roboto'] font-bold text-[20px] text-black truncate leading-tight w-full">
                      {selectedLog.name}
                    </h4>
                    <p className="font-['Roboto'] font-normal text-[#a19791] text-[14px] truncate leading-tight w-full">
                      {selectedLog.statusText}
                    </p>
                  </div>
                </div>

                {/* Header Action Buttons matching Figma icons */}
                <div className="flex gap-2.5 items-center shrink-0">
                  <button className="bg-[#f7f5f4] size-[40px] flex items-center justify-center rounded-full text-gray-700 hover:bg-slate-100 transition-colors cursor-pointer" title="Send message">
                    <MessageSquare className="size-5 text-gray-600" />
                  </button>
                  <button className="bg-[#f7f5f4] size-[40px] flex items-center justify-center rounded-full text-gray-700 hover:bg-slate-100 transition-colors cursor-pointer" title="Video call">
                    <Video className="size-5 text-gray-600" />
                  </button>
                  <button className="bg-[#f7f5f4] size-[40px] flex items-center justify-center rounded-full text-gray-700 hover:bg-slate-100 transition-colors cursor-pointer" title="Voice call">
                    <Phone className="size-5 text-gray-600" />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" title="More options">
                    <MoreVertical className="size-5" />
                  </button>
                </div>
              </div>

              {/* Call logs detail body */}
              <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-slate-50/40">
                <div className="max-w-[753px] bg-white border border-[#dadada] rounded-[20px] p-6 shadow-sm">
                  <h5 className="font-['Roboto'] font-semibold text-[#313131] text-[16px] mb-5">
                    Today
                  </h5>
                  
                  <div className="space-y-5">
                    {selectedLog.history.map((hist) => (
                      <div key={hist.id} className="flex items-center justify-between">
                        <div className="flex gap-3.5 items-center">
                          <div className="bg-[#f7f5f4] size-11 rounded-full flex items-center justify-center shrink-0">
                            {renderCallIcon(hist.type, 'size-5')}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-['Roboto'] text-gray-800 text-[15px] font-medium">
                              {hist.type} Call
                            </span>
                            <span className="font-['Roboto'] text-[#a19791] text-[13px] font-mono mt-0.5">
                              {hist.time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <span className={`font-['Roboto'] text-[14px] font-medium ${
                            hist.outcome === 'Answered' 
                              ? 'text-[#22c55e]' 
                              : hist.outcome === 'Unanswered'
                              ? 'text-[#a19791]'
                              : 'text-red-500'
                          }`}>
                            {hist.outcome}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50/20 select-none">
              <div className="size-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#a19791] border border-gray-100">
                <Phone className="size-8 stroke-[1.5]" />
              </div>
              <h3 className="font-['Roboto'] font-semibold text-[20px] text-gray-800">
                Select a call log to view details
              </h3>
              <p className="text-gray-400 text-sm mt-1.5 max-w-sm font-sans">
                Choose a conversation or name from the left list to see call status logs and connect immediately.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
