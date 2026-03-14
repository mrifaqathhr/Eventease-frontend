'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EmailVerificationSuccess() {
    return (
        <div className="flex-1 flex flex-col font-sans text-slate-900 dark:text-slate-100 bg-[#f9f5f2] dark:bg-[#211115] min-h-screen w-full selection:bg-primary/30">
            {/* Navbar */}
            <header className="w-full bg-white dark:bg-[#2a171c] border-b border-[#f0ebec] dark:border-[#3d242b] px-6 lg:px-10 py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity">
                        <div className="size-8 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">celebration</span>
                        </div>
                        <h2 className="font-serif text-2xl font-bold tracking-tight">EventEase</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Home</Link>
                        <Link href="/search" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Vendors</Link>
                        <Link href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Blog</Link>
                        <Link href="/auth/login" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Log In</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <Link href="/auth/register" className="hidden md:flex bg-primary hover:bg-rose-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-primary/20">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center p-4 py-12 md:py-20">
                <motion.div 
                    className="w-full max-w-[640px]"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Card Container */}
                    <div className="bg-white dark:bg-[#2a171c] rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden border border-slate-100 dark:border-slate-800 relative z-10">
                        {/* Hero Section */}
                        <div className="relative bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-8 text-center">
                            <div className="mx-auto size-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
                                <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                            </div>
                            <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Email Verified Successfully
                            </h1>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-lg mx-auto">
                                Your email address has been successfully verified. Our team will now review your vendor account before activation.
                            </p>
                        </div>

                        {/* Timeline / Status Section */}
                        <div className="px-8 pb-10">
                            <div className="bg-slate-50 dark:bg-[#331d23] rounded-xl p-6 md:p-8 border border-slate-100 dark:border-slate-700/50">
                                <h3 className="font-serif text-xl font-semibold mb-6 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3">
                                    What happens next?
                                </h3>
                                <div className="space-y-0 relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-slate-700"></div>
                                    
                                    {/* Step 1: Complete */}
                                    <div className="relative flex gap-5 group">
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center border-2 border-white dark:border-[#331d23]">
                                                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-xl font-bold">check</span>
                                            </div>
                                        </div>
                                        <div className="pb-8">
                                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Verification Complete</h4>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">Done</span>
                                            </div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Your email has been confirmed instantly.</p>
                                        </div>
                                    </div>

                                    {/* Step 2: Pending/Active */}
                                    <div className="relative flex gap-5 group">
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="size-10 rounded-full bg-primary flex items-center justify-center border-4 border-white dark:border-[#331d23] shadow-md shadow-primary/30">
                                                <span className="material-symbols-outlined text-white text-xl">hourglass_top</span>
                                            </div>
                                        </div>
                                        <div className="pb-8">
                                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                                                <h4 className="text-base font-bold text-primary dark:text-rose-400">Account Review</h4>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-rose-400 bg-primary/10 px-2 py-0.5 rounded">In Progress</span>
                                            </div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                Our team reviews all vendor profiles to ensure quality.<br/>
                                                <span className="font-medium text-slate-700 dark:text-slate-300">Estimated time: 24-48 hours.</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3: Next */}
                                    <div className="relative flex gap-5 group opacity-60">
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-white dark:border-[#331d23]">
                                                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-xl">rocket_launch</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                                                <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">Activation &amp; Onboarding</h4>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">Upcoming</span>
                                            </div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Once approved, you&apos;ll get full access to your dashboard.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-8 flex flex-col items-center gap-4">
                                <Link href="/vendor/dashboard" className="w-full sm:w-auto min-w-[280px] bg-primary hover:bg-rose-600 text-white text-base font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
                                    Go to Vendor Dashboard
                                </Link>
                                <Link href="/" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors font-medium border-b border-transparent hover:border-primary/30 pb-0.5">
                                    Return to Homepage
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Simple */}
                    <div className="mt-8 text-center text-sm text-slate-400 dark:text-slate-500">
                        <p>© {new Date().getFullYear()} EventEase Inc. Need help? <Link href="/contact" className="underline hover:text-primary">Contact Support</Link></p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
