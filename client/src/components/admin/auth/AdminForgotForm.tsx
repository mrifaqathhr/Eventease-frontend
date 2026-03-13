'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminForgotForm() {
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        // Prep for Appwrite Account API wiring
        // await account.createRecovery(email, `${window.location.origin}/admin/reset-password`);
        console.log('Admin password reset requested for:', email);
        
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1000);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 relative min-h-screen w-full">
            {/* Main Authentication Card */}
            <motion.div 
                className="w-full max-w-[480px] bg-white dark:bg-[#2a171c] rounded-xl shadow-lg border border-slate-200 dark:border-[#3d242a] overflow-hidden z-10"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Header Section */}
                <div className="px-8 pt-10 pb-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">diversity_1</span>
                        <span className="font-serif font-bold text-2xl tracking-tight text-slate-900 dark:text-white">EventEase</span>
                    </div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white">Admin Password Recovery</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                        Enter your registered admin email to receive a reset link.
                    </p>
                </div>

                {/* Form Section */}
                <div className="px-8 pb-8">
                    {!isSuccess ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                                    Admin Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <span className="material-symbols-outlined text-xl">mail</span>
                                    </div>
                                    <input 
                                        className="block w-full rounded-lg border-slate-200 dark:border-[#523139] bg-slate-50 dark:bg-[#361e24] pl-10 pr-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:ring-1 transition-colors outline-none" 
                                        id="email" 
                                        name="email" 
                                        placeholder="admin@eventease.com" 
                                        required 
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button 
                                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-[#2a171c] disabled:opacity-70" 
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                                ) : (
                                    <>
                                        <span className="truncate">Send Reset Link</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <motion.div 
                            className="text-center py-2"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                                <span className="material-symbols-outlined text-2xl">check_circle</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2 font-serif">Link Sent</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                We&apos;ve sent a password reset link to <span className="font-medium text-slate-900 dark:text-slate-100">{email}</span> if an admin account exists.
                            </p>
                            <button 
                                className="text-primary hover:text-primary/80 font-semibold text-sm" 
                                onClick={() => { setIsSuccess(false); setEmail(''); }}
                            >
                                Send to another email
                            </button>
                        </motion.div>
                    )}

                    <div className="mt-6 text-center">
                        <Link href="/admin/login" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Back to Admin Login
                        </Link>
                    </div>
                </div>

                {/* Security Footer */}
                <div className="bg-slate-50 dark:bg-[#361e24] px-8 py-4 border-t border-slate-100 dark:border-[#3d242a] text-center">
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        <span>Secure SSL encrypted connection</span>
                    </div>
                </div>
            </motion.div>

            {/* Background Decoration (Subtle) */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-background-light dark:bg-background-dark bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#3d242a_1px,transparent_1px)] opacity-50"></div>
        </div>
    );
}
