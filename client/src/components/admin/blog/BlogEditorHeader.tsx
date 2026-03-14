"use client";

import Link from "next/link";

export type DraftStatus = "draft" | "pending" | "scheduled";

export interface BlogEditorHeaderProps {
  status?: DraftStatus;
  onPreview?: () => void;
  onPublish?: () => void;
}

export default function BlogEditorHeader({
  status = "draft",
  onPreview,
  onPublish,
}: BlogEditorHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200 bg-surface-light px-6 py-3 lg:px-8">
      <div className="flex items-center gap-4 text-text-main">
        <Link
          href="/admin/dashboard/blog"
          className="flex size-6 items-center justify-center text-primary"
          aria-label="Back to blog"
        >
          <span className="material-symbols-outlined text-2xl">
            arrow_back
          </span>
        </Link>
        <h2 className="font-display text-lg font-bold leading-tight tracking-tight text-text-main">
          EventEase Blog Manager
        </h2>
        <span className="rounded-md border border-gray-200 bg-background-light px-2 py-0.5 text-sm font-normal text-text-muted">
          {status === "draft"
            ? "Draft"
            : status === "scheduled"
              ? "Scheduled"
              : "Pending Review"}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-end gap-6">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onPreview}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-transparent bg-background-light px-4 py-2 text-sm font-bold leading-normal text-text-main transition-colors hover:border-gray-200 hover:bg-gray-100"
          >
            <span className="truncate">Preview Post</span>
          </button>
          <button
            type="button"
            onClick={onPublish}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 py-2 text-sm font-bold leading-normal text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            <span className="truncate">Publish</span>
          </button>
        </div>
        <div className="h-8 w-px bg-gray-200" />
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
          <span className="text-xs font-semibold text-text-muted">A</span>
        </div>
      </div>
    </header>
  );
}
