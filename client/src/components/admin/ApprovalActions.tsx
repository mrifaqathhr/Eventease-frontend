'use client';

interface ApprovalActionsProps {
    vendorId: string;
    status: string;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}

export default function ApprovalActions({ vendorId, status, onApprove, onReject }: ApprovalActionsProps) {
    if (status === 'processing') {
        return (
            <div className="flex md:flex-col items-center justify-center gap-3 md:border-s border-slate-100 md:ps-6 min-w-[140px]">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
                    Processing
                </span>
            </div>
        );
    }

    return (
        <div className="flex md:flex-col items-center justify-center gap-3 md:border-s border-slate-100 md:ps-6 min-w-[140px]">
            <button
                type="button"
                onClick={() => onApprove(vendorId)}
                className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-primary/30 flex items-center justify-center gap-2"
                aria-label="Approve vendor"
            >
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve
            </button>
            <button
                type="button"
                onClick={() => onReject(vendorId)}
                className="w-full bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                aria-label="Reject vendor"
            >
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                Reject
            </button>
        </div>
    );
}
