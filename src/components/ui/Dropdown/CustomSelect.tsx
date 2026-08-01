'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface CustomSelectProps {
  options: (string | SelectOption)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  variant?: 'default' | 'filter' | 'form' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function CustomSelect({
  options,
  value,
  onChange,
  placeholder = 'Select option...',
  label,
  icon,
  disabled = false,
  className = '',
  buttonClassName = '',
  variant = 'default',
  size = 'md',
  fullWidth = true,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options array into SelectOption[] format
  const normalizedOptions: SelectOption[] = options.map(opt => {
    if (typeof opt === 'string') {
      return { label: opt, value: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find(opt => opt.value === value) || {
    label: value || placeholder,
    value: value || '',
  };

  const handleToggle = () => {
    if (disabled) return;

    if (!isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenUpward(spaceBelow < 220);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Size styling maps
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-lg min-h-[34px]',
    md: 'px-3.5 py-2.5 text-[13px] md:text-sm rounded-[12px] min-h-[42px]',
    lg: 'px-4 py-3 text-sm md:text-base rounded-[14px] min-h-[48px]',
  };

  // Variant styling maps
  const variantStyles = {
    default: 'bg-[#fcfcfc] border border-[#e5e7eb] text-[#0F172A] hover:border-[#06530b] focus:border-[#06530b] shadow-2xs',
    filter: 'bg-white border border-[#E2E8F0] text-[#475569] hover:bg-gray-50 hover:border-[#CBD5E1] shadow-xs',
    form: 'bg-[#fcfcfc] border border-[#e5e7eb] text-[#0F172A] hover:border-[#06530b] focus:border-[#06530b] font-medium shadow-2xs',
    ghost: 'bg-transparent border border-transparent hover:bg-gray-100 text-[#0F172A]',
  };

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'inline-block'} ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-xs md:text-[13px] font-medium text-[#3c3c3c] mb-1.5">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`w-full flex items-center justify-between gap-2 text-left font-medium transition-all duration-150 cursor-pointer ${
          sizeStyles[size]
        } ${variantStyles[variant]} ${
          isOpen ? 'ring-2 ring-[#06530b]/10 border-[#06530b]' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''} ${buttonClassName}`}
      >
        <div className="flex items-center gap-2 overflow-hidden truncate">
          {icon && <span className="shrink-0 text-gray-400 group-hover:text-[#06530b]">{icon}</span>}
          {selectedOption.icon && <span className="shrink-0">{selectedOption.icon}</span>}
          <span className="truncate">
            {selectedOption.label || placeholder}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#06530B]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute z-[120] w-full min-w-[160px] bg-white border border-[#E2E8F0] rounded-2xl shadow-xl py-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-150 ${
            openUpward ? 'bottom-full mb-1.5 origin-bottom' : 'top-full mt-1.5 origin-top'
          }`}
        >
          <div className="max-h-[220px] overflow-y-auto no-scrollbar py-0.5">
            {normalizedOptions.length === 0 ? (
              <div className="px-3.5 py-2.5 text-xs text-gray-400 text-center">
                No options available
              </div>
            ) : (
              normalizedOptions.map(opt => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-[95%] mx-auto flex items-center justify-between px-3 py-2 text-[13px] font-medium rounded-lg transition-colors cursor-pointer my-0.5 ${
                      isSelected
                        ? 'bg-emerald-50 text-[#06530B] font-bold'
                        : 'text-[#334155] hover:bg-gray-50 hover:text-[#0F172A]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                      <span className="truncate">{opt.label}</span>
                    </div>

                    {isSelected && <Check className="w-4 h-4 text-[#06530B] shrink-0" />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
