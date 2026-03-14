"use client";

import { motion } from "framer-motion";

export type StatCard = {
  id: string;
  label: string;
  value: string;
  change?: string;
  changeTone?: "positive" | "negative" | "neutral";
};

type StatsGridProps = {
  stats?: StatCard[];
};

const defaultStats: StatCard[] = [
  {
    id: "total-users",
    label: "Total Users",
    value: "8,240",
    change: "+15.4%",
    changeTone: "positive",
  },
  {
    id: "total-vendors",
    label: "Total Vendors",
    value: "1,240",
    change: "+5.2%",
    changeTone: "positive",
  },
  {
    id: "pending-approvals",
    label: "Pending Approvals",
    value: "35",
    change: "+12.0%",
    changeTone: "negative",
  },
  {
    id: "monthly-revenue",
    label: "Revenue (Mo)",
    value: "$45k",
    change: "+8.5%",
    changeTone: "positive",
  },
];

function toneClasses(tone: StatCard["changeTone"]) {
  if (tone === "positive") {
    return "bg-emerald-50 text-emerald-700";
  }
  if (tone === "negative") {
    return "bg-rose-50 text-rose-600";
  }
  return "bg-gray-50 text-gray-600";
}

export default function StatsGrid({ stats = defaultStats }: StatsGridProps) {
  return (
    <section aria-label="Platform statistics">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
            className="group rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <div className="rounded-lg bg-background-light px-2 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                {stat.label}
              </div>
              {stat.change && (
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${toneClasses(
                    stat.changeTone,
                  )}`}
                >
                  {stat.change}
                </span>
              )}
            </div>
            <p className="text-2xl font-semibold tracking-tight text-text-main">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

