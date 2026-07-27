import { Zap, CheckCircle2, MessageSquare, Video, Clock, FileLock, Bell } from 'lucide-react';
import React from 'react';
import LeftPanelBg from '../../assets/leftpanelBg.jpg';

export default function LeftPanel() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between text-white p-12 lg:p-16 xl:p-20">
        <img className="absolute inset-0 w-full h-full object-cover" src={LeftPanelBg.src} alt="" />
        {/* Subtle radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-[700px]">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center shadow-[0px_4px_7px_rgba(22,163,74,0.4)]">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-base text-white tracking-tight">Softvence.Agency</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-[15px] py-[7px] rounded-full bg-[rgba(22,163,74,0.12)] border border-[rgba(22,163,74,0.28)] mb-5 shadow-md shadow-[#16a34a]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0px_0px_6px_0px_#4ADE80]"></span>
            <span className="text-xs font-bold text-[#4ADE80] tracking-[0.12px]">Trusted by 5,000+ Employees</span>
          </div>

          {/* Headings */}
          <h1 className="text-[24px] lg:text-[32px] xl:text-[48px] font-bold leading-[1.1] tracking-tight xl:tracking-[-1.2px] mb-6 drop-shadow-sm font-sans">
            Connect. Collaborate. Deliver.
          </h1>
          <p className="text-[#C6D2FF] text-[18px] mb-6 max-w-[660px] font-normal leading-relaxed drop-shadow-sm font-condensed">
            A secure internal communication and project collaboration platform built for modern software teams and Fiverr agency workflow.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
            {[
              { label: 'Verified Employees', value: '5,000+' },
              { label: 'Active Projects', value: '1,200+' },
              { label: 'Messages Today', value: '25K+' },
              { label: 'On-Time Delivery', value: '98%' },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-[16px] bg-white/[0.05] border border-white/[0.09] flex flex-col justify-center items-center text-center">
                <div className="text-base font-bold text-white mb-1 font-sans">{stat.value}</div>
                <div className="text-[12px] text-[rgba(255,255,255,0.42)] font-normal leading-[15px] font-condensed">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {[
              { icon: MessageSquare, label: 'Project-Based Messaging' },
              { icon: Clock, label: 'Live Project Timeline' },
              { icon: Video, label: 'HD Voice & Video Calls' },
              { icon: FileLock, label: 'Secure File Sharing' },
              { icon: Bell, label: 'Smart Notifications', fullWidth: true },
            ].map((feature, i) => (
              <div key={i} className={`flex items-center justify-between p-3.5 rounded-[14px] bg-[rgba(22,163,74,0.07)] border border-[rgba(22,163,74,0.16)] ${feature.fullWidth ? 'lg:col-span-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[rgba(22,163,74,0.18)] rounded-[10px] flex items-center justify-center shrink-0">
                    <feature.icon className="w-3.5 h-3.5 text-[#05DF72]" />
                  </div>
                  <span className="text-[12px] font-medium text-[rgba(255,255,255,0.72)] font-condensed">{feature.label}</span>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#05DF72]" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-[12px] text-white font-normal mt-12 drop-shadow-sm font-condensed">
          © 2026 Softvence. All rights reserved.
        </div>
      </div>
  );
}