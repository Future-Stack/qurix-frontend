'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  iconBgColor: string;
  iconColor: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  iconBgColor,
  iconColor,
}: StatsCardProps) {
  return (
    <div className="bg-white border border-[#e8eaf0] rounded-[16px] p-[21px] flex flex-col justify-between w-full shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start justify-between w-full">
        {/* Icon wrapper */}
        <div 
          className="size-[40px] rounded-[12px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: iconBgColor, color: iconColor }}
        >
          <Icon className="size-[20px] stroke-[2]" />
        </div>

        {/* Mini trend line icon */}
        <div className="text-gray-300 group-hover:text-emerald-500 transition-colors duration-200 pt-1">
          <TrendingUp className="size-[20px]" />
        </div>
      </div>

      <div className="mt-4">
        {/* Metric Value */}
        <p className="font-['Roboto'] font-bold leading-[32px] text-[#0f172a] text-[24px] tracking-[-0.6px]">
          {value}
        </p>
        
        {/* Metric Label */}
        <p className="font-['Roboto'] font-bold leading-[16px] text-[#374151] text-[12px] mt-1 whitespace-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
}
