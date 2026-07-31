"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X,
  LayoutGrid, 
  MessageCircle, 
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

import logo from '@/assets/logo-qurix.png'
import Image from 'next/image';

export default function SuperAdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: LayoutGrid, path: '/super-admin/dashboard', id: 'dashboard', label: 'Dashboard' },
    { icon: MessageCircleMore, path: '/super-admin/messages', id: 'messages', label: 'Messages' },
    { icon: Users, path: '/super-admin/contacts', id: 'contacts', label: 'Users' },
    { icon: Phone, path: '/super-admin/calls', id: 'phone', label: 'Calls' },
    { icon: Target, path: '/super-admin/service-line-management', id: 'target', label: 'Management' },
    { icon: UserPlus, path: '/super-admin/employees', id: 'userplus', label: 'Employees' },
    { icon: Bookmark, path: '/super-admin/favorites', id: 'bookmark', label: 'Favorites' },
    { icon: BookOpen, path: '/super-admin/learn-books', id: 'book', label: 'Learn Books' },
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
      <div className={`fixed md:static inset-y-0 left-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 w-[88px] h-[calc(100vh-32px)] bg-white rounded-3xl flex flex-col items-center py-6 shadow-sm shrink-0 mt-4 ml-4 md:mr-0 mr-4 overflow-visible`}>
        {/* Logo */}
      <div className="mb-8">
        <div className="w-10 h-10 bg-[#06530B] rounded-xl flex items-center justify-center text-white font-bold text-xl">
         <Image
            src={logo}
            alt="Qurix"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex-1 w-full flex flex-col items-center gap-2 overflow-visible px-3">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.path) && item.path !== '#';
          return (
            <Link 
              key={item.id} 
              href={item.path}
              title={item.label}
              onClick={() => setIsOpen(false)}
              className={`relative group w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                isActive 
                  ? 'bg-[#06530B1A] text-[#06530B]' 
                  : 'text-[#64748B] hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />

              <span className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-[100] shadow-xl scale-95 group-hover:scale-100 origin-left flex items-center">
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Settings */}
      <div className="w-full px-4 pt-4 flex flex-col items-center mt-auto">
        <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[#00AB0C] to-transparent opacity-80 mb-4 shadow-[0_0_6px_rgba(0,171,12,0.8)]"></div>
        <Link 
          href="/super-admin/settings"
          title="Settings"
          onClick={() => setIsOpen(false)}
          className={`relative group w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
            pathname?.startsWith('/super-admin/settings')
              ? 'bg-[#06530B1A] text-[#06530B]' 
              : 'text-[#64748B] hover:bg-gray-50'
          }`}
        >
          <Settings className="w-5 h-5" strokeWidth={pathname?.startsWith('/super-admin/settings') ? 2 : 1.5} />

          <span className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-[100] shadow-xl scale-95 group-hover:scale-100 origin-left flex items-center">
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
            Settings
          </span>
        </Link>
      </div>
    </div>
    </>
  );
}
