'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FolderOpen,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Search,
  Filter,
  Eye,
  Plus,
  DollarSign,
  Flag,
  ChevronDown,
} from 'lucide-react';

import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

import StatsCard from '@/components/employee-team-leader/shared/StatsCard';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';

import { mockProjects, mockTeamMembers } from './mockData';

import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';

import DateRangeCalendarModal, { DateRange } from '@/components/employee-team-leader/shared/DateRangeCalendarModal';
import { useAppSelector } from '@/store/hooks/hooks';
import { selectUser } from '@/store/features/Auth/authSlice';

export default function SuperAdminDashboard({ params }: { params: { id: string, teamId: string } }) {
  const user = useAppSelector(selectUser);
  console.log("user in gol in ", user);
  const [isRefundFilterActive, setIsRefundFilterActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [selectedServiceLineFilter, setSelectedServiceLineFilter] = useState<string>('All Service line');
  const [selectedTeamFilter, setSelectedTeamFilter] = useState<string>('All Team');
  const [showFilters, setShowFilters] = useState(false);

  // Calendar Modal state
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });

  const formattedDate = 'Monday, July 14, 2026';

  // We add initialSeconds to mock projects for countdown
  const enrichedProjects = mockProjects.map(p => ({
    ...p,
    initialSeconds: p.timeline === '24:00:00' ? 86400 : 3600 * 5, // Just mock data
  }));

  const filteredProjects = enrichedProjects.filter((item) => {
    const matchesSearch =
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesServiceLine =
      selectedServiceLineFilter === 'All Service line' ||
      item.serviceLine === selectedServiceLineFilter;

    const matchesTeam =
      selectedTeamFilter === 'All Team' ||
      item.team === selectedTeamFilter;

    const matchesRefund =
      !isRefundFilterActive ||
      item.status.toLowerCase() === 'refund' ||
      item.status.toLowerCase() === 'cancellation';

    const matchesStatus =
      selectedStatusFilter === 'All' ||
      item.status.toLowerCase() === selectedStatusFilter.toLowerCase();

    return matchesSearch && matchesServiceLine && matchesTeam && matchesRefund && matchesStatus;
  });

  const filteredTeam = mockTeamMembers.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.empId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const projectColumns: Column<(typeof enrichedProjects)[0]>[] = [
    { key: 'id', header: 'Order ID' },
    { key: 'client', header: 'Client name' },
    { key: 'profile', header: 'Profile name' },
    { key: 'serviceLine', header: 'Service Line', render: (val, item) => <span className="font-semibold text-[#06530B]">{String((item as any).serviceLine || 'FSD')}</span> },
    { key: 'team', header: 'Team' },
    {
      key: 'status',
      header: 'Status',
      align: 'center',
      render: (value) => <StatusBadge status={String(value)} />,
    },
    { key: 'value', header: 'Value', align: 'center' },
    {
      key: 'timeline',
      header: 'Timeline',
      align: 'center',
      render: (_, project) => (
        <CountdownTimer
          initialSeconds={
            project.timeline === "24:00:00"
              ? 86400
              : 5 * 3600
          }
        />
      )
    },
    {
      key: 'id',
      header: 'Actions',
      align: 'center',
      render: (val) => (
        <Link
          href={`/super-admin/projects/${val}`}
          className="inline-flex items-center gap-1 text-[#06530B] font-bold text-xs"
        >        <Eye className="w-4 h-4" /> View
        </Link>
      ),
    },
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
      render: (_, item) => {
        const dotColor = item.status === 'active' ? 'bg-[#00AB0C]' : item.status === 'suspended' ? 'bg-[#EF4444]' : 'bg-[#475569]';
        const textColor = item.status === 'active' ? 'text-[#00AB0C]' : item.status === 'suspended' ? 'text-[#EF4444]' : 'text-[#475569]';
        return (
          <div className={`flex items-center gap-1.5 font-bold text-[11px] uppercase ${textColor}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {item.status}
          </div>
        );
      }
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
      render: () => (
        <button className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
          {/* <Eye className="w-4 h-4" /> View */}
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
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                  <span className="z-10">A</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-['Roboto'] font-medium text-[22px] md:text-[24px] text-[#414141] tracking-tight">
                Welcome back, Admin
              </h1>
              <p className="font-['Roboto'] text-[14px] text-[#64748b] mt-0.5">
                {formattedDate} -
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Calendar Button */}
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#71717a] hover:bg-[#52525b] text-white rounded-xl text-sm font-medium transition-colors cursor-pointer shadow-xs"
            >
              <Calendar className="w-4 h-4 stroke-[2]" />
              <span>Calendar</span>
              {dateRange.startDate && (
                <span className="ml-1 text-[11px] bg-white/20 px-2 py-0.5 rounded font-mono text-white">
                  {dateRange.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  {dateRange.endDate && dateRange.endDate.getTime() !== dateRange.startDate.getTime() && (
                    ` - ${dateRange.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
                  )}
                </span>
              )}
            </button>

            <Link href="/super-admin/dashboard/create-new-project" className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm cursor-pointer">
              <Plus className="w-4 h-4" /> New Project
            </Link>
          </div>
        </div>

        {/* 6 Stats Cards Grid matching design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          <StatsCard
            title="Total Projects"
            value={24}
            icon={FolderOpen}
            iconBgColor="#eef2ff"
            iconColor="#6366f1"
          />
          <StatsCard
            title="Urgent Projects"
            value={7}
            icon={Flag}
            iconBgColor="#fef2f2"
            iconColor="#ef4444"
          />
          <StatsCard
            title="Total Work Load"
            value="$18,225"
            icon={DollarSign}
            iconBgColor="#e0f2fe"
            iconColor="#0284c7"
          />
          <StatsCard
            title="Total Delivered"
            value="$8,022"
            icon={DollarSign}
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

        {/* Filter Options Control Bar matching design */}
        <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-2xs">
          {/* Left Side Filter Options (All Project, All Service Line Dropdown, All Team Dropdown, Refunds and Cancellations) */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* All Project Pill */}
            <button
              onClick={() => {
                setIsRefundFilterActive(false);
                setSelectedServiceLineFilter('All Service line');
                setSelectedTeamFilter('All Team');
              }}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${!isRefundFilterActive && selectedServiceLineFilter === 'All Service line' && selectedTeamFilter === 'All Team'
                  ? 'bg-[#06530B] text-white shadow-2xs'
                  : 'bg-[#F3F3F5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              All Project
            </button>

            {/* All Service Line Dropdown */}
            <Dropdown
              align="left"
              trigger={
                <button
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${selectedServiceLineFilter !== 'All Service line'
                      ? 'bg-[#06530B] text-white shadow-2xs'
                      : 'bg-[#F3F3F5] text-[#282828] hover:bg-gray-200'
                    }`}
                >
                  <span>{selectedServiceLineFilter}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 ${selectedServiceLineFilter !== 'All Service line' ? 'text-white' : 'text-[#282828]'
                    }`} />
                </button>
              }
              items={[
                { label: 'All Service line', onClick: () => { setSelectedServiceLineFilter('All Service line'); } },
                { label: 'FSD', onClick: () => { setSelectedServiceLineFilter('FSD'); } },
                { label: 'CMS', onClick: () => { setSelectedServiceLineFilter('CMS'); } },
                { label: 'SEO', onClick: () => { setSelectedServiceLineFilter('SEO'); } },
                { label: 'Graphics', onClick: () => { setSelectedServiceLineFilter('Graphics'); } },
              ]}
            />

            {/* All Team Dropdown */}
            <Dropdown
              align="left"
              trigger={
                <button
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${selectedTeamFilter !== 'All Team'
                      ? 'bg-[#06530B] text-white shadow-2xs'
                      : 'bg-[#F3F3F5] text-[#282828] hover:bg-gray-200'
                    }`}
                >
                  <span>{selectedTeamFilter}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 ${selectedTeamFilter !== 'All Team' ? 'text-white' : 'text-[#282828]'
                    }`} />
                </button>
              }
              items={[
                { label: 'All Team', onClick: () => { setSelectedTeamFilter('All Team'); } },
                { label: 'FS', onClick: () => { setSelectedTeamFilter('FS'); } },
                { label: 'CM', onClick: () => { setSelectedTeamFilter('CM'); } },
              ]}
            />

            {/* Refunds and Cancellations Pill */}
            <button
              onClick={() => {
                setIsRefundFilterActive(!isRefundFilterActive);
              }}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${isRefundFilterActive
                  ? 'bg-[#06530B] text-white shadow-2xs'
                  : 'bg-[#F3F3F5] text-[#282828] hover:bg-gray-200'
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
        <DashboardTable
          data={filteredProjects}
          columns={projectColumns}
          caption={isRefundFilterActive ? "Refunds & Cancellations Projects" : "All Projects"}
          emptyMessage="No projects found."
          getRowKey={(row) => row.id}
        />
      </div>

      {/* Date Range Calendar Modal */}
      <DateRangeCalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        initialRange={dateRange}
        onApplyRange={(newRange) => setDateRange(newRange)}
      />
    </div>
  );
}



// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import {
//   FolderOpen, AlertTriangle, CheckCircle2, Calendar, MessageSquare,
//   Search, Filter, Eye, Plus, TrendingUp
// } from 'lucide-react';
// import { mockProjects, mockTeamMembers } from './mockData';



// function StatusBadge({ status }: { status: string }) {
//   const styles: Record<string, string> = {
//     urgent: 'bg-[#FEE2E2] text-[#EF4444]',
//     mp: 'bg-[#FEF3C7] text-[#F59E0B]',
//     late: 'bg-[#FFE4E6] text-[#F43F5E]',
//     delivered: 'bg-[#DCFCE7] text-[#00AB0C]',
//     active: 'text-[#00AB0C]',
//     suspended: 'text-[#EF4444]',
//     inactive: 'text-[#475569]',
//   };

//   if (['active', 'suspended', 'inactive'].includes(status)) {
//     const dotColor = status === 'active' ? 'bg-[#00AB0C]' : status === 'suspended' ? 'bg-[#EF4444]' : 'bg-[#475569]';
//     return (
//       <div className={`flex items-center gap-1.5 font-bold text-[11px] ${styles[status]}`}>
//         <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {status.toUpperCase()}
//       </div>
//     );
//   }

//   return (
//     <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${styles[status] || 'bg-gray-100 text-gray-500'}`}>
//       {status.toUpperCase()}
//     </span>
//   );
// }

