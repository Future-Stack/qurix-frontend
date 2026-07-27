"use client";

import React from 'react';
import CommunicationLayout from '@/components/shared/Communication/CommunicationLayout';
import { mockContacts, initialMockMessages } from '@/components/shared/Communication/mockData';

export default function EmployeeContactsPage() {
  const profileInfo = {
    name: 'UX-SHAKIL',
    role: 'Employee Dashboard',
    avatar: 'https://i.pravatar.cc/150?u=30'
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
