"use client";

type TableActionsProps = {
  onApprove?: () => void;
  onReject?: () => void;
};

export default function TableActions({ onApprove, onReject }: TableActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <button
        type="button"
        onClick={onApprove}
        className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        Approve
      </button>
      <button
        type="button"
        onClick={onReject}
        className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-text-main shadow-sm transition-colors hover:border-rose-200 hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200"
      >
        Reject
      </button>
    </div>
  );
}

