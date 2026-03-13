'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CategoryIndexCard, {
    CategoryIndexCardProps,
    cardVariants,
} from '@/components/category/CategoryIndexCard';

// ─── Ease Curve ───────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Motion Variants ──────────────────────────────────────────────────────────

const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const heroSubtitleVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay: 0.15 } },
};

const heroSearchVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.28 } },
};

const sectionHeadVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const gridContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const popularTagsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const tagVariant = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

interface PopularTag {
    label: string;
    icon: string;
    href: string;
}

const popularTags: PopularTag[] = [
    { label: 'Wedding Venues', icon: 'location_on', href: '/categories/venues' },
    { label: 'Photographers', icon: 'camera_alt', href: '/categories/photographers' },
    { label: 'Caterers', icon: 'restaurant', href: '/categories/catering' },
    { label: 'Planners', icon: 'event_note', href: '/categories/planners' },
    { label: 'Florists', icon: 'local_florist', href: '/categories/florists' },
    { label: 'DJs & Music', icon: 'music_note', href: '/categories/djs-music' },
    { label: 'Makeup Artists', icon: 'brush', href: '/categories/beauty-makeup' },
];

const planningEssentials: CategoryIndexCardProps[] = [
    {
        name: 'Venues',
        description: 'Barns, ballrooms, gardens, and unique spaces for your ceremony.',
        ctaLabel: 'Browse Venues',
        href: '/categories/venues',
        count: '2.4k+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAJnkKTDhHv3o1Fxl4uJIVB4zV0Cz9x9kmuyeYkmUbNCyx2N1t-uKl93mUg3UMnX_2HjjyYDZdQLmGGq_wJihY5pLx66XtuoXFv8sbnY7zga9uTjRANx7K06dIqmtxNDgBXf1gQNIiMA62mSRt6owlagf5RZBxnU4HjmHBcLcUd6B03_SDA7y3LbOAMSXeVdHtrlzM2aoe0bfJz_7eGuNJqZEmYJ_v8PbqwIaXyRqP42rG7LCbbrQKbmWLAQgRtM728bx6qMLhLAKvQ',
        imageAlt: 'Beautifully decorated wedding reception hall',
    },
    {
        name: 'Photographers',
        description: 'Capture every moment with top-rated wedding photographers.',
        ctaLabel: 'Find Photographers',
        href: '/categories/photographers',
        count: '1.8k+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBQAh7IR0RUvihYc82mYJQUkmJdXfDAGuehDjZLSbRuIUTLbv4ksvbRmPN8bYsJea0pAob7WD9E5mBnmzV2EBZOjRvdQHhhr3q_p4xCRpPbFtLHh09MwYDLiJdZ9Y_-3JtB2zTg3jZFNlfU3yP1AK_fn_TZmzkavEbf621Q8Gf0vAuMWTgCBDw32pdT7ofRMySwn3XscNhLmSQ-NLdSy00s2vj4Q5aAa2jJwEPDre3TRFPF8PpyeOsta6Er3b0Dg0STqU1ku9z2dgc9',
        imageAlt: 'Close up of wedding photographer holding camera',
    },
    {
        name: 'Catering',
        description: 'Buffets, plated dinners, and food trucks for every taste.',
        ctaLabel: 'Browse Caterers',
        href: '/categories/catering',
        count: '950+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBodL7BXAe4eP1i7yta-Qb8g537_UDE3n2ELdyrhi7uDzPccFKl2IfYCxP3cn_7G_PU76rfSOp2h-g4hDoa7oQkWg15636Cxhu6uVMWSrCHK4YWeCbi6LOlRZBRG4N9C-kmoa2-6EJT1PSGXlgjGLFqE4XUFQbZKA_qp8Qahz8UC-6iVuwkYVpQyfq8w6VVIF5t3-t15OKLt9KJfDeP79v6GI1d-BaeGjgASJtT0UPDdxWKViUqSyJtefusoTL7-MfGG5tmVUwGjBDZ',
        imageAlt: 'Delicious gourmet catering food display',
    },
    {
        name: 'Wedding Planners',
        description: 'Full-service planning, partial planning, and day-of coordination.',
        ctaLabel: 'Find Planners',
        href: '/categories/planners',
        count: '600+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDviPDZztW4EGBws0yDpyzedofIrCZoLoWM8oYQ3OYi9mREP0yB7jOkg8-T1b7BpLGHjXlZSREq-OLEu_S0l4UkJT68oz6Q4U4E61P0sN99aqEzYB_5uxt-RrdRToMqfS2m2MkjP2aj14H3fQ8IHhfYyTQcAu2Wq3SL-Y_jd55m66jEu3I6voDOKN2sG1zPxqTcM8pkASZoHCur37kNO6AE1coAWeWY1K4NObr9V3GZdp_A6Uwk2wchXU2c-99a7aAv3-Mzbs027MYM',
        imageAlt: 'Wedding planner organizing table layout',
    },
];

