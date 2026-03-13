'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogCardProps {
    title: string;
    excerpt: string;
    featuredImage: string;
    imageAlt: string;
    author?: string;
    date: string;
    readTime: string;
    category: string;
    href: string;
}

// ─── Motion Variant (exported so BlogGrid can use for stagger) ────────────────

export const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BlogCard({
    title,
    excerpt,
    featuredImage,
    imageAlt,
    date,
    readTime,
    category,
    href,
}: BlogCardProps) {
    return (
        <motion.article
            variants={cardVariant}
            className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden
                 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300
                 border border-transparent hover:border-slate-100"
        >
            {/* Image */}
            <Link href={href} className="relative aspect-[4/3] overflow-hidden rounded-2xl block flex-shrink-0">
                <Image
                    src={featuredImage}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full
                        text-xs font-bold text-primary uppercase tracking-wide z-10">
                    {category}
                </div>
            </Link>

            {/* Body */}
            <div className="flex flex-col flex-1 pt-6 pb-4 px-2">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                    <span>{date}</span>
                    <span className="size-1 bg-slate-300 rounded-full inline-block" />
                    <span>{readTime}</span>
                </div>

                {/* Title */}
                <Link href={href}>
                    <h3 className="text-xl font-serif font-bold text-text-main mb-3
                         group-hover:text-primary transition-colors leading-snug">
                        {title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {excerpt}
                </p>

                {/* CTA */}
                <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-text-main
                     group-hover:text-primary transition-colors mt-auto"
                >
                    Read Article{' '}
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </Link>
            </div>
        </motion.article>
    );
}
