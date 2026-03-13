'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminResetSuccessMessage() {
    return (
        <div className="flex-grow flex flex-col font-sans antialiased overflow-x-hidden w-full relative">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#2a171c] px-6 lg:px-10 py-3 relative z-10 shadow-sm">
                <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">diamond</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">EventEase <span className="text-slate-500 font-normal">Admin</span></h2>
                </Link>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/admin/help" className="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors">Help Center</Link>
                        <Link href="/admin/security" className="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors">Security</Link>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <motion.div 
                    className="w-full max-w-[480px]"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Success Card */}
                    <div className="bg-white dark:bg-[#2a171c] rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
                        <div className="p-8 sm:p-12 flex flex-col items-center text-center">
                            {/* Icon Circle */}
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-primary text-4xl font-bold">check</span>
                            </div>
                            
                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                                Password Updated Successfully
                            </h1>
                            
                            {/* Subtext */}
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-[360px]">
                                Your administrator password has been securely updated. You can now log in to the admin dashboard.
                            </p>
                            
                            {/* Primary Button */}
                            <Link href="/admin/login" className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-wide transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-primary/20 outline-none">
                                Go to Admin Login
                            </Link>

                            {/* Secondary Action */}
                            <div className="mt-6">
                                <Link href="/admin" className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 text-sm font-medium transition-colors flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                                    Back to Home
                                </Link>
                            </div>
                        </div>

                        {/* Footer Security Note */}
                        <div className="bg-slate-50 dark:bg-[#331d22] px-8 py-4 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex gap-3 items-start justify-center">
                                <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">lock</span>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed text-left max-w-xs">
                                    Security Note: Please remember to log out if you are using a shared device to protect your account data.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Page Footer */}
            <footer className="flex flex-col gap-6 px-5 py-8 text-center">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <Link href="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <Link href="/terms" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Terms of Service</Link>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <Link href="/support" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Contact Support</Link>
                </div>
                <p className="text-slate-400 dark:text-slate-600 text-xs">© {new Date().getFullYear()} EventEase Inc. All rights reserved.</p>
            </footer>
        </div>
    );
}
