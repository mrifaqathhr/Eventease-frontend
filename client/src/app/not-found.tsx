'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="bg-[#f8f6f6] dark:bg-background-dark text-[#181113] dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-200">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f4f0f1] dark:border-[#3a2e32] px-10 py-3 bg-white dark:bg-[#1a0e11]">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-4 text-[#181113] dark:text-white group">
                        <div className="size-8 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#181113] dark:text-white text-lg font-bold font-serif leading-tight tracking-[-0.015em]">EventEase</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-9">
                        <Link href="/venues" className="text-[#181113] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Venues</Link>
                        <Link href="/vendors" className="text-[#181113] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Vendors</Link>
                        <Link href="/planning-tools" className="text-[#181113] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Ideas</Link>
                        <Link href="/real-weddings" className="text-[#181113] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Real Weddings</Link>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div className="text-[#88636c] flex border-none bg-[#f4f0f1] dark:bg-[#3a2e32] items-center justify-center pl-4 rounded-l-xl border-r-0">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181113] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f4f0f1] dark:bg-[#3a2e32] focus:border-none h-full placeholder:text-[#88636c] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal outline-none" placeholder="Search" />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <Link href="/auth/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary hover:bg-opacity-90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Log In</span>
                        </Link>
                        <Link href="/auth/register" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f0f1] dark:bg-[#3a2e32] dark:text-white hover:bg-[#e8e4e5] dark:hover:bg-[#45363b] transition-colors text-[#181113] text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Sign Up</span>
                        </Link>
                    </div>
                </div>
            </header>

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
                        <Link href="/vendors" className="w-full sm:w-auto min-w-[200px] h-12 px-6 rounded-xl bg-primary hover:bg-opacity-90 text-white font-bold text-base transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2">
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
                            <Link href="/vendors?category=photographers" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">camera_alt</span>
                                Photographers
                            </Link>
                            <Link href="/venues" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">location_on</span>
                                Venues
                            </Link>
                            <Link href="/vendors?category=planners" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">event_note</span>
                                Planners
                            </Link>
                            <Link href="/vendors?category=catering" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px] mr-2">restaurant</span>
                                Catering
                            </Link>
                            <Link href="/vendors?category=hair-makeup" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-[#2d1f23] border border-[#f0ebec] dark:border-[#4a3e42] text-[#181113] dark:text-white text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
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
