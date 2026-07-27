"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Eye, Edit } from 'lucide-react';

export default function EditEmployeePage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="h-full max-w-full overflow-hidden m-4 mr-4">
      <div className="h-full bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-y-auto no-scrollbar">
        <div className="p-8 pb-12 max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-10 border-b border-[#E2E8F0] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-[#E2E8F0] p-0.5 flex items-center justify-center shrink-0 bg-white shadow-sm">
                <div className="text-xl font-bold italic tracking-tighter">dyson</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#0F172A] mb-0.5">Employee Information</h1>
                <p className="text-[12px] text-[#64748B]">Admin Panel</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => router.back()}
                className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#475569] rounded-xl text-[13px] font-bold transition-colors shadow-sm hover:bg-gray-50"
              >
                Back
              </button>
              <button className="px-6 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-[13px] font-bold transition-colors shadow-sm">
                Create Employee
              </button>
            </div>
          </div>

          <div className="max-w-4xl">
            
            {/* Avatar Section */}
            <div className="mb-8 relative w-16 h-16">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white shadow-sm" />
              <button className="absolute bottom-0 right-0 w-5 h-5 bg-[#00AB0C] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                <Edit className="w-2.5 h-2.5" />
              </button>
            </div>

            <form className="space-y-8">
              
              {/* Employee Information */}
              <div>
                <h3 className="text-[14px] font-bold text-[#0F172A] mb-4">Employee Information</h3>
                
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600 flex items-center justify-center">
                        <span className="text-[12px]">👤</span>
                      </span>
                      <input type="text" defaultValue="John Doe" className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Employee ID <span className="text-red-500">*</span>
                    </label>
                    <input type="text" defaultValue="E00123" className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Username
                    </label>
                    <input type="text" defaultValue="johndoe" className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input type="text" defaultValue="+1 (555) 123-3456" className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]">
                        <option>UI/UX Designer</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Employment Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]">
                        <option>Full-Time</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Organization Assignment */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#00AB0C]">
                  <div className="w-6 h-6 rounded bg-green-50 flex items-center justify-center">
                    <span className="text-[12px]">🏢</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-[#0F172A]">Organization Assignment</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Service Line <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]">
                        <option>FSD</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Team <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]">
                        <option>Future Stack</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Role & Account */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#00AB0C]">
                  <div className="w-6 h-6 rounded bg-green-50 flex items-center justify-center">
                    <span className="text-[12px]">👤</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-[#0F172A]">Role & Account</h3>
                </div>
                
                <div className="grid grid-cols-[1fr_1fr_auto_auto_auto] items-end gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Login Email
                    </label>
                    <input type="text" defaultValue="login.johndoe@company.com" className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#475569] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input type="password" defaultValue="***********" className="w-full pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-green-500 text-[#00AB0C]" />
                      <Eye className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <button type="button" className="px-6 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-[13px] font-bold transition-colors shadow-sm h-[42px]">
                    Update
                  </button>

                  <button type="button" className="px-8 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] text-[#94A3B8] rounded-xl text-[13px] font-bold transition-colors shadow-sm hover:bg-gray-50 h-[42px]">
                    Role
                  </button>

                  <button type="button" className="px-8 py-2.5 bg-[#F1F5F9] border border-[#E2E8F0] text-[#94A3B8] rounded-xl text-[13px] font-bold transition-colors shadow-sm hover:bg-gray-100 h-[42px]">
                    Suspend
                  </button>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
