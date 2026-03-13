'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Suggestion {
  id: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  icon: string;
  title: string;
  description: string;
  impact: string;
  applied: boolean;
}

const suggestions: Suggestion[] = [
  {
    id: 's-1',
    priority: 'high',
    category: 'Meta Tags',
    icon: 'description',
    title: 'Add structured data to vendor pages',
    description:
      'Implementing JSON-LD schema markup on vendor profile pages can improve rich snippet eligibility in Google Search, displaying star ratings and pricing.',
    impact: '+15% CTR estimated',
    applied: false,
  },
  {
    id: 's-2',
    priority: 'high',
    category: 'Performance',
    icon: 'speed',
    title: 'Optimize Core Web Vitals on homepage',
    description:
      'LCP score is 3.8s. Compress hero images and defer non-critical JS to bring this below the 2.5s threshold and improve ranking signals.',
    impact: '+~8 positions',
    applied: false,
  },
  {
    id: 's-3',
    priority: 'medium',
    category: 'Content',
    icon: 'edit_note',
    title: 'Expand thin category pages',
    description:
      'Pages for "Concerts" and "Corporate Events" have fewer than 300 words. Adding a descriptive intro paragraph and FAQ section can improve organic reach.',
    impact: 'Higher indexability',
    applied: false,
  },
  {
    id: 's-4',
    priority: 'low',
    category: 'Internal Linking',
    icon: 'link',
    title: 'Add internal links from blog to vendor pages',
    description:
      '18 blog posts mention service categories without linking to corresponding vendor listing pages. Internal links distribute PageRank and reduce bounce rate.',
    impact: '+Domain authority flow',
    applied: true,
  },
];

const priorityConfig = {
  high: { badge: 'text-red-600 bg-red-50 border border-red-100', dot: 'bg-red-500' },
  medium: {
    badge: 'text-amber-600 bg-amber-50 border border-amber-100',
    dot: 'bg-amber-500',
  },
  low: { badge: 'text-blue-600 bg-blue-50 border border-blue-100', dot: 'bg-blue-500' },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

export default function ContentOptimizationSuggestions() {
  const [applied, setApplied] = useState<Set<string>>(
    new Set(suggestions.filter((s) => s.applied).map((s) => s.id)),
  );

  const handleApply = (id: string) => {
    setApplied((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-slate-900 text-[22px] font-bold leading-tight font-serif">
          Optimization Suggestions
        </h2>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md font-medium">
          AI / System
        </span>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="divide-y divide-slate-100"
        >
          {suggestions.map((s) => {
            const isApplied = applied.has(s.id);
            const cfg = priorityConfig[s.priority];
            return (
              <motion.div
                key={s.id}
                variants={rowVariants}
                className={`p-5 transition-colors ${isApplied ? 'bg-slate-50/60' : 'hover:bg-slate-50/40'}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 p-2.5 rounded-xl mt-0.5 ${
                      isApplied
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-primary/8 text-primary'
                    }`}
                    style={!isApplied ? { backgroundColor: 'rgba(232,48,94,0.08)' } : undefined}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isApplied ? 'check_circle' : s.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3
                        className={`text-sm font-bold ${isApplied ? 'text-slate-400 line-through' : 'text-slate-900'}`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${cfg.badge}`}
                      >
                        {s.priority}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-full">
                        {s.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        {s.impact}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    onClick={() => handleApply(s.id)}
                    className={`flex-shrink-0 text-xs font-bold px-4 py-2 rounded-lg transition-colors ${
                      isApplied
                        ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    {isApplied ? (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                        Applied
                      </span>
                    ) : (
                      'Apply'
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50">
          <p className="text-xs text-center text-slate-400">
            Suggestions are generated automatically and updated weekly. Applied suggestions are logged for auditing.
          </p>
        </div>
      </div>
    </div>
  );
}
