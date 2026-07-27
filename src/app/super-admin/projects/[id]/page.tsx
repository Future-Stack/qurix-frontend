"use client";

import React, { useState } from 'react';
import { 
  FileText, User, Hash, ChevronDown, Calendar, Clock, 
  Upload, Link as LinkIcon, FilePlus2, Trash2, CheckCircle2, ArrowLeft, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

export default function SuperAdminProjectDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.id ? String(params.id) : 'FO2D9BC6E142';

  const [formData, setFormData] = useState({
    clientName: 'lawalx',
    orderId: projectId,
    profileName: 'code_tribe_fiverr',
    serviceLine: 'CUSTOM-FSD',
    team: 'Future Stack',
    status: 'URGENT',
    startDate: '2026-07-18',
    deliveryDeadline: '2026-07-30',
    deadlineTime: '16:57',
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([
    { name: 'Requirement_v1.pdf', size: '2.4 MB' },
    { name: 'Wireframes.fig', size: '15.2 MB' }
  ]);

  const [customLinks, setCustomLinks] = useState<{ label: string; url: string }[]>([
    { label: 'Figma', url: 'https://figma.com/design/qurix-app' },
    { label: 'GitHub', url: 'https://github.com/qurix/app' }
  ]);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`
      }));
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddLink = (label: string, defaultUrl: string) => {
    const url = prompt(`Enter ${label} Link URL:`, defaultUrl || 'https://');
    if (url) {
      setCustomLinks(prev => [...prev, { label, url }]);
    }
  };

  const handleRemoveLink = (index: number) => {
    setCustomLinks(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      router.push('/super-admin/dashboard');
    }, 1200);
  };

  return (
    <div className="h-full max-w-full overflow-hidden p-4 md:p-6">
      <div className="h-full overflow-y-auto no-scrollbar">
        <div className="pb-12 w-full mx-auto">
        
          {/* Top Header with Badges */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#E2E8F0] pb-4 ">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-[#00AB0C] p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-lg md:text-xl overflow-hidden relative">
                  <span className="z-10">S</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-0.5">Project Details ({formData.orderId})</h1>
                <p className="text-xs md:text-sm text-[#64748B]">Super Admin Panel</p>
              </div>
            </div>

            {/* Header Badges & Actions */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              <div className="bg-[#06530B] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                3D 9H 25M 53S
              </div>
              <div className="flex items-center gap-1 bg-[#475569] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                {formData.status} <ChevronDown className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-1 bg-[#FEE2E2] text-[#EF4444] border border-[#FCA5A5] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                <AlertTriangle className="w-3.5 h-3.5" /> URGENT
              </div>

              <div className="flex items-center gap-2 ml-auto md:ml-2">
                <Link 
                  href="/super-admin/dashboard"
                  className="px-4 py-2 border border-[#E2E8F0] bg-white rounded-xl text-xs md:text-sm font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Back
                </Link>
                <button 
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-4 py-2 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm cursor-pointer"
                >
                  {isSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-300" /> Saved!
                    </>
                  ) : (
                    'Update Project'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="bg-white border-r border-l border-[#E2E8F0] p-6 md:p-8 space-y-10 mx-auto lg:max-w-6xl ">
            
            {/* Section 1: Project Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                  <FilePlus2 className="w-4 h-4 text-[#00AB0C]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#0F172A]">Project Information</h3>
                  <p className="text-xs text-[#94A3B8]">Core project details and metadata</p>
                </div>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                
                {/* Client Name */}
                <div className="space-y-1.5">
                  <label htmlFor="clientName" className="block text-xs font-bold text-[#475569]">
                    Client Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#00AB0C]" />
                    <input 
                      id="clientName"
                      type="text" 
                      value={formData.clientName}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      placeholder="RetailCo, Acme Corp..."
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium" 
                    />
                  </div>
                </div>

                {/* Fiverr Order ID */}
                <div className="space-y-1.5">
                  <label htmlFor="orderId" className="block text-xs font-bold text-[#475569]">
                    Fiverr Order ID <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Hash className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      id="orderId"
                      type="text" 
                      value={formData.orderId}
                      onChange={(e) => handleInputChange('orderId', e.target.value)}
                      placeholder="FO2354BC7EA142"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-bold" 
                    />
                  </div>
                </div>

                {/* Profile Name */}
                <div className="space-y-1.5">
                  <label htmlFor="profileName" className="block text-xs font-bold text-[#475569]">
                    Profile Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="profileName" 
                      value={formData.profileName}
                      onChange={(e) => handleInputChange('profileName', e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer"
                    >
                      <option value="code_tribe_fiverr">code_tribe_fiverr</option>
                      <option value="softvence_official">softvence_official</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Service Line */}
                <div className="space-y-1.5">
                  <label htmlFor="serviceLine" className="block text-xs font-bold text-[#475569]">
                    Service Line <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="serviceLine" 
                      value={formData.serviceLine}
                      onChange={(e) => handleInputChange('serviceLine', e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer"
                    >
                      <option value="CUSTOM-FSD">CUSTOM-FSD</option>
                      <option value="UI-UX-DESIGN">UI-UX-DESIGN</option>
                      <option value="QA-TESTING">QA-TESTING</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Team */}
                <div className="space-y-1.5">
                  <label htmlFor="team" className="block text-xs font-bold text-[#475569]">
                    Team <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="team" 
                      value={formData.team}
                      onChange={(e) => handleInputChange('team', e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer"
                    >
                      <option value="Future Stack">Future Stack</option>
                      <option value="Innosight Design">Innosight Design</option>
                      <option value="Bits Wise">Bits Wise</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Project Status */}
                <div className="space-y-1.5">
                  <label htmlFor="status" className="block text-xs font-bold text-[#475569]">
                    Project Status <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="status" 
                      value={formData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer"
                    >
                      <option value="URGENT">URGENT</option>
                      <option value="PLANING">PLANING</option>
                      <option value="WIP">WIP</option>
                      <option value="DELIVERED">DELIVERED</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Start Date */}
                <div className="space-y-1.5">
                  <label htmlFor="startDate" className="block text-xs font-bold text-[#475569]">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      id="startDate"
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      required
                      className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium" 
                    />
                  </div>
                </div>

                {/* Delivery Deadline */}
                <div className="space-y-1.5">
                  <label htmlFor="deliveryDeadline" className="block text-xs font-bold text-[#475569]">
                    Delivery Deadline <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      id="deliveryDeadline"
                      type="date" 
                      value={formData.deliveryDeadline}
                      onChange={(e) => handleInputChange('deliveryDeadline', e.target.value)}
                      required
                      className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium" 
                    />
                  </div>
                </div>

                {/* Deadline Time */}
                <div className="space-y-1.5">
                  <label htmlFor="deadlineTime" className="block text-xs font-bold text-[#475569]">
                    Deadline Time
                  </label>
                  <div className="relative">
                    <input 
                      id="deadlineTime"
                      type="time" 
                      value={formData.deadlineTime}
                      onChange={(e) => handleInputChange('deadlineTime', e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium" 
                    />
                  </div>
                </div>

              </div>

              {/* Live Remaining Timeline Preview Box */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#00AB0C]" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#94A3B8] block">Remaining Timeline</span>
                    <span className="text-sm font-bold text-[#06530B]">3D 9H 25M 53S</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-xs font-bold text-[#64748B]">Timeline Health:</span>
                  <div className="w-32 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#00AB0C] rounded-full" />
                  </div>
                </div>
              </div>

            </div>

            {/* Section 2: Project Requirements & Resources */}
            <div className="pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-[#00AB0C]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#0F172A]">Project Requirements</h3>
                  <p className="text-xs text-[#94A3B8]">Attach files, links, and resources for the project</p>
                </div>
              </div>

              {/* Drag & Drop File Upload Box */}
              <div className="border-2 border-dashed border-[#CBD5E1] hover:border-[#00AB0C] transition-colors rounded-2xl p-8 text-center bg-[#F8FAFC] relative">
                <input 
                  type="file" 
                  multiple 
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-3">
                  <Upload className="w-6 h-6 text-[#00AB0C]" />
                </div>
                <p className="text-sm font-bold text-[#0F172A] mb-1">Drag & drop files here</p>
                <p className="text-xs text-[#64748B] mb-4">or click to browse from your computer</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {['PDF', 'DOC', 'XLSX', 'PPTX', 'ZIP', 'PNG', 'MP4'].map(ext => (
                    <span key={ext} className="text-[10px] font-bold text-[#475569] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-md shadow-2xs">
                      {ext}
                    </span>
                  ))}
                </div>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-bold text-[#0F172A]">Attached Files ({uploadedFiles.length})</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs">
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-[#00AB0C] shrink-0" />
                          <span className="font-medium text-[#0F172A] truncate">{file.name} ({file.size})</span>
                        </div>
                        <button type="button" onClick={() => handleRemoveFile(idx)} className="text-red-400 hover:text-red-600 p-1">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Link Buttons */}
              <div className="mt-6">
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-[#E2E8F0]"></div>
                  <span className="flex-shrink mx-4 text-xs font-medium text-[#94A3B8]">or add link</span>
                  <div className="flex-grow border-t border-[#E2E8F0]"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                  <button 
                    type="button" 
                    onClick={() => handleAddLink('Figma', 'https://figma.com/design/...')}
                    className="flex items-center gap-2 px-4 py-2 border border-[#E2E8F0] bg-white hover:bg-gray-50 rounded-xl text-xs font-bold text-[#0F172A] transition-colors shadow-2xs"
                  >
                    <LinkIcon className="w-3.5 h-3.5 text-purple-600" /> Figma
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleAddLink('Google Drive', 'https://drive.google.com/...')}
                    className="flex items-center gap-2 px-4 py-2 border border-[#E2E8F0] bg-white hover:bg-gray-50 rounded-xl text-xs font-bold text-[#0F172A] transition-colors shadow-2xs"
                  >
                    <LinkIcon className="w-3.5 h-3.5 text-blue-600" /> Google Drive
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleAddLink('GitHub', 'https://github.com/...')}
                    className="flex items-center gap-2 px-4 py-2 border border-[#E2E8F0] bg-white hover:bg-gray-50 rounded-xl text-xs font-bold text-[#0F172A] transition-colors shadow-2xs"
                  >
                    <LinkIcon className="w-3.5 h-3.5 text-gray-800" /> GitHub
                  </button>
                </div>

                {/* Custom Attached Links */}
                {customLinks.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-bold text-[#0F172A]">Attached Links</p>
                    <div className="space-y-1.5">
                      {customLinks.map((link, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl text-xs border border-[#E2E8F0]">
                          <span className="font-bold text-[#00AB0C]">{link.label}: <a href={link.url} target="_blank" rel="noreferrer" className="font-normal text-blue-600 underline ml-1">{link.url}</a></span>
                          <button type="button" onClick={() => handleRemoveLink(idx)} className="text-red-400 hover:text-red-600 p-1">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
