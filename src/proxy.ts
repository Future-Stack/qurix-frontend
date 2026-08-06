import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isRoleAllowedForPath } from '@/lib/auth-utils';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('accessToken')?.value;
  const rolesCookie = request.cookies.get('user_roles')?.value;

  let roles: string[] = [];
  if (rolesCookie) {
    try {
      roles = JSON.parse(decodeURIComponent(rolesCookie));
    } catch {
      roles = [];
    }
  }

  const isProtectedRoute =
    pathname.startsWith('/super-admin') ||
    pathname.startsWith('/service-line') ||
    pathname.startsWith('/team-leader') ||
    pathname.startsWith('/employee') ||
    pathname.startsWith('/sales');

  if (isProtectedRoute) {
    // 1. Not logged in -> redirect to login
    if (!token || roles.length === 0) {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // 2. Logged in but trying to access non-permitted role section -> redirect to login
    if (!isRoleAllowedForPath(pathname, roles)) {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/super-admin/:path*',
    '/service-line/:path*',
    '/team-leader/:path*',
    '/employee/:path*',
    '/sales/:path*',
  ],
};
