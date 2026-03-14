"use client";

export interface PromotionDetailsPanelProps {
  open: boolean;
  onClose: () => void;
  vendorName?: string;
  vendorCategory?: string;
  vendorLocation?: string;
  planName?: string;
  planDuration?: string;
  planPrice?: string;
  requestNote?: string;
  onApprove?: () => void;
  onReject?: () => void;
  onMarkPaid?: () => void;
}

export default function PromotionDetailsPanel({
  open,
  onClose,
  vendorName = "Capture Moments",
  vendorCategory = "Photography",
  vendorLocation = "San Francisco, CA",
  planName = "Featured Listing",
  planDuration = "30 Days Duration",
  planPrice = "$200.00",
  requestNote = "We are launching a new winter package and want to boost visibility for November bookings.",
  onApprove,
  onReject,
  onMarkPaid,
}: PromotionDetailsPanelProps) {
  if (!open) return null;

  return (
    <div className="sticky top-24 flex h-auto w-full flex-col rounded-xl border border-gray-200 bg-surface-light shadow-lg lg:w-[400px] lg:shrink-0">
      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-main">Promotion Details</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 transition-colors hover:text-text-main"
          aria-label="Close panel"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="max-h-[calc(100vh-200px)] flex-1 space-y-8 overflow-y-auto p-6">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
            Vendor Info
          </p>
          <div className="mb-4 flex items-start gap-4">
            <div className="size-14 shrink-0 overflow-hidden rounded-full bg-gray-100" />
            <div>
              <h4 className="text-lg font-bold text-text-main">
                {vendorName}
              </h4>
              <p className="text-sm text-text-muted">
                {vendorCategory} • {vendorLocation}
              </p>
              <div className="mt-2 flex gap-2">
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-text-muted">
                  4.9 ★
                </span>
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-text-muted">
                  Top Rated
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-text-muted">Email</p>
              <p className="truncate font-medium text-text-main">
                contact@capture.com
              </p>
            </div>
            <div>
              <p className="text-xs text-text-muted">Joined</p>
              <p className="font-medium text-text-main">Aug 2022</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
            Plan Details
          </p>
          <div className="rounded-lg border border-gray-100 bg-background-light p-4">
            <div className="mb-2 flex items-start justify-between">
              <div>
                <p className="font-bold text-text-main">{planName}</p>
                <p className="text-xs text-text-muted">{planDuration}</p>
              </div>
              <p className="text-lg font-bold text-primary">{planPrice}</p>
            </div>
            <div className="my-3 h-px bg-gray-200" />
            <div className="space-y-2 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-500">
                  check
                </span>
                <span>Top of Category Search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-500">
                  check
                </span>
                <span>Verified Badge</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-500">
                  check
                </span>
                <span>Analytics Dashboard</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
            Request Note
          </p>
          <p className="text-sm italic text-text-muted">{requestNote}</p>
        </div>
      </div>

      <div className="rounded-b-xl border-t border-gray-200 bg-gray-50/80 p-6">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onReject}
            className="col-span-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-bold text-text-main transition-colors hover:bg-gray-50"
          >
            <span className="material-symbols-outlined text-[18px]">block</span>
            Reject
          </button>
          <button
            type="button"
            onClick={onApprove}
            className="col-span-1 flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-rose-600"
          >
            <span className="material-symbols-outlined text-[18px]">
              check_circle
            </span>
            Approve
          </button>
          <button
            type="button"
            onClick={onMarkPaid}
            className="col-span-2 flex items-center justify-center gap-2 py-1.5 text-sm font-medium text-primary transition-colors hover:text-rose-700"
          >
            <span className="material-symbols-outlined text-[18px]">
              payments
            </span>
            Mark as Paid Manually
          </button>
        </div>
      </div>
    </div>
  );
}
