'use client';

import React, { useState } from 'react';
import {
  Folder,
  AlertTriangle,
  CheckCircle2,
  MessageSquare,
  Search,
  Filter,
  Eye,
  Plus,
  AtSign,
  ChevronDown,
  Calendar
} from 'lucide-react';
import StatsCard from '@/components/employee-team-leader/shared/StatsCard';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';
import ProjectDetailsModal from '@/components/employee-team-leader/shared/ProjectDetailsModal';
import AddIssueModal from '@/components/sales/AddIssueModal';
import IssueDetailsModal from '@/components/sales/IssueDetailsModal';
import IssueStatusDropdown from './IssueStatusDropdown';

export interface IssueProjectOrder {
  id: string;
  orderId: string;
  clientName: string;
  profileName: string;
  team: string;
  status: string;
  value: string;
  timeline: string;
  issue: {
    explanation: string;
    links?: string[];
    files?: Array<{ name: string; size?: string }>;
    status: 'Pending' | 'WIP' | 'Resolved';
  } | null;
}

const initialIssueProjects: IssueProjectOrder[] = [
  {
    id: 'issue-proj-1',
    orderId: 'FO2D9BC6E142',
    clientName: 'lawalx',
    profileName: 'bits_wise',
    team: 'Future Stack',
    status: 'Urgent',
    value: '$3615',
    timeline: '3D 9H 25M 53S',
    issue: null
  },
  {
    id: 'issue-proj-2',
    orderId: 'FO2D9BC6E142',
    clientName: 'Wade Warren',
    profileName: 'bits_wise',
    team: 'Future Stack',
    status: 'WIP',
    value: '$4640',
    timeline: '3D 9H 25M 53S',
    issue: {
      explanation: 'Delay in client approval for wireframe design.',
      links: ['https://www.anyreferencelinkhere.com'],
      status: 'Pending'
    }
  },
  {
    id: 'issue-proj-3',
    orderId: 'FO2D9BC6E142',
    clientName: 'Dianne Russell',
    profileName: 'bits_wise',
    team: 'Future Stack',
    status: 'Late',
    value: '$6461',
    timeline: '3D 9H 25M 53S',
    issue: {
      explanation: 'Backend API response timeout on high load.',
      links: ['https://github.com/issue/128'],
      status: 'WIP'
    }
  },
  {
    id: 'issue-proj-4',
    orderId: 'FO2D9BC6E142',
    clientName: 'Ronald Richards',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Delivered',
    value: '$10176',
    timeline: '3D 9H 25M 53S',
    issue: {
      explanation: 'Figma link broken or missing permission.',
      links: ['www.anythingelse.com'],
      status: 'Resolved'
    }
  },
  {
    id: 'issue-proj-5',
    orderId: 'FO2D9BC6E142',
    clientName: 'Leslie Alexander',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Urgent',
    value: '$5969',
    timeline: '3D 9H 25M 53S',
    issue: {
      explanation: 'Payment gateway integration sandbox error.',
      status: 'WIP'
    }
  },
  {
    id: 'issue-proj-6',
    orderId: 'FO2D9BC6E142',
    clientName: 'Guy Hawkins',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Urgent',
    value: '$7188',
    timeline: '3D 9H 25M 53S',
    issue: null
  },
  {
    id: 'issue-proj-7',
    orderId: 'FO2D9BC6E142',
    clientName: 'Jenny Wilson',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Urgent',
    value: '$5860',
    timeline: '3D 9H 25M 53S',
    issue: {
      explanation: 'Awaiting client feedback on revision #2.',
      status: 'Pending'
    }
  }
];

type IssueTabType = 'issue-project' | 'issue-resolved';

import { usePathname } from 'next/navigation';
import DateRangeCalendarModal, { DateRange } from '@/components/employee-team-leader/shared/DateRangeCalendarModal';

