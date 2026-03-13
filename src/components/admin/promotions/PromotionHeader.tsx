"use client";

export interface PromotionHeaderProps {
  onExportReport?: () => void;
}

export default function PromotionHeader({
  onExportReport,
}: PromotionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-tight text-text-main sm:text-4xl">
          Promotion Management
        </h1>
        <p className="text-base text-text-muted">
          Manage vendor promotions, approval queues, and financial tracking.
        </p>
      </div>
      <button
        type="button"
        onClick={onExportReport}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-white shadow-sm shadow-primary/30 transition-colors hover:bg-rose-600"
      >
        <span className="material-symbols-outlined text-[20px]">download</span>
        <span>Export Report</span>
      </button>
    </div>
  );
}
