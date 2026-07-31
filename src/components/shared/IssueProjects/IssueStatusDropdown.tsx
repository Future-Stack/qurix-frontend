'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface IssueStatusDropdownProps {
  status: 'Pending' | 'WIP' | 'Resolved';
  onStatusChange: (newStatus: 'Pending' | 'WIP' | 'Resolved') => void;
}

export default function IssueStatusDropdown({ status, onStatusChange }: IssueStatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (!isOpen && dropdownRef.current) {
      const el = dropdownRef.current;
      const rect = el.getBoundingClientRect();
      let spaceBelow = window.innerHeight - rect.bottom;

      // Check space relative to parent scroll/overflow containers
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        const style = window.getComputedStyle(parent);
        const overflowY = style.overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'hidden') {
          const parentRect = parent.getBoundingClientRect();
          const spaceInParent = parentRect.bottom - rect.bottom;
          spaceBelow = Math.min(spaceBelow, spaceInParent);
        }
        parent = parent.parentElement;
      }

      setOpenUpward(spaceBelow < 220);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isPending = status === 'Pending';
  const isWIP = status === 'WIP';

  const badgeBgClass = isPending
    ? 'bg-[#e07700]'
    : isWIP
      ? 'bg-[#001f75]'
      : 'bg-[#06530b]';

  const options: Array<{
    value: 'Pending' | 'WIP' | 'Resolved';
    label: string;
    dotBg: string;
    textHover: string;
    bgHover: string;
    activeBg: string;
  }> = [
    {
      value: 'Pending',
      label: 'Pending',
      dotBg: 'bg-[#e07700]',
      textHover: 'text-[#e07700]',
      bgHover: 'hover:bg-amber-50 hover:text-[#e07700]',
      activeBg: 'bg-amber-50/90 font-bold text-[#e07700]'
    },
    {
      value: 'WIP',
      label: 'WIP',
      dotBg: 'bg-[#001f75]',
      textHover: 'text-[#001f75]',
      bgHover: 'hover:bg-blue-50 hover:text-[#001f75]',
      activeBg: 'bg-blue-50/90 font-bold text-[#001f75]'
    },
    {
      value: 'Resolved',
      label: 'Resolved',
      dotBg: 'bg-[#06530b]',
      textHover: 'text-[#06530b]',
      bgHover: 'hover:bg-emerald-50 hover:text-[#06530b]',
      activeBg: 'bg-emerald-50/90 font-bold text-[#06530b]'
    }
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Selected Badge Trigger */}
      <button
        type="button"
        onClick={toggleOpen}
        className="relative inline-flex items-center rounded-[6px] overflow-hidden shadow-2xs cursor-pointer group shrink-0 select-none border-none outline-none focus:outline-none"
      >
        <div className={`${badgeBgClass} text-white font-['Roboto'] font-semibold text-[14px] h-[29px] w-[89px] px-[6px] flex items-center justify-between`}>
          <span className="leading-[16.5px] text-center flex-1">{status}</span>
          <div className="h-full border-l border-white/80 pl-1.5 flex items-center justify-center shrink-0">
            <ChevronDown className={`size-[15px] stroke-[2.5] text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </button>

      {/* Styled Custom Opened Dropdown Menu */}
      {isOpen && (
        <div className={`absolute right-0 z-[100] w-36 rounded-xl bg-white shadow-xl border border-[#EAECF0] p-1.5 focus:outline-none animate-in fade-in zoom-in-95 duration-150 ${
          openUpward ? 'bottom-full mb-1.5 origin-bottom' : 'top-full mt-1.5 origin-top'
        }`}>
          <div className="flex flex-col gap-0.5">
            {options.map((opt) => {
              const isSelected = opt.value === status;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onStatusChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 text-xs font-semibold font-['Roboto'] rounded-lg transition-colors cursor-pointer ${
                    isSelected ? opt.activeBg : `text-[#475569] ${opt.bgHover}`
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`size-2 rounded-full shrink-0 ${opt.dotBg}`} />
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && <Check className="size-3.5 stroke-[2.5]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
