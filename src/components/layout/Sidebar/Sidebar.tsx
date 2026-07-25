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
  Settings 
} from 'lucide-react';
import Image from 'next/image';
import logo from '../../../assets/logo-qurix.png';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: LayoutGrid, path: '/service-line/dashboard', id: 'dashboard' },
    { icon: MessageCircle, path: '/service-line/messages', id: 'messages' },
    { icon: Users, path: '/service-line/all-employee', id: 'team' },
    { icon: Phone, path: '/service-line/calls', id: 'phone' },
    { icon: Target, path: '/service-line/team-management', id: 'target' },
    { icon: UserPlus, path: '/service-line/employees', id: 'userplus' },
    { icon: Bookmark, path: '#', id: 'bookmark' },
    { icon: BookOpen, path: '#', id: 'book' },
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
      <div className={`fixed md:static inset-y-0 left-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 w-[88px] h-[calc(100vh-32px)] bg-white rounded-3xl flex flex-col items-center py-6 shadow-sm shrink-0 mt-4 ml-4 md:mr-0 mr-4`}>
        {/* Logo */}
      <div className="mb-8">
        <div className="w-10 h-10  rounded-xl flex items-center justify-center text-white font-bold text-xl">
          <Image 
            src={logo}
            alt="Qurix"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex-1 w-full flex flex-col items-center gap-2 overflow-y-auto no-scrollbar px-3">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.path) && item.path !== '#';
          return (
            <Link 
              key={item.id} 
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                isActive 
                  ? 'bg-[#E6F4EA] text-[#06530B]' 
                  : 'text-[#64748B] hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
            </Link>
          );
        })}
      </div>

      {/* Bottom Settings */}
      <div className="w-full px-4 pt-4 flex flex-col items-center mt-auto">
        <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[#00AB0C] to-transparent opacity-80 mb-4 shadow-[0_0_6px_rgba(0,171,12,0.8)]"></div>
        <Link 
          href="/service-line/settings"
          onClick={() => setIsOpen(false)}
          className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
            pathname?.startsWith('/service-line/settings')
              ? 'bg-[#E6F4EA] text-[#06530B]' 
              : 'text-[#64748B] hover:bg-gray-50'
          }`}
        >
          <Settings className="w-5 h-5" strokeWidth={pathname?.startsWith('/service-line/settings') ? 2 : 1.5} />
        </Link>
      </div>
    </div>
    </>
  );
}
