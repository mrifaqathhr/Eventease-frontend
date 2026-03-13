'use client';

import { motion } from 'framer-motion';

interface KpiCardData {
  icon: string;
  label: string;
  value: string;
  badge?: {
    icon: string;
    text: string;
    variant: 'green' | 'blue';
  };
  /** Special variants for cards that don't follow the standard value+badge layout */
  variant?: 'sitemap' | 'score';
  sitemapStatus?: string;
  sitemapSubtitle?: string;
  scoreMax?: number;
  scoreValue?: number;
}

const kpiCards: KpiCardData[] = [
  {
    icon: 'description',
    label: 'Indexed Pages',
    value: '1,240',
    badge: { icon: 'trending_up', text: '+5.2%', variant: 'green' },
  },
  {
    icon: 'rss_feed',
    label: 'Blog Posts',
    value: '86',
    badge: { icon: 'add', text: '2 New', variant: 'green' },
  },
  {
    icon: 'store',
    label: 'Vendor Pages',
    value: '312',
    badge: { icon: 'trending_up', text: '+14', variant: 'green' },
  },
  {
    icon: 'map',
    label: 'Sitemap Status',
    value: 'Active',
    variant: 'sitemap',
    sitemapSubtitle: 'Last updated 2h ago',
  },
  {
    icon: 'bar_chart',
    label: 'Avg Meta Score',
    value: '92',
    variant: 'score',
    scoreValue: 92,
    scoreMax: 100,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function SeoStatsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
    >
      {kpiCards.map((card) => (
        <motion.div
          key={card.label}
          variants={cardVariants}
          className="flex flex-col gap-2 rounded-xl p-5 bg-white border border-slate-200 shadow-sm"
        >
          {/* Card header */}
          <div className="flex items-center gap-2 text-slate-500">
            <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
            <p className="text-xs font-bold uppercase tracking-wider">{card.label}</p>
          </div>

          {/* Sitemap variant */}
          {card.variant === 'sitemap' && (
            <>
              <div className="flex items-center justify-between mt-1">
                <p className="text-slate-900 text-lg font-bold">{card.value}</p>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
              </div>
              <p className="text-slate-400 text-xs">{card.sitemapSubtitle}</p>
            </>
          )}

          {/* Score variant */}
          {card.variant === 'score' && (
            <>
              <div className="flex items-end gap-2">
                <p className="text-slate-900 text-2xl font-bold font-serif">{card.value}</p>
                <p className="text-slate-400 text-sm mb-1">/ {card.scoreMax}</p>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-700"
                  style={{ width: `${card.scoreValue}%` }}
                />
              </div>
            </>
          )}

          {/* Standard variant */}
          {!card.variant && (
            <>
              <p className="text-slate-900 text-2xl font-bold font-serif">{card.value}</p>
              {card.badge && (
                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 w-fit px-2 py-0.5 rounded-md">
                  <span className="material-symbols-outlined text-[16px]">{card.badge.icon}</span>
                  <span className="text-xs font-bold">{card.badge.text}</span>
                </div>
              )}
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
