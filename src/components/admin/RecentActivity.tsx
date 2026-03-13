"use client";

import { motion } from "framer-motion";

type ActivityStatus = "active" | "pending";

type ActivityItem = {
  id: string;
  vendorName: string;
  category: string;
  status: ActivityStatus;
  date: string;
};

const rows: ActivityItem[] = [
  {
    id: "1",
    vendorName: "Grand Ballroom Events",
    category: "Venues",
    status: "active",
    date: "Oct 24, 2023",
  },
  {
    id: "2",
    vendorName: "Dreamy Dresses",
    category: "Bridal Wear",
    status: "pending",
    date: "Oct 23, 2023",
  },
  {
    id: "3",
    vendorName: "Elite Catering Co.",
    category: "Catering",
    status: "active",
    date: "Oct 22, 2023",
  },
];

function statusClasses(status: ActivityStatus) {
  if (status === "active") {
    return "bg-emerald-50 text-emerald-700";
  }
  return "bg-amber-50 text-amber-700";
}

function statusLabel(status: ActivityStatus) {
  if (status === "active") return "Active";
  return "Pending";
}

export default function RecentActivity() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-100 bg-surface-light shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-text-main">
            Recent Vendor Activity
          </h2>
          <p className="mt-0.5 text-xs text-text-muted">
            Latest movements across key vendor accounts.
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gray-50/60 text-xs font-semibold uppercase tracking-wide text-text-muted">
              <th className="px-6 py-3">Vendor</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="border-t border-gray-50 bg-white/40 hover:bg-gray-50/80"
              >
                <td className="px-6 py-3 font-medium text-text-main">
                  {row.vendorName}
                </td>
                <td className="px-6 py-3 text-text-muted">{row.category}</td>
                <td className="px-6 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusClasses(
                      row.status,
                    )}`}
                  >
                    {statusLabel(row.status)}
                  </span>
                </td>
                <td className="px-6 py-3 text-text-muted">{row.date}</td>
                <td className="px-6 py-3 text-right">
                  <button
                    type="button"
                    className="text-xs font-medium text-text-muted underline-offset-2 hover:text-primary hover:underline"
                  >
                    Manage
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

