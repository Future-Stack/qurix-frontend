"use client";

import React, { useState } from 'react';
import {
  Plus, Search, Filter, Eye, Edit2, Trash2, Upload, User, ChevronDown, ArrowLeft, Calendar, LayoutGrid, List
} from 'lucide-react';
import Link from 'next/link';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';

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

export default function TeamManagementPage() {
  const [isCreatePanelOpen, setIsCreatePanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Team');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

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
            <button className="bg-[#747474] hover:bg-[#5c5c5c] text-white px-4 py-2.5 rounded-[6px] text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer">
              <Calendar className="w-4 h-4" /> Calendar
            </button>
            <button
              onClick={() => setIsCreatePanelOpen(true)}
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
                placeholder="Search by Service Name"
                className="w-full pl-9 pr-3 py-2 bg-[#F3F3F5] border border-transparent rounded-[8px] text-[14px] text-[#434343] placeholder-[#434343] focus:bg-white focus:border-[#06530B] focus:outline-none transition-colors"
              />
            </div>
            <button className="px-3 py-2 bg-[#F3F3F5] border border-transparent text-[#434343] rounded-[8px] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer">
              <Filter className="w-4 h-4" /> Service line Filte
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

        {/* Content Area */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mockTeams.map((team) => (
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
                    <button className="flex-1 h-[29px] bg-[rgba(125,125,125,0.13)] hover:bg-gray-300 text-[#333333] rounded-[8px] flex items-center justify-center gap-1 text-[14px] font-medium transition-colors cursor-pointer">
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
          <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs overflow-hidden">
            <DashboardTable
              data={mockTeams}
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
                  render: (val) => (
                    <div className="flex items-center gap-2">
                      <Link href={`/service-line/team-management/${val}`} className="w-8 h-8 rounded-full flex items-center justify-center text-[#06530B] hover:bg-green-50 transition-colors">
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#06530B] hover:bg-green-50 transition-colors">
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
        )}

        {/* Create Team Modal (Figma node 350:7878) */}
        {isCreatePanelOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="w-full max-w-[573px] bg-white rounded-[20px] border border-[#DADADA] shadow-2xl p-6 md:p-[30px] overflow-y-auto max-h-[90vh] no-scrollbar relative animate-in fade-in zoom-in-95 duration-200">
              
              {/* Top Header Icon & Title */}
              <div className="flex flex-col items-center justify-center mb-8">
                <label className="relative group cursor-pointer mb-3">
                  <div className="w-14 h-14 rounded-[16px] bg-[#F1F5F9] hover:bg-[#e2e8f0] transition-colors flex items-center justify-center text-[#64748B] overflow-hidden shadow-xs relative border border-[#E2E8F0]">
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="Team Icon" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-6 h-6 text-[#64748B] group-hover:scale-110 transition-transform" />
                    )}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[16px]">
                      <Upload className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                </label>
                <h2 className="text-[16px] font-medium text-[#414141] mb-1">
                  Team Icon / Brand Identity
                </h2>
                <p className="text-[12px] text-[#94A3B8] text-center max-w-[376px]">
                  Recommended dimensions: 256x256px. Formats: PNG, SVG or JPG (Max 2MB).
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                
                {/* Row 1: Team Name & Team Code */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-[12px] font-bold text-[#616161]">
                      <span className="font-medium">Team Name </span>
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#06530B]" />
                      <input
                        type="text"
                        defaultValue="Future Stack"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-[14px] font-normal text-[#06530B] focus:outline-none focus:border-[#06530B]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[12px] font-bold text-[#616161]">
                      <span className="font-medium">Team Code </span>
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="flex items-center bg-white border border-[#E8EAF0] rounded-[11px] px-4 py-3">
                      <span className="text-[14px] text-[#06530B] font-normal mr-1">FSD-</span>
                      <input
                        type="text"
                        defaultValue="FO41BD"
                        className="w-full text-[14px] font-normal text-[#06530B] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Service Line */}
                <div className="space-y-2">
                  <label className="block text-[12px] font-bold text-[#616161]">
                    <span className="font-medium">Service Line </span>
                    <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-10 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-[14px] font-normal text-[#06530B] appearance-none focus:outline-none focus:border-[#06530B]">
                      <option>CUSTOM-FSD</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" />
                  </div>
                </div>

                {/* Row 3: Team Leader & CO-Leader */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-[12px] font-medium text-[#06530B]">
                      Team Leader <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A8A8]" />
                      <input
                        type="text"
                        placeholder="Search by name or user ID.."
                        className="w-full pl-10 pr-3 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-[14px] font-normal text-[#414141] placeholder-[#A8A8A8] focus:outline-none focus:border-[#06530B]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[12px] font-medium text-[#616161]">
                      CO-Leader
                    </label>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A8A8]" />
                      <input
                        type="text"
                        placeholder="Search by name or user ID.."
                        className="w-full pl-10 pr-3 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-[14px] font-normal text-[#414141] placeholder-[#A8A8A8] focus:outline-none focus:border-[#06530B]"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Action Buttons */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => setIsCreatePanelOpen(false)}
                  className="w-[54px] h-[53px] rounded-[46px] border border-[#F0F0F0] hover:bg-gray-50 flex items-center justify-center text-[#475569] transition-colors shrink-0 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-[#414141]" />
                </button>
                <button
                  onClick={() => setIsCreatePanelOpen(false)}
                  className="flex-1 h-[53px] bg-[#06530B] hover:bg-[#05290b] text-white rounded-[6px] text-[14px] font-medium flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Create Team
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
