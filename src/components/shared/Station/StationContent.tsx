'use client';

import React, { useState, useMemo } from 'react';
import { Search, Phone, MessageCircle, Check } from 'lucide-react';
import CustomSelect from '@/components/ui/Dropdown/CustomSelect';

export interface Salesperson {
  id: string;
  name: string;
  avatar: string;
  shift: 'Morning' | 'Evening' | 'Regular';
  phone: string;
}

export interface ProfileItem {
  id: string;
  handle: string;
  department: 'Graphics' | 'SEO' | 'FSD' | 'CMS';
  activeProjects: number;
  salesTeamLabel: string;
  salesPeople: Salesperson[];
}

const INITIAL_PROFILES: ProfileItem[] = [
  {
    id: '1',
    handle: 'seo_growth_expert',
    department: 'Graphics',
    activeProjects: 14,
    salesTeamLabel: 'SALES TEAM · 2 PEOPLE',
    salesPeople: [
      {
        id: 'sp1',
        name: 'Muhammad Raza',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 300 1234567'
      },
      {
        id: 'sp2',
        name: 'Fatima Noor',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 301 2345678'
      },
      {
        id: 'sp3',
        name: 'Sofia Ahmed',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 300 1234567'
      }
    ]
  },
  {
    id: '2',
    handle: 'rankmaster_pro',
    department: 'Graphics',
    activeProjects: 9,
    salesTeamLabel: 'SALES TEAM · 1 PERSON',
    salesPeople: [
      {
        id: 'sp4',
        name: 'Zainab Shah',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 303 4567890'
      },
      {
        id: 'sp5',
        name: 'Omar Farooq',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 304 5678901'
      },
      {
        id: 'sp6',
        name: 'Rabia Qureshi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        shift: 'Regular',
        phone: '+92 305 6789012'
      }
    ]
  },
  {
    id: '3',
    handle: 'keyword_wizard',
    department: 'Graphics',
    activeProjects: 5,
    salesTeamLabel: 'SALES TEAM · 2 PEOPLE',
    salesPeople: [
      {
        id: 'sp7',
        name: 'Tariq Mehmood',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 309 0123456'
      },
      {
        id: 'sp8',
        name: 'Sana Bashir',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 304 5678901'
      },
      {
        id: 'sp9',
        name: 'Rabia Qureshi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        shift: 'Regular',
        phone: '+92 310 1234567'
      }
    ]
  },
  {
    id: '4',
    handle: 'rankmaster_pro',
    department: 'Graphics',
    activeProjects: 9,
    salesTeamLabel: 'SALES TEAM · 1 PERSON',
    salesPeople: [
      {
        id: 'sp10',
        name: 'Zainab Shah',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 303 4567890'
      },
      {
        id: 'sp11',
        name: 'Omar Farooq',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 304 5678901'
      },
      {
        id: 'sp12',
        name: 'Rabia Qureshi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        shift: 'Regular',
        phone: '+92 305 6789012'
      }
    ]
  },
  {
    id: '5',
    handle: 'keyword_wizard',
    department: 'Graphics',
    activeProjects: 5,
    salesTeamLabel: 'SALES TEAM · 2 PEOPLE',
    salesPeople: [
      {
        id: 'sp13',
        name: 'Tariq Mehmood',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 309 0123456'
      },
      {
        id: 'sp14',
        name: 'Rabia Qureshi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        shift: 'Regular',
        phone: '+92 310 1234567'
      },
      {
        id: 'sp15',
        name: 'Sana Bashir',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 304 5678901'
      }
    ]
  },
  {
    id: '6',
    handle: 'seo_growth_expert',
    department: 'Graphics',
    activeProjects: 14,
    salesTeamLabel: 'SALES TEAM · 2 PEOPLE',
    salesPeople: [
      {
        id: 'sp16',
        name: 'Sofia Ahmed',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 300 1234567'
      },
      {
        id: 'sp17',
        name: 'Fatima Noor',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 301 2345678'
      },
      {
        id: 'sp18',
        name: 'Muhammad Raza',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 300 1234567'
      }
    ]
  },
  {
    id: '7',
    handle: 'designpro_studio',
    department: 'Graphics',
    activeProjects: 8,
    salesTeamLabel: 'SALES TEAM · 2 PEOPLE',
    salesPeople: [
      {
        id: 'sp19',
        name: 'Sofia Ahmed',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 300 1234567'
      },
      {
        id: 'sp20',
        name: 'Sara Ali',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 301 2345678'
      },
      {
        id: 'sp21',
        name: 'Sofia Ahmed',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 300 1234567'
      }
    ]
  },
  {
    id: '8',
    handle: 'visual_craftsman',
    department: 'Graphics',
    activeProjects: 12,
    salesTeamLabel: 'SALES TEAM · 3 PEOPLE',
    salesPeople: [
      {
        id: 'sp22',
        name: 'Nadia Siddiqui',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 303 4567890'
      },
      {
        id: 'sp23',
        name: 'Omar Farooq',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 304 5678901'
      },
      {
        id: 'sp24',
        name: 'Rabia Qureshi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        shift: 'Regular',
        phone: '+92 305 6789012'
      }
    ]
  },
  {
    id: '9',
    handle: 'creative_pixels',
    department: 'Graphics',
    activeProjects: 5,
    salesTeamLabel: 'SALES TEAM · 1 PERSON',
    salesPeople: [
      {
        id: 'sp25',
        name: 'Bilal Iqbal',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        shift: 'Regular',
        phone: '+92 302 3456789'
      }
    ]
  },
  {
    id: '10',
    handle: 'seo_rank_master',
    department: 'SEO',
    activeProjects: 10,
    salesTeamLabel: 'SALES TEAM · 2 PEOPLE',
    salesPeople: [
      {
        id: 'sp26',
        name: 'Usman Ghani',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 300 9876543'
      },
      {
        id: 'sp27',
        name: 'Ayla Malik',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 301 8765432'
      }
    ]
  },
  {
    id: '11',
    handle: 'fullstack_fsd_pro',
    department: 'FSD',
    activeProjects: 16,
    salesTeamLabel: 'SALES TEAM · 2 PEOPLE',
    salesPeople: [
      {
        id: 'sp28',
        name: 'Hamza Sheikh',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
        shift: 'Morning',
        phone: '+92 321 4445556'
      },
      {
        id: 'sp29',
        name: 'Zara Khan',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
        shift: 'Regular',
        phone: '+92 322 5556667'
      }
    ]
  },
  {
    id: '12',
    handle: 'wp_cms_experts',
    department: 'CMS',
    activeProjects: 11,
    salesTeamLabel: 'SALES TEAM · 1 PERSON',
    salesPeople: [
      {
        id: 'sp30',
        name: 'Faisal Tariq',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
        shift: 'Evening',
        phone: '+92 333 7778889'
      }
    ]
  }
];

