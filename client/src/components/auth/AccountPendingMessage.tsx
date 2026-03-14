'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AccountPendingMessage() {
    return (
        <div className="flex-1 flex flex-col font-sans text-slate-900 dark:text-slate-100 bg-[#fdfbfb] dark:bg-background-dark/50 antialiased min-h-screen">
            {/* Navbar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-100 dark:border-slate-800 px-6 lg:px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-4 text-slate-900 dark:text-white hover:opacity-80 transition-opacity">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">celebration</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold font-serif leading-tight tracking-[-0.015em]">EventEase</h2>
                </Link>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="hidden md:flex items-center gap-9">
                        <Link href="/vendor/dashboard" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Dashboard</Link>
                        <Link href="/vendor/profile" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Profile</Link>
                        <Link href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Blog</Link>
                        <Link href="/search" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Search</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="size-8 rounded-full bg-slate-200 overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5sZ75GUkdMSMnc7ExCf1k4cQOG7Qzt7_eq8ddLC_Qr5yN91l6mQsfpNXVrhTx4wIQJqPcavfUJI0JIlE7XSoRxGJezZQjosHYBisU6MqCzvSFGiPhwn-cUCpc696zqhp3nk7KeY29C8QtM8JjUs0I-kTxiB5_ejwed9jYorSDDWGc0TMtLgBte1quSJo_aY2o13kYvVdgavFDRsQnjKR-bptny3sdHna97J8-4e022l34IuzNc-QYrdlTBw7FQrCtTj70iZDbYYqa')", backgroundSize: "cover" }}></div>
                        <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                            <span className="truncate">Log Out</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6">
                <motion.div 
                    className="max-w-[720px] w-full"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Status Card */}
                    <div className="bg-white dark:bg-[#2a171c] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
                        
                        {/* Hero Section */}
                        <div className="flex flex-col items-center justify-center pt-12 pb-8 px-8 text-center">
                            <div className="size-20 bg-[#fcecee] dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary animate-pulse">
                                <span className="material-symbols-outlined text-[40px]">hourglass_top</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 dark:text-white mb-4">
                                Your Account is Under Review
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
                                Thank you for registering as a vendor on EventEase. Our team is currently reviewing your profile to ensure quality and authenticity.
                            </p>
                        </div>

                        {/* Timeline / Steps */}
                        <div className="px-8 pb-8 md:px-16">
                            <div className="border-t border-slate-100 dark:border-slate-800 my-6"></div>
                            
                            <h3 className="font-serif text-xl font-medium text-slate-900 dark:text-white mb-6">What Happens Next</h3>
                            
                            <div className="grid grid-cols-[40px_1fr] gap-x-2 relative">
                                {/* Line connecting steps */}
                                <div className="absolute top-3 bottom-10 left-[19px] w-[2px] bg-slate-100 dark:bg-slate-800 -z-10"></div>
                                
                                {/* Step 1: Completed */}
                                <div className="flex flex-col items-center pt-1">
                                    <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 ring-4 ring-white dark:ring-[#2a171c]">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                </div>
                                <div className="flex flex-col pb-8 pt-1 pl-2">
                                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">Application Received</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">We&apos;ve successfully received your vendor application details.</p>
                                </div>

                                {/* Step 2: Current */}
                                <div className="flex flex-col items-center pt-1">
                                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-white dark:ring-[#2a171c] shadow-lg shadow-primary/30">
                                        <span className="material-symbols-outlined">manage_search</span>
                                    </div>
                                </div>
                                <div className="flex flex-col pb-8 pt-1 pl-2">
                                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">Profile Verification</p>
                                    <p className="text-primary text-sm font-medium leading-normal mb-1">In Progress</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">We are verifying your business credentials and portfolio. This typically takes <span className="font-semibold text-slate-700 dark:text-slate-300">24–48 hours</span>.</p>
                                </div>

                                {/* Step 3: Pending */}
                                <div className="flex flex-col items-center pt-1">
                                    <div className="size-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 ring-4 ring-white dark:ring-[#2a171c]">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                </div>
                                <div className="flex flex-col pt-1 pl-2">
                                    <p className="text-slate-400 dark:text-slate-500 text-base font-medium leading-normal">Approval Notification</p>
                                    <p className="text-slate-400 dark:text-slate-500 text-sm font-normal leading-normal">You&apos;ll receive an email once your account is live.</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Box: Speed things up */}
                        <div className="px-8 pb-8 md:px-16">
                            <div className="bg-[#fcecee]/50 dark:bg-primary/10 border border-primary/20 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="size-10 rounded-full bg-white dark:bg-background-dark text-primary flex items-center justify-center shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined">rocket_launch</span>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-slate-900 dark:text-white font-semibold text-sm">Want to speed things up?</h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Completing your portfolio details now can help expedite the verification process.</p>
                                </div>
                                <Link href="/vendor/profile" className="whitespace-nowrap flex items-center justify-center px-4 py-2 bg-white dark:bg-background-dark text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    Edit Profile
                                </Link>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link href="/support" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-sm font-medium flex items-center gap-2 transition-colors order-2 sm:order-1">
                                <span className="material-symbols-outlined text-[18px]">headset_mic</span>
                                Contact Support
                            </Link>
                            <Link href="/vendor/dashboard" className="w-full sm:w-auto flex items-center justify-center gap-2 h-11 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-bold leading-normal transition-all shadow-md shadow-primary/20 order-1 sm:order-2">
                                <span>Go to Dashboard</span>
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Bottom Helper Text */}
                    <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-6">
                        © {new Date().getFullYear()} EventEase Inc. All rights reserved.
                    </p>
                </motion.div>
            </main>
        </div>
    );
}
