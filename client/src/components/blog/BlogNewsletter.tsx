'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// ─── Motion Variants ──────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BlogNewsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="w-full bg-primary-light py-20 px-6 mt-8">
            <motion.div
                className="max-w-2xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={containerVariants}
            >
                {/* Icon */}
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-white text-primary mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-3xl">mark_email_unread</span>
                </div>

                <h2 className="font-serif font-bold text-4xl md:text-5xl text-text-main mb-4">
                    Wedding Inspiration, Delivered.
                </h2>
                <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto">
                    Join over 50,000 couples planning their dream day. Get expert advice, latest trends,
                    and exclusive vendor deals sent straight to your inbox weekly.
                </p>

                {submitted ? (
                    <div className="flex items-center justify-center gap-3 text-primary font-bold text-lg">
                        <span className="material-symbols-outlined text-3xl">check_circle</span>
                        You&apos;re on the list — we&apos;ll be in touch!
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                            className="flex-1 px-5 py-4 rounded-xl border-0 focus:ring-2 focus:ring-primary
                         shadow-sm text-text-main placeholder:text-slate-400 text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-primary text-white font-bold rounded-xl
                         hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25
                         whitespace-nowrap active:scale-95"
                        >
                            Subscribe Now
                        </button>
                    </form>
                )}

                <p className="text-xs text-slate-400 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </motion.div>
        </section>
    );
}
