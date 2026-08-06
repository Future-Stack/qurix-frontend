import { Role } from '@/types/roles';

export const PERMISSIONS: Record<Role, string[]> = {
  SUPER_ADMIN: ['manage_all', 'view_dashboard', 'manage_users', 'manage_service_lines'],
  SERVICE_LINE: ['view_dashboard', 'manage_teams', 'view_employees'],
  TEAM_LEADER: ['view_dashboard', 'manage_project_groups', 'view_team'],
  EMPLOYEE: ['view_dashboard', 'view_profile', 'view_projects']
};
