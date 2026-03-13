'use client';

import { motion } from 'framer-motion';

interface CrawlError {
  type: string;
  description: string;
  severity: 'error' | 'warning' | 'info';
  icon: string;
}

const crawlErrors: CrawlError[] = [
  {
    type: '404 on Vendor/293',
    description: 'Detected 2h ago',
    severity: 'error',
    icon: 'broken_image',
  },
  {
    type: 'Redirect Loop',
    description: 'Detected 5h ago',
    severity: 'warning',
    icon: 'link_off',
  },
  {
    type: 'Missing Alt Tags',
    description: '12 images affected',
    severity: 'info',
    icon: 'warning',
  },
];

const severityStyles: Record<CrawlError['severity'], { icon: string; bg: string }> = {
  error: { icon: 'text-red-500', bg: 'bg-red-50' },
  warning: { icon: 'text-amber-500', bg: 'bg-amber-50' },
  info: { icon: 'text-slate-500', bg: 'bg-slate-100' },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export default function CrawlErrorsPanel() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-fit">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-900 text-lg font-bold font-serif">Crawl Errors</h3>
          <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-md">
            {crawlErrors.length} Issues
          </span>
        </div>
      </div>

      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="p-2"
      >
        {crawlErrors.map((error, idx) => {
          const styles = severityStyles[error.severity];
          return (
            <motion.div
              key={error.type + idx}
              variants={itemVariants}
              className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border-b border-slate-50 last:border-b-0"
            >
              <div className={`${styles.icon} ${styles.bg} p-1.5 rounded-lg`}>
                <span className="material-symbols-outlined text-[18px]">{error.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{error.type}</p>
                <p className="text-xs text-slate-500">{error.description}</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-[18px]">
                chevron_right
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
