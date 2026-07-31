"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users, User, UserX, Briefcase, Clock, Activity, Download, Plus, Search, ChevronDown, Eye
} from 'lucide-react';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';

const mockEmployees = [
  { id: '1', name: 'Wrajakishore Loy', handle: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Chintamani Pavithran', handle: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', serviceLine: 'Framer', team: 'FS', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Yashpal Patachli', handle: '@nisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', serviceLine: 'FSD', team: 'CM', status: 'ACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: '4', name: 'Supratik Chaudhry', handle: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', serviceLine: 'SM', team: 'CS', status: 'SUSPENDED', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: '5', name: 'Punyasloka Megana', handle: '@unitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', serviceLine: 'Squarespace', team: 'SM', status: 'INACTIVE', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

export default function SuperAdminAllEmployeesPage() {
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
        <Link href={`/super-admin/all-employee/${val}`} className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors">
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
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-1">All Employees</h1>
            <p className="text-xs md:text-sm text-[#64748B]">Super Admin Panel</p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link
              href="/super-admin/all-employee/create"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" /> Create Employee
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="overflow-hidden flex flex-col bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
          {/* Controls */}
          <div className="p-5 flex items-center justify-between border-b border-[#E2E8F0]">
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-[#06530B] text-white rounded-xl text-sm font-bold shadow-sm">
                All Employees
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
            getRowKey={(item) => item.id}
            caption="All Employees list"
            emptyMessage="No employees found."
          />
        </div>

      </div>
    </div>
  );
}
