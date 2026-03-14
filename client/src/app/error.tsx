'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="flex-1 flex min-h-[calc(100vh-80px)] items-center justify-center p-4 py-12 md:py-20 bg-background-light dark:bg-background-dark">
            <motion.div
                className="w-full max-w-[520px] bg-white dark:bg-[#2a171c] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
                {/* Icon */}
                <div className="mb-8 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-900/20">
                        <span aria-hidden="true" className="material-symbols-outlined text-4xl text-primary dark:text-rose-400">
                            dns
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mb-4 text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white">
                    Something Went Wrong
                </h1>

                {/* Subtext */}
                <p className="mb-10 text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-sm mx-auto">
                    We&apos;re experiencing a temporary issue on our end. Our team has been notified and is working to resolve it.
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3 w-full max-w-[320px]">
                    <button
                        onClick={() => reset()}
                        className="w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-rose-600 transition-colors text-white text-base font-bold tracking-[0.015em] shadow-sm hover:shadow-md"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-base font-medium tracking-[0.015em]"
                    >
                        Return to Homepage
                    </Link>
                </div>

                {/* Support Link */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 w-full">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Need immediate assistance?
                        <Link href="/contact" className="text-primary font-medium hover:underline decoration-primary/50 underline-offset-2 ml-1">
                            Contact Support
                        </Link>
                    </p>
                </div>
            </motion.div>
        </main>
    );
}
