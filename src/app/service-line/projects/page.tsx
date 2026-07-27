"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Eye, Search, Clock } from 'lucide-react';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';

const mockProjectsList = [
  { id: '1', orderId: 'FO822580...', client: 'RetailCo', profile: 'code_tribe_fiverr', team: 'Innosight Design', status: 'WIP', value: '$3,615', seconds: 293153 },
  { id: '2', orderId: 'FO2228CA90708', client: 'Acme Corp', profile: 'softvence_official', team: 'Future Stack', status: 'Urgent', value: '$4,640', seconds: 124500 },
  { id: '3', orderId: 'FO82252...', client: 'Tech Wide', profile: 'code_tribe_fiverr', team: 'Bits Wise', status: 'PLANING', value: '$2,100', seconds: 432000 },
  { id: '4', orderId: 'FO722BD311...', client: 'Cyber Monks', profile: 'softvence_official', team: 'Cyber Monks', status: 'Delivered', value: '$5,800', seconds: 0 },
];

export default function ServiceLineProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredProjects = mockProjectsList.filter(p => {
    const matchesSearch = p.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.profile.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || p.status.toUpperCase() === statusFilter.toUpperCase();
    return matchesSearch && matchesStatus;
  });

  const columns: Column<(typeof mockProjectsList)[0]>[] = [
    { key: 'orderId', header: 'Order ID', render: (val) => <span className="font-bold text-[#06530B]">{String(val)}</span> },
    { key: 'client', header: 'Client Name', render: (val) => <span className="font-semibold text-[#0F172A]">{String(val)}</span> },
    { key: 'profile', header: 'Profile Name', render: (val) => <span className="text-[#475569]">{String(val)}</span> },
    { key: 'team', header: 'Team', render: (val) => <span className="text-[#475569]">{String(val)}</span> },
    { key: 'status', header: 'Status', render: (_, item) => <StatusBadge status={item.status} /> },
    { key: 'value', header: 'Value', render: (val) => <span className="font-bold text-[#0F172A]">{String(val)}</span> },
    { key: 'seconds', header: 'Timeline', render: (_, item) => <CountdownTimer initialSeconds={item.seconds} /> },
    {
      key: 'id',
      header: 'Actions',
      render: (val) => (
        <Link 
          href={`/service-line/projects/${val}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06530B] hover:text-[#00AB0C] transition-colors cursor-pointer"
        >
          <Eye className="w-4 h-4" /> View
        </Link>
      )
    }
  ];

  return (
    <div className="h-full max-w-full overflow-hidden p-4 md:p-6">
      <div className="h-full overflow-y-auto no-scrollbar">
        <div className="pb-12 w-full max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E2E8F0] pb-4 mb-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-0.5">Projects Management</h1>
              <p className="text-xs md:text-sm text-[#64748B]">Service Line Panel</p>
            </div>
            <div>
              <Link 
                href="/service-line/projects/create"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" /> New Project
              </Link>
            </div>
          </div>

          {/* Controls & Filters */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col">
            <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E2E8F0]">
              
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..." 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-[#E2E8F0] rounded-xl text-xs focus:bg-white focus:border-[#00AB0C] focus:outline-none"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
                {['ALL', 'PLANING', 'WIP', 'URGENT', 'DELIVERED'].map(status => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      statusFilter === status 
                        ? 'bg-[#06530B] text-white shadow-xs' 
                        : 'bg-gray-50 text-[#64748B] hover:bg-gray-100'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

            </div>

            {/* DashboardTable Component */}
            <DashboardTable 
              data={filteredProjects}
              columns={columns}
              getRowKey={(item) => item.id}
              caption="Projects list"
              emptyMessage="No projects found."
            />
          </div>

        </div>
      </div>
    </div>
  );
}
