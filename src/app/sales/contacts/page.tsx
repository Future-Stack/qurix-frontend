"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockContacts, initialMockMessages } from '@/components/shared/Communication/mockData';

export default function SalesContactsPage() {
  const profileInfo = {
    name: 'Sales Executive',
    role: 'Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=31'
  };

  return (
    <CommunicationLayout 
      type="contacts"
      panel="sales"
      profileInfo={profileInfo}
      items={mockContacts}
      initialMessages={initialMockMessages}
    />
  );
}
