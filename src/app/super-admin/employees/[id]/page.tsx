"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Edit, Lock, Ban, ArrowLeft } from 'lucide-react';

export default function EmployeeDetailsPage() {
  const router = useRouter();
  const routeParams = useParams();
  const empId = routeParams?.id ? String(routeParams.id) : 'E00123';

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar p-2 sm:p-4 md:p-6">
      <div className="pb-12 w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-[#E2E8F0] pb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[#E2E8F0] p-0.5 flex items-center justify-center shrink-0 bg-white shadow-sm">
              <div className="text-xl font-bold italic tracking-tighter">dyson</div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-0.5">Employee Information</h1>
              <p className="text-xs md:text-sm text-[#64748B]">Admin Panel</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => router.back()}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#E2E8F0] text-[#475569] rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <Link 
              href={`/super-admin/all-employee/${empId}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm"
            >
              <Edit className="w-4 h-4" /> Edit information
            </Link>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Left Column - Information Panels */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Personal Information */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#0F172A] mb-6">Personal information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Full Name</div>
                  <div className="text-[13px] font-semibold text-[#00AB0C]">John Doe</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Employee ID</div>
                  <div className="text-[13px] font-medium text-[#475569]">E00123</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Designation</div>
                  <div className="text-[13px] font-semibold text-[#00AB0C]">UI/UX Designer</div>
                </div>
                
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Work Email</div>
                  <div className="text-[13px] font-semibold text-[#00AB0C] truncate">john.doe@solidcomp.com</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Phone Number</div>
                  <div className="text-[13px] font-medium text-[#475569]">+1 (555) 123-3456</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Joining Date</div>
                  <div className="text-[13px] font-medium text-[#475569]">Oct 12, 2021</div>
                </div>

                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Username</div>
                  <div className="text-[13px] font-semibold text-[#00AB0C]">johndoe</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-[11px] text-[#64748B] mb-1">Employment Type</div>
                  <div className="text-[13px] font-semibold text-[#00AB0C]">Full-time Permanent</div>
                </div>
              </div>
            </div>

            {/* Organization & hierarchy */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-[#00AB0C]">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <span className="text-[16px]">🏢</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">Organization & hierarchy</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Service Line</div>
                  <div className="text-[13px] font-medium text-[#475569]">FSD</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Team</div>
                  <div className="text-[13px] font-medium text-[#475569]">FS</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Team Leader</div>
                  <div className="text-[13px] font-semibold text-[#00AB0C]">Sarah Jenkins</div>
                </div>
              </div>
            </div>

            {/* Account security */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-[#00AB0C]">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">Account security</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Login Email</div>
                  <div className="text-[13px] font-semibold text-[#00AB0C] truncate">john.doe@solidcomp.com</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Last Login</div>
                  <div className="text-[13px] font-medium text-[#475569]">2 hours ago</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] mb-1">Password Status</div>
                  <div className="text-[13px] font-medium text-[#475569]">Strong</div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column - Profile Card */}
          <div>
            <div className="bg-white border border-[#E2E8F0] rounded-[24px] overflow-hidden shadow-sm lg:sticky lg:top-0">
              <div className="h-24 bg-[#06530B] relative"></div>
              <div className="px-6 pb-6 text-center relative mt-[-40px]">
                <div className="w-20 h-20 mx-auto rounded-full border-4 border-white mb-3 bg-white shadow-sm overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-full h-full object-cover" />
                </div>
                
                <h2 className="text-[17px] font-bold text-[#0F172A] mb-1 uppercase tracking-wider">MD SHAKIL</h2>
                <div className="text-[12px] text-[#64748B] mb-2">@uxshakil</div>
                <div className="text-[12px] font-bold text-[#00AB0C] flex items-center justify-center gap-1">
                  <span className="w-3 h-3 bg-green-100 text-green-600 rounded flex items-center justify-center text-[8px]">⭐</span>
                  15214
                </div>

                <div className="w-full border-t border-dashed border-[#E2E8F0] my-6"></div>

                <div className="grid grid-cols-2 gap-4 text-left px-2 mb-6">
                  <div>
                    <div className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">ROLE</div>
                    <div className="text-[13px] font-medium text-[#475569]">Employee</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">STATUS</div>
                    <div className="flex items-center gap-1.5 font-bold text-[13px] text-[#00AB0C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AB0C]"></span> Active
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">SERVICE LINE</div>
                    <div className="text-[13px] font-medium text-[#475569]">FSD</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">TEAM</div>
                    <div className="text-[13px] font-medium text-[#00AB0C]">Future Stack</div>
                  </div>
                </div>

                <button className="w-full py-2.5 flex items-center justify-center gap-2 text-[#EF4444] text-[13px] font-bold bg-red-50 hover:bg-red-100 rounded-xl transition-colors cursor-pointer">
                  <Ban className="w-4 h-4" /> Suspend Account
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
