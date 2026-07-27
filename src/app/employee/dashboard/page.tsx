'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';

import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';
import ProjectDetailsModal from '@/components/employee-team-leader/shared/ProjectDetailsModal';

interface ProjectData {
  id: string;
  client: string;
  profile: string;
  team: string;
  status: string;
  value: string;
  initialSeconds: number;
}

export default function EmployeeDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'my-project' | 'refunds'>('my-project');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const formattedDate = 'Saturday, July 25, 2026 · ';

  const orderData = [
    {
      id: 'FO2D9BC6E142',
      client: 'lawalx',
      profile: 'bits_wise',
      team: 'FS',
      status: 'Urgent',
      value: '$3,615',
      initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53,
    },
    {
      id: 'FO2D9BC6E142',
      client: 'Wade Warren',
      profile: 'bits_wise',
      team: 'CM',
      status: 'WIP',
      value: '$4,640',
      initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53,
    },
    {
      id: 'FO2D9BC6E142',
      client: 'Dianne Russell',
      profile: 'bits_wise',
      team: 'FS',
      status: 'Late',
      value: '$6,461',
      initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53,
    },
    {
      id: 'FO2D9BC6E142',
      client: 'Ronald Richards',
      profile: 'bits_wise',
      team: 'FS',
      status: 'Delivered',
      value: '$10,176',
      initialSeconds: 0,
    },
    {
      id: 'FO2D9BC6E142',
      client: 'Leslie Alexander',
      profile: 'bits_wise',
      team: 'FS',
      status: 'Urgent',
      value: '$5,969',
      initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53,
    },
    {
      id: 'FO2D9BC6E142',
      client: 'Guy Hawkins',
      profile: 'bits_wise',
      team: 'FS',
      status: 'Urgent',
      value: '$7,188',
      initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53,
    },
    {
      id: 'FO2D9BC6E142',
      client: 'Jenny Wilson',
      profile: 'bits_wise',
      team: 'FS',
      status: 'Urgent',
      value: '$5,860',
      initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53,
    },
  ];

  // Filtering logic
  const filteredOrders = orderData.filter((item) => {
    const matchesSearch =
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.profile.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.team.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = selectedStatusFilter === 'All' || item.status === selectedStatusFilter;

    if (activeTab === 'refunds') {
      return matchesSearch && item.status === 'Late';
    }

    return matchesSearch && matchesStatus;
  });

  const columns: Column<(typeof orderData)[0]>[] = [
    {
      key: 'id',
      header: 'Order ID',
      render: (val) => <span className="font-medium text-[#101828] font-inter">{String(val)}</span>
    },
    {
      key: 'client',
      header: 'Client name',
      render: (val) => <span className="font-medium text-[#101828] font-inter">{String(val)}</span>
    },
    {
      key: 'profile',
      header: 'Profile name',
      render: (val) => <span className="font-medium text-[#101828] font-inter">{String(val)}</span>
    },
    {
      key: 'team',
      header: 'Team',
      render: (val) => <span className="font-medium text-[#101828] font-inter">{String(val)}</span>
    },
    {
      key: 'status',
      header: 'Status',
      render: (_, item) => <StatusBadge status={item.status} />
    },
    {
      key: 'value',
      header: 'Value',
      render: (val) => <span className="font-medium text-[#101828] font-inter">{String(val)}</span>
    },
    {
      key: 'initialSeconds',
      header: 'Timeline',
      render: (_, item) => <CountdownTimer initialSeconds={item.initialSeconds} />
    },
    {
      key: 'id',
      header: 'Actions',
      render: (_, item) => (
        <button
          onClick={() => setSelectedProject(item)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#06530b] px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer group/btn"
        >
          <Eye className="size-4 stroke-[2.5] transition-transform duration-200 group-hover/btn:scale-110" />
          <span>View</span>
        </button>
      )
    }
  ];

  return (
    <div className="flex flex-col h-full w-full min-h-0 overflow-y-auto no-scrollbar space-y-5">

      {/* Fixed Top Section (Welcome Banner + Stats Grid + Search Control Bar) */}
      <div className="shrink-0 space-y-5">

        {/* Title / Welcome Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#dadada] pb-4 gap-4">
          <div>
            <h1 className="font-sans font-medium text-[20px] text-[#414141] tracking-[-0.5px]">
              Good morning, UX-SHAKIL👋
            </h1>
            <p className="font-condensed text-[14px] text-[#64748b] mt-0.5">
              {formattedDate}
            </p>
          </div>
        </div>

        {/* Stats Cards Grid */}
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

        {/* Filter and Tab Options Control Bar */}
        <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          {/* Project Tabs */}
          <div className="flex gap-[7px] items-center">
            <button
              onClick={() => setActiveTab('my-project')}
              className={`px-[8px] py-[4px] h-[36px] rounded-[8px] text-[14px] font-medium font-condensed transition-all duration-200 cursor-pointer flex items-center justify-center ${activeTab === 'my-project'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'bg-[#f3f3f5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              My Project
            </button>
            <button
              onClick={() => setActiveTab('refunds')}
              className={`px-[8px] py-[4px] h-[36px] rounded-[8px] text-[14px] font-medium font-condensed transition-all duration-200 cursor-pointer flex items-center justify-center ${activeTab === 'refunds'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'bg-[#f3f3f5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              Refunds and Cancellations
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search bar */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
              <input
                type="text"
                placeholder="Search by Name or Order ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f3f3f5] border border-transparent rounded-[8px] pl-9 pr-3 py-1.5 text-sm font-['Roboto'] text-[#434343] focus:outline-none focus:bg-white focus:border-[#eaecf0] transition-all duration-200 placeholder:text-gray-400"
              />
            </div>

            {/* Filter Trigger Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 bg-[#f3f3f5] hover:bg-gray-200 border border-transparent hover:border-[#eaecf0] rounded-[8px] px-4 py-1.5 text-sm font-medium font-['Roboto'] text-[#434343] transition-all duration-200 cursor-pointer ${showFilters ? 'bg-gray-200 border-[#eaecf0]' : ''
                }`}
            >
              <Filter className="size-4" />
              <span>Order Filtering</span>
            </button>
          </div>
        </div>

        {/* Expanded filters options (if triggered) */}
        {showFilters && (
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

      {/* Table Container */}
      <div className="w-full rounded-[16px] shadow-2xs bg-white">
        <DashboardTable
          data={filteredOrders}
          columns={columns}
          caption="Active Project orders and details"
          getRowKey={(row, index) => row.id || index}
          emptyMessage={`No ${activeTab === 'refunds' ? 'refunds or cancellations' : 'active projects'} found.`}
        />
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
