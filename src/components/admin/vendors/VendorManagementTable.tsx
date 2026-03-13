"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type VendorRowStatus = "active" | "pending" | "suspended";

export interface VendorManagementRow {
  id: string;
  name: string;
  joined: string;
  serviceType: string;
  status: VendorRowStatus;
  events: number;
  rating: string | null;
  imageUrl?: string;
}

export interface VendorManagementTableProps {
  rows: VendorManagementRow[];
  selectedIds: string[];
  onSelectionChange: (ids: string[]) => void;
  onBulkApprove?: (ids: string[]) => void;
  onBulkSuspend?: (ids: string[]) => void;
  onBulkEmail?: (ids: string[]) => void;
  onRowAction?: (id: string, action: string) => void;
}

const stagger = {
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const rowMotion = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function statusBadge(status: VendorRowStatus) {
  switch (status) {
    case "active":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Active
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
          Pending
        </span>
      );
    case "suspended":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-100 px-2.5 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Suspended
        </span>
      );
    default:
      return null;
  }
}

export default function VendorManagementTable({
  rows,
  selectedIds,
  onSelectionChange,
  onBulkApprove,
  onBulkSuspend,
  onBulkEmail,
  onRowAction,
}: VendorManagementTableProps) {
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const headerCheckRef = useRef<HTMLInputElement>(null);

  const allSelected =
    rows.length > 0 && selectedIds.length === rows.length;
  const someSelected = selectedIds.length > 0;

  useEffect(() => {
    const el = headerCheckRef.current;
    if (el) el.indeterminate = someSelected && selectedIds.length < rows.length;
  }, [someSelected, selectedIds.length, rows.length]);

  const toggleAll = () => {
    if (allSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(rows.map((r) => r.id));
    }
  };

  const toggleOne = (id: string) => {
    if (selectedIds.includes(id)) {
      onSelectionChange(selectedIds.filter((x) => x !== id));
    } else {
      onSelectionChange([...selectedIds, id]);
    }
  };

  const clearSelection = () => onSelectionChange([]);

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-xl border border-gray-200 bg-surface-light shadow-sm">
      <AnimatePresence>
        {someSelected && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-text-main px-6 py-3 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-1">
                <span className="rounded bg-primary px-1.5 py-0.5 text-xs font-bold text-white">
                  {selectedIds.length}
                </span>
                <span className="text-sm font-medium text-white">
                  Selected
                </span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <button
                type="button"
                onClick={() => onBulkApprove?.(selectedIds)}
                className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                Approve
              </button>
              <button
                type="button"
                onClick={() => onBulkSuspend?.(selectedIds)}
                className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">
                  block
                </span>
                Suspend
              </button>
              <button
                type="button"
                onClick={() => onBulkEmail?.(selectedIds)}
                className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                Email
              </button>
            </div>
            <button
              type="button"
              onClick={clearSelection}
              className="text-white/70 hover:text-white"
              aria-label="Clear selection"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wider text-text-muted">
              <th className="w-12 p-4 text-center">
                <input
                  ref={headerCheckRef}
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="cursor-pointer rounded border-gray-300 text-primary focus:ring-primary/20"
                  aria-label="Select all"
                />
              </th>
              <th className="p-4">Vendor Name</th>
              <th className="p-4">Service Type</th>
              <th className="p-4">Status</th>
              <th className="p-4">Events</th>
              <th className="p-4">Rating</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            <motion.tr
              variants={stagger}
              initial="hidden"
              animate="show"
              className="hidden"
            />
            <AnimatePresence>
              {rows.map((row, index) => (
                <motion.tr
                  key={row.id}
                  variants={rowMotion}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  className={`group transition-colors hover:bg-gray-50/80 ${
                    selectedIds.includes(row.id) ? "bg-primary/5" : ""
                  }`}
                >
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => toggleOne(row.id)}
                      className="cursor-pointer rounded border-gray-300 text-primary focus:ring-primary/20"
                      aria-label={`Select ${row.name}`}
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 flex-shrink-0 rounded-lg bg-gray-200 bg-cover bg-center shadow-sm"
                        style={
                          row.imageUrl
                            ? { backgroundImage: `url(${row.imageUrl})` }
                            : undefined
                        }
                      />
                      <div>
                        <p className="font-semibold text-text-main">
                          {row.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          Joined {row.joined}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-text-muted">{row.serviceType}</td>
                  <td className="p-4">{statusBadge(row.status)}</td>
                  <td className="p-4 font-medium text-text-main">
                    {row.events}
                  </td>
                  <td className="p-4">
                    {row.rating ? (
                      <div className="flex items-center text-amber-500">
                        <span className="material-symbols-outlined text-[16px] [font-variation-settings:'FILL'1]">
                          star
                        </span>
                        <span className="ml-1 text-xs font-medium text-text-main">
                          {row.rating}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs italic text-text-muted">
                        N/A
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setMenuOpenId(menuOpenId === row.id ? null : row.id)
                        }
                        className="rounded p-1 text-text-muted hover:text-text-main"
                        aria-label="Actions"
                      >
                        <span className="material-symbols-outlined">
                          more_vert
                        </span>
                      </button>
                      {menuOpenId === row.id && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            aria-hidden
                            onClick={() => setMenuOpenId(null)}
                                                   />
                          <div className="absolute right-0 top-full z-20 mt-1 w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                            <button
                              type="button"
                              className="block w-full px-3 py-2 text-left text-sm text-text-main hover:bg-gray-50"
                              onClick={() => {
                                onRowAction?.(row.id, "view");
                                setMenuOpenId(null);
                              }}
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="block w-full px-3 py-2 text-left text-sm text-text-main hover:bg-gray-50"
                              onClick={() => {
                                onRowAction?.(row.id, "edit");
                                setMenuOpenId(null);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="block w-full px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50"
                              onClick={() => {
                                onRowAction?.(row.id, "suspend");
                                setMenuOpenId(null);
                              }}
                            >
                              Suspend
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between px-1 text-xs text-text-muted">
        <p>© {new Date().getFullYear()} EventEase Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
