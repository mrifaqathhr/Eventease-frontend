'use client';

import { motion } from 'framer-motion';
import BlogCard, { BlogCardProps } from './BlogCard';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogGridProps {
    posts: BlogCardProps[];
    onLoadMore?: () => void;
    hasMore?: boolean;
}

// ─── Motion Variants ──────────────────────────────────────────────────────────

const gridContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const loadMoreVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BlogGrid({ posts, onLoadMore, hasMore = true }: BlogGridProps) {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
            {posts.length === 0 ? (
                <div className="text-center py-24 text-slate-400">
                    <span className="material-symbols-outlined text-6xl mb-4 block">article</span>
                    <p className="text-lg font-medium">No articles found in this category.</p>
                </div>
            ) : (
                <>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {posts.map((post) => (
                            <BlogCard key={post.href} {...post} />
                        ))}
                    </motion.div>

                    {/* Load More */}
                    {hasMore && (
                        <motion.div
                            className="flex justify-center mt-14"
                            variants={loadMoreVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            <button
                                onClick={onLoadMore}
                                className="px-10 py-4 rounded-xl border-2 border-slate-200 text-text-main font-bold
                           hover:border-primary hover:text-primary transition-all duration-200
                           bg-transparent active:scale-95"
                            >
                                Load More Articles
                            </button>
                        </motion.div>
                    )}
                </>
            )}
        </section>
    );
}
