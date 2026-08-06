# Qurix

Production-grade Next.js 14+ (App Router) project for a multi-panel role-based dashboard.

## Folder Structure

- `src/app`: Contains the routing layer, structured with route groups like `(super-admin)`, `(service-line)`, `(team-leader)`, and `(employee)`.
- `src/components`: 
  - `ui/`: Base UI components (Button, Input).
  - `shared/`: Role-agnostic shared components (DashboardTable, GroupChat).
  - `layout/`: App layout elements (Sidebar, Topbar).
- `src/features`: Business logic, RTK Query APIs, and custom hooks separated by feature domain (dashboard, chat, call-logs, auth).
- `src/lib`: Utilities, constants, and the RBAC permission definitions.
- `src/store`: Redux toolkit setup.
- `src/types`: Global TypeScript interfaces.

## Adding a New Panel or Role

1. **Define the Role**: Add the new role string to `src/types/roles.ts`.
2. **Define Permissions**: Add the mapping of the new role to its allowed actions in `src/lib/permissions.ts`.
3. **Protect Routes**: Update `src/middleware.ts` to enforce the new role checks for the specific paths assigned to the panel.
4. **Create Pages**: Create a new route group in `src/app` (e.g., `(new-role)`) and place the page files there. Use `DashboardTable` and other shared components by passing role-agnostic data and columns.

**Never hardcode a role name inside a shared component.** Use the `can(role, action)` function from `lib/rbac.ts` if a component needs to conditionalize behavior.
