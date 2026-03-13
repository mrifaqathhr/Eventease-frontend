'use client';

import { motion } from 'framer-motion';
import VendorCard, { type VendorCardProps } from '@/components/shared/VendorCard';

export interface VendorGridProps {
    vendors: VendorCardProps[];
    isLoading?: boolean;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const skeletonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

function SkeletonCard() {
    return (
        <motion.div
            variants={skeletonVariants}
            className="bg-white border border-[#f3e7ea] rounded-2xl overflow-hidden animate-pulse"
        >
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
        </motion.div>
    );
}

export default function VendorGrid({ vendors, isLoading = false }: VendorGridProps) {
    if (isLoading) {
        return (
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </motion.div>
        );
    }

    if (!vendors.length) {
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

    return (
        <>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {vendors.map((vendor) => (
                    <VendorCard key={vendor.id} {...vendor} />
                ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 mb-8">
                <nav className="flex items-center gap-2" aria-label="Pagination">
                    <button
                        type="button"
                        disabled
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#f3e7ea] text-text-muted hover:bg-[#fcf8f9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        aria-label="Previous page"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            chevron_left
                        </span>
                    </button>

                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            type="button"
                            className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-colors cursor-pointer ${page === 1
                                    ? 'bg-primary text-white shadow-md'
                                    : 'border border-[#f3e7ea] text-text-main hover:bg-[#fcf8f9]'
                                }`}
                            aria-current={page === 1 ? 'page' : undefined}
                        >
                            {page}
                        </button>
                    ))}

                    <span className="px-2 text-text-muted">…</span>

                    <button
                        type="button"
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#f3e7ea] text-text-main hover:bg-[#fcf8f9] transition-colors font-medium cursor-pointer"
                    >
                        12
                    </button>

                    <button
                        type="button"
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#f3e7ea] text-text-muted hover:bg-[#fcf8f9] hover:text-primary transition-colors cursor-pointer"
                        aria-label="Next page"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            chevron_right
                        </span>
                    </button>
                </nav>
            </div>
        </>
    );
}
