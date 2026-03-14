'use client';

import { useState, useMemo } from 'react';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogHeader, { BlogCategory } from '@/components/blog/BlogHeader';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogNewsletter from '@/components/blog/BlogNewsletter';
import type { BlogCardProps } from '@/components/blog/BlogCard';

// ─── Static Data ──────────────────────────────────────────────────────────────

const CATEGORIES: BlogCategory[] = [
    { label: 'Venues', icon: 'location_on', value: 'Venues' },
    { label: 'Photography', icon: 'camera_alt', value: 'Photography' },
    { label: 'Decor', icon: 'local_florist', value: 'Decor' },
    { label: 'Fashion', icon: 'checkroom', value: 'Fashion' },
    { label: 'Real Weddings', icon: 'favorite', value: 'Real Weddings' },
    { label: 'Catering', icon: 'restaurant', value: 'Catering' },
];

const ALL_POSTS: BlogCardProps[] = [
    {
        title: '10 Hidden Gem Outdoor Venues in Northern California',
        excerpt:
            "From secret redwood groves to private coastal estates, we've curated the most exclusive outdoor locations for your ceremony.",
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDM8yAGsvVqDZppgeEDlPSKhqxJbGdvEggapQ1l7fffHkI61vPvLgVsaeA1SEnsc7_ttX3RokD8-SMJg17TMF_GNUK4dVfcVouGh-Pbg65Kz8e7EqXvYFcB--aScocLk8hHxf4pMUi6JEmb9xBTMCNgz_QJUb04ah-DBYdFaGeqxeTled-TKP4d_Z1eNb454Gp4sWF5ZYYklbSYolUnr6whNxH4ufVwcKC8Dh5SmaYaK7I0P3DJABVDcdJqVQj3R3pRbP-JFHl42HSm',
        imageAlt: 'Couple walking through a floral garden wedding venue',
        date: 'Oct 24, 2023',
        readTime: '5 min read',
        category: 'Venues',
        href: '/blog/outdoor-venues-northern-california',
    },
    {
        title: 'The Rise of Minimalism in Bridal Couture',
        excerpt:
            'Clean lines, structural silhouettes, and understated elegance are defining the new era of bridal fashion for the modern woman.',
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCBg2HShb6STXH2KREyHnJ3-zveLWv67Cg-ojmyWXzmdEDUfdGGRDwgTh1z-TbFqVU0elI-DVF0ZnKsGa5BbRbL8RvSTs5UXb2uFVA_Z3sMHWpnHKi3U4U6JRPbtevHbR7m6S-YamXT9Vr4GgQ28i_NDQEy-7sl8keWJyWkWfu53qlQpozU7IFtubIuEQ7-EPXAErzwAEBnG6_CSYPvnmnWCH6yI5VhzV72IFPizs4h5NCMv9efzEW2sTbxSOjacsp-C42UgSemel1-',
        imageAlt: 'Elegant minimalist wedding dress detail',
        date: 'Oct 22, 2023',
        readTime: '7 min read',
        category: 'Fashion',
        href: '/blog/minimalism-bridal-couture',
    },
    {
        title: "Groom's Guide: Timeline for Suit Fittings",
        excerpt:
            "Don't leave it to the last minute. Here is a month-by-month breakdown of when to buy, tailor, and finalize your wedding day attire.",
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDQBnMum5xV16H2jZaSUd3D5X9PeVyBVra2R2ektJW3b2XVz6s9oCWXG93aH1HKHFisUnxmz3POkAQES-YrFkJSMRi79C20hojkeru8Fa9fPT-yX4Dl9ih0wHZeFn59-x_ZHK83PjtiBdtDw_xehXaS99tX6TV1-O1n7Z8cSc83snhwIjOq9miAISde6hEKmtR_Yw9hCHydgkbtvBen7AuPY0nVpsIIZupLajqmNniXVwp9T6kxPnf_wSLwyEUAxouGplTOzKIcJPKD',
        imageAlt: 'Groom adjusting tie in mirror',
        date: 'Oct 18, 2023',
        readTime: '4 min read',
        category: 'Fashion',
        href: '/blog/groom-suit-fitting-timeline',
    },
    {
        title: 'Sweet Trends: Alternative Dessert Ideas',
        excerpt:
            'Moving beyond the traditional cake. Explore donut walls, gelato carts, and personalized pastry stations that guests will love.',
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBibCCL_r6F0LYWa90blmQmAOItYgSRI3oLzaosq8ysD1933JtP2sxacxjvaAo0AO-4kvT5D4aafrBolYdU7nbfeWbpjCiSHRdRlwAiBR-caFd7UIKUiyKUxqyCjv06CKCdaN_FclEFBNXfI-1dxO5-2-nqv2rrn_ZAvpzylB4WWfDBxIe-1eALZYgSND5hbibaJQ-NJEoHNl0DHHsJ-brtTn671V_CIcthePR-96WtoX61AzkII5D6Lmj8rBrpCBTmEi2cEkhzHaXy',
        imageAlt: 'Wedding cake with floral decorations',
        date: 'Oct 15, 2023',
        readTime: '6 min read',
        category: 'Catering',
        href: '/blog/alternative-dessert-ideas',
    },
    {
        title: 'Seasonal Blooms: A Guide to Spring Florals',
        excerpt:
            'Maximize your budget and minimize environmental impact by choosing flowers that are naturally in season for your spring wedding.',
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDeg3RViylJ-6Vgtn-ftQsTZJUMxsx0dt4h_AbTeuhcJ4TOrtPZfqRu8xEQy37_Nx9oqqkVIDnG5Ck2MmLjjDlHcUJK4x07UM7h9CgJNURsmUTJgeS3v7cDPjrEr3DSQb54r_EAatgF0TyuF2UIKQzWc8occQf9KclMaJEk-kj7X6DIRVlbtlsmtL3pcTyMyBrTW8BKB_CVGpZoeinFhjSi_HmEcJ4u9wfWLUMXiCQpbcK0SmLdTE904G53OkOWP7b1e08AVfdyQNYr',
        imageAlt: 'Bride holding a bouquet of wildflowers',
        date: 'Oct 10, 2023',
        readTime: '5 min read',
        category: 'Decor',
        href: '/blog/spring-florals-guide',
    },
    {
        title: 'Hidden Costs Every Couple Should Know About',
        excerpt:
            'From service charges to overtime fees, we break down the most common unexpected expenses that can break your wedding budget.',
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDuolKu3KZFORTT8WKi3iyf7PUyjojEVyJj9Ugz9lUZLnf5VfRCUcvzoPasknXFRxb3X4sbSOvzSsrbL4MeN60OiskiVKTv3rqJ12pAvTcjV9iw2Y17Sj0MyG94sLlTeKInt1srk2w74htjEbjhZtZkbKhxmZ8JY0Y3BfdWqxAy03RxA0C7pY1n44B1u87TH3lmf179_N3eY0hrTNihFuxllG2i4TAAgR2WA1whLvdHTlIatBQ3T0CuEwvKwLLCkX5hheysRd7v2cPI',
        imageAlt: 'Wedding rings on a wooden table',
        date: 'Oct 05, 2023',
        readTime: '8 min read',
        category: 'Real Weddings',
        href: '/blog/hidden-wedding-costs',
    },
    {
        title: 'How to Capture Golden Hour Magic at Your Wedding',
        excerpt:
            "The hour before sunset produces the most ethereal wedding photographs. Here's how to plan your timeline to make the most of this fleeting light.",
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBQAh7IR0RUvihYc82mYJQUkmJdXfDAGuehDjZLSbRuIUTLbv4ksvbRmPN8bYsJea0pAob7WD9E5mBnmzV2EBZOjRvdQHhhr3q_p4xCRpPbFtLHh09MwYDLiJdZ9Y_-3JtB2zTg3jZFNlfU3yP1AK_fn_TZmzkavEbf621Q8Gf0vAuMWTgCBDw32pdT7ofRMySwn3XscNhLmSQ-NLdSy00s2vj4Q5aAa2jJwEPDre3TRFPF8PpyeOsta6Er3b0Dg0STqU1ku9z2dgc9',
        imageAlt: 'Couple at golden hour surrounded by warm light',
        date: 'Sep 28, 2023',
        readTime: '6 min read',
        category: 'Photography',
        href: '/blog/golden-hour-wedding-photography',
    },
    {
        title: 'Bohemian vs. Romantic: Choosing Your Wedding Aesthetic',
        excerpt:
            'Torn between laid-back organic textures and classic romantic elegance? We help you define your signature wedding style with practical tips.',
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAJnkKTDhHv3o1Fxl4uJIVB4zV0Cz9x9kmuyeYkmUbNCyx2N1t-uKl93mUg3UMnX_2HjjyYDZdQLmGGq_wJihY5pLx66XtuoXFv8sbnY7zga9uTjRANx7K06dIqmtxNDgBXf1gQNIiMA62mSRt6owlagf5RZBxnU4HjmHBcLcUd6B03_SDA7y3LbOAMSXeVdHtrlzM2aoe0bfJz_7eGuNJqZEmYJ_v8PbqwIaXyRqP42rG7LCbbrQKbmWLAQgRtM728bx6qMLhLAKvQ',
        imageAlt: 'Beautiful wedding decor with bohemian elements',
        date: 'Sep 20, 2023',
        readTime: '7 min read',
        category: 'Decor',
        href: '/blog/bohemian-vs-romantic-aesthetic',
    },
    {
        title: 'A Real Wedding: Priya & Aryan at Udaipur Palace',
        excerpt:
            'A fairytale lake-side ceremony blending traditional Rajasthani rituals with modern luxury. An inside look at every breathtaking detail.',
        featuredImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCyZTVGY7wLvc1pStpujoDQK_uDCJxI4CEJhJUA3RF_Sr1Ia5J5slojOn9RyAKavNDfflIrNBW5oskXXOTmUz_zHt9RkbLm32tBk5ya3QuXCHxjM399TI5bAF7nhv0TmIaJJxyolFpDNgYUVJArVD1K9OYMR9E1NmH3BZ_sb5fcQCLUx-Y8TjMNZar-LmswS-X3H7mLJijy6jP88JgdoWvPFtJyv5jyQQhGoZxua1kiR7B3PI6fHyEG_A5I4hKP8d19jTofZArrhEYq',
        imageAlt: 'Bride and groom at a royal palace wedding venue',
        date: 'Sep 15, 2023',
        readTime: '10 min read',
        category: 'Real Weddings',
        href: '/blog/real-wedding-priya-aryan-udaipur',
    },
];

