'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  Users, 
  Phone, 
  Bookmark, 
  BookOpen, 
  Settings, 
  MessageCircleMore
} from 'lucide-react';

interface SidebarItem {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
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

  const menuItems: SidebarItem[] = customMenuItems || [
    { icon: LayoutGrid, href: `${basePath}/dashboard`, label: 'Dashboard' },
    { icon: MessageCircleMore, href: `${basePath}/messages`, label: 'Messages' },
    { icon: Users, href: `${basePath}/contacts`, label: 'Contacts' },
    { icon: Phone, href: `${basePath}/call-logs`, label: 'Recent Calls' },
    { icon: Bookmark, href: `${basePath}/favorites`, label: 'Favorites' },
    { icon: BookOpen, href: `${basePath}/learn-books`, label: 'Learn Books' },
  ];

  const activeIndex = menuItems.findIndex(item => pathname?.startsWith(item.href));
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
      <aside className="hidden md:flex flex-col items-center justify-between w-[82px] h-full max-h-full bg-white rounded-[25px] py-6 px-[17px] border border-[#eaecf0] shadow-sm shrink-0 select-none overflow-hidden">
        
        {/* Top Section */}
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Brand Logo */}
          <Link href={`${basePath}/dashboard`} className="flex items-center justify-center">
            {customLogo ? (
              customLogo
            ) : (
              <div className="relative size-12 rounded-[17px] overflow-hidden flex items-center justify-center bg-[#06530b] text-white font-bold text-xl shadow-md group">
                <span className="group-hover:scale-110 transition-transform">Q</span>
              </div>
            )}
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-[26px] items-center w-full">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = !isSettings && currentIndex === index;

              return (
                <Link 
                  key={item.label} 
                  href={item.href}
                  title={item.label}
                  className="relative flex items-center justify-center group"
                >
                  <div className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-[#06530b] bg-green-50/80 shadow-sm' 
                      : 'text-[#828282] hover:text-slate-800 hover:bg-gray-50'
                  }`}>
                    <Icon className="size-6 stroke-[2]" />
                  </div>
                  
                  {/* Tooltip on hover */}
                  <span className="absolute left-16 bg-slate-800 text-white text-xs font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-5 items-center w-full">
          {/* Divider with green gradient center glow */}
          <div className="h-[3px] w-[47px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent rounded-[2px]" />
          
          {/* Settings Button */}
          <button 
            onClick={handleSettingsClick}
            title="Settings"
            className="relative flex items-center justify-center group"
          >
            <div className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
              isSettings 
                ? 'text-[#06530b] bg-green-50/80 shadow-sm' 
                : 'text-[#828282] hover:text-slate-800 hover:bg-gray-50'
            }`}>
              <Settings className="size-6 stroke-[2] animate-[spin_10s_linear_infinite] hover:animate-[spin_2s_linear_infinite]" />
            </div>
            
            <span className="absolute left-16 bg-slate-800 text-white text-xs font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
              Settings
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#eaecf0] flex items-center justify-around px-4 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {menuItems.slice(0, 5).map((item, index) => {
          const Icon = item.icon;
          const isActive = !isSettings && currentIndex === index;
          return (
            <Link key={item.label} href={item.href}>
              <div className={`flex flex-col items-center justify-center size-12 rounded-lg transition-all duration-150 ${
                isActive ? 'text-[#06530b]' : 'text-[#828282]'
              }`}>
                <Icon className="size-5 stroke-[2]" />
                <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
        {/* Settings button on mobile bottom bar */}
        <button onClick={handleSettingsClick} className="focus:outline-none">
          <div className={`flex flex-col items-center justify-center size-12 rounded-lg transition-all duration-150 ${
            isSettings ? 'text-[#06530b]' : 'text-[#828282]'
          }`}>
            <Settings className="size-5 stroke-[2]" />
            <span className="text-[10px] mt-0.5 font-medium">Settings</span>
          </div>
        </button>
      </nav>
    </>
  );
}
