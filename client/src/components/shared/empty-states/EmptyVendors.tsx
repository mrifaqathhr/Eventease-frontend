'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EmptyVendors() {
    return (
        <motion.div
            className="group flex flex-col bg-white dark:bg-[#1a0d10] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
            <div className="h-48 bg-gradient-to-br from-[#fff0f3] to-[#ffe4e9] dark:from-[#3d1a22] dark:to-[#2a1217] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
                <div className="size-20 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-primary/10 dark:shadow-black/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary">storefront</span>
                </div>
            </div>
            <div className="flex flex-col items-center p-8 text-center flex-1">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3 font-serif">
                    No Vendors Registered
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                    It looks like your vendor directory is empty. Start building your network by inviting vendors to the platform.
                </p>
                <div className="mt-auto w-full">
                    <Link
                        href="/admin/dashboard/vendors"
                        className="w-full flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 transition-all duration-200 font-bold text-sm"
                    >
                        <span className="material-symbols-outlined text-lg">person_add</span>
                        <span>Invite Vendors</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
