"use client";

import React, { useState } from 'react';
import { 
  User, Bell, Shield, Volume2, HelpCircle, Info, ArrowRight, LogOut 
} from 'lucide-react';
import { 
  MyAccountCard, 
  NotificationsCard, 
  PrivacySecurityCard, 
  ActiveSessionsCard, 
  AboutSoftwareCard 
} from '@/components/settings/SettingsCards';

export default function SuperAdminSettingsPage() {
  const [activeView, setActiveView] = useState('main');

  const handleBack = () => setActiveView('main');

  if (activeView === 'my-account') return <div className="h-full flex items-center justify-center bg-[#F8FAFC]" onClick={(e) => { if ((e.target as any).closest('button')) handleBack() }}><MyAccountCard /></div>;
  if (activeView === 'notifications') return <div className="h-full flex items-center justify-center bg-[#F8FAFC]" onClick={(e) => { if ((e.target as any).closest('button')) handleBack() }}><NotificationsCard /></div>;
  if (activeView === 'privacy') return <div className="h-full flex items-center justify-center bg-[#F8FAFC]" onClick={(e) => { if ((e.target as any).closest('button')?.innerText === '') handleBack() }}><PrivacySecurityCard /></div>;
  if (activeView === 'active-sessions') return <div className="h-full flex items-center justify-center bg-[#F8FAFC]" onClick={(e) => { if ((e.target as any).closest('button')?.innerText === '') handleBack() }}><ActiveSessionsCard /></div>;
  if (activeView === 'about') return <div className="h-full flex items-center justify-center bg-[#F8FAFC]" onClick={(e) => { if ((e.target as any).closest('button')) handleBack() }}><AboutSoftwareCard /></div>;

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#F8FAFC]">
      <div className="w-[440px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] p-8 flex flex-col">
        
        <h2 className="font-bold text-[#0F172A] text-lg mb-6">Settings</h2>

        <div className="flex items-center gap-4 mb-8">
          <img src="https://i.pravatar.cc/150?u=30" alt="MD Shakil" className="w-14 h-14 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-[#0F172A] text-base">MD Shakil</h3>
            <p className="text-xs text-[#64748B]">@uxshakil</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <button 
            onClick={() => setActiveView('my-account')}
            className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-[#475569]">
              <User className="w-5 h-5" />
              <span className="text-sm font-bold text-[#0F172A]">My Account</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
          </button>

          <button 
            onClick={() => setActiveView('notifications')}
            className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-[#475569]">
              <Bell className="w-5 h-5" />
              <span className="text-sm font-bold text-[#0F172A]">Notifications</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
          </button>

          <button 
            onClick={() => setActiveView('privacy')}
            className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-[#475569]">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-bold text-[#0F172A]">Privacy and Security</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
          </button>

          <button 
            className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-[#475569]">
              <Volume2 className="w-5 h-5" />
              <span className="text-sm font-bold text-[#0F172A]">Input/Output devices</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
          </button>

          <button 
            className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-[#475569]">
              <HelpCircle className="w-5 h-5" />
              <span className="text-sm font-bold text-[#0F172A]">Guideline and help</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
          </button>

          <button 
            onClick={() => setActiveView('about')}
            className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-[#475569]">
              <Info className="w-5 h-5" />
              <span className="text-sm font-bold text-[#0F172A]">About software</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
          </button>
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-4 bg-[#FEF2F2] border border-[#FCA5A5] text-[#EF4444] rounded-2xl font-bold text-sm hover:bg-red-100 transition-colors">
          <LogOut className="w-4 h-4" /> Log out
        </button>

      </div>
    </div>
  );
}
