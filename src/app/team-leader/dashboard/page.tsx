'use client';

import React, { useState, useEffect } from 'react';
import {
  Folder,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Search,
  Filter,
  Eye,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import StatsCard from '@/components/employee-team-leader/shared/StatsCard';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';
import ProjectDetailsModal from '@/components/employee-team-leader/shared/ProjectDetailsModal';
import TeamMemberDetailsModal from '@/components/employee-team-leader/shared/TeamMemberDetailsModal';

// Sample team members data matching node 324-18549
const teamMembers = [
  {
    id: '1',
    name: 'Vrajakishore Loy',
    handle: '@julie_mutie',
    empId: 'KNC-8821',
    designation: 'Node JS Developer',
    email: 'tanya.hill@example.com',
    phone: '+1 (555) 012-3456',
    status: 'ACTIVE',
    joiningDate: '2020-08-08',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Chintamani Pavithran',
    handle: '@dumakaka',
    empId: 'KNC-8821',
    designation: 'ROR Developer',
    email: 'debbie.baker@example.com',
    phone: '+1 (555) 234-5678',
    status: 'ACTIVE',
    joiningDate: '2022-10-10',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Yashpal Patachli',
    handle: '@aisha_amani',
    empId: 'KNC-8821',
    designation: 'React JS Developer',
    email: 'tim.jennings@example.com',
    phone: '+1 (555) 345-6789',
    status: 'ACTIVE',
    joiningDate: '2025-12-12',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'Supratik Chaudhry',
    handle: '@katwa0',
    empId: 'KNC-8821',
    designation: 'Project Manager',
    email: 'bill.sanders@example.com',
    phone: '+1 (555) 456-7890',
    status: 'SUSPENDED',
    joiningDate: '2022-10-10',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '5',
    name: 'Punyasloka Megana',
    handle: '@anitafaraji',
    empId: 'KNC-8821',
    designation: 'React JS Developer',
    email: 'alma.lawson@example.com',
    phone: '+1 (555) 567-8901',
    status: 'INACTIVE',
    joiningDate: '2021-01-01',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  }
];

// Sample orders data matching node 318-11125
const allProjectsData = [
  {
    orderId: 'FO2D9BC6E142',
    clientName: 'lawalx',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Urgent',
    value: '$3615',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E143',
    clientName: 'Wade Warren',
    profileName: 'bits_wise',
    team: 'CM',
    status: 'WIP',
    value: '$4640',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E144',
    clientName: 'Dianne Russell',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Late',
    value: '$6461',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E145',
    clientName: 'Ronald Richards',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Delivered',
    value: '$10176',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E146',
    clientName: 'Leslie Alexander',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Urgent',
    value: '$5969',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E147',
    clientName: 'Guy Hawkins',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Urgent',
    value: '$7188',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E148',
    clientName: 'Jenny Wilson',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Urgent',
    value: '$5860',
    timeline: '3D 9H 25M 53S'
  }
];

import { useRouter } from 'next/navigation';

type TabType = 'all-projects' | 'team-members' | 'refunds';

export default function TeamLeaderDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('all-projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  // Filtered project list
  const filteredProjects = allProjectsData.filter((item) => {
    const matchesSearch =
      item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.profileName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = selectedStatusFilter === 'All' || item.status === selectedStatusFilter;

    if (activeTab === 'refunds') {
      return matchesSearch && (item.status === 'Late' || item.status === 'Refunded');
    }

    return matchesSearch && matchesStatus;
  });

  // Filtered team members list
  const filteredTeamMembers = teamMembers.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col h-full w-full min-h-0 overflow-y-auto no-scrollbar space-y-5 select-none">

      {/* Fixed Top Section (Header + 5 Stats Cards + Tab Bar) */}
      <div className="shrink-0 space-y-5">

        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#dadada] pb-4 gap-4">
          <div className="flex items-center gap-4">
            {/* Presence Avatar Ring */}
            <div className="relative shrink-0 size-14 rounded-full border-2 border-[#06530b] p-0.5 bg-white shadow-sm">
              <div className="size-full rounded-full bg-[#06530b] text-white font-bold flex items-center justify-center text-lg overflow-hidden">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="absolute bottom-0 right-0 size-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            <div>
              <h1 className="font-['Roboto'] font-bold text-[22px] md:text-[24px] text-[#3c3c3c] tracking-tight">
                FSD-Future Stack
              </h1>
              <p className="font-['Roboto'] text-[14px] text-[#828282] mt-0.5">
                Admin, July 14, 2026 ·
              </p>
            </div>
          </div>

          {/* "+ New Project" Button */}
          <button
            onClick={() => router.push('/team-leader/dashboard/create-new-project')}
            className="bg-[#06530b] hover:bg-emerald-900 active:scale-[0.99] text-white font-medium text-[14px] px-5 py-2.5 rounded-[12px] shadow-sm flex items-center gap-2 cursor-pointer transition-all duration-150 self-start sm:self-auto"
          >
            <Plus className="size-4 stroke-[2.5]" />
            <span>New Project</span>
          </button>
        </div>

        {/* 5 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Active Projects"
            value={24}
            icon={Folder}
            iconBgColor="#eef2ff"
            iconColor="#6366f1"
          />
          <StatsCard
            title="Urgent Projects"
            value={7}
            icon={AlertTriangle}
            iconBgColor="#fef2f2"
            iconColor="#ef4444"
          />
          <StatsCard
            title="Total Delivered"
            value={12}
            icon={CheckCircle2}
            iconBgColor="#f0fdf4"
            iconColor="#22c55e"
          />
          <StatsCard
            title="Upcoming Deadlines"
            value={8}
            icon={Calendar}
            iconBgColor="#fffbeb"
            iconColor="#f59e0b"
          />
          <StatsCard
            title="Unread Messages"
            value={43}
            icon={MessageSquare}
            iconBgColor="#f5f3ff"
            iconColor="#8b5cf6"
          />
        </div>

        {/* Filter and Tab Controller Bar */}
        <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">

          {/* Tabs */}
          <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-xl max-w-fit overflow-x-auto">

            {/* Tab 1: All Project */}
            <button
              onClick={() => setActiveTab('all-projects')}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'all-projects'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'text-[#282828] hover:bg-gray-200'
                }`}
            >
              All Project
            </button>

            {/* Tab 2: Team Member */}
            <button
              onClick={() => setActiveTab('team-members')}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'team-members'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'text-[#282828] hover:bg-gray-200'
                }`}
            >
              Team Member
            </button>

            {/* Tab 3: Refunds and Cancellations */}
            <button
              onClick={() => setActiveTab('refunds')}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'refunds'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'text-[#282828] hover:bg-gray-200'
                }`}
            >
              Refunds and Cancellations
            </button>

          </div>

          {/* Search and Order Filtering */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
              <input
                type="text"
                placeholder={activeTab === 'team-members' ? "Search team members..." : "Search by Name or Order ID..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f3f3f5] border border-transparent rounded-[8px] pl-9 pr-3 py-2 text-sm font-['Roboto'] text-[#434343] focus:outline-none focus:bg-white focus:border-[#eaecf0] transition-all duration-200 placeholder:text-gray-400"
              />
            </div>

            {/* Filter Trigger Button */}
            {activeTab !== 'team-members' && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center justify-center gap-2 bg-[#f3f3f5] hover:bg-gray-200 border border-transparent hover:border-[#eaecf0] rounded-[8px] px-4 py-2 text-sm font-medium font-['Roboto'] text-[#434343] transition-all duration-200 cursor-pointer ${showFilters ? 'bg-gray-200 border-[#eaecf0]' : ''
                  }`}
              >
                <Filter className="size-4" />
                <span>Order Filtering</span>
              </button>
            )}
          </div>
        </div>

        {/* Expanded filters options (if triggered) */}
        {showFilters && activeTab !== 'team-members' && (
          <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-wrap items-center gap-3 shadow-2xs animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-['Roboto']">Status Filter:</span>
            {['All', 'Urgent', 'WIP', 'Late', 'Delivered'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatusFilter(status)}
                className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${selectedStatusFilter === status
                    ? 'bg-[#06530b] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* TAB CONTENT: ALL PROJECTS OR REFUNDS TABLE (Node 318-11125) */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* TAB CONTENT: ALL PROJECTS OR REFUNDS TABLE */}
      {/* ========================================================================= */}
      {(activeTab === 'all-projects' || activeTab === 'refunds') && (
        <DashboardTable
          data={filteredProjects}
          getRowKey={(item) => item.orderId}
          columns={[
            { key: 'orderId', header: 'Order ID', render: (val) => <span className="font-bold text-[#1E293B]">{String(val)}</span> },
            { key: 'clientName', header: 'Client name', render: (val) => <span className="font-semibold text-[#1E293B]">{String(val)}</span> },
            { key: 'profileName', header: 'Profile name', render: (val) => <span className="text-[#475569]">{String(val)}</span> },
            { key: 'team', header: 'Team', render: (val) => <span className="text-[#475569]">{String(val)}</span> },
            { key: 'status', header: 'Status', render: (_, item) => <StatusBadge status={item.status} /> },
            { key: 'value', header: 'Value', render: (val) => <span className="font-bold text-[#0F172A]">{String(val)}</span> },
            { key: 'timeline', header: 'Timeline', render: () => <CountdownTimer initialSeconds={86400 * 3 + 3600 * 9 + 60 * 25 + 53} /> },
            {
              key: 'orderId',
              header: 'Actions',
              render: (_, item) => (
                <button
                  onClick={() => setSelectedProject({
                    id: item.orderId,
                    client: item.clientName,
                    profile: item.profileName,
                    team: item.team,
                    status: item.status,
                    value: item.value,
                    initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53
                  })}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06530B] hover:text-[#00AB0C] transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" /> View
                </button>
              )
            }
          ]}
          caption="Active Project orders and details"
          emptyMessage="No projects found."
        />
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT: TEAM MEMBERS TABLE */}
      {/* ========================================================================= */}
      {activeTab === 'team-members' && (
        <DashboardTable
          data={filteredTeamMembers}
          getRowKey={(item) => item.id}
          columns={[
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
            { key: 'status', header: 'Status', render: (val) => <StatusBadge status={String(val)} /> },
            { key: 'joiningDate', header: 'Joining Date', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
            { key: 'lastLogin', header: 'Last Active', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
            {
              key: 'id',
              header: 'Actions',
              render: (_, item) => (
                <button
                  onClick={() => setSelectedMember(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06530B] hover:text-[#00AB0C] transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" /> View
                </button>
              )
            }
          ]}
          caption="Team Members list"
          emptyMessage="No team members found."
        />
      )}

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {selectedMember && (
        <TeamMemberDetailsModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}