const INITIAL_DISPLAY_COUNT = 6;

// ─── Client Component ─────────────────────────────────────────────────────────

export default function BlogPageClient() {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [sortOrder, setSortOrder] = useState<string>('newest');
    const [displayCount, setDisplayCount] = useState<number>(INITIAL_DISPLAY_COUNT);

    const filteredPosts = useMemo(() => {
        let posts =
            activeCategory === 'all'
                ? ALL_POSTS
                : ALL_POSTS.filter((p) => p.category === activeCategory);

        if (sortOrder === 'popular') {
            posts = [...posts].sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
        }

        return posts;
    }, [activeCategory, sortOrder]);

    const visiblePosts = filteredPosts.slice(0, displayCount);
    const hasMore = displayCount < filteredPosts.length;

    const handleLoadMore = () => setDisplayCount((prev) => prev + INITIAL_DISPLAY_COUNT);

    const handleCategoryChange = (value: string) => {
        setActiveCategory(value);
        setDisplayCount(INITIAL_DISPLAY_COUNT);
    };

    return (
        // Break out of the layout's max-width + padding — same pattern as categories page
        <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8 overflow-x-hidden">
            {/* ── Featured Post Hero ──────────────────────────────────────────────── */}
            <FeaturedPost
                title="The Ultimate Guide to Modern Micro-Weddings in 2024"
                excerpt="Discover why intimate celebrations are taking over and how to plan a luxurious small-scale event without compromising on style."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuA_fWZu-QnK77E6cPgjUyV1DR2e_uSYgWrzPWujJ-xP-UBaJ0ZfPKkxiwFAZcjxiBbGd4V198r5-gz3ntZJT3wdq96rrRzbrs5wH62eY_J8q4Hq0ilrNrGL4PZzGCu6tnTIAoZPGoHa0XgI_v8IRhW2t9mUjAGvrI3Whbelax7kt7_hXJqB7JujCMY0BPrEcjySB4Ij7yLczuZX0nD-_codhrRZYLx9Hw7poAc67ny96ovRd0tzfqLr4I_37uHs6mazMmN_e-0UfAtu"
                imageAlt="Intimate, luxurious outdoor micro-wedding setup under string lights"
                category="Featured Story"
                href="/blog/micro-weddings-guide-2024"
            />

            {/* ── Category Filter Bar ─────────────────────────────────────────────── */}
            <BlogHeader
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                onSortChange={setSortOrder}
                categories={CATEGORIES}
            />

            {/* ── Article Grid ────────────────────────────────────────────────────── */}
            <BlogGrid posts={visiblePosts} onLoadMore={handleLoadMore} hasMore={hasMore} />

            {/* ── Newsletter ──────────────────────────────────────────────────────── */}
            <BlogNewsletter />
        </div>
    );
}
