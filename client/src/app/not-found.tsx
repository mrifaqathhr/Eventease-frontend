'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="bg-[#f8f6f6] dark:bg-background-dark text-[#181113] dark:text-gray-100 font-sans min-h-[calc(100vh-80px)] flex flex-col transition-colors duration-200">
            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4 py-12">
                <motion.div 
                    className="max-w-[720px] w-full flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Illustration */}
                    <div className="relative w-full max-w-[320px] aspect-square mb-8">
                        {/* Abstract floral shape/gradient as placeholder for line art */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#fceef2] to-[#fff5f7] dark:from-[#2a1a1e] dark:to-[#352529] rounded-full opacity-60 blur-3xl"></div>
                        <img alt="Minimalist soft floral line art illustration" className="relative z-10 w-full h-full object-contain drop-shadow-sm opacity-80 mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7lf8PqFhcHzOghse0Ombl3QmEl6xXUDjQn8ptC1V5DDgEnsKhG0QO3eQUEBc92-PELsKkcAF5i8VE7ZBkN9SBc1a5v0IY4HscWY2xElWVgvQxoUB8-1qmOgDvYmED2MXq9MFXa0NSI7SyH-uBIxTmLR8FeNS82nGgelMKTrWz-yGBv4Ib786-Dt5i-COsxR_vIkWj1NOnM_PfL0pRh59mYMcAmqRllVT5BLyew58h04Uga_r-H2bX-reF9NEk-3kIoum96a6_KS1I" />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4 mb-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#181113] dark:text-white tracking-tight">
                            Oops... This Page Doesn&apos;t Exist
                        </h1>
                        <p className="text-base md:text-lg text-[#6b5a5e] dark:text-[#bdaeb1] max-w-[480px] mx-auto font-sans">
                            We can&apos;t seem to find the wedding inspiration you&apos;re looking for. It might have been moved or deleted.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-12">
                        <Link href="/search" className="w-full sm:w-auto min-w-[200px] h-12 px-6 rounded-xl bg-primary hover:bg-opacity-90 text-white font-bold text-base transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">storefront</span>
                            Browse Vendor Categories
                        </Link>
                        <Link href="/" className="w-full sm:w-auto min-w-[200px] h-12 px-6 rounded-xl bg-white dark:bg-[#3a2e32] border border-[#eadddf] dark:border-[#4a3e42] hover:bg-[#fcfafa] dark:hover:bg-[#45363b] text-[#181113] dark:text-white font-bold text-base transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">home</span>
                            Return to Homepage
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full max-w-[560px] mb-12">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-[#88636c]">search</span>
                            </div>
                            <input className="block w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white dark:bg-[#2d1f23] text-[#181113] dark:text-white placeholder-[#88636c] focus:ring-2 focus:ring-primary/20 shadow-sm transition-all text-base outline-none" placeholder="Search for wedding vendors, venues, and more..." type="text" />
                        </div>
                    </div>

                    {/* Popular Categories */}
                    <div className="w-full">
                        <h4 className="text-[#88636c] dark:text-[#bdaeb1] text-sm font-bold uppercase tracking-wider mb-6">Popular Categories</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/search?category=photographers" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">camera_alt</span>
                                Photographers
                            </Link>
                            <Link href="/search?category=venues" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">location_on</span>
                                Venues
                            </Link>
                            <Link href="/search?category=planners" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">event_note</span>
                                Planners
                            </Link>
                            <Link href="/search?category=catering" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">restaurant</span>
                                Catering
                            </Link>
                            <Link href="/search?category=hair-makeup" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">styler</span>
                                Hair &amp; Makeup
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
