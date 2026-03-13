'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface CategoryRow {
  id: string;
  name: string;
  slug: string;
  metaTitle: string;
  keywords: string[];
  status: 'optimized' | 'needs_review' | 'missing_meta';
}

const mockCategories: CategoryRow[] = [
  {
    id: 'cat-1',
    name: 'Weddings',
    slug: '/events/weddings',
    metaTitle: 'Best Wedding Planners & Venues',
    keywords: ['wedding', 'planning'],
    status: 'optimized',
  },
  {
    id: 'cat-2',
    name: 'Corporate Events',
    slug: '/events/corporate',
    metaTitle: 'Corporate Event Management',
    keywords: ['corporate', 'business'],
    status: 'needs_review',
  },
  {
    id: 'cat-3',
    name: 'Birthdays',
    slug: '/events/birthdays',
    metaTitle: 'Birthday Party Organizers',
    keywords: ['birthday', 'party'],
    status: 'optimized',
  },
  {
    id: 'cat-4',
    name: 'Concerts',
    slug: '/events/music-concerts',
    metaTitle: 'Live Music & Concert Tickets',
    keywords: ['music', 'live'],
    status: 'missing_meta',
  },
];

const statusConfig = {
  optimized: {
    label: 'Optimized',
    classes:
      'bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300',
    dot: 'bg-green-600',
  },
  needs_review: {
    label: 'Needs Review',
    classes:
      'bg-yellow-100 text-yellow-700 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300',
    dot: 'bg-yellow-600',
  },
  missing_meta: {
    label: 'Missing Meta',
    classes:
      'bg-red-100 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-300',
    dot: 'bg-red-600',
  },
};

const tableVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export default function CategorySeoTable() {
  const [page, setPage] = useState(0);
  const TOTAL = 45;

  return (
    <div className="flex flex-col gap-4">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <h2 className="text-slate-900 text-[22px] font-bold leading-tight font-serif">
          Category SEO Settings
        </h2>
        <div className="flex gap-2">
          <span className="text-xs font-medium px-2 py-1 rounded-md bg-green-100 text-green-700 border border-green-200">
            Live: 42
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-md bg-yellow-100 text-yellow-700 border border-yellow-200">
            Pending: 3
          </span>
        </div>
      </div>

      {/* Table card */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 w-[20%]">
                  Category Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 w-[30%]">
                  Meta Title
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 w-[25%]">
                  Focus Keywords
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 w-[15%]">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 w-[10%] text-right">
                  Action
                </th>
              </tr>
            </thead>
            <motion.tbody
              variants={tableVariants}
              initial="hidden"
              animate="visible"
              className="divide-y divide-slate-100"
            >
              {mockCategories.map((cat) => {
                const cfg = statusConfig[cat.status];
                return (
                  <motion.tr
                    key={cat.id}
                    variants={rowVariants}
                    className="group hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-slate-900 font-medium text-sm">{cat.name}</span>
                        <span className="text-slate-400 text-xs font-mono">{cat.slug}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{cat.metaTitle}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {cat.keywords.map((kw) => (
                          <span
                            key={kw}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cfg.classes}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => { /* TODO: open edit modal */ }}
                        className="text-slate-400 hover:text-primary font-semibold text-sm transition-colors group-hover:underline"
                      >
                        Edit
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </motion.tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <span className="text-sm text-slate-400">
            Showing {mockCategories.length} of {TOTAL} categories
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="p-1 rounded hover:bg-slate-200 text-slate-400 disabled:opacity-40 transition-colors"
              aria-label="Previous page"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className="p-1 rounded hover:bg-slate-200 text-slate-400 transition-colors"
              aria-label="Next page"
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
