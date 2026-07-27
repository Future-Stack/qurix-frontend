"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockContacts, initialMockMessages } from '@/components/shared/Communication/mockData';

export default function TeamLeaderContactsPage() {
  const profileInfo = {
    name: 'Team Leader',
    role: 'Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=31'
  };

  return (
    <CommunicationLayout 
      type="contacts"
      profileInfo={profileInfo}
      items={mockContacts}
      initialMessages={initialMockMessages}
    />
  );
}
