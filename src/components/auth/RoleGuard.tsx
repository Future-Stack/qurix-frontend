'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks/hooks';
import { selectAccessToken, selectUser } from '@/store/features/Auth/authSlice';
import { isRoleAllowedForPath, setAuthCookies } from '@/lib/auth-utils';
import { Loader2 } from 'lucide-react';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export default function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAppSelector(selectUser);
  const token = useAppSelector(selectAccessToken);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // 1. Unauthenticated check -> redirect to login
    if (!token || !user) {
      setIsAuthorized(false);
      router.replace('/login');
      return;
    }

    const userRoles = user.roles || [];

    // Sync cookies for server-side proxy middleware
    setAuthCookies(token, userRoles);

    // 2. Validate user role for this layout section and path
    const hasAllowedRole = allowedRoles.some((role) => userRoles.includes(role));
    const isPathAllowed = pathname ? isRoleAllowedForPath(pathname, userRoles) : false;

    if (!hasAllowedRole || !isPathAllowed) {
      setIsAuthorized(false);
      router.replace('/login');
      return;
    }

    setIsAuthorized(true);
  }, [user, token, allowedRoles, pathname, router]);

  if (!isAuthorized) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#f5f5f5]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#06530B]" />
          <p className="text-sm font-medium text-gray-500">Checking permissions…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
