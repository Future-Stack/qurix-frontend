"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FolderOpen, AlertTriangle, CheckCircle2, Calendar, MessageSquare, 
  Search, Filter, Eye, Plus, ChevronDown, Monitor, Clock, Users, Briefcase
} from 'lucide-react';
import { CreateServiceLineModal } from '@/components/ui/Modal/CreateServiceLineModal';
import Image from 'next/image';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import router from 'next/router';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import StatsCard from '@/components/employee-team-leader/shared/StatsCard';

const mockServiceLines = [
  { id: '1', name: 'FSD', icon: 'M', iconBg: 'bg-blue-100', iconColor: 'text-blue-500', leadName: 'Imran', leadAvatar: 'https://i.pravatar.cc/150?u=1', teams: '4 Teams', employees: '42 Members', workload: '$3615', projects: '35 Projects', updated: '01/01/2026' },
  { id: '2', name: 'Shopify', icon: 'S', iconBg: 'bg-red-100', iconColor: 'text-red-500', leadName: 'Leslie Alexander', leadAvatar: 'https://i.pravatar.cc/150?u=2', teams: '4 Teams', employees: '42 Members', workload: '$4640', projects: '35 Projects', updated: '16/08/2023' },
  { id: '3', name: 'Squarespace', icon: 'Sq', iconBg: 'bg-gray-100', iconColor: 'text-gray-500', leadName: 'Arlene McCoy', leadAvatar: 'https://i.pravatar.cc/150?u=3', teams: '4 Teams', employees: '42 Members', workload: '$6461', projects: '35 Projects', updated: '01/01/2026' },
  { id: '4', name: 'Webflow', icon: 'W', iconBg: 'bg-blue-50', iconColor: 'text-blue-400', leadName: 'Floyd Miles', leadAvatar: 'https://i.pravatar.cc/150?u=4', teams: '4 Teams', employees: '42 Members', workload: '$10176', projects: '35 Projects', updated: '16/08/2023' },
  { id: '5', name: 'WordPress', icon: 'Wp', iconBg: 'bg-red-100', iconColor: 'text-red-500', leadName: 'Savannah Nguyen', leadAvatar: 'https://i.pravatar.cc/150?u=5', teams: '4 Teams', employees: '42 Members', workload: '$5969', projects: '35 Projects', updated: '12/06/2020' },
  { id: '6', name: 'Framer', icon: 'F', iconBg: 'bg-black', iconColor: 'text-white', leadName: 'Jerome Bell', leadAvatar: 'https://i.pravatar.cc/150?u=6', teams: '4 Teams', employees: '42 Members', workload: '$7188', projects: '35 Projects', updated: '28/10/2012' },
  { id: '7', name: 'H&C', icon: 'C', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-500', leadName: 'Jacob Jones', leadAvatar: 'https://i.pravatar.cc/150?u=7', teams: '4 Teams', employees: '42 Members', workload: '$5860', projects: '35 Projects', updated: '16/08/2013' },
];

function StatCard({ icon: Icon, title, value, iconBg, iconColor }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between w-full h-[140px] shadow-sm">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#E2E8F0] shadow-sm mb-4">
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div>
        <div className="text-[28px] font-bold text-[#0F172A] leading-none mb-1">{value}</div>
        <div className="text-[12px] font-medium text-[#64748B]">{title}</div>
      </div>
    </div>
  );
}
type ServiceLine = (typeof mockServiceLines)[number];
export default function ServiceLineManagementDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredServiceLines = mockServiceLines.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const serviceLineColumns: Column<ServiceLine>[] = [
    {
      key: "name",
      header: "Service Line Name",
      render: (_, sl) => (
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full ${sl.iconBg} ${sl.iconColor} flex items-center justify-center font-bold text-xs`}
          >
            {sl.icon}
          </div>
  
          <span className="text-[13px] font-bold text-[#0F172A]">
            {sl.name}
          </span>
        </div>
      ),
    },
  
    {
      key: "leadName",
      header: "Service Line Lead",
      render: (_, sl) => (
        <div className="flex items-center gap-2">
         <Image
          src={sl.leadAvatar}
          alt={sl.leadName}
          width={24}
          height={24}
          unoptimized
          className="rounded-full object-cover"
        />
  
          <span className="text-[13px] font-medium text-[#475569]">
            {sl.leadName}
          </span>
        </div>
      ),
    },
  
    {
      key: "teams",
      header: "Total Teams",
    },
  
    {
      key: "employees",
      header: "Total Employee",
    },
  
    {
      key: "workload",
      header: "Workload",
      render: (value) => (
        <span className="font-bold text-[#0F172A]">
          {String(value)}
        </span>
      ),
    },
  
    {
      key: "projects",
      header: "Active Projects",
    },
  
    {
      key: "updated",
      header: "Last Updated",
    },
  
    {
      key: "id",
      header: "Actions",
      render: (value) => (
        <Link
          href={`/super-admin/service-line-management/${value}`}
          className="flex items-center gap-1 text-[#06530B] font-bold text-xs hover:underline"
        >
          <Eye className="w-4 h-4" aria-label="View service line"
/>
          View
        </Link>
      ),
    },
  ];
  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full overflow-y-auto no-scrollbar">
        {/* <div className="p-8 pb-12 max-w-full mx-auto"> */}

          {/* Header */}
          <div className="flex flex-col md:flex-row gap-3 justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-4 border-green-500 p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                  <span className="z-10">A</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Welcome back, Admin</h1>
                <p className="text-sm text-[#64748B]">Monday, July 14, 2026</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> Create Service Line
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <StatsCard icon={Monitor} title="Total Service lines" value="240" iconColor="#4F46E5" iconBgColor="#EEF2FF"/>
            <StatsCard icon={Users} title="Total Teams" value="70" iconBgColor="#FEF2F2" iconColor="#EF4444"/>
            <StatsCard icon={CheckCircle2} title="Running Projects" value="12" iconBgColor="#F0FDF4" iconColor="#06530B"/>
            <StatsCard icon={Briefcase} title="Omega Force Total Workload" value="8" iconBgColor="#FFFBEB" iconColor="#F59E0B"/>
            <StatsCard
                        title="Omega Force Total Cancellations"
                        value={43}
                        icon={MessageSquare}
                        iconBgColor="#f5f3ff"
                        iconColor="#a855f7"
                      />
          </div>

          {/* Main Content Area */}
          <div className=" overflow-hidden">
            {/* Controls */}
            <div className="p-4 flex flex-col md:flex-row gap-3 items-center justify-between rounded-[16px] border border-[#E2E8F0] mb-5">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] text-white rounded-xl text-sm font-bold shadow-sm transition-colors">
                  All Service line <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by Service Name..."
                    className="pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-64"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#475569] hover:bg-gray-100 transition-colors">
                  <Filter className="w-4 h-4" /> Service line Filter
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 min-h-0 overflow-y-auto rounded-[16px] shadow-2xs bg-white no-scrollbar mb-8">
                     <DashboardTable
                      data={filteredServiceLines}
                      columns={serviceLineColumns}
                      caption="All Service Lines"
                      emptyMessage="No service line found."
                      getRowKey={(row) => row.id}
                     
                    />
                  </div>
            
            {/* <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Service Line Name</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Service Line Lead</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Total Teams</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Total Employee</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Workload</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Active Projects</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Last Updated</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockServiceLines.map((sl, i) => (
                    <tr key={i} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${sl.iconBg} ${sl.iconColor} flex items-center justify-center font-bold text-xs`}>
                            {sl.icon}
                          </div>
                          <span className="text-[13px] font-bold text-[#0F172A]">{sl.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img src={sl.leadAvatar} alt={sl.leadName} className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-[13px] font-medium text-[#475569]">{sl.leadName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{sl.teams}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{sl.employees}</td>
                      <td className="px-6 py-4 text-[13px] font-bold text-[#0F172A]">{sl.workload}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{sl.projects}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{sl.updated}</td>
                      <td className="px-6 py-4">
                        <Link href={`/super-admin/service-line-management/${sl.id}`} className="flex items-center gap-1 text-[#06530B] font-bold text-xs hover:underline">
                          <Eye className="w-4 h-4" /> View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </div>
        {/* </div> */}
      </div>
      <CreateServiceLineModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
}
