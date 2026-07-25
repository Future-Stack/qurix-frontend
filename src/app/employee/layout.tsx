'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from '@/components/employee-team-leader/layout/employee-team-leader/Sidebar/Sidebar';
import SettingsModal from '@/components/employee-team-leader/shared/Settings/SettingsModal';

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isSettingsRoute = pathname?.startsWith('/employee/settings');

  // Open settings modal if user lands directly on /employee/settings route
  useEffect(() => {
    if (isSettingsRoute) {
      setIsSettingsOpen(true);
    }
  }, [isSettingsRoute]);

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
    if (isSettingsRoute) {
      router.push('/employee/dashboard');
    }
  };

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-[#f5f5f5] text-[#282828] flex flex-col md:flex-row p-0 md:p-6 lg:p-[30px] gap-6 lg:gap-[30px] font-sans antialiased relative">
      {/* Navigation Sidebar */}
      <Sidebar
        onOpenSettings={() => setIsSettingsOpen(true)}
        isSettingsActive={isSettingsOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 h-full max-h-full bg-white rounded-none md:rounded-[30px] border border-[#eaecf0] shadow-sm p-6 lg:p-[30px] overflow-hidden flex flex-col">
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
