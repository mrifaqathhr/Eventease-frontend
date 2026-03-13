'use client';

import { motion } from 'framer-motion';

export default function IndexManagementPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' as const, delay: 0.05 }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-fit"
    >
      {/* Card header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
            <span className="material-symbols-outlined">dataset</span>
          </div>
          <div>
            <h3 className="text-slate-900 text-lg font-bold font-serif">Index Management</h3>
            <p className="text-slate-500 text-sm">Control internal indexing.</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        {/* Health bar */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-slate-700">Index Health</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              Healthy
            </span>
          </div>
          <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '95%' }}
              transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.3 }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
            />
          </div>
          <p className="text-xs text-slate-500">95% of content is indexed and reachable.</p>
        </div>

        <hr className="border-slate-100" />

        {/* Schedule info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-slate-400 text-[20px] mt-0.5">
              history
            </span>
            <div>
              <p className="text-sm font-medium text-slate-900">Last Full Index</p>
              <p className="text-xs text-slate-500">Today, 4:30 AM</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-slate-400 text-[20px] mt-0.5">
              schedule
            </span>
            <div>
              <p className="text-sm font-medium text-slate-900">Next Scheduled</p>
              <p className="text-xs text-slate-500">Tomorrow, 4:00 AM</p>
            </div>
          </div>
        </div>

        {/* Re-index button */}
        <button
          type="button"
          onClick={() => { /* TODO: trigger re-index via Appwrite function */ }}
          className="w-full py-3 rounded-xl border-2 border-slate-200 hover:border-primary/50 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-300">
            refresh
          </span>
          Re-index All Content
        </button>
      </div>
    </motion.div>
  );
}
