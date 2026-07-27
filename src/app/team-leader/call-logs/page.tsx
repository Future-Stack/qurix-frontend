"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockCalls } from '@/components/shared/Communication/mockData';

export default function TeamLeaderCallLogsPage() {
  const profileInfo = {
    name: 'Team Leader',
    role: 'Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=31'
  };

  return (
    <CommunicationLayout 
      type="calls"
      profileInfo={profileInfo}
      items={mockCalls}
    />
  );
}
