"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users, User, UserX, Briefcase, Clock, Activity, TrendingUp, Download, Plus, Search, ChevronDown, Eye
} from 'lucide-react';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';

const mockEmployees = [
  { id: 1, name: 'Wrajakishore Loy', handle: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Chintamani Pavithran', handle: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', serviceLine: 'Framer', team: 'FS', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Yashpal Patachli', handle: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Supratik Chaudhry', handle: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', serviceLine: 'SM', team: 'CS', status: 'SUSPENDED', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Punyasloka Megana', handle: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', serviceLine: 'Squarespace', team: 'SM', status: 'INACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
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

export default function EmployeesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = mockEmployees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <Link href={`/service-line/employees/${val}`} className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
          <Eye className="w-4 h-4" /> View
        </Link>
      )
    }
  ];

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar">
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
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-[#E2E8F0] bg-white rounded-xl text-xs md:text-sm font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm">
              <Download className="w-4 h-4" /> Export
            </button>
            <Link
              href="/service-line/employees/create"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" /> Create Employee
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <StatCard icon={Users} title="Total Employees" value="1,248" trend="+2%" />
          <StatCard icon={User} title="Active" value="1,182" />
          <StatCard icon={UserX} title="Inactive" value="42" />
          <StatCard icon={Briefcase} title="Suspended" value="24" />
          <StatCard icon={Clock} title="On Leave" value="12" />
          <StatCard icon={Activity} title="Online Now" value="856" hasDot={true} />
        </div>

        {/* Main Content Area */}
        <div className="overflow-hidden flex flex-col ">
          {/* Controls */}
          <div className="p-5 flex items-center justify-between border border-[#E2E8F0] p-5 rounded-xl mb-8">
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-[#06530B] text-white rounded-xl text-sm font-bold shadow-sm">
                All Employees
              </button>
              <button className="px-5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                All Service Lines <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <button className="px-5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                All Departments <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <button className="px-5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                All Teams <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>

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
          </div>

          {/* DashboardTable Component */}
          <DashboardTable
            data={filteredEmployees}
            columns={columns}
            getRowKey={(item) => String(item.id)}
            caption="Employees list"
            emptyMessage="No employees found."
          />
        </div>

      </div>
    </div>
  );
}
