"use client";

import { motion } from "framer-motion";

export interface PromotionStatItem {
  id: string;
  label: string;
  value: string;
  change?: string;
  changeUp?: boolean;
  iconLabel?: string;
}

export interface PromotionStatsProps {
  stats?: PromotionStatItem[];
}

const defaultStats: PromotionStatItem[] = [
  {
    id: "active",
    label: "Active Promotions",
    value: "124",
    change: "5%",
    changeUp: true,
    iconLabel: "campaign",
  },
  {
    id: "pending",
    label: "Pending Requests",
    value: "18",
    change: "2%",
    changeUp: true,
    iconLabel: "pending_actions",
  },
  {
    id: "expired",
    label: "Expired",
    value: "45",
    change: "1%",
    changeUp: false,
    iconLabel: "event_busy",
  },
  {
    id: "revenue",
    label: "Monthly Revenue",
    value: "$12,450",
    change: "8%",
    changeUp: true,
    iconLabel: "payments",
  },
];

export default function PromotionStats({
  stats = defaultStats,
}: PromotionStatsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-surface-light p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex items-start justify-between">
            <p className="text-sm font-medium uppercase tracking-wider text-text-muted">
              {stat.label}
            </p>
            <span
              className={
                stat.id === "pending"
                  ? "material-symbols-outlined text-amber-500/60"
                  : stat.id === "expired"
                    ? "material-symbols-outlined text-gray-400"
                    : stat.id === "revenue"
                      ? "material-symbols-outlined text-emerald-500/60"
                      : "material-symbols-outlined text-primary/60"
              }
            >
              {stat.iconLabel ?? "campaign"}
            </span>
          </div>
          <div className="mt-2 flex items-end gap-2">
            <p className="text-3xl font-bold text-text-main">{stat.value}</p>
            {stat.change && (
              <span
                className={`mb-1 flex items-center rounded px-1.5 py-0.5 text-sm font-medium ${
                  stat.changeUp
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-orange-50 text-orange-600"
                }`}
              >
                <span className="material-symbols-outlined mr-0.5 text-[14px]">
                  {stat.changeUp ? "trending_up" : "trending_down"}
                </span>
                {stat.change}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