// function StatCard({ icon: Icon, title, value, iconBg, iconColor, trend }: any) {
//   return (
//     <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between w-full h-[140px] shadow-sm relative">
//       <div className="flex justify-between items-start">
//         <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
//           <Icon className={`w-5 h-5 ${iconColor}`} />
//         </div>
//         {trend && (
//           <div className="flex items-center gap-1 text-[13px] font-bold text-[#00AB0C]">
//             <TrendingUp className="w-4 h-4" /> {trend}
//           </div>
//         )}
//       </div>
//       <div>
//         <div className="text-[13px] font-medium text-[#64748B] mb-1">{title}</div>
//         <div className="text-[28px] font-bold text-[#00AB0C] leading-none">{value}</div>
//       </div>
//     </div>
//   );
// }

// export default function SuperAdminDashboard() {
//   const [activeTab, setActiveTab] = useState('projects');

//   return (
//     <div className="h-full max-w-full overflow-hidden m-2 md:m-4 md:mr-4">
//       <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-y-auto no-scrollbar">
//         <div className="p-8 pb-12 max-w-full mx-auto">

//           {/* Header */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8">
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 rounded-full border-4 border-green-500 p-0.5 flex items-center justify-center shrink-0">
//                 <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
//                   <span className="z-10">A</span>
//                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Welcome back, Admin</h1>
//                 <p className="text-sm text-[#64748B]">Monday, July 14, 2026 -</p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <button className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
//                 <Plus className="w-4 h-4" /> New Project
//               </button>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
//             <StatCard icon={FolderOpen} title="Active Projects" value="240" iconBg="bg-blue-50" iconColor="text-blue-500" trend="+2%" />
//             <StatCard icon={AlertTriangle} title="Urgent Projects" value="78" iconBg="bg-red-50" iconColor="text-red-500" />
//             <StatCard icon={CheckCircle2} title="Total Delivered" value="12" iconBg="bg-green-50" iconColor="text-green-500" />
//             <StatCard icon={Calendar} title="Upcoming Deadlines" value="8" iconBg="bg-yellow-50" iconColor="text-yellow-500" />
//             <StatCard icon={MessageSquare} title="Unread Messages" value="43" iconBg="bg-purple-50" iconColor="text-purple-500" />
//           </div>

