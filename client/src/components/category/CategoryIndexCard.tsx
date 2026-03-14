'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CategoryIndexCardProps {
    /** Display name of the category */
    name: string;
    /** Short marketing description */
    description: string;
    /** CTA label, e.g. "Browse Venues" */
    ctaLabel: string;
    /** Route, e.g. /search?category=venues */
    href: string;
    /** Vendor / listing count label, e.g. "2.4k+" */
    count: string;
    /** Hero image URL */
    imageUrl: string;
    /** Accessible alt text for the image */
    imageAlt: string;
}

// ─── Framer-motion variant (consumed by the parent stagger container) ─────────

export const cardVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function CategoryIndexCard({
    name,
    description,
    ctaLabel,
    href,
    count,
    imageUrl,
    imageAlt,
}: CategoryIndexCardProps) {
    return (
        <motion.div variants={cardVariants}>
            <Link
                href={href}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between">
                        <h4 className="text-lg font-bold text-text-main transition-colors duration-200 group-hover:text-primary">
                            {name}
                        </h4>
                        <span className="flex items-center rounded-md bg-background-light px-2 py-1 text-xs font-semibold text-text-muted">
                            {count}
                        </span>
                    </div>

                    <p className="mt-2 line-clamp-2 text-sm text-text-muted">{description}</p>

                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                        <span>{ctaLabel}</span>
                        <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                            arrow_forward
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
