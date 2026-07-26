"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Search, Filter, Eye, Plus, FolderOpen, AlertTriangle, CheckCircle2, Calendar, MessageSquare
} from 'lucide-react';
import StatsCard from '@/components/employee-team-leader/shared/StatsCard';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge, { ProjectStatus } from '@/app/super-admin/dashboard/component/StatusBadge';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';

const mockProjects = [
  { id: 'FO2D9BC6E142', client: 'lawalx', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$3615', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Wade Warren', profile: 'bits_wise', team: 'CM', status: 'wip', value: '$4640', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Dianne Russell', profile: 'bits_wise', team: 'FS', status: 'late', value: '$6461', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Ronald Richards', profile: 'bits_wise', team: 'FS', status: 'delivered', value: '$10176', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Leslie Alexander', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5969', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Guy Hawkins', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$7188', timeline: '3D 9H 25M 53S' },
  { id: 'FO2D9BC6E142', client: 'Jenny Wilson', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5860', timeline: '3D 9H 25M 53S' },
];

const mockTeamMembers = [
  { name: 'Vrajakishore Loy', username: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', status: 'active', joined: '2020-08-08', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Chintamani Pavithran', username: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', status: 'active', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Yashpal Patachli', username: '@aisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', status: 'active', joined: '2025-12-12', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Supratik Chaudhry', username: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', status: 'suspended', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Punyasloka Megana', username: '@anitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', status: 'inactive', joined: '2021-01-01', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];
function CountdownTimer({
  initialSeconds,
}: {
  initialSeconds: number;
}) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    setTimeLeft(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex w-[120px] items-center gap-1 justify-center rounded-lg bg-[#06530B] px-3 py-2 text-xs font-bold text-white">
  <span>{days}d</span>
  <span>{String(hours).padStart(2, "0")}h</span>
  <span>{String(minutes).padStart(2, "0")}m</span>
  <span>{String(seconds).padStart(2, "0")}s</span>
</div>
  );
}
type Project = (typeof mockProjects)[number];
type TeamMember = (typeof mockTeamMembers)[number];

export default function TeamDetailsDashboard({ params }: { params: { id: string, teamId: string } }) {
  const [activeTab, setActiveTab] = useState('All Project');
  const projectColumns: Column<Project>[] = [
  {
    key: "id",
    header: "Order ID",
    render: (value) => (
      <span className="text-[13px] font-semibold text-[#0F172A]">
        {String(value)}
      </span>
    ),
  },

  {
    key: "client",
    header: "Client Name",
  },

  {
    key: "profile",
    header: "Profile Name",
  },

  {
    key: "team",
    header: "Team",
  },

  {
    key: "status",
    header: "Status",
    render: (value) => (
      <StatusBadge status={value as ProjectStatus} />
    ),
  },

  {
    key: "value",
    header: "Value",
    render: (value) => (
      <span className="font-semibold text-[#0F172A]">
        {String(value)}
      </span>
    ),
  },

  {
    key: 'timeline',
    header: 'Timeline',
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
    key: "id",
    header: "Actions",
    render: (_, project) => (
      <Link
        href={`/super-admin/service-line-management/${params.id}/teams/${params.teamId}/projects/${project.id}`}
        className="flex items-center gap-1 text-xs font-bold text-[#06530B] hover:underline"
      >
        <Eye className="h-4 w-4" />
        View
      </Link>
    ),
  },
];
const teamMemberColumns: Column<TeamMember>[] = [
  {
    key: "name",
    header: "Profile",
    render: (_, member) => (
      <div className="flex items-center gap-3">
        <img
          src={member.avatar}
          alt={member.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="text-[13px] font-bold text-[#0F172A]">
            {member.name}
          </p>

          <p className="text-[11px] text-[#64748B]">
            {member.username}
          </p>
        </div>
      </div>
    ),
  },

  {
    key: "empId",
    header: "Emp ID",
  },

  {
    key: "designation",
    header: "Designation",
  },

  {
    key: "email",
    header: "E-mail",
  },

  {
    key: "status",
    header: "Status",
    render: (value) => (
      <StatusBadge status={value as ProjectStatus} />
    ),
  },

  {
    key: "joined",
    header: "Joining Date",
  },

  {
    key: "lastLogin",
    header: "Last Login",
  },

  {
    key: "name",
    header: "Action",
    render: (_, member) => (
      <button className="flex items-center gap-1 text-xs font-bold text-[#64748B] transition-colors hover:text-[#0F172A]">
        <Eye className="h-4 w-4" />
        View
      </button>
    ),
  },
];

  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full  overflow-y-auto no-scrollbar">
        <div className="max-w-full mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-4 border-green-500 p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                  <span className="z-10">C</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0F172A] mb-1">FSD-Future Stack</h1>
                <p className="text-sm text-[#64748B]">Admin, July 14, 2026</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link 
                href={`/super-admin/service-line-management/${params.id}/teams/${params.teamId}/projects/create`}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> New Project
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <StatsCard icon={FolderOpen} title="Active Projects" value="24" iconColor="#4F46E5" iconBgColor="#EEF2FF" />
            <StatsCard icon={AlertTriangle} title="Urgent Projects" value="7" iconBgColor="#FEF2F2" iconColor="#EF4444" />
            <StatsCard icon={CheckCircle2} title="Total Delivered" value="12" iconBgColor="#F0FDF4" iconColor="#06530B" />
            <StatsCard icon={Calendar} title="Upcoming Deadlines" value="8" iconBgColor="#FFFBEB" iconColor="#F59E0B" />
            <StatsCard icon={MessageSquare} title="Unread Messages" value="43" iconBgColor="#f5f3ff" iconColor="#a855f7" />
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-3xl overflow-hidden">
            {/* Controls */}
            <div className="pb-4 flex flex-col lg:flex-row items-end lg:items-center gap-4 justify-between border border-[#E2E8F0] rounded-[16px] p-4 mb-8">
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('All Project')}
                  className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${
                    activeTab === 'All Project' 
                      ? 'bg-[#06530B] text-white' 
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  All Project
                </button>
                <button 
                  onClick={() => setActiveTab('Team Member')}
                  className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${
                    activeTab === 'Team Member' 
                      ? 'bg-[#06530B] text-white' 
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  Team Member
                </button>
                <button 
                  onClick={() => setActiveTab('Refunds and Cancellations')}
                  className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${
                    activeTab === 'Refunds and Cancellations' 
                      ? 'bg-[#06530B] text-white' 
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  Refunds and Cancellations
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search by Name or Order ID..." 
                    className="pl-9 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-64"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#475569] hover:bg-gray-100 transition-colors">
                  <Filter className="w-4 h-4" /> Order Filtering
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto mt-4">
              {activeTab === 'All Project' && (
                <DashboardTable
                  data={mockProjects}
                  columns={projectColumns}
                  caption="All Projects"
                  emptyMessage="No projects found."
                  getRowKey={(row) => row.id}
                />
                
              )}

              {activeTab === 'Team Member' && (
                <DashboardTable
                  data={mockTeamMembers}
                  columns={teamMemberColumns}
                  caption="All Team Members"
                  emptyMessage="No team members found."
                  getRowKey={(row) => row.empId}
                />
              )}

              {activeTab === 'Refunds and Cancellations' && (
                <div className="p-8 text-center text-gray-500">No refunds found.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
