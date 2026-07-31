import React from 'react';

export type ProjectStatus = 'urgent' | 'mp' | 'late' | 'delivered' | 'wip' | 'planing' | 'planning' | 'active' | 'suspended' | 'inactive';

interface StatusBadgeProps {
    status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
    const normalized = (status || '').toLowerCase();

    const styles: Record<string, string> = {
        urgent: 'bg-[#FEE2E2] text-[#EF4444]',
        mp: 'bg-[#FEF3C7] text-[#F59E0B]',
        late: 'bg-[#FFE4E6] text-[#F43F5E]',
        delivered: 'bg-[#DCFCE7] text-[#00AB0C]',
        wip: 'bg-[#F0FDF4] text-[#00AB0C]',
        planing: 'bg-slate-100 text-slate-700',
        planning: 'bg-slate-100 text-slate-700',
        active: 'text-[#00AB0C]',
        suspended: 'text-[#EF4444]',
        inactive: 'text-[#475569]',
    };

    if (['active', 'suspended', 'inactive'].includes(normalized)) {
        const dotColor = normalized === 'active' ? 'bg-[#00AB0C]' : normalized === 'suspended' ? 'bg-[#EF4444]' : 'bg-[#475569]';
        return (
            <div className={`flex items-center gap-1.5 font-bold text-[11px] ${styles[normalized] || 'text-[#475569]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {normalized.toUpperCase()}
            </div>
        );
    }

    return (
        <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase ${styles[normalized] || 'bg-gray-100 text-gray-500'}`}>
            {status}
        </span>
    );
}
