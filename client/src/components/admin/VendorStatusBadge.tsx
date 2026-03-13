type VendorStatus = 'pending' | 'approved' | 'rejected' | 'processing';

interface VendorStatusBadgeProps {
    status: VendorStatus;
}

const statusConfig: Record<VendorStatus, { label: string; bg: string; text: string }> = {
    pending: { label: 'Pending', bg: 'bg-amber-100', text: 'text-amber-800' },
    approved: { label: 'Approved', bg: 'bg-green-100', text: 'text-green-800' },
    rejected: { label: 'Rejected', bg: 'bg-red-100', text: 'text-red-800' },
    processing: { label: 'Processing', bg: 'bg-slate-100', text: 'text-slate-500' },
};

export default function VendorStatusBadge({ status }: VendorStatusBadgeProps) {
    const cfg = statusConfig[status];
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${cfg.bg} ${cfg.text}`}
        >
            {cfg.label}
        </span>
    );
}
