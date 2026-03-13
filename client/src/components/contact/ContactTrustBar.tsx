'use client';

import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TrustItem {
    icon: string;
    title: string;
    description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRUST_ITEMS: TrustItem[] = [
    {
        icon: 'verified_user',
        title: 'Secure Communication',
        description: 'Your data is encrypted end-to-end.',
    },
    {
        icon: 'support_agent',
        title: 'Dedicated Support',
        description: 'Real humans ready to assist you.',
    },
    {
        icon: 'timer',
        title: 'Fast Response Time',
        description: 'We aim to reply within 24 hours.',
    },
];

// ─── Map Section ──────────────────────────────────────────────────────────────

function MapSection() {
    return (
        <div className="w-full h-[400px] relative bg-slate-100 dark:bg-slate-900 overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 dark:from-slate-800 dark:via-slate-900 dark:to-black opacity-50" />
                <svg
                    className="absolute inset-0 w-full h-full text-slate-400/30 dark:text-slate-600/30"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-grid)" />
                </svg>
            </div>

            {/* Floating location card */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-3 border border-white/50 dark:border-slate-700/50 max-w-sm mx-4 text-center"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        className="material-symbols-outlined text-primary text-4xl"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    >
                        pin_drop
                    </motion.span>
                    <div>
                        <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">
                            Our Headquarters
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                            Located in the heart of the Fashion District.
                            <br />
                            Visits by appointment only.
                        </p>
                    </div>
                    <a
                        href="https://maps.google.com/?q=123+Wedding+Way+New+York+NY+10001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-primary font-bold text-sm hover:underline"
                    >
                        Get Directions
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactTrustBar() {
    return (
        <>
            {/* Trust Assurance Strip */}
            <section className="w-full bg-white dark:bg-slate-800 border-y border-slate-100 dark:border-slate-700 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TRUST_ITEMS.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="flex items-center gap-4 p-4 rounded-lg bg-[#f8f6f6] dark:bg-slate-900/50"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-primary shadow-sm shrink-0">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map */}
            <MapSection />
        </>
    );
}
