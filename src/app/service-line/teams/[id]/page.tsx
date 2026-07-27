"use client";

import React, { useState } from 'react';
import { 
  Folder, AlertTriangle, CheckCircle, Calendar, MessageSquare, 
  Search, Filter, Eye, Plus
} from 'lucide-react';
import Link from 'next/link';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';

const mockProjects = [
  { id: 1, orderId: 'FO2D9BC6E142', client: 'lawalx', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$3615', seconds: 293153 },
  { id: 2, orderId: 'FO2D9BC6E142', client: 'Wade Warren', profile: 'bits_wise', team: 'CM', status: 'WIP', value: '$4640', seconds: 293153 },
  { id: 3, orderId: 'FO2D9BC6E142', client: 'Dianne Russell', profile: 'bits_wise', team: 'FS', status: 'Late', value: '$6461', seconds: 293153 },
  { id: 4, orderId: 'FO2D9BC6E142', client: 'Ronald Richards', profile: 'bits_wise', team: 'FS', status: 'Delivered', value: '$10176', seconds: 0 },
  { id: 5, orderId: 'FO2D9BC6E142', client: 'Leslie Alexander', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$5969', seconds: 293153 },
  { id: 6, orderId: 'FO2D9BC6E142', client: 'Guy Hawkins', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$7188', seconds: 293153 },
  { id: 7, orderId: 'FO2D9BC6E142', client: 'Jenny Wilson', profile: 'bits_wise', team: 'FS', status: 'Urgent', value: '$5860', seconds: 293153 },
];

const mockMembers = [
  { id: 1, name: 'Vrajakishore Loy', handle: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', status: 'ACTIVE', joinDate: '2020-08-08', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Chintamani Pavithran', handle: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', status: 'ACTIVE', joinDate: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Yashpal Patachli', handle: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', status: 'ACTIVE', joinDate: '2025-12-12', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Supratik Chaudhry', handle: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', status: 'SUSPENDED', joinDate: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Punyasloka Megana', handle: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', status: 'INACTIVE', joinDate: '2021-01-01', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

function StatCard({ icon: Icon, number, label, iconBg, iconColor }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
      <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-2xl font-bold text-[#0F172A] mb-1">{number}</div>
      <div className="text-xs text-[#64748B] font-medium">{label}</div>
    </div>
  );
}

export default function TeamDetailsPage() {
  const [activeTab, setActiveTab] = useState('All Project');

  const projectColumns: Column<(typeof mockProjects)[0]>[] = [
    { key: 'orderId', header: 'Order ID', render: (val) => <span className="font-bold text-[#06530B]">{String(val)}</span> },
    { key: 'client', header: 'Client name', render: (val) => <span className="font-semibold text-[#0F172A]">{String(val)}</span> },
    { key: 'profile', header: 'Profile name', render: (val) => <span className="text-[#475569]">{String(val)}</span> },
    { key: 'team', header: 'Team', render: (val) => <span className="text-[#475569]">{String(val)}</span> },
    { key: 'status', header: 'Status', render: (_, item) => <StatusBadge status={item.status} /> },
    { key: 'value', header: 'Value', render: (val) => <span className="font-bold text-[#0F172A]">{String(val)}</span> },
    { key: 'seconds', header: 'Timeline', render: (_, item) => <CountdownTimer initialSeconds={item.seconds} /> },
    {
      key: 'id',
      header: 'Actions',
      render: (val) => (
        <Link href={`/service-line/projects/${val}`} className="flex items-center gap-1.5 text-[#00AB0C] font-bold text-xs hover:text-green-700 transition-colors">
          <Eye className="w-4 h-4" /> View
        </Link>
      )
    }
  ];

  const memberColumns: Column<(typeof mockMembers)[0]>[] = [
    {
      key: 'name',
      header: 'Profile',
      render: (_, item) => (
        <div className="flex items-center gap-3">
          <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{item.name}</div>
            <div className="text-[11px] text-[#64748B]">{item.handle}</div>
          </div>
        </div>
      )
    },
    { key: 'empId', header: 'Emp ID', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'designation', header: 'Designation', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'email', header: 'E-mail', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'status', header: 'Status', render: (_, item) => <StatusBadge status={item.status} /> },
    { key: 'joinDate', header: 'Joining Date', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'lastLogin', header: 'Last login', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    {
      key: 'id',
      header: 'Action',
      render: (val) => (
        <Link href={`/service-line/employees/${val}`} className="flex items-center gap-1.5 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
          <Eye className="w-4 h-4" /> View
        </Link>
      )
    }
  ];

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar">
      <div className="max-w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-[#E2E8F0] pb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-gray-200 p-1 flex items-center justify-center shrink-0 bg-white shadow-sm">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-[8px] overflow-hidden">
                <span className="tracking-widest">FS</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-1">FSD-Future Stack</h1>
              <p className="text-xs md:text-sm text-[#64748B]">Admin, July 14, 2026 -</p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <Link 
              href="/service-line/projects/create"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" /> New Project
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          <StatCard icon={Folder} number="24" label="Active Projects" iconBg="bg-blue-50" iconColor="text-blue-500" />
          <StatCard icon={AlertTriangle} number="7" label="Urgent Projects" iconBg="bg-red-50" iconColor="text-red-500" />
          <StatCard icon={CheckCircle} number="12" label="Total Delivered" iconBg="bg-green-50" iconColor="text-green-500" />
          <StatCard icon={Calendar} number="8" label="Upcoming Deadlines" iconBg="bg-yellow-50" iconColor="text-yellow-500" />
          <StatCard icon={MessageSquare} number="43" label="Unread Messages" iconBg="bg-purple-50" iconColor="text-purple-500" />
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-6 bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto">
            {['All Project', 'Team Member', 'Refunds and Cancellations'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-[#06530B] text-white shadow-sm' 
                    : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search order..." 
                className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <button className="px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
              <Filter className="w-4 h-4" /> Order Filtering
            </button>
          </div>
        </div>

          {/* Table Area using DashboardTable */}
          <div className="bg-white rounded-3xl  shadow-sm overflow-hidden">
            {activeTab === 'All Project' && (
              <DashboardTable 
                data={mockProjects}
                columns={projectColumns}
                getRowKey={(item) => String(item.id)}
                caption="Projects list"
                emptyMessage="No projects found."
              />
            )}

            {activeTab === 'Team Member' && (
              <DashboardTable 
                data={mockMembers}
                columns={memberColumns}
                getRowKey={(item) => String(item.id)}
                caption="Members list"
                emptyMessage="No members found."
              />
            )}
          </div>

        </div>
    </div>
  );
}
