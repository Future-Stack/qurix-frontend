import React from 'react';
import { LucideIcon, Plus } from 'lucide-react';

interface PageHeaderProps {
  logoInitial: string;
  title: string;
  subtitle: string;
  actionLabel?: string;
  actionIcon?: LucideIcon;
  onAction?: () => void;
}

export function PageHeader({ 
  logoInitial, 
  title, 
  subtitle, 
  actionLabel, 
  actionIcon: ActionIcon = Plus, 
  onAction 
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-3xl border border-[#E2E8F0] shadow-sm">
      <div className="flex items-center gap-4">
        {/* Gradient Avatar */}
        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-emerald-400 opacity-80"></div>
          <span className="relative z-10 text-white font-bold text-lg italic font-serif">{logoInitial}</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#0F172A]">{title}</h1>
          <p className="text-xs font-medium text-[#94A3B8]">{subtitle}</p>
        </div>
      </div>

      {actionLabel && (
        <button 
          onClick={onAction}
          className="bg-[#06530B] hover:bg-[#05290b] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors"
        >
          <ActionIcon className="w-4 h-4" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
