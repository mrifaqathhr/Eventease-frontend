'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface RelatedCategory {
    label: string;
    icon: string;
    slug: string;
}

export interface RelatedCategoriesProps {
    items: RelatedCategory[];
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: EASE },
    },
};

const DEFAULT_CATEGORIES: RelatedCategory[] = [
    { label: 'Videography', icon: 'videocam', slug: 'videography' },
    { label: 'DJs & Bands', icon: 'queue_music', slug: 'djs-bands' },
    { label: 'Florists', icon: 'local_florist', slug: 'florists' },
    { label: 'Rentals', icon: 'event_seat', slug: 'rentals' },
    { label: 'Cakes', icon: 'cake', slug: 'cakes' },
    { label: 'Jewelry', icon: 'diamond', slug: 'jewelry' },
];

export default function RelatedCategories({
    items = DEFAULT_CATEGORIES,
}: RelatedCategoriesProps) {
    return (
        <section className="mt-16 pt-10 border-t border-[#f3e7ea]">
            <motion.h2
                className="text-2xl font-bold text-text-main mb-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE }}
            >
                Related Categories
            </motion.h2>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
            >
                {items.map((item) => (
                    <motion.div key={item.slug} variants={itemVariants}>
                        <Link
                            href={`/categories/${item.slug}`}
                            className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: '32px' }}
                                >
                                    {item.icon}
                                </span>
                            </div>
                            <span className="font-medium text-text-main group-hover:text-primary transition-colors text-sm">
                                {item.label}
                            </span>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
