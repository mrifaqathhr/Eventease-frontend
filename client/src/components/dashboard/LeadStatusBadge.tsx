export type LeadStatus = 'new' | 'pending' | 'replied' | 'booked' | 'contacted' | 'lost';

interface LeadStatusBadgeProps {
    status: LeadStatus;
}

const statusConfig: Record<
    LeadStatus,
    { label: string; dotColor: string; bgColor: string; textColor: string }
> = {
    new: {
        label: 'New',
        dotColor: 'bg-rose-500',
        bgColor: 'bg-rose-50',
        textColor: 'text-rose-700',
    },
    pending: {
        label: 'Pending',
        dotColor: 'bg-amber-500',
        bgColor: 'bg-amber-50',
        textColor: 'text-amber-700',
    },
    replied: {
        label: 'Replied',
        dotColor: 'bg-emerald-500',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
    },
    booked: {
        label: 'Booked',
        dotColor: 'bg-emerald-600',
        bgColor: 'bg-emerald-100',
        textColor: 'text-emerald-800',
    },
    contacted: {
        label: 'Contacted',
        dotColor: 'bg-slate-500',
        bgColor: 'bg-slate-100',
        textColor: 'text-slate-600',
    },
    lost: {
        label: 'Lost',
        dotColor: 'bg-red-500',
        bgColor: 'bg-red-50',
        textColor: 'text-red-700',
    },
};

export default function LeadStatusBadge({ status }: LeadStatusBadgeProps) {
    const config = statusConfig[status];

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bgColor} ${config.textColor}`}
            role="status"
            aria-label={`Status: ${config.label}`}
        >
            <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${config.dotColor}`} aria-hidden="true" />
            {config.label}
        </span>
    );
}
