import React, { useState } from 'react';
import { X, FileText, BellOff, Bookmark, Archive, Trash2, LogOut, Link as LinkIcon, Download, Clock } from 'lucide-react';
import { useCountdown } from './useCountdown';

interface DetailsSidebarProps {
  activeData: any;
  onClose: () => void;
  onAction?: (action: string) => void;
}

const GREEN = 'text-[#00AB0C]';

export default function DetailsSidebar({ activeData, onClose, onAction }: DetailsSidebarProps) {
  const [activeTab, setActiveTab] = useState<'Media' | 'Links' | 'Files'>('Media');
  const countdown = useCountdown(activeData?.deadline);

  if (!activeData) return null;

  const isGroup = activeData.type === 'group';

  return (
    <div className="w-full lg:w-[300px] shrink-0 border-l border-[#E2E8F0] flex flex-col h-full bg-white z-20 absolute lg:relative right-0 top-0 bottom-0 shadow-2xl lg:shadow-none">
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-start border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-10 h-10 rounded-full border-2 border-green-500 p-0.5 shrink-0">
            <img src={activeData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-[#0F172A] text-[13px] truncate leading-tight">{activeData.name}</h3>
            <p className="text-[10px] text-[#94A3B8] mt-0.5">
              {isGroup ? 'Created at: Jun 28, 2026' : activeData.handle ?? ''}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-red-50 rounded-lg text-red-400 hover:text-red-500 transition-colors shrink-0 ml-2"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">

        {/* Project Info (Group only) */}
        {isGroup && (
          <div className="px-4 py-4 border-b border-[#E2E8F0] space-y-2.5">
            {[
              { label: 'Service Line', value: activeData.serviceLine ?? 'CUSTOM-FSD' },
              { label: 'Team', value: activeData.team ?? 'Future Stack' },
              { label: 'Project Status', value: activeData.projectStatus ?? 'Planning' },
              { label: 'Start Date', value: activeData.startDate ?? '18 July 2026, 1:23 AM' },
              { label: 'Delivery Deadline', value: activeData.deliveryDeadline ?? '30 July 2026, 4:57 PM' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-[11px] font-medium text-[#94A3B8]">{label}</span>
                <span className={`text-[11px] font-bold ${GREEN}`}>{value}</span>
              </div>
            ))}
            {/* Live countdown */}
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-medium text-[#94A3B8]">Time Remain</span>
              <span className={`flex items-center gap-1 text-[11px] font-bold ${GREEN}`}>
                <Clock className="w-3 h-3" />
                {countdown.expired
                  ? <span className="text-red-500">Expired</span>
                  : `${countdown.d}D: ${String(countdown.h).padStart(2, '0')}H: ${String(countdown.m).padStart(2, '0')}M: ${String(countdown.s).padStart(2, '0')}S`
                }
              </span>
            </div>
          </div>
        )}

        {/* Contact Info (Individual only) */}
        {!isGroup && (
          <div className="px-4 py-4 border-b border-[#E2E8F0] space-y-2.5">
            {[
              { label: 'Service Line', value: activeData.serviceLine ?? 'CUSTOM-FSD' },
              { label: 'Team', value: activeData.team ?? 'Future Stack' },
              { label: 'Phone number', value: activeData.phone ?? '+880 123456789' },
              { label: 'Work email', value: activeData.email ?? 'user@softvence.com' },
              { label: 'Employee ID', value: activeData.employeeId ?? '16056' },
              { label: 'Member Since', value: activeData.memberSince ?? '18 July 2026' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center gap-2">
                <span className="text-[11px] font-medium text-[#94A3B8] shrink-0">{label}</span>
                <span className={`text-[11px] font-bold ${GREEN} text-right truncate`}>{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Attachments Tabs */}
        <div className="px-4 py-4 border-b border-[#E2E8F0]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-[#0F172A] text-[13px]">Attachments</h3>
            <span className="text-[10px] text-[#94A3B8]">25 items</span>
          </div>
          <div className="flex bg-[#F8FAFC] rounded-lg p-1 mb-3">
            {(['Media', 'Links', 'Files'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${activeTab === tab ? 'bg-white shadow-sm text-[#0F172A]' : 'text-[#64748B] hover:text-[#0F172A]'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="min-h-[80px]">
            {activeTab === 'Media' && (
              <>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-14 h-14 rounded-lg bg-gray-200 overflow-hidden shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <img src={`https://picsum.photos/id/${i + 100}/100`} alt="Media" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button className={`text-xs font-bold ${GREEN} hover:underline`}>See all</button>
              </>
            )}

            {activeTab === 'Links' && (
              <>
                <div className="space-y-2 mb-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-start gap-2 bg-gray-50 p-2 rounded-lg">
                      <div className="w-7 h-7 rounded bg-white flex items-center justify-center shrink-0">
                        <LinkIcon className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-bold text-[#0F172A] truncate hover:underline cursor-pointer">qurix.figma.com/design/xyz</p>
                        <p className="text-[10px] text-[#94A3B8]">Yesterday</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className={`text-xs font-bold ${GREEN} hover:underline`}>See all Links</button>
              </>
            )}

            {activeTab === 'Files' && (
              <>
                <div className="space-y-2 mb-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg group">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-white flex items-center justify-center shrink-0">
                          <FileText className="w-3.5 h-3.5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#0F172A]">Requirement.pdf</p>
                          <p className="text-[10px] text-[#94A3B8]">2.4 MB</p>
                        </div>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all">
                        <Download className="w-3.5 h-3.5 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className={`text-xs font-bold ${GREEN} hover:underline`}>See all Files</button>
              </>
            )}
          </div>
        </div>

        {/* Members (Group only) */}
        {isGroup && (
          <div className="px-4 py-4 border-b border-[#E2E8F0]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[#0F172A] text-[13px]">
                Members <span className="text-[11px] font-normal text-[#94A3B8] ml-1">12 members</span>
              </h3>
              <button className="bg-[#06530B] hover:bg-[#05290b] text-white text-[10px] font-bold px-3 py-1 rounded-lg transition-colors">
                Add New
              </button>
            </div>
            <div className="space-y-3 mb-2">
              {[
                { name: 'Imran Hossain', avatar: 40, role: 'admin' },
                { name: 'Hossain Mishu', avatar: 42, role: '' },
                { name: 'UX Shakil', avatar: 41, role: '' },
              ].map(m => (
                <div key={m.name} className="flex items-center gap-2">
                  <img src={`https://i.pravatar.cc/150?u=${m.avatar}`} className="w-7 h-7 rounded-full object-cover" alt={m.name} />
                  <span className="text-[12px] font-bold text-[#0F172A]">{m.name}</span>
                  {m.role && (
                    <span className="bg-[#ECFDF5] text-[#00AB0C] text-[10px] font-bold px-1.5 py-0.5 rounded">{m.role}</span>
                  )}
                </div>
              ))}
            </div>
            <button className={`text-xs font-bold ${GREEN} hover:underline`}>See all</button>
          </div>
        )}

        {/* Actions */}
        <div className="px-2 py-3 pb-10 space-y-0.5">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-xl transition-colors text-[12px] font-bold text-[#475569]">
            <BellOff className="w-4 h-4" /> Mute chat
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-xl transition-colors text-[12px] font-bold text-[#475569]">
            <Bookmark className="w-4 h-4" /> Add favorite
          </button>
          {!isGroup ? (
            <>
              <button
                onClick={() => onAction?.('clear')}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-xl transition-colors text-[12px] font-bold text-[#475569]"
              >
                <Archive className="w-4 h-4" /> Clear chat
              </button>
              <button
                onClick={() => onAction?.('delete')}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-50 rounded-xl transition-colors text-[12px] font-bold text-red-500"
              >
                <Trash2 className="w-4 h-4" /> Delete chat
              </button>
            </>
          ) : (
            <button
              onClick={() => onAction?.('leave')}
              className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-50 rounded-xl transition-colors text-[12px] font-bold text-red-500"
            >
              <LogOut className="w-4 h-4" /> Leave Group
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
