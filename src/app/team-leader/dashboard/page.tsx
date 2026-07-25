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
import StatsCard from '@/components/employee-team-leader/shared/StatsCard';

type TabType = 'all-projects' | 'team-members' | 'refunds';

// Sample team members data matching node 324-18549
const teamMembers = [
  {
    id: '1',
    name: 'Vrajakishore Loy',
    handle: '@julie_mutie',
    empId: 'KNC-8821',
    designation: 'Node JS Developer',
    email: 'tanya.hill@example.com',
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
    orderId: 'FO2D9BC6E142',
    clientName: 'Wade Warren',
    profileName: 'bits_wise',
    team: 'CM',
    status: 'WIP',
    value: '$4640',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E142',
    clientName: 'Dianne Russell',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Late',
    value: '$6461',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E142',
    clientName: 'Ronald Richards',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Delivered',
    value: '$10176',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E142',
    clientName: 'Leslie Alexander',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Urgent',
    value: '$5969',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E142',
    clientName: 'Guy Hawkins',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Urgent',
    value: '$7188',
    timeline: '3D 9H 25M 53S'
  },
  {
    orderId: 'FO2D9BC6E142',
    clientName: 'Jenny Wilson',
    profileName: 'bits_wise',
    team: 'FS',
    status: 'Urgent',
    value: '$5860',
    timeline: '3D 9H 25M 53S'
  }
];

import { useRouter } from 'next/navigation';

export default function TeamLeaderDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('all-projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="flex flex-col h-full max-h-full overflow-hidden space-y-5 select-none">

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
      {(activeTab === 'all-projects' || activeTab === 'refunds') && (
        <div className="flex-1 min-h-0 overflow-y-auto border border-[#f3f3f3] rounded-[16px] shadow-2xs bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#f0f0f0] bg-gray-50/50 text-[#828282] font-['Roboto'] font-semibold text-[13px] uppercase tracking-wider sticky top-0 bg-white z-10">
                <th className="py-4 px-6">Order ID</th>
                <th className="py-4 px-6">Client name</th>
                <th className="py-4 px-6">Profile name</th>
                <th className="py-4 px-6">Team</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Value</th>
                <th className="py-4 px-6">Timeline</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0f0f0] font-['Roboto'] text-[14px]">
              {filteredProjects.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50/80 transition-colors">

                  {/* Order ID */}
                  <td className="py-4 px-6 font-bold text-[#3c3c3c]">
                    {row.orderId}
                  </td>

                  {/* Client name */}
                  <td className="py-4 px-6 font-medium text-[#3c3c3c]">
                    {row.clientName}
                  </td>

                  {/* Profile name */}
                  <td className="py-4 px-6 text-[#575757]">
                    {row.profileName}
                  </td>

                  {/* Team */}
                  <td className="py-4 px-6 font-semibold text-[#3c3c3c]">
                    {row.team}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-[6px] text-[12px] font-medium shadow-2xs ${row.status === 'Urgent' ? 'bg-[#f5f5f5] text-[#575757] border border-gray-300 font-semibold' :
                        row.status === 'WIP' ? 'bg-[#f5f5f5] text-[#575757] border border-gray-300 font-semibold' :
                          row.status === 'Late' ? 'bg-[#f5f5f5] text-[#575757] border border-gray-300 font-semibold' :
                            'bg-[#f5f5f5] text-[#575757] border border-gray-300 font-semibold'
                      }`}>
                      {row.status}
                    </span>
                  </td>

                  {/* Value */}
                  <td className="py-4 px-6 font-bold text-[#3c3c3c]">
                    {row.value}
                  </td>

                  {/* Timeline Badge */}
                  <td className="py-4 px-6">
                    <span className="bg-[#06530b] text-white font-bold text-[13px] px-3.5 py-1.5 rounded-[8px] inline-flex items-center gap-1.5 shadow-2xs">
                      {row.timeline}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`View order ${row.orderId}`)}
                      className="inline-flex items-center gap-1.5 text-[#06530b] font-medium text-[14px] hover:underline cursor-pointer"
                    >
                      <Eye className="size-4" />
                      <span>View</span>
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT: TEAM MEMBERS TABLE (Node 324-18549) */}
      {/* ========================================================================= */}
      {activeTab === 'team-members' && (
        <div className="flex-1 min-h-0 overflow-y-auto border border-[#f3f3f3] rounded-[16px] shadow-2xs bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#f0f0f0] bg-gray-50/50 text-[#828282] font-['Roboto'] font-semibold text-[13px] uppercase tracking-wider sticky top-0 bg-white z-10">
                <th className="py-4 px-6">Profile</th>
                <th className="py-4 px-6">Emp id</th>
                <th className="py-4 px-6">Designation</th>
                <th className="py-4 px-6">E-mail</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Joining Date</th>
                <th className="py-4 px-6">Last login</th>
                <th className="py-4 px-6 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0f0f0] font-['Roboto'] text-[14px]">
              {filteredTeamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50/80 transition-colors">

                  {/* Profile (Avatar + Name + @handle) */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="size-10 rounded-full object-cover shrink-0 border border-gray-100 shadow-2xs"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-[#3c3c3c] leading-tight">
                          {member.name}
                        </span>
                        <span className="text-[12px] text-[#a19791] mt-0.5">
                          {member.handle}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Emp id */}
                  <td className="py-4 px-6 font-medium text-[#575757]">
                    {member.empId}
                  </td>

                  {/* Designation */}
                  <td className="py-4 px-6 font-medium text-[#3c3c3c]">
                    {member.designation}
                  </td>

                  {/* E-mail */}
                  <td className="py-4 px-6 text-[#575757]">
                    {member.email}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold ${member.status === 'ACTIVE' ? 'bg-[#e6f4ea] text-[#06530b] border border-emerald-200' :
                        member.status === 'SUSPENDED' ? 'bg-[#ffeded] text-[#ef4444] border border-red-200' :
                          'bg-[#f0f0f0] text-[#747474] border border-gray-200'
                      }`}>
                      <span className={`size-1.5 rounded-full ${member.status === 'ACTIVE' ? 'bg-[#06530b]' :
                          member.status === 'SUSPENDED' ? 'bg-[#ef4444]' :
                            'bg-[#747474]'
                        }`} />
                      <span>{member.status}</span>
                    </span>
                  </td>

                  {/* Joining Date */}
                  <td className="py-4 px-6 text-[#575757]">
                    {member.joiningDate}
                  </td>

                  {/* Last login */}
                  <td className="py-4 px-6 text-[#575757]">
                    {member.lastLogin}
                  </td>

                  {/* ACTION */}
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`View member ${member.name}`)}
                      className="inline-flex items-center gap-1.5 text-[#06530b] font-medium text-[14px] hover:underline cursor-pointer"
                    >
                      <Eye className="size-4" />
                      <span>View</span>
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
