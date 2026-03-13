'use client';

import { motion } from 'framer-motion';

interface SitemapEntry {
  id: string;
  name: string;
  file: string;
  lastGenerated: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

const sitemaps: SitemapEntry[] = [
  {
    id: 'vendors',
    name: 'Vendors Sitemap',
    file: 'sitemap-vendors.xml',
    lastGenerated: '2 hours ago',
    icon: 'storefront',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-300',
  },
  {
    id: 'blogs',
    name: 'Blogs Sitemap',
    file: 'sitemap-blogs.xml',
    lastGenerated: '1 day ago',
    icon: 'article',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-300',
  },
  {
    id: 'events',
    name: 'Events Sitemap',
    file: 'sitemap-events.xml',
    lastGenerated: '5 mins ago',
    icon: 'event',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-300',
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export default function SitemapManager() {
  const handleRegenerate = (id: string) => {
    /* TODO: trigger regeneration via Appwrite function */
    console.log(`Regenerating sitemap: ${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-slate-900 text-[22px] font-bold leading-tight font-serif">
        Sitemap Manager
      </h2>

      <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden h-full">
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="p-6 flex flex-col gap-4"
        >
          {sitemaps.map((sm) => (
            <motion.div
              key={sm.id}
              variants={itemVariants}
              className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${sm.iconBg} ${sm.iconColor}`}>
                  <span className="material-symbols-outlined">{sm.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold text-sm">{sm.name}</span>
                  <span className="text-slate-400 text-xs mt-0.5 font-mono">{sm.file}</span>
                  <span className="text-slate-400 text-xs mt-0.5">
                    Last generated: {sm.lastGenerated}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRegenerate(sm.id)}
                className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors flex-shrink-0"
              >
                Regenerate
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <div className="mt-auto p-4 border-t border-slate-100 bg-slate-50/70">
          <p className="text-xs text-center text-slate-400">
            Sitemaps are automatically submitted to Google Search Console daily at 00:00 UTC.
          </p>
        </div>
      </div>
    </div>
  );
}
