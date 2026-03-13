'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FeaturedPostProps {
    title: string;
    excerpt: string;
    backgroundImage: string;
    imageAlt: string;
    category?: string;
    href: string;
}

// ─── Motion Variants ──────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const badgeVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.1 } },
};

const titleVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.25 } },
};

const excerptVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay: 0.4 } },
};

const ctaVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.55 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function FeaturedPost({
    title,
    excerpt,
    backgroundImage,
    category = 'Featured Story',
    href,
}: FeaturedPostProps) {
    return (
        <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden group">
            {/* Background Image with zoom on hover */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
                role="img"
                aria-label="Featured post background image"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-16 md:pb-20 text-white">
                {/* Category Badge */}
                <motion.span
                    className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase
                     bg-primary text-white rounded w-fit"
                    initial="hidden"
                    animate="visible"
                    variants={badgeVariant}
                >
                    {category}
                </motion.span>

                {/* Title */}
                <motion.h1
                    className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 max-w-4xl drop-shadow-sm"
                    initial="hidden"
                    animate="visible"
                    variants={titleVariant}
                >
                    {title}
                </motion.h1>

                {/* Excerpt */}
                <motion.p
                    className="text-base md:text-lg text-slate-200 max-w-2xl mb-8 font-light leading-relaxed"
                    initial="hidden"
                    animate="visible"
                    variants={excerptVariant}
                >
                    {excerpt}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={ctaVariant}
                >
                    <Link
                        href={href}
                        className="group/btn inline-flex items-center gap-2 text-white font-bold
                       hover:gap-4 transition-all duration-300 w-fit"
                    >
                        Read Full Article
                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
