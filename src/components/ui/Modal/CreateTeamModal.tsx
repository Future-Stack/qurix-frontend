import React from 'react';
import { Upload, Search, ChevronLeft, ChevronDown } from 'lucide-react';

interface CreateTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTeamModal({ isOpen, onClose }: CreateTeamModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl p-8 relative animate-in fade-in zoom-in duration-200">
        
        {/* Upload Icon Section */}
        <div className="flex flex-col items-center mb-8 mt-2">
          <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-4 border border-[#E2E8F0] cursor-pointer hover:bg-gray-100 transition-colors">
            <Upload className="w-6 h-6 text-[#94A3B8]" />
          </div>
          <h3 className="text-[17px] font-bold text-[#0F172A] mb-1">Team Icon / Brand Identity</h3>
          <p className="text-[11px] text-[#64748B]">
            Recommended dimensions: 256x256px, Formats: PNG, SVG or JPG (Max 2MB)
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Team Name */}
            <div>
              <label className="block text-[11px] font-bold text-[#64748B] mb-2">
                Team Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center opacity-80">
                  <span className="text-[8px] text-white font-bold">A</span>
                </div>
                <input
                  type="text"
                  placeholder="Future Stack"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-[#0F172A]"
                />
              </div>
            </div>

            {/* Team Code */}
            <div>
              <label className="block text-[11px] font-bold text-[#64748B] mb-2">
                Team Code <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#00AB0C]">
                  FST-
                </div>
                <input
                  type="text"
                  placeholder="#041B0"
                  className="w-full pl-14 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#00AB0C] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-[#00AB0C]"
                />
              </div>
            </div>
          </div>

          {/* Service Line */}
          <div>
            <label className="block text-[11px] font-bold text-[#64748B] mb-2">
              Service Line <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#06530B] appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer">
                <option>Custom FSD</option>
                <option>Shopify</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pb-2">
            {/* Team Leader */}
            <div>
              <label className="block text-[11px] font-bold text-[#00AB0C] mb-2">
                Team Leader <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or user ID..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Shift Leader */}
            <div>
              <label className="block text-[11px] font-bold text-[#64748B] mb-2">
                Shift Leader
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or user ID..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-12 h-12 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-gray-50 transition-colors shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-[15px] font-bold transition-colors shadow-sm"
            >
              + Create Team
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
