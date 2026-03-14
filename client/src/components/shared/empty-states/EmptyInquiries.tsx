'use client';

import { motion } from 'framer-motion';

export interface EmptyInquiriesProps {
    onEditProfile?: () => void;
    title?: string;
    description?: string;
}

export default function EmptyInquiries({
    onEditProfile,
    title = 'No Inquiries Yet',
    description = 'Ready to get booked? Complete your profile to attract more couples.',
}: EmptyInquiriesProps) {
    return (
        <motion.div
            className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 p-8 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-slate-900 text-primary shadow-sm ring-1 ring-slate-100 dark:ring-slate-800">
                <span className="material-symbols-outlined text-[32px] filled text-primary">
                    mark_email_unread
                </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                {title}
            </h3>
            <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-slate-500 font-sans">
                {description}
            </p>
            {onEditProfile && (
                <button
                    onClick={onEditProfile}
                    className="mt-6 flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-rose-700"
                >
                    <span>Edit Profile</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            )}
        </motion.div>
    );
}
