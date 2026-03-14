"use client";

import { motion } from "framer-motion";
import TableActions from "./TableActions";

export type VendorStatus = "pending" | "approved" | "rejected";

export type Vendor = {
  id: string;
  name: string;
  category: string;
  dateJoined: string;
  status: VendorStatus;
};

type VendorTableProps = {
  vendors: Vendor[];
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
};

function statusBadgeClasses(status: VendorStatus): string {
  switch (status) {
    case "approved":
      return "bg-emerald-50 text-emerald-700";
    case "pending":
      return "bg-amber-50 text-amber-700";
    case "rejected":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-gray-50 text-gray-700";
  }
}

function statusLabel(status: VendorStatus): string {
  switch (status) {
    case "approved":
      return "Approved";
    case "pending":
      return "Pending";
    case "rejected":
      return "Rejected";
    default:
      return status;
  }
}

export default function VendorTable({
  vendors,
  onApprove,
  onReject,
}: VendorTableProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-100 bg-surface-light shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-text-main">
            Vendor Approvals
          </h2>
          <p className="mt-0.5 text-xs text-text-muted">
            Review and action on pending vendor registrations.
          </p>
        </div>
        <p className="text-xs text-text-muted">
          Showing{" "}
          <span className="font-semibold text-text-main">{vendors.length}</span>{" "}
          record{vendors.length === 1 ? "" : "s"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gray-50/70 text-xs font-semibold uppercase tracking-wide text-text-muted">
              <th className="px-6 py-3">Vendor Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Date Joined</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-sm text-text-muted"
                >
                  No vendors match the current filters.
                </td>
              </tr>
            )}
            {vendors.map((vendor, index) => (
              <motion.tr
                key={vendor.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="border-t border-gray-50 bg-white/40 hover:bg-gray-50/80"
              >
                <td className="px-6 py-3 font-medium text-text-main">
                  {vendor.name}
                </td>
                <td className="px-6 py-3 text-text-muted">{vendor.category}</td>
                <td className="px-6 py-3 text-text-muted">{vendor.dateJoined}</td>
                <td className="px-6 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusBadgeClasses(
                      vendor.status,
                    )}`}
                  >
                    {statusLabel(vendor.status)}
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <TableActions
                    onApprove={
                      onApprove ? () => onApprove(vendor.id) : undefined
                    }
                    onReject={onReject ? () => onReject(vendor.id) : undefined}
                  />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

