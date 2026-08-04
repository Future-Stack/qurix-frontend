'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutGrid, 
  Users, 
  Phone, 
  Bookmark, 
  BookOpen,
  MessageCircleMore,
  AlertTriangle,
  Headphones,
  Target
} from 'lucide-react';
import ContactBubbleIcon from '@/components/icons/ContactBubbleIcon';
import Sidebar from '@/components/employee-team-leader/layout/employee-team-leader/Sidebar/Sidebar';
import SettingsModal from '@/components/employee-team-leader/shared/Settings/SettingsModal';
import Image from 'next/image';
import logo from '@/assets/logo-qurix.png';


export default function SalesLayout({ children }: { children: React.ReactNode }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isSettingsRoute = pathname?.startsWith('/sales/settings');

  // Open settings modal if user lands directly on /sales/settings route
  useEffect(() => {
    if (isSettingsRoute) {
      setIsSettingsOpen(true);
    }
  }, [isSettingsRoute]);

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
    if (isSettingsRoute) {
      router.push('/sales/dashboard');
    }
  };

  const salesMenuItems = [
    { icon: LayoutGrid, href: '/sales/dashboard', label: 'Dashboard' },
    { icon: MessageCircleMore, href: '/sales/messages', label: 'Messages' },
    { icon: ContactBubbleIcon, href: '/sales/contacts', label: 'Contacts' },
    { icon: Phone, href: '/sales/call-logs', label: 'Recent Calls' },
    { icon: Target, href: '/sales/team-management', label: 'Management', activePaths: ['/sales/team-management'] },
    { icon: AlertTriangle, href: '/sales/issue-projects', label: 'Issue Projects' },
    { icon: Bookmark, href: '/sales/favorites', label: 'Favorites' },
    { icon: Headphones, href: '/sales/station', label: 'Station' },
    { icon: BookOpen, href: '/sales/learn-books', label: 'Learn Books' },
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

  const isNoPaddingRoute = isCommunicationRoute || 
                           pathname?.includes('/projects') ||
                           pathname?.includes('/create-new-project') ||
                           pathname?.includes('/create-project') ||
                           pathname?.includes('/edit-project') ||
                           pathname?.startsWith('/sales/employees') ||
                           pathname?.startsWith('/sales/learn-books');

  const mainPadding = isNoPaddingRoute
    ? 'p-0'
    : 'p-4 pb-28 md:p-6 lg:p-[30px]';

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-[#f5f5f5] text-[#282828] flex flex-col md:flex-row p-0 md:p-6 lg:p-[30px] gap-6 lg:gap-[30px] font-sans antialiased relative">
      {/* Navigation Sidebar */}
      <Sidebar
        basePath="/sales"
        customMenuItems={salesMenuItems}
        customLogo={customLogo}
        onOpenSettings={() => setIsSettingsOpen(true)}
        isSettingsActive={isSettingsOpen}
      />

      {/* Main Content Area */}
      <main className={`flex-1 h-full max-h-full bg-white rounded-none md:rounded-[30px] border border-[#eaecf0] shadow-sm overflow-hidden flex flex-col ${mainPadding}`}>
        {children}
      </main>

      {/* Settings Modal Overlay */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={handleCloseSettings}
      />
    </div>
  );
}
