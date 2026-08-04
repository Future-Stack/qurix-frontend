'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  Users,
  Phone,
  Bookmark,
  BookOpen,
  Settings,
  MessageCircleMore,
  AlertTriangle,
  Headphones
} from 'lucide-react';

interface SidebarItem {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
  activePaths?: string[]; // additional path prefixes that should highlight this item
}

interface SidebarProps {
  onOpenSettings?: () => void;
  isSettingsActive?: boolean;
  basePath?: string;
  customMenuItems?: SidebarItem[];
  customLogo?: React.ReactNode;
}

export default function Sidebar({
  onOpenSettings,
  isSettingsActive = false,
  basePath = '/employee',
  customMenuItems,
  customLogo
}: SidebarProps) {
  const pathname = usePathname();
  const [hoveredTooltip, setHoveredTooltip] = useState<{ label: string; top: number; left: number } | null>(null);

  const menuItems: SidebarItem[] = customMenuItems || [
    { icon: LayoutGrid, href: `${basePath}/dashboard`, label: 'Dashboard' },
    { icon: MessageCircleMore, href: `${basePath}/messages`, label: 'Messages' },
    { icon: Users, href: `${basePath}/contacts`, label: 'Contacts' },
    { icon: Phone, href: `${basePath}/call-logs`, label: 'Recent Calls' },
    { icon: AlertTriangle, href: `${basePath}/issue-projects`, label: 'Issue Projects' },
    { icon: Bookmark, href: `${basePath}/favorites`, label: 'Favorites' },
    { icon: Headphones, href: `${basePath}/station`, label: 'Station' },
    { icon: BookOpen, href: `${basePath}/learn-books`, label: 'Learn Books' },
  ];

  const activeIndex = menuItems.findIndex(item => {
    if (pathname?.startsWith(item.href)) return true;
    if (item.activePaths) {
      return item.activePaths.some(p => pathname?.startsWith(p));
    }
    return false;
  });
  // Default to 0 (dashboard) if none matched
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;

  const isSettings = isSettingsActive || pathname?.startsWith(`${basePath}/settings`);

  const handleSettingsClick = (e: React.MouseEvent) => {
    if (onOpenSettings) {
      e.preventDefault();
      onOpenSettings();
    }
  };

  return (
    <>
      {/* Desktop Navigation Sidebar */}
      <aside className="hidden md:flex flex-col items-center justify-between w-[82px] h-full max-h-full bg-white rounded-[25px] pt-[18px] pb-[30px] px-2.5 border border-[#eaecf0] shadow-sm shrink-0 select-none overflow-hidden z-20">

        {/* Top Section */}
        <div className="flex flex-col items-center w-full shrink-0 mb-[24px]">
          {/* Brand Logo */}
          <Link href={`${basePath}/dashboard`} className="flex items-center justify-center">
            {customLogo ? (
              customLogo
            ) : (
              <div className="relative size-[48px] rounded-[17px] overflow-hidden flex items-center justify-center bg-[#06530b] text-white font-bold text-xl shadow-md group">
                <span className="group-hover:scale-110 transition-transform">Q</span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Links - Scrollable on overflow without visible scrollbar (Figma gap: 26px) */}
        <nav
          onScroll={() => setHoveredTooltip(null)}
          className="flex-1 w-full flex flex-col gap-[26px] items-center overflow-y-auto no-scrollbar py-1 px-1"
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = !isSettings && currentIndex === index;

            return (
              <Link
                key={item.label}
                href={item.href}
                title={item.label}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredTooltip({
                    label: item.label,
                    top: rect.top + rect.height / 2,
                    left: rect.right + 12
                  });
                }}
                onMouseLeave={() => setHoveredTooltip(null)}
                className="relative flex items-center justify-center shrink-0 group"
              >
                <div className={`size-[34px] rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${isActive
                    ? 'text-[#06530b] bg-[#06530B1A] shadow-sm'
                    : 'text-[#828282] hover:text-slate-800 hover:bg-gray-50'
                  }`}>
                  <Icon className="size-[20px] stroke-[2]" />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer (Figma gap: 19px, line width: 47px) */}
        <div className="flex flex-col gap-[19px] items-center w-full shrink-0 pt-4 mt-auto">
          {/* Divider with green gradient center glow */}
          <div className="h-[3px] w-[47px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent rounded-[2px]" />

          {/* Settings Button */}
          <button
            onClick={handleSettingsClick}
            title="Settings"
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setHoveredTooltip({
                label: 'Settings',
                top: rect.top + rect.height / 2,
                left: rect.right + 12
              });
            }}
            onMouseLeave={() => setHoveredTooltip(null)}
            className="relative flex items-center justify-center shrink-0 group"
          >
            <div className={`size-[34px] rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${isSettings
                ? 'text-[#06530b] bg-[#06530B1A] shadow-sm'
                : 'text-[#828282] hover:text-slate-800 hover:bg-gray-50'
              }`}>
              <Settings className="size-[20px] stroke-[2] animate-[spin_10s_linear_infinite] hover:animate-[spin_2s_linear_infinite]" />
            </div>
          </button>
        </div>
      </aside>

      {/* Floating Tooltip Portal */}
      {hoveredTooltip && (
        <div
          style={{ top: `${hoveredTooltip.top}px`, left: `${hoveredTooltip.left}px` }}
          className="fixed -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg pointer-events-none whitespace-nowrap z-[9999] shadow-xl flex items-center transition-opacity duration-150 animate-in fade-in zoom-in-95"
        >
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
          {hoveredTooltip.label}
        </div>
      )}

      {/* Mobile Bottom Tab Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#eaecf0] flex items-center overflow-x-auto no-scrollbar px-2 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-1 min-w-full justify-around">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = !isSettings && currentIndex === index;
            return (
              <Link key={item.label} href={item.href} className="shrink-0">
                <div className={`flex flex-col items-center justify-center min-w-[56px] h-12 px-1 rounded-lg transition-all duration-150 ${isActive ? 'text-[#06530b]' : 'text-[#828282]'
                  }`}>
                  <Icon className="size-5 stroke-[2]" />
                  <span className="text-[10px] mt-0.5 font-medium whitespace-nowrap">{item.label}</span>
                </div>
              </Link>
            );
          })}
          {/* Settings button on mobile bottom bar */}
          <button onClick={handleSettingsClick} className="focus:outline-none shrink-0">
            <div className={`flex flex-col items-center justify-center min-w-[56px] h-12 px-1 rounded-lg transition-all duration-150 ${isSettings ? 'text-[#06530b]' : 'text-[#828282]'
              }`}>
              <Settings className="size-5 stroke-[2]" />
              <span className="text-[10px] mt-0.5 font-medium">Settings</span>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}

