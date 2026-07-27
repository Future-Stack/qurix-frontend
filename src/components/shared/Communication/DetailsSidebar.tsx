import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, FileText, BellOff, Bookmark, Archive, Trash2, LogOut, Link as LinkIcon, Download, Clock, Pencil } from 'lucide-react';
import { useCountdown } from './useCountdown';

interface DetailsSidebarProps {
  activeData: any;
  onClose: () => void;
  onAction?: (action: string) => void;
  panel?: string;
}

const GREEN = 'text-[#06530b]';
const LABEL_COLOR = 'text-[#3c3c3c]';

export default function DetailsSidebar({ activeData, onClose, onAction, panel }: DetailsSidebarProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Media' | 'Links' | 'Files'>('Media');
  const countdown = useCountdown(activeData?.deadline);
  const isTeamLeader = panel === 'team-leader';

  if (!activeData) return null;

  const isGroup = activeData.type === 'group';

  return (
    <div className="w-full lg:w-[439px] shrink-0 border-l border-[#dadada] flex flex-col h-full bg-[#f7f5f4] z-20 absolute lg:relative right-0 top-0 bottom-0 shadow-2xl lg:shadow-none">
      
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">

        {/* Section 1: Header / Group Info Card */}
        <div className="bg-white border-b border-l border-solid border-[#dadada] p-5 flex flex-col gap-4 items-start shrink-0 w-full">

          {/* Row 1: avatar left, close button right */}
          <div className="flex justify-between items-center w-full">
            <div className="relative w-[90px] h-[90px] shrink-0">
              <div className="absolute inset-0 rounded-full border-2 border-green-500 p-0.5">
                <img src={activeData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 border border-gray-100 transition-all shrink-0 cursor-pointer shadow-2xs"
              title="Close details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Row 2: name/date left, Edit button right */}
          <div className="flex justify-between items-center w-full">
            <div className="min-w-0">
              <h3 className="font-sans font-bold text-[#000000] text-[20px] leading-tight truncate">{activeData.name}</h3>
              <p className="font-condensed font-normal text-[#a19791] text-[14px] mt-1">
                {isGroup ? 'Created at: Jun 28, 2026' : activeData.handle ?? ''}
              </p>
            </div>
            {/* Edit button — team-leader group chats only */}
            {isTeamLeader && isGroup && (
              <button
                onClick={() => router.push(`/team-leader/dashboard/edit-project/${activeData.id ?? activeData.name}`)}
                className="flex items-center gap-1.5 bg-white border border-[#dadada] rounded-md px-3 py-1.5 text-[12px] font-semibold text-[#3c3c3c] hover:bg-gray-50 hover:border-[#06530b] hover:text-[#06530b] transition-all shadow-sm cursor-pointer shrink-0 ml-3"
                title="Edit project"
              >
                <Pencil className="w-3 h-3" />
                Edit
              </button>
            )}
          </div>

          <div className="w-full border-t border-[#dadada] my-1"></div>

          {/* Project Info Table */}
          <div className="w-full py-1 space-y-4">
            {isGroup ? (
              <>
                {[
                  { label: 'Service Line', value: activeData.serviceLine ?? 'CUSTOM-FSD' },
                  { label: 'Team', value: activeData.team ?? 'Future Stack' },
                  { label: 'Project Status', value: activeData.projectStatus ?? 'Planing' },
                  { label: 'Start Date', value: activeData.startDate ?? '18 July 2026, 1:23 AM' },
                  { label: 'Delivery Deadline', value: activeData.deliveryDeadline ?? '30 July 2026, 4:57 PM' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center text-[14px] font-sans">
                    <span className={`${LABEL_COLOR} font-medium`}>{label}</span>
                    <span className={`font-bold ${GREEN}`}>{value}</span>
                  </div>
                ))}
                {/* Live countdown */}
                <div className="flex justify-between items-center text-[14px] font-sans">
                  <span className={`${LABEL_COLOR} font-medium`}>Time Remain</span>
                  <span className={`flex items-center gap-1 font-bold ${GREEN}`}>
                    {countdown.expired ? (
                      <span className="text-red-500">Expired</span>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{`${countdown.d}D: ${String(countdown.h).padStart(2, '0')}H: ${String(countdown.m).padStart(2, '0')}M: ${String(countdown.s).padStart(2, '0')}S`}</span>
                      </>
                    )}
                  </span>
                </div>
              </>
            ) : (
              <>
                {[
                  { label: 'Service Line', value: activeData.serviceLine ?? 'CUSTOM-FSD' },
                  { label: 'Team', value: activeData.team ?? 'Future Stack' },
                  { label: 'Phone number', value: activeData.phone ?? '+880 123456789' },
                  { label: 'Work email', value: activeData.email ?? 'user@softvence.com' },
                  { label: 'Employee ID', value: activeData.employeeId ?? '16056' },
                  { label: 'Member Since', value: activeData.memberSince ?? '18 July 2026' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center text-[14px] font-sans gap-2">
                    <span className={`${LABEL_COLOR} font-medium shrink-0`}>{label}</span>
                    <span className={`font-bold ${GREEN} text-right truncate`}>{value}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Section 2: Attachments Card */}
        <div className="bg-white border-b border-l border-solid border-[#dadada] p-5 flex flex-col gap-4 items-start shrink-0 w-full">
          <div className="flex justify-between items-center w-full text-sans">
            <p className="font-bold text-[16px] text-black">Attachments</p>
            <p className="font-condensed font-normal text-[#a19791] text-[12px]">25 items</p>
          </div>
          
          {/* Tabs row with bottom border */}
          <div className="border-b-[0.5px] border-[#ebe9e8] w-full flex items-center shrink-0">
            {(['Media', 'Links', 'Files'] as const).map(tab => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-8 px-5 flex items-center justify-center text-sm font-medium font-sans cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-[#edebea] text-[#3c3c3c] rounded-t-[10px] font-bold border-b border-transparent' 
                      : 'text-[#616161] hover:text-[#3c3c3c]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="min-h-[80px] w-full">
            {activeTab === 'Media' && (
              <>
                <div className="flex flex-wrap gap-1.5 mb-3 w-full">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-[55px] h-[55px] rounded-[6px] bg-gray-200 overflow-hidden shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <img src={`https://picsum.photos/id/${i + 100}/100`} alt="Media" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button className={`text-sm font-medium ${GREEN} hover:underline cursor-pointer`}>See all</button>
              </>
            )}

            {activeTab === 'Links' && (
              <>
                <div className="space-y-2 mb-3 w-full">
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
                <button className={`text-sm font-medium ${GREEN} hover:underline cursor-pointer`}>See all Links</button>
              </>
            )}

            {activeTab === 'Files' && (
              <>
                <div className="space-y-2 mb-3 w-full">
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
                <button className={`text-sm font-medium ${GREEN} hover:underline cursor-pointer`}>See all Files</button>
              </>
            )}
          </div>
        </div>

        {/* Section 3: Members Card */}
        {isGroup && (
          <div className="bg-white border-b border-l border-solid border-[#dadada] p-5 flex flex-col gap-4 items-start shrink-0 w-full">
            <div className="flex justify-between items-center w-full font-sans">
              <p className="font-bold text-[16px] text-black">Members</p>
              <p className="font-condensed font-normal text-[#a19791] text-[12px]">12 members</p>
            </div>
            
            <div className="space-y-3 w-full">
              {[
                { name: 'Imran Hossain', avatar: 40, role: 'admin' },
                { name: 'Hossain Mishu', avatar: 42, role: '' },
                { name: 'UX Shakil', avatar: 41, role: '' },
              ].map(m => (
                <div key={m.name} className="flex items-center gap-2.5 py-0.5">
                  <img src={`https://i.pravatar.cc/150?u=${m.avatar}`} className="w-[30px] h-[30px] rounded-full object-cover" alt={m.name} />
                  <span className="text-[14px] font-medium text-[#3c3c3c] font-sans">{m.name}</span>
                  {m.role && (
                    <span className="bg-[rgba(6,83,11,0.1)] text-[#06530b] text-[11px] font-condensed font-normal px-2 py-0.5 rounded-full">{m.role}</span>
                  )}
                </div>
              ))}
            </div>
            <button className={`text-sm font-medium ${GREEN} hover:underline cursor-pointer`}>See all</button>
          </div>
        )}

        {/* Section 4: Actions Card */}
        <div className="bg-white border-l border-solid border-[#dadada] p-5 flex flex-col gap-4 items-start shrink-0 w-full pb-10">
          <div className="w-full flex flex-col gap-3 font-sans text-[14px]">
            
            <button className="w-full flex items-center gap-2.5 text-[#3c3c3c] font-medium hover:text-[#06530b] transition-colors py-1 cursor-pointer">
              <BellOff className="w-4 h-4 shrink-0 text-gray-500" />
              <span>Mute chat</span>
            </button>
            
            <div className="w-full border-t border-[#dadada]"></div>
            
            <button className="w-full flex items-center gap-2.5 text-[#3c3c3c] font-medium hover:text-[#06530b] transition-colors py-1 cursor-pointer">
              <Bookmark className="w-4 h-4 shrink-0 text-gray-500" />
              <span>Add favorite</span>
            </button>
            
            <div className="w-full border-t border-[#dadada]"></div>
            
            {isGroup ? (
              <button
                onClick={() => onAction?.('leave')}
                className="w-full flex items-center gap-2.5 text-[#ef4444] font-medium hover:text-red-700 transition-colors py-1 cursor-pointer"
              >
                <LogOut className="w-4 h-4 shrink-0 text-[#ef4444]" />
                <span>Leave Group</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => onAction?.('clear')}
                  className="w-full flex items-center gap-2.5 text-[#3c3c3c] font-medium hover:text-[#06530b] transition-colors py-1 cursor-pointer"
                >
                  <Archive className="w-4 h-4 shrink-0 text-gray-500" />
                  <span>Clear chat</span>
                </button>
                
                <div className="w-full border-t border-[#dadada]"></div>
                
                <button
                  onClick={() => onAction?.('delete')}
                  className="w-full flex items-center gap-2.5 text-[#ef4444] font-medium hover:text-red-700 transition-colors py-1 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4 shrink-0 text-[#ef4444]" />
                  <span>Delete chat</span>
                </button>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
