import { Zap } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import RightPanelBg from '../../../assets/rightpanelBg.png';
import Spark from './Spark';

export default function RightPanel({ children }: { children?: ReactNode }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-center min-h-screen">
      <img src={RightPanelBg.src} alt="" className="absolute inset-0 w-full h-full object-fill" />
      
      <div className="flex-1 flex flex-col justify-center relative py-10 lg:py-[89px] px-6 lg:px-[63px]">
        {/* Decorative background flower elements & sparkles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none mix-blend-overlay"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none mix-blend-overlay"></div>

        {/* Faded background sparkles matching Figma coordinates */}
        <Spark className="absolute top-[8%] left-[5%] w-[42px] h-[42px] text-[#4ADE80] opacity-30 pointer-events-none hidden lg:block" />
        <Spark className="absolute top-[48%] -left-8 w-[88px] h-[88px] text-[#4ADE80] opacity-30 rotate-[-7.57deg] pointer-events-none hidden lg:block" />

        {/* Login Card */}
        <div className="w-full max-w-md mx-auto bg-white border border-[#00AB0C36] rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 lg:p-10 relative z-10">
          {children}
        </div>

        {/* Right Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center z-10">
          <p className="text-xs font-medium text-black">
            By signing in you agree to our <Link href="#" className="text-[#00A63E] font-bold hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#00A63E] font-bold hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}