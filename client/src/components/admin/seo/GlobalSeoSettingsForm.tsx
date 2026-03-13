'use client';

import { motion } from 'framer-motion';

interface GlobalSeoSettings {
  titleSuffix: string;
  robotsRule: string;
  metaDescriptionTemplate: string;
}

interface GlobalSeoSettingsFormProps {
  values: GlobalSeoSettings;
  onChange: (field: keyof GlobalSeoSettings, value: string) => void;
}

const TEMPLATE_TOKENS = ['{category}', '{location}', '{count}'];

export default function GlobalSeoSettingsForm({ values, onChange }: GlobalSeoSettingsFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' as const, delay: 0.1 }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
    >
      {/* Card header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg text-primary">
            <span className="material-symbols-outlined">settings_suggest</span>
          </div>
          <div>
            <h3 className="text-slate-900 text-lg font-bold font-serif">Global SEO Settings</h3>
            <p className="text-slate-500 text-sm">Configure default meta tags for dynamic pages.</p>
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default Title Suffix */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 text-sm font-bold">Default Title Suffix</label>
          <input
            type="text"
            value={values.titleSuffix}
            onChange={(e) => onChange('titleSuffix', e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:border-primary focus:ring-1 focus:ring-primary/30 h-10 px-3 outline-none transition-colors"
          />
          <p className="text-xs text-slate-400">Appended to all page titles automatically.</p>
        </div>

        {/* Robots.txt Rule Set */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 text-sm font-bold">Robots.txt Rule Set</label>
          <select
            value={values.robotsRule}
            onChange={(e) => onChange('robotsRule', e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:border-primary focus:ring-1 focus:ring-primary/30 h-10 px-3 outline-none transition-colors"
          >
            <option value="standard">Standard (Allow All)</option>
            <option value="strict">Strict (Disallow Admin)</option>
            <option value="custom">Custom Configuration</option>
          </select>
          <p className="text-xs text-slate-400">Controls crawler access permissions.</p>
        </div>

        {/* Default Meta Description Template */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-slate-700 text-sm font-bold">
            Default Meta Description Template
          </label>
          <textarea
            value={values.metaDescriptionTemplate}
            onChange={(e) => onChange('metaDescriptionTemplate', e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:border-primary focus:ring-1 focus:ring-primary/30 p-3 outline-none transition-colors resize-none"
          />
          {/* Template token chips */}
          <div className="flex flex-wrap gap-2 mt-1">
            {TEMPLATE_TOKENS.map((token) => (
              <button
                key={token}
                type="button"
                onClick={() => onChange('metaDescriptionTemplate', values.metaDescriptionTemplate + token)}
                className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 cursor-pointer hover:bg-slate-200 transition-colors"
              >
                {token}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
