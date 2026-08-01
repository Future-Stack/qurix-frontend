"use client";

import React, { useState, use, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  User, ChevronDown, Camera, CheckCircle2
} from 'lucide-react';

const mockEmployeeData: Record<string, {
  fullName: string;
  username: string;
  employeeId: string;
  phoneNumber: string;
  officialEmail: string;
  designation: string;
  employmentType: string;
  serviceLine: string;
  team: string;
  avatar: string;
}> = {
  '1': {
    fullName: 'Hossain Mishu',
    username: 'hossain_mishu',
    employeeId: '16056',
    phoneNumber: '+880123456789',
    officialEmail: 'hossain@softvence.com',
    designation: 'UI/UX Designer',
    employmentType: 'Full-Time',
    serviceLine: 'FSD',
    team: 'Future Stack',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
};

function EditEmployeeForm({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');

  const employee = mockEmployeeData[id] ?? {
    fullName: 'John Doe',
    username: 'ushakil',
    employeeId: 'E00123',
    phoneNumber: '+1 (555) 000-0000',
    officialEmail: 'login@collabcorp.com',
    designation: 'UI/UX Designer',
    employmentType: 'Full-Time',
    serviceLine: 'FSD',
    team: 'Future Stack',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  };

  const [formData, setFormData] = useState({ ...employee });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(employee.avatar || null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      if (returnTo) {
        router.push(returnTo);
      } else {
        router.push('/super-admin/service-line-management/1?tab=Employee');
      }
    }, 1200);
  };

  return (
    <div className="w-full h-full min-h-0 flex flex-col overflow-hidden bg-white">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#DADADA] px-6 lg:px-[30px] pt-6 lg:pt-[30px] pb-6 shrink-0 bg-white z-10">
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
          <button
            onClick={handleSubmit}
            className="flex-1 sm:flex-none px-4 py-2 bg-[#06530B] hover:bg-[#05290b] text-white rounded-[10px] text-sm font-medium transition-colors shadow-2xs cursor-pointer flex items-center justify-center gap-2"
          >
            {isSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-300" /> Saved!
              </>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-[975px] mx-auto border-x border-[#DADADA] px-6 py-6 md:px-12 md:py-8 space-y-10 flex-1 min-h-0 overflow-y-auto no-scrollbar">
        <div className="space-y-6">
          <div className="flex flex-col items-start gap-4">
            <div className="relative group">
              <div className="w-[78px] h-[78px] rounded-full overflow-hidden border border-[#DADADA] bg-[#F8FAFC] flex items-center justify-center shadow-xs">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-gray-400" />
                )}
              </div>
              <label className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#06530B] text-white flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform">
                <Camera className="w-3.5 h-3.5" />
                <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
              </label>
            </div>
            <h2 className="text-[16px] font-medium text-[#414141]">
              Employee Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Full Name <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#06530B]" />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] placeholder-gray-400 focus:outline-none focus:border-[#06530B] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Username
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                placeholder="ushakil"
                className="w-full px-4 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] placeholder-gray-400 focus:outline-none focus:border-[#06530B] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Employee ID <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                value={formData.employeeId}
                onChange={(e) => handleInputChange('employeeId', e.target.value)}
                placeholder="E00123"
                required
                className="w-full px-4 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] placeholder-gray-400 focus:outline-none focus:border-[#06530B] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Phone Number <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="+1 (555) 000-0000"
                required
                className="w-full px-4 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] placeholder-gray-400 focus:outline-none focus:border-[#06530B] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Official Email
              </label>
              <input
                type="email"
                value={formData.officialEmail}
                onChange={(e) => handleInputChange('officialEmail', e.target.value)}
                placeholder="login@collabcorp.com"
                className="w-full px-4 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] placeholder-gray-400 focus:outline-none focus:border-[#06530B] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Designation <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] appearance-none focus:outline-none focus:border-[#06530B] cursor-pointer"
                >
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="QA Engineer">QA Engineer</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium text-[#616161]">
              Employment Type <span className="text-[#EF4444]">*</span>
            </label>
            <div className="relative">
              <select
                value={formData.employmentType}
                onChange={(e) => handleInputChange('employmentType', e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] appearance-none focus:outline-none focus:border-[#06530B] cursor-pointer"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Probation">Probation</option>
                <option value="Permanent">Permanent</option>
                <option value="Notice Period">Notice Period</option>
                <option value="Remote">Remote</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[16px] bg-[#06530B]/8 flex items-center justify-center text-[#06530B]">
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-[16px] font-medium text-[#414141]">
              Organization Assignment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Service Line <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.serviceLine}
                  onChange={(e) => handleInputChange('serviceLine', e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] appearance-none focus:outline-none focus:border-[#06530B] cursor-pointer"
                >
                  <option value="FSD">FSD</option>
                  <option value="CUSTOM-FSD">CUSTOM-FSD</option>
                  <option value="UI-UX-DESIGN">UI-UX-DESIGN</option>
                  <option value="QA-TESTING">QA-TESTING</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium text-[#616161]">
                Team <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.team}
                  onChange={(e) => handleInputChange('team', e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-white border border-[#E8EAF0] rounded-[11px] text-sm text-[#06530B] appearance-none focus:outline-none focus:border-[#06530B] cursor-pointer"
                >
                  <option value="Future Stack">Future Stack</option>
                  <option value="Cyber Monks">Cyber Monks</option>
                  <option value="Dev Ninja">Dev Ninja</option>
                  <option value="Innosight Design">Innosight Design</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function EditEmployeePage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <EditEmployeeForm params={params} />
    </Suspense>
  );
}
