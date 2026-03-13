'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RelatedArticle {
    title: string;
    href: string;
    thumbnail: string;
    thumbnailAlt: string;
    date: string;
    readTime: string;
}

interface RelatedArticlesProps {
    articles?: RelatedArticle[];
    newsletterTitle?: string;
    newsletterSubtitle?: string;
}

const DEFAULT_ARTICLES: RelatedArticle[] = [
    {
        title: '5 Questions to Ask Before Booking a Venue',
        href: '/blog/questions-to-ask-venue',
        thumbnail:
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=160&h=160&fit=crop&q=80',
        thumbnailAlt: 'Two hands holding wedding rings',
        date: 'Sep 12',
        readTime: '5 min read',
    },
    {
        title: 'Trending Flower Palettes for Spring 2024',
        href: '/blog/trending-flower-palettes-spring',
        thumbnail:
            'https://images.unsplash.com/photo-1490750967868-88df5691cc06?w=160&h=160&fit=crop&q=80',
        thumbnailAlt: 'Pink and white rose bouquet',
        date: 'Oct 02',
        readTime: '4 min read',
    },
    {
        title: 'Band vs DJ: How to Decide for Your Reception',
        href: '/blog/band-vs-dj',
        thumbnail:
            'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=160&h=160&fit=crop&q=80',
        thumbnailAlt: 'DJ mixing music at a party',
        date: 'Aug 15',
        readTime: '6 min read',
    },
];

// ─── Motion Variants ──────────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function RelatedArticles({
    articles = DEFAULT_ARTICLES,
    newsletterTitle = 'Weekly Inspiration',
    newsletterSubtitle = 'Join 50,000+ couples getting tips in their inbox.',
}: RelatedArticlesProps) {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            {/* ── Related Articles ── */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-serif font-bold text-xl mb-5 text-text-main">Related Articles</h3>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex flex-col gap-5"
                >
                    {articles.map((article) => (
                        <motion.a
                            key={article.href}
                            href={article.href}
                            variants={itemVariants}
                            className="flex gap-4 group"
                        >
                            {/* Thumbnail */}
                            <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                                <Image
                                    src={article.thumbnail}
                                    alt={article.thumbnailAlt}
                                    fill
                                    sizes="80px"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col justify-center gap-1 min-w-0">
                                <h4 className="font-bold text-sm text-text-main leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h4>
                                <span className="text-xs text-text-muted">
                                    {article.date} &bull; {article.readTime}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* ── Newsletter Signup ── */}
            <div className="relative rounded-2xl overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-primary-dark" />
                <div className="absolute inset-0 bg-primary opacity-40" />

                <div className="relative z-10 p-6 flex flex-col items-center text-center text-white">
                    <span className="material-symbols-outlined text-4xl mb-2 opacity-90">mail</span>
                    <h3 className="font-serif font-bold text-xl mb-1.5">{newsletterTitle}</h3>
                    <p className="text-sm opacity-85 mb-5">{newsletterSubtitle}</p>

                    {subscribed ? (
                        <div className="flex items-center gap-2 text-sm font-semibold bg-white/20 rounded-xl px-4 py-3 w-full justify-center">
                            <span className="material-symbols-outlined text-[18px]">check_circle</span>
                            You&apos;re subscribed!
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-3">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="w-full rounded-xl px-4 py-2.5 text-text-main text-sm bg-white border-none focus:outline-none focus:ring-2 focus:ring-white/60"
                            />
                            <button
                                type="submit"
                                className="w-full bg-white text-primary font-bold text-sm py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