export default function StationContent() {
  const [departmentFilter, setDepartmentFilter] = useState<'All' | 'Graphics' | 'SEO' | 'FSD' | 'CMS'>('All');
  const [shiftFilter, setShiftFilter] = useState<'All' | 'Morning' | 'Regular' | 'Evening'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const shifts: ('All' | 'Morning' | 'Regular' | 'Evening')[] = ['All', 'Morning', 'Regular', 'Evening'];

  // Filter profiles
  const filteredProfiles = useMemo(() => {
    return INITIAL_PROFILES.filter((profile) => {
      // Department Filter
      if (departmentFilter !== 'All' && profile.department !== departmentFilter && searchQuery === '') {
        return false;
      }

      // Search Query
      const matchesSearch =
        searchQuery === '' ||
        profile.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.salesPeople.some((sp) =>
          sp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sp.phone.includes(searchQuery)
        );

      if (!matchesSearch) return false;

      // Shift Filter
      if (shiftFilter !== 'All') {
        const hasMatchingShift = profile.salesPeople.some((sp) => sp.shift === shiftFilter);
        if (!hasMatchingShift) return false;
      }

      return true;
    });
  }, [departmentFilter, shiftFilter, searchQuery]);

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <div className="flex flex-col h-full w-full min-h-0 overflow-y-auto no-scrollbar space-y-5 select-none">
      
      {/* Fixed Top Section (Header + Filter Controls) */}
      <div className="shrink-0 space-y-5">
        
        {/* Header Banner matching Sales Dashboard alignment */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#dadada] pb-4 gap-4">
          <div>
            <h1 className="font-['Roboto'] font-medium text-[20px] text-[#414141] tracking-tight">
              Station
            </h1>
            <p className="font-['Roboto'] text-[14px] text-[#a19791] mt-0.5">
              Fiverr profiles by department · {filteredProfiles.length} profiles shown
            </p>
          </div>
        </div>

        {/* Filter Controls Row matching Figma */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 w-full">
          
          {/* Filter Pills Wrapper */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Department Label & CustomSelect Dropdown Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#0F172A] shrink-0">Department</span>
              <CustomSelect
                options={[
                  { label: 'All Departments', value: 'All' },
                  { label: 'Graphics', value: 'Graphics' },
                  { label: 'SEO', value: 'SEO' },
                  { label: 'FSD', value: 'FSD' },
                  { label: 'CMS', value: 'CMS' }
                ]}
                value={departmentFilter}
                onChange={(val) => setDepartmentFilter(val as any)}
                variant="filter"
                fullWidth={false}
                buttonClassName="min-w-[175px] bg-[#eceef0] border border-[#c7c4d8]/40 rounded-xl text-xs md:text-sm font-medium text-[#1e293b] hover:bg-[#e2e8f0]"
              />
            </div>

            {/* Shift Pills */}
            <div className="bg-[#eceef0] border border-[#c7c4d8]/40 p-1.5 rounded-xl flex items-center gap-1 shrink-0">
              {shifts.map((shift) => {
                const isActive = shiftFilter === shift;
                return (
                  <button
                    key={shift}
                    onClick={() => setShiftFilter(shift)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#06530b] text-white shadow-xs font-semibold'
                        : 'text-[#414141] hover:text-[#06530b] hover:bg-white/60'
                    }`}
                  >
                    {shift}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Input Bar matching Figma */}
          <div className="w-full xl:w-[380px] bg-[#f3f3f5] rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border border-transparent focus-within:border-[#06530b]/50 transition-all shrink-0">
            <Search className="w-4 h-4 text-[#8b8fa8] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Profile, Sales person..."
              className="bg-transparent text-[14px] text-[#414141] placeholder:text-[#8b8fa8] outline-none w-full font-normal"
            />
          </div>
        </div>
      </div>

      {/* Profile Cards Grid Area */}
      <div className="flex-1 min-h-0 pt-1">
        {filteredProfiles.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-[#E2E8F0] rounded-xl bg-[#fafafa]">
            <p className="text-sm font-semibold text-[#0F172A]">No profiles found</p>
            <p className="text-xs text-[#64748B] mt-1 max-w-sm">
              Try adjusting your search query or switching department/shift filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setShiftFilter('All');
              }}
              className="mt-3 px-3 py-1.5 bg-[#06530b] text-white text-xs font-semibold rounded-lg hover:bg-[#05290b] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 pb-6">
            {filteredProfiles.map((profile) => {
              const visiblePeople = shiftFilter === 'All'
                ? profile.salesPeople
                : profile.salesPeople.filter(sp => sp.shift === shiftFilter);

              return (
                <div
                  key={profile.id}
                  className="bg-[#fafafa] border border-[#f2f2f2] hover:border-[#06530b]/30 transition-all duration-200 rounded-[16px] p-[17px] flex flex-col gap-[14px] shadow-2xs hover:shadow-sm"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between min-w-0">
                    <h3 className="font-['Roboto'] font-semibold text-[16px] text-[#06530b] truncate">
                      {profile.handle}
                    </h3>
                    <span className="text-[12px] font-normal text-[#828282] shrink-0">
                      {profile.activeProjects} Active Projects
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="bg-[#eaecf0] h-px w-full" />

                  {/* Sales Team Label */}
                  <p className="font-['Roboto'] font-semibold text-[11px] text-[#191c1e] uppercase tracking-wider">
                    {profile.salesTeamLabel}
                  </p>

                  {/* Salesperson Rows */}
                  <div className="flex flex-col gap-2.5">
                    {visiblePeople.map((sp) => (
                      <div key={sp.id} className="flex items-center justify-between py-1 gap-2">
                        
                        {/* Person Avatar & Name */}
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={sp.avatar}
                            alt={sp.name}
                            className="w-[32px] h-[32px] rounded-full object-cover shrink-0"
                          />
                          <div className="min-w-0 flex flex-col gap-0.5">
                            <p className="font-['Roboto'] font-semibold text-[14px] text-[#191c1e] truncate leading-tight">
                              {sp.name}
                            </p>
                            
                            {/* Shift Badge */}
                            <div>
                              <span
                                className={`inline-block text-[8px] font-normal px-[6px] py-[2px] rounded-[10px] leading-none ${
                                  sp.shift === 'Morning'
                                    ? 'bg-[#fff1b7] text-[#a34600]'
                                    : sp.shift === 'Evening'
                                    ? 'bg-[#ffdbea] text-[#9d174d]'
                                    : 'bg-[#d7e1ff] text-[#1d4ed8]'
                                }`}
                              >
                                {sp.shift}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Phone & Message Action Icons */}
                        <div className="flex items-center gap-2 shrink-0">
                          {/* Phone Link Pill */}
                          <button
                            onClick={() => handleCopyPhone(sp.phone)}
                            title="Copy phone number"
                            className="bg-[#d3f5de] hover:bg-[#bbf0cc] text-[#019d3b] text-[11px] font-bold px-[8px] py-[4px] rounded-[8px] flex items-center gap-[5px] transition-colors cursor-pointer"
                          >
                            <Phone className="w-3 h-3 shrink-0" />
                            <span>{sp.phone}</span>
                            {copiedPhone === sp.phone ? (
                              <Check className="w-3 h-3 text-[#019d3b]" />
                            ) : null}
                          </button>

                          {/* Quick Message Action Circle */}
                          <a
                            href={`tel:${sp.phone.replace(/\s+/g, '')}`}
                            title="Message salesperson"
                            className="w-[25px] h-[25px] rounded-full bg-[#eceef0] hover:bg-[#e2e8f0] text-[#64748b] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
