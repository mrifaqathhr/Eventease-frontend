'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EmptyNotifications() {
    return (
        <motion.div
            className="group flex flex-col bg-white dark:bg-[#1a0d10] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
            <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 flex items-center justify-center relative overflow-hidden">
                {/* Abstract wave decoration */}
                <div className="absolute w-[150%] h-[150%] bg-white/30 dark:bg-black/10 rounded-[40%] animate-[spin_10s_linear_infinite]" />
                <div className="relative size-20 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute -top-1 -right-1 size-4 bg-primary rounded-full border-2 border-white dark:border-slate-800" />
                    <span className="material-symbols-outlined text-4xl text-primary">notifications_off</span>
                </div>
            </div>
            <div className="flex flex-col items-center p-8 text-center flex-1">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3 font-serif">
                    No Notifications
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                    You&apos;re all caught up! New inquiries, bookings, and system alerts will show up here when they arrive.
                </p>
                <div className="mt-auto w-full">
                    <Link
                        href="/vendor/dashboard/profile/preview"
                        className="w-full flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-primary/10 hover:text-primary dark:hover:text-primary hover:border-primary/20 border border-transparent transition-all duration-200 font-bold text-sm"
                    >
                        <span>View Public Profile</span>
                        <span className="material-symbols-outlined text-lg">visibility</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
