'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface SaveProfileBarProps {
    onSave: () => void;
    isSaving?: boolean;
}

export default function SaveProfileBar({ onSave, isSaving = false }: SaveProfileBarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6 text-sm" aria-label="Breadcrumb">
                <Link
                    href="/vendor/dashboard"
                    className="text-text-muted hover:text-primary transition-colors font-medium"
                >
                    Dashboard
                </Link>
                <span
                    className="material-symbols-outlined text-text-muted text-base leading-none"
                    aria-hidden="true"
                >
                    chevron_right
                </span>
                <span className="text-text-main dark:text-white font-semibold">Edit Business Profile</span>
            </nav>

            {/* Page header + action buttons */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white tracking-tight mb-2 font-serif">
                        Edit Business Profile
                    </h1>
                    <p className="text-text-muted dark:text-slate-400 text-lg">
                        Update your vendor information, gallery, and service details.
                    </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                    <Link
                        href="/vendor/dashboard"
                        className="px-5 py-2.5 rounded-xl border border-border-color dark:border-white/20 text-text-main dark:text-white bg-white dark:bg-surface-dark font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm"
                    >
                        Cancel
                    </Link>
                    <button
                        type="button"
                        onClick={onSave}
                        disabled={isSaving}
                        className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {isSaving ? 'sync' : 'save'}
                        </span>
                        {isSaving ? 'Saving…' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
