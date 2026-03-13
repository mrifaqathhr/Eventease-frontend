'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        // Prep for Appwrite Account API wiring
        // await account.createRecovery(email, `${window.location.origin}/auth/reset-password`);
        console.log('Password reset requested for:', email);
        
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1000);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-[#fcf8f9] dark:bg-[#1b0d11] relative overflow-hidden min-h-screen w-full">
            {/* Background Decoration Image */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg0qPbfoWDUjoWMOTiId2bWHlIKgdIV3s-jcMHjavE7OsO7_csJuYIopmHKgnrPax4o0C-51GFSvpMzdOv6SPe2mH1tpAO3Ek3TSKqhVEAzC_GU5sKnc8PM0pJ7cmccpNgI1-EBlBNBqHK0FpgRnwwlGPJjvM6Z0qXAl4rKx3Kt0ra1HRWfdLdn2xZyicCenikSHPhGmpS8KNd9tn4M8SxZkeQNpRFSx8X8TPfktsPh5rAJmZ2LVjzx_xonBcNj8akTCT0vy_o68V3')" }}
            />

            {/* Navigation Header */}
            <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 md:px-10 md:py-6 z-10">
                <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                    <div className="size-8 text-primary">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                            <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold font-serif leading-tight tracking-[-0.015em]">EventEase</h2>
                </Link>
                <div className="hidden sm:flex gap-4 items-center">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Don&apos;t have an account?</span>
                    <Link href="/auth/register" className="flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary/10 hover:bg-primary/20 transition-colors text-primary dark:text-rose-400 text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Get Started</span>
                    </Link>
                </div>
            </header>

            {/* Main Form Area */}
            <motion.div 
                className="w-full max-w-lg z-10"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className="bg-white dark:bg-[#2A171D] rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 overflow-hidden relative">
                    {/* Decorative gradient top line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
                    
                    <div className="p-8 sm:p-12">
                        {/* Icon + Heading */}
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <span className="material-symbols-outlined text-[28px]">lock_reset</span>
                            </div>
                            <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight tracking-tight mb-3 font-serif">
                                Forgot Your Password?
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-sm mx-auto">
                                Don&apos;t worry, it happens to the best of us. Enter the email address associated with your account.
                            </p>
                        </div>

                        {/* Form state toggling */}
                        {!isSuccess ? (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold" htmlFor="email">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </div>
                                        <input 
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base" 
                                            id="email" 
                                            name="email" 
                                            placeholder="name@example.com" 
                                            required 
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button 
                                    className="group w-full flex items-center justify-center gap-2 h-12 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-70" 
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                                    ) : (
                                        <>
                                            <span>Send Reset Link</span>
                                            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <motion.div 
                                className="text-center py-4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                                </div>
                                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2 font-serif">Check your inbox</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                    If an account exists with <span className="font-medium text-slate-900 dark:text-slate-100">{email}</span>, you will receive a password reset link shortly.
                                </p>
                                <button 
                                    className="text-primary hover:text-primary/80 font-semibold text-sm" 
                                    onClick={() => { setIsSuccess(false); setEmail(''); }}
                                >
                                    Try another email
                                </button>
                            </motion.div>
                        )}

                        {/* Footer Links */}
                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                            <Link href="/auth/login" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors text-sm font-medium">
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                                Back to Login
                            </Link>
                        </div>
                    </div>
                    
                    {/* Bottom pattern decoration */}
                    <div className="h-2 w-full bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
                </div>
                
                {/* Help footer */}
                <p className="mt-8 text-center text-slate-400 dark:text-slate-500 text-xs">
                    Need help? <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary underline decoration-slate-300 hover:decoration-primary underline-offset-2 transition-all">Contact Support</Link>
                </p>
            </motion.div>
        </div>
    );
}
