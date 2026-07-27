"use client";

import React, { useState } from 'react';
import { 
  Edit2, User, Hash, Mail, Phone, Briefcase, 
  CheckCircle2, ArrowLeft, KeyRound, UserX
} from 'lucide-react';
import Link from 'next/link';

export default function ViewEmployeePage() {
  const [isActive, setIsActive] = useState(true);

  const employeeData = {
    fullName: 'John Doe',
    employeeId: 'E00123',
    username: '@johndoe',
    workEmail: 'john.doe@collabcorp.com',
    phoneNumber: '+880 123456789',
    employmentType: 'Full-Time',
    designation: 'UI/UX Designer',
    serviceLine: 'CUSTOM-FSD',
    team: 'Future Stack',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    assignedProjects: [
      { id: '1', name: 'franchys || Innosight || FO822580...', role: 'Lead Designer', status: 'WIP' },
      { id: '2', name: 'tprice34 || tech_omega || FO2228CA90708', role: 'UI/UX Specialist', status: 'PLANING' },
    ]
  };

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto no-scrollbar p-2 sm:p-4 md:p-6">
      <div className="pb-12 w-full ">
        
        {/* Top Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8 border-b border-[#E2E8F0] pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#E2E8F0] p-1 flex items-center justify-center shrink-0 bg-white shadow-sm">
              <img 
                src={employeeData.avatar} 
                alt={employeeData.fullName} 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-0.5">Employee Information</h1>
              <p className="text-xs md:text-sm text-[#64748B]">Admin Panel</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link 
              href="/service-line/employees" 
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-[#E2E8F0] bg-white rounded-xl text-xs md:text-sm font-bold text-[#475569] hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <Link 
              href="/service-line/employees/create" 
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm"
            >
              <Edit2 className="w-4 h-4" /> Edit information
            </Link>
          </div>
        </div>

        {/* Main Layout Container - Responsive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Left Column: Personal Information (2 Columns wide) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Personal Information Card */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 sm:p-6 md:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E2E8F0]">
                <h3 className="text-base md:text-lg font-bold text-[#0F172A] uppercase tracking-wider">
                  Personal Information
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  isActive ? 'bg-[#ECFDF5] text-[#00AB0C] border border-[#DCFCE7]' : 'bg-red-50 text-red-600 border border-red-200'
                }`}>
                  {isActive ? 'Active Employee' : 'Deactivated'}
                </span>
              </div>

              {/* Key Value Details Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Full Name</p>
                  <p className="text-sm font-bold text-[#00AB0C] truncate">{employeeData.fullName}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Employee ID</p>
                  <p className="text-sm font-bold text-[#00AB0C]">{employeeData.employeeId}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Username</p>
                  <p className="text-sm font-bold text-[#00AB0C]">{employeeData.username}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Work Email</p>
                  <p className="text-sm font-bold text-[#00AB0C] truncate">{employeeData.workEmail}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Phone Number</p>
                  <p className="text-sm font-bold text-[#00AB0C]">{employeeData.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Employment Type</p>
                  <p className="text-sm font-bold text-[#00AB0C]">{employeeData.employmentType}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Designation</p>
                  <p className="text-sm font-bold text-[#00AB0C]">{employeeData.designation}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Service Line</p>
                  <p className="text-sm font-bold text-[#00AB0C]">{employeeData.serviceLine}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B] mb-1">Team</p>
                  <p className="text-sm font-bold text-[#00AB0C]">{employeeData.team}</p>
                </div>
              </div>
            </div>

            {/* Assigned Projects Card */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 sm:p-6 md:p-8 shadow-sm">
              <h3 className="text-base font-bold text-[#0F172A] mb-4">Assigned Projects</h3>
              <div className="space-y-3">
                {employeeData.assignedProjects.map(proj => (
                  <div key={proj.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] gap-2">
                    <div>
                      <p className="text-sm font-bold text-[#0F172A]">{proj.name}</p>
                      <p className="text-xs text-[#64748B]">Role: {proj.role}</p>
                    </div>
                    <span className="bg-[#06530B] text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {proj.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Actions & Quick Status */}
          <div className="space-y-6">
            
            {/* Account Quick Actions */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 sm:p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">Employee Actions</h3>
              
              <Link 
                href="/service-line/employees/create"
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-xs font-bold text-[#0F172A] transition-colors"
              >
                <Edit2 className="w-4 h-4 text-[#00AB0C]" /> Edit Information
              </Link>

              <button 
                type="button"
                onClick={() => alert('Password reset email sent to employee!')}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-xs font-bold text-[#0F172A] transition-colors cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-blue-600" /> Reset Password
              </button>

              <button 
                type="button"
                onClick={() => setIsActive(!isActive)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  isActive 
                    ? 'bg-red-50 hover:bg-red-100 text-red-600' 
                    : 'bg-green-50 hover:bg-green-100 text-[#00AB0C]'
                }`}
              >
                {isActive ? (
                  <>
                    <UserX className="w-4 h-4" /> Deactivate Account
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Reactivate Account
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
