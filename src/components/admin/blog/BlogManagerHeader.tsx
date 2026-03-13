"use client";

import Link from "next/link";

export interface BlogManagerHeaderProps {
  onNewPost?: () => void;
  onExport?: () => void;
}

export default function BlogManagerHeader({
  onNewPost,
  onExport,
}: BlogManagerHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-text-main">
          Posts Overview
        </h1>
        <p className="mt-1 text-text-muted">
          Manage your platform&apos;s content and publications.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onExport}
          className="flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-text-main shadow-sm transition-colors hover:bg-gray-50"
        >
          <span className="material-symbols-outlined text-[20px]">download</span>
          Export
        </button>
        <Link
          href="/admin/dashboard/blog/new"
          className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary-dark"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Post
        </Link>
      </div>
    </div>
  );
}
