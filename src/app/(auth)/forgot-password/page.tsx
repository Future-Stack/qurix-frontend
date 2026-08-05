'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import AuthFlowLayout from '@/components/auth/AuthFlowLayout';
import { useForgotPasswordMutation } from '@/store/features/Auth/authApi';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword({ email }).unwrap();
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
    } catch {
      // Error toast is handled by baseAPI interceptor
    }
  };

  return (
    <AuthFlowLayout topTitle="Forgot password?">
      <div className="text-center mb-6">
        <h1 className="text-[42px] font-bold text-[#06530B] font-roboto mb-2">
          Forgot Password
        </h1>
        <p className="text-[20px] text-[#64748B] text-center font-normal leading-[34px] font-roboto ">
          Use your work email to get the password reset confirmation OTP code.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 text-left">
        <div>
          <label className="block text-base font-semibold text-[#363636] mb-2">
            Work Email
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex.chen@agency.com"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 pl-11 rounded-2xl border bg-[#F0FDF4] border-[#22C55E] focus:border-[#06530B] focus:ring-1 focus:ring-[#06530B] outline-none text-base text-black placeholder:text-gray-300 transition-all bg-emerald-50/20 disabled:opacity-60"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="w-4 h-4" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#06530B] hover:bg-[#043d08] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 px-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending OTP...
            </>
          ) : (
            <>
              Continue
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </AuthFlowLayout>
  );
}
