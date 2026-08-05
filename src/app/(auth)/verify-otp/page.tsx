'use client';

import React, { useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Loader2 } from 'lucide-react';
import AuthFlowLayout from '@/components/auth/AuthFlowLayout';
import { useVerifyMutation } from '@/store/features/Auth/authApi';
import { useAppDispatch } from '@/store/hooks/hooks';
import { addResetToken } from '@/store/features/Auth/authSlice';
import { toast } from 'sonner';

function VerifyOtpContent() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const email = searchParams.get('email') || 'alex*******@gmail.com';

  const [verifyOtp, { isLoading }] = useVerifyMutation();

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handles copy-pasting code into the first input
      const pasted = value.slice(0, 6).split('');
      const newOtp = [...otp];
      pasted.forEach((char, i) => {
        if (i < 6) newOtp[i] = char;
      });
      setOtp(newOtp);
      const nextIndex = Math.min(pasted.length - 1, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 6) {
      toast.error('Please enter the full 6-digit OTP code.');
      return;
    }

    try {
      const res = await verifyOtp({ email, code }).unwrap();
      if (res?.data?.resetToken) {
        dispatch(addResetToken(res.data.resetToken));
        router.push(`/reset-password?token=${encodeURIComponent(res.data.resetToken)}`);
      } else {
        router.push('/reset-password');
      }
    } catch {
      // Error toast is handled by baseAPI interceptor
    }
  };

  return (
    <AuthFlowLayout topTitle="Forgot password?">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#101828] mb-2">Verify OTP</h1>
        <p className="text-sm text-[#64748B] max-w-[320px] mx-auto font-roboto leading-relaxed">
          We&apos;ve sent an OTP code to your work email{' '}
          <span className="text-black font-medium">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 text-left">
        <div>
          <label className="block text-base font-semibold text-[#363636] mb-2">
            OTP Code
          </label>

          <div className="flex items-center justify-between gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                disabled={isLoading}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-full h-12 text-center text-base font-semibold text-black 
                  rounded-2xl border bg-[#F0FDF4] border-[#22C55E]
                  focus:border-[#06530B] focus:ring-1 focus:ring-[#06530B]
                  outline-none transition-all bg-emerald-50/20 disabled:opacity-60"
              />
            ))}
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
              Verifying OTP...
            </>
          ) : (
            <>
              Verify OTP
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </AuthFlowLayout>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#06530B]" />
      </div>
    }>
      <VerifyOtpContent />
    </Suspense>
  );
}
