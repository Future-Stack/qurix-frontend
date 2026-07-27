'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutGrid, 
  MessageCircle, 
  Users, 
  Phone, 
  Target, 
  UserPlus, 
  Bookmark, 
  BookOpen,
  MessageCircleMore
} from 'lucide-react';
import Sidebar from '@/components/employee-team-leader/layout/employee-team-leader/Sidebar/Sidebar';
import logo from '@/assets/logo-qurix.png';
import SettingsModal from '@/components/employee-team-leader/shared/Settings/SettingsModal';

export default function ServiceLineLayout({ children }: { children: React.ReactNode }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isSettingsRoute = pathname?.startsWith('/service-line/settings');

  useEffect(() => {
    if (isSettingsRoute) {
      setIsSettingsOpen(true);
    }
  }, [isSettingsRoute]);

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
    if (isSettingsRoute) {
      router.push('/service-line/dashboard');
    }
  };

  const serviceLineMenuItems = [
    { icon: LayoutGrid, href: '/service-line/dashboard', label: 'Dashboard' },
    { icon: MessageCircleMore, href: '/service-line/messages', label: 'Messages' },
    { icon: Users, href: '/service-line/contacts', label: 'Team' },
    { icon: Phone, href: '/service-line/calls', label: 'Calls' },
    { icon: Target, href: '/service-line/team-management', label: 'Management' },
    { icon: UserPlus, href: '/service-line/employees', label: 'Employees' },
    { icon: Bookmark, href: '/service-line/favorites', label: 'Favorites' },
    { icon: BookOpen, href: '/service-line/learn-books', label: 'Learn Books' },
  ];

  const customLogo = (
    <div className="w-10 h-10 bg-[#06530B] rounded-xl flex items-center justify-center text-white font-bold text-xl">
      <Image src={logo} alt="Qurix" width={40} height={40} />
    </div>
  );

  const isCommunicationRoute = pathname?.includes('/messages') ||
                               pathname?.includes('/calls') ||
                               pathname?.includes('/contacts') ||
                               pathname?.includes('/favorites') ||
                               pathname?.includes('/call-logs');

  const mainPadding = isCommunicationRoute
    ? 'p-0'
    : 'p-4 pb-28 md:p-6 lg:p-[30px]';

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-[#f5f5f5] text-[#282828] flex flex-col md:flex-row p-0 md:p-6 lg:p-[30px] gap-6 lg:gap-[30px] font-sans antialiased relative">
      <Sidebar
        basePath="/service-line"
        customMenuItems={serviceLineMenuItems}
        customLogo={customLogo}
        onOpenSettings={() => setIsSettingsOpen(true)}
        isSettingsActive={isSettingsOpen}
      />
      <main className={`flex-1 h-full max-h-full bg-white rounded-none md:rounded-[30px] border border-[#eaecf0] shadow-sm overflow-hidden flex flex-col ${mainPadding}`}>
        {children}
      </main>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={handleCloseSettings}
      />
    </div>
  );
}
