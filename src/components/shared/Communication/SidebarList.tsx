import React from 'react';
import { Search, Edit, MoreVertical, Paperclip, Phone, PhoneMissed, PhoneOff, ArrowUpRight, ArrowDownLeft, XCircle, Archive } from 'lucide-react';
import { Dropdown, DropdownItem } from '@/components/ui/Dropdown/Dropdown';

interface SidebarListProps {
  title: string;
  type: 'messages' | 'calls' | 'contacts' | 'favorites';
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  items: any[];
  activeId: number | null;
  onSelect: (id: number) => void;
  options: DropdownItem[];
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

export default function SidebarList({ title, type, searchQuery, setSearchQuery, items, activeId, onSelect, options }: SidebarListProps) {
  return (
    <>
      <div className="px-5 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[17px] font-bold text-[#0F172A]">{title}</h3>
          <div className="flex gap-2 text-gray-400">
            {type === 'messages' && <button className="hover:text-gray-600 transition-colors"><Edit className="w-4 h-4" /></button>}
            <Dropdown 
              align="right"
              trigger={<button className="hover:text-gray-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>}
              items={options}
            />
          </div>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder={type === 'calls' ? 'Search user name or number' : 'Search'} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>

      {type === 'messages' && (
        <div className="px-5 pb-2">
          <div className="w-full flex justify-between items-center bg-[#06530B1A] border border-[#DCFCE7] rounded-xl px-4 py-3 cursor-pointer hover:bg-[#DCFCE7] transition-colors">
            <span className="text-sm font-bold text-green-700">Archived Chats</span>
            <Archive className="w-4 h-4 text-green-600" />
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onSelect(item.id)}
            className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors hover:bg-[#F8FAFC] ${activeId === item.id ? 'bg-[#06530B1A]' : ''}`}
          >
            <div className="relative shrink-0">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
              {item.isOnline !== undefined && item.isOnline && (
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <h4 className="text-sm font-bold text-[#0F172A] truncate pr-2">{item.name}</h4>
                <span className="text-[10px] font-medium text-[#94A3B8] whitespace-nowrap">{item.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-[#64748B] truncate flex items-center gap-1">
                  {type === 'calls' && item.type && renderCallIcon(item.type)}
                  {type !== 'calls' && (
                    item.preview?.toLowerCase().includes('typing') ? (
                      <Edit className="w-3 h-3 shrink-0 text-green-500" />
                    ) : (item.preview?.includes('attachment') || item.preview?.includes('picture')) ? (
                      <Paperclip className="w-3 h-3 shrink-0" />
                    ) : null
                  )}
                  {type === 'calls' ? item.type.charAt(0).toUpperCase() + item.type.slice(1) : item.preview}
                </p>
                {item.unread > 0 && (
                  <div className="bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[20px] text-center ml-2">
                    {item.unread}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
