"use client";

import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

export interface DropdownItem {
  label: string;
  icon?: LucideIcon;
  onClick: () => void;
  danger?: boolean;
  warning?: boolean;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
}

export function Dropdown({ trigger, items, align = 'left' }: DropdownProps) {
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

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={toggleOpen} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div 
          className={`absolute z-[100] w-48 rounded-xl bg-white shadow-xl border border-[#EAECF0] focus:outline-none animate-in fade-in zoom-in-95 duration-150 ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${
            openUpward ? 'bottom-full mb-2 origin-bottom' : 'top-full mt-2 origin-top'
          }`}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className={`group flex w-full items-center px-4 py-2 text-[13px] font-medium transition-colors ${
                  item.danger 
                    ? 'text-red-500 hover:bg-red-50' 
                    : item.warning 
                    ? 'text-orange-500 hover:bg-orange-50'
                    : 'text-[#475569] hover:bg-gray-50'
                }`}
              >
                {item.icon && (
                  <item.icon className={`mr-3 h-4 w-4 ${item.danger ? 'text-red-500' : item.warning ? 'text-orange-500' : 'text-[#94A3B8] group-hover:text-[#475569]'}`} aria-hidden="true" />
                )}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
