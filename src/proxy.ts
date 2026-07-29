// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { Role } from '@/types/roles';

// function decodeToken(token: string | undefined): { role: Role } | null {
//   if (!token) return null;
//   // Placeholder implementation
//   // In a real application, decode the JWT and extract the role
//   return { role: 'SUPER_ADMIN' as Role };
// }

// export function proxy(request: NextRequest) {
//   const token = request.cookies.get('token')?.value;
//   const decoded = decodeToken(token);
//   const role = decoded?.role;

//   const { pathname } = request.nextUrl;


//   if (pathname.startsWith('/super-admin')) {
//     if (role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
//   }
  
//   if (pathname.startsWith('/service-line')) {
//     if (role !== 'SERVICE_LINE' && role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
//   }
  
//   if (pathname.startsWith('/team-leader')) {
//     if (role !== 'TEAM_LEADER' && role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
//   }
  
//   if (pathname.startsWith('/employee')) {
//     if (role !== 'EMPLOYEE' && role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|employee-verification|unauthorized).*)'],
// };


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Role } from '@/types/roles';

function decodeToken(token: string | undefined): { role: Role } | null {
  // Dev mode: return SUPER_ADMIN by default to bypass redirect to unauthorized
  return { role: 'SUPER_ADMIN' as Role };
}


export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const decoded = decodeToken(token);
  const role = decoded?.role;

  const { pathname } = request.nextUrl;

  // Next.js omits (route-groups) from the URL path. 
  // We restrict based on known unique paths for each role group.
  
  if (pathname.startsWith('/super-admin')) {
    if (role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  
  if (pathname.startsWith('/service-line')) {
    if (role !== 'SERVICE_LINE' && role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  
  if (pathname.startsWith('/team-leader')) {
    if (role !== 'TEAM_LEADER' && role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  
  if (pathname.startsWith('/employee')) {
    if (role !== 'EMPLOYEE' && role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (pathname.startsWith('/sales')) {
    if (role !== 'SUPER_ADMIN') return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|employee-verification|unauthorized).*)'],
};
