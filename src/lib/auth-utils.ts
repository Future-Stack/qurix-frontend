export function getDashboardRoute(roles?: string[]): string {
  if (!roles || roles.length === 0) return '/employee/dashboard';
  if (roles.includes('SUPER_ADMIN') || roles.includes('ADMIN')) return '/super-admin/dashboard';
  if (roles.includes('SERVICE_LINE')) return '/service-line/dashboard';
  if (roles.includes('TEAM_LEADER')) return '/team-leader/dashboard';
  if (roles.includes('SALES')) return '/sales/dashboard';
  if (roles.includes('EMPLOYEE')) return '/employee/dashboard';
  return '/employee/dashboard';
}

export function isRoleAllowedForPath(pathname: string, roles: string[]): boolean {
  if (!roles || roles.length === 0) return false;

  if (pathname.startsWith('/super-admin')) {
    return roles.includes('SUPER_ADMIN') || roles.includes('ADMIN');
  }
  if (pathname.startsWith('/service-line')) {
    return roles.includes('SERVICE_LINE');
  }
  if (pathname.startsWith('/team-leader')) {
    return roles.includes('TEAM_LEADER');
  }
  if (pathname.startsWith('/sales')) {
    return roles.includes('SALES');
  }
  if (pathname.startsWith('/employee')) {
    return roles.includes('EMPLOYEE');
  }

  return true;
}

export function setAuthCookies(accessToken: string, roles: string[]) {
  if (typeof document !== 'undefined') {
    document.cookie = `accessToken=${accessToken}; path=/; max-age=604800; SameSite=Lax`;
    document.cookie = `user_roles=${encodeURIComponent(JSON.stringify(roles))}; path=/; max-age=604800; SameSite=Lax`;
  }
}

export function clearAuthCookies() {
  if (typeof document !== 'undefined') {
    document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'user_roles=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}
