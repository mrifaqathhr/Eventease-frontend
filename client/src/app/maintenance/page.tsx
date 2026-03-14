'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MaintenancePage() {
    return (
        <div className="relative flex flex-1 w-full min-h-[calc(100vh-80px)] flex-col justify-center items-center p-4 sm:p-8 bg-champagne dark:bg-background-dark">
            {/* Main Card Container */}
            <motion.div
                className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl w-full max-w-[640px] overflow-hidden border border-slate-100 dark:border-slate-700"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
                <div className="flex flex-col items-center p-8 sm:p-12 text-center">
                    {/* Illustration Area */}
                    <div className="mb-8 relative flex items-center justify-center w-full">
                        <div className="relative w-48 h-48 bg-background-light dark:bg-slate-700 rounded-full flex items-center justify-center overflow-hidden">
                            {/* Abstract illustration representing polishing/maintenance */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
                            <span className="material-symbols-outlined text-primary text-6xl" style={{ fontSize: '80px' }}>
                                cleaning_services
                            </span>
                            {/* Decorative sparkles */}
                            <span className="material-symbols-outlined text-primary/40 absolute top-10 right-10 text-xl animate-pulse">
                                auto_awesome
                            </span>
                            <span
                                className="material-symbols-outlined text-primary/40 absolute bottom-12 left-10 text-xl animate-pulse"
                                style={{ animationDelay: '0.5s' }}
                            >
                                auto_awesome
                            </span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <h1 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 dark:text-white mb-4 tracking-tight">
                        We&apos;ll Be Back Shortly
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-md mx-auto mb-2 font-sans leading-relaxed">
                        We&apos;re currently polishing up the platform with some scheduled maintenance to make your experience even more beautiful.
                    </p>

                    <div className="mt-4 mb-10 flex items-center justify-center gap-2 bg-background-light dark:bg-slate-700/50 px-4 py-2 rounded-full">
                        <span className="material-symbols-outlined text-primary text-sm">
                            timer
                        </span>
                        <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                            Estimated downtime: 2 hours
                        </span>
                    </div>

                    {/* Primary Action */}
                    {/* Note: In a real maintenance mode, users might not be able to do anything but wait. 
                              However, providing a link back home (which might also show maintenance) or support is standard. */}
                    <Link
                        href="/"
                        className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 w-full sm:w-auto min-w-[200px]"
                    >
                        <span className="font-bold text-sm tracking-wide">Return to Homepage</span>
                        <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </Link>
                </div>

                {/* Footer Section of Card */}
                <div className="bg-background-light dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">
                        Need urgent assistance with your vendor profile?
                    </p>
                    <a
                        href="mailto:support@eventease.com"
                        className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 transition-colors underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                    >
                        Contact support@eventease.com
                    </a>
                </div>
            </motion.div>

            {/* Branding Footer */}
            <div className="mt-8 flex items-center gap-2 opacity-60">
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500">
                    diamond
                </span>
                <span className="font-serif font-bold text-slate-400 dark:text-slate-500 tracking-wider text-sm">
                    EventEase
                </span>
            </div>
        </div>
    );
}
