"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockChats, initialMockMessages } from '@/components/shared/Communication/mockData';

export default function SalesMessagesPage() {
  const profileInfo = {
    name: 'Sales Executive',
    role: 'Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=31'
  };

  return (
    <CommunicationLayout 
      type="messages"
      panel="sales"
      profileInfo={profileInfo}
      items={mockChats}
      initialMessages={initialMockMessages}
    />
  );
}
