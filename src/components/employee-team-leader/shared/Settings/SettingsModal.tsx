'use client';

import React, { useState, useEffect } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Volume2, 
  HelpCircle, 
  Info, 
  ChevronRight, 
  ArrowLeft,
  LogOut, 
  Camera, 
  Check, 
  Eye, 
  Laptop, 
  Smartphone,
  Phone,
  AtSign,
  Mail,
  FileBadge,
  X
} from 'lucide-react';

type ModalView = 'main' | 'account' | 'notifications' | 'privacy' | 'active-sessions' | 'about';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [currentView, setCurrentView] = useState<ModalView>('main');

  // Reset view to main whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentView('main');
    }
  }, [isOpen]);

  // Account form state
  const [accountForm, setAccountForm] = useState({
    displayName: 'Md Shakil',
    phoneNumber: '+880 126544700',
    username: '@uxshakil',
    workEmail: 'mdshakil@softvence.com',
    employeeId: '16056'
  });

  // Notifications state
  const [notificationState, setNotificationState] = useState({
    desktopNotifications: true,
    sound: true,
    privateChats: true,
    groupChats: true,
    calls: true,
    replyAndMentions: true
  });

  // Privacy state
  const [privacyState, setPrivacyState] = useState({
    twoStepVerification: true,
    phoneNumberVisible: true,
    usernameVisible: true,
    workEmailVisible: true,
    employeeIdVisible: true
  });

  if (!isOpen) return null;

  // Toggle switch helper
  const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button 
      onClick={onChange}
      type="button"
      className={`w-[44px] h-[24px] rounded-full p-0.5 transition-colors cursor-pointer flex items-center shrink-0 ${
        checked ? 'bg-[#06530b] justify-end' : 'bg-gray-300 justify-start'
      }`}
    >
      <div className="size-[20px] rounded-full bg-white shadow-sm" />
    </button>
  );

  const avatars = {
    shakil: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  };

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 select-none overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container Card */}
      <div 
        className="bg-white w-full max-w-[614px] max-h-[90vh] overflow-y-auto no-scrollbar p-5 sm:p-8 lg:p-[32px] rounded-[24px] sm:rounded-[34px] shadow-2xl border border-gray-100 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close X Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer z-10"
          title="Close modal"
        >
          <X className="size-5" />
        </button>

        {/* ========================================================================= */}
        {/* VIEW 1: MAIN SETTINGS MENU */}
        {/* ========================================================================= */}
        {currentView === 'main' && (
          <>
            {/* Title */}
            <h1 className="font-['Roboto'] font-bold text-[18px] sm:text-[20px] text-[#575757] leading-tight">
              Settings
            </h1>

            {/* User Info Section */}
            <div className="flex items-center gap-4 py-1">
              <div className="relative shrink-0 size-[64px] sm:size-[80px] rounded-full overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
                <img 
                  src={avatars.shakil} 
                  alt="MD Shakil" 
                  className="size-full object-cover pointer-events-none"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="font-['Roboto'] font-medium text-[20px] sm:text-[24px] text-[#575757] leading-tight">
                  MD Shakil
                </h2>
                <p className="font-['Roboto'] font-normal text-[14px] sm:text-[16px] text-[#a19791] mt-0.5">
                  @uxshakil
                </p>
              </div>
            </div>

            {/* Divider line */}
            <div className="h-px w-full bg-[#e5e7eb]" />

            {/* Options List */}
            <div className="flex flex-col gap-[7px] w-full">
              
              {/* Option 1: My Account */}
              <button 
                onClick={() => setCurrentView('account')}
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="size-[20px] shrink-0 flex items-center justify-center text-[#3c3c3c]">
                    <User className="size-5 stroke-[2]" />
                  </div>
                  <span className="font-['Roboto'] font-medium text-[14px] text-[#3c3c3c]">
                    My Account
                  </span>
                </div>
                <div className="size-[24px] shrink-0 flex items-center justify-center text-[#828282] group-hover:text-black group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="size-5 stroke-[2]" />
                </div>
              </button>

              {/* Option 2: Notifications */}
              <button 
                onClick={() => setCurrentView('notifications')}
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="size-[20px] shrink-0 flex items-center justify-center text-[#3c3c3c]">
                    <Bell className="size-5 stroke-[2]" />
                  </div>
                  <span className="font-['Roboto'] font-medium text-[14px] text-[#3c3c3c]">
                    Notifications
                  </span>
                </div>
                <div className="size-[24px] shrink-0 flex items-center justify-center text-[#828282] group-hover:text-black group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="size-5 stroke-[2]" />
                </div>
              </button>

              {/* Option 3: Privacy and Security */}
              <button 
                onClick={() => setCurrentView('privacy')}
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="size-[20px] shrink-0 flex items-center justify-center text-[#3c3c3c]">
                    <Shield className="size-5 stroke-[2]" />
                  </div>
                  <span className="font-['Roboto'] font-medium text-[14px] text-[#3c3c3c]">
                    Privacy and Security
                  </span>
                </div>
                <div className="size-[24px] shrink-0 flex items-center justify-center text-[#828282] group-hover:text-black group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="size-5 stroke-[2]" />
                </div>
              </button>

              {/* Option 4: Input/Output devices */}
              <button 
                onClick={() => alert('Input/Output device settings active.')}
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="size-[20px] shrink-0 flex items-center justify-center text-[#3c3c3c]">
                    <Volume2 className="size-5 stroke-[2]" />
                  </div>
                  <span className="font-['Roboto'] font-medium text-[14px] text-[#3c3c3c]">
                    Input/Output devices
                  </span>
                </div>
                <div className="size-[24px] shrink-0 flex items-center justify-center text-[#828282] group-hover:text-black group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="size-5 stroke-[2]" />
                </div>
              </button>

              {/* Option 5: Guideline and help */}
              <button 
                onClick={() => alert('Guideline and help center active.')}
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="size-[20px] shrink-0 flex items-center justify-center text-[#3c3c3c]">
                    <HelpCircle className="size-5 stroke-[2]" />
                  </div>
                  <span className="font-['Roboto'] font-medium text-[14px] text-[#3c3c3c]">
                    Guideline and help
                  </span>
                </div>
                <div className="size-[24px] shrink-0 flex items-center justify-center text-[#828282] group-hover:text-black group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="size-5 stroke-[2]" />
                </div>
              </button>

              {/* Option 6: About software */}
              <button 
                onClick={() => setCurrentView('about')}
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="size-[20px] shrink-0 flex items-center justify-center text-[#3c3c3c]">
                    <Info className="size-5 stroke-[2]" />
                  </div>
                  <span className="font-['Roboto'] font-medium text-[14px] text-[#3c3c3c]">
                    About software
                  </span>
                </div>
                <div className="size-[24px] shrink-0 flex items-center justify-center text-[#828282] group-hover:text-black group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="size-5 stroke-[2]" />
                </div>
              </button>

            </div>

            {/* Divider line */}
            <div className="h-px w-full bg-[#e5e7eb] my-1" />

            {/* Log Out Button */}
            <button 
              onClick={() => {
                alert('Logging out...');
                onClose();
              }}
              className="w-full h-[52px] rounded-[12px] bg-[#ffeded] border border-[#ef4444] hover:bg-[#ffe2e2] active:scale-[0.99] transition-all duration-150 flex items-center justify-center gap-[14px] cursor-pointer group"
            >
              <div className="size-[20px] shrink-0 flex items-center justify-center text-[#ef4444]">
                <LogOut className="size-5 stroke-[2]" />
              </div>
              <span className="font-['Roboto'] font-bold text-[14px] text-[#ef4444] leading-tight">
                Log out
              </span>
            </button>
          </>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: MY ACCOUNT SUB-MODAL */}
        {/* ========================================================================= */}
        {currentView === 'account' && (
          <div className="flex flex-col gap-6">
            {/* Header with Back Arrow */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('main')}
                className="p-1 rounded-lg hover:bg-gray-100 text-[#06530b] transition-colors cursor-pointer"
                title="Back to Settings"
              >
                <ArrowLeft className="size-6 stroke-[2.5]" />
              </button>
              <h2 className="font-['Roboto'] font-bold text-[20px] sm:text-[24px] text-[#06530b]">
                My Account
              </h2>
            </div>

            <div className="h-px w-full bg-[#e5e7eb]" />

            {/* Profile Avatar with Camera upload button */}
            <div className="flex items-center gap-5">
              <div className="relative shrink-0 size-[72px] sm:size-[90px] rounded-full overflow-hidden border-2 border-amber-500 bg-amber-100">
                <img 
                  src={avatars.shakil} 
                  alt="Md Shakil" 
                  className="size-full object-cover pointer-events-none"
                />
                <button 
                  className="absolute bottom-1 right-1 size-7 rounded-full bg-[#06530b] text-white flex items-center justify-center border border-white shadow-md hover:bg-emerald-800 transition-colors cursor-pointer"
                  title="Upload profile photo"
                >
                  <Camera className="size-4" />
                </button>
              </div>

              <div>
                <h3 className="font-['Roboto'] font-bold text-[20px] sm:text-[24px] text-[#3c3c3c]">
                  Md Shakil
                </h3>
                <p className="font-['Roboto'] font-normal text-[14px] sm:text-[16px] text-[#a19791]">
                  @uxshakil
                </p>
              </div>
            </div>

            {/* Section Title */}
            <div className="space-y-4">
              <h4 className="font-['Roboto'] font-semibold text-[16px] sm:text-[18px] text-[#575757]">
                Update informations
              </h4>

              {/* Form Input Fields - Responsive Layout */}
              <div className="space-y-4">
                
                {/* Display name */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <div className="flex items-center gap-3 text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">
                    <User className="size-5 text-[#575757] shrink-0" />
                    <span>Display name</span>
                  </div>
                  <input 
                    type="text" 
                    value={accountForm.displayName}
                    onChange={(e) => setAccountForm({ ...accountForm, displayName: e.target.value })}
                    className="w-full sm:flex-1 bg-[#f0f0f0] border-none rounded-[12px] px-4 py-2.5 text-[#06530b] font-medium text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#06530b]/20"
                  />
                </div>

                {/* Phone number */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <div className="flex items-center gap-3 text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">
                    <Phone className="size-5 text-[#575757] shrink-0" />
                    <span>Phone number</span>
                  </div>
                  <input 
                    type="text" 
                    value={accountForm.phoneNumber}
                    onChange={(e) => setAccountForm({ ...accountForm, phoneNumber: e.target.value })}
                    className="w-full sm:flex-1 bg-[#f0f0f0] border-none rounded-[12px] px-4 py-2.5 text-[#06530b] font-medium text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#06530b]/20"
                  />
                </div>

                {/* Username */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <div className="flex items-center gap-3 text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">
                    <AtSign className="size-5 text-[#575757] shrink-0" />
                    <span>Username</span>
                  </div>
                  <input 
                    type="text" 
                    value={accountForm.username}
                    onChange={(e) => setAccountForm({ ...accountForm, username: e.target.value })}
                    className="w-full sm:flex-1 bg-[#f0f0f0] border-none rounded-[12px] px-4 py-2.5 text-[#06530b] font-medium text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#06530b]/20"
                  />
                </div>

                {/* Work email */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <div className="flex items-center gap-3 text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">
                    <Mail className="size-5 text-[#575757] shrink-0" />
                    <span>Work email</span>
                  </div>
                  <input 
                    type="email" 
                    value={accountForm.workEmail}
                    onChange={(e) => setAccountForm({ ...accountForm, workEmail: e.target.value })}
                    className="w-full sm:flex-1 bg-[#f0f0f0] border-none rounded-[12px] px-4 py-2.5 text-[#06530b] font-medium text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#06530b]/20"
                  />
                </div>

                {/* Employee ID */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <div className="flex items-center gap-3 text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">
                    <FileBadge className="size-5 text-[#575757] shrink-0" />
                    <span>Employee ID</span>
                  </div>
                  <div className="w-full sm:flex-1 flex items-center justify-between bg-[#f0f0f0] rounded-[12px] px-4 py-2.5">
                    <span className="text-[#747474] font-medium text-[14px] sm:text-[15px]">
                      {accountForm.employeeId}
                    </span>
                    <span className="bg-[#e6f4ea] text-[#06530b] text-[12px] sm:text-[13px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Check className="size-3.5 stroke-[3]" /> Verified
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4">
              <button 
                onClick={() => setCurrentView('main')}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#e8e8e8] text-[#3c3c3c] font-medium text-[14px] sm:text-[15px] hover:bg-gray-300 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={() => setCurrentView('main')}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#06530b] text-white font-medium text-[14px] sm:text-[15px] hover:bg-emerald-900 shadow-md transition-all cursor-pointer"
              >
                Save changes
              </button>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: NOTIFICATIONS AND SOUNDS SUB-MODAL */}
        {/* ========================================================================= */}
        {currentView === 'notifications' && (
          <div className="flex flex-col gap-6">
            {/* Header with Back Arrow */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('main')}
                className="p-1 rounded-lg hover:bg-gray-100 text-[#06530b] transition-colors cursor-pointer"
                title="Back to Settings"
              >
                <ArrowLeft className="size-6 stroke-[2.5]" />
              </button>
              <h2 className="font-['Roboto'] font-bold text-[20px] sm:text-[24px] text-[#06530b]">
                Notifications and Sounds
              </h2>
            </div>

            <div className="h-px w-full bg-[#e5e7eb]" />

            {/* Section 1: General */}
            <div className="space-y-3">
              <h4 className="font-['Roboto'] font-semibold text-[16px] sm:text-[17px] text-[#575757]">
                General
              </h4>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <Bell className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Allow desktop notifications</span>
                </div>
                <ToggleSwitch 
                  checked={notificationState.desktopNotifications} 
                  onChange={() => setNotificationState({ ...notificationState, desktopNotifications: !notificationState.desktopNotifications })} 
                />
              </div>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <Volume2 className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Allow sound</span>
                </div>
                <ToggleSwitch 
                  checked={notificationState.sound} 
                  onChange={() => setNotificationState({ ...notificationState, sound: !notificationState.sound })} 
                />
              </div>
            </div>

            {/* Section 2: Notifications for chats */}
            <div className="space-y-3">
              <h4 className="font-['Roboto'] font-semibold text-[16px] sm:text-[17px] text-[#575757]">
                Notifications for chats
              </h4>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <User className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Private chats</span>
                </div>
                <ToggleSwitch 
                  checked={notificationState.privateChats} 
                  onChange={() => setNotificationState({ ...notificationState, privateChats: !notificationState.privateChats })} 
                />
              </div>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <User className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Group chats</span>
                </div>
                <ToggleSwitch 
                  checked={notificationState.groupChats} 
                  onChange={() => setNotificationState({ ...notificationState, groupChats: !notificationState.groupChats })} 
                />
              </div>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <Phone className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Calls</span>
                </div>
                <ToggleSwitch 
                  checked={notificationState.calls} 
                  onChange={() => setNotificationState({ ...notificationState, calls: !notificationState.calls })} 
                />
              </div>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <AtSign className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Reply and mentions</span>
                </div>
                <ToggleSwitch 
                  checked={notificationState.replyAndMentions} 
                  onChange={() => setNotificationState({ ...notificationState, replyAndMentions: !notificationState.replyAndMentions })} 
                />
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: PRIVACY AND SECURITY SUB-MODAL */}
        {/* ========================================================================= */}
        {currentView === 'privacy' && (
          <div className="flex flex-col gap-6">
            {/* Header with Back Arrow */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('main')}
                className="p-1 rounded-lg hover:bg-gray-100 text-[#06530b] transition-colors cursor-pointer"
                title="Back to Settings"
              >
                <ArrowLeft className="size-6 stroke-[2.5]" />
              </button>
              <h2 className="font-['Roboto'] font-bold text-[20px] sm:text-[24px] text-[#06530b]">
                Privacy and Security
              </h2>
            </div>

            <div className="h-px w-full bg-[#e5e7eb]" />

            {/* Security Section */}
            <div className="space-y-3">
              <h4 className="font-['Roboto'] font-semibold text-[16px] sm:text-[17px] text-[#575757]">
                Security
              </h4>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <Bell className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Two-Step Verification</span>
                </div>
                <ToggleSwitch 
                  checked={privacyState.twoStepVerification} 
                  onChange={() => setPrivacyState({ ...privacyState, twoStepVerification: !privacyState.twoStepVerification })} 
                />
              </div>

              {/* Active Sessions Link */}
              <button 
                onClick={() => setCurrentView('active-sessions')}
                className="w-full bg-[#f0f0f0] hover:bg-gray-200/80 transition-colors rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <Laptop className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Active sessions</span>
                  <span className="text-[#06530b] font-semibold">(2)</span>
                </div>
                <ChevronRight className="size-5 text-[#575757] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Choose what people sees Section */}
            <div className="space-y-3">
              <h4 className="font-['Roboto'] font-semibold text-[16px] sm:text-[17px] text-[#575757]">
                Choose what people sees
              </h4>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <Phone className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Phone number</span>
                </div>
                <ToggleSwitch 
                  checked={privacyState.phoneNumberVisible} 
                  onChange={() => setPrivacyState({ ...privacyState, phoneNumberVisible: !privacyState.phoneNumberVisible })} 
                />
              </div>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <AtSign className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Username</span>
                </div>
                <ToggleSwitch 
                  checked={privacyState.usernameVisible} 
                  onChange={() => setPrivacyState({ ...privacyState, usernameVisible: !privacyState.usernameVisible })} 
                />
              </div>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <Mail className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Work email</span>
                </div>
                <ToggleSwitch 
                  checked={privacyState.workEmailVisible} 
                  onChange={() => setPrivacyState({ ...privacyState, workEmailVisible: !privacyState.workEmailVisible })} 
                />
              </div>

              <div className="bg-[#f0f0f0] rounded-[14px] p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[#3c3c3c] font-medium text-[14px] sm:text-[15px]">
                  <FileBadge className="size-5 text-[#3c3c3c] shrink-0" />
                  <span>Employee ID</span>
                </div>
                <ToggleSwitch 
                  checked={privacyState.employeeIdVisible} 
                  onChange={() => setPrivacyState({ ...privacyState, employeeIdVisible: !privacyState.employeeIdVisible })} 
                />
              </div>
            </div>

            {/* Update Password Section */}
            <div className="space-y-4 pt-2">
              <h4 className="font-['Roboto'] font-semibold text-[16px] sm:text-[17px] text-[#575757]">
                Update password
              </h4>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <span className="text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">Current password</span>
                  <div className="relative w-full sm:flex-1">
                    <input type="password" placeholder="Enter current password" className="w-full bg-[#f0f0f0] border-none rounded-[12px] px-4 py-2.5 text-[#575757] placeholder:text-gray-400 font-medium text-[14px] focus:outline-none" />
                    <Eye className="absolute right-3 top-3 size-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <span className="text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">New password</span>
                  <div className="relative w-full sm:flex-1">
                    <input type="password" placeholder="Enter new password" className="w-full bg-[#f0f0f0] border-none rounded-[12px] px-4 py-2.5 text-[#575757] placeholder:text-gray-400 font-medium text-[14px] focus:outline-none" />
                    <Eye className="absolute right-3 top-3 size-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <span className="text-[#575757] font-medium text-[14px] sm:text-[15px] shrink-0 sm:w-[140px]">Confirm password</span>
                  <div className="relative w-full sm:flex-1">
                    <input type="password" placeholder="Confirm new password" className="w-full bg-[#f0f0f0] border-none rounded-[12px] px-4 py-2.5 text-[#575757] placeholder:text-gray-400 font-medium text-[14px] focus:outline-none" />
                    <Eye className="absolute right-3 top-3 size-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setCurrentView('main')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#06530b] text-white font-medium text-[14px] sm:text-[15px] hover:bg-emerald-900 shadow-md transition-all cursor-pointer"
                >
                  Update password
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: ACTIVE SESSIONS SUB-MODAL */}
        {/* ========================================================================= */}
        {currentView === 'active-sessions' && (
          <div className="flex flex-col gap-6">
            {/* Header with Back Arrow (returns to privacy) */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('privacy')}
                className="p-1 rounded-lg hover:bg-gray-100 text-[#06530b] transition-colors cursor-pointer"
                title="Back to Privacy and Security"
              >
                <ArrowLeft className="size-6 stroke-[2.5]" />
              </button>
              <h2 className="font-['Roboto'] font-bold text-[20px] sm:text-[24px] text-[#06530b]">
                Active sessions
              </h2>
            </div>

            <div className="h-px w-full bg-[#e5e7eb]" />

            {/* Sessions List */}
            <div className="space-y-6">
              
              {/* Session 1: Windows */}
              <div className="flex items-start gap-4 p-2">
                <div className="p-3 rounded-2xl bg-emerald-50 text-[#06530b] shrink-0 border border-emerald-100">
                  <Laptop className="size-7 sm:size-9 stroke-[1.75]" />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="font-['Roboto'] font-bold text-[16px] sm:text-[18px] text-[#575757] truncate">
                    Winsdows - B550M DS3H
                  </h3>
                  <p className="font-['Roboto'] font-normal text-[13px] sm:text-[15px] text-[#575757]">
                    Dhaka, Bangladesh - Active session
                  </p>
                  <button className="bg-[#ffeded] text-[#ef4444] text-[13px] font-medium px-4 py-1 rounded-full hover:bg-[#ffe2e2] transition-colors cursor-pointer mt-1">
                    Log out
                  </button>
                </div>
              </div>

              <div className="h-px w-full bg-[#e5e7eb]/60" />

              {/* Session 2: Phone */}
              <div className="flex items-start gap-4 p-2">
                <div className="p-3 rounded-2xl bg-emerald-50 text-[#06530b] shrink-0 border border-emerald-100">
                  <Smartphone className="size-7 sm:size-9 stroke-[1.75]" />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="font-['Roboto'] font-bold text-[16px] sm:text-[18px] text-[#575757] truncate">
                    Techno SPARK 8
                  </h3>
                  <p className="font-['Roboto'] font-normal text-[13px] sm:text-[15px] text-[#575757]">
                    Dhaka, Bangladesh - Jul 16, 3:31PM
                  </p>
                  <button className="bg-[#ffeded] text-[#ef4444] text-[13px] font-medium px-4 py-1 rounded-full hover:bg-[#ffe2e2] transition-colors cursor-pointer mt-1">
                    Remove this device
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 6: ABOUT SOFTWARE SUB-MODAL */}
        {/* ========================================================================= */}
        {currentView === 'about' && (
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-[#06530b] text-white flex items-center justify-center font-bold text-xl shadow-sm">
                Q
              </div>
              <h2 className="font-['Roboto'] font-bold text-[20px] sm:text-[24px] text-[#06530b]">
                Softvence Communication
              </h2>
            </div>

            <div className="h-px w-full bg-[#e5e7eb]" />

            {/* Information Paragraphs */}
            <div className="space-y-4 text-[#575757] font-normal text-[14px] sm:text-[16px] leading-relaxed">
              <p>
                This is official free communication app based on Softvence Omega communication domain for speed and secuity.
              </p>
              <p>
                This software is lincensed under private protected copywriter ownership.
              </p>
              <p>
                Visit the <strong className="text-[#06530b] font-bold">Softvence Agency</strong> for more information.
              </p>
              <p className="text-[14px] text-gray-500 pt-2">
                App version 1.0.2
              </p>
            </div>

            {/* Footer Close Button */}
            <div className="flex justify-end pt-4">
              <button 
                onClick={() => setCurrentView('main')}
                className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#e8e8e8] text-[#3c3c3c] font-medium text-[14px] sm:text-[15px] hover:bg-gray-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
