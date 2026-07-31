"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search, Filter, Eye, Plus, Edit, Trash, Settings
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { CreateTeamModal } from '@/components/ui/Modal/CreateTeamModal';
import { Column } from "@/components/employee-team-leader/shared/DashboardTable/DashboardTable.types";
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';

type Team = (typeof mockTeams)[number];

const mockTeams = [
  { id: '1', name: 'Future Stack', icon: 'M', iconBg: 'bg-red-500', iconColor: 'text-white', date: '2025-05-01', leader: '4 Teams', members: '42 Members', workload: '$3615', projects: '35 Projects', updated: '2025-12-12', actionsType: 'icons' },
  { id: '2', name: 'Cyber Monks', icon: 'M', iconBg: 'bg-green-600', iconColor: 'text-white', date: '2021-01-01', leader: '4 Teams', members: '42 Members', workload: '$4640', projects: '35 Projects', updated: '2021-01-01', actionsType: 'text' },
  { id: '3', name: 'Dev Ninja', icon: 'N', iconBg: 'bg-black', iconColor: 'text-white', date: '2022-10-10', leader: '4 Teams', members: '42 Members', workload: '$6461', projects: '35 Projects', updated: '2022-10-10', actionsType: 'text' },
];

function StatCard({ title, value }: any) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 flex flex-col justify-center shadow-sm w-full">
      <div className="text-[25px] font-bold text-[#0F172A] leading-none mb-2">{value}</div>
      <div className="text-[14px] font-semibold text-[#414141]">{title}</div>
    </div>
  );
}

export default function ServiceLineDetailsDashboard() {
  const params = useParams();
  const serviceLineId = params?.id ? String(params.id) : 'fsd';
  const [activeTab, setActiveTab] = useState('Team');
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);


  const teamColumns: Column<Team>[] = [
    {
      key: "name",
      header: "Team Name",
      render: (_, team) => (
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full ${team.iconBg} ${team.iconColor} flex items-center justify-center text-xs font-bold`}
          >
            {team.icon}
          </div>

          <span className="font-bold text-[#0F172A]">
            {team.name}
          </span>
        </div>
      ),
    },

    {
      key: "date",
      header: "Group Date",
    },

    {
      key: "leader",
      header: "Team Leader",
    },

    {
      key: "members",
      header: "Total Members",
    },

    {
      key: "workload",
      header: "Workload",
      render: (value) => (
        <span className="font-bold text-[#0F172A]">
          {value}
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
      header: "Action Menu",
      render: (_, team) =>
        team.actionsType === "icons" ? (
          <div className="flex items-center gap-3 text-[#06530B]">
            <button>
              <Eye className="w-4 h-4" />
            </button>

            <button>
              <Edit className="w-4 h-4" />
            </button>

            <button>
              <Trash className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link
            href={`/super-admin/service-line-management/${serviceLineId}/teams/${team.id}`}
            className="flex items-center gap-1 text-[#06530B] text-xs font-bold hover:underline"
          >
            <Eye className="w-4 h-4" />
            View Team
          </Link>
        ),
    },
  ];

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar">
      <div className="max-w-full mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-3 items-start justify-between lg:items-center mb-8">
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
              <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Full Stack Development (FSD)</h1>
              <p className="text-sm text-[#64748B]">Monday, July 14, 2024</p>
            </div>
          </div>
          <div className="flex gap-3 w-full lg:w-auto lg:justify-start justify-end">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E2E8F0] text-[#64748B] rounded-xl text-sm font-bold transition-colors shadow-sm hover:bg-gray-50">
              <Settings className="w-4 h-4" /> Edit Service Line
            </button>
            <button
              onClick={() => setIsCreateTeamModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" /> Create Team
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <StatCard title="Total Team" value="240" />
          <StatCard title="Total Employee" value="70" />
          <StatCard title="Running Projects" value="12" />
          <StatCard title="Team Leader" value="8" />
          <StatCard title="Total Project Completed" value="43" />
        </div>

        {/* Main Content Area */}
        <div className=" overflow-hidden">
          {/* Controls */}
          <div className="p-4 flex flex-col lg:flex-row lg:items-center justify-between border border-[#E2E8F0] rounded-2xl mb-5 gap-4 items-end">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('Team')}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors ${activeTab === 'Team'
                    ? 'bg-[#06530B] text-white'
                    : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
              >
                Team
              </button>
              <button
                onClick={() => setActiveTab('Employee')}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors ${activeTab === 'Employee'
                    ? 'bg-[#06530B] text-white'
                    : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
              >
                Employee
              </button>
              <button
                onClick={() => setActiveTab('All Projects')}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors ${activeTab === 'All Projects'
                    ? 'bg-[#06530B] text-white'
                    : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-gray-50'
                  }`}
              >
                All Projects
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
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
          {/* <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Team Name</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Group Date</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Team Leader</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Total Members</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Workload</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Active Projects</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Last Updated</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Action Menu</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === 'Team' ? mockTeams.map((team, i) => (
                    <tr key={i} className="border-b border-[#E2E8F0] last:border-b-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${team.iconBg} ${team.iconColor} flex items-center justify-center font-bold text-xs`}>
                            {team.icon}
                          </div>
                          <span className="text-[13px] font-bold text-[#0F172A]">{team.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.date}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.leader}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.members}</td>
                      <td className="px-6 py-4 text-[13px] font-bold text-[#0F172A]">{team.workload}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.projects}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-[#475569]">{team.updated}</td>
                      <td className="px-6 py-4">
                        {team.actionsType === 'icons' ? (
                          <div className="flex items-center gap-3 text-[#06530B]">
                            <button className="hover:opacity-70"><Eye className="w-4 h-4" /></button>
                            <button className="hover:opacity-70"><Edit className="w-4 h-4" /></button>
                            <button className="hover:opacity-70"><Trash className="w-4 h-4" /></button>
                          </div>
                        ) : (
                          <Link href={`/super-admin/service-line-management/${serviceLineId}/teams/${team.id}`} className="flex items-center gap-1 text-[#06530B] font-bold text-xs hover:underline">
                            <Eye className="w-4 h-4" /> View Team
                          </Link>
                        )}
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                        No data available for {activeTab}.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div> */}
          <div className="overflow-hidden mb-8">
            <DashboardTable
              data={activeTab === "Team" ? mockTeams : []}
              columns={teamColumns}
              caption="All Teams"
              emptyMessage={`No data available for ${activeTab}.`}
              getRowKey={(row) => row.id}
            />
          </div>
        </div>
      </div>
      <CreateTeamModal isOpen={isCreateTeamModalOpen} onClose={() => setIsCreateTeamModalOpen(false)} />
    </div>
  );
}
