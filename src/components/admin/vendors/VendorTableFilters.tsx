"use client";

import { useState } from "react";

export interface VendorTableFiltersProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  onFilterClick?: () => void;
  onSortClick?: () => void;
  onExportClick?: () => void;
  showingLabel?: string;
}

const STATUS_OPTIONS = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "suspended", label: "Suspended" },
];

export default function VendorTableFilters({
  searchValue,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  onFilterClick,
  onSortClick,
  onExportClick,
  showingLabel = "Showing 1-10 of 1,248",
}: VendorTableFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative w-full min-w-[200px] max-w-xs">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted material-symbols-outlined text-[18px]">
            search
          </span>
          <input
            type="search"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search vendors..."
            className="w-full rounded-lg border border-gray-200 bg-surface-light py-2 pl-9 pr-3 text-sm text-text-main outline-none placeholder:text-text-muted focus:ring-2 focus:ring-primary/20"
            aria-label="Search vendors"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          className="h-9 rounded-lg border border-gray-200 bg-surface-light px-3 pr-8 text-sm text-text-main focus:ring-2 focus:ring-primary/20"
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onFilterClick}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-surface-light px-4 py-2 text-sm font-medium text-text-main transition-colors hover:bg-gray-50"
        >
          <span className="material-symbols-outlined text-[18px]">
            filter_list
          </span>
          Filter
        </button>
        <button
          type="button"
          onClick={onSortClick}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-surface-light px-4 py-2 text-sm font-medium text-text-main transition-colors hover:bg-gray-50"
        >
          <span className="material-symbols-outlined text-[18px]">sort</span>
          Sort
        </button>
        <div className="mx-2 h-6 w-px bg-gray-300" />
        <button
          type="button"
          onClick={onExportClick}
          className="rounded-lg p-2 text-text-muted transition-colors hover:text-primary"
          aria-label="Download"
        >
          <span className="material-symbols-outlined">download</span>
        </button>
        <button
          type="button"
          className="rounded-lg p-2 text-text-muted transition-colors hover:text-primary"
          aria-label="Print"
        >
          <span className="material-symbols-outlined">print</span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-text-muted">{showingLabel}</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled
            className="rounded p-1 transition-colors hover:bg-gray-200 disabled:opacity-50"
            aria-label="Previous page"
          >
            <span className="material-symbols-outlined text-[20px]">
              chevron_left
            </span>
          </button>
          <button
            type="button"
            className="rounded p-1 transition-colors hover:bg-gray-200"
            aria-label="Next page"
          >
            <span className="material-symbols-outlined text-[20px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
