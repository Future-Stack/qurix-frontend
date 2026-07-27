"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockCalls } from '@/components/shared/Communication/mockData';

export default function EmployeeCallLogsPage() {
  const profileInfo = {
    name: 'UX-SHAKIL',
    role: 'Employee Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=30'
  };

  return (
    <CommunicationLayout 
      type="calls"
      profileInfo={profileInfo}
      items={mockCalls}
    />
  );
}
