'use client';

import SuperAdminDashboard from '../dashboard/page';

export default function SettingsRoutePage() {
  // Renders dashboard view underneath while the layout presents the SettingsModal overlay
  return <SuperAdminDashboard params={{ id: '', teamId: '' }} />;
}
