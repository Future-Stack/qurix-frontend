'use client';

import { Zap, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { useLoginMutation, useLazyGetMeQuery } from '@/store/features/Auth/authApi';
import { setCredentials, setUser } from '@/store/features/Auth/authSlice';
import { useAppDispatch } from '@/store/hooks/hooks';
import { getDashboardRoute } from '@/lib/auth-utils';

// ─── Form schema ─────────────────────────────────────────────────────────────
const loginSchema = z.object({
  identifier: z.string().min(1, 'Username or Email is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginValues = z.infer<typeof loginSchema>;

// ─── Component ───────────────────────────────────────────────────────────────
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const [fetchMe, { isLoading: isFetchingMe }] = useLazyGetMeQuery();

  const isLoading = isLoggingIn || isFetchingMe;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (formData: LoginValues) => {
    try {
      // 1. Login → get tokens + employee
      const loginResult = await login({
        usernameOrEmail: formData.identifier,
        password: formData.password,
      }).unwrap();


      const { accessToken, refreshToken, employee } = loginResult.data;

      // 2. Store tokens + employee from login response
      dispatch(setCredentials({ accessToken, refreshToken, user: employee }));

      // 3. Fetch fresh /auth/me profile (includes latest roles / team IDs)
      try {
        const meResult = await fetchMe().unwrap();
        console.log('meResult', meResult)
        dispatch(setUser(meResult.data));
        // Navigate based on the fresher /me data
        router.push(getDashboardRoute(meResult.data.roles));
      } catch {
        // /me failed — still navigate using login employee data
        router.push(getDashboardRoute(employee.roles));
      }
    } catch {
      // Error toast is already shown by the baseAPI interceptor.
      // Nothing extra needed here.
    }
  };

  return (
    <>
      {/* Logo — mobile */}
      <div className="flex lg:hidden items-center gap-3 mb-8">
        <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight text-[#101828]">Softvence.Agency</span>
      </div>

      {/* Logo — desktop */}
      <div className="hidden lg:flex items-center gap-3 mb-8">
        <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight text-[#101828]">Softvence.Agency</span>
      </div>

      <h2 className="text-2xl font-bold text-[#101828] mb-2.5">Welcome back</h2>
      <p className="text-sm text-gray-500 mb-4">Sign in to your workspace and pick up where you left off.</p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Username / Email field */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-[#101828] mb-1.5">Username or Work Email</label>
          <div className="relative mt-1.5">
            <input
              id="login-identifier"
              type="text"
              {...register('identifier')}
              placeholder="alex.chen or alex@agency.com"
              className={`w-full px-4 py-3 rounded-xl border focus:ring-1 outline-none transition-all pl-11 text-sm bg-white placeholder-[#CBD5E1] ${errors.identifier
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-500'
                }`}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
          </div>
          {errors.identifier && (
            <p className="text-xs text-red-500 mt-1">{errors.identifier.message}</p>
          )}
        </div>

        {/* Password field */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-[#101828] mb-1.5">Password</label>
          <div className="relative mt-1.5">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-xl text-black border focus:ring-1 outline-none transition-all pl-11 pr-11 text-sm bg-white placeholder-[#CBD5E1] ${errors.password
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-500'
                }`}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
          )}
          <div className="flex justify-end pt-1">
            <Link href="/forgot-password" className="text-xs font-semibold text-[#047857] hover:text-emerald-700 flex items-center gap-1 cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Submit button */}
        <button
          id="login-submit"
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#06530B] hover:bg-[#05290b] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 px-3 lg:py-3.5 lg:px-4 rounded-xl text-xs lg:text-[15px] font-bold flex items-center justify-center gap-2 transition-all mt-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              Sign In to Workspace
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-5 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-100"></div>
        <span className="text-xs text-gray-400 font-medium uppercase">OR</span>
        <div className="flex-1 h-px bg-gray-100"></div>
      </div>

      <div className="mt-5 text-center text-xs lg:text-sm font-medium text-gray-500">
        Don&apos;t have an account?{' '}
        <Link href="#" className="text-[#00AB0C] hover:text-emerald-700 font-bold cursor-pointer">
          Continue Registration
        </Link>
      </div>
    </>
  );
}
