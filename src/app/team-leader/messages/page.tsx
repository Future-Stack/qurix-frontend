"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockChats, initialMockMessages } from '@/components/shared/Communication/mockData';

export default function TeamLeaderMessagesPage() {
  const profileInfo = {
    name: 'Team Leader',
    role: 'Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=31'
  };

  return (
    <CommunicationLayout 
      type="messages"
      panel="team-leader"
      profileInfo={profileInfo}
      items={mockChats}
      initialMessages={initialMockMessages}
    />
  );
}
