"use client";

import React from 'react';
import { Search, ChevronDown, Eye, FileDown, Plus, Users, UserCheck, UserX, UserSquare, UserPlus, Radio } from 'lucide-react';
import Link from 'next/link';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
type Employee = (typeof mockEmployees)[number];
const mockEmployees = [
  { id: '1', name: 'Vrajakishore Loy', username: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', serviceLine: 'Web flow', team: 'CM', status: 'active', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Chintamani Pavithran', username: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', serviceLine: 'Framer', team: 'FS', status: 'active', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Yashpal Patachli', username: '@aisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', serviceLine: 'FSB', team: 'CM', status: 'active', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: '4', name: 'Supratik Chaudhry', username: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', serviceLine: 'SM', team: 'CD', status: 'suspended', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: '5', name: 'Punyasloka Megana', username: '@anitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', serviceLine: 'Squarespace', team: 'DW', status: 'inactive', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

function StatusBadge({ status }: { status: string }) {
  const dotColor = status === 'active' ? 'bg-[#00AB0C]' : status === 'suspended' ? 'bg-[#EF4444]' : 'bg-[#475569]';
  const textColor = status === 'active' ? 'text-[#00AB0C]' : status === 'suspended' ? 'text-[#EF4444]' : 'text-[#475569]';
  
  return (
    <div className={`flex items-center gap-1.5 font-bold text-[11px] ${textColor}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {status.toUpperCase()}
    </div>
  );
}

function StatCard({ icon: Icon, title, value, trend, isOnline }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between w-full h-[120px] shadow-sm relative">
      <div className="flex justify-between items-start">
        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
          <Icon className="w-4 h-4" />
        </div>
        {trend && (
          <div className="text-[11px] font-bold text-green-600">
            {trend}
          </div>
        )}
        {isOnline && (
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        )}
      </div>
      <div>
        <div className="text-[12px] font-bold text-[#64748B] mb-0.5">{title}</div>
        <div className="text-[24px] font-extrabold text-[#0F172A] leading-none">{value}</div>
      </div>
    </div>
  );
}

export default function AllEmployeePage() {

  const employeeColumns: Column<Employee>[] = [
  {
    key: "name",
    header: "Profile",
    render: (_, emp) => (
      <div className="flex items-center gap-3">
        <img
          src={emp.avatar}
          alt={emp.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="text-[13px] font-bold text-[#0F172A]">
            {emp.name}
          </p>

          <p className="text-[11px] text-[#64748B]">
            {emp.username}
          </p>
        </div>
      </div>
    ),
  },

  {
    key: "empId",
    header: "Emp ID",
    render: (value) => (
      <span className="text-[13px] font-medium text-[#475569]">
        {String(value)}
      </span>
    ),
  },

  {
    key: "designation",
    header: "Designation",
    render: (value) => (
      <span className="text-[13px] font-medium text-[#475569]">
        {String(value)}
      </span>
    ),
  },

  {
    key: "email",
    header: "E-mail",
    render: (value) => (
      <span className="text-[13px] font-medium text-[#475569]">
        {String(value)}
      </span>
    ),
  },

  {
    key: "serviceLine",
    header: "Service Line",
    render: (value) => (
      <span className="text-[13px] font-medium text-[#475569]">
        {String(value)}
      </span>
    ),
  },

  {
    key: "team",
    header: "Team",
    render: (value) => (
      <span className="text-[13px] font-medium text-[#475569]">
        {String(value)}
      </span>
    ),
  },

  {
    key: "status",
    header: "Status",
    render: (value) => (
      <StatusBadge status={String(value)} />
    ),
  },

  {
    key: "lastLogin",
    header: "Last Login",
    render: (value) => (
      <span className="text-[13px] font-medium text-[#475569]">
        {String(value)}
      </span>
    ),
  },

  {
    key: "id",
    header: "Action",
    render: (_, emp) => (
      <Link
        href={`/super-admin/all-employee/${emp.id}`}
        className="flex items-center gap-1 text-xs font-bold text-[#64748B] transition-colors hover:text-[#0F172A]"
      >
        <Eye className="h-4 w-4" />
        View
      </Link>
    ),
  },
];
  return (
    <div className="h-full max-w-full overflow-hidden m-2 md:m-4 md:mr-4">
      <div className="h-full flex flex-col">
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-full mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-4 border-green-500 p-0.5 flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                    <span className="z-10">C</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Omega Force Employee Management</h1>
                  <p className="text-sm text-[#64748B]">Monday, July 14, 2026</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E2E8F0] text-[#64748B] rounded-xl text-sm font-bold transition-colors shadow-sm hover:bg-gray-50">
                  <FileDown className="w-4 h-4" /> Export
                </button>
                <Link 
                  href="/super-admin/all-employee/create"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Create Employee
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              <StatCard icon={Users} title="Total Employees" value="1,248" trend="+4.7%" />
              <StatCard icon={UserCheck} title="Active" value="1,182" />
              <StatCard icon={UserX} title="Inactive" value="66" />
              <StatCard icon={UserSquare} title="Team Leaders" value="142" />
              <StatCard icon={UserPlus} title="New (Month)" value="24" />
              <StatCard icon={Radio} title="Online Now" value="856" isOnline={true} />
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-3xl overflow-hidden mt-4">
              {/* Controls */}
              <div className="pb-4 flex flex-col xl:flex-row items-start xl:items-center justify-between border border-[#E2E8F0] p-4 rounded-[16px] gap-4 xl:gap-0">
                <div className="flex gap-2 w-full overflow-x-auto no-scrollbar pb-2 xl:pb-0">
                  <button className="px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors bg-[#06530B] text-white">
                    All Employees
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50">
                    All Departments <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50">
                    All Teams <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50">
                    All Service Line <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="relative w-full xl:w-auto">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search by Name or ID..." 
                    className="pl-9 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-full sm:w-64"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="w-full overflow-x-auto mt-4">
                <DashboardTable
                  data={mockEmployees}
                  columns={employeeColumns}
                  caption="All Employees"
                  emptyMessage="No employees found."
                  getRowKey={(row) => row.id}
                />
                {/* <table className="w-full text-left border-collapse min-w-max">
                  <thead>
                    <tr className="border-b border-[#E2E8F0]">
                      <th className="px-2 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Profile</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Emp id</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Designation</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">E-mail</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Service Line</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Team</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Last login</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockEmployees.map((emp, i) => (
                      <tr key={i} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                        <td className="px-2 py-4">
                          <div className="flex items-center gap-3">
                            <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{emp.name}</div>
                              <div className="text-[11px] text-[#64748B]">{emp.username}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.empId}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.designation}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.email}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.serviceLine}</td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.team}</td>
                        <td className="px-6 py-4"><StatusBadge status={emp.status} /></td>
                        <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{emp.lastLogin}</td>
                        <td className="px-6 py-4">
                          <Link 
                            href={`/super-admin/all-employee/${emp.id}`}
                            className="flex items-center gap-1 text-[#64748B] hover:text-[#0F172A] font-bold text-xs transition-colors"
                          >
                            <Eye className="w-4 h-4" /> View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
