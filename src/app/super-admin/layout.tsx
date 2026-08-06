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
  MessageCircleMore,
  AlertTriangle,
  Headphones
} from 'lucide-react';
import Sidebar from '@/components/employee-team-leader/layout/employee-team-leader/Sidebar/Sidebar';
import logo from '@/assets/logo-qurix.png';
import SettingsModal from '@/components/employee-team-leader/shared/Settings/SettingsModal';

import RoleGuard from '@/components/auth/RoleGuard';

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isSettingsRoute = pathname?.startsWith('/super-admin/settings');

  useEffect(() => {
    if (isSettingsRoute) {
      setIsSettingsOpen(true);
    }
  }, [isSettingsRoute]);

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
    if (isSettingsRoute) {
      router.push('/super-admin/dashboard');
    }
  };

  const superAdminMenuItems = [
    { icon: LayoutGrid, href: '/super-admin/dashboard', label: 'Dashboard' },
    { icon: MessageCircleMore, href: '/super-admin/messages', label: 'Messages' },
    { icon: Users, href: '/super-admin/contacts', label: 'Users' },
    { icon: Phone, href: '/super-admin/calls', label: 'Calls' },
    { icon: Target, href: '/super-admin/service-line-management', label: 'Management' },
    { icon: UserPlus, href: '/super-admin/employees', label: 'Employees' },
    { icon: AlertTriangle, href: '/super-admin/issue-projects', label: 'Issue Projects' },
    { icon: Bookmark, href: '/super-admin/favorites', label: 'Favorites' },
    { icon: Headphones, href: '/super-admin/station', label: 'Station' },
    { icon: BookOpen, href: '/super-admin/learn-books', label: 'Learn Books' },
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
                           pathname?.startsWith('/super-admin/employees') ||
                           pathname?.startsWith('/super-admin/learn-books');

  const mainPadding = isNoPaddingRoute
    ? 'p-0'
    : 'p-4 pb-28 md:p-6 lg:p-[30px]';

  return (
    <RoleGuard allowedRoles={['SUPER_ADMIN', 'ADMIN']}>
      <div className="h-screen max-h-screen overflow-hidden bg-[#f5f5f5] text-[#282828] flex flex-col md:flex-row p-0 md:p-6 lg:p-[30px] gap-6 lg:gap-[30px] font-sans antialiased relative">
        <Sidebar
          basePath="/super-admin"
          customMenuItems={superAdminMenuItems}
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
    </RoleGuard>
  );
}
