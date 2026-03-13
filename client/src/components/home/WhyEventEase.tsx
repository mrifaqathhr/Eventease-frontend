'use client';

import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: 'verified',
        title: 'Vetted Professionals',
        description:
            'We review every vendor to ensure they meet our high standards for quality and service.',
    },
    {
        icon: 'chat_bubble',
        title: 'Direct Communication',
        description:
            'Chat directly with vendors, request quotes, and manage bookings all in one place.',
    },
    {
        icon: 'savings',
        title: 'Transparent Pricing',
        description:
            'No hidden fees. See starting prices upfront and stay within your budget effortlessly.',
    },
];

export default function WhyEventEase() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 lg:p-12 border border-background-dim overflow-hidden">
            {/* Left: Content */}
            <div className="flex flex-col gap-6">
                <motion.h2
                    className="font-serif text-3xl md:text-4xl font-bold text-text-main leading-tight"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: EASE } as Transition}
                >
                    Planning made simple,{' '}
                    <br className="hidden md:block" />
                    so you can focus on love.
                </motion.h2>

                <div className="space-y-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="flex gap-4"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: EASE } as Transition}
                        >
                            <motion.div
                                className="size-10 rounded-full bg-primary-light flex items-center justify-center shrink-0"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            >
                                <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                            </motion.div>
                            <div>
                                <h3 className="font-bold text-lg text-text-main">{feature.title}</h3>
                                <p className="text-text-muted leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right: Image — slides in from right */}
            <motion.div
                className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: EASE } as Transition}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUuHylcVdTBjbMKugfE5-h-Am1CAhmhoT_w4xy5txNl1aBAkJd-LS_iGx-o5u3pOZwrciqD-I78daXhZJcB9l2Cv843iUWFGkwrc1T9JWmr5_KxbxInr6AGOBSquqZjirsH3u28eub5pqWC7a_CaxCDwHvkn2o6JKop0HtcoGoBKNnW7AGoOncGaKzcTeCUJ4MV_NgpRdU4gQHfUEFkyTET3yRY5UvUvMI5Zx_ytG5VBIQFzCJ9_Ub_yrcsXmpIx9v9XKiIctjHxCc')",
                    }}
                    role="img"
                    aria-label="Couple planning wedding looking at tablet"
                />
            </motion.div>
        </section>
    );
}
