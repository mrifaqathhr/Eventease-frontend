'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResetPasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Basic password strength
    const getStrength = (pw: string) => {
        if (!pw) return { label: 'None', color: 'bg-neutral-200 dark:bg-white/10', text: 'text-text-secondary', width: 'w-0' };
        if (pw.length < 5) return { label: 'Weak', color: 'bg-red-500', text: 'text-red-500', width: 'w-1/4' };
        if (pw.length < 8) return { label: 'Fair', color: 'bg-yellow-500', text: 'text-yellow-500', width: 'w-2/4' };
        if (pw.length >= 8 && /[A-Z]/.test(pw) && /[0-9]/.test(pw)) return { label: 'Strong', color: 'bg-green-500', text: 'text-green-500', width: 'w-full' };
        return { label: 'Medium', color: 'bg-primary', text: 'text-primary', width: 'w-3/4' };
    };

    const strength = getStrength(password);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        setIsLoading(true);
        // Prep for Appwrite Account API wiring
        // await account.updateRecovery(userId, secret, password, confirmPassword);
        console.log('Password reset updated');
        
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            window.location.href = '/auth/reset-success';
        }, 1000);
    };

    return (
        <div className="flex-1 flex flex-col min-h-screen w-full font-sans text-text-main dark:text-neutral-200 bg-[#fcf8f9] dark:bg-[#1b0d11]">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-200 dark:border-white/10 px-10 py-4 bg-white dark:bg-[#2d1b20] sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-4 text-text-main dark:text-white hover:opacity-80 transition-opacity">
                    <div className="size-8 text-primary">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                            <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-text-main dark:text-white text-xl font-bold font-serif leading-tight tracking-[-0.015em]">EventEase</h2>
                </Link>
                <div className="flex flex-1 justify-end gap-3 sm:gap-8">
                    <Link href="/contact" className="hidden sm:flex min-w-[84px] items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-transparent text-primary hover:bg-primary/5 transition-colors text-sm font-bold leading-normal tracking-[0.015em] border border-transparent">
                        <span className="truncate">Help</span>
                    </Link>
                    <Link href="/auth/login" className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm">
                        <span className="truncate">Log In</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
                <motion.div 
                    className="w-full max-w-[520px] bg-white dark:bg-[#2a171d] rounded-lg shadow-xl border border-neutral-200 dark:border-white/5 overflow-hidden"
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className="p-8 sm:p-10 flex flex-col gap-6">
                        {/* Heading Section */}
                        <div className="text-center flex flex-col gap-2">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 text-primary">
                                <span className="material-symbols-outlined text-2xl">lock_reset</span>
                            </div>
                            <h1 className="text-text-main dark:text-white text-3xl sm:text-4xl font-serif font-medium tracking-tight">Set a New Password</h1>
                            <p className="text-text-secondary dark:text-neutral-400 text-base font-normal">
                                Your new password must be different from previously used passwords.
                            </p>
                        </div>

                        {/* Form Section */}
                        <form className="flex flex-col gap-6 mt-2" onSubmit={handleSubmit}>
                            {/* New Password Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-text-main dark:text-neutral-200 text-sm font-semibold leading-normal font-sans" htmlFor="new-password">New Password</label>
                                <div className="relative group">
                                    <input 
                                        className="w-full h-12 px-4 rounded-lg bg-white dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-text-main dark:text-white placeholder:text-neutral-400 dark:placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans" 
                                        id="new-password" 
                                        placeholder="Enter new password" 
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button 
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary transition-colors" 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility' : 'visibility_off'}</span>
                                    </button>
                                </div>
                                
                                {/* Strength Meter */}
                                <div className="flex flex-col gap-2 mt-1">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-text-secondary dark:text-neutral-400 font-medium">Strength</span>
                                        <span className={`font-semibold ${strength.text}`}>{strength.label}</span>
                                    </div>
                                    <div className="flex gap-1 h-1.5 w-full bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                                        <div className={`h-full transition-all duration-300 ${strength.width} ${strength.color}`}></div>
                                    </div>
                                    <p className="text-text-secondary dark:text-neutral-500 text-xs flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined text-[14px]">info</span>
                                        At least 8 characters required
                                    </p>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-text-main dark:text-neutral-200 text-sm font-semibold leading-normal font-sans" htmlFor="confirm-password">Confirm Password</label>
                                <div className="relative group">
                                    <input 
                                        className="w-full h-12 px-4 rounded-lg bg-white dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-text-main dark:text-white placeholder:text-neutral-400 dark:placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans" 
                                        id="confirm-password" 
                                        placeholder="Re-enter new password" 
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <button 
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary transition-colors" 
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                    >
                                        <span className="material-symbols-outlined text-xl">{showConfirmPassword ? 'visibility' : 'visibility_off'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button 
                                className="w-full h-12 mt-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70"
                                type="submit"
                                disabled={isLoading || password.length === 0}
                            >
                                {isLoading ? (
                                    <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                                ) : (
                                    <>
                                        <span>Update Password</span>
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Back Link */}
                        <div className="text-center mt-2">
                            <Link href="/auth/login" className="text-text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-primary text-sm font-medium flex items-center justify-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-base">arrow_back</span>
                                Back to Log In
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Footer of Card */}
                    <div className="bg-neutral-50 dark:bg-white/5 px-8 py-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-center gap-6">
                        <span className="text-xs text-text-secondary dark:text-neutral-500 font-medium">Trusted by leading event planners</span>
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-[#2a171d] bg-gradient-to-br from-pink-300 to-rose-300"></div>
                            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-[#2a171d] bg-gradient-to-br from-purple-300 to-indigo-300"></div>
                            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-[#2a171d] bg-gradient-to-br from-amber-300 to-orange-300"></div>
                            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-[#2a171d] bg-neutral-200 dark:bg-white/20 flex items-center justify-center text-[8px] font-bold text-text-secondary">+2k</div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Simple Footer */}
            <footer className="py-6 text-center text-text-secondary dark:text-neutral-500 text-sm">
                <p>© {new Date().getFullYear()} EventEase. All rights reserved.</p>
            </footer>
        </div>
    );
}
