import React from 'react';
import { Phone, Video, MessageCircle, MoreVertical, ArrowUpRight, ArrowDownLeft, PhoneMissed, PhoneOff, XCircle } from 'lucide-react';
import { Dropdown, DropdownItem } from '@/components/ui/Dropdown/Dropdown';

interface CallDetailsAreaProps {
  activeData: any;
  options: DropdownItem[];
}

export default function CallDetailsArea({ activeData, options }: CallDetailsAreaProps) {
  if (!activeData) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-[#64748B] font-medium">Select a call to view details</p>
      </div>
    );
  }

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
    <div className="flex-1 flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-6 py-4 flex justify-between items-center bg-white border-b border-[#E2E8F0]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-green-500 p-0.5 relative shrink-0">
            <img src={activeData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
          <div>
            <h2 className="font-bold text-[#0F172A] text-lg mb-0.5">{activeData.name}</h2>
            <p className="text-xs text-[#94A3B8]">Last seen 4 minute ago</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <MessageCircle className="w-4 h-4" />
          </button>
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
            items={options}
          />
        </div>
      </div>

      {/* Call History Content */}
      <div className="flex-1 p-6">
        <h4 className="font-bold text-[#0F172A] text-sm mb-4">Today</h4>
        
        <div className="flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center relative">
              <Phone className="w-4 h-4 text-green-600" />
              <div className="absolute -bottom-1 -right-1">
                {renderCallIcon(activeData.type)}
              </div>
            </div>
            <div>
              <h5 className="font-bold text-[#0F172A] text-[13px]">{renderCallLabel(activeData.type)}</h5>
              <p className="text-[11px] text-[#64748B]">{activeData.time}</p>
            </div>
          </div>
          <span className="text-xs text-[#94A3B8] font-medium">{activeData.status}</span>
        </div>
      </div>
    </div>
  );
}
