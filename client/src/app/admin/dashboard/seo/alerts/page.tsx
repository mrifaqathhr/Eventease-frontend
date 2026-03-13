'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CategorySeoTable from '@/components/admin/seo/CategorySeoTable';
import SitemapManager from '@/components/admin/seo/SitemapManager';
import SeoAlertsList from '@/components/admin/seo/SeoAlertsList';
import ContentOptimizationSuggestions from '@/components/admin/seo/ContentOptimizationSuggestions';

export default function SeoAlertsPage() {
  // Export report / add category states — ready for wiring
  const [_isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    // TODO: generate CSV/PDF via Appwrite function
    setTimeout(() => setIsExporting(false), 1500);
  };

  return (
    <div className="px-6 lg:px-10 py-8 w-full max-w-[1200px] mx-auto flex flex-col gap-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const }}
        className="flex flex-wrap justify-between items-end gap-4"
      >
        <div className="flex flex-col gap-2">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
            <Link href="/admin/dashboard/seo" className="hover:text-primary transition-colors">
              SEO Manager
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-slate-600">Content &amp; Alerts</span>
          </nav>
          <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight font-serif">
            SEO Content &amp; Alerts
          </h1>
          <p className="text-slate-500 text-base font-normal leading-normal max-w-2xl">
            Manage meta data for event categories and monitor critical SEO alerts to maintain search
            ranking visibility.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleExport}
            className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 border border-slate-300 bg-white text-slate-700 text-sm font-bold shadow-sm hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
          <button
            type="button"
            onClick={() => { /* TODO: open add category modal */ }}
            className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Category
          </button>
        </div>
      </motion.div>

      {/* Category SEO Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const, delay: 0.08 }}
      >
        <CategorySeoTable />
      </motion.div>

      {/* Two-column grid: Sitemap Manager + SEO Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const, delay: 0.16 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <SitemapManager />
        <SeoAlertsList />
      </motion.div>

      {/* Full-width Optimization Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const, delay: 0.24 }}
      >
        <ContentOptimizationSuggestions />
      </motion.div>
    </div>
  );
}
