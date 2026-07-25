"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FolderOpen, Calendar, Clock, UploadCloud, Search, ChevronDown, Check
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CreateProjectGroup({ params }: { params: { id: string, teamId: string } }) {
  const router = useRouter();

  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-y-auto no-scrollbar">
        <div className="p-8 pb-12 max-w-3xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-10 border-b border-[#E2E8F0] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-[#E2E8F0] p-0.5 flex items-center justify-center shrink-0 bg-[#0F172A] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-80"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-inner mix-blend-overlay"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 absolute top-[30%] right-[30%]"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#0F172A] mb-0.5">Omega Force</h1>
                <p className="text-[12px] text-[#64748B]">Admin Panel</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => router.back()}
                className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#475569] rounded-xl text-[13px] font-bold transition-colors shadow-sm hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-[13px] font-bold transition-colors shadow-sm">
                Create Project Group
              </button>
            </div>
          </div>

          <form className="space-y-8">
            
            {/* Project Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <FolderOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0F172A]">Project Information</h3>
                  <p className="text-[11px] text-[#64748B]">Core project details and metadata</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Client Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-[10px]">👤</span>
                    </span>
                    <input type="text" placeholder="alexjovis" className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Fiverr Order ID <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">#</span>
                    <input type="text" placeholder="FO2D9BC6E142" className="w-full pl-8 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Profile Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-green-500">
                      <option>code_tribe_fiverr</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Service Line <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-green-500">
                      <option>CUSTOM FSD</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Team <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-green-500">
                      <option>Future Stack</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Project Status <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-9 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium text-green-600 appearance-none focus:outline-none focus:ring-1 focus:ring-green-500">
                      <option>Planning</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="text" placeholder="15 July 2026" className="w-full pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500" />
                    <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Delivery Deadline <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="text" placeholder="30 July 2026" className="w-full pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500" />
                    <Clock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] mb-2">
                    Deadline Time
                  </label>
                  <div className="relative">
                    <input type="text" placeholder="4:57 PM" className="w-full pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500" />
                    <Clock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Timeline Info Card */}
              <div className="mt-6 bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#DCFCE7]">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#0F172A] mb-0.5">Remaining Timeline</div>
                    <div className="text-[15px] font-extrabold text-[#06530B]">3D 9H 25M 53S</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] font-bold text-[#00AB0C] mb-2">Timeline Health</div>
                  <div className="w-32 h-1.5 bg-green-200 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-[#00AB0C] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Members Selection */}
              <div className="mt-6 border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
                
                {/* Fixed Admin Member */}
                <div className="p-4 flex items-center justify-between border-b border-[#E2E8F0] bg-gray-50/50">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=a" alt="Softvence" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="text-[13px] font-bold text-[#0F172A]">Softvence</div>
                      <div className="text-[11px] text-[#64748B]">Platform Admin - @qurix.dev - EMP001</div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-[10px] font-bold text-[#64748B] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span> Cannot be changed
                  </div>
                </div>

                {/* Member Search and List */}
                <div className="p-4">
                  <div className="relative mb-4">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search by name, username, or Employee ID..." 
                      className="w-full pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[13px] focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-1">
                    {[
                      { name: 'Kathryn Murphy', role: 'Lead Designer', username: '@alex.chin', emp: 'EMP001', selected: false, img: 'https://i.pravatar.cc/150?u=11' },
                      { name: 'Annette Black', role: 'UI/UX Designer', username: '@cunish.chen', emp: 'EMP002', selected: false, img: 'https://i.pravatar.cc/150?u=12' },
                      { name: 'Courtney Henry', role: 'Backend Engineer', username: '@junaka.t', emp: 'EMP003', selected: false, img: 'https://i.pravatar.cc/150?u=13' },
                      { name: 'Robert Fox', role: 'Product Manager', username: '@james.fox', emp: 'EMP004', selected: false, img: 'https://i.pravatar.cc/150?u=14' },
                      { name: 'Kristin Watson', role: 'QA Lead', username: '@emily.park', emp: 'EMP005', selected: false, img: 'https://i.pravatar.cc/150?u=15' },
                    ].map((user, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full" />
                          <div>
                            <div className="text-[13px] font-bold text-[#0F172A]">{user.name}</div>
                            <div className="text-[11px] text-[#64748B]">{user.role} - {user.username} - {user.emp}</div>
                          </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border border-[#CBD5E1] flex items-center justify-center">
                          {/* Empty circle for unselected state to match image */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between">
                  <div className="text-[12px] font-bold text-[#0F172A]">5 members selected (including owner)</div>
                  <div className="text-[10px] text-[#94A3B8]">Members can leave the group but cannot delete it</div>
                </div>
              </div>
            </div>

            {/* Project Requirements */}
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                  <UploadCloud className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0F172A]">Project Requirements</h3>
                  <p className="text-[11px] text-[#64748B]">Attach files, links, and resources for the project</p>
                </div>
              </div>

              <div className="border border-dashed border-[#CBD5E1] rounded-2xl bg-[#F8FAFC] p-10 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                  <UploadCloud className="w-5 h-5 text-gray-400" />
                </div>
                <div className="text-[14px] font-bold text-[#0F172A] mb-1">Drag & drop files here</div>
                <div className="text-[12px] text-[#64748B] mb-6">or click to browse from your computer</div>
                
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                  {['PDF', 'DOC', 'XLSX', 'PPTX', 'ZIP', 'PNG', 'MP4'].map((ext) => (
                    <span key={ext} className="px-2.5 py-1 bg-white border border-[#E2E8F0] rounded text-[10px] font-bold text-[#64748B]">
                      {ext}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 w-full max-w-sm">
                  <div className="h-px bg-[#E2E8F0] flex-1"></div>
                  <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">or add link</span>
                  <div className="h-px bg-[#E2E8F0] flex-1"></div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-full text-[11px] font-bold text-[#475569] shadow-sm hover:bg-gray-50">
                    <span className="text-orange-500">F</span> Figma +
                  </button>
                  <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-full text-[11px] font-bold text-[#475569] shadow-sm hover:bg-gray-50">
                    <span>🗂️</span> Google Drive +
                  </button>
                  <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-full text-[11px] font-bold text-[#475569] shadow-sm hover:bg-gray-50">
                    <span>🐙</span> GitHub +
                  </button>
                  <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-full text-[11px] font-bold text-[#475569] shadow-sm hover:bg-gray-50">
                    <span>🔗</span> External URL +
                  </button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