const dayOfServices: CategoryIndexCardProps[] = [
    {
        name: 'Florists',
        description: 'Bouquets, centerpieces, and floral installations.',
        ctaLabel: 'Browse Florists',
        href: '/categories/florists',
        count: '1.2k+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBmnAIXzw0Ie_faJmu3_EJeJQKasJoNhHqkIe6avTuVBFt2fdqrK2MvwcoXPsLwHnR011YKTWNq8-A3BgUOJ90fYixDzXhpXJpdrEAX0BsGACBMLyk-aZXHeCCZvm_7NfOGINe49UjIX4ZoVK0wlJpq2sCqqaTS_CKD0BavivzdKt3g69qXuSlCk5LUw4r7yWLRIjY9KUJWVLHSqBlQcxxLhmcEWoVD4nFfwEH0bzf7apcJ4N8C5WRrLDCV237M6a-7x_fzBXI-TJ-B',
        imageAlt: 'Colorful wedding bouquet flowers',
    },
    {
        name: 'Beauty & Makeup',
        description: 'Hair styling and makeup artistry for you and your party.',
        ctaLabel: 'Find Artists',
        href: '/categories/beauty-makeup',
        count: '800+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCyZTVGY7wLvc1pStpujoDQK_uDCJxI4CEJhJUA3RF_Sr1Ia5J5slojOn9RyAKavNDfflIrNBW5oskXXOTmUz_zHt9RkbLm32tBk5ya3QuXCHxjM399TI5bAF7nhv0TmIaJJxyolFpDNgYUVJArVD1K9OYMR9E1NmH3BZ_sb5fcQCLUx-Y8TjMNZar-LmswS-X3H7mLJijy6jP88JgdoWvPFtJyv5jyQQhGoZxua1kiR7B3PI6fHyEG_A5I4hKP8d19jTofZArrhEYq',
        imageAlt: 'Makeup artist applying makeup to bride',
    },
    {
        name: 'DJs & Music',
        description: 'Keep the dance floor moving with DJs and live bands.',
        ctaLabel: 'Browse Music',
        href: '/categories/djs-music',
        count: '1.5k+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCPEuQbRc4ZOvkapUA_hRnVRV2ubXFF1lgio4VEW4cgUZD6BzV1iNMVrN47lI0NiCWkMDcKRGdTDc4cqDToVUqJMOkqutV8WS6b493pnE3bkqhwog17KbsZHNZHbJc8GJtFn5L-lOyr9kZl2FbqE48rDdyhFvf97mJ2Tfngz_YDkJwPAbsbF0I-TQwc_OcVp8aS4gm4rqpUAl8UbgpuzL-rHv86cgn43PETlRFT4_g-zAgpG743x_y9auEUT5fTbcS1WbgGY8RgBASp',
        imageAlt: 'DJ mixing music at a party',
    },
    {
        name: 'Cakes & Desserts',
        description: 'Custom cakes, dessert bars, and sweet treats.',
        ctaLabel: 'Find Bakers',
        href: '/categories/cakes-desserts',
        count: '400+',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDXS3RZ57Dht6jjrHrxjY8mYPcQDUa_trtyeiaDSNOXZWAi-_Rzg8WvPcGlrSt_x8px1R5Hw96bIYqYucP3qPAErDdu9PKxyEcJD2SUq1MRJW3AtgENtst5hHJFoWof6818pLhaTlgFr-MLhr7nj9umOZJtxWl_rXPRNyeRm9tamCgnCOf5kVH7yr5qv5DNs8Ch2wkipSjuBdz5AOwU74dePoweKkrXMK920d3dy-mxqN1n8oFT-HXc0vIXuwavcDXOzSJgu5pjz0UC',
        imageAlt: 'Tiered wedding cake with floral decoration',
    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CategoriesPage() {
    return (
        // Break out of the layout's max-width + padding so the hero can be full-bleed
        <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8 overflow-x-hidden">

            {/* ── Hero Search ─────────────────────────────────────────────────── */}
            <div className="px-4 py-6 md:px-10 lg:px-20">
                <div
                    className="relative flex min-h-[520px] w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat p-8 text-center shadow-lg"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.52) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgqCFHap9Rnd1NjSz6dctn_YjHl_M_wXi7YLspSYVu3Y3byAMo_sNm9lRR3kAHM7FiNIMSUapP6DkQZUTr8h_JLzPYO_RL1bcPPKjmXdxzCWBKZSFf1MoTbkrgg30ZPedClTaGIkbZJ5zsA2xMwTBMw9GixxDWKM5bHiG4RA692gaBofBEIVfa91F1E-IkeQ5vKWzgpATCVayzlqRu0kCd0NTrzVW-dLOg8W0Ast3WCK6G5I_JcNoHb2OC-urZOvcZbLtqRCVBTfX2')`,
                    }}
                >
                    {/* Heading */}
                    <motion.div
                        className="flex max-w-2xl flex-col gap-4"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            variants={heroVariants}
                            className="font-serif text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
                        >
                            Find Everything You Need{' '}
                            <br />
                            <span className="text-primary-light">For Your Perfect Day</span>
                        </motion.h1>

                        <motion.p
                            variants={heroSubtitleVariants}
                            className="text-lg font-medium leading-relaxed text-white/90 md:text-xl"
                        >
                            Explore thousands of top-rated local vendors, venues, and services curated for your
                            unique celebration.
                        </motion.p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        className="mt-4 w-full max-w-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={heroSearchVariants}
                    >
                        <label className="group flex h-14 w-full items-center overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-primary md:h-16">
                            <div className="flex h-full items-center justify-center pl-5 text-text-muted">
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Search for florists, rustic barns, or jazz bands..."
                                className="h-full flex-1 border-none bg-transparent px-4 text-base text-text-main placeholder:text-text-muted/60 focus:outline-none focus:ring-0 md:text-lg"
                            />
                            <div className="pr-2">
                                <button
                                    type="submit"
                                    className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary-dark md:h-12"
                                >
                                    Search
                                </button>
                            </div>
                        </label>

                        {/* Trending Pills */}
                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                            <span className="text-sm font-medium text-white/80">Trending:</span>
                            {['Barn Venues', 'Live Bands', 'Photobooths'].map((pill) => (
                                <a
                                    key={pill}
                                    href="#"
                                    className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/30"
                                >
                                    {pill}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Main Content ─────────────────────────────────────────────────── */}
            <div className="mx-auto max-w-7xl px-4 py-8 md:px-10 lg:px-20">

                {/* ── Popular Categories Tags ───────────────────────────────────── */}
                <div className="mb-14">
                    <motion.div
                        className="mb-6 flex items-center justify-between"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={sectionHeadVariants}
                    >
                        <h2 className="font-serif text-3xl font-bold text-text-main">Popular Categories</h2>
                        <Link
                            href="/categories"
                            className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                        >
                            View All{' '}
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-3"
                        variants={popularTagsContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                    >
                        {popularTags.map((tag) => (
                            <motion.div key={tag.label} variants={tagVariant}>
                                <Link
                                    href={tag.href}
                                    className="group flex items-center gap-2 rounded-full border border-background-dim bg-white py-2 pl-3 pr-4 transition-all hover:border-primary/30 hover:shadow-sm"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-[16px]">{tag.icon}</span>
                                    </div>
                                    <span className="text-sm font-medium text-text-main transition-colors group-hover:text-primary">
                                        {tag.label}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Planning Essentials ───────────────────────────────────────── */}
                <section className="mb-16">
                    <motion.div
                        className="mb-8 border-l-4 border-primary pl-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={sectionHeadVariants}
                    >
                        <h3 className="font-serif text-2xl font-bold text-text-main">Planning Essentials</h3>
                        <p className="mt-1 text-text-muted">
                            Foundational vendors to book first for your big day.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {planningEssentials.map((cat) => (
                            <CategoryIndexCard key={cat.name} {...cat} />
                        ))}
                    </motion.div>
                </section>

                {/* ── Day-of Services ───────────────────────────────────────────── */}
                <section className="mb-16">
                    <motion.div
                        className="mb-8 border-l-4 border-primary pl-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={sectionHeadVariants}
                    >
                        <h3 className="font-serif text-2xl font-bold text-text-main">Day-of Services</h3>
                        <p className="mt-1 text-text-muted">
                            The details that bring your celebration to life.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {dayOfServices.map((cat) => (
                            <CategoryIndexCard key={cat.name} {...cat} />
                        ))}
                    </motion.div>
                </section>

            </div>
        </div>
    );
}
