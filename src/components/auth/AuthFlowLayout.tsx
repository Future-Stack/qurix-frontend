import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RightPanelBg from '@/assets/rightpanelBg.png';
import logo from '@/assets/logo-qurix.png';
import { Sparkle } from 'lucide-react';
import authBg from '@/assets/authBG.webp';

interface AuthFlowLayoutProps {
  children: ReactNode;
  topTitle?: string;
  dummyBgUrl?: string; // Replaceable dummy background image URL
}

export default function AuthFlowLayout({
  children,
  topTitle = 'Forgot password?',
  dummyBgUrl,
}: AuthFlowLayoutProps) {
  // Use dummy background image if provided, otherwise fallback to imported rightpanelBg
  // const bgImageSrc = dummyBgUrl || RightPanelBg.src;
  const bgImageSrc = authBg.src;

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between bg-[#f8faf8] font-sans antialiased">
      {/* Reusable Background Image (Dummy Image replaceable via prop or directly) */}
      <img
        src={bgImageSrc}
        alt="Auth Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-80"
      />

      {/* Decorative Mint Glow Gradients */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <header className="relative z-10 w-full px-6 sm:px-10 py-6 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 tracking-wide">
          {topTitle}
        </span>

        {/* Top-Right Decorative Flower / Star Accent */}
        <div className="text-[#86EFAC] p-2">
          <Sparkle className="w-8 h-8 fill-[#86EFAC]/30 stroke-[#86EFAC]" />
        </div>
      </header>

      {/* Center Auth Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-6 ">
        <div className="w-full max-w-[573px] bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] p-8 sm:p-10 flex flex-col items-center">

          {/* Qurix Green Logo Box */}
          <div className="mb-5">
            <Image
              src={logo}
              alt="Qurix"
              width={60}
              height={60}
              className="object-contain "
            />
          </div>

          {/* Page Form Slot */}
          <div className="w-full">
            {children}
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="relative z-10 w-full py-6 text-center text-sm font-roboto text-[#334155] font-normal">
        By signing in you agree to our{' '}
        <Link href="#" className="text-[#00A63E] font-normal hover:underline">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="#" className="text-[#00A63E] font-normal hover:underline">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
