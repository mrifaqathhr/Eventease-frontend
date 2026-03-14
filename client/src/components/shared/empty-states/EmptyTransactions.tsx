'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EmptyTransactions() {
    return (
        <motion.div
            className="group flex flex-col bg-white dark:bg-[#1a0d10] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
            <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e8305e_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="size-20 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary">receipt_long</span>
                </div>
            </div>
            <div className="flex flex-col items-center p-8 text-center flex-1">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3 font-serif">
                    No Transactions Yet
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                    Once you start selling tickets or purchasing promotions, your transaction history will appear here.
                </p>
                <div className="mt-auto w-full">
                    <Link
                        href="/vendor/dashboard/promotions"
                        className="w-full flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-primary/10 hover:text-primary dark:hover:text-primary hover:border-primary/20 border border-transparent transition-all duration-200 font-bold text-sm"
                    >
                        <span>Explore Promotion Plans</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
