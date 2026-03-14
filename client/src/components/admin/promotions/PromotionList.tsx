"use client";

import { motion } from "framer-motion";

export type PromotionStatus = "active" | "pending" | "expired";
export type PaymentStatus = "paid" | "authorized" | "pending";

export interface PromotionListItem {
  id: string;
  vendorId: string;
  vendorName: string;
  planType: string;
  planSubtext: string;
  dateRange: string;
  price: string;
  status: PromotionStatus;
  payment: PaymentStatus;
}

export interface PromotionListProps {
  items: PromotionListItem[];
  selectedId: string | null;
  onSelectRow?: (id: string) => void;
}

const statusClasses: Record<PromotionStatus, string> = {
  active: "bg-emerald-100 text-emerald-800",
  pending: "bg-amber-100 text-amber-800",
  expired: "bg-gray-100 text-gray-600",
};

const rowItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function PromotionList({
  items,
  selectedId,
  onSelectRow,
}: PromotionListProps) {
  return (
    <div className="flex-1 overflow-hidden rounded-b-xl border-x border-b border-gray-200 bg-surface-light shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50/80">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-muted"
              >
                Vendor Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-muted"
              >
                Plan Type
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-muted"
              >
                Date Range
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-muted"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-muted"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-muted"
              >
                Payment
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-text-muted"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((row, index) => (
              <motion.tr
                key={row.id}
                variants={rowItem}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.05, duration: 0.35 }}
                onClick={() => onSelectRow?.(row.id)}
                className={`cursor-pointer transition-colors hover:bg-gray-50/80 ${
                  selectedId === row.id ? "bg-primary/5" : ""
                } ${row.status === "pending" ? "border-l-4 border-l-primary" : ""}`}
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-100" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-text-main">
                        {row.vendorName}
                      </div>
                      <div className="text-xs text-text-muted">
                        ID: {row.vendorId}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-text-main">{row.planType}</div>
                  <div className="text-xs text-text-muted">
                    {row.planSubtext}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-muted">
                  {row.dateRange}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-main">
                  {row.price}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClasses[row.status]}`}
                  >
                    {row.status === "pending"
                      ? "Pending Approval"
                      : row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div
                    className={`flex items-center text-sm ${
                      row.payment === "paid"
                        ? "text-emerald-600"
                        : "text-text-muted"
                    }`}
                  >
                    <span className="material-symbols-outlined mr-1 text-[16px]">
                      {row.payment === "paid"
                        ? "check_circle"
                        : "hourglass_empty"}
                    </span>
                    {row.payment === "paid" ? "Paid" : "Authorized"}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRow?.(row.id);
                    }}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    <span className="material-symbols-outlined">
                      more_vert
                    </span>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50/80 px-6 py-3">
        <p className="text-sm text-text-muted">
          Showing{" "}
          <span className="font-medium text-text-main">1</span> to{" "}
          <span className="font-medium text-text-main">{items.length}</span> of{" "}
          <span className="font-medium text-text-main">187</span> results
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded border border-gray-300 px-3 py-1 text-sm text-text-muted disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded border border-gray-300 px-3 py-1 text-sm text-text-muted transition-colors hover:bg-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
