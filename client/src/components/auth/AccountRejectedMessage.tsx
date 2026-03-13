'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AccountRejectedMessage() {
    return (
        <div className="flex-1 flex flex-col font-sans text-slate-900 dark:text-slate-100 bg-[#f8f6f6] dark:bg-background-dark antialiased min-h-screen">
            {/* Navbar */}
            <header className="w-full bg-white dark:bg-[#1a0f11] border-b border-[#f4f0f1] dark:border-[#332225] px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">favorite</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">EventEase</h2>
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/help" className="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium transition-colors">Help Center</Link>
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxbf5q8tlW2V-COTvaAvB1cBxKfs5xQ6LSXmcc7mZfoDQ7pNTOG_6JyS0bAEURgqPPPkROSj162C1SoiwG_anaoMcdV8Iaci4qcUx63ThbBl8xwVVsi7Wk4mg6VXbQ97fQucvEQgZFrsXJqKisXKah4cATtdH5iLQFblPLM0JY4FbJfdHH3QQEv-E2vMktNOQvSdrcC2f2EgV2DoNPw3LoZGS9N-W1UKjIPx8iTkjO1HWpYqew8fP4Ydti0qXRqcEBAfzNQaI6z70D")' }}></div>
                        <button className="text-sm font-medium text-slate-900 dark:text-slate-100 hover:text-primary transition-colors">Sign Out</button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 dark:opacity-10 z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl"></div>
                </div>

                {/* Card */}
                <motion.div 
                    className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#2a171c] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-[#3d252b] overflow-hidden"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className="p-8 md:p-12 flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className="mb-6 h-20 w-20 rounded-full bg-[#fce7ec] dark:bg-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-4xl text-primary">info</span>
                        </div>
                        
                        {/* Headings */}
                        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-50 mb-4 leading-tight font-serif">
                            Application Not Approved
                        </h1>
                        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-lg mb-8">
                            Thank you for your interest in joining EventEase. After reviewing your application, we&apos;re unable to approve your vendor profile at this time.
                        </p>

                        {/* Reason Section */}
                        <div className="w-full bg-slate-50 dark:bg-[#211115] border border-slate-200 dark:border-[#3d252b] rounded-lg p-6 mb-8 text-left">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">rate_review</span>
                                Reason for Review Decision
                            </h3>
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-slate-800 dark:text-slate-200 leading-relaxed italic">
                                    &quot;While your portfolio shows promise, we noticed that several of the linked social media profiles are currently private or inactive. To maintain our marketplace standards, we require active, public profiles that showcase recent work to potential clients.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="w-full text-left mb-8">
                            <h3 className="font-serif text-xl font-medium text-slate-900 dark:text-slate-100 mb-4">Next Steps</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary mt-0.5 shrink-0">check_circle</span>
                                    <span>Review your profile settings and ensure all social media links are set to public.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary mt-0.5 shrink-0">check_circle</span>
                                    <span>Add at least 3 recent event galleries to your portfolio section.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary mt-0.5 shrink-0">check_circle</span>
                                    <span>Update your business description to include more details about your specific services.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col w-full gap-4">
                            <Link href="/vendor/profile/edit" className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">edit_document</span>
                                Edit &amp; Reapply
                            </Link>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-2">
                                <Link href="/support" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors flex items-center gap-1 group">
                                    <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">support_agent</span>
                                    Contact Support
                                </Link>
                                <Link href="/" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors flex items-center gap-1 group">
                                    <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                    Return to Homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom decorative strip */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
                </motion.div>
                
                <p className="mt-8 text-xs text-slate-400 dark:text-slate-600">
                    © {new Date().getFullYear()} EventEase Inc. All rights reserved.
                </p>
            </main>
        </div>
    );
}
