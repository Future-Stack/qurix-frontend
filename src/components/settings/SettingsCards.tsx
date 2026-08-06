import React from 'react';
import { ArrowLeft, Check, CheckCircle2, ChevronRight, X, User, Phone, Mail, BadgeCheck, Lock, Monitor, Smartphone, UploadCloud } from 'lucide-react';

/* ================================
   1. My Account Card
   ================================ */
export function MyAccountCard() {
  return (
    <div className="w-[380px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] overflow-hidden flex flex-col">
      <div className="p-5 border-b border-[#E2E8F0] flex items-center gap-3">
        <button className="text-[#0F172A] hover:text-[#06530B] transition-colors"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="font-bold text-[#0F172A] text-[17px]">My Account</h2>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img src="https://i.pravatar.cc/150?u=30" alt="Profile" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-[#0F172A] text-lg">Md Shakil</h3>
            <p className="text-sm text-[#64748B]">@uxshakil</p>
          </div>
        </div>

        <h4 className="font-bold text-[#0F172A] text-sm mb-4">Update informations</h4>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-[#64748B] shrink-0" />
            <span className="text-sm font-medium text-[#64748B] w-24 shrink-0">Display name</span>
            <input type="text" defaultValue="Md Shakil" className="flex-1 bg-[#F8FAFC] border border-transparent rounded-lg px-3 py-2 text-sm text-[#0F172A] focus:border-green-500 focus:bg-white outline-none" />
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#64748B] shrink-0" />
            <span className="text-sm font-medium text-[#64748B] w-24 shrink-0">Phone number</span>
            <input type="text" defaultValue="+880 126544700" className="flex-1 bg-[#F8FAFC] border border-transparent rounded-lg px-3 py-2 text-sm text-[#0F172A] focus:border-green-500 focus:bg-white outline-none" />
          </div>

          <div className="flex items-center gap-3">
            <span className="w-4 h-4 text-[#64748B] shrink-0 font-bold flex items-center justify-center text-xs">@</span>
            <span className="text-sm font-medium text-[#64748B] w-24 shrink-0">Username</span>
            <input type="text" defaultValue="@uxshakil" className="flex-1 bg-[#F8FAFC] border border-transparent rounded-lg px-3 py-2 text-sm text-[#0F172A] focus:border-green-500 focus:bg-white outline-none" />
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#64748B] shrink-0" />
            <span className="text-sm font-medium text-[#64748B] w-24 shrink-0">Work email</span>
            <input type="email" defaultValue="mdshakil@softvence.com" className="flex-1 bg-[#F8FAFC] border border-transparent rounded-lg px-3 py-2 text-sm text-[#0F172A] focus:border-green-500 focus:bg-white outline-none" />
          </div>

          <div className="flex items-center gap-3">
            <BadgeCheck className="w-4 h-4 text-[#64748B] shrink-0" />
            <span className="text-sm font-medium text-[#64748B] w-24 shrink-0">Employee ID</span>
            <div className="flex-1 flex justify-between items-center bg-white px-1 py-2">
              <span className="text-sm font-medium text-[#0F172A]">16056</span>
              <div className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                <Check className="w-3 h-3" /> Verified
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-[#E2E8F0] flex justify-between items-center bg-white">
        <button className="px-5 py-2 text-sm font-bold text-[#475569] bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-xl transition-colors">
          Cancel
        </button>
        <button className="px-5 py-2 text-sm font-bold text-white bg-[#06530B] hover:bg-[#05290b] rounded-xl transition-colors">
          Save changes
        </button>
      </div>
    </div>
  );
}

/* ================================
   2. Notifications Card
   ================================ */
export function NotificationsCard() {
  return (
    <div className="w-[380px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] overflow-hidden flex flex-col">
      <div className="p-5 border-b border-[#E2E8F0] flex items-center gap-3">
        <button className="text-[#0F172A] hover:text-[#06530B] transition-colors"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="font-bold text-[#0F172A] text-[17px]">Notifications and Sounds</h2>
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-8">
        <div>
          <h4 className="font-bold text-[#64748B] text-sm mb-4">General</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Allow desktop notifications</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Allow sound</span>
              <Toggle checked={true} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#64748B] text-sm mb-4">Notifications for chats</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Private chats</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Group chats</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Calls</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Reply and mentions</span>
              <Toggle checked={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================
   3. Privacy & Security Card
   ================================ */
export function PrivacySecurityCard() {
  return (
    <div className="w-[380px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] overflow-hidden flex flex-col">
      <div className="p-5 border-b border-[#E2E8F0] flex items-center gap-3">
        <button className="text-[#0F172A] hover:text-[#06530B] transition-colors"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="font-bold text-[#0F172A] text-[17px]">Privacy and Security</h2>
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-8">
        <div>
          <h4 className="font-bold text-[#64748B] text-sm mb-4">Security</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Two-Step Verification</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg">
              <span className="text-sm font-medium text-[#0F172A]">Active sessions <span className="text-[#00AB0C]">(2)</span></span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#64748B] text-sm mb-4">Choose what people sees</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Phone number</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Username</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Work email</span>
              <Toggle checked={true} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#0F172A]">Employee ID</span>
              <Toggle checked={true} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#0F172A] text-sm mb-4">Update password</h4>
          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#64748B] w-32 shrink-0">Current password</span>
              <input type="password" placeholder="Enter current password" className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm text-[#0F172A] focus:border-green-500 outline-none" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#64748B] w-32 shrink-0">New password</span>
              <input type="password" placeholder="Enter new password" className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm text-[#0F172A] focus:border-green-500 outline-none" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#64748B] w-32 shrink-0">Confirm password</span>
              <input type="password" placeholder="Confirm new password" className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm text-[#0F172A] focus:border-green-500 outline-none" />
            </div>
          </div>
          <button className="px-5 py-2 text-sm font-bold text-white bg-[#06530B] hover:bg-[#05290b] rounded-xl transition-colors">
            Update password
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================
   4. Active Sessions Card
   ================================ */
export function ActiveSessionsCard() {
  return (
    <div className="w-[380px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] overflow-hidden flex flex-col">
      <div className="p-5 border-b border-[#E2E8F0] flex items-center gap-3">
        <button className="text-[#0F172A] hover:text-[#06530B] transition-colors"><ArrowLeft className="w-5 h-5" /></button>
        <h2 className="font-bold text-[#0F172A] text-[17px]">Active sessions</h2>
      </div>

      <div className="p-4 flex-1 overflow-y-auto space-y-4">
        <div className="flex gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
          <div className="mt-1">
            <Monitor className="w-6 h-6 text-[#06530B]" />
          </div>
          <div>
            <h4 className="font-bold text-[#0F172A] text-sm">Windows - B550M DS3H</h4>
            <p className="text-xs text-[#64748B] mt-0.5 mb-1.5">Dhaka, Bangladesh - Active session</p>
            <button className="text-[11px] font-bold text-red-500 hover:text-red-700">Log out</button>
          </div>
        </div>

        <div className="flex gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
          <div className="mt-1">
            <Smartphone className="w-6 h-6 text-[#00AB0C]" />
          </div>
          <div>
            <h4 className="font-bold text-[#0F172A] text-sm">Techno SPARK 8</h4>
            <p className="text-xs text-[#64748B] mt-0.5 mb-1.5">Dhaka, Bangladesh - Jul 16, 3:31 PM</p>
            <button className="text-[11px] font-bold text-red-500 hover:text-red-700">Remove this device</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================
   5. About Software Card
   ================================ */
export function AboutSoftwareCard() {
  return (
    <div className="w-[380px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] overflow-hidden flex flex-col">
      <div className="p-5 border-b border-[#E2E8F0] flex items-center gap-3">
        <div className="w-8 h-8 bg-[#06530B] rounded-lg flex items-center justify-center text-white font-bold text-lg">
          Q
        </div>
        <h2 className="font-bold text-[#0F172A] text-[17px]">Softvence Communication</h2>
      </div>

      <div className="p-6 flex-1">
        <p className="text-[13px] text-[#475569] leading-relaxed mb-4">
          This is official free communication app based on Softvence Omega communication domain for speed and security.
        </p>
        <p className="text-[13px] text-[#475569] leading-relaxed mb-4">
          This software is lincensed under private protected copywriter ownership.
        </p>
        <p className="text-[13px] text-[#475569] leading-relaxed mb-6">
          Visit the <span className="font-bold text-[#00AB0C] cursor-pointer">Softvence Agency</span> for more information.
        </p>
        <p className="text-xs font-bold text-[#94A3B8]">
          App version 1.0.2
        </p>
      </div>

      <div className="p-4 flex justify-end">
        <button className="px-6 py-2 text-sm font-bold text-[#475569] bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-xl transition-colors">
          Close
        </button>
      </div>
    </div>
  );
}


/* ================================
   Helper: Toggle Switch
   ================================ */
function Toggle({ checked }: { checked: boolean }) {
  return (
    <div className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors cursor-pointer ${checked ? 'bg-[#06530B]' : 'bg-gray-300'}`}>
      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : 'translate-x-0'}`}></div>
    </div>
  );
}
