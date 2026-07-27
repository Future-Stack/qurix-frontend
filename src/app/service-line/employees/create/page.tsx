"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, Hash, Phone, Briefcase, ChevronDown, Eye, EyeOff, 
  ArrowLeft, Camera, CheckCircle2, Mail, Lock
} from 'lucide-react';

export default function CreateEmployeePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    employeeId: '',
    username: '',
    workEmail: '',
    phoneNumber: '',
    employmentType: 'Full-Time',
    designation: 'UI/UX Designer',
    serviceLine: 'CUSTOM-FSD',
    team: 'Future Stack',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setIsSuccess(true);
    setTimeout(() => {
      router.push('/service-line/employees');
    }, 1200);
  };

  return (
    <div className="h-full max-w-full overflow-hidden p-4 md:p-6">
      <div className="h-full overflow-y-auto no-scrollbar">
        <div className="pb-12 w-full max-w-full mx-auto">

          {/* Top Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E2E8F0] p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-[#00AB0C] p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-lg md:text-xl overflow-hidden relative">
                  <span className="z-10">C</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-60"></div>
                </div>
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
              <button 
                onClick={handleSubmit}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-xs md:text-sm font-bold transition-colors shadow-sm"
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-300" /> Created!
                  </>
                ) : (
                  'Create Employee'
                )}
              </button>
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="bg-white  border-r border-l border-[#E2E8F0] p-6 md:p-8 space-y-8 max-w-7xl mx-auto">

            {/* Avatar Upload Container */}
            <div className="flex flex-col items-center justify-center pb-4">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#00AB0C] bg-gray-100 flex items-center justify-center shadow-md">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-10 h-10 text-gray-400" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#06530B] hover:bg-[#05290b] text-white flex items-center justify-center cursor-pointer shadow-md transition-transform group-hover:scale-110">
                  <Camera className="w-4 h-4" />
                  <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                </label>
              </div>
              <p className="text-xs text-[#64748B] mt-2 font-medium">Click camera icon to upload photo</p>
            </div>

            {/* Input Grid - Responsive across devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-xs font-bold text-[#475569]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#00AB0C]" />
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium"
                  />
                </div>
              </div>

              {/* Employee ID */}
              <div className="space-y-1.5">
                <label htmlFor="employeeId" className="block text-xs font-bold text-[#475569]">
                  Employee ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Hash className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="employeeId"
                    type="text"
                    value={formData.employeeId}
                    onChange={(e) => handleInputChange('employeeId', e.target.value)}
                    placeholder="E00123"
                    required
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-bold"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="space-y-1.5">
                <label htmlFor="username" className="block text-xs font-bold text-[#475569]">
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">@</span>
                  <input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    placeholder="johndoe"
                    className="w-full pl-8 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-1.5">
                <label htmlFor="workEmail" className="block text-xs font-bold text-[#475569]">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => handleInputChange('workEmail', e.target.value)}
                    placeholder="john.doe@collabcorp.com"
                    required
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor="phoneNumber" className="block text-xs font-bold text-[#475569]">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="+880 123456789"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium"
                  />
                </div>
              </div>

              {/* Employment Type */}
              <div className="space-y-1.5">
                <label htmlFor="employmentType" className="block text-xs font-bold text-[#475569]">
                  Employment Type
                </label>
                <div className="relative">
                  <select
                    id="employmentType"
                    value={formData.employmentType}
                    onChange={(e) => handleInputChange('employmentType', e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Designation */}
              <div className="space-y-1.5">
                <label htmlFor="designation" className="block text-xs font-bold text-[#475569]">
                  Designation <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    id="designation"
                    value={formData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium appearance-none cursor-pointer"
                  >
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="QA Engineer">QA Engineer</option>
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
                  Team
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

              {/* Password */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-[#475569]">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-9 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label htmlFor="confirmPassword" className="block text-xs font-bold text-[#475569]">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-9 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:border-[#00AB0C] focus:outline-none text-[#0F172A] font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
