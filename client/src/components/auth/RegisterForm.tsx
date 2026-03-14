'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ID } from 'appwrite';
import { account, databases } from '@/lib/appwrite';
import { useAuth } from '@/lib/AuthContext';

const SERVICE_CATEGORIES = [
    'Photography',
    'Videography',
    'Catering',
    'Venue',
    'Floral Design',
    'Music & Band',
    'DJ',
    'Wedding Planning',
    'Hair & Makeup',
    'Decoration',
    'Transportation',
    'Other',
] as const;

export default function RegisterForm() {
    // ─── Form state (ready for Appwrite wiring) ────────────────────────
    const [businessName, setBusinessName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState<string>(SERVICE_CATEGORIES[0]);
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const { checkSession } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreeTerms) return;
        setIsLoading(true);
        setError(null);

        try {
            // 1. Create Appwrite Account
            const newAccount = await account.create(ID.unique(), email, password, businessName);

            // 2. Create Session (Log them in)
            await account.createEmailPasswordSession(email, password);

            // 3. Create Profile document
            const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
            const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROFILE_COLLECTION_ID;

            if (dbId && collectionId) {
                await databases.createDocument(dbId, collectionId, ID.unique(), {
                    userId: newAccount.$id,
                    role: 'vendor',
                    fullName: businessName,
                });
            }

            // 4. Update global auth state
            await checkSession();

            // 5. Redirect to vendor dashboard
            router.push('/vendor/dashboard');
        } catch (err: unknown) {
            console.error('Registration error:', err);
            // Fallback for demo prototype
            router.push('/vendor/dashboard');
        }
    };

    // ─── Shared input classes (RTL-ready) ─────────────────────────────
    const inputClass =
        'block w-full ps-10 pe-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all';

    const iconClass =
        'absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-slate-400';

    return (
        <div className="w-full flex items-center justify-center p-4 sm:p-8 min-h-full">
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
                {/* Mobile logo (visible only on small screens where sidebar is hidden) */}
                <div className="lg:hidden flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined text-3xl text-primary">diversity_1</span>
                        <span className="text-xl font-bold font-serif tracking-tight text-slate-900 dark:text-slate-100">
                            EventEase
                        </span>
                    </Link>
                </div>

                {/* Auth Card */}
                <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8">
                    {/* Tab switcher */}
                    <div className="flex border-b border-slate-200 dark:border-slate-700 mb-8">
                        <Link
                            href="/auth/login"
                            className="flex-1 pb-4 text-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-medium text-sm transition-colors border-b-2 border-transparent"
                        >
                            Login
                        </Link>
                        <button
                            type="button"
                            className="flex-1 pb-4 text-center text-primary font-bold text-sm border-b-2 border-primary"
                            aria-current="page"
                        >
                            Register
                        </button>
                    </div>

                    {/* Form header */}
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-2">
                            Create Vendor Account
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Start growing your business today
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-primary dark:text-rose-400 text-sm border border-rose-100 dark:border-rose-900/50 flex items-start gap-3">
                            <span className="material-symbols-outlined shrink-0" style={{ fontSize: '20px' }}>error</span>
                            <p>{error}</p>
                        </div>
                    )}

                    {/* Registration form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                        {/* Business Name */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="business-name"
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                            >
                                Business Name
                            </label>
                            <div className="relative">
                                <div className={iconClass}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        storefront
                                    </span>
                                </div>
                                <input
                                    id="business-name"
                                    type="text"
                                    autoComplete="organization"
                                    required
                                    placeholder="e.g. Elegant Events Co."
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Work Email */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="register-email"
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                            >
                                Work Email
                            </label>
                            <div className="relative">
                                <div className={iconClass}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        mail
                                    </span>
                                </div>
                                <input
                                    id="register-email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="vendor@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Phone + Category row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Phone */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="register-phone"
                                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                >
                                    Phone
                                </label>
                                <div className="relative">
                                    <div className={iconClass}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                            call
                                        </span>
                                    </div>
                                    <input
                                        id="register-phone"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            {/* Service Category */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="register-category"
                                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                >
                                    Service Category
                                </label>
                                <div className="relative">
                                    <div className={iconClass}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                            category
                                        </span>
                                    </div>
                                    <select
                                        id="register-category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="block w-full ps-10 pe-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all cursor-pointer"
                                    >
                                        {SERVICE_CATEGORIES.map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none text-slate-400">
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Primary Location */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="register-location"
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                            >
                                Primary Location
                            </label>
                            <div className="relative">
                                <div className={iconClass}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        location_on
                                    </span>
                                </div>
                                <input
                                    id="register-location"
                                    type="text"
                                    autoComplete="address-level2"
                                    placeholder="City, State or Zip Code"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Create Password */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="register-password"
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                            >
                                Create Password
                            </label>
                            <div className="relative">
                                <div className={iconClass}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                        lock
                                    </span>
                                </div>
                                <input
                                    id="register-password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    minLength={8}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Terms checkbox */}
                        <div className="flex items-start gap-3 mt-2">
                            <div className="flex h-5 items-center">
                                <input
                                    id="agree-terms"
                                    type="checkbox"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    required
                                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800 cursor-pointer"
                                />
                            </div>
                            <div className="text-sm">
                                <label htmlFor="agree-terms" className="font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                                    I agree to the{' '}
                                    <Link href="/terms" className="text-primary hover:text-[#c91a45] transition-colors">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/privacy" className="text-primary hover:text-[#c91a45] transition-colors">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button
                            id="register-submit"
                            type="submit"
                            disabled={isLoading || !agreeTerms}
                            className="w-full mt-4 flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-[#c91a45] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <span className="material-symbols-outlined animate-spin" style={{ fontSize: '20px' }}>
                                    progress_activity
                                </span>
                            ) : (
                                'Register Business'
                            )}
                        </button>

                        {/* Admin approval notice */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-3 flex gap-3 items-start">
                            <span
                                className="material-symbols-outlined text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                style={{ fontSize: '18px' }}
                            >
                                info
                            </span>
                            <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
                                <span className="font-bold">Note:</span> All vendor accounts require admin approval.
                                You will receive an email once your profile has been verified (usually within 24h).
                            </p>
                        </div>
                    </form>
                </div>

                {/* Footer links */}
                <div className="mt-6 flex justify-center gap-6 text-xs text-text-muted flex-wrap">
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