//           {/* Main Content Area */}
//           <div className=" overflow-hidden">
//             {/* Controls */}
//             <div className="p-4 flex flex-col xl:flex-row items-start xl:items-center justify-between border-b border-[#E2E8F0] gap-4 xl:gap-0 border border-[#E2E8F0] rounded-[16px] mb-5">
//               <div className="flex gap-2 w-full overflow-x-auto no-scrollbar pb-2 xl:pb-0 ">
//                 <button
//                   onClick={() => setActiveTab('projects')}
//                   className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${activeTab === 'projects'
//                       ? 'bg-[#06530B] text-white'
//                       : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
//                     }`}
//                 >
//                   All Project
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('team')}
//                   className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${activeTab === 'team'
//                       ? 'bg-[#06530B] text-white'
//                       : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
//                     }`}
//                 >
//                   All Service Line
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('refunds')}
//                   className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${activeTab === 'refunds'
//                       ? 'bg-[#06530B] text-white'
//                       : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
//                     }`}
//                 >
//                   Refunds and Cancellations
//                 </button>
//               </div>

//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full xl:w-auto">
//                 <div className="relative w-full sm:w-auto">
//                   <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Search by Name or Order ID..."
//                     className="pl-9 pr-4 py-2.5 bg-[#F3F3F5] rounded-xl text-sm font-normal text-[#828282] placeholder:text-[#828282] focus:outline-none focus:ring-1 focus:ring-green-500 w-full sm:w-64"
//                   />
//                 </div>
//                 <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F3F3F5]  rounded-xl text-[15px] font-normal text-gray-600 hover:bg-gray-100 transition-colors w-full sm:w-40">
//                   <Filter className="w-4 h-4" /> Order Filtering
//                 </button>
//               </div>
//             </div>

//             {/* Table */}
//             <div className="w-full overflow-x-auto rounded-xl">
//               {activeTab === 'projects' && (
//                 <table className="w-full text-left border-collapse min-w-max">
//                   <thead>
//                     <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] ">
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Order ID</th>
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Client name</th>
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Profile name</th>
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Team</th>
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Status</th>
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Value</th>
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Timeline</th>
//                       <th className="px-6 py-4 text-[14px] font-medium text-[#282828]">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {mockProjects.map((project, i) => (
//                       <tr key={i} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
//                         <td className="px-6 py-4 text-[14px] font-medium text-[#282828]">{project.id}</td>
//                         <td className="px-6 py-4 text-[14px] font-medium text-[#282828]">{project.client}</td>
//                         <td className="px-6 py-4 text-[14px] font-medium text-[#282828]">{project.profile}</td>
//                         <td className="px-6 py-4 text-[14px] font-medium text-[#282828]">{project.team}</td>
//                         <td className="px-6 py-4"><StatusBadge status={project.status} /></td>
//                         <td className="px-6 py-4 text-[14px] font-medium text-[#282828]">{project.value}</td>
//                         <td className="px-6 py-4">
//                           <div className="bg-[#06530B] text-white text-[10px] font-bold px-2 py-1 rounded inline-block">
//                             {project.timeline}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <Link href={`/super-admin/dashboard`} className="flex items-center gap-1 text-[#06530B] font-bold text-xs">
//                             <Eye className="w-4 h-4" /> View
//                           </Link>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}

//               {activeTab === 'team' && (
//                 <table className="w-full text-left border-collapse min-w-max">
//                   <thead>
//                     <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Profile</th>
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Emp ID</th>
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Designation</th>
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">E-mail</th>
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Status</th>
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Joining Date</th>
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Last login</th>
//                       <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {mockTeamMembers.map((member, i) => (
//                       <tr key={i} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-3">
//                             <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
//                             <div>
//                               <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{member.name}</div>
//                               <div className="text-[11px] text-[#64748B]">{member.username}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.empId}</td>
//                         <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.designation}</td>
//                         <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.email}</td>
//                         <td className="px-6 py-4"><StatusBadge status={member.status} /></td>
//                         <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.joined}</td>
//                         <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{member.lastLogin}</td>
//                         <td className="px-6 py-4">
//                           <button className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
//                             <Eye className="w-4 h-4" /> View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}

//               {activeTab === 'refunds' && (
//                 <div className="p-8 text-center text-gray-500">No refunds found.</div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
