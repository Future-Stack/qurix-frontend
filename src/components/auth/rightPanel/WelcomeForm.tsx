import { Zap, ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function WelcomeForm() {
  return (
    <>
       <div className="flex lg:hidden items-center gap-3 mb-8">
          <div className="w-11 h-11 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-[14px] flex items-center justify-center shrink-0">
             <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-[24px] tracking-[-0.16px] text-[#101828] font-sans">Softvence.Agency</span>
        </div>
  
        <div className="hidden lg:flex items-center gap-3 mb-8">
          <div className="w-11 h-11 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-[14px] flex items-center justify-center shrink-0">
             <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-[24px] tracking-[-0.16px] text-[#101828] font-sans">Softvence.Agency</span>
        </div>

      <h2 className="text-[25.6px] font-bold text-[#101828] tracking-[-0.768px] mb-2 font-sans">Welcome back</h2>
      <p className="text-[16px] text-[#64748B] mb-8 font-condensed">Sign in to your workspace or create a new account to join your team.</p>

      <Link href="/employee-verification">
        <button
          className="w-full bg-[#06530B] hover:bg-[#05290b] text-white py-[14px] rounded-[16px] text-[16px] font-bold flex items-center justify-center gap-[8px] transition-all mt-2 cursor-pointer font-sans"
        >
          Login to Your Account
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>

      <div className="mt-6 pt-[33px] border-t border-[#E8EAF0] text-center">
        <p className="text-[12px] text-[#94A3B8] leading-[19.5px] font-condensed">
          Restricted to verified Softvence Agency employees only.<br/>
          Unauthorized access is prohibited.
        </p>
      </div>
    </>
  );
}
