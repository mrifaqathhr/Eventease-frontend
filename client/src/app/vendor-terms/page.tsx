'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function VendorTermsPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
            <Navbar />

            <main className="flex-grow max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-12 w-full">
                    {/* Sidebar Navigation */}
                    <motion.aside 
                        initial={{ opacity: 0, x: -15 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                        className="w-full lg:w-72 flex-shrink-0"
                    >
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar Header */}
                            <div>
                                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-1 font-serif">Legal Center</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Vendor Resources &amp; Terms</p>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-1">
                                <a className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px] font-bold">check_circle</span>
                                    <span className="text-sm">Vendor Eligibility</span>
                                </a>
                                <a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">currency_exchange</span>
                                    <span className="text-sm">Commission Structure</span>
                                </a>
                                <a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">description</span>
                                    <span className="text-sm">Content Guidelines</span>
                                </a>
                                <a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">credit_card</span>
                                    <span className="text-sm">Payment Terms</span>
                                </a>
                                <a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">privacy_tip</span>
                                    <span className="text-sm">Data Privacy</span>
                                </a>
                                <a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">cancel</span>
                                    <span className="text-sm">Termination</span>
                                </a>
                            </nav>

                            {/* Support Card */}
                            <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
                                <div className="flex items-center gap-3 mb-3 text-slate-900 dark:text-slate-100 font-semibold">
                                    <span className="material-symbols-outlined text-primary">support_agent</span>
                                    Need Help?
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Contact our vendor support team for specific inquiries regarding your contract.</p>
                                <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </motion.aside>

                    {/* Main Content Area */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                        className="flex-1 min-w-0"
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                            <span className="hover:text-primary transition-colors cursor-pointer">Legal Center</span>
                            <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                            <span className="text-slate-900 dark:text-slate-100">Vendor Terms</span>
                        </div>

                        <div className="bg-white dark:bg-[#1a0f12] rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="border-b border-slate-100 dark:border-slate-800 pb-8 mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-serif">Vendor Terms of Service</h1>
                                <p className="text-slate-500 dark:text-slate-400">Last updated: <span className="font-medium text-slate-700 dark:text-slate-300">October 24, 2023</span></p>
                            </div>

                            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                                <p className="lead text-lg mb-8">
                                    [...Vendor Terms introductory text placeholder...]
                                </p>

                                <div className="space-y-12">
                                    {/* Section 1 */}
                                    <section>
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm font-serif">1</span>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-serif mt-1">Vendor Eligibility &amp; Verification</h2>
                                        </div>
                                        <div className="pl-12 space-y-4">
                                            <p>[...Eligibility requirements definition placeholder...]</p>
                                            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                                                <li><strong>[...Documentation requirement placeholder...]:</strong> [...Documentation text placeholder...]</li>
                                                <li><strong>[...Insurance requirement placeholder...]:</strong> [...Insurance text placeholder...]</li>
                                                <li><strong>[...Quality standard placeholder...]:</strong> [...Quality text placeholder...]</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* Section 2 */}
                                    <section>
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm font-serif">2</span>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-serif mt-1">Commission &amp; Payment Structure</h2>
                                        </div>
                                        <div className="pl-12 space-y-4">
                                            <p>[...Commission intro placeholder...]</p>
                                            
                                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                                                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Standard Commission</h4>
                                                    <p className="text-sm">A flat <strong>12% commission</strong> applies to all bookings secured through the EventEase direct booking tool.</p>
                                                </div>
                                                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                                                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Payout Schedule</h4>
                                                    <p className="text-sm">Funds are released to your connected bank account <strong>48 hours after the successful completion</strong> of the booked event.</p>
                                                </div>
                                            </div>
                                            
                                            <p className="text-sm italic">Note: Processing fees (approx 2.9% + $0.30) charged by our payment processor (Stripe) are deducted separately from the total transaction amount.</p>
                                        </div>
                                    </section>

                                    {/* Section 3 */}
                                    <section>
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm font-serif">3</span>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-serif mt-1">Content &amp; Intellectual Property</h2>
                                        </div>
                                        <div className="pl-12 space-y-4">
                                            <p>[...IP rights text placeholder...]</p>
                                            <p><strong>[...Prohibited Content text placeholder...]:</strong> [...Prohibited content descriptions placeholder...]</p>
                                        </div>
                                    </section>

                                    {/* Section 4 */}
                                    <section>
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm font-serif">4</span>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-serif mt-1">Cancellation &amp; Dispute Resolution</h2>
                                        </div>
                                        <div className="pl-12 space-y-4">
                                            <p>[...Dispute intro placeholder...]</p>
                                            <ol className="list-decimal pl-5 space-y-2">
                                                <li>[...Dispute step 1...]</li>
                                                <li>[...Dispute step 2...]</li>
                                                <li>[...Dispute step 3...]</li>
                                            </ol>
                                        </div>
                                    </section>
                                </div>

                                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary/5 rounded-xl p-6 border border-primary/10">
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Download Agreement</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">Get a PDF copy of the Vendor Terms for your records.</p>
                                        </div>
                                        <button className="flex items-center gap-2 bg-white dark:bg-[#1a0f12] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors px-4 py-2 rounded-lg font-medium text-sm shadow-sm">
                                            <span className="material-symbols-outlined text-[18px]">download</span>
                                            Download PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
