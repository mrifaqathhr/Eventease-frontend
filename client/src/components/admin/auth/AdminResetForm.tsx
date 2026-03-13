'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminResetForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Basic password strength
    const getStrength = (pw: string) => {
        if (!pw) return { label: 'None', color: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-500', width: 'w-0' };
        if (pw.length < 5) return { label: 'Weak', color: 'bg-red-500', text: 'text-red-500', width: 'w-1/4' };
        if (pw.length < 8) return { label: 'Fair', color: 'bg-yellow-400', text: 'text-yellow-500', width: 'w-2/4' };
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
        console.log('Admin password reset completed');
        
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            window.location.href = '/admin/login'; // Simple redirect on success
        }, 1000);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-screen w-full font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 relative">
            {/* Top Navigation (Simplified for focus) */}
            <nav className="absolute top-0 w-full px-10 py-5 flex justify-between items-center max-w-[960px] mx-auto hidden sm:flex">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <div className="size-6 text-primary">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                            <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] font-serif">EventEase</h2>
                </div>
                <Link href="/admin/help" className="text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                    Need help?
                </Link>
            </nav>

            {/* Main Card Container */}
            <motion.div 
                className="relative w-full max-w-[480px] bg-white dark:bg-[#2a171d] rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 z-10"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Header Section */}
                <div className="px-8 pt-8 pb-4 text-center">
                    <div className="flex justify-center mb-6 sm:hidden">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined text-3xl">diversity_1</span>
                        </div>
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-3 font-serif">Set New Admin Password</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Enter and confirm your new password below.</p>
                </div>

                {/* Form Section */}
                <div className="px-8 pb-8">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        {/* Field 1: New Password */}
                        <div className="flex flex-col">
                            <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2" htmlFor="new-password">New Password</label>
                            <div className="relative flex w-full flex-1 items-stretch rounded-xl shadow-sm">
                                <input 
                                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 h-14 placeholder:text-slate-400 p-[15px] pr-12 text-base font-normal leading-normal transition-all" 
                                    id="new-password" 
                                    placeholder="Enter new password" 
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button 
                                    className="absolute right-0 top-0 h-full flex items-center pr-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility' : 'visibility_off'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Password Strength Meter */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-700 dark:text-slate-300 text-xs font-medium">Password Strength</span>
                                <span className={`text-xs ${strength.text}`}>{strength.label}</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full transition-all duration-300 rounded-full ${strength.width} ${strength.color}`}></div>
                            </div>
                            <p className="text-slate-400 dark:text-slate-500 text-xs font-normal pt-1">At least 8 characters. Use a strong, unique password.</p>
                        </div>

                        {/* Field 2: Confirm Password */}
                        <div className="flex flex-col">
                            <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2" htmlFor="confirm-password">Confirm New Password</label>
                            <div className="relative flex w-full flex-1 items-stretch rounded-xl shadow-sm">
                                <input 
                                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 h-14 placeholder:text-slate-400 p-[15px] pr-12 text-base font-normal leading-normal transition-all" 
                                    id="confirm-password" 
                                    placeholder="Confirm new password" 
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button 
                                    className="absolute right-0 top-0 h-full flex items-center pr-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    <span className="material-symbols-outlined text-xl">{showConfirmPassword ? 'visibility' : 'visibility_off'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            className="mt-2 w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-rose-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20 disabled:opacity-70" 
                            type="submit"
                            disabled={isLoading || password.length === 0}
                        >
                            {isLoading ? (
                                <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                            ) : (
                                <span className="truncate">Update Password</span>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer / Security Notice */}
                <div className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 px-8 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                        <span className="material-symbols-outlined text-sm">lock_clock</span>
                        <span>For your security, this link expires in 15 minutes.</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
