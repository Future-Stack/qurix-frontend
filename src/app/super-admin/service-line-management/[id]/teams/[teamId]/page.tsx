"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Folder, AlertTriangle, CheckCircle, Calendar, MessageSquare,
  Search, Filter, Eye, Plus, Edit2, LayoutGrid, List, User
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
  {
    id: 1,
    name: 'Hossain Mishu',
    handle: '@hossain_mishu',
    empId: '16056',
    phone: '+880123456789',
    email: 'hossain@softvence.com',
    designation: 'Senior UI/UX Designer',
    status: 'ACTIVE',
    lastLogin: 'Thu Jul 30, 3:52 PM',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Sofia Ahmed',
    handle: '@sofia_ahmed',
    empId: '16057',
    phone: '+880123456790',
    email: 'sofia@softvence.com',
    designation: 'Lead Frontend Developer',
    status: 'ACTIVE',
    lastLogin: 'Thu Jul 30, 2:10 PM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Vrajakishore Loy',
    handle: '@vrajakishore',
    empId: '16058',
    phone: '+880123456791',
    email: 'vrajakishore@softvence.com',
    designation: 'Node JS Developer',
    status: 'ACTIVE',
    lastLogin: 'Thu Jul 30, 1:45 PM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Chintamani Pavithran',
    handle: '@chintamani',
    empId: '16059',
    phone: '+880123456792',
    email: 'chintamani@softvence.com',
    designation: 'Backend Architect',
    status: 'ACTIVE',
    lastLogin: 'Thu Jul 30, 11:20 AM',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

function StatCard({ icon: Icon, number, label, iconBg, iconColor }: any) {
  return (
    <div className="bg-white border border-[#E8EAF0] rounded-[16px] p-5 shadow-2xs flex flex-col justify-center">
      <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-[25px] font-bold text-[#0F172A] mb-1 leading-none">{number}</div>
      <div className="text-[13px] text-[#64748B] font-medium">{label}</div>
    </div>
  );
}

import DateRangeCalendarModal, { DateRange } from '@/components/employee-team-leader/shared/DateRangeCalendarModal';

export default function TeamDetailsDashboard() {
  const params = useParams();
  const serviceLineId = params?.id ? String(params.id) : '1';
  const teamId = params?.teamId ? String(params.teamId) : '1';

  const [activeTab, setActiveTab] = useState('All Project');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Calendar Modal state
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });

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
        <Link href={`/super-admin/service-line-management/${serviceLineId}/teams/${teamId}/projects/${val}`} className="flex items-center gap-1.5 text-[#06530B] font-bold text-xs hover:text-green-800 transition-colors">
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
    { key: 'empId', header: 'EMP ID', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'designation', header: 'Designation', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'email', header: 'Email', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'status', header: 'Status', render: (_, item) => <StatusBadge status={item.status} /> },
    { key: 'phone', header: 'Phone', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'lastLogin', header: 'Last login', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    {
      key: 'id',
      header: 'Action',
      render: (val) => (
        <Link href={`/super-admin/employees/${val}?returnTo=/super-admin/service-line-management/${serviceLineId}/teams/${teamId}?tab=Team+Member`} className="flex items-center gap-1.5 text-[#06530B] hover:text-green-800 font-bold text-xs transition-colors">
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
            <div className="w-14 h-14 rounded-full p-[2.5px] figma-avatar-ring shrink-0">
              <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                  <span className="z-10">C</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#414141] tracking-tight mb-0.5">
                FSD-Future Stack
              </h1>
              <p className="text-xs md:text-sm text-[#64748B]">
                Admin, July 14, 2026 ·
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="bg-[#747474] hover:bg-[#5c5c5c] text-white px-4 py-2.5 rounded-[6px] text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
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
            <Link
              href={`/super-admin/service-line-management/${serviceLineId}/teams/${teamId}/projects/create`}
              className="bg-[#06530B] hover:bg-[#05290b] text-white px-4 py-2.5 rounded-[6px] text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
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

        {/* Controls Bar & Tab Switcher */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6 border border-[#F3F3F3] rounded-[16px] p-4 bg-white shadow-2xs">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {['All Project', 'Team Member', 'Refunds and Cancellations'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-[8px] text-[14px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#06530B] text-white font-medium shadow-2xs'
                    : 'bg-[#F3F3F5] text-[#282828] hover:bg-gray-200'
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
                placeholder="Search by Name or Order ID..."
                className="w-full pl-9 pr-3 py-2 bg-[#F3F3F5] border border-transparent rounded-[8px] text-[14px] text-[#434343] placeholder-[#434343] focus:bg-white focus:border-[#06530B] focus:outline-none transition-colors"
              />
            </div>
            <button className="px-3 py-2 bg-[#F3F3F5] border border-transparent text-[#434343] rounded-[8px] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer">
              <Filter className="w-4 h-4" /> Order Filtering
            </button>
            <div className="flex items-center gap-1.5 bg-[#F3F3F5] p-1 rounded-[8px]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#06530B] text-white shadow-2xs' : 'text-[#434343] hover:text-black'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-[#06530B] text-white shadow-2xs' : 'text-[#434343] hover:text-black'
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'All Project' && (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs overflow-hidden">
            <DashboardTable
              data={mockProjects}
              columns={projectColumns}
              getRowKey={(item) => String(item.id)}
              caption="Projects list"
              emptyMessage="No projects found."
            />
          </div>
        )}

        {activeTab === 'Team Member' && (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {mockMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#FAFAFA] border border-[#F2F2F2] rounded-[16px] p-[17px] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Member Card Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-[36px] h-[36px] rounded-full object-cover shrink-0"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold text-[#191C1E] text-[14px] leading-tight">
                            {member.name}
                          </span>
                          <span className="text-[#464555] text-[12px] leading-tight">
                            {member.handle}
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#06530B]/9 rounded-full px-2 py-1 flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06530B]" />
                        <span className="text-[11px] font-bold text-[#06530B] tracking-wider uppercase">
                          {member.status}
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-[#EAECF0] my-3.5" />

                    {/* Member Details */}
                    <div className="space-y-3.5 text-[12px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">EMP ID</span>
                        <span className="text-[#0F172A]">{member.empId}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Phone</span>
                        <span className="text-[#0F172A]">{member.phone}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Email</span>
                        <span className="text-[#0F172A] truncate max-w-[170px]">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Designation</span>
                        <span className="text-[#0F172A]">{member.designation}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Last Login</span>
                        <span className="text-[#0F172A]">{member.lastLogin}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full h-px bg-[#EAECF0] my-3.5" />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2.5">
                      <Link
                        href={`/super-admin/employees/${member.id}/edit?returnTo=/super-admin/service-line-management/${serviceLineId}/teams/${teamId}?tab=Team+Member`}
                        className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" /> Edit
                      </Link>
                      <Link
                        href={`/super-admin/employees/${member.id}?returnTo=/super-admin/service-line-management/${serviceLineId}/teams/${teamId}?tab=Team+Member`}
                        className="flex-1 h-[29px] bg-[#06530B] hover:bg-[#05290b] text-white rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" /> View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs overflow-hidden">
              <DashboardTable
                data={mockMembers}
                columns={memberColumns}
                getRowKey={(item) => String(item.id)}
                caption="Members list"
                emptyMessage="No members found."
              />
            </div>
          )
        )}

        {activeTab === 'Refunds and Cancellations' && (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-12 text-center text-[#64748B] font-medium text-sm">
            No refunds or cancellations found for this team.
          </div>
        )}

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
