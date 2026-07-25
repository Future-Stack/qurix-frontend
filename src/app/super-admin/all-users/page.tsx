"use client";

import React from 'react';
import { Search, Filter, Eye, UserPlus, FileDown } from 'lucide-react';
import Link from 'next/link';

const mockUsers = [
  { name: 'Vrajakishore Loy', username: '@julie_mutie', empId: 'KNC-8821', designation: 'Node JS Developer', email: 'tanya.hill@example.com', status: 'active', joined: '2020-08-08', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Chintamani Pavithran', username: '@dumakaka', empId: 'KNC-8821', designation: 'ROR Developer', email: 'debbie.baker@example.com', status: 'active', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Yashpal Patachli', username: '@aisha_amani', empId: 'KNC-8821', designation: 'React JS Developer', email: 'tim.jennings@example.com', status: 'active', joined: '2025-12-12', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Supratik Chaudhry', username: '@katwa0', empId: 'KNC-8821', designation: 'Project Manager', email: 'bill.sanders@example.com', status: 'suspended', joined: '2022-10-10', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Punyasloka Megana', username: '@anitafaraji', empId: 'KNC-8821', designation: 'React JS Developer', email: 'alma.lawson@example.com', status: 'inactive', joined: '2021-01-01', lastLogin: '24 mins ago', avatar: 'https://i.pravatar.cc/150?u=5' },
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

export default function AllUsersPage() {
  return (
    <div className="h-full max-w-full overflow-hidden m-2 md:m-4 md:mr-4">
      <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] flex flex-col">
        
        {/* Header Section */}
        <div className="p-4 md:p-8 pb-4 md:pb-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#E2E8F0] shrink-0 gap-4 md:gap-0">
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">All Users</h1>
            <p className="text-sm text-[#64748B]">Manage and view all registered users in the platform.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2E8F0] text-[#475569] rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
              <FileDown className="w-4 h-4" /> Export CSV
            </button>
            <Link 
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold shadow-sm transition-colors"
            >
              <UserPlus className="w-4 h-4" /> Add User
            </Link>
          </div>
        </div>

        {/* Toolbar */}
        <div className="p-4 md:p-6 flex flex-col xl:flex-row items-start xl:items-center justify-between shrink-0 gap-4 xl:gap-0">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm font-bold text-[#0F172A]">
            <span>Total Users: <span className="text-[#06530B]">1,248</span></span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Active: <span className="text-[#00AB0C]">1,102</span></span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full xl:w-auto">
            <div className="relative w-full sm:w-auto">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search users..." 
                className="pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-full sm:w-72"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#475569] hover:bg-gray-100 transition-colors w-full sm:w-auto">
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead className="sticky top-0 bg-white shadow-sm z-10">
              <tr className="border-y border-[#E2E8F0] bg-[#F8FAFC]">
                <th className="px-8 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Profile</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Emp id</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Designation</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">E-mail</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Joining Date</th>
                <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Last login</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user, i) => (
                <tr key={i} className="border-b border-[#E2E8F0] hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                      <div>
                        <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{user.name}</div>
                        <div className="text-[11px] text-[#64748B]">{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{user.empId}</td>
                  <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{user.designation}</td>
                  <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{user.email}</td>
                  <td className="px-6 py-4"><StatusBadge status={user.status} /></td>
                  <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{user.joined}</td>
                  <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{user.lastLogin}</td>
                  <td className="px-8 py-4">
                    <button className="flex items-center gap-1 text-[#64748B] hover:text-[#06530B] font-bold text-[13px] transition-colors">
                      <Eye className="w-4 h-4" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
