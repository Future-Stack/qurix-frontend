import { Role } from '@/types/roles';
import { PERMISSIONS } from './permissions';

export function can(role: Role, action: string): boolean {
  const rolePermissions = PERMISSIONS[role];
  if (!rolePermissions) return false;
  return rolePermissions.includes('manage_all') || rolePermissions.includes(action);
}
