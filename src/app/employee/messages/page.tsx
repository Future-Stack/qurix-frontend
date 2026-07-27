"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockChats, initialMockMessages } from '@/components/shared/Communication/mockData';

export default function EmployeeMessagesPage() {
  const profileInfo = {
    name: 'UX-SHAKIL',
    role: 'Employee Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=30'
  };

  return (
    <CommunicationLayout 
      type="messages"
      panel="employee"
      profileInfo={profileInfo}
      items={mockChats}
      initialMessages={initialMockMessages}
    />
  );
}
