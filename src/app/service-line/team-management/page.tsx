"use client";

import React, { useState, Suspense } from 'react';
import {
  Plus, Search, Filter, Eye, Edit2, Trash2, Upload, User, ChevronDown, ArrowLeft, Calendar, LayoutGrid, List, RotateCcw
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';
import { CreateTeamModal } from '@/components/ui/Modal/CreateTeamModal';

// All projects across all teams
const mockAllProjects = [
  { id: 'FO2D9BC6E142', client: 'lawalx', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$3,615', initialSeconds: 293153 },
  { id: 'FO2D9BC6E143', client: 'Wade Warren', profile: 'bits_wise', team: 'CM', status: 'mp', value: '$4,640', initialSeconds: 293153 },
  { id: 'FO2D9BC6E144', client: 'Dianne Russell', profile: 'bits_wise', team: 'FS', status: 'late', value: '$6,461', initialSeconds: 293153 },
  { id: 'FO2D9BC6E145', client: 'Ronald Richards', profile: 'bits_wise', team: 'FS', status: 'delivered', value: '$10,176', initialSeconds: 0 },
  { id: 'FO2D9BC6E146', client: 'Leslie Alexander', profile: 'bits_wise', team: 'FS', status: 'urgent', value: '$5,969', initialSeconds: 293153 },
  { id: 'FO2D9BC6E147', client: 'Guy Hawkins', profile: 'bits_wise', team: 'DN', status: 'urgent', value: '$7,188', initialSeconds: 293153 },
  { id: 'FO2D9BC6E148', client: 'Jenny Wilson', profile: 'bits_wise', team: 'DN', status: 'urgent', value: '$5,860', initialSeconds: 293153 },
  { id: 'FO2D9BC6E149', client: 'Courtney Henry', profile: 'design_lab', team: 'ID', status: 'delivered', value: '$8,290', initialSeconds: 0 },
  { id: 'FO2D9BC6E150', client: 'Cameron Williamson', profile: 'design_lab', team: 'CM', status: 'mp', value: '$3,120', initialSeconds: 293153 },
  { id: 'FO2D9BC6E151', client: 'Bessie Cooper', profile: 'tech_hub', team: 'ID', status: 'late', value: '$9,740', initialSeconds: 293153 },
  { id: 'FO2D9BC6E152', client: 'Esther Howard', profile: 'tech_hub', team: 'FS', status: 'urgent', value: '$4,320', initialSeconds: 293153 },
  { id: 'FO2D9BC6E153', client: 'Brooklyn Simmons', profile: 'design_lab', team: 'DN', status: 'delivered', value: '$6,800', initialSeconds: 0 },
];

const mockTeams = [
  {
    id: 1,
    name: 'Future Stack',
    logo: 'https://logo.clearbit.com/mcdonalds.com',
    teamLeader: 'Imran',
    createDate: '2020-08-08',
    members: '42 Members',
    workload: '$10176',
    projects: '35 Projects',
    updated: '16/08/2013'
  },
  {
    id: 2,
    name: 'Cyber Monks',
    logo: 'https://logo.clearbit.com/starbucks.com',
    teamLeader: 'Imran',
    createDate: '2021-01-01',
    members: '42 Members',
    workload: '$4640',
    projects: '35 Projects',
    updated: '16/08/2013'
  },
  {
    id: 3,
    name: 'Dev Ninja',
    logo: 'https://logo.clearbit.com/dyson.com',
    teamLeader: 'Imran',
    createDate: '2022-10-10',
    members: '42 Members',
    workload: '$6461',
    projects: '35 Projects',
    updated: '16/08/2013'
  },
  {
    id: 4,
    name: 'Innosight Design',
    logo: 'https://logo.clearbit.com/apple.com',
    teamLeader: 'Imran',
    createDate: '2023-05-15',
    members: '42 Members',
    workload: '$8290',
    projects: '35 Projects',
    updated: '16/08/2013'
  }
];

// Deleted teams (soft-deleted)
const mockDeletedTeams = [
  {
    id: 5,
    name: 'Alpha Strike',
    teamLeader: 'Karim',
    createDate: '2019-03-12',
    members: '18 Members',
    workload: '$5240',
    projects: '22 Projects',
    updated: '04/11/2022',
    deletedOn: '20/06/2024'
  },
  {
    id: 6,
    name: 'Bolt Creative',
    teamLeader: 'Nadia',
    createDate: '2018-07-05',
    members: '31 Members',
    workload: '$8100',
    projects: '41 Projects',
    updated: '12/02/2023',
    deletedOn: '15/01/2024'
  },
  {
    id: 7,
    name: 'Pixel Force',
    teamLeader: 'Tanvir',
    createDate: '2020-11-20',
    members: '25 Members',
    workload: '$3870',
    projects: '19 Projects',
    updated: '08/09/2023',
    deletedOn: '02/04/2024'
  }
];

// All employees across all teams in the company
const mockAllEmployees = [
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
    team: 'Future Stack',
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
    team: 'Future Stack',
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
    team: 'Future Stack',
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
    team: 'Cyber Monks',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Yashpal Patachli',
    handle: '@yashpal',
    empId: '16060',
    phone: '+880123456793',
    email: 'yashpal@softvence.com',
    designation: 'React JS Developer',
    status: 'ACTIVE',
    lastLogin: 'Wed Jul 29, 5:30 PM',
    team: 'Cyber Monks',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Supratik Chaudhry',
    handle: '@supratik_k',
    empId: '16061',
    phone: '+880123456794',
    email: 'supratik@softvence.com',
    designation: 'Project Manager',
    status: 'suspended',
    lastLogin: 'Mon Jul 27, 9:00 AM',
    team: 'Dev Ninja',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Punyasloka Megana',
    handle: '@unitafaraji',
    empId: '16062',
    phone: '+880123456795',
    email: 'punyasloka@softvence.com',
    designation: 'React JS Developer',
    status: 'inactive',
    lastLogin: 'Fri Jul 25, 3:15 PM',
    team: 'Dev Ninja',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    name: 'Rahim Al Farooq',
    handle: '@rahim_farooq',
    empId: '16063',
    phone: '+880123456796',
    email: 'rahim@softvence.com',
    designation: 'QA Engineer',
    status: 'ACTIVE',
    lastLogin: 'Thu Jul 30, 10:05 AM',
    team: 'Innosight Design',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
  }
];

import DateRangeCalendarModal, { DateRange } from '@/components/employee-team-leader/shared/DateRangeCalendarModal';

function TeamManagementContent() {
  const searchParams = useSearchParams();
  const [isCreatePanelOpen, setIsCreatePanelOpen] = useState(false);
  const [teamToEdit, setTeamToEdit] = useState<any>(null);
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'Team');

  // Calendar Modal state
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });

  const handleCreateTeam = () => {
    setTeamToEdit(null);
    setIsCreatePanelOpen(true);
  };

  const handleEditTeam = (team: any) => {
    setTeamToEdit(team);
    setIsCreatePanelOpen(true);
  };
  const [teamViewMode, setTeamViewMode] = useState<'grid' | 'table'>('grid');
  const [employeeViewMode, setEmployeeViewMode] = useState<'grid' | 'table'>('grid');
  const [deletedViewMode, setDeletedViewMode] = useState<'grid' | 'table'>('grid');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  // Team tab state
  const [teamSearchQuery, setTeamSearchQuery] = useState('');
  const [teamLeaderFilter, setTeamLeaderFilter] = useState('All');
  const [showTeamFilters, setShowTeamFilters] = useState(false);

  // Employee tab state
  const [employeeSearchQuery, setEmployeeSearchQuery] = useState('');
  const [employeeStatusFilter, setEmployeeStatusFilter] = useState('All');
  const [employeeTeamFilter, setEmployeeTeamFilter] = useState('All');
  const [showEmployeeFilters, setShowEmployeeFilters] = useState(false);

  // All Projects tab state
  const [projectSearchQuery, setProjectSearchQuery] = useState('');
  const [projectStatusFilter, setProjectStatusFilter] = useState('All');
  const [showProjectFilters, setShowProjectFilters] = useState(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentViewMode = activeTab === 'Employee' ? employeeViewMode : activeTab === 'Deleted Items' ? deletedViewMode : teamViewMode;
  const setCurrentViewMode = activeTab === 'Employee'
    ? setEmployeeViewMode
    : activeTab === 'Deleted Items'
    ? setDeletedViewMode
    : setTeamViewMode;

  // Unique team leaders from mockTeams for filter
  const allTeamLeaders = ['All', ...Array.from(new Set(mockTeams.map((t) => t.teamLeader)))];

  // Filtered teams for Team tab
  const filteredTeams = mockTeams.filter((team) => {
    const matchesSearch = teamSearchQuery === '' ||
      team.name.toLowerCase().includes(teamSearchQuery.toLowerCase());
    const matchesLeader = teamLeaderFilter === 'All' || team.teamLeader === teamLeaderFilter;
    return matchesSearch && matchesLeader;
  });

  // Filtered employees for Employee tab
  const filteredEmployees = mockAllEmployees.filter((emp) => {
    const matchesSearch = employeeSearchQuery === '' ||
      emp.name.toLowerCase().includes(employeeSearchQuery.toLowerCase()) ||
      emp.empId.toLowerCase().includes(employeeSearchQuery.toLowerCase());
    const matchesStatus = employeeStatusFilter === 'All' ||
      emp.status.toLowerCase() === employeeStatusFilter.toLowerCase();
    const matchesTeam = employeeTeamFilter === 'All' || emp.team === employeeTeamFilter;
    return matchesSearch && matchesStatus && matchesTeam;
  });

  // Unique teams from mockAllEmployees for filter
  const allEmployeeTeams = ['All', ...Array.from(new Set(mockAllEmployees.map((e) => e.team)))];

  // Filtered projects for All Projects tab
  const filteredProjects = mockAllProjects.filter((item) => {
    const matchesSearch = projectSearchQuery === '' ||
      item.client.toLowerCase().includes(projectSearchQuery.toLowerCase());
    const matchesStatus = projectStatusFilter === 'All' ||
      item.status.toLowerCase() === projectStatusFilter.toLowerCase() ||
      (projectStatusFilter === 'WIP' && item.status.toLowerCase() === 'mp') ||
      (projectStatusFilter === 'Delivered' && item.status.toLowerCase() === 'delivered');
    return matchesSearch && matchesStatus;
  });

  const employeeColumns: Column<(typeof mockAllEmployees)[0]>[] = [
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
    { key: 'team', header: 'Team', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'lastLogin', header: 'Last Login', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    {
      key: 'id',
      header: 'Action',
      render: (val) => (
        <div className="flex items-center gap-2">
          <Link href={`/service-line/employees/${val}/edit?returnTo=/service-line/team-management?tab=Employee`} className="w-8 h-8 rounded-full flex items-center justify-center text-[#475569] hover:bg-gray-100 transition-colors">
            <Edit2 className="w-4 h-4" />
          </Link>
          <Link href={`/service-line/employees/${val}?returnTo=/service-line/team-management?tab=Employee`} className="flex items-center gap-1.5 text-[#06530B] hover:text-green-800 font-bold text-xs transition-colors">
            <Eye className="w-4 h-4" /> View
          </Link>
        </div>
      )
    }
  ];

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar">
      <div className="w-full max-w-full mx-auto">

        {/* Top Page Header */}
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
                Full Stack Development (FSD)
              </h1>
              <p className="text-xs md:text-sm text-[#64748B]">
                Monday, July 14, 2026 ·
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
            <button
              onClick={handleCreateTeam}
              className="bg-[#06530B] hover:bg-[#05290b] text-white px-4 py-2.5 rounded-[6px] text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Create Team
            </button>
          </div>
        </div>

        {/* 5 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          <div className="bg-white border border-[#E8EAF0] rounded-[16px] p-5 shadow-2xs flex flex-col justify-center">
            <div className="text-[25px] font-bold text-[#0F172A] tracking-tight leading-none mb-2">04</div>
            <div className="text-[14px] font-semibold text-[#414141] capitalize">Total Team</div>
          </div>
          <div className="bg-white border border-[#E8EAF0] rounded-[16px] p-5 shadow-2xs flex flex-col justify-center">
            <div className="text-[25px] font-bold text-[#0F172A] tracking-tight leading-none mb-2">70</div>
            <div className="text-[14px] font-semibold text-[#414141] capitalize">Total Employees</div>
          </div>
          <div className="bg-white border border-[#E8EAF0] rounded-[16px] p-5 shadow-2xs flex flex-col justify-center">
            <div className="text-[25px] font-bold text-[#0F172A] tracking-tight leading-none mb-2">12</div>
            <div className="text-[14px] font-semibold text-[#414141] capitalize">Running Projects</div>
          </div>
          <div className="bg-white border border-[#E8EAF0] rounded-[16px] p-5 shadow-2xs flex flex-col justify-center">
            <div className="text-[25px] font-bold text-[#0F172A] tracking-tight leading-none mb-2">8</div>
            <div className="text-[14px] font-semibold text-[#414141] capitalize">Team Leader</div>
          </div>
          <div className="bg-white border border-[#E8EAF0] rounded-[16px] p-5 shadow-2xs flex flex-col justify-center">
            <div className="text-[25px] font-bold text-[#0F172A] tracking-tight leading-none mb-2">43</div>
            <div className="text-[14px] font-semibold text-[#414141] capitalize">Total Project Completed</div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6 border border-[#F3F3F3] rounded-[16px] p-4 bg-white shadow-2xs">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {['Team', 'Employee', 'All Projects', 'Deleted Items'].map((tab) => (
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

          {/* Search, Filter & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={
                  activeTab === 'Employee' ? 'Search by Name or EMP ID' :
                  activeTab === 'All Projects' ? 'Search by client name' :
                  'Search by team name'
                }
                value={
                  activeTab === 'Team' ? teamSearchQuery :
                  activeTab === 'Employee' ? employeeSearchQuery :
                  activeTab === 'All Projects' ? projectSearchQuery : ''
                }
                onChange={(e) => {
                  if (activeTab === 'Team') setTeamSearchQuery(e.target.value);
                  else if (activeTab === 'Employee') setEmployeeSearchQuery(e.target.value);
                  else if (activeTab === 'All Projects') setProjectSearchQuery(e.target.value);
                }}
                className="w-full pl-9 pr-3 py-2 bg-[#F3F3F5] border border-transparent rounded-[8px] text-[14px] text-[#434343] placeholder-[#434343] focus:bg-white focus:border-[#06530B] focus:outline-none transition-colors"
              />
            </div>
            <button
              onClick={() => {
                if (activeTab === 'Team') setShowTeamFilters(!showTeamFilters);
                else if (activeTab === 'Employee') setShowEmployeeFilters(!showEmployeeFilters);
                else if (activeTab === 'All Projects') setShowProjectFilters(!showProjectFilters);
              }}
              className={`px-3 py-2 bg-[#F3F3F5] border border-transparent text-[#434343] rounded-[8px] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer ${
                (activeTab === 'Team' && showTeamFilters) ||
                (activeTab === 'Employee' && showEmployeeFilters) ||
                (activeTab === 'All Projects' && showProjectFilters)
                  ? 'bg-gray-200 border-[#EAECF0]' : ''
              }`}
            >
              <Filter className="w-4 h-4" />
              {activeTab === 'All Projects' ? 'Order Filtering' : 'Filter'}
            </button>
            {/* Hide grid/table toggle for All Projects tab */}
            {activeTab !== 'All Projects' && (
              <div className="flex items-center gap-1.5 bg-[#F3F3F5] p-1 rounded-[8px]">
                <button
                  onClick={() => setCurrentViewMode('grid')}
                  className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                    currentViewMode === 'grid' ? 'bg-[#06530B] text-white shadow-2xs' : 'text-[#434343] hover:text-black'
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentViewMode('table')}
                  className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                    currentViewMode === 'table' ? 'bg-[#06530B] text-white shadow-2xs' : 'text-[#434343] hover:text-black'
                  }`}
                  title="Table View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── TEAM FILTER PANEL ── */}
        {activeTab === 'Team' && showTeamFilters && (
          <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-4 shadow-2xs mb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-wrap items-start gap-6">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Team Leader</span>
                <div className="flex flex-wrap gap-2">
                  {allTeamLeaders.map((leader) => (
                    <button
                      key={leader}
                      onClick={() => setTeamLeaderFilter(leader)}
                      className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${
                        teamLeaderFilter === leader
                          ? 'bg-[#06530b] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {leader}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── EMPLOYEE FILTER PANEL ── */}
        {activeTab === 'Employee' && showEmployeeFilters && (
          <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-4 shadow-2xs mb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-wrap items-start gap-8">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Status</span>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Active', 'Suspended', 'Inactive'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setEmployeeStatusFilter(s)}
                      className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${
                        employeeStatusFilter === s
                          ? 'bg-[#06530b] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Team</span>
                <div className="flex flex-wrap gap-2">
                  {allEmployeeTeams.map((t) => (
                    <button
                      key={t}
                      onClick={() => setEmployeeTeamFilter(t)}
                      className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${
                        employeeTeamFilter === t
                          ? 'bg-[#06530b] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Status filter pills — only for All Projects tab */}
        {activeTab === 'All Projects' && showProjectFilters && (
          <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-wrap items-center gap-3 shadow-2xs mb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Status Filter:</span>
            {['All', 'Urgent', 'WIP', 'Late', 'Delivered'].map((status) => (
              <button
                key={status}
                onClick={() => setProjectStatusFilter(status)}
                className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${
                  projectStatusFilter === status
                    ? 'bg-[#06530b] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}

        {/* ── TEAM TAB CONTENT ── */}
        {activeTab === 'Team' && (
          teamViewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTeams.map((team) => (
                <div
                  key={team.id}
                  className="bg-[#FAFAFA] border border-[#F2F2F2] rounded-[16px] p-[17px] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Team Card Header */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-sm overflow-hidden shrink-0">
                        {team.name.charAt(0)}
                      </div>
                      <h3 className="text-[18px] font-medium text-[#282828] truncate">
                        {team.name}
                      </h3>
                    </div>

                    <div className="w-full h-px bg-[#EAECF0] my-3" />

                    {/* Team Details */}
                    <div className="space-y-3.5 text-[12px]">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#0F172A]">Team Leader</span>
                        <span className="font-medium text-[#0F172A]">{team.teamLeader}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Create Date</span>
                        <span className="text-[#0F172A]">{team.createDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Total Members</span>
                        <span className="text-[#0F172A]">{team.members}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Workload</span>
                        <span className="text-[#0F172A]">{team.workload}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Active Projects</span>
                        <span className="text-[#0F172A]">{team.projects}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Last Updated</span>
                        <span className="text-[#0F172A]">{team.updated}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full h-px bg-[#EAECF0] my-3" />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2.5">
                      <button className="flex-1 h-[29px] bg-[#EF4444] hover:bg-red-600 text-white rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                      <button
                        onClick={() => handleEditTeam(team)}
                        className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" /> Edit
                      </button>
                      <Link
                        href={`/service-line/team-management/${team.id}`}
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
            <div className="w-full rounded-[16px] shadow-2xs bg-white">
              <DashboardTable
                data={filteredTeams}
                getRowKey={(team) => String(team.id)}
                columns={[
                  {
                    key: 'name',
                    header: 'Team Name',
                    render: (_, team) => (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {team.name.charAt(0)}
                        </div>
                        <span className="text-[13px] font-bold text-[#0F172A]">{team.name}</span>
                      </div>
                    )
                  },
                  { key: 'createDate', header: 'Create Date', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'teamLeader', header: 'Team Leader', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'members', header: 'Total Members', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'workload', header: 'Workload', render: (val) => <span className="text-[13px] font-bold text-[#0F172A]">{String(val)}</span> },
                  { key: 'projects', header: 'Active Projects', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'updated', header: 'Last Updated', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  {
                    key: 'id',
                    header: 'Action Menu',
                    render: (_, team) => (
                      <div className="flex items-center gap-2">
                        <Link href={`/service-line/team-management/${team.id}`} className="w-8 h-8 rounded-full flex items-center justify-center text-[#06530B] hover:bg-green-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleEditTeam(team)}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[#06530B] hover:bg-green-50 transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#EF4444] hover:bg-red-50 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )
                  }
                ]}
                caption="Teams list"
                emptyMessage="No teams found."
              />
            </div>
          )
        )}

        {/* ── EMPLOYEE TAB CONTENT ── */}
        {activeTab === 'Employee' && (
          employeeViewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredEmployees.map((member) => (
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
                      <div className={`rounded-full px-2 py-1 flex items-center gap-1.5 shrink-0 ${
                        member.status === 'ACTIVE' ? 'bg-[#06530B]/9' :
                        member.status === 'suspended' ? 'bg-orange-50' : 'bg-gray-100'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          member.status === 'ACTIVE' ? 'bg-[#06530B]' :
                          member.status === 'suspended' ? 'bg-orange-500' : 'bg-gray-400'
                        }`} />
                        <span className={`text-[11px] font-bold tracking-wider uppercase ${
                          member.status === 'ACTIVE' ? 'text-[#06530B]' :
                          member.status === 'suspended' ? 'text-orange-600' : 'text-gray-500'
                        }`}>
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
                        <span className="text-[#0F172A]">Team</span>
                        <span className="text-[#0F172A] font-medium">{member.team}</span>
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
                        href={`/service-line/employees/${member.id}/edit?returnTo=/service-line/team-management?tab=Employee`}
                        className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" /> Edit
                      </Link>
                      <Link
                        href={`/service-line/employees/${member.id}?returnTo=/service-line/team-management?tab=Employee`}
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
            <div className="w-full rounded-[16px] shadow-2xs bg-white">
              <DashboardTable
                data={filteredEmployees}
                columns={employeeColumns}
                getRowKey={(item) => String(item.id)}
                caption="All employees list"
                emptyMessage="No employees found."
              />
            </div>
          )
        )}

        {/* ── ALL PROJECTS TAB ── */}
        {activeTab === 'All Projects' && (
          <div className="w-full rounded-[16px] shadow-2xs bg-white">
            <DashboardTable
              data={filteredProjects}
              columns={[
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
              ]}
              getRowKey={(row) => row.id}
              caption="All projects across all teams"
              emptyMessage="No projects found."
            />
          </div>
        )}

        {/* ── DELETED ITEMS TAB ── */}
        {activeTab === 'Deleted Items' && (
          deletedViewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {mockDeletedTeams.map((team) => (
                <div
                  key={team.id}
                  className="bg-[#FAFAFA] border border-[#F2F2F2] rounded-[16px] p-[17px] flex flex-col justify-between hover:shadow-md transition-shadow opacity-80"
                >
                  <div>
                    {/* Team Card Header */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-[#94A3B8] flex items-center justify-center text-white font-bold text-sm overflow-hidden shrink-0">
                        {team.name.charAt(0)}
                      </div>
                      <h3 className="text-[18px] font-medium text-[#282828] truncate">
                        {team.name}
                      </h3>
                    </div>

                    <div className="w-full h-px bg-[#EAECF0] my-3" />

                    {/* Team Details */}
                    <div className="space-y-3.5 text-[12px]">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#0F172A]">Team Leader</span>
                        <span className="font-medium text-[#0F172A]">{team.teamLeader}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Create Date</span>
                        <span className="text-[#0F172A]">{team.createDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Total Members</span>
                        <span className="text-[#0F172A]">{team.members}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Workload</span>
                        <span className="text-[#0F172A]">{team.workload}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Active Projects</span>
                        <span className="text-[#0F172A]">{team.projects}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Deleted On</span>
                        <span className="text-red-400 font-medium">{team.deletedOn}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full h-px bg-[#EAECF0] my-3" />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2.5">
                      <button className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer">
                        <Edit2 className="w-4 h-4" /> Edit
                      </button>
                      <button className="flex-1 h-[29px] bg-[#06530B] hover:bg-[#05290b] text-white rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer">
                        <RotateCcw className="w-4 h-4" /> Restore
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full rounded-[16px] shadow-2xs bg-white">
              <DashboardTable
                data={mockDeletedTeams}
                getRowKey={(team) => String(team.id)}
                columns={[
                  {
                    key: 'name',
                    header: 'Team Name',
                    render: (_, team) => (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#94A3B8] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {team.name.charAt(0)}
                        </div>
                        <span className="text-[13px] font-bold text-[#0F172A]">{team.name}</span>
                      </div>
                    )
                  },
                  { key: 'createDate', header: 'Create Date', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'teamLeader', header: 'Team Leader', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'members', header: 'Total Members', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'workload', header: 'Workload', render: (val) => <span className="text-[13px] font-bold text-[#0F172A]">{String(val)}</span> },
                  { key: 'projects', header: 'Active Projects', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
                  { key: 'deletedOn', header: 'Deleted On', render: (val) => <span className="text-[13px] font-medium text-red-400">{String(val)}</span> },
                  {
                    key: 'id',
                    header: 'Action Menu',
                    render: (val) => (
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#06530B] hover:bg-green-50 transition-colors cursor-pointer">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="flex items-center gap-1.5 px-3 h-8 rounded-[6px] bg-[#06530B] hover:bg-[#05290b] text-white text-xs font-semibold transition-colors cursor-pointer">
                          <RotateCcw className="w-3.5 h-3.5" /> Restore
                        </button>
                      </div>
                    )
                  }
                ]}
                caption="Deleted teams list"
                emptyMessage="No deleted teams found."
              />
            </div>
          )
        )}

        {/* Create / Edit Team Modal */}
        <CreateTeamModal
          isOpen={isCreatePanelOpen}
          onClose={() => {
            setIsCreatePanelOpen(false);
            setTeamToEdit(null);
          }}
          teamData={teamToEdit}
        />

        {/* Date Range Calendar Modal */}
        <DateRangeCalendarModal
          isOpen={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)}
          initialRange={dateRange}
          onApplyRange={(newRange) => setDateRange(newRange)}
        />

      </div>
    </div>
  );
}

export default function TeamManagementPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <TeamManagementContent />
    </Suspense>
  );
}
