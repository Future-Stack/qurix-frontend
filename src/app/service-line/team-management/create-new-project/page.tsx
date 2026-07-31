'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Folder, 
  User, 
  Hash, 
  ChevronDown, 
  Calendar, 
  Clock, 
  Search, 
  UploadCloud, 
  Plus, 
  Check, 
  Lock,
  FileText,
  Link as LinkIcon,
  Globe,
  Share2,
  DollarSign,
  X,
  FileCheck
} from 'lucide-react';

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function formatDateForDisplay(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  const p0 = parts[0];
  const p1 = parts[1];
  const p2 = parts[2];
  if (parts.length === 3 && p0 && p1 && p2) {
    return `${p1}/${p2}/${p0}`;
  }
  return dateStr;
}

function formatTimeForDisplay(timeStr: string): string {
  if (!timeStr) return '';
  const parts = timeStr.split(':');
  const p0 = parts[0];
  const p1 = parts[1];
  if (parts.length >= 2 && p0 !== undefined && p1 !== undefined) {
    let hours = parseInt(p0, 10);
    if (isNaN(hours)) return timeStr;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursFormatted = hours < 10 ? `0${hours}` : `${hours}`;
    return `${hoursFormatted}:${p1} ${ampm}`;
  }
  return timeStr;
}

interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  handle: string;
  empId: string;
  avatar: string;
  selected: boolean;
}

interface UploadedFile {
  id: string;
  name: string;
  size: string;
}

interface ResourceLink {
  id: string;
  type: 'Figma' | 'Google Drive' | 'GitHub' | 'External URL';
  url: string;
}

export default function ServiceLineCreateNewProjectRootPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [clientName, setClientName] = useState('alexjlouis');
  const [fiverrOrderId, setFiverrOrderId] = useState('FO41BDCFC4F84');
  const [profileName, setProfileName] = useState('code_tribe_Fiverr');
  const [serviceLine, setServiceLine] = useState('CUSTOM-FSD');
  const [team, setTeam] = useState('Future Stack');
  const [projectStatus, setProjectStatus] = useState('Planing');
  
  // Date & Time states
  const [startDate, setStartDate] = useState('2026-07-18');
  const [deliveryDeadline, setDeliveryDeadline] = useState('2026-07-30');
  const [deliveryTime, setDeliveryTime] = useState('16:57');
  const [projectValue, setProjectValue] = useState('$1,200');

  // File Upload state
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  // Resource Link state
  const [addedLinks, setAddedLinks] = useState<ResourceLink[]>([]);
  const [activeLinkType, setActiveLinkType] = useState<'Figma' | 'Google Drive' | 'GitHub' | 'External URL' | null>(null);
  const [linkInput, setLinkInput] = useState('');

  // Team member search and selection
  const [memberSearch, setMemberSearch] = useState('');
  const [members, setMembers] = useState<TeamMemberItem[]>([
    {
      id: '1',
      name: 'Kathryn Murphy',
      role: 'Lead Designer',
      handle: '@alex.chen',
      empId: 'EMP001',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      selected: true
    },
    {
      id: '2',
      name: 'Annette Black',
      role: 'UI/UX Designer',
      handle: '@sarah.chen',
      empId: 'EMP002',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      selected: true
    },
    {
      id: '3',
      name: 'Courtney Henry',
      role: 'Backend Engineer',
      handle: '@mike.r',
      empId: 'EMP003',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      selected: false
    },
    {
      id: '4',
      name: 'Robert Fox',
      role: 'Product Manager',
      handle: '@james.liu',
      empId: 'EMP004',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      selected: false
    },
    {
      id: '5',
      name: 'Kristin Watson',
      role: 'QA Lead',
      handle: '@emily.park',
      empId: 'EMP005',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      selected: false
    }
  ]);

  // Handle local file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: UploadedFile[] = Array.from(e.target.files).map((file, i) => ({
        id: `${Date.now()}-${i}`,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  // Remove uploaded file
  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  // Add resource link
  const handleAddLink = () => {
    if (!activeLinkType || !linkInput.trim()) return;
    const newLink: ResourceLink = {
      id: `${Date.now()}`,
      type: activeLinkType,
      url: linkInput.startsWith('http') ? linkInput : `https://${linkInput}`
    };
    setAddedLinks(prev => [...prev, newLink]);
    setLinkInput('');
    setActiveLinkType(null);
  };

  // Remove link
  const removeLink = (id: string) => {
    setAddedLinks(prev => prev.filter(l => l.id !== id));
  };

  // Toggle member selection
  const toggleMember = (id: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, selected: !m.selected } : m));
  };

  const selectedCount = members.filter(m => m.selected).length + 1;

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
    m.role.toLowerCase().includes(memberSearch.toLowerCase()) ||
    m.handle.toLowerCase().includes(memberSearch.toLowerCase()) ||
    m.empId.toLowerCase().includes(memberSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full max-h-full overflow-hidden space-y-6 select-none relative">
      
      {/* Top Header */}
      <div className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#dadada] pb-4 gap-4">
        {/* User Info Header */}
        <div className="flex items-center gap-4">
          <div className="relative shrink-0 size-12 rounded-full p-[2.5px] figma-avatar-ring shadow-sm">
            <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center relative overflow-hidden">
                {/* Chrome-style colorful quadrant icon */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500 opacity-90" />
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400 opacity-90" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-500 opacity-90" />
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-500 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-white opacity-95" />
                  </div>
                </div>
              </div>
            </div>
            <span className="z-10 absolute bottom-0 right-0 size-3 bg-emerald-500 border-2 border-white rounded-full" />
          </div>

          <div>
            <h1 className="font-['Roboto'] font-bold text-[20px] text-[#3c3c3c] leading-tight">
              Omega Force
            </h1>
            <p className="font-['Roboto'] text-[14px] text-[#a19791] mt-0.5">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="px-6 py-2.5 rounded-full border border-[#eaecf0] bg-white text-[#3c3c3c] font-medium text-[14px] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              alert('Project Group Created Successfully!');
              router.back();
            }}
            className="px-6 py-2.5 rounded-full bg-[#06530b] text-white font-medium text-[14px] hover:bg-emerald-900 shadow-md transition-all cursor-pointer"
          >
            Create Project Group
          </button>
        </div>
      </div>

      {/* Main Form Scrollable Container */}
      <div className="flex-1 min-h-0 overflow-y-auto space-y-6 pr-2">
        
        {/* SECTION 1: PROJECT INFORMATION */}
        <div className="bg-white border border-[#e5e7eb] rounded-[24px] p-6 space-y-6 shadow-2xs">
          
          {/* Section Header */}
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-emerald-50 text-[#06530b] flex items-center justify-center border border-emerald-100 shrink-0">
              <Folder className="size-5 stroke-[2]" />
            </div>
            <div>
              <h2 className="font-['Roboto'] font-bold text-[18px] text-[#3c3c3c]">
                Project Information
              </h2>
              <p className="font-['Roboto'] text-[13px] text-[#a19791]">
                Core project details and metadata
              </p>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Client Name */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Client Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#fcfcfc] border border-[#e5e7eb] rounded-[12px] pl-10 pr-4 py-2.5 text-[14px] text-[#06530b] font-medium focus:outline-none focus:border-[#06530b] focus:ring-1 focus:ring-[#06530b]"
                />
              </div>
            </div>

            {/* Fiverr Order ID */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Fiverr Order ID <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input 
                  type="text" 
                  value={fiverrOrderId}
                  onChange={(e) => setFiverrOrderId(e.target.value)}
                  className="w-full bg-[#fcfcfc] border border-[#e5e7eb] rounded-[12px] pl-10 pr-4 py-2.5 text-[14px] text-[#06530b] font-bold tracking-wide focus:outline-none focus:border-[#06530b] focus:ring-1 focus:ring-[#06530b]"
                />
              </div>
            </div>

            {/* Profile Name */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Profile Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full bg-[#fcfcfc] border border-[#e5e7eb] rounded-[12px] px-4 py-2.5 text-[14px] text-[#06530b] font-medium appearance-none focus:outline-none focus:border-[#06530b] cursor-pointer"
                >
                  <option value="code_tribe_Fiverr">code_tribe_Fiverr</option>
                  <option value="softvence_agency">softvence_agency</option>
                  <option value="qurix_official">qurix_official</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Service Line */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Service Line <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  value={serviceLine}
                  onChange={(e) => setServiceLine(e.target.value)}
                  className="w-full bg-[#fcfcfc] border border-[#e5e7eb] rounded-[12px] px-4 py-2.5 text-[14px] text-[#06530b] font-bold appearance-none focus:outline-none focus:border-[#06530b] cursor-pointer"
                >
                  <option value="CUSTOM-FSD">CUSTOM-FSD</option>
                  <option value="UI-UX-DESIGN">UI-UX-DESIGN</option>
                  <option value="FULLSTACK-DEV">FULLSTACK-DEV</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Team */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Team <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="w-full bg-[#fcfcfc] border border-[#e5e7eb] rounded-[12px] px-4 py-2.5 text-[14px] text-[#06530b] font-medium appearance-none focus:outline-none focus:border-[#06530b] cursor-pointer"
                >
                  <option value="Future Stack">Future Stack</option>
                  <option value="Core Tech">Core Tech</option>
                  <option value="Creative Studio">Creative Studio</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Project Status */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Project Status <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  value={projectStatus}
                  onChange={(e) => setProjectStatus(e.target.value)}
                  className="w-full bg-[#fcfcfc] border border-[#e5e7eb] rounded-[12px] px-4 py-2.5 text-[14px] text-[#06530b] font-medium appearance-none focus:outline-none focus:border-[#06530b] cursor-pointer"
                >
                  <option value="Planing">Planing</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Under Review">Under Review</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Start Date */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Start Date <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <input 
                  type="text"
                  readOnly
                  value={formatDateForDisplay(startDate)}
                  placeholder="MM/DD/YYYY"
                  className="w-full bg-white border border-[#e8eaf0] rounded-[16px] pl-4 pr-11 py-3 text-sm text-[#3c3c3c] font-medium focus:outline-none focus:border-[#06530b] cursor-pointer transition-all"
                />
                <Calendar className="absolute right-4 size-4.5 text-[#616161] pointer-events-none stroke-[1.75]" />
                <input 
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  required
                />
              </div>
            </div>

            {/* Delivery Deadline */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Delivery Deadline <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <input 
                  type="text"
                  readOnly
                  value={formatDateForDisplay(deliveryDeadline)}
                  placeholder="MM/DD/YYYY"
                  className="w-full bg-white border border-[#e8eaf0] rounded-[16px] pl-4 pr-11 py-3 text-sm text-[#3c3c3c] font-medium focus:outline-none focus:border-[#06530b] cursor-pointer transition-all"
                />
                <Calendar className="absolute right-4 size-4.5 text-[#616161] pointer-events-none stroke-[1.75]" />
                <input 
                  type="date"
                  value={deliveryDeadline}
                  onChange={(e) => setDeliveryDeadline(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  required
                />
              </div>
            </div>

            {/* Deadline Time */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Deadline Time
              </label>
              <div className="relative flex items-center">
                <input 
                  type="text"
                  readOnly
                  value={formatTimeForDisplay(deliveryTime)}
                  placeholder="hh:mm AM/PM"
                  className="w-full bg-white border border-[#e8eaf0] rounded-[16px] pl-4 pr-11 py-3 text-sm text-[#3c3c3c] font-medium focus:outline-none focus:border-[#06530b] cursor-pointer transition-all"
                />
                <Clock className="absolute right-4 size-4.5 text-[#616161] pointer-events-none stroke-[1.75]" />
                <input 
                  type="time"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
              </div>
            </div>

            {/* Project Value ($1000) */}
            <div className="space-y-1.5">
              <label className="font-['Roboto'] font-medium text-[13px] text-[#3c3c3c]">
                Project Value <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#06530b]" />
                <input 
                  type="text" 
                  value={projectValue}
                  onChange={(e) => setProjectValue(e.target.value)}
                  placeholder="$1,000"
                  className="w-full bg-[#fcfcfc] border border-[#e5e7eb] rounded-[12px] pl-10 pr-4 py-2.5 text-[14px] text-[#06530b] font-bold focus:outline-none focus:border-[#06530b]"
                />
              </div>
            </div>

          </div>

          {/* Timeline Health Banner */}
          <div className="bg-[#e6f4ea] border border-emerald-200/80 p-4 rounded-[16px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white text-[#06530b] flex items-center justify-center shrink-0 shadow-2xs">
                <Clock className="size-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-['Roboto'] font-medium text-[13px] text-[#06530b]">
                  Remaining Timeline
                </span>
                <h3 className="font-['Roboto'] font-bold text-[18px] text-[#06530b] leading-tight">
                  3D 9H 25M 53S
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-1.5">
              <span className="font-['Roboto'] font-semibold text-[12px] text-[#06530b]">
                Timeline Health
              </span>
              <div className="w-48 h-2.5 bg-emerald-200/80 rounded-full overflow-hidden flex">
                <div className="h-full bg-[#06530b] w-[80%] rounded-full" />
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 2: TEAM MEMBERS SELECTION */}
        <div className="bg-white border border-[#e5e7eb] rounded-[24px] p-6 space-y-5 shadow-2xs">
          
          {/* Owner Row Card */}
          <div className="bg-[#fcfcfc] border border-[#e5e7eb] rounded-[16px] p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#06530b] text-white font-bold flex items-center justify-center text-lg overflow-hidden shrink-0">
                S
              </div>
              <div>
                <h4 className="font-['Roboto'] font-bold text-[15px] text-[#3c3c3c]">
                  Softvence
                </h4>
                <p className="font-['Roboto'] text-[12px] text-[#828282]">
                  Platform Admin · @alex.chen · EMP001
                </p>
              </div>
            </div>

            <span className="bg-gray-100 border border-gray-200 text-[#828282] text-[12px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
              <Lock className="size-3" />
              <span>Cannot be changed</span>
            </span>
          </div>

          {/* Member Search input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <input 
              type="text" 
              placeholder="Search by name, username, or Employee ID..."
              value={memberSearch}
              onChange={(e) => setMemberSearch(e.target.value)}
              className="w-full bg-[#f3f3f5] border border-transparent rounded-[12px] pl-10 pr-4 py-2.5 text-[14px] text-[#3c3c3c] focus:outline-none focus:bg-white focus:border-[#eaecf0] transition-all"
            />
          </div>

          {/* Member Selection List */}
          <div className="divide-y divide-[#f0f0f0]">
            {filteredMembers.map((member) => (
              <div 
                key={member.id}
                onClick={() => toggleMember(member.id)}
                className="py-3 flex items-center justify-between hover:bg-gray-50/80 px-2 rounded-xl transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="size-10 rounded-full object-cover shrink-0 border border-gray-100"
                  />
                  <div>
                    <h5 className="font-['Roboto'] font-bold text-[14px] text-[#3c3c3c]">
                      {member.name}
                    </h5>
                    <p className="font-['Roboto'] text-[12px] text-[#828282]">
                      {member.role} · {member.handle} · {member.empId}
                    </p>
                  </div>
                </div>

                <div className={`size-5 rounded-full border flex items-center justify-center transition-all ${
                  member.selected 
                    ? 'bg-[#06530b] border-[#06530b] text-white' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {member.selected && <Check className="size-3 stroke-[3]" />}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="flex items-center justify-between text-[12px] text-[#828282] pt-2 border-t border-[#f0f0f0]">
            <span>{selectedCount} members selected (including owner)</span>
            <span>Members can leave the group but cannot delete it.</span>
          </div>

        </div>

        {/* SECTION 3: PROJECT REQUIREMENTS */}
        <div className="bg-white border border-[#e5e7eb] rounded-[24px] p-6 space-y-6 shadow-2xs">
          
          {/* Section Header */}
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shrink-0">
              <Share2 className="size-5 stroke-[2]" />
            </div>
            <div>
              <h2 className="font-['Roboto'] font-bold text-[18px] text-[#3c3c3c]">
                Project Requirements
              </h2>
              <p className="font-['Roboto'] text-[13px] text-[#a19791]">
                Attach files, links, and resources for the project
              </p>
            </div>
          </div>

          {/* Hidden File Input */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            multiple 
            className="hidden" 
          />

          {/* Drag and Drop Zone */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#d1d5db] hover:border-[#06530b] transition-colors rounded-[20px] p-8 flex flex-col items-center justify-center text-center gap-3 bg-[#fafafa] cursor-pointer group"
          >
            <div className="size-12 rounded-full bg-slate-100 group-hover:bg-emerald-50 text-[#06530b] flex items-center justify-center shadow-2xs transition-colors">
              <UploadCloud className="size-6 stroke-[2]" />
            </div>

            <div>
              <h4 className="font-['Roboto'] font-bold text-[15px] text-[#3c3c3c]">
                Drag & drop files here
              </h4>
              <p className="font-['Roboto'] text-[13px] text-[#828282] mt-0.5">
                or <span className="text-[#06530b] font-semibold underline">click to browse files from your computer</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {['PDF', 'DOC', 'XLSX', 'PPTX', 'ZIP', 'PNG', 'MP4'].map((fmt) => (
                <span key={fmt} className="bg-gray-200/80 text-[#575757] text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase">
                  {fmt}
                </span>
              ))}
            </div>
          </div>

          {/* Render Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2 pt-2">
              <h5 className="font-['Roboto'] font-semibold text-[13px] text-[#3c3c3c]">
                Selected Files ({uploadedFiles.length}):
              </h5>
              <div className="flex flex-wrap gap-2">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="bg-[#e6f4ea] border border-emerald-200 text-[#06530b] px-3.5 py-1.5 rounded-xl text-[13px] font-medium flex items-center gap-2">
                    <FileCheck className="size-4 shrink-0" />
                    <span className="truncate max-w-[200px]">{file.name}</span>
                    <span className="text-[11px] opacity-75">({file.size})</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(file.id);
                      }}
                      className="p-0.5 rounded-full hover:bg-emerald-200/80 text-[#06530b] transition-colors cursor-pointer"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OR ADD LINK Divider */}
          <div className="relative flex items-center justify-center my-4">
            <div className="h-px w-full bg-[#e5e7eb]" />
            <span className="absolute bg-white px-4 text-[11px] font-bold text-[#828282] uppercase tracking-wider">
              OR ADD LINK
            </span>
          </div>

          {/* Link Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button 
              onClick={() => setActiveLinkType('Figma')}
              className="px-4 py-2 rounded-full border border-[#e5e7eb] bg-white hover:bg-purple-50 hover:border-purple-200 text-[13px] font-medium text-[#3c3c3c] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <FileText className="size-4 text-purple-600" />
              <span>Figma +</span>
            </button>
            <button 
              onClick={() => setActiveLinkType('Google Drive')}
              className="px-4 py-2 rounded-full border border-[#e5e7eb] bg-white hover:bg-blue-50 hover:border-blue-200 text-[13px] font-medium text-[#3c3c3c] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Globe className="size-4 text-blue-600" />
              <span>Google Drive +</span>
            </button>
            <button 
              onClick={() => setActiveLinkType('GitHub')}
              className="px-4 py-2 rounded-full border border-[#e5e7eb] bg-white hover:bg-slate-100 text-[13px] font-medium text-[#3c3c3c] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <GithubIcon className="size-4 text-slate-800" />
              <span>GitHub +</span>
            </button>
            <button 
              onClick={() => setActiveLinkType('External URL')}
              className="px-4 py-2 rounded-full border border-[#e5e7eb] bg-white hover:bg-emerald-50 hover:border-emerald-200 text-[13px] font-medium text-[#3c3c3c] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <LinkIcon className="size-4 text-[#06530b]" />
              <span>External URL +</span>
            </button>
          </div>

          {/* Render Added Resource Links */}
          {addedLinks.length > 0 && (
            <div className="space-y-2 pt-2">
              <h5 className="font-['Roboto'] font-semibold text-[13px] text-[#3c3c3c]">
                Attached Links ({addedLinks.length}):
              </h5>
              <div className="flex flex-wrap gap-2">
                {addedLinks.map((link) => (
                  <div key={link.id} className="bg-gray-100 border border-gray-200 text-[#3c3c3c] px-3.5 py-1.5 rounded-xl text-[13px] font-medium flex items-center gap-2">
                    <LinkIcon className="size-3.5 text-[#06530b]" />
                    <span className="font-bold text-[#06530b]">{link.type}:</span>
                    <a href={link.url} target="_blank" rel="noreferrer" className="underline truncate max-w-[240px] text-blue-600">
                      {link.url}
                    </a>
                    <button 
                      onClick={() => removeLink(link.id)}
                      className="p-0.5 rounded-full hover:bg-gray-200 text-gray-500 transition-colors cursor-pointer"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Interactive Link Popover Modal */}
      {activeLinkType && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="font-bold text-[16px] text-[#3c3c3c]">
                Add {activeLinkType} Link
              </h3>
              <button 
                onClick={() => setActiveLinkType(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600">
                Enter URL:
              </label>
              <input 
                type="text" 
                placeholder={`https://${activeLinkType.toLowerCase().replace(/\s+/g, '')}.com/...`}
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#06530b]"
                autoFocus
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button 
                onClick={() => setActiveLinkType(null)}
                className="px-4 py-2 rounded-full text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddLink}
                className="px-5 py-2 rounded-full text-xs font-medium bg-[#06530b] hover:bg-emerald-900 text-white shadow-sm"
              >
                Add Resource
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
