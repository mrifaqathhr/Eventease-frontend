"use client";

import { motion } from "framer-motion";

export interface VendorStatItem {
  id: string;
  label: string;
  value: string;
  change?: string;
  changeUp?: boolean;
  iconLabel?: string;
}

export interface VendorStatsProps {
  stats?: VendorStatItem[];
}

const defaultStats: VendorStatItem[] = [
  {
    id: "total",
    label: "Total Vendors",
    value: "1,248",
    change: "12%",
    changeUp: true,
    iconLabel: "storefront",
  },
  {
    id: "active",
    label: "Active Vendors",
    value: "1,102",
    change: "5%",
    changeUp: true,
    iconLabel: "check_circle",
  },
  {
    id: "pending",
    label: "Pending Approval",
    value: "101",
    change: "15%",
    changeUp: true,
    iconLabel: "hourglass_top",
  },
  {
    id: "suspended",
    label: "Suspended",
    value: "45",
    change: "2%",
    changeUp: false,
    iconLabel: "block",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function VendorStats({ stats = defaultStats }: VendorStatsProps) {
  return (
    <motion.section
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial="hidden"
      animate="show"
      aria-label="Vendor statistics"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          variants={item}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl border border-gray-200 bg-surface-light p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-text-muted">
                {stat.label}
              </p>
              <h3 className="mt-1 text-3xl font-bold text-text-main">
                {stat.value}
              </h3>
            </div>
            <div
              className={
                stat.id === "active"
                  ? "rounded-lg bg-emerald-50 p-2 text-emerald-600"
                  : stat.id === "pending"
                    ? "rounded-lg bg-amber-50 p-2 text-amber-600"
                    : stat.id === "suspended"
                      ? "rounded-lg bg-primary/10 p-2 text-primary"
                      : "rounded-lg bg-primary/10 p-2 text-primary"
              }
            >
              <span className="material-symbols-outlined">
                {stat.iconLabel ?? "storefront"}
              </span>
            </div>
          </div>
          {stat.change && (
            <div className="flex items-center text-sm">
              <span
                className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-medium ${
                  stat.changeUp
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-primary/5 text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {stat.changeUp ? "trending_up" : "trending_down"}
                </span>
                {stat.change}
              </span>
              <span className="ml-2 text-text-muted">vs last month</span>
            </div>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
}
