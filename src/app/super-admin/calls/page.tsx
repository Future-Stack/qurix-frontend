"use client";

import React, { useState } from 'react';
import { 
  Search, MoreVertical, Phone, Video, MessageCircle, ArrowUpRight, ArrowDownLeft, 
  PhoneMissed, PhoneOff, XCircle, ArrowLeft
} from 'lucide-react';
import { Dropdown, DropdownItem } from '@/components/ui/Dropdown/Dropdown';

const mockCalls = [
  { id: 1, name: 'Theresa Webb', type: 'outgoing', time: '03:48 am', unread: 0, avatar: 'https://i.pravatar.cc/150?u=21', status: 'Unanswered' },
  { id: 2, name: 'Dianne Russell', type: 'incoming', time: '07:38 am', unread: 20, avatar: 'https://i.pravatar.cc/150?u=22', status: 'Answered' },
  { id: 3, name: 'Darlene Robertson', type: 'missed', time: '01:08 pm', unread: 0, avatar: 'https://i.pravatar.cc/150?u=23', status: 'Missed' },
  { id: 4, name: 'Hossain Mishu', type: 'answered', time: '12:01 pm', unread: 0, avatar: 'https://i.pravatar.cc/150?u=24', status: 'Answered' },
  { id: 5, name: 'Wade Warren', type: 'declined', time: '01:34 pm', unread: 80, avatar: 'https://i.pravatar.cc/150?u=25', status: 'Declined' },
  { id: 6, name: 'Cameron Williamson', type: 'failed', time: '07:59 pm', unread: 10, avatar: 'https://i.pravatar.cc/150?u=26', status: 'Failed' },
];

export default function CallsPage() {
  const [activeCall, setActiveCall] = useState<number | null>(1);
  const [isCallListOpen, setIsCallListOpen] = useState(true);

  const activeCallData = mockCalls.find(c => c.id === activeCall);

  const handleCallSelect = (id: number) => {
    setActiveCall(id);
    // On mobile, hide call list when a call is selected
    if (window.innerWidth < 1024) {
      setIsCallListOpen(false);
    }
  };

  const recentCallOptions: DropdownItem[] = [
    { label: 'Mark all as read', onClick: () => {} },
    { label: 'Show missed calls', onClick: () => {} },
    { label: 'Clear call history', danger: true, onClick: () => {} },
  ];

  const callDetailOptions: DropdownItem[] = [
    { label: 'Call back', onClick: () => {} },
    { label: 'Send message', onClick: () => {} },
    { label: 'Add to contacts', onClick: () => {} },
    { label: 'Block contact', danger: true, onClick: () => {} },
    { label: 'Delete from history', danger: true, onClick: () => {} },
  ];

  const renderCallIcon = (type: string) => {
    switch (type) {
      case 'outgoing': return <ArrowUpRight className="w-3.5 h-3.5 text-green-600" />;
      case 'incoming': return <ArrowDownLeft className="w-3.5 h-3.5 text-green-600" />;
      case 'missed': return <PhoneMissed className="w-3.5 h-3.5 text-red-500" />;
      case 'answered': return <ArrowDownLeft className="w-3.5 h-3.5 text-green-600" />;
      case 'declined': return <PhoneOff className="w-3.5 h-3.5 text-red-500" />;
      case 'failed': return <XCircle className="w-3.5 h-3.5 text-red-500" />;
      default: return <Phone className="w-3.5 h-3.5 text-gray-500" />;
    }
  };

  const renderCallLabel = (type: string) => {
    switch (type) {
      case 'outgoing': return 'Outgoing Call';
      case 'incoming': return 'Incoming Call';
      case 'missed': return 'Missed Call';
      case 'answered': return 'Answered';
      case 'declined': return 'Declined';
      case 'failed': return 'Failed Call';
      default: return 'Call';
    }
  };

  return (
    <div className="flex h-full max-w-full overflow-hidden m-2 mr-4">
      
      {/* Left Sidebar - Calls List */}
      <div className={`w-full lg:w-[380px] flex-col h-full bg-white border-r border-[#E2E8F0]  shrink-0 ${isCallListOpen ? 'flex' : 'hidden lg:flex'}`}>
        
        {/* User Profile Header */}
        <div className="p-5 flex items-center gap-3 border-b border-[#E2E8F0]">
          <div className="w-12 h-12 rounded-full border-2 border-green-500 p-0.5 shrink-0">
            <img src="https://i.pravatar.cc/150?u=30" alt="Me" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-bold text-[#0F172A] text-lg truncate">UX-SHAKIL</h2>
            <p className="text-xs text-[#64748B] truncate">My Account</p>
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

        {/* Recent Call Header & Search */}
        <div className="px-5 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[17px] font-bold text-[#0F172A]">Recent Call</h3>
            <div className="flex gap-2 text-gray-400">
              <Dropdown
                align="right"
                trigger={
                  <button className="hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                }
                items={recentCallOptions}
              />
            </div>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search user name or number" 
              className="w-full pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Calls List */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {mockCalls.map((call) => (
            <div 
              key={call.id} 
              onClick={() => handleCallSelect(call.id)}
              className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer hover:bg-[#F8FAFC] transition-colors ${activeCall === call.id ? 'bg-[#F0FDF4] border-r-2 border-green-500' : ''}`}
            >
              <div className="relative shrink-0">
                <img src={call.avatar} alt={call.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="text-sm font-bold text-[#0F172A] truncate pr-2">{call.name}</h4>
                  <span className="text-[10px] font-medium text-[#94A3B8] whitespace-nowrap">{call.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-[#64748B] truncate flex items-center gap-1.5">
                    {renderCallIcon(call.type)}
                    {renderCallLabel(call.type)}
                  </p>
                  {call.unread > 0 && (
                    <div className="bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[20px] text-center ml-2">
                      {call.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Area - Call Details */}
      <div className={`flex-1 flex-col h-full bg-white ${activeCallData ? 'flex' : 'hidden lg:flex'}`}>
        {activeCallData ? (
          <>
            {/* Header */}
            <div className="px-4 sm:px-6 py-5 flex justify-between items-center bg-white border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Back button - mobile only */}
                <button 
                  className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsCallListOpen(true)}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-500 p-0.5 relative shrink-0">
                  <img src={activeCallData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h2 className="font-bold text-[#0F172A] text-base sm:text-lg mb-0.5">{activeCallData.name}</h2>
                  <p className="text-xs text-[#94A3B8]">Last seen 4 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button className="hidden sm:flex w-10 h-10 rounded-full bg-gray-50 items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                  <Video className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                  <Phone className="w-4 h-4" />
                </button>
                <Dropdown
                  align="right"
                  trigger={
                    <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  }
                  items={callDetailOptions}
                />
              </div>
            </div>

            {/* Call History Content */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto no-scrollbar">
              <h4 className="font-bold text-[#0F172A] text-sm mb-4">Today</h4>
              
              <div className="flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0">
                    {renderCallIcon(activeCallData.type)}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0F172A] text-[13px]">{renderCallLabel(activeCallData.type)}</h5>
                    <p className="text-[11px] text-[#64748B]">{activeCallData.time}</p>
                  </div>
                </div>
                <span className="text-xs text-[#94A3B8] font-medium">{activeCallData.status}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-[#F8FAFC]">
            <p className="text-[#64748B] font-medium">Select a call to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
