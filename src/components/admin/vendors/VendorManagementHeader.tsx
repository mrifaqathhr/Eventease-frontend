"use client";

import Link from "next/link";

export interface VendorManagementHeaderProps {
  onAddVendor?: () => void;
}

export default function VendorManagementHeader({
  onAddVendor,
}: VendorManagementHeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-main sm:text-3xl">
          Vendor Management
        </h1>
        <p className="mt-1 text-sm text-text-muted">
          View, filter, and manage all registered vendors.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onAddVendor}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm shadow-primary/30 transition-colors hover:bg-rose-600"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>Add Vendor</span>
        </button>
      </div>
    </header>
  );
}
