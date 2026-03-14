'use client';

import { motion } from 'framer-motion';

export interface EmptySearchProps {
    onClearFilters?: () => void;
    title?: string;
    description?: string;
}

export default function EmptySearch({
    onClearFilters,
    title = 'No Vendors Found',
    description = "We couldn't find any vendors matching your specific criteria. Try adjusting your filters or search for a broader category.",
}: EmptySearchProps) {
    return (
        <motion.div
            className="m-auto flex w-full max-w-sm flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-xl shadow-slate-200/50 ring-1 ring-slate-100/50"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 dark:bg-[#f4e4e6]/40 text-primary dark:text-[#b76e79]">
                <span className="material-symbols-outlined text-[40px] font-light">search_off</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 font-sans">
                {description}
            </p>
            {onClearFilters && (
                <button
                    onClick={onClearFilters}
                    className="mt-8 flex h-11 items-center justify-center rounded-xl bg-white dark:bg-slate-800 px-6 text-sm font-bold text-primary dark:text-[#b76e79] ring-1 ring-primary dark:ring-[#b76e79] transition-all hover:bg-primary dark:hover:bg-[#b76e79] hover:text-white shadow-sm hover:shadow-primary/20 dark:hover:shadow-[#b76e79]/20 w-full"
                >
                    Clear All Filters
                </button>
            )}
        </motion.div>
    );
}
