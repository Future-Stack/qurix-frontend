"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X,
  LayoutGrid,
  Users,
  Phone,
  Target,
  UserPlus,
  Bookmark,
  BookOpen,
  Settings,
  MessageCircleMore,
  Headphones
} from 'lucide-react';
import Image from 'next/image';
import logo from '../../../assets/logo-qurix.png';
import ContactBubbleIcon from '@/components/icons/ContactBubbleIcon';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTooltip, setHoveredTooltip] = useState<{ label: string; top: number; left: number } | null>(null);

  const navItems = [
    { icon: LayoutGrid, path: '/service-line/dashboard', id: 'dashboard', label: 'Dashboard' },
    { icon: MessageCircleMore, path: '/service-line/messages', id: 'messages', label: 'Messages' },
    { icon: ContactBubbleIcon, path: '/service-line/all-employee', id: 'team', label: 'Team' },
    { icon: Phone, path: '/service-line/calls', id: 'phone', label: 'Calls' },
    { icon: Target, path: '/service-line/team-management', id: 'target', label: 'Management' },
    { icon: UserPlus, path: '/service-line/employees', id: 'userplus', label: 'Employees' },
    { icon: Bookmark, path: '/service-line/favorites', id: 'bookmark', label: 'Favorites' },
    { icon: BookOpen, path: '/service-line/learn-books', id: 'book', label: 'Learn Books' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#06530B] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#05290b] transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`fixed md:static inset-y-0 left-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 w-[82px] h-[calc(100vh-32px)] max-h-[calc(100vh-32px)] bg-white rounded-[25px] pt-[18px] pb-[30px] shadow-sm shrink-0 mt-4 ml-4 md:mr-0 mr-4 overflow-hidden border border-[#eaecf0]`}>
        {/* Logo */}
        <div className="mb-[24px] shrink-0 flex items-center justify-center">
          <div className="w-[48px] h-[48px] rounded-[17px] flex items-center justify-center text-white font-bold text-xl overflow-hidden bg-[#06530b]">
            <Image
              src={logo}
              alt="Qurix"
              width={48}
              height={48}
            />
          </div>
        </div>

        {/* Nav Items (Scrollable on overflow without visible scrollbar - Figma gap: 26px) */}
        <div
          onScroll={() => setHoveredTooltip(null)}
          className="flex-1 w-full flex flex-col items-center gap-[26px] overflow-y-auto no-scrollbar py-1 px-1"
        >
          {navItems.map((item) => {
            const isActive = pathname?.startsWith(item.path) && item.path !== '#';
            return (
              <Link
                key={item.id}
                href={item.path}
                title={item.label}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredTooltip({
                    label: item.label,
                    top: rect.top + rect.height / 2,
                    left: rect.right + 12
                  });
                }}
                onMouseLeave={() => setHoveredTooltip(null)}
                className={`relative group size-[34px] flex items-center justify-center rounded-xl transition-colors shrink-0 ${isActive
                    ? 'bg-[#06530B1A] text-[#06530B]'
                    : 'text-[#828282] hover:bg-gray-50'
                  }`}
              >
                <item.icon className={item.icon === ContactBubbleIcon ? "w-[22px] h-[22px]" : "w-[20px] h-[20px]"} strokeWidth={isActive ? 2 : 1.5} />
              </Link>
            );
          })}
        </div>

        {/* Bottom Settings (Figma gap: 19px, line width: 47px) */}
        <div className="w-full pt-4 flex flex-col gap-[19px] items-center mt-auto shrink-0">
          <div className="w-[47px] h-[3px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent rounded-[2px] opacity-80 shadow-[0_0_6px_rgba(0,171,12,0.8)]"></div>
          <Link
            href="/service-line/settings"
            title="Settings"
            onClick={() => setIsOpen(false)}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setHoveredTooltip({
                label: 'Settings',
                top: rect.top + rect.height / 2,
                left: rect.right + 12
              });
            }}
            onMouseLeave={() => setHoveredTooltip(null)}
            className={`relative group size-[34px] flex items-center justify-center rounded-xl transition-colors shrink-0 ${pathname?.startsWith('/service-line/settings')
                ? 'bg-[#06530B1A] text-[#06530B]'
                : 'text-[#828282] hover:bg-gray-50'
              }`}
          >
            <Settings className="w-[20px] h-[20px]" strokeWidth={pathname?.startsWith('/service-line/settings') ? 2 : 1.5} />
          </Link>
        </div>
      </div>

      {/* Floating Non-Clipping Tooltip */}
      {hoveredTooltip && (
        <div
          style={{ top: `${hoveredTooltip.top}px`, left: `${hoveredTooltip.left}px` }}
          className="fixed -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg pointer-events-none whitespace-nowrap z-[9999] shadow-xl flex items-center transition-opacity duration-150 animate-in fade-in zoom-in-95"
        >
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
          {hoveredTooltip.label}
        </div>
      )}
    </>
  );
}

