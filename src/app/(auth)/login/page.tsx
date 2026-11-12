"use client";

import React from 'react';
import LeftPanel from '@/components/auth/LeftPanel';
import RightPanel from '@/components/auth/rightPanel/RightPanel';
import LoginForm from '@/components/auth/rightPanel/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen font-sans">
      <div className='w-full flex'>
        <div className="hidden lg:block lg:w-[50%]">
            <LeftPanel />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-center">
          <RightPanel>
            <LoginForm />
          </RightPanel>
        </div>
      </div>
    </div>
  );
}
