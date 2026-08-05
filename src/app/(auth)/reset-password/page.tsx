'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import AuthFlowLayout from '@/components/auth/AuthFlowLayout';
import { useResetPasswordMutation } from '@/store/features/Auth/authApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { clearResetToken, selectResetToken } from '@/store/features/Auth/authSlice';
import { toast } from 'sonner';

function SetNewPasswordContent() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const reduxToken = useAppSelector(selectResetToken);
  const paramToken = searchParams.get('token');
  const token = paramToken || reduxToken || '';

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (!token) {
      toast.error('Invalid or missing reset token. Please request a new OTP.');
      router.push('/forgot-password');
      return;
    }

    try {
      await resetPassword({ token, newPassword }).unwrap();
      dispatch(clearResetToken());
      router.push('/login');
    } catch {
      // Error toast is handled by baseAPI interceptor
    }
  };

  return (
    <AuthFlowLayout topTitle="Forgot password?">
      <div className="text-center mb-6">
        <h1 className="text-[42px] font-bold text-[#06530B] font-roboto mb-2">
          Set New Password
        </h1>
        <p className="text-[20px] text-[#64748B] text-center font-normal leading-[34px] font-roboto ">
          Set your password to get started using the platform.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 text-left">
        {/* New Password */}
        <div>
          <label className="block text-base font-semibold text-[#363636] mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 pl-11 pr-11 rounded-2xl border bg-[#F0FDF4] border-[#22C55E]
        focus:border-[#06530B] focus:ring-1 focus:ring-[#06530B]
        outline-none text-base text-black placeholder:text-gray-300 transition-all bg-emerald-50/20 disabled:opacity-60"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock className="w-4 h-4" />
            </div>
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showNewPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-base font-semibold text-[#363636] mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 pl-11 pr-11 rounded-2xl border bg-[#F0FDF4] border-[#22C55E]
        focus:border-[#06530B] focus:ring-1 focus:ring-[#06530B]
        outline-none text-base text-black placeholder:text-gray-300 transition-all bg-emerald-50/20 disabled:opacity-60"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock className="w-4 h-4" />
            </div>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Update Password Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#06530B] hover:bg-[#043d08] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 px-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Updating Password...
            </>
          ) : (
            <>
              Update Password
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Divider */}
        <div className="pt-2 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-[#64748B] font-medium tracking-wider uppercase">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Login Link */}
        <div className="text-center text-sm font-medium text-[#64748B]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#06530B] font-semibold hover:underline">
            Login
          </Link>
        </div>
      </form>
    </AuthFlowLayout>
  );
}

export default function SetNewPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#06530B]" />
      </div>
    }>
      <SetNewPasswordContent />
    </Suspense>
  );
}
