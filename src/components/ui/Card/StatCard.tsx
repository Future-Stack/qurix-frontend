import React from 'react';
import { TrendingUp, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColorClass: string;
  iconBgClass: string;
}

export function StatCard({ title, value, icon: Icon, iconColorClass, iconBgClass }: StatCardProps) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 flex flex-col justify-between w-full h-[140px] shadow-sm">
      <div className="flex justify-between items-start">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBgClass}`}>
          <Icon className={`w-5 h-5 ${iconColorClass}`} />
        </div>
        <TrendingUp className="w-4 h-4 text-[#CBD5E1]" />
      </div>
      <div>
        <div className="text-[28px] font-bold text-[#0F172A] leading-none mb-1">{value}</div>
        <div className="text-[13px] font-medium text-[#64748B]">{title}</div>
      </div>
    </div>
  );
}
