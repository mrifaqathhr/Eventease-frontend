'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResetSuccessMessage() {
    return (
        <div className="font-sans flex-1 bg-[#fcf9f9] dark:bg-[#1a0d10] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-[#fcf9f9] to-[#fcf9f9] dark:from-rose-950/20 dark:via-[#1a0d10] dark:to-[#1a0d10] text-text-main dark:text-white antialiased min-h-screen flex flex-col w-full">
            {/* Header */}
            <header className="w-full bg-white dark:bg-[#1a0d10] border-b border-[#f4f0f1] dark:border-[#3a2a2e] sticky top-0 z-50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-4 text-text-main dark:text-white hover:opacity-80 transition-opacity">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined text-3xl">diversity_3</span>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-serif">EventEase</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-9">
                        <Link href="/vendors" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Vendors</Link>
                        <Link href="/tools" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Planning Tools</Link>
                        <Link href="/real-weddings" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Real Weddings</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/auth/login" className="hidden sm:block text-sm font-medium leading-normal hover:text-primary transition-colors">Sign In</Link>
                        <Link href="/auth/register" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-5 bg-primary hover:bg-[#c21d45] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Get Started</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center py-16 px-4">
                <motion.div 
                    className="w-full max-w-[480px] bg-white dark:bg-[#2a171c] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-rose-100 dark:border-[#3a2a2e] p-8 sm:p-12 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Success Icon */}
                    <div className="mb-6 rounded-full bg-rose-50 dark:bg-primary/10 p-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-text-main dark:text-white mb-3 tracking-tight font-serif">Password Updated Successfully</h1>
                    
                    {/* Subtext */}
                    <p className="text-[#88636c] dark:text-gray-300 text-base leading-relaxed mb-10 max-w-[360px]">
                        Your password has been changed. You can now securely log in to your vendor dashboard to manage your events.
                    </p>

                    {/* Primary Action */}
                    <Link href="/auth/login" className="w-full flex items-center justify-center h-12 bg-primary hover:bg-[#c21d45] text-white text-base font-bold rounded-xl shadow-lg shadow-primary/20 transition-all duration-200 transform hover:translate-y-[-1px] mb-4">
                        Go to Vendor Login
                    </Link>

                    {/* Secondary Action */}
                    <Link href="/" className="text-sm font-medium text-[#88636c] hover:text-primary transition-colors py-2">
                        Return to Homepage
                    </Link>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-[#1a0d10] border-t border-[#f4f0f1] dark:border-[#3a2a2e]">
                <div className="max-w-[1280px] mx-auto flex flex-col gap-8 px-5 py-10 text-center">
                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        <Link href="/about" className="text-[#88636c] hover:text-primary transition-colors text-sm font-medium">About Us</Link>
                        <Link href="/careers" className="text-[#88636c] hover:text-primary transition-colors text-sm font-medium">Careers</Link>
                        <Link href="/privacy" className="text-[#88636c] hover:text-primary transition-colors text-sm font-medium">Privacy Policy</Link>
                        <Link href="/terms" className="text-[#88636c] hover:text-primary transition-colors text-sm font-medium">Terms of Service</Link>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="text-[#88636c] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl">photo_camera</span>
                        </a>
                        <a href="#" className="text-[#88636c] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl">push_pin</span>
                        </a>
                        <a href="#" className="text-[#88636c] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl">public</span>
                        </a>
                        <a href="#" className="text-[#88636c] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl">alternate_email</span>
                        </a>
                    </div>
                    
                    <p className="text-[#88636c] text-sm font-normal">© {new Date().getFullYear()} EventEase Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
