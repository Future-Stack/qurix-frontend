"use client";

import React from 'react';
import LeftPanel from '@/components/auth/LeftPanel';
import RightPanel from '@/components/auth/rightPanel/RightPanel';
import WelcomeForm from '@/components/auth/rightPanel/WelcomeForm';

export default function HomePage() {
  return (
    <div className="flex min-h-screen font-sans">
      <div className='w-full flex'>
        <div className="hidden lg:block lg:w-1/2">
            <LeftPanel />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <RightPanel>
            <WelcomeForm />
          </RightPanel>
        </div>
      </div>
    </div>
  );
}
