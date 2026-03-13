'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface SeoAlert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  icon: string;
  title: string;
  description: string;
  actions: Array<{ label: string; primary?: boolean }>;
}

const mockAlerts: SeoAlert[] = [
  {
    id: 'alert-1',
    severity: 'critical',
    icon: 'warning',
    title: 'Pages missing meta description',
    description:
      '12 pages are currently missing meta descriptions. This affects click-through rates.',
    actions: [
      { label: 'View Pages', primary: true },
      { label: 'Fix Automatically' },
    ],
  },
  {
    id: 'alert-2',
    severity: 'warning',
    icon: 'content_copy',
    title: 'Duplicate titles detected',
    description:
      '4 groups of pages share the same title tag. Ensure unique titles for better ranking.',
    actions: [
      { label: 'Resolve', primary: true },
      { label: 'Dismiss' },
    ],
  },
  {
    id: 'alert-3',
    severity: 'info',
    icon: 'link_off',
    title: 'Broken Links (404)',
    description: '3 external links on your blog are returning 404 errors.',
    actions: [{ label: 'Review Links', primary: true }],
  },
];

const severityConfig = {
  critical: {
    container: 'border-red-100 bg-red-50 dark:border-red-900/30 dark:bg-red-900/10',
    icon: 'text-red-500',
    title: 'text-red-800 dark:text-red-200',
    body: 'text-red-700 dark:text-red-300',
    primaryBtn: 'text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200',
    secondaryBtn: 'text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200',
  },
  warning: {
    container: 'border-yellow-100 bg-yellow-50 dark:border-yellow-900/30 dark:bg-yellow-900/10',
    icon: 'text-yellow-600',
    title: 'text-yellow-800 dark:text-yellow-200',
    body: 'text-yellow-700 dark:text-yellow-300',
    primaryBtn: 'text-yellow-700 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-200',
    secondaryBtn: 'text-slate-500 hover:text-slate-700',
  },
  info: {
    container: 'border-blue-100 bg-blue-50 dark:border-blue-900/30 dark:bg-blue-900/10',
    icon: 'text-blue-500',
    title: 'text-blue-800 dark:text-blue-200',
    body: 'text-blue-700 dark:text-blue-300',
    primaryBtn: 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200',
    secondaryBtn: 'text-slate-500 hover:text-slate-700',
  },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
  exit: { opacity: 0, height: 0, marginBottom: 0, transition: { duration: 0.25 } },
};

export default function SeoAlertsList() {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const visible = mockAlerts.filter((a) => !dismissed.has(a.id));

  const handleDismiss = (id: string) => {
    setDismissed((prev) => new Set([...prev, id]));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-slate-900 text-[22px] font-bold leading-tight font-serif">
          SEO Alerts
        </h2>
        <span className="inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600">
          {visible.length} Critical
        </span>
      </div>

      <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="p-6 flex flex-col gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center text-slate-400 text-sm"
              >
                <span className="material-symbols-outlined text-4xl mb-2 block text-slate-300">
                  check_circle
                </span>
                All alerts resolved!
              </motion.div>
            ) : (
              visible.map((alert) => {
                const cfg = severityConfig[alert.severity];
                return (
                  <motion.div
                    key={alert.id}
                    variants={itemVariants}
                    exit={itemVariants.exit}
                    layout
                    className={`relative overflow-hidden rounded-xl border p-4 ${cfg.container}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className={`material-symbols-outlined ${cfg.icon}`}>
                          {alert.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-sm font-bold ${cfg.title}`}>{alert.title}</h3>
                        <p className={`mt-1 text-sm ${cfg.body}`}>{alert.description}</p>
                        <div className="mt-3 flex gap-3 flex-wrap">
                          {alert.actions.map((action, i) => (
                            <button
                              key={action.label}
                              type="button"
                              onClick={() => {
                                if (action.label === 'Dismiss') handleDismiss(alert.id);
                                /* TODO: wire actions to Appwrite */
                              }}
                              className={`text-xs font-semibold transition-colors ${
                                i === 0 ? cfg.primaryBtn : cfg.secondaryBtn
                              }`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
