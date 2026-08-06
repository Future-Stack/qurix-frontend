import React from 'react';
import { Upload, User, Search, ChevronDown, ArrowLeft, Plus } from 'lucide-react';

export function CreateTeamCard() {
  return (
    <div className="w-[500px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] p-8 flex flex-col mx-auto">
      
      {/* Upload Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center border border-[#E2E8F0] mb-4 cursor-pointer hover:bg-gray-100 transition-colors">
          <Upload className="w-6 h-6 text-[#64748B]" />
        </div>
        <h3 className="font-bold text-[#0F172A] text-[15px] mb-1">Team Icon / Brand Identity</h3>
        <p className="text-[11px] text-[#94A3B8]">Recommended dimensions: 256x256px. Formats: PNG, SVG or JPG (Max 2MB).</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        
        {/* Row 1 */}
        <div className="flex gap-4">
          <div className="flex-1 space-y-1.5">
            <label htmlFor="teamName" className="block text-xs font-bold text-[#475569]">
              Team Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-green-700" />
              <input 
                id="teamName"
                type="text" 
                defaultValue="Future Stack"
                className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A] font-medium" 
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-1.5">
            <label htmlFor="teamCode" className="block text-xs font-bold text-[#475569]">
              Team Code <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input 
                id="teamCode"
                type="text" 
                defaultValue="FSD - F041BD"
                className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-green-700 font-bold tracking-wide" 
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="space-y-1.5">
          <label htmlFor="serviceLine" className="block text-xs font-bold text-[#475569]">
            Service Line <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select id="serviceLine" className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-green-700 font-bold appearance-none cursor-pointer">
              <option>CUSTOM-FSD</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex gap-4">
          <div className="flex-1 space-y-1.5">
            <label htmlFor="teamLeader" className="block text-xs font-bold text-[#06530B]">
              Team Leader <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                id="teamLeader"
                type="text" 
                placeholder="Search by name or user ID..."
                className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A]" 
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-1.5">
            <label htmlFor="coLeader" className="block text-xs font-bold text-[#475569]">
              CO-Leader
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                id="coLeader"
                type="text" 
                placeholder="Search by name or user ID..."
                className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-green-600 focus:outline-none text-[#0F172A]" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-4 mt-8 pt-2">
        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E2E8F0] text-[#64748B] hover:bg-gray-50 transition-colors shrink-0">
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <button className="flex-1 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Create Team
        </button>
      </div>

    </div>
  );
}
