'use client';

import React, { useState } from 'react';
import { 
  X, 
  VolumeX, 
  Bookmark, 
  Trash2, 
  Eraser,
  Download,
  FileText,
  Link as LinkIcon
} from 'lucide-react';

interface ContactDetailsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  username: string;
  avatar?: string;
  serviceLine: string;
  teamName: string;
  phoneNumber: string;
  email: string;
  employeeId: string;
  memberSince: string;
  onMute?: () => void;
  onFavorite?: () => void;
  onClearChat?: () => void;
  onDeleteChat?: () => void;
  isFavorite?: boolean;
}

export default function ContactDetailsSidebar({
  isOpen,
  onClose,
  name,
  username,
  avatar,
  serviceLine,
  teamName,
  phoneNumber,
  email,
  employeeId,
  memberSince,
  onMute,
  onFavorite,
  onClearChat,
  onDeleteChat,
  isFavorite = false,
}: ContactDetailsSidebarProps) {
  const [activeTab, setActiveTab] = useState<'media' | 'links' | 'files'>('media');

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
                  {avatar ? (
                    <img src={avatar} alt={name} className="size-full object-cover" />
                  ) : (
                    <span className="text-gray-500 font-bold text-2xl">{name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
              </div>

              {/* Group Name Info */}
              <div className="min-w-0">
                <h3 className="font-['Roboto'] font-bold text-[20px] text-black leading-tight break-words">
                  {name}
                </h3>
                <p className="font-['Roboto'] font-normal text-[14px] text-[#a19791] font-condensed mt-1">
                  {username}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="size-[36px] bg-[#fef2f2] text-red-500 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors duration-150 cursor-pointer shrink-0"
            >
              <X className="size-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Project Variables Information */}
        <div className="p-5 border-b border-[#dadada] flex flex-col gap-4">
          <div className="flex flex-col gap-4.5 text-[14px] font-['Roboto']">
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Service Line</span>
              <span className="text-[#06530b] font-medium">{serviceLine}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Team</span>
              <span className="text-[#06530b] font-medium">{teamName}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Phone number</span>
              <span className="text-[#06530b] font-medium">{phoneNumber}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Work email</span>
              <span className="text-[#06530b] font-medium break-all">{email}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Employee ID</span>
              <span className="text-[#06530b] font-medium">{employeeId}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[#3c3c3c]">Member Since</span>
              <span className="text-[#06530b] font-medium">{memberSince}</span>
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

        {/* Sidebar Actions */}
        <div className="p-5 flex flex-col gap-[18px]">
          <button 
            onClick={onMute}
            className="flex items-center gap-3 text-[#3c3c3c] hover:text-slate-800 transition-colors w-full cursor-pointer text-sm font-['Roboto']"
          >
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
          <button 
            onClick={onClearChat}
            className="flex items-center gap-3 text-[#3c3c3c] hover:text-slate-800 transition-colors w-full cursor-pointer text-sm font-['Roboto']"
          >
            <Eraser className="size-4" />
            <span>Clear chat</span>
          </button>
          <div className="h-px bg-[#dadada] w-full" />
          <button 
            onClick={onDeleteChat}
            className="flex items-center gap-3 text-[#ef4444] hover:text-red-700 transition-colors w-full cursor-pointer text-sm font-['Roboto']"
          >
            <Trash2 className="size-4" />
            <span>Delete chat</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