export default function IssueProjectsContent() {
  const pathname = usePathname();
  const isEmployeePanel = pathname?.startsWith('/employee');
  const isServiceLinePanel = pathname?.startsWith('/service-line');

  const [projectsData, setProjectsData] = useState<IssueProjectOrder[]>(initialIssueProjects);
  const [activeTab, setActiveTab] = useState<IssueTabType>('issue-project');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Calendar Modal state
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });

  // Add Issue Modal state
  const [isAddIssueModalOpen, setIsAddIssueModalOpen] = useState(false);
  const [addIssueTargetProject, setAddIssueTargetProject] = useState<{ id: string; orderId: string } | null>(null);

  // Issue Details Modal state
  const [viewingIssue, setViewingIssue] = useState<{
    id: string;
    orderId: string;
    clientName?: string;
    explanation: string;
    links?: string[];
    files?: Array<{ name: string; size?: string }>;
    status: 'Pending' | 'WIP' | 'Resolved';
  } | null>(null);

  // Handler to add a new issue
  const handleAddIssueSubmit = (issueData: {
    projectId: string;
    orderId: string;
    explanation: string;
    links: string[];
    files: Array<{ name: string; size: string }>;
  }) => {
    setProjectsData(prev =>
      prev.map(item => {
        if (item.id === issueData.projectId && !item.issue) {
          return {
            ...item,
            issue: {
              explanation: issueData.explanation,
              links: issueData.links,
              files: issueData.files,
              status: 'Pending'
            }
          };
        }
        return item;
      })
    );
  };

  // Handler to change issue status for a specific project row
  const handleIssueStatusChange = (id: string, newStatus: 'Pending' | 'WIP' | 'Resolved') => {
    setProjectsData(prev =>
      prev.map(item => {
        if (item.id === id && item.issue) {
          return {
            ...item,
            issue: {
              ...item.issue,
              status: newStatus
            }
          };
        }
        return item;
      })
    );
    if (viewingIssue && viewingIssue.id === id) {
      setViewingIssue({
        ...viewingIssue,
        status: newStatus
      });
    }
  };

  // Filtered projects list based on active tab and search
  const filteredProjects = projectsData.filter((item) => {
    const matchesSearch =
      item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.profileName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatusFilter = selectedStatusFilter === 'All' || item.status === selectedStatusFilter;

    if (activeTab === 'issue-project') {
      return matchesSearch && matchesStatusFilter && (!item.issue || item.issue.status === 'Pending' || item.issue.status === 'WIP');
    }
    if (activeTab === 'issue-resolved') {
      return matchesSearch && matchesStatusFilter && item.issue && item.issue.status === 'Resolved';
    }

    return matchesSearch && matchesStatusFilter;
  });

  return (
    <div className="flex flex-col h-full w-full min-h-0 overflow-y-auto no-scrollbar space-y-5 select-none">

      {/* Fixed Top Section (Header + 5 Stats Cards + Tab Bar) */}
      <div className="shrink-0 space-y-5">

        {/* Header Banner matching Figma 602:3895 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#dadada] pb-4 gap-4">
          <div className="flex items-center gap-4">
            {/* Avatar Ring */}
            <div className="relative shrink-0 size-14 rounded-full p-[2.5px] figma-avatar-ring shadow-sm">
              <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center">
                <div className="size-full rounded-full bg-[#06530b] text-white font-bold flex items-center justify-center text-lg overflow-hidden">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
              <span className="absolute bottom-0 right-0 size-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            <div>
              <h1 className="font-['Roboto'] font-medium text-[20px] text-[#414141] tracking-tight">
                Sales Team (FSD)
              </h1>
              <p className="font-['Roboto'] text-[14px] text-[#a19791] mt-0.5">
                Sales Panel, July 14, 2026
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Calendar Button */}
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="bg-[#71717a] hover:bg-[#52525b] text-white font-bold text-[14px] px-4 py-2.5 rounded-[6px] shadow-xs flex items-center gap-2 cursor-pointer transition-all duration-150"
            >
              <Calendar className="size-4 stroke-[2]" />
              <span>Calendar</span>
              {dateRange.startDate && (
                <span className="ml-1 text-[11px] bg-white/20 px-2 py-0.5 rounded font-mono text-white">
                  {dateRange.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  {dateRange.endDate && dateRange.endDate.getTime() !== dateRange.startDate.getTime() && (
                    ` - ${dateRange.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
                  )}
                </span>
              )}
            </button>

            {/* "+ Add Issue" Button (Hidden for Employee Panel) */}
            {!isEmployeePanel && (
              <button
                onClick={() => {
                  const target = projectsData.find(p => !p.issue) || projectsData[0];
                  if (target) {
                    setAddIssueTargetProject({ id: target.id, orderId: target.orderId });
                  }
                }}
                className="bg-[#06530b] hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-[14px] px-4 py-2.5 rounded-[6px] shadow-sm flex items-center gap-2 cursor-pointer transition-all duration-150"
              >
                <Plus className="size-4 stroke-[2.5]" />
                <span>Add Issue</span>
              </button>
            )}
          </div>
        </div>

        {/* 5 Stats Cards Grid matching Figma 602:3895 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Active Projects"
            value={24}
            icon={Folder}
            iconBgColor="#eef2ff"
            iconColor="#6366f1"
          />
          <StatsCard
            title="Mentions Group"
            value={7}
            icon={AtSign}
            iconBgColor="rgba(6,83,11,0.08)"
            iconColor="#06530b"
          />
          <StatsCard
            title="Total Delivered"
            value={12}
            icon={CheckCircle2}
            iconBgColor="#f0fdf4"
            iconColor="#22c55e"
          />
          <StatsCard
            title="Issue Project"
            value={8}
            icon={AlertTriangle}
            iconBgColor="#fef2f2"
            iconColor="#ef4444"
          />
          <StatsCard
            title="Unread Messages"
            value={43}
            icon={MessageSquare}
            iconBgColor="#f5f3ff"
            iconColor="#8b5cf6"
          />
        </div>

        {/* Filter and Tab Controller Bar */}
        <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">

          {/* Tabs: Issue Project & Issue Resolved */}
          <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-xl max-w-fit overflow-x-auto">
            <button
              onClick={() => setActiveTab('issue-project')}
              className={`px-4 py-2 rounded-[8px] text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'issue-project'
                ? 'bg-[#06530b] text-white shadow-2xs'
                : 'bg-[#f3f3f5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              Issue Project
            </button>

            <button
              onClick={() => setActiveTab('issue-resolved')}
              className={`px-4 py-2 rounded-[8px] text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'issue-resolved'
                ? 'bg-[#06530b] text-white shadow-2xs'
                : 'bg-[#f3f3f5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              Issue Resolved
            </button>
          </div>

          {/* Search and Order Filtering */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
              <input
                type="text"
                placeholder="Search by Name or Order ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f3f3f5] border border-transparent rounded-[8px] pl-9 pr-3 py-2 text-sm font-['Roboto'] text-[#434343] focus:outline-none focus:bg-white focus:border-[#eaecf0] transition-all duration-200 placeholder:text-gray-400"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 bg-[#f3f3f5] hover:bg-gray-200 border border-transparent hover:border-[#eaecf0] rounded-[8px] px-4 py-2 text-sm font-medium font-['Roboto'] text-[#434343] transition-all duration-200 cursor-pointer ${showFilters ? 'bg-gray-200 border-[#eaecf0]' : ''
                }`}
            >
              <Filter className="size-4" />
              <span>Order Filtering</span>
            </button>
          </div>
        </div>

        {/* Expanded status filters options */}
        {showFilters && (
          <div className="bg-white border border-[#f3f3f3] rounded-[16px] p-3 flex flex-wrap items-center gap-3 shadow-2xs animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-['Roboto']">Status Filter:</span>
            {['All', 'Urgent', 'WIP', 'Late', 'Delivered'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatusFilter(status)}
                className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors duration-150 ${selectedStatusFilter === status
                  ? 'bg-[#06530b] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* TABLE CONTENT WITH PROJECT ISSUES COLUMN */}
      <DashboardTable
        data={filteredProjects}
        getRowKey={(item) => item.id}
        columns={[
          { key: 'orderId', header: 'Order ID', align: 'left', render: (val) => <span className="font-bold text-[#1E293B]">{String(val)}</span> },
          { key: 'clientName', header: 'Client name', align: 'left', render: (val) => <span className="font-semibold text-[#1E293B]">{String(val)}</span> },
          { key: 'profileName', header: 'Profile name', align: 'left', render: (val) => <span className="text-[#475569]">{String(val)}</span> },
          { key: 'team', header: 'Team', align: 'left', render: (val) => <span className="text-[#475569] capitalize">{String(val)}</span> },
          {
            key: 'issue',
            header: 'Project Issues',
            align: 'center',
            render: (_, item) => {
              if (!item.issue) {
                return (
                  <div className="flex items-center justify-center w-full">
                    <span className="text-xs font-semibold text-[#94A3B8]">No Issue</span>
                  </div>
                );
              }

              return (
                <div className="inline-flex items-center justify-center gap-2.5 w-full">
                  {/* View Issue Eye Icon */}
                  <button
                    onClick={() => setViewingIssue({
                      id: item.id,
                      orderId: item.orderId,
                      clientName: item.clientName,
                      explanation: item.issue!.explanation,
                      links: item.issue!.links,
                      files: item.issue!.files,
                      status: item.issue!.status
                    })}
                    className="text-[#06530b] hover:opacity-80 transition-opacity cursor-pointer p-0.5"
                    title="View issue details"
                  >
                    <Eye className="size-[20px] stroke-[2]" />
                  </button>

                  {/* Custom Styled Open Dropdown */}
                  <IssueStatusDropdown
                    status={item.issue.status}
                    onStatusChange={(newStatus) => handleIssueStatusChange(item.id, newStatus)}
                  />
                </div>
              );
            }
          },
          { key: 'status', header: 'Status', align: 'center', render: (_, item) => <StatusBadge status={item.status} /> },
          { key: 'timeline', header: 'Timeline', align: 'center', render: () => <CountdownTimer initialSeconds={86400 * 3 + 3600 * 9 + 60 * 25 + 53} /> },
          {
            key: 'orderId',
            header: 'Actions',
            align: 'center',
            render: (_, item) => (
              <button
                onClick={() => setSelectedProject({
                  id: item.orderId,
                  client: item.clientName,
                  profile: item.profileName,
                  team: item.team,
                  status: item.status,
                  value: item.value,
                  initialSeconds: 86400 * 3 + 3600 * 9 + 60 * 25 + 53
                })}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06530B] hover:text-[#00AB0C] transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" /> View
              </button>
            )
          }
        ]}
        caption="Issue projects and status management"
        emptyMessage="No issues found."
      />

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Add Project Issue Modal */}
      {addIssueTargetProject && (
        <AddIssueModal
          isOpen={!!addIssueTargetProject}
          projectId={addIssueTargetProject.id}
          orderId={addIssueTargetProject.orderId}
          projectsList={projectsData.map(p => ({
            id: p.id,
            orderId: p.orderId,
            clientName: p.clientName,
            profileName: p.profileName
          }))}
          onClose={() => setAddIssueTargetProject(null)}
          onSubmit={handleAddIssueSubmit}
        />
      )}

      {/* Issue Details Modal */}
      {viewingIssue && (
        <IssueDetailsModal
          isOpen={!!viewingIssue}
          issue={viewingIssue}
          onClose={() => setViewingIssue(null)}
          onStatusChange={handleIssueStatusChange}
        />
      )}

      {/* Date Range Calendar Modal */}
      <DateRangeCalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        initialRange={dateRange}
        onApplyRange={(newRange) => setDateRange(newRange)}
      />
    </div>
  );
}
