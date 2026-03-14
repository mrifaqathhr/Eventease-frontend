'use client';

import { motion } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/20 transition-colors duration-200">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <Navbar />

                {/* Main Content */}
                <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
                    {/* Page Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="mb-12 md:mb-16"
                    >
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Privacy Policy</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base uppercase tracking-wider">Last Updated: October 24, 2023</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                        {/* Sticky Sidebar Navigation (Left Column) */}
                        <motion.aside 
                            initial={{ opacity: 0, x: -15 }} 
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                            className="hidden lg:block lg:col-span-3"
                        >
                            <nav className="sticky top-28 flex flex-col gap-1 border-l-2 border-slate-200 dark:border-slate-800 pl-4">
                                <a className="text-primary font-bold text-sm py-2 block border-l-2 border-primary -ml-[18px] pl-4 transition-all" href="#introduction">Introduction</a>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm py-2 block transition-colors" href="#information-we-collect">Information We Collect</a>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm py-2 block transition-colors" href="#data-usage">How We Use Your Data</a>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm py-2 block transition-colors" href="#data-sharing">Data Sharing &amp; Disclosure</a>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm py-2 block transition-colors" href="#cookies">Cookies &amp; Tracking</a>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm py-2 block transition-colors" href="#security">Security Measures</a>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm py-2 block transition-colors" href="#your-rights">Your Rights</a>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm py-2 block transition-colors" href="#contact">Contact Us</a>
                            </nav>
                        </motion.aside>

                        {/* Content Area (Right Column) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                            className="col-span-1 lg:col-span-8 lg:col-start-5 space-y-12 text-slate-800 dark:text-slate-200 leading-relaxed"
                        >
                            <section className="scroll-mt-28" id="introduction">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
                                <p className="mb-4 text-base md:text-lg">
                                    [...Privacy Policy Introduction Placeholder...]
                                </p>
                            </section>

                            <section className="scroll-mt-28" id="information-we-collect">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
                                <p className="mb-4">[...Information collection introductory sentence placeholder...]</p>
                                
                                <div className="bg-white dark:bg-[#1a0f12] p-6 rounded-xl border border-slate-100 dark:border-slate-800 mb-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Information You Provide to Us</h3>
                                    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-primary">
                                        <li>[...Specific data collection items placeholder...]</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-white dark:bg-[#1a0f12] p-6 rounded-xl border border-slate-100 dark:border-slate-800 mb-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Information Collected Automatically</h3>
                                    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-primary">
                                        <li>[...Specific automated tracking items placeholder...]</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="scroll-mt-28" id="data-usage">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Your Data</h2>
                                <p className="mb-4">[...Data usage preamble placeholder...]</p>
                                <ul className="list-disc list-outside ml-5 space-y-2 marker:text-primary">
                                    <li>[...Data usage list items placeholder...]</li>
                                </ul>
                            </section>

                            <section className="scroll-mt-28" id="data-sharing">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">4. Data Sharing &amp; Disclosure</h2>
                                <p className="mb-4">[...Data sharing preamble placeholder...]</p>
                                <p className="mb-4"><strong>[...Data sharing category placeholder...]</strong> [...Data sharing description placeholder...]</p>
                            </section>

                            <section className="scroll-mt-28" id="cookies">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">5. Cookies &amp; Tracking Technologies</h2>
                                <p className="mb-4">[...Cookies and tracking overview placeholder...]</p>
                            </section>

                            <section className="scroll-mt-28" id="security">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">6. Security Measures</h2>
                                <p className="mb-4">[...Security measures overview placeholder...]</p>
                                
                                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                                    <span className="material-symbols-outlined text-primary mt-1">lock</span>
                                    <p className="text-sm">[...Important security disclaimer text placeholder...]</p>
                                </div>
                            </section>

                            <section className="scroll-mt-28" id="your-rights">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">7. Your Rights</h2>
                                <p className="mb-4">[...User rights introductory paragraph placeholder...]</p>
                                <ul className="list-disc list-outside ml-5 space-y-2 marker:text-primary">
                                    <li>[...Specific rights list items placeholder...]</li>
                                </ul>
                                <p className="mt-4">To exercise these rights, please contact us at <a className="text-primary hover:underline font-medium" href="mailto:privacy@eventease.com">privacy@eventease.com</a>.</p>
                            </section>

                            <section className="pt-8 border-t border-slate-200 dark:border-slate-800 scroll-mt-28" id="contact">
                                <div className="bg-slate-50 dark:bg-[#2a1d21] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                    <div className="flex-1">
                                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Questions about your data?</h2>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            If you have any questions or concerns about our Privacy Policy or data practices, our legal team is here to help.
                                        </p>
                                    </div>
                                    <a className="inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20" href="mailto:privacy@eventease.com">
                                        Contact Us
                                    </a>
                                </div>
                            </section>
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}
