"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users, User, UserX, Briefcase, Clock, Activity, TrendingUp, Download, Plus, Search, ChevronDown, Eye, LayoutGrid, List, Edit2, RotateCcw
} from 'lucide-react';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';

const mockEmployees = [
  { id: 1, name: 'Wrajakishore Loy', handle: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Chintamani Pavithran', handle: '@dumakaka', empId: 'KNC-8822', designation: 'ROR Developer', email: 'debbie.baker@example.com', serviceLine: 'Framer', team: 'FS', status: 'ACTIVE', lastLogin: '1 hour ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Yashpal Patachli', handle: '@nisha_amani', empId: 'KNC-8823', designation: 'React JS Developer', email: 'tim.jennings@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '5 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Supratik Chaudhry', handle: '@katwa0', empId: 'KNC-8824', designation: 'Project Manager', email: 'bill.sanders@example.com', serviceLine: 'SM', team: 'CS', status: 'SUSPENDED', lastLogin: '2 days ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Punyasloka Megana', handle: '@unitafaraji', empId: 'KNC-8825', designation: 'React JS Developer', email: 'alma.lawson@example.com', serviceLine: 'Squarespace', team: 'SM', status: 'INACTIVE', lastLogin: '3 weeks ago', avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'Hossain Mishu', handle: '@mishu_ux', empId: 'KNC-8826', designation: 'UI/UX Specialist', email: 'hossain@softvence.com', serviceLine: 'FSD', team: 'FS', status: 'ACTIVE', lastLogin: 'Just now', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { id: 7, name: 'Sofia Ahmed', handle: '@sofia_a', empId: 'KNC-8827', designation: 'Node JS Developer', email: 'sofia@softvence.com', serviceLine: 'Framer', team: 'CM', status: 'ACTIVE', lastLogin: '10 mins ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
  { id: 8, name: 'Sarah Jenkins', handle: '@sarah_j', empId: 'KNC-8828', designation: 'Project Manager', email: 'sarah@softvence.com', serviceLine: 'FSD', team: 'FS', status: 'ACTIVE', lastLogin: '1 hour ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
];

function StatCard({ icon: Icon, title, value, trend, hasDot }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between w-full h-[140px] shadow-sm relative">
      <div className="flex justify-between items-start">
        <Icon className="w-6 h-6 text-[#94A3B8]" />
        {trend && (
          <div className="flex items-center gap-1 text-[13px] font-bold text-[#00AB0C]">
            <TrendingUp className="w-4 h-4" /> {trend}
          </div>
        )}
        {hasDot && (
          <div className="w-2.5 h-2.5 bg-[#00AB0C] rounded-full absolute top-6 right-6"></div>
        )}
      </div>
      <div>
        <div className="text-[13px] font-medium text-[#64748B] mb-1">{title}</div>
        <div className="text-[28px] font-bold text-[#00AB0C] leading-none">{value}</div>
      </div>
    </div>
  );
}

export default function SuperAdminEmployeesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedServiceLine, setSelectedServiceLine] = useState('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedTeam, setSelectedTeam] = useState('All');

  // Extract unique values dynamically for dropdowns
  const serviceLines = ['All', ...Array.from(new Set(mockEmployees.map(e => e.serviceLine)))];
  const departments = ['All', ...Array.from(new Set(mockEmployees.map(e => e.designation)))];
  const teams = ['All', ...Array.from(new Set(mockEmployees.map(e => e.team)))];

  const handleResetFilters = () => {
    setSelectedServiceLine('All');
    setSelectedDepartment('All');
    setSelectedTeam('All');
    setSearchQuery('');
  };

  const hasActiveFilters = 
    selectedServiceLine !== 'All' ||
    selectedDepartment !== 'All' ||
    selectedTeam !== 'All' ||
    searchQuery !== '';

  const filteredEmployees = mockEmployees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesServiceLine =
      selectedServiceLine === 'All' || emp.serviceLine === selectedServiceLine;

    const matchesDepartment =
      selectedDepartment === 'All' || emp.designation === selectedDepartment;

    const matchesTeam =
      selectedTeam === 'All' || emp.team === selectedTeam;

    return matchesSearch && matchesServiceLine && matchesDepartment && matchesTeam;
  });

  const columns: Column<(typeof mockEmployees)[0]>[] = [
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
    { key: 'serviceLine', header: 'Service Line', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'team', header: 'Team', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    { key: 'status', header: 'Status', render: (_, item) => <StatusBadge status={item.status} /> },
    { key: 'lastLogin', header: 'Last Login', render: (val) => <span className="text-[13px] font-medium text-[#475569]">{String(val)}</span> },
    {
      key: 'id',
      header: 'Action',
      render: (val) => (
        <Link href={`/super-admin/employees/${val}?returnTo=/super-admin/employees`} className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
          <Eye className="w-4 h-4" /> View
        </Link>
      )
    }
  ];

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar p-4 md:p-6 lg:p-[30px]">
      <div className="max-w-full mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
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
              <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-1">Full Stack Development (FSD)</h1>
              <p className="text-xs md:text-sm text-[#64748B]">Monday, July 14, 2026 -</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-[#E2E8F0] bg-white rounded-xl text-xs md:text-sm font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
              <Download className="w-4 h-4" /> Export
            </button>
            <Link
              href="/service-line/employees/create?returnTo=/super-admin/employees"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Create Employee
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <StatCard icon={Users} title="Total Employees" value="1,248" trend="+2%" />
          <StatCard icon={User} title="Active" value="1,182" />
          <StatCard icon={UserX} title="Inactive" value="42" />
          <StatCard icon={Briefcase} title="Suspended" value="24" />
          <StatCard icon={Clock} title="On Leave" value="12" />
          <StatCard icon={Activity} title="Online Now" value="856" hasDot={true} />
        </div>

        {/* Main Content Area */}
        <div className="overflow-hidden flex flex-col">
          {/* Controls Bar with Functional Dropdowns */}
          <div className="p-5 flex flex-wrap items-center justify-between border border-[#E2E8F0] rounded-xl mb-8 gap-4 bg-white">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleResetFilters}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                  !hasActiveFilters
                    ? 'bg-[#06530B] text-white'
                    : 'bg-gray-100 text-[#475569] hover:bg-gray-200'
                }`}
              >
                All Employees
              </button>

              {/* Service Line Dropdown Filter */}
              <div className="relative">
                <select
                  value={selectedServiceLine}
                  onChange={(e) => setSelectedServiceLine(e.target.value)}
                  className={`pl-4 pr-9 py-2.5 border text-sm font-bold rounded-xl appearance-none cursor-pointer transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-[#06530B] ${
                    selectedServiceLine !== 'All'
                      ? 'bg-green-50 border-[#06530B] text-[#06530B]'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  {serviceLines.map((sl) => (
                    <option key={sl} value={sl}>
                      {sl === 'All' ? 'All Service Lines' : sl}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* Department / Designation Dropdown Filter */}
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className={`pl-4 pr-9 py-2.5 border text-sm font-bold rounded-xl appearance-none cursor-pointer transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-[#06530B] ${
                    selectedDepartment !== 'All'
                      ? 'bg-green-50 border-[#06530B] text-[#06530B]'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === 'All' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* Team Dropdown Filter */}
              <div className="relative">
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className={`pl-4 pr-9 py-2.5 border text-sm font-bold rounded-xl appearance-none cursor-pointer transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-[#06530B] ${
                    selectedTeam !== 'All'
                      ? 'bg-green-50 border-[#06530B] text-[#06530B]'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
                >
                  {teams.map((t) => (
                    <option key={t} value={t}>
                      {t === 'All' ? 'All Teams' : `Team: ${t}`}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* Active Filter Clear Tag */}
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="px-3 py-2 text-xs font-semibold text-red-600 hover:text-red-800 flex items-center gap-1 bg-red-50 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Clear Filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Name or ID..."
                  className="pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-64"
                />
              </div>

              {/* Grid / Table View Switcher */}
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

          {/* Conditional Grid or Table View */}
          {viewMode === 'grid' ? (
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
                        member.status === 'SUSPENDED' ? 'bg-orange-50' : 'bg-gray-100'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          member.status === 'ACTIVE' ? 'bg-[#06530B]' :
                          member.status === 'SUSPENDED' ? 'bg-orange-500' : 'bg-gray-400'
                        }`} />
                        <span className={`text-[11px] font-bold tracking-wider uppercase ${
                          member.status === 'ACTIVE' ? 'text-[#06530B]' :
                          member.status === 'SUSPENDED' ? 'text-orange-600' : 'text-gray-500'
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
                        <span className="text-[#0F172A]">Email</span>
                        <span className="text-[#0F172A] truncate max-w-[170px]">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Designation</span>
                        <span className="text-[#0F172A]">{member.designation}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A]">Service Line</span>
                        <span className="text-[#0F172A] font-medium">{member.serviceLine}</span>
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
                        href={`/super-admin/employees/${member.id}/edit?returnTo=/super-admin/employees`}
                        className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" /> Edit
                      </Link>
                      <Link
                        href={`/super-admin/employees/${member.id}?returnTo=/super-admin/employees`}
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
            <DashboardTable
              data={filteredEmployees}
              columns={columns}
              getRowKey={(item) => String(item.id)}
              caption="Employees list"
              emptyMessage="No employees found."
            />
          )}
        </div>

      </div>
    </div>
  );
}
