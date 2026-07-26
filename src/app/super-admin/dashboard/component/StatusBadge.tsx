export type ProjectStatus = 'urgent' | 'mp' | 'late' | 'delivered';
export type TeamMemberStatus = 'active' | 'suspended' | 'inactive';

interface StatusBadgeProps {
  status: ProjectStatus | TeamMemberStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    urgent: 'bg-[#FEE2E2] text-[#EF4444]',
    mp: 'bg-[#FEF3C7] text-[#F59E0B]',
    late: 'bg-[#FFE4E6] text-[#F43F5E]',
    delivered: 'bg-[#DCFCE7] text-[#00AB0C]',
    active: 'text-[#00AB0C]',
    suspended: 'text-[#EF4444]',
    inactive: 'text-[#475569]',
  };

  if (['active', 'suspended', 'inactive'].includes(status)) {
    const dotColor = status === 'active' ? 'bg-[#00AB0C]' : status === 'suspended' ? 'bg-[#EF4444]' : 'bg-[#475569]';
    return (
      <div className={`flex items-center gap-1.5 font-bold text-[11px] ${styles[status]}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {status.toUpperCase()}
      </div>
    );
  }

  return (
    <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${styles[status] || 'bg-gray-100 text-gray-500'}`}>
      {status.toUpperCase()}
    </span>
  );
}