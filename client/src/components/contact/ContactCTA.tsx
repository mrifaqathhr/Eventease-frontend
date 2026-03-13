'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactCTA() {
    return (
        <section className="w-full py-20 px-6">
            <motion.div
                className="max-w-4xl mx-auto bg-primary/5 dark:bg-primary/10 rounded-3xl p-10 md:p-16 text-center border border-primary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="font-serif text-4xl font-medium text-slate-900 dark:text-white mb-4">
                    Ready to start planning?
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                    Browse our curated list of top-tier vendors to find the perfect match
                    for your special day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/categories"
                        className="inline-flex items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                    >
                        Browse Vendors
                    </Link>
                    <Link
                        href="/register?role=vendor"
                        className="inline-flex items-center justify-center rounded-xl h-12 px-8 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 font-bold transition-colors"
                    >
                        Vendor Sign Up
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
