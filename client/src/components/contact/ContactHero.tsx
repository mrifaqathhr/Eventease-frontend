'use client';

import { motion } from 'framer-motion';

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactHero() {
    return (
        <section className="relative flex flex-col items-center justify-center px-4 py-16 text-center lg:py-24 overflow-hidden">
            {/* Radial gradient background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        'radial-gradient(ellipse at top, rgba(232, 48, 94, 0.08) 0%, transparent 65%)',
                }}
            />

            <motion.div
                className="max-w-4xl space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Badge */}
                <motion.span
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="size-1.5 rounded-full bg-primary" />
                    Support &amp; Contact
                </motion.span>

                {/* Headline */}
                <motion.h1
                    className="font-serif text-5xl font-medium tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    We&apos;re here to help plan
                    <br />
                    <span className="text-primary italic">your perfect day.</span>
                </motion.h1>

                {/* Sub-text */}
                <motion.p
                    className="mx-auto max-w-2xl text-lg font-light text-slate-600 dark:text-slate-400 md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                >
                    Whether you&apos;re a couple planning a wedding or a vendor looking to
                    grow, our support team is ready to assist you.
                </motion.p>
            </motion.div>
        </section>
    );
}
