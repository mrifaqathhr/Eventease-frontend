'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TopPage {
  url: string;
  title: string;
  clicks: number;
  impressions: string;
  ctr: string;
  avgPosition: number;
  trend: 'up' | 'down' | 'stable';
}

const mockTopPages: TopPage[] = [
  {
    url: '/events/weddings',
    title: 'Best Wedding Planners & Venues',
    clicks: 8432,
    impressions: '142K',
    ctr: '5.9%',
    avgPosition: 2.1,
    trend: 'up',
  },
  {
    url: '/vendors/photography',
    title: 'Top Wedding Photographers',
    clicks: 6120,
    impressions: '98K',
    ctr: '6.2%',
    avgPosition: 3.4,
    trend: 'up',
  },
  {
    url: '/events/corporate',
    title: 'Corporate Event Management',
    clicks: 4890,
    impressions: '81K',
    ctr: '6.0%',
    avgPosition: 4.8,
    trend: 'stable',
  },
  {
    url: '/blog/how-to-plan-a-wedding',
    title: 'How to Plan a Wedding: Complete Guide',
    clicks: 3760,
    impressions: '67K',
    ctr: '5.6%',
    avgPosition: 5.2,
    trend: 'up',
  },
  {
    url: '/events/birthdays',
    title: 'Birthday Party Organizers Near You',
    clicks: 2940,
    impressions: '55K',
    ctr: '5.3%',
    avgPosition: 6.1,
    trend: 'down',
  },
  {
    url: '/vendors/florists',
    title: 'Wedding Florists & Decorators',
    clicks: 2150,
    impressions: '43K',
    ctr: '5.0%',
    avgPosition: 7.3,
    trend: 'stable',
  },
];

const tableContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

function TrendIcon({ trend }: { trend: TopPage['trend'] }) {
  if (trend === 'up') {
    return (
      <span className="inline-flex items-center gap-0.5 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md text-[11px] font-bold">
        <span className="material-symbols-outlined text-[13px]">trending_up</span>
        Up
      </span>
    );
  }
  if (trend === 'down') {
    return (
      <span className="inline-flex items-center gap-0.5 text-red-500 bg-red-50 px-1.5 py-0.5 rounded-md text-[11px] font-bold">
        <span className="material-symbols-outlined text-[13px]">trending_down</span>
        Down
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md text-[11px] font-bold">
      <span className="material-symbols-outlined text-[13px]">trending_flat</span>
      Stable
    </span>
  );
}

export default function TopPagesTable() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPages = mockTopPages.filter(
    (p) =>
      p.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Card header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined">leaderboard</span>
            </div>
            <div>
              <h3 className="text-slate-900 text-lg font-bold font-serif">Top Performing Pages</h3>
              <p className="text-slate-500 text-sm">Based on organic clicks (last 28 days)</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter pages..."
              className="pl-9 pr-4 h-9 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors w-52"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[40%]">
                Page / URL
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                Clicks
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                Impressions
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                CTR
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                Avg. Pos.
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                Trend
              </th>
            </tr>
          </thead>
          <motion.tbody
            variants={tableContainerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-slate-100"
          >
            {filteredPages.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-400 text-sm">
                  No pages match your search.
                </td>
              </tr>
            ) : (
              filteredPages.map((page) => (
                <motion.tr
                  key={page.url}
                  variants={rowVariants}
                  className="group hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-900 font-semibold text-sm group-hover:text-primary transition-colors">
                        {page.title}
                      </span>
                      <span className="text-slate-400 text-xs font-mono">{page.url}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-slate-900 font-bold text-sm">
                      {page.clicks.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-slate-600 text-sm">{page.impressions}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-slate-600 text-sm font-medium">{page.ctr}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-slate-600 text-sm">{page.avgPosition}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <TrendIcon trend={page.trend} />
                  </td>
                </motion.tr>
              ))
            )}
          </motion.tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Showing {filteredPages.length} of {mockTopPages.length} top pages
        </span>
        <button
          type="button"
          className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          View full report
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
