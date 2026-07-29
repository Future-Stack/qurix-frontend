'use client';

import React, { useState } from 'react';
import {
  Folder,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Search,
  Filter,
  Eye,
  Plus,
  AtSign,
  ChevronDown,
  AlertCircle
} from 'lucide-react';
import StatsCard from '@/components/employee-team-leader/shared/StatsCard';
import { DashboardTable } from '@/components/employee-team-leader/shared/DashboardTable/DashboardTable';
import StatusBadge from '@/components/employee-team-leader/shared/StatusBadge';
import CountdownTimer from '@/components/employee-team-leader/shared/CountdownTimer';
import ProjectDetailsModal from '@/components/employee-team-leader/shared/ProjectDetailsModal';
import TeamMemberDetailsModal from '@/components/employee-team-leader/shared/TeamMemberDetailsModal';
import AddIssueModal from '@/components/sales/AddIssueModal';
import IssueDetailsModal from '@/components/sales/IssueDetailsModal';
import { useRouter } from 'next/navigation';

// Sample team members data matching team leader panel
const teamMembers = [
  {
    id: '1',
    name: 'Vrajakishore Loy',
    handle: '@julie_mutie',
    empId: 'KNC-8821',
    designation: 'Node JS Developer',
    email: 'tanya.hill@example.com',
    phone: '+1 (555) 012-3456',
    status: 'ACTIVE',
    joiningDate: '2020-08-08',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Chintamani Pavithran',
    handle: '@dumakaka',
    empId: 'KNC-8821',
    designation: 'ROR Developer',
    email: 'debbie.baker@example.com',
    phone: '+1 (555) 234-5678',
    status: 'ACTIVE',
    joiningDate: '2022-10-10',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Yashpal Patachli',
    handle: '@aisha_amani',
    empId: 'KNC-8821',
    designation: 'React JS Developer',
    email: 'tim.jennings@example.com',
    phone: '+1 (555) 345-6789',
    status: 'ACTIVE',
    joiningDate: '2025-12-12',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'Supratik Chaudhry',
    handle: '@katwa0',
    empId: 'KNC-8821',
    designation: 'Project Manager',
    email: 'bill.sanders@example.com',
    phone: '+1 (555) 456-7890',
    status: 'SUSPENDED',
    joiningDate: '2022-10-10',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '5',
    name: 'Punyasloka Megana',
    handle: '@anitafaraji',
    empId: 'KNC-8821',
    designation: 'React JS Developer',
    email: 'alma.lawson@example.com',
    phone: '+1 (555) 567-8901',
    status: 'INACTIVE',
    joiningDate: '2021-01-01',
    lastLogin: '24 mins ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  }
];

interface ProjectOrder {
  id: string;
  orderId: string;
  clientName: string;
  profileName: string;
  team: string;
  status: string;
  value: string;
  timeline: string;
  isMentionGroup?: boolean;
  issue?: {
    explanation: string;
    links?: string[];
    files?: Array<{ name: string; size?: string }>;
    status: 'Pending' | 'WIP' | 'Resolved';
  } | null;
}

// Sample orders data matching node 602:3529 with unique IDs
const initialProjectsData: ProjectOrder[] = [
  {
    id: 'proj-1',
    orderId: 'FO2D9BC6E142',
    clientName: 'lawalx',
    profileName: 'bits_wise',
    team: 'Future Stack',
    status: 'Urgent',
    value: '$3615',
    timeline: '3D 9H 25M 53S',
    isMentionGroup: true,
    issue: null
  },
  {
    id: 'proj-2',
    orderId: 'FO2D9BC6E142',
    clientName: 'Wade Warren',
    profileName: 'bits_wise',
    team: 'Future Stack',
    status: 'WIP',
    value: '$4640',
    timeline: '3D 9H 25M 53S',
    isMentionGroup: false,
    issue: {
      explanation: 'Delay in client approval for wireframe design.',
      links: ['https://www.anyreferencelinkhere.com'],
      status: 'Pending'
    }
  },
  {
    id: 'proj-3',
    orderId: 'FO2D9BC6E142',
    clientName: 'Dianne Russell',
    profileName: 'bits_wise',
    team: 'Future Stack',
    status: 'Late',
    value: '$6461',
    timeline: '3D 9H 25M 53S',
    isMentionGroup: true,
    issue: {
      explanation: 'Backend API response timeout on high load.',
      links: ['https://github.com/issue/128'],
      status: 'WIP'
    }
  },
  {
    id: 'proj-4',
    orderId: 'FO2D9BC6E142',
    clientName: 'Ronald Richards',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Delivered',
    value: '$10176',
    timeline: '3D 9H 25M 53S',
    isMentionGroup: false,
    issue: {
      explanation: 'Figma link broken or missing permission.',
      links: ['www.anythingelse.com'],
      status: 'Pending'
    }
  },
  {
    id: 'proj-5',
    orderId: 'FO2D9BC6E142',
    clientName: 'Leslie Alexander',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Urgent',
    value: '$5969',
    timeline: '3D 9H 25M 53S',
    isMentionGroup: true,
    issue: {
      explanation: 'Payment gateway integration sandbox error.',
      status: 'WIP'
    }
  },
  {
    id: 'proj-6',
    orderId: 'FO2D9BC6E142',
    clientName: 'Guy Hawkins',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Urgent',
    value: '$7188',
    timeline: '3D 9H 25M 53S',
    isMentionGroup: false,
    issue: null
  },
  {
    id: 'proj-7',
    orderId: 'FO2D9BC6E142',
    clientName: 'Jenny Wilson',
    profileName: 'bits_wise',
    team: 'Cyber Monks',
    status: 'Urgent',
    value: '$5860',
    timeline: '3D 9H 25M 53S',
    isMentionGroup: true,
    issue: {
      explanation: 'Awaiting client feedback on revision #2.',
      status: 'Pending'
    }
  }
];

type TabType = 'all-projects' | 'mention-group' | 'issue-project' | 'issue-resolved';

export default function SalesDashboardPage() {
  const router = useRouter();
  const [projectsData, setProjectsData] = useState<ProjectOrder[]>(initialProjectsData);
  const [activeTab, setActiveTab] = useState<TabType>('all-projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  // Add Issue Modal state
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

  // Handler to add a new issue to a project
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

  // Filtered project list based on tab & search
  const filteredProjects = projectsData.filter((item) => {
    const matchesSearch =
      item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.profileName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatusFilter = selectedStatusFilter === 'All' || item.status === selectedStatusFilter;

    if (activeTab === 'mention-group') {
      return matchesSearch && matchesStatusFilter && item.isMentionGroup;
    }
    if (activeTab === 'issue-project') {
      return matchesSearch && matchesStatusFilter && item.issue && (item.issue.status === 'Pending' || item.issue.status === 'WIP');
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

        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#dadada] pb-4 gap-4">
          <div className="flex items-center gap-4">
            {/* Presence Avatar Ring */}
            <div className="relative shrink-0 size-14 rounded-full border-2 border-[#06530b] p-0.5 bg-white shadow-sm">
              <div className="size-full rounded-full bg-[#06530b] text-white font-bold flex items-center justify-center text-lg overflow-hidden">
                <span className="text-2xl">⚡</span>
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

          {/* "+ New Project" Button */}
          <button
            onClick={() => router.push('/sales/dashboard/create-new-project')}
            className="bg-[#06530b] hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-[14px] px-5 py-2.5 rounded-[6px] shadow-sm flex items-center gap-2 cursor-pointer transition-all duration-150 self-start sm:self-auto"
          >
            <Plus className="size-4 stroke-[2.5]" />
            <span>New Project</span>
          </button>
        </div>

        {/* 5 Stats Cards Grid matching Figma 602:3529 */}
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

          {/* Tabs */}
          <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-xl max-w-fit overflow-x-auto">

            {/* Tab 1: All Project */}
            <button
              onClick={() => setActiveTab('all-projects')}
              className={`px-4 py-2 rounded-[8px] text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'all-projects'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'bg-[#f3f3f5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              All Project
            </button>

            {/* Tab 2: Mention Group */}
            <button
              onClick={() => setActiveTab('mention-group')}
              className={`px-4 py-2 rounded-[8px] text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'mention-group'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'bg-[#f3f3f5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              Mention Group
            </button>

            {/* Tab 3: Issue Project */}
            <button
              onClick={() => setActiveTab('issue-project')}
              className={`px-4 py-2 rounded-[8px] text-sm font-medium font-['Roboto'] transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'issue-project'
                  ? 'bg-[#06530b] text-white shadow-2xs'
                  : 'bg-[#f3f3f5] text-[#282828] hover:bg-gray-200'
                }`}
            >
              Issue Project
            </button>

            {/* Tab 4: Issue Resolved */}
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
            {/* Search input */}
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

            {/* Filter Trigger Button */}
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
            align: 'right',
            render: (_, item) => {
              if (!item.issue) {
                return (
                  <div className="flex items-center justify-end w-full">
                    <button
                      onClick={() => setAddIssueTargetProject({ id: item.id, orderId: item.orderId })}
                      className="bg-[#06530b] hover:bg-emerald-900 text-white font-['Roboto'] font-semibold text-[14px] h-[29px] w-[89px] rounded-[6px] transition-colors cursor-pointer inline-flex items-center justify-center shadow-2xs"
                    >
                      <span>Add Issue</span>
                    </button>
                  </div>
                );
              }

              const issueStatus = item.issue.status;
              const isPending = issueStatus === 'Pending';
              const isWIP = issueStatus === 'WIP';

              const badgeBgClass = isPending 
                ? 'bg-[#e07700]' 
                : isWIP 
                ? 'bg-[#001f75]' 
                : 'bg-[#06530b]';

              return (
                <div className="inline-flex items-center justify-end gap-[10px] w-full">
                  {/* Green Eye Icon */}
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

                  {/* Status Badge Dropdown Pill (fixed w-[89px] so Eye icons line up vertically) */}
                  <div className="relative inline-flex items-center rounded-[6px] overflow-hidden shadow-2xs cursor-pointer group shrink-0">
                    <div className={`${badgeBgClass} text-white font-['Roboto'] font-semibold text-[14px] h-[29px] w-[89px] px-[6px] flex items-center justify-between`}>
                      <span className="leading-[16.5px] text-center flex-1">{issueStatus}</span>
                      <div className="h-full border-l border-white/80 pl-1.5 flex items-center justify-center shrink-0">
                        <ChevronDown className="size-[15px] stroke-[2.5] text-white" />
                      </div>
                    </div>

                    <select
                      value={issueStatus}
                      onChange={(e) => handleIssueStatusChange(item.id, e.target.value as any)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full text-black font-sans"
                      title="Change issue status"
                    >
                      <option value="Pending">Pending</option>
                      <option value="WIP">WIP</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
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
        caption="Sales active project orders and issues"
        emptyMessage="No projects found."
      />

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Team Member Details Modal */}
      {selectedMember && (
        <TeamMemberDetailsModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      {/* Add Project Issue Modal */}
      {addIssueTargetProject && (
        <AddIssueModal
          isOpen={!!addIssueTargetProject}
          projectId={addIssueTargetProject.id}
          orderId={addIssueTargetProject.orderId}
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
    </div>
  );
}
