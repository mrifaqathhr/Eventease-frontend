'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export interface VendorCardProps {
    id: string;
    name: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    rating: number;
    reviewCount: number;
    price: string;
    location: string;
    isFeatured?: boolean;
    badge?: string; // e.g. "Best Value", "Rising Star"
    tags?: string[];
    slug?: string;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: EASE },
    },
};

export default function VendorCard({
    id,
    name,
    imageUrl,
    imageAlt,
    category,
    rating,
    reviewCount,
    price,
    location,
    isFeatured,
    badge,
    tags = [],
}: VendorCardProps) {
    // Demo prototype wiring: route to search page since individual vendor pages aren't full built out
    const profileHref = '/search';

    return (
        <motion.div
            className="group bg-white border border-[#f3e7ea] rounded-2xl overflow-hidden flex flex-col h-full"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: '0 24px 48px rgba(27,13,17,0.12)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
            {/* Image */}
            <div className="relative h-60 overflow-hidden shrink-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                    role="img"
                    aria-label={imageAlt}
                />

                {/* Featured badge */}
                {isFeatured && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow-sm">
                        Featured
                    </div>
                )}

                {/* Other badge (Best Value, Rising Star, etc.) */}
                {!isFeatured && badge && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow-sm">
                        {badge}
                    </div>
                )}

                {/* Favorite button */}
                <button
                    type="button"
                    aria-label="Save to favourites"
                    className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        favorite
                    </span>
                </button>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors leading-tight pr-2">
                        {name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400 shrink-0">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}
                        >
                            star
                        </span>
                        <span className="text-slate-800 font-bold text-sm">{rating.toFixed(1)}</span>
                        <span className="text-text-muted text-xs">({reviewCount})</span>
                    </div>
                </div>

                {/* Location */}
                <p className="text-sm text-text-muted mb-3 flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        location_on
                    </span>
                    {location}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-[#fcf8f9] text-text-muted px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-[#f3e7ea] flex items-center justify-between">
                    <span className="text-sm font-semibold text-text-main">{price}</span>
                    <Link
                        href={profileHref}
                        className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                        View Profile
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                            arrow_forward
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
