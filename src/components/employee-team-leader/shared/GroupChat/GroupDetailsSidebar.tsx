'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  X, 
  VolumeX, 
  Bookmark, 
  LogOut, 
  Download,
  FileText,
  Link as LinkIcon,
  Pencil
} from 'lucide-react';

interface GroupMember {
  name: string;
  role: string;
  avatar: string;
}

interface GroupDetailsSidebarProps {
  onClose: () => void;
  isOpen: boolean;
  name: string;
  avatar?: string;
  serviceLine: string;
  teamName: string;
  status: string;
  createdDate: string;
  startDate: string;
  deliveryDeadline: string;
  initialSeconds: number;
  members: GroupMember[];
  onFavorite?: () => void;
  isFavorite?: boolean;
  onEdit?: () => void;
}

export default function GroupDetailsSidebar({
  onClose,
  isOpen,
  name,
  avatar,
  serviceLine,
  teamName,
  status,
  createdDate,
  startDate,
  deliveryDeadline,
  initialSeconds,
  members,
  onFavorite,
  isFavorite = false,
  onEdit,
}: GroupDetailsSidebarProps) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [activeTab, setActiveTab] = useState<'media' | 'links' | 'files'>('media');

  useEffect(() => {
    setTimeLeft(initialSeconds);
  }, [initialSeconds, name]);

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

  // Curated Unsplash images for media attachments
  const mediaImages = [
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&q=80',
  ];

  return (
    <aside className={`absolute lg:relative right-0 top-0 h-full w-[439px] shrink-0 border-l border-[#dadada] bg-white flex flex-col z-30 transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full lg:hidden'
    }`}>
      <div className="flex-1 flex flex-col overflow-y-auto select-none">
        
        {/* Profile Card Header */}
        <div className="p-5 border-b border-[#dadada] flex flex-col gap-4 relative shrink-0">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-4 max-w-[85%]">
              
              {/* Stacked Group Avatar */}
              <div className="relative size-[90px]">
                <div className="absolute inset-0 border-2 border-emerald-800/10 rounded-full" />
                
                <div className="size-[73.3px] rounded-full overflow-hidden border border-gray-100 bg-gray-100 flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm">
                  {members.length >= 3 ? (
                    <div className="grid grid-cols-2 size-full">
                      <img src={members[0]?.avatar} alt="" className="size-full object-cover border-r border-b border-white" />
                      <img src={members[1]?.avatar} alt="" className="size-full object-cover border-b border-white" />
                      <img src={members[2]?.avatar} alt="" className="size-full object-cover border-r border-white" />
                      <div className="bg-[#f2fff6] flex items-center justify-center text-[9px] font-bold text-[#06530b]">
                        {members.length > 3 ? `+${members.length - 3}` : '7+'}
                      </div>
                    </div>
                  ) : avatar ? (
                    <img src={avatar} alt="" className="size-full object-cover" />
                  ) : (
                    <span className="text-gray-500 font-bold text-2xl">{name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
              </div>

              {/* Group Name Info */}
              <div className="min-w-0">
                <h3 className="font-['Roboto'] font-medium text-[18px] text-black leading-tight break-words">
                  {name}
                </h3>
                <p className="font-['Roboto'] font-normal text-[14px] text-[#a19791] font-condensed mt-1">
                  Created at: {createdDate}
                </p>
              </div>
            </div>

            {/* Edit and Close Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button 
                onClick={() => {
                  if (onEdit) {
                    onEdit();
                  } else {
                    const parts = name.split('||').map(p => p.trim());
                    const rawOrder = parts[parts.length - 1] || 'FO2228CA90708';
                    const cleanOrderId = rawOrder.replace(/[^a-zA-Z0-9]/g, '') || 'FO2228CA90708';
                    router.push(`/team-leader/messages/edit-project/${cleanOrderId}`);
                  }
                }}
                className="px-3 py-1.5 bg-[#06530b] hover:bg-emerald-900 text-white rounded-lg flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer shadow-sm"
                title="Edit Group Details"
              >
                <Pencil className="size-3.5 text-white" />
                <span>Edit</span>
              </button>
              <button 
                onClick={onClose}
                className="size-[32px] bg-[#fef2f2] text-red-500 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors duration-150 cursor-pointer"
                title="Close Sidebar"
              >
                <X className="size-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Variables Information */}
        <div className="p-5 border-b border-[#dadada] flex flex-col gap-4">
          <div className="flex flex-col gap-4 text-[14px] font-['Roboto']">
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Service Line</span>
              <span className="text-[#06530b] font-medium">{serviceLine}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Team</span>
              <span className="text-[#06530b] font-medium">{teamName}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Project Status</span>
              <span className="text-[#06530b] font-medium">{status}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Start Date</span>
              <span className="text-[#06530b] font-medium">{startDate}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Delivery Deadline</span>
              <span className="text-[#06530b] font-medium">{deliveryDeadline}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Time Remain</span>
              <span className="text-[#06530b] font-bold font-mono tracking-wide">
                {d > 0 || h > 0 || m > 0 || s > 0 ? `${d}D: ${h}H: ${m}M: ${s}S` : '0D: 0H: 0M: 0S'}
              </span>
            </div>
          </div>
        </div>

        {/* Attachments Section */}
        <div className="p-5 border-b border-[#dadada] flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <h4 className="font-['Roboto'] font-medium text-[16px] text-black">Attachments</h4>
            <span className="text-xs text-[#a19791] font-condensed">25 items</span>
          </div>

          {/* Media/Links/Files Tab Controls */}
          <div className="flex border-b border-[#ebe9e8] mb-1">
            <button 
              onClick={() => setActiveTab('media')}
              className={`flex-1 py-1.5 text-center text-sm font-['Roboto'] rounded-t-[10px] transition-all cursor-pointer ${
                activeTab === 'media' 
                  ? 'bg-[#edebea] text-[#3c3c3c] font-medium' 
                  : 'text-[#616161] hover:bg-slate-50'
              }`}
            >
              Media
            </button>
            <button 
              onClick={() => setActiveTab('links')}
              className={`flex-1 py-1.5 text-center text-sm font-['Roboto'] rounded-t-[10px] transition-all cursor-pointer ${
                activeTab === 'links' 
                  ? 'bg-[#edebea] text-[#3c3c3c] font-medium' 
                  : 'text-[#616161] hover:bg-slate-50'
              }`}
            >
              Links
            </button>
            <button 
              onClick={() => setActiveTab('files')}
              className={`flex-1 py-1.5 text-center text-sm font-['Roboto'] rounded-t-[10px] transition-all cursor-pointer ${
                activeTab === 'files' 
                  ? 'bg-[#edebea] text-[#3c3c3c] font-medium' 
                  : 'text-[#616161] hover:bg-slate-50'
              }`}
            >
              Files
            </button>
          </div>

          {/* Media Grid Display */}
          {activeTab === 'media' && (
            <div className="grid grid-cols-6 gap-1.5 w-full">
              {mediaImages.map((src, i) => (
                <div key={i} className="aspect-square relative rounded-[6px] overflow-hidden group cursor-pointer border border-gray-100 shadow-sm shrink-0">
                  <img src={src} alt="" className="size-full object-cover" />
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-150 rounded-[6px] ${
                    i === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <Download className="size-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'links' && (
            <div className="space-y-1.5">
              <a href="#" className="flex items-center gap-2 py-1 text-xs text-[#06530b] hover:underline">
                <LinkIcon className="size-3.5" />
                <span>design-assets.figma.com</span>
              </a>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs py-1">
                <div className="flex items-center gap-2">
                  <FileText className="size-3.5 text-red-500" />
                  <span className="text-gray-700">Project_Requirements.pdf</span>
                </div>
                <span className="text-gray-400">1.8 MB</span>
              </div>
            </div>
          )}

          <a href="#" className="text-[#06530b] text-[14px] font-['Roboto'] underline mt-1 hover:text-emerald-800 inline-block">
            See all
          </a>
        </div>

        {/* Group Members Section */}
        <div className="p-5 border-b border-[#dadada] flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-baseline gap-2">
              <h4 className="font-['Roboto'] font-medium text-[16px] text-black">Members</h4>
              <span className="text-xs text-[#a19791] font-condensed">{members.length} members</span>
            </div>
            <button className="bg-[#06530b] hover:bg-emerald-900 text-white text-[12px] font-semibold px-3 py-1 rounded-md shadow-sm transition-colors cursor-pointer">
              Add New
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {members.slice(0, 3).map((member) => (
              <div key={member.name} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <div className="size-[30px] rounded-full overflow-hidden border border-gray-100 flex items-center justify-center bg-gray-50 shrink-0">
                    <img src={member.avatar} alt={member.name} className="size-full object-cover" />
                  </div>
                  <span className="text-[#3c3c3c] text-[14px] font-['Roboto'] font-normal">{member.name}</span>
                  {member.role === 'admin' && (
                    <span className="bg-[#06530b]/10 text-[#06530b] text-[11px] font-condensed font-medium rounded-full px-2 py-0.5 shadow-sm">
                      admin
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="text-[#06530b] text-[14px] font-['Roboto'] underline mt-1 hover:text-emerald-800 inline-block">
            See all
          </a>
        </div>

        {/* Sidebar Actions */}
        <div className="p-5 flex flex-col gap-[18px]">
          <button className="flex items-center gap-3 text-[#3c3c3c] hover:text-slate-800 transition-colors w-full cursor-pointer text-sm font-['Roboto']">
            <VolumeX className="size-4" />
            <span>Mute chat</span>
          </button>
          <div className="h-px bg-[#dadada] w-full" />
          <button 
            onClick={onFavorite}
            className="flex items-center gap-3 text-[#3c3c3c] hover:text-slate-800 transition-colors w-full cursor-pointer text-sm font-['Roboto']"
          >
            <Bookmark className={`size-4 ${isFavorite ? 'fill-[#06530b] text-[#06530b]' : ''}`} />
            <span>{isFavorite ? 'Remove favorite' : 'Add favorite'}</span>
          </button>
          <div className="h-px bg-[#dadada] w-full" />
          <button className="flex items-center gap-3 text-[#ef4444] hover:text-red-700 transition-colors w-full cursor-pointer text-sm font-['Roboto']">
            <LogOut className="size-4" />
            <span>Leave Group</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
