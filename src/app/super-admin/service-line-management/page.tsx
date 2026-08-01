"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Plus, Search, Filter, Eye, Edit2, Trash2, Calendar, LayoutGrid, List, RotateCcw,
  Monitor, Users, CheckCircle2, Briefcase, MessageSquare
} from 'lucide-react';
import { CreateServiceLineModal } from '@/components/ui/Modal/CreateServiceLineModal';
import { Column } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import StatsCard from '@/components/employee-team-leader/shared/StatsCard';

const mockServiceLines = [
  { id: '1', name: 'FSD', icon: 'M', iconBg: 'bg-blue-100', iconColor: 'text-blue-500', leadName: 'Imran', leadAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', teams: '4 Teams', employees: '42 Members', workload: '$10176', projects: '35 Projects', updated: '16/08/2013' },
  { id: '2', name: 'Shopify', icon: 'S', iconBg: 'bg-red-100', iconColor: 'text-red-500', leadName: 'Leslie Alexander', leadAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', teams: '4 Teams', employees: '42 Members', workload: '$4640', projects: '35 Projects', updated: '16/08/2023' },
  { id: '3', name: 'Squarespace', icon: 'Sq', iconBg: 'bg-gray-100', iconColor: 'text-gray-500', leadName: 'Arlene McCoy', leadAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', teams: '4 Teams', employees: '42 Members', workload: '$6461', projects: '35 Projects', updated: '01/01/2026' },
  { id: '4', name: 'Webflow', icon: 'W', iconBg: 'bg-blue-50', iconColor: 'text-blue-400', leadName: 'Floyd Miles', leadAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', teams: '4 Teams', employees: '42 Members', workload: '$10176', projects: '35 Projects', updated: '16/08/2023' },
  { id: '5', name: 'WordPress', icon: 'Wp', iconBg: 'bg-red-100', iconColor: 'text-red-500', leadName: 'Savannah Nguyen', leadAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80', teams: '4 Teams', employees: '42 Members', workload: '$5969', projects: '35 Projects', updated: '12/06/2020' },
  { id: '6', name: 'Framer', icon: 'F', iconBg: 'bg-black', iconColor: 'text-white', leadName: 'Jerome Bell', leadAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80', teams: '4 Teams', employees: '42 Members', workload: '$7188', projects: '35 Projects', updated: '28/10/2012' },
  { id: '7', name: 'H&C', icon: 'C', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-500', leadName: 'Jacob Jones', leadAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80', teams: '4 Teams', employees: '42 Members', workload: '$5860', projects: '35 Projects', updated: '16/08/2013' },
];

const mockDeletedServiceLines = [
  { id: '8', name: 'Magento', icon: 'M', iconBg: 'bg-orange-100', iconColor: 'text-orange-500', leadName: 'Tanvir', leadAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', teams: '2 Teams', employees: '18 Members', workload: '$3200', projects: '12 Projects', updated: '04/11/2022', deletedOn: '14/05/2024' },
  { id: '9', name: 'Wix', icon: 'Wx', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', leadName: 'Nadia', leadAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', teams: '3 Teams', employees: '24 Members', workload: '$4100', projects: '19 Projects', updated: '12/02/2023', deletedOn: '20/02/2024' },
];

type ServiceLine = (typeof mockServiceLines)[number];

export default function ServiceLineManagementDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [serviceLineToEdit, setServiceLineToEdit] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<'All Service line' | 'Deleted Items'>('All Service line');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [leadFilter, setLeadFilter] = useState('All');

  const handleCreateServiceLine = () => {
    setServiceLineToEdit(null);
    setIsCreateModalOpen(true);
  };

  const handleEditServiceLine = (sl: any) => {
    setServiceLineToEdit(sl);
    setIsCreateModalOpen(true);
  };

  const allLeads = ['All', ...Array.from(new Set(mockServiceLines.map((s) => s.leadName)))];

  const currentList = activeTab === 'All Service line' ? mockServiceLines : mockDeletedServiceLines;

  const filteredServiceLines = currentList.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesLead = leadFilter === 'All' || item.leadName === leadFilter;
    return matchesSearch && matchesLead;
  });

  const serviceLineColumns: Column<ServiceLine>[] = [
    {
      key: "name",
      header: "Service Line Name",
      render: (_, sl) => (
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full ${sl.iconBg} ${sl.iconColor} flex items-center justify-center font-bold text-xs shrink-0`}
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
            className="rounded-full object-cover shrink-0"
          />
          <span className="text-[13px] font-medium text-[#475569]">
            {sl.leadName}
          </span>
        </div>
      ),
    },
    { key: "teams", header: "Total Teams" },
    { key: "employees", header: "Total Employee" },
    {
      key: "workload",
      header: "Workload",
      render: (value) => (
        <span className="font-bold text-[#0F172A]">
          {String(value)}
        </span>
      ),
    },
    { key: "projects", header: "Active Projects" },
    { key: "updated", header: "Last Updated" },
    {
      key: "id",
      header: "Actions",
      render: (_, sl) => (
        <div className="flex items-center gap-3">
          <Link
            href={`/super-admin/service-line-management/${sl.id}`}
            className="flex items-center gap-1 text-[#06530B] font-bold text-xs hover:underline"
          >
            <Eye className="w-4 h-4" aria-label="View service line" />
            View
          </Link>
          <button
            onClick={() => handleEditServiceLine(sl)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#475569] hover:bg-gray-100 transition-colors cursor-pointer"
            title="Edit Service Line"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar">
      <div className="w-full max-w-full mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-[#E2E8F0] pb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full p-[2.5px] figma-avatar-ring shrink-0">
              <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                  <span className="z-10">A</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#414141] tracking-tight mb-0.5">
                Welcome back, Admin
              </h1>
              <p className="text-xs md:text-sm text-[#64748B]">
                Monday, July 14, 2026 ·
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="bg-[#747474] hover:bg-[#5c5c5c] text-white px-4 py-2.5 rounded-[6px] text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer">
              <Calendar className="w-4 h-4" /> Calendar
            </button>
            <button
              onClick={handleCreateServiceLine}
              className="bg-[#06530B] hover:bg-[#05290b] text-white px-4 py-2.5 rounded-[6px] text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Create Service Line
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          <StatsCard icon={Monitor} title="Total Service lines" value="240" iconColor="#4F46E5" iconBgColor="#EEF2FF" />
          <StatsCard icon={Users} title="Total Teams" value="70" iconBgColor="#FEF2F2" iconColor="#EF4444" />
          <StatsCard icon={CheckCircle2} title="Running Projects" value="12" iconBgColor="#F0FDF4" iconColor="#06530B" />
          <StatsCard icon={Briefcase} title="Omega Force Total Workload" value="8" iconBgColor="#FFFBEB" iconColor="#F59E0B" />
          <StatsCard
            title="Omega Force Total Cancellations"
            value={43}
            icon={MessageSquare}
            iconBgColor="#f5f3ff"
            iconColor="#a855f7"
          />
        </div>

        {/* Controls Bar matching Figma node 580:20910 */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6 border border-[#F3F3F3] rounded-[16px] p-4 bg-white shadow-2xs">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {(['All Service line', 'Deleted Items'] as const).map((tab) => (
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
                placeholder="Search by Service Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#F3F3F5] border border-transparent rounded-[8px] text-[14px] text-[#434343] placeholder-[#434343] focus:bg-white focus:border-[#06530B] focus:outline-none transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-3 py-2 bg-[#F3F3F5] border border-transparent text-[#434343] rounded-[8px] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer ${
                showFilters ? 'bg-gray-200 border-[#EAECF0]' : ''
              }`}
            >
              <Filter className="w-4 h-4" /> Service line Filter
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

        {/* Filter Expandable Panel */}
        {showFilters && (
          <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-4 shadow-2xs mb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Service Line Lead:</span>
              {allLeads.map((lead) => (
                <button
                  key={lead}
                  onClick={() => setLeadFilter(lead)}
                  className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${
                    leadFilter === lead
                      ? 'bg-[#06530b] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {lead}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Area */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {filteredServiceLines.map((sl) => (
              <div
                key={sl.id}
                className="bg-[#FAFAFA] border border-[#F2F2F2] rounded-[16px] p-[17px] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Service Line Header */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-[36px] h-[36px] rounded-full ${sl.iconBg} ${sl.iconColor} flex items-center justify-center font-bold text-sm shrink-0`}>
                      {sl.icon}
                    </div>
                    <span className="font-semibold text-[#191C1E] text-[18px] leading-tight">
                      {sl.name}
                    </span>
                  </div>

                  <div className="w-full h-px bg-[#EAECF0] my-3" />

                  {/* Service Line Details */}
                  <div className="space-y-3.5 text-[12px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F172A]">Service Line Lead</span>
                      <span className="font-medium text-[#0F172A]">{sl.leadName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F172A]">Total Teams</span>
                      <span className="text-[#0F172A]">{sl.teams}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F172A]">Employees</span>
                      <span className="text-[#0F172A]">{sl.employees}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F172A]">Workload</span>
                      <span className="text-[#0F172A] font-bold">{sl.workload}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F172A]">Active Projects</span>
                      <span className="text-[#0F172A]">{sl.projects}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F172A]">Last Updated</span>
                      <span className="text-[#0F172A]">{sl.updated}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="w-full h-px bg-[#EAECF0] my-3" />

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5">
                    {activeTab === 'Deleted Items' ? (
                      <>
                        <button
                          onClick={() => handleEditServiceLine(sl)}
                          className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" /> Edit
                        </button>
                        <button className="flex-1 h-[29px] bg-[#06530B] hover:bg-[#05290b] text-white rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer">
                          <RotateCcw className="w-4 h-4" /> Restore
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex-1 h-[29px] bg-[#EF4444] hover:bg-red-600 text-white rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer">
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                        <button
                          onClick={() => handleEditServiceLine(sl)}
                          className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" /> Edit
                        </button>
                        <Link
                          href={`/super-admin/service-line-management/${sl.id}`}
                          className="flex-1 h-[29px] bg-[#06530B] hover:bg-[#05290b] text-white rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-semibold transition-colors cursor-pointer"
                        >
                          <Eye className="w-4 h-4" /> View
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View — exact same as before */
          <div className="flex-1 min-h-0 overflow-y-auto rounded-[16px] shadow-2xs bg-white no-scrollbar mb-8">
            <DashboardTable
              data={filteredServiceLines}
              columns={serviceLineColumns}
              caption="All Service Lines"
              emptyMessage="No service line found."
              getRowKey={(row) => row.id}
            />
          </div>
        )}

      </div>
      <CreateServiceLineModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
          setServiceLineToEdit(null);
        }}
        serviceLineData={serviceLineToEdit}
      />
    </div>
  );
}
