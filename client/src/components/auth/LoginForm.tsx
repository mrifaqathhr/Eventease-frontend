'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginForm() {
    // ─── Form state (ready for Appwrite wiring) ────────────────────────
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Wire to Appwrite account.createEmailPasswordSession(email, password)
        console.log({ email, password, rememberMe });
        setIsLoading(false);
    };

    return (
        <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 w-full bg-[#fcf8f9] dark:bg-[#1b0d11]">
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Mobile logo (visible only on small screens where sidebar is hidden) */}
                <div className="lg:hidden flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 text-text-main hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined text-3xl text-primary">diversity_1</span>
                        <span className="text-xl font-bold font-serif tracking-tight text-text-main">
                            EventEase
                        </span>
                    </Link>
                </div>

                {/* Auth Card */}
                <div className="bg-white dark:bg-[#2d1b20] rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-8 sm:p-10">
                    {/* Card header */}
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold font-serif text-text-main dark:text-white mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-text-muted dark:text-neutral-400 text-sm">
                            Manage your events and grow your business.
                        </p>
                    </div>

                    {/* Tab switcher */}
                    <div className="flex border-b border-neutral-200 dark:border-neutral-700 mb-8 w-full">
                        <button
                            type="button"
                            className="flex-1 flex flex-col items-center justify-center border-b-2 border-primary text-text-main dark:text-white pb-3 pt-2 transition-colors"
                            aria-current="page"
                        >
                            <span className="text-sm font-bold tracking-wide">Login</span>
                        </button>
                        <Link
                            href="/auth/register"
                            className="flex-1 flex flex-col items-center justify-center border-b-2 border-transparent text-text-muted hover:text-text-main dark:hover:text-white pb-3 pt-2 transition-colors"
                        >
                            <span className="text-sm font-semibold tracking-wide">Register</span>
                        </Link>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                        {/* Email field */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-text-main dark:text-white">
                                Email Address
                            </span>
                            <div className="relative">
                                {/* Icon — uses inset-inline-start for RTL support */}
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-text-muted">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        mail
                                    </span>
                                </div>
                                <input
                                    id="login-email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="vendor@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#fcf8f9] dark:bg-[#1a0e10] text-text-main dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-xl h-12 ps-10 pe-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-muted/60 text-sm"
                                />
                            </div>
                        </label>

                        {/* Password field */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-text-main dark:text-white">
                                Password
                            </span>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-text-muted">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        lock
                                    </span>
                                </div>
                                <input
                                    id="login-password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#fcf8f9] dark:bg-[#1a0e10] text-text-main dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-xl h-12 ps-10 pe-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-muted/60 text-sm"
                                />
                            </div>
                        </label>

                        {/* Remember me + Forgot password row */}
                        <div className="flex items-center justify-between mt-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded text-primary border-gray-300 focus:ring-primary focus:ring-offset-0 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 cursor-pointer"
                                />
                                <span className="text-sm text-text-muted group-hover:text-text-main dark:group-hover:text-white transition-colors select-none">
                                    Remember me
                                </span>
                            </label>
                            <Link
                                href="/auth/forgot-password"
                                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit button */}
                        <button
                            id="login-submit"
                            type="submit"
                            disabled={isLoading}
                            className="mt-4 flex w-full items-center justify-center rounded-xl h-12 bg-primary hover:bg-[#c91a45] text-white text-sm font-bold shadow-lg shadow-rose-200 dark:shadow-rose-900/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="material-symbols-outlined animate-spin" style={{ fontSize: '20px' }}>
                                    progress_activity
                                </span>
                            ) : (
                                'Login to Dashboard'
                            )}
                        </button>
                    </form>

                    {/* Footer link */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-text-muted">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/auth/register"
                                className="font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                            >
                                Register as a Vendor
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer links */}
                <div className="mt-8 flex justify-center gap-6 text-xs text-text-muted flex-wrap">
                    <Link href="/terms" className="hover:text-text-main dark:hover:text-white transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="hover:text-text-main dark:hover:text-white transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="hover:text-text-main dark:hover:text-white transition-colors">
                        Help Center
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
