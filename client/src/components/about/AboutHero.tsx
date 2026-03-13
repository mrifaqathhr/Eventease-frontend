'use client';

import { motion } from 'framer-motion';

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutHero() {
    return (
        <section className="relative flex flex-col items-center justify-center px-4 py-20 text-center md:py-32 overflow-hidden">
            {/* Radial gradient background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        'radial-gradient(ellipse at top, rgba(253, 164, 175, 0.25) 0%, var(--color-background-light) 60%)',
                }}
            />

            <motion.div
                className="max-w-4xl space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Tag */}
                <motion.span
                    className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Our Philosophy
                </motion.span>

                {/* Headline */}
                <motion.h1
                    className="font-serif text-5xl font-bold tracking-tight text-text-main md:text-7xl leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Creating Unforgettable Moments,{' '}
                    <span className="text-primary italic">Effortlessly</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="mx-auto max-w-2xl text-lg text-text-muted md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                >
                    EventEase is your trusted partner in planning the perfect wedding,
                    connecting you with verified professionals who care about your big day
                    as much as you do.
                </motion.p>
            </motion.div>
        </section>
    );
}
