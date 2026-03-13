'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RelatedCard {
    title: string;
    href: string;
    image: string;
    imageAlt: string;
    category: string;
}

interface YouMayAlsoLikeProps {
    cards?: RelatedCard[];
}

const DEFAULT_CARDS: RelatedCard[] = [
    {
        title: 'Sweet Talk: Cake Flavors Your Guests Will Love',
        href: '/blog/cake-flavors',
        image:
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=450&fit=crop&q=80',
        imageAlt: 'Tiered wedding cake with flowers',
        category: 'Style & Trends',
    },
    {
        title: 'Timeline for Hair & Makeup on the Big Day',
        href: '/blog/hair-makeup-timeline',
        image:
            'https://images.unsplash.com/photo-1487412947147-5cebf100d293?w=600&h=450&fit=crop&q=80',
        imageAlt: 'Close up of bride with makeup artist',
        category: 'Planning Tips',
    },
    {
        title: 'A Modern Black-Tie Affair in Chicago',
        href: '/blog/black-tie-chicago',
        image:
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=450&fit=crop&q=80',
        imageAlt: 'Group of men in suits laughing together',
        category: 'Real Weddings',
    },
];

// ─── Motion Variants ──────────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function YouMayAlsoLike({ cards = DEFAULT_CARDS }: YouMayAlsoLikeProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="pt-10 border-t border-slate-100">
            <h2 className="font-serif font-bold text-3xl text-text-main mb-8">You May Also Like</h2>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {cards.map((card) => (
                    <motion.div key={card.href} variants={cardVariants}>
                        <Link href={card.href} className="group flex flex-col gap-4">
                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full relative">
                                <Image
                                    src={card.image}
                                    alt={card.imageAlt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                    {card.category}
                                </span>
                                <h3 className="font-serif font-bold text-xl text-text-main group-hover:text-primary transition-colors leading-snug">
                                    {card.title}
                                </h3>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
