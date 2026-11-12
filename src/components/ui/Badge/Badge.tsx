import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'urgent' | 'late' | 'delivered' | 'mp' | 'wip' | 'active' | 'suspended' | 'inactive';
}

export function Badge({ children, variant = 'wip' }: BadgeProps) {
  const variantStyles = {
    urgent: 'bg-[#FEE2E2] text-[#EF4444]',
    late: 'bg-[#F1F5F9] text-[#64748B]',
    delivered: 'bg-[#E2E8F0] text-[#475569]',
    mp: 'bg-[#E2E8F0] text-[#475569]',
    wip: 'bg-[#06530B] text-white',
    active: 'bg-transparent text-[#22C55E]',
    suspended: 'bg-transparent text-[#EF4444]',
    inactive: 'bg-transparent text-[#64748B]',
  };

  const isStatusIndicator = ['active', 'suspended', 'inactive'].includes(variant);

  if (isStatusIndicator) {
    return (
      <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${variantStyles[variant]}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
        {children}
      </div>
    );
  }

  return (
    <span className={`inline-flex px-2.5 py-1 rounded-md text-[11px] font-bold ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}
