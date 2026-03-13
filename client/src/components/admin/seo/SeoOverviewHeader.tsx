'use client';

import { motion } from 'framer-motion';

interface SeoOverviewHeaderProps {
  onRebuildSitemap: () => void;
  onSaveChanges: () => void;
}

export default function SeoOverviewHeader({
  onRebuildSitemap,
  onSaveChanges,
}: SeoOverviewHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' as const }}
      className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight tracking-tight font-serif">
          SEO Manager
        </h1>
        <p className="text-slate-500 text-base font-normal leading-normal">
          Manage search engine visibility, meta tags, and indexing status.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onRebuildSitemap}
          type="button"
          className="flex items-center justify-center gap-2 h-10 px-4 rounded-xl border border-slate-300 bg-white text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">sync</span>
          Rebuild Sitemap
        </button>

        <button
          onClick={onSaveChanges}
          type="button"
          className="flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">save</span>
          Save Changes
        </button>
      </div>
    </motion.div>
  );
}
