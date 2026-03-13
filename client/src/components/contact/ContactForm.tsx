'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactFormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Subject Options ──────────────────────────────────────────────────────────

const SUBJECT_OPTIONS = [
    'General Inquiry',
    'Vendor Support',
    'Billing & Payments',
    'Technical Issue',
    'Partnerships',
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
    });

    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /**
     * TODO: Wire this up to Appwrite — create a document in the `inquiries`
     * collection with the form's data.
     */
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus('loading');

        try {
            // Appwrite SDK call will go here, e.g.:
            // await databases.createDocument(DATABASE_ID, INQUIRIES_COLLECTION_ID, ID.unique(), { ...form });
            await new Promise((res) => setTimeout(res, 1000)); // placeholder delay
            setSubmitStatus('success');
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: '',
            });
        } catch {
            setSubmitStatus('error');
        }
    };

    const inputCls =
        'w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors';

    return (
        <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-10 border border-primary/20 shadow-xl shadow-primary/5">
                {submitStatus === 'success' ? (
                    <motion.div
                        className="flex flex-col items-center justify-center py-12 text-center gap-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="material-symbols-outlined text-5xl text-primary">
                            check_circle
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-slate-900 dark:text-white">
                            Message Sent!
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                            Thank you for reaching out. Our team will get back to you within
                            24 hours.
                        </p>
                        <button
                            onClick={() => setSubmitStatus('idle')}
                            className="mt-4 rounded-xl bg-primary/10 px-6 py-2.5 text-sm font-bold text-primary hover:bg-primary/20 transition-colors"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                        {/* Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                    First Name
                                </span>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="Jane"
                                    required
                                    className={inputCls}
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                    Last Name
                                </span>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    required
                                    className={inputCls}
                                />
                            </label>
                        </div>

                        {/* Email / Phone Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                    Email Address
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    required
                                    className={inputCls}
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                    Phone{' '}
                                    <span className="font-normal text-slate-400">(Optional)</span>
                                </span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className={inputCls}
                                />
                            </label>
                        </div>

                        {/* Subject */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                I&apos;m looking for help with&hellip;
                            </span>
                            <select
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className={inputCls}
                            >
                                {SUBJECT_OPTIONS.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {/* Message */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us more about how we can help…"
                                rows={5}
                                required
                                className={`${inputCls} resize-none`}
                            />
                        </label>

                        {/* Error feedback */}
                        {submitStatus === 'error' && (
                            <p className="text-sm text-red-500 dark:text-red-400">
                                Something went wrong. Please try again or email us directly.
                            </p>
                        )}

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={submitStatus === 'loading'}
                                className="w-full rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                            >
                                {submitStatus === 'loading' ? 'Sending…' : 'Send Message'}
                            </button>
                        </div>

                        <p className="text-center text-xs text-slate-400 mt-2">
                            By sending this message, you agree to our{' '}
                            <Link href="/terms" className="underline hover:text-primary transition-colors">
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy" className="underline hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </form>
                )}
            </div>
        </motion.div>
    );
}
