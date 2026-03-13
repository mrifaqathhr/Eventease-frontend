'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import VendorCard, { type VendorCardProps, cardVariants } from '@/components/shared/VendorCard';

/* ─── Types ──────────────────────────────────────────────────── */
export interface RelatedCategory {
    slug: string;
    name: string;
    imageUrl: string;
    imageAlt: string;
    count: number;
}

export interface InspirationArticle {
    slug: string;
    tag: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    imageAlt: string;
}

export interface SearchResultsGridProps {
    vendors: VendorCardProps[];
    isLoading?: boolean;
    relatedCategories?: RelatedCategory[];
    articles?: InspirationArticle[];
    onLoadMore?: () => void;
    hasMore?: boolean;
}

/* ─── Variants ───────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.09 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ─── Skeleton ───────────────────────────────────────────────── */
function SkeletonCard() {
    return (
        <div className="bg-white border border-[#f3e7ea] rounded-2xl overflow-hidden animate-pulse">
            <div className="h-60 bg-gray-100" />
            <div className="p-5 space-y-3">
                <div className="h-5 bg-gray-100 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-1/2" />
                <div className="flex gap-2">
                    <div className="h-6 bg-gray-100 rounded w-16" />
                    <div className="h-6 bg-gray-100 rounded w-20" />
                </div>
                <div className="h-px bg-gray-100 mt-4" />
                <div className="flex justify-between items-center pt-1">
                    <div className="h-4 bg-gray-100 rounded w-24" />
                    <div className="h-4 bg-gray-100 rounded w-20" />
                </div>
            </div>
        </div>
    );
}

/* ─── Empty State ─────────────────────────────────────────────── */
function EmptyState() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center py-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
        >
            <span
                className="material-symbols-outlined text-text-muted mb-4"
                style={{ fontSize: '56px' }}
            >
                search_off
            </span>
            <h3 className="text-xl font-bold text-text-main mb-2">No vendors found</h3>
            <p className="text-text-muted max-w-sm">
                Try adjusting your filters or search terms to discover more vendors.
            </p>
        </motion.div>
    );
}

/* ─── Component ───────────────────────────────────────────────── */
export default function SearchResultsGrid({
    vendors,
    isLoading = false,
    relatedCategories = [],
    articles = [],
    onLoadMore,
    hasMore = false,
}: SearchResultsGridProps) {
    /* ---------- Loading State ---------- */
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        );
    }

    /* ---------- Empty State ---------- */
    if (!vendors.length) {
        return <EmptyState />;
    }

    return (
        <div className="flex flex-col gap-14">
            {/* ── Section A: Vendor Grid ── */}
            <section>
                {/* VendorCard is already a motion.div with cardVariants — pass directly */}
                <motion.div
                    id="search-vendor-grid"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {vendors.map((vendor) => (
                        <VendorCard key={vendor.id} {...vendor} />
                    ))}
                </motion.div>

                {/* Load More */}
                {hasMore && onLoadMore && (
                    <motion.div
                        className="flex justify-center mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button
                            type="button"
                            id="load-more-btn"
                            onClick={onLoadMore}
                            className="px-8 py-3 bg-white border border-[#f3e7ea] hover:border-primary text-text-main rounded-xl font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
                        >
                            Load more vendors
                        </button>
                    </motion.div>
                )}
            </section>

            {/* ── Section B: Related Categories ── */}
            {relatedCategories.length > 0 && (
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, ease: EASE }}
                >
                    <h2 className="text-2xl font-bold text-text-main mb-5 font-serif">
                        Explore related categories
                    </h2>
                    <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 custom-scrollbar">
                        {relatedCategories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/categories/${cat.slug}`}
                                id={`related-cat-${cat.slug}`}
                                className="flex items-center gap-4 min-w-[236px] p-2 pr-5 bg-white border border-[#f3e7ea] rounded-xl hover:shadow-md hover:border-primary transition-all group shrink-0"
                            >
                                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                                        role="img"
                                        aria-label={cat.imageAlt}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main group-hover:text-primary transition-colors text-sm">
                                        {cat.name}
                                    </h4>
                                    <span className="text-xs text-text-muted">
                                        {cat.count.toLocaleString()} listings
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── Section C: Planning Inspiration ── */}
            {articles.length > 0 && (
                <motion.section
                    className="border-t border-[#f3e7ea] pt-10"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: EASE }}
                >
                    <div className="flex items-center justify-between mb-7">
                        <div>
                            <h2 className="text-2xl font-bold text-text-main font-serif">Planning Inspiration</h2>
                            <p className="text-text-muted mt-1 text-sm">Tips and ideas for your perfect day</p>
                        </div>
                        <Link
                            href="/blog"
                            className="text-primary font-bold text-sm hover:underline whitespace-nowrap"
                        >
                            View all articles
                        </Link>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-7"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                    >
                        {articles.map((article) => (
                            <motion.article
                                key={article.slug}
                                variants={fadeUp}
                                className="flex flex-col gap-4 group cursor-pointer"
                            >
                                <Link href={`/blog/${article.slug}`} className="block rounded-xl overflow-hidden h-48 w-full">
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                        style={{ backgroundImage: `url('${article.imageUrl}')` }}
                                        role="img"
                                        aria-label={article.imageAlt}
                                    />
                                </Link>
                                <div>
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                                        {article.tag}
                                    </span>
                                    <Link href={`/blog/${article.slug}`}>
                                        <h3 className="text-base font-bold text-text-main mt-2 group-hover:text-primary transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                    </Link>
                                    <p className="text-sm text-text-muted mt-2 line-clamp-2">{article.excerpt}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </motion.section>
            )}
        </div>
    );
}
