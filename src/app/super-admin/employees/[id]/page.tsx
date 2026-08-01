"use client";

import React, { use, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Edit2, Building2, ShieldCheck } from 'lucide-react';

const mockEmployeeData: Record<string, {
  fullName: string;
  username: string;
  employeeId: string;
  phoneNumber: string;
  officialEmail: string;
  designation: string;
  joiningDate: string;
  employmentType: string;
  serviceLine: string;
  team: string;
  teamLeader: string;
  loginEmail: string;
  lastLogin: string;
  passwordStatus: string;
  role: string;
  status: string;
  avatar: string;
}> = {
  '1': {
    fullName: 'Hossain Mishu',
    username: '@hossain_mishu',
    employeeId: '16056',
    phoneNumber: '+880 123 456 789',
    officialEmail: 'hossain@softvence.com',
    designation: 'Senior UI/UX Designer',
    joiningDate: 'Oct 12, 2020',
    employmentType: 'Full-time Permanent',
    serviceLine: 'FSD',
    team: 'Future Stack',
    teamLeader: 'Imran',
    loginEmail: 'hossain@softvence.com',
    lastLogin: 'Thu Jul 30, 3:52 PM',
    passwordStatus: 'Strong',
    role: 'Employee',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  '2': {
    fullName: 'Sofia Ahmed',
    username: '@sofia_ahmed',
    employeeId: '16057',
    phoneNumber: '+880 123 456 790',
    officialEmail: 'sofia@softvence.com',
    designation: 'Lead Frontend Developer',
    joiningDate: 'Jan 15, 2021',
    employmentType: 'Full-time Permanent',
    serviceLine: 'FSD',
    team: 'Future Stack',
    teamLeader: 'Imran',
    loginEmail: 'sofia@softvence.com',
    lastLogin: 'Thu Jul 30, 2:10 PM',
    passwordStatus: 'Strong',
    role: 'Employee',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  },
};

function ViewEmployeeContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');

  const employee = mockEmployeeData[id] ?? {
    fullName: 'Hossain Mishu',
    username: '@hossain_mishu',
    employeeId: '16056',
    phoneNumber: '+880 123 456 789',
    officialEmail: 'hossain@softvence.com',
    designation: 'Senior UI/UX Designer',
    joiningDate: 'Oct 12, 2020',
    employmentType: 'Full-time Permanent',
    serviceLine: 'FSD',
    team: 'Future Stack',
    teamLeader: 'Imran',
    loginEmail: 'hossain@softvence.com',
    lastLogin: 'Thu Jul 30, 3:52 PM',
    passwordStatus: 'Strong',
    role: 'Employee',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  };

  const editHref = `/super-admin/employees/${id}/edit${returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ''}`;

  return (
    <div className="w-full h-full min-h-0 flex flex-col overflow-y-auto no-scrollbar bg-white">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#DADADA] px-6 lg:px-[30px] pt-6 lg:pt-[30px] pb-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full p-[2.5px] figma-avatar-ring shrink-0">
            <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                <span className="z-10">C</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-black tracking-tight mb-1">
              Employee Information
            </h1>
            <p className="text-sm text-[#A19791]">Admin Panel</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => returnTo ? router.push(returnTo) : router.back()}
            className="flex-1 sm:flex-none px-4 py-2 border border-[#E8EAF0] bg-white rounded-[12px] text-sm font-medium text-[#64748B] hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
          >
            Back
          </button>
          <Link
            href={editHref}
            className="flex-1 sm:flex-none px-4 py-2 bg-[#06530B] hover:bg-[#05290b] text-white rounded-[10px] text-sm font-medium transition-colors shadow-2xs cursor-pointer flex items-center justify-center gap-2"
          >
            <Edit2 className="w-4 h-4" /> Edit information
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[975px] mx-auto border-x border-[#DADADA] px-4 py-6 md:px-8 md:py-8 flex-1">
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
          <div className="flex-1 w-full space-y-6">
            <div className="bg-white border border-[#E8E8E8] rounded-[15px] p-5 space-y-4">
              <h2 className="text-[16px] font-bold text-[#414141] uppercase tracking-wide">
                PERSONAL INFORMATION
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Full Name</p>
                  <p className="text-sm font-medium text-[#06530B] truncate">{employee.fullName}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Employee ID</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.employeeId}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Designation</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.designation}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Work Email</p>
                  <p className="text-sm font-medium text-[#06530B] truncate">{employee.officialEmail}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Phone Number</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Joining Date</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.joiningDate}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Username</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.username}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Employment Type</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.employmentType}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-[18px] p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[16px] bg-[#06530B]/8 flex items-center justify-center text-[#06530B]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h2 className="text-[16px] font-bold text-[#414141] uppercase tracking-wide">
                  ORGANIZATION & HIERARCHY
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Service Line</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.serviceLine}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Team</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.team}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Team Leader</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.teamLeader}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-[18px] p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[16px] bg-[#06530B]/8 flex items-center justify-center text-[#06530B]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="text-[16px] font-bold text-[#414141] uppercase tracking-wide">
                  ACCOUNT SECURITY
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Login Email</p>
                  <p className="text-sm font-medium text-[#06530B] truncate">{employee.loginEmail}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Last Login</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.lastLogin}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616161] mb-1">Password Status</p>
                  <p className="text-sm font-medium text-[#06530B]">{employee.passwordStatus}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[297px] shrink-0 bg-white border border-[#E8E8E8] rounded-[17px] overflow-hidden flex flex-col items-center">
            <div className="bg-[#06530B] h-[80px] w-full" />
            <div className="w-full px-5 pb-6 flex flex-col items-center space-y-3.5 -mt-10">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-white shrink-0">
                <img
                  src={employee.avatar}
                  alt={employee.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-0.5">
                <h3 className="text-[16px] font-bold text-[#414141] uppercase tracking-tight">
                  {employee.fullName}
                </h3>
                <p className="text-[11px] text-[#414141]">{employee.username}</p>
              </div>
              <p className="text-[14px] font-medium text-[#06530B]">
                ID {employee.employeeId}
              </p>
              <div className="w-full border-t border-dashed border-[#CCCCCC] my-1" />
              <div className="w-full grid grid-cols-2 gap-y-4 gap-x-2 text-left">
                <div>
                  <span className="block text-[10px] font-bold text-[#777587] uppercase tracking-wider mb-0.5">ROLE</span>
                  <span className="text-[14px] text-[#06530B] font-medium block">{employee.role}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#777587] uppercase tracking-wider mb-0.5">STATUS</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span className="text-[14px] text-[#06530B] font-medium">{employee.status}</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#777587] uppercase tracking-wider mb-0.5">SERVICE LINE</span>
                  <span className="text-[14px] text-[#06530B] font-medium block">{employee.serviceLine}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#777587] uppercase tracking-wider mb-0.5">TEAM</span>
                  <span className="text-[14px] text-[#06530B] font-medium block">{employee.team}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ViewEmployeePage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <ViewEmployeeContent params={params} />
    </Suspense>
  );
}
