'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  FolderOpen,
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

const mockProjects = [
  { id: 'FO2D9BC6E142', client: 'lawalx', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$3615', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E143', client: 'Wade Warren', profile: 'bits_wise', team: 'CM', status: 'mp', value: '$4640', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E144', client: 'Dianne Russell', profile: 'bits_wise', team: 'FS', status: 'late', value: '$6461', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E145', client: 'Ronald Richards', profile: 'bits_wise', team: 'FS', status: 'delivered', value: '$10176', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E146', client: 'Leslie Alexander', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5969', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E147', client: 'Guy Hawkins', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$7188', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E148', client: 'Jenny Wilson', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5860', timeline: '3D 9H 25M 53S' },
];

const mockTeamMembers = [
  { name: 'Vrajakishore Loy', username: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', status: 'active', joined: '2020-08-08', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Chintamani Pavithran', username: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', status: 'active', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Yashpal Patachli', username: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', status: 'active', joined: '2025-12-12', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Supratik Chaudhry', username: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', status: 'suspended', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Punyasloka Megana', username: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', status: 'inactive', joined: '2021-01-01', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';

export default function ServiceLineDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'projects' | 'team' | 'refunds'>('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  const formattedDate = 'July 14, 2026';

  // We add initialSeconds to mock projects for countdown
  const enrichedProjects = mockProjects.map(p => ({
    ...p,
    initialSeconds: p.timeline === '24:00:00' ? 86400 : 3600 * 5, // Just mock data
  }));

  const filteredProjects = enrichedProjects.filter((item) => {
    const matchesSearch =
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const filteredTeam = mockTeamMembers.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.empId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const columnsProjects: Column<(typeof enrichedProjects)[0]>[] = [
    {
      key: 'id',
      header: 'Order ID',
      render: (val) => <span className="font-bold text-[#06530b] font-['Roboto']">{String(val)}</span>
    },
    {
      key: 'client',
      header: 'Client name',
      render: (val) => <span className="font-semibold text-[#1e293b] font-['Roboto']">{String(val)}</span>
    },
    {
      key: 'profile',
      header: 'Profile name',
      render: (val) => <span className="text-[#475569] font-['Roboto'] text-sm line-clamp-1">{String(val)}</span>
    },
    {
      key: 'team',
      header: 'Team',
      render: (val) => <span className="text-[#475569] font-['Roboto'] text-sm">{String(val)}</span>
    },
    {
      key: 'status',
      header: 'Status',
      render: (_, item) => <StatusBadge status={item.status} />
    },
    {
      key: 'value',
      header: 'Value',
      render: (val) => <span className="font-medium text-[#101828] font-['Inter']">{String(val)}</span>
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
        <Link
          href={`/service-line/projects/${item.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06530b] hover:text-[#00AB0C] transition-colors cursor-pointer"
        >
          <Eye className="size-4" />
          <span>View</span>
        </Link>
      )
    }
  ];

  const columnsTeam: Column<(typeof mockTeamMembers)[0]>[] = [
    {
      key: 'name',
      header: 'Profile',
      render: (_, item) => (
        <div className="flex items-center gap-3">
          <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{item.name}</div>
            <div className="text-[11px] text-[#64748B]">{item.username}</div>
          </div>
        </div>
      )
    },
    {
      key: 'empId',
      header: 'Emp ID',
      render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span>
    },
    {
      key: 'designation',
      header: 'Designation',
      render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span>
    },
    {
      key: 'email',
      header: 'E-mail',
      render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span>
    },
    {
      key: 'status',
      header: 'Status',
      render: (_, item) => <StatusBadge status={item.status} />
    },
    {
      key: 'joined',
      header: 'Joining Date',
      render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span>
    },
    {
      key: 'lastLogin',
      header: 'Last login',
      render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span>
    },
    {
      key: 'empId',
      header: 'Action',
      render: (_, item) => (
        <button
          onClick={() => alert(`Viewing details for Order ${item.name}`)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#06530b] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer group/btn"
        >
          <Eye className="size-4 stroke-[2.5] transition-transform duration-200 group-hover/btn:scale-110" />
          <span>View</span>
        </button>
      )
    }
  ];

  return (
    <div className="flex flex-col h-full w-full min-h-0 overflow-y-auto no-scrollbar space-y-5">
      {/* Fixed Top Section */}
      <div className="shrink-0 space-y-5">
        {/* Title / Welcome Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#dadada] pb-4 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full p-[2.5px] figma-avatar-ring shrink-0">
              <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                  <span className="z-10">C</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-['Roboto'] font-medium text-[22px] md:text-[24px] text-[#414141] tracking-tight">
                FSD-Future Stack
              </h1>
              <p className="font-['Roboto'] text-[14px] text-[#64748b] mt-0.5">
                Admin, {formattedDate} -
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/service-line/dashboard/create-new-project"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" /> New Project
            </Link>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Active Projects"
            value={24}
            icon={FolderOpen}
            iconBgColor="#eff6ff"
            iconColor="#3b82f6"
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
            iconBgColor="#fefce8"
            iconColor="#eab308"
          />
          <StatsCard
            title="Unread Messages"
            value={43}
            icon={MessageSquare}
            iconBgColor="#f5f3ff"
            iconColor="#a855f7"
          />
        </div>

        {/* Filter and Tab Options Control Bar */}
        <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl max-w-fit">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer ${activeTab === 'projects'
                ? 'bg-[#06530b] text-white shadow-2xs'
                : 'text-[#282828] hover:bg-gray-200'
                }`}
            >
              All Project
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer ${activeTab === 'team'
                ? 'bg-[#06530b] text-white shadow-2xs'
                : 'text-[#282828] hover:bg-gray-200'
                }`}
            >
              Team Member
            </button>
            <button
              onClick={() => setActiveTab('refunds')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer ${activeTab === 'refunds'
                ? 'bg-[#06530b] text-white shadow-2xs'
                : 'text-[#282828] hover:bg-gray-200'
                }`}
            >
              Refunds and Cancellations
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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
        {activeTab === 'projects' && (
          <DashboardTable
            data={filteredProjects}
            columns={columnsProjects}
            caption="Active Project orders and details"
            getRowKey={(row, index) => row.id || index}

            emptyMessage="No projects found."
          />
        )}
        {activeTab === 'team' && (
          <DashboardTable
            data={filteredTeam}
            columns={columnsTeam}
            caption="Service Line members"
            getRowKey={(row, index) => row.empId || index}

            emptyMessage="No team members found."
          />
        )}
        {activeTab === 'refunds' && (
          <div className="p-8 text-center text-gray-500">No refunds found.</div>
        )}
      </div>
    </div>
  );
}


// "use client";

// import React, { useState } from 'react';
// import {
//   FolderOpen, AlertTriangle, CheckCircle2, Calendar, MessageSquare,
//   Search, Filter, Eye
// } from 'lucide-react';
// import { StatCard } from '@/components/ui/Card/StatCard';
// import { Tabs } from '@/components/ui/Tabs/Tabs';
// import { Table, Column } from '@/components/ui/Table/Table';
// import { Badge } from '@/components/ui/Badge/Badge';
// import { PageHeader } from '@/components/ui/PageHeader/PageHeader';

// const mockProjects = [
//   { id: 'FO2D9BC6E142', client: 'lawalx', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$3615', timeline: '3D 9H 25M 53S' },
//   { id: 'FO2D9BC6E142', client: 'Wade Warren', profile: 'bits_wise', team: 'CM', status: 'mp', value: '$4640', timeline: '3D 9H 25M 53S' },
//   { id: 'FO2D9BC6E142', client: 'Dianne Russell', profile: 'bits_wise', team: 'FS', status: 'late', value: '$6461', timeline: '3D 9H 25M 53S' },
//   { id: 'FO2D9BC6E142', client: 'Ronald Richards', profile: 'bits_wise', team: 'FS', status: 'delivered', value: '$10176', timeline: '3D 9H 25M 53S' },
//   { id: 'FO2D9BC6E142', client: 'Leslie Alexander', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5969', timeline: '3D 9H 25M 53S' },
//   { id: 'FO2D9BC6E142', client: 'Guy Hawkins', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$7188', timeline: '3D 9H 25M 53S' },
//   { id: 'FO2D9BC6E142', client: 'Jenny Wilson', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5860', timeline: '3D 9H 25M 53S' },
// ];

// const mockTeamMembers = [
//   { name: 'Vrajakishore Loy', username: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', status: 'active', joined: '2020-08-08', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
//   { name: 'Chintamani Pavithran', username: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', status: 'active', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
//   { name: 'Yashpal Patachli', username: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', status: 'active', joined: '2025-12-12', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
//   { name: 'Supratik Chaudhry', username: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', status: 'suspended', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
//   { name: 'Punyasloka Megana', username: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', status: 'inactive', joined: '2021-01-01', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
// ];

// export default function DashboardPage() {
//   const [activeTab, setActiveTab] = useState('projects');

//   const projectColumns: Column<typeof mockProjects[0]>[] = [
//     { key: 'id', header: 'Order ID', render: (item) => <span className="font-semibold text-[#0F172A]">{item.id}</span> },
//     { key: 'client', header: 'Client name' },
//     { key: 'profile', header: 'Profile name' },
//     { key: 'team', header: 'Team' },
//     { key: 'status', header: 'Status', render: (item) => <Badge variant={item.status as any}>{item.status}</Badge> },
//     { key: 'value', header: 'Value', render: (item) => <span className="font-semibold text-[#0F172A]">{item.value}</span> },
//     {
//       key: 'timeline', header: 'Timeline', render: (item) => (
//         <div className="bg-[#06530B] text-white text-[10px] font-bold px-2 py-1 rounded inline-block">
//           {item.timeline}
//         </div>
//       )
//     },
//     {
//       key: 'actions', header: 'Actions', render: () => (
//         <button className="flex items-center gap-1 text-[#06530B] font-bold text-xs">
//           <Eye className="w-4 h-4" /> View
//         </button>
//       )
//     },
//   ];

//   const teamColumns: Column<typeof mockTeamMembers[0]>[] = [
//     {
//       key: 'profile', header: 'Profile', render: (item) => (
//         <div className="flex items-center gap-3">
//           <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
//           <div>
//             <div className="font-bold text-[#0F172A]">{item.name}</div>
//             <div className="text-[11px] text-[#64748B]">{item.username}</div>
//           </div>
//         </div>
//       )
//     },
//     { key: 'empId', header: 'Emp id' },
//     { key: 'designation', header: 'Designation' },
//     { key: 'email', header: 'E-mail' },
//     { key: 'status', header: 'Status', render: (item) => <Badge variant={item.status as any}>{item.status}</Badge> },
//     { key: 'joined', header: 'Joining Date' },
//     { key: 'lastLogin', header: 'Last login' },
//     {
//       key: 'actions', header: 'ACTION', render: () => (
//         <button className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
//           <Eye className="w-4 h-4" /> View
//         </button>
//       )
//     },
//   ];

//   return (
//     <div className="p-8 pb-12 w-full max-w-full mx-auto">
//       {/* Header */}
//       <PageHeader
//         logoInitial="C"
//         title="FSD-Future Stack"
//         subtitle="Admin, July 14, 2026 -"
//         actionLabel="New Project"
//       />

//       {/* Stats */}
//       <div className="grid grid-cols-5 gap-4 mb-8">
//         <StatCard title="Active Projects" value="24" icon={FolderOpen} iconColorClass="text-blue-500" iconBgClass="bg-blue-50" />
//         <StatCard title="Urgent Projects" value="7" icon={AlertTriangle} iconColorClass="text-red-500" iconBgClass="bg-red-50" />
//         <StatCard title="Total Delivered" value="12" icon={CheckCircle2} iconColorClass="text-green-500" iconBgClass="bg-green-50" />
//         <StatCard title="Upcoming Deadlines" value="8" icon={Calendar} iconColorClass="text-yellow-500" iconBgClass="bg-yellow-50" />
//         <StatCard title="Unread Messages" value="43" icon={MessageSquare} iconColorClass="text-purple-500" iconBgClass="bg-purple-50" />
//       </div>

//       {/* Main Content Area */}
//       <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
//         {/* Controls */}
//         <div className="p-4 flex items-center justify-between border-b border-[#E2E8F0]">
//           <Tabs
//             activeTab={activeTab}
//             onChange={setActiveTab}
//             tabs={[
//               { id: 'projects', label: 'All Project' },
//               { id: 'team', label: 'Team Member' },
//               { id: 'refunds', label: 'Refunds and Cancellations' },
//             ]}
//           />

//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search by Name or Order ID..."
//                 className="pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 w-64"
//               />
//             </div>
//             <button className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#475569] hover:bg-gray-100 transition-colors">
//               <Filter className="w-4 h-4" /> Order Filtering
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="p-2">
//           {activeTab === 'projects' && <Table columns={projectColumns} data={mockProjects} />}
//           {activeTab === 'team' && <Table columns={teamColumns} data={mockTeamMembers} />}
//           {activeTab === 'refunds' && <div className="p-8 text-center text-gray-500">No refunds found.</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

