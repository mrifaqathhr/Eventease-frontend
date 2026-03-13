'use client';

import { useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import SearchHeader from '@/components/search/SearchHeader';
import GlobalFilterSidebar, {
    type PriceTier,
    type StyleOption,
} from '@/components/search/GlobalFilterSidebar';
import SearchResultsGrid, {
    type RelatedCategory,
    type InspirationArticle,
} from '@/components/search/SearchResultsGrid';
import type { VendorCardProps } from '@/components/shared/VendorCard';

/* ─── Mock data (replace with Appwrite queries) ─────────────── */
const MOCK_VENDORS: VendorCardProps[] = [
    {
        id: '1',
        name: 'Lumina Weddings',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Js7XAs3Z-3dhqGP9Cl7Fp33eNmw7ya0x6ewQ4XVLjb-QRszPMtKNhKKxrMuKbMC3_jAem3uUdolFnfx7REj9HVIGqAeFIYwNef7oFwVb58hBOA0ugDsZXPlJJ6RJvsw8G5L58_zh72McCaXjXcjg5I3QTXHFBB57M70xPDELOLmz962gtc4z2Qdlju4fhq9eR3SmFyLW88mGzPmOMGzt9o1ptW5stHoeFxvHbe8aSra_jdUC944JpLx_CPCKWb27Nsug9tUpf9Kl',
        imageAlt: 'Elegant wedding couple holding hands in a field',
        category: 'Photography',
        rating: 5.0,
        reviewCount: 124,
        price: 'From $3,500',
        location: 'San Francisco, CA',
        isFeatured: true,
        tags: ['Fine Art', 'Editorial'],
        slug: 'lumina-weddings',
    },
    {
        id: '2',
        name: 'Forever Captured',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC7vXH3zmM_8muZZlj6lX0dRjcjwpdtcF3niHpM6gXfmSftnlUMaQfRYXKUaHzxZxyhyzwPtWcdOJfVb_3cZ5Juevz2hitOY4_vX9UMeBzj9IqOI-DArm2KPl8hy9d8-Z0yxzEpWtAjROTy_OxCZRh10TeiOkF0GBqbY2ZgIrwdXaTmOguzZgANAl1op5V6lKNy0qlHNseodPMeez6MfPrmlqpeKnuk9Ka0SOmgmklWmPTBQwbadlij9CxO9DMWI3WYLHuCnBPUYNij',
        imageAlt: 'Black and white photo of bride and groom kissing',
        category: 'Photography',
        rating: 4.9,
        reviewCount: 86,
        price: 'From $2,800',
        location: 'Napa Valley, CA',
        tags: ['Documentary', 'Candid'],
        slug: 'forever-captured',
    },
    {
        id: '3',
        name: 'Golden Hour Photo',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCg_6vvMLhkiT0AF38LX6dTRhCq36cmHixAUgeDqH3FKQp7jK3Ty9tMtSj0AYefaHM99BkMfUMij27ywGDlYSWyMGetBJNrC4EliSYKFGMe7VtOD3it01B1u1Fq35S76_glygY-rFtosAqdDZ93Y73nAUdmGReHfQBP2dgXUbj4xVjbSCZNapovNy_RvjBFOQwWklcjO1oxWgCuK5Kik1o2FWy2flmoLbarypZ4o5ijNg_7Mo4zA_YLmlY5p-8uYlBPSTaRB9R1nshH',
        imageAlt: 'Bright airy wedding venue setup with flowers',
        category: 'Photography',
        rating: 4.8,
        reviewCount: 42,
        price: 'From $3,200',
        location: 'Sonoma, CA',
        tags: ['Natural Light'],
        slug: 'golden-hour-photo',
    },
    {
        id: '4',
        name: 'Velvet Lens',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCEMXSRoCsFFW53nClQaj-6QALCbof7ZE6h3HcIE_F-GsAInUB8AW-mo4jN4MPd2GvrVBTPH2-wHFQ42TqgGNjFzY-lP2C04T9zlIycbbZBXg7qHmcd3XRu8zGxrZmdjG0xZAy8UNyeVZto9nC3kUZRBokfAj_qmb_HRV_k2OErBwoqFPBjoBOUXmosLV7NkaESd5tMDttp_dhlK_6ZmxzelzdRyS4Tugv9dM82mI9Br01NAVxTcvARGLBB7wov5AZ2wZv6q47AkWvo',
        imageAlt: 'Close up of wedding rings on lace fabric',
        category: 'Photography',
        rating: 5.0,
        reviewCount: 15,
        price: 'From $2,500',
        location: 'Oakland, CA',
        tags: ['Moody', 'Cinematic'],
        slug: 'velvet-lens',
    },
    {
        id: '5',
        name: 'Moments & Memories',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDKO6Ql-RaPztI2NxeNLOGyeL3-h1j6ANnPQ8o5st1Un9gJsKGO39_ZhRxrj-PXMLvMXoHzC0DKJutxTIyj_XdWVr2qAjfTVbYeXS-C-29IfZIpxDTyGeIFgn_W2RTUTK1l3TzP6i-IIp2wsOPVcRAzVUj0Qbv3ITU21YeUaoupak7OB08Yz2x4iALDgd996lVVKfDBVmx6txTk22a0I-6EvFa_pJiXCpH3aCyxI40N-ZSEc1-6oPH9Ky9tfDCaWYjI_LNhz5WXc0Ux',
        imageAlt: 'Wedding reception table setting with candles',
        category: 'Photography',
        rating: 4.7,
        reviewCount: 56,
        price: 'From $3,000',
        location: 'San Jose, CA',
        tags: ['Classic'],
        slug: 'moments-and-memories',
    },
    {
        id: '6',
        name: 'Ethereal Snaps',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCRn7_J6XQvRnowPf6gW0iLo-gbyXAWTKIqcyzcYJ9USFimLq-K6ejiq9-Ggvj8cuKDAyKoCl_Ku0koqxAffB8W6qzrd8ZIptmc-sRXFvMAUM7Lb0pBYftUE5-espgoDh9w8orVBTsRglmqGuB2Q8LDh-ujS0aA-MqHCADaOhdUgmRmH8IcqnZ_KAq5OVYA4IgvDVZO69GerZAyWFxQHEVIH58-sLBxAx3JPUjiRJxYf_1lnwUs8s_1HBLUAdDCjOv4Q452e334eKLy',
        imageAlt: 'Bride holding bouquet of white roses',
        category: 'Photography',
        rating: 4.9,
        reviewCount: 203,
        price: 'From $4,200',
        location: 'San Francisco, CA',
        badge: 'Top Rated',
        tags: ['Artistic', 'Film'],
        slug: 'ethereal-snaps',
    },
];

const RELATED_CATEGORIES: RelatedCategory[] = [
    {
        slug: 'venues',
        name: 'Venues',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBtGOyu17WuehbCis9QUc0pzK3rI7hz59vacCKnqMlH7HnuUt0Me9nY5kE7r5b64OmZLBGdJNAUY3ncYAblv5v9BBNJSLWnayHuD80MJOet24E9EGjhu-CmCmVmtbim0l7YTbUEAqoOZrnJXH-aywA1aPVesa2Dp1TMLKjBwOLd-f1dOez7IiT9yJsFrGALwHS8gbeOtZmzldYy-o61-1pUPOD32U2EZACQ5oaPST08a5xC4NepcneIFpsX5Jm3zctdl8cv2OIemr5b',
        imageAlt: 'Floral wedding venue setup',
        count: 1204,
    },
    {
        slug: 'florists',
        name: 'Florists',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDNRjqNp26SRiO-VdrkATfvCaepONooawWnfPzEoC_LPm-RHQy_pnCou3tlx1dEdDvo14ntOP00c6OZ8PMZiXHohWCDCJch1al4tKEUtKxrgnd0jOMlX5euUl7d5fsxhxPwMSn--rgiTunlocGbj97EJKeLDvvE6cY_2Ys75pEqAtrrD5gW4WKWtOSH13_kCrie9AXDdDq3yuYkS58YmW1hwGBk5_VRnybdL3z6n1qj4ZxSxYqTfYOUOewsbeGZnLncm2rj7jcXzJdh',
        imageAlt: 'Wedding flower bouquet',
        count: 842,
    },
    {
        slug: 'music-djs',
        name: 'Music & DJs',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFgxJrQzGJonfRRwFCq0SA21MsO1q6NM4j4cU7Oy2AnCmxhut0-_RA8Wzfr7ZDT5vamVtIqOAoO2xURUvzFuTRqCZymkVyU815mMdE6n2yUFoT0ADp4991kXT167hATfWq5Oj_wWzq2k-39MtgBMA9MzT4XelFgXKva93VrBk1pi2X2usiPLzYVLx9gd6dD35H53YHO8MeNqWjQmFauwlE5qj_p6R40MLFPsmPoZzjSd7ldFNNrd1BZorFOlkZDqLUDCG9ZbDVbiR',
        imageAlt: 'DJ mixing music at wedding',
        count: 530,
    },
    {
        slug: 'cakes',
        name: 'Cakes',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBc0CecBY362HH9uiFTtecjyHU1YE__7eutwNvb6dYFNaDxnTs6aaMj08Jk-_nglJUPreRRXhGCnqIAbnRTHpPxL3Mct12MlgHdIW6u_o90NjfhI76qLEY0iLyTGTGGYuzODRejAc5HaTDnnVifoOY1MK5kDZitUQ0-mTC9oOgIy-Nw7U1fc5FY5JVkV1hx5Ia2wazJoPX1fBhtPCd2vd0uMi4YOuCqHd8IjLb52t2lmgl4Le56_GqoaFvJaJecEUQBK7sbVZP-8eSo',
        imageAlt: 'Wedding cake with flowers',
        count: 329,
    },
];

const INSPIRATION_ARTICLES: InspirationArticle[] = [
    {
        slug: '10-questions-wedding-photographer',
        tag: 'Photography Tips',
        title: '10 Questions to Ask Your Wedding Photographer Before Booking',
        excerpt:
            'Finding the right photographer is crucial. Make sure you cover these essential topics during your consultation to ensure a perfect match.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAQhr-rzVMasbEWSbQ3yOBxAslXU_0rd5CcRgZRhOVUiiQvSebFjgilSFqAsFleqhWp3hRf5AsjOlbhDiMF_zmDiddcIaequzeaEBjd8cBdBQZ4G3171hdJBJD4qJ5Z4NGg8lG9lLp9-Bk_v8puGuEzj-NgRDLkEqy0Hg2BQT_JKIlIdASL0Dw1-LuYSDmXlI56cT-remAjW5kzJvXFI5oDbxLZohFpNDsAfVwN3CFslFReSdzmGHMW_hGn3ClI_uOazWCpcyJE4B0M',
        imageAlt: 'Wedding couple walking on beach at sunset',
    },
    {
        slug: 'timeline-guide-booking-vendors',
        tag: 'Planning',
        title: 'Timeline Guide: When to Book Your Vendors',
        excerpt:
            "Don't let your dream vendors get booked up. Use our comprehensive 12-month checklist to stay ahead of the game.",
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBDBKRgSvTdLaEOuL4JC-XiZuInxRA8qQgzDcxJOriQfa7FLZwaGIRigqTYmCP3EvWErihuc4GB8QB0Cy4IuPfcM47cXWBzI4NmV95njKDuGoZwK_0_5BV7E2az2iZ8PYfM4JIWxQQQINDAaYzJ9Hmr7AABaLxUu2VgkFG4JWRXP6E2GlWmLE4XvIcNN-2YnLqhmG4oV3FZzAkKO1XY_MFh_jVmPdxFbKXMcbMStDpR7YFUc5ppYwGYzGNU1FQmR_t4Fu7bzZy_3xoZ',
        imageAlt: 'Bridal party laughing together',
    },
    {
        slug: '2024-wedding-photography-trends',
        tag: 'Style Trends',
        title: "2024 Wedding Photography Trends You'll Love",
        excerpt:
            'From direct flash party shots to blurred motion romance, discover the aesthetic trends defining modern wedding albums.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBIRVw2H-wTNGQYFZnUiRLonMaVjJJaLjx7HQ1a2yu39Avs29aZxeLmyBhXFnWK8nXazpAWNI92LHbutSsnMnbxWpfXndxNbrUmeE4O-RAcK2vI9wvpz_nnHeCuPXXgKIYcFD9SPxl1mJr90_wqvBB6lpcaQLVRzTa9V1Jm1JI7dg5w9uCB25ORF6jttTIRWSTwP1F6PeU8FHZL56OxDU1CJd6qvFJdRrUBMkY-MBj9q6fR-t3K8kwfWdJ2u5q9t7dRuw-QoG1fFkwt',
        imageAlt: 'Wedding dress hanging by window',
    },
];

const STYLE_OPTIONS: StyleOption[] = [
    { label: 'Traditional', count: 48 },
    { label: 'Photojournalism', count: 31 },
    { label: 'Fine Art', count: 24 },
    { label: 'Dark & Moody', count: 18 },
    { label: 'Cinematic', count: 15 },
    { label: 'Natural Light', count: 22 },
];

/* ─── Inner Client Component ─────────────────────────────────── */
function SearchPageContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') ?? '';
    const locationParam = searchParams.get('location') ?? '';

    /* ── Filter State ── */
    const [filterLocation, setFilterLocation] = useState(locationParam);
    const [selectedPriceTiers, setSelectedPriceTiers] = useState<PriceTier[]>([]);
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState('');
    const [sortBy, setSortBy] = useState('featured');

    /* ── Handlers ── */
    const handlePriceTierToggle = useCallback((tier: PriceTier) => {
        setSelectedPriceTiers((prev) =>
            prev.includes(tier) ? prev.filter((t) => t !== tier) : [...prev, tier],
        );
    }, []);

    const handleStyleToggle = useCallback((style: string) => {
        setSelectedStyles((prev) =>
            prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style],
        );
    }, []);

    const handleReset = useCallback(() => {
        setFilterLocation('');
        setSelectedPriceTiers([]);
        setSelectedStyles([]);
        setSelectedRating('');
    }, []);

    const handleApply = useCallback(() => {
        // In production: trigger Appwrite query with active filters
        console.info('[SearchPage] Applying filters', {
            filterLocation,
            selectedPriceTiers,
            selectedStyles,
            selectedRating,
        });
    }, [filterLocation, selectedPriceTiers, selectedStyles, selectedRating]);

    return (
        <div>
            {/* ── Search Header ── */}
            <SearchHeader
                query={query}
                location={locationParam || undefined}
                totalCount={MOCK_VENDORS.length}
                sortBy={sortBy}
                onSortChange={setSortBy}
            />

            {/* ── Two-column layout ── */}
            <div className="flex gap-8 items-start">
                {/* Filter Sidebar */}
                <GlobalFilterSidebar
                    location={filterLocation}
                    onLocationChange={setFilterLocation}
                    selectedPriceTiers={selectedPriceTiers}
                    onPriceTierToggle={handlePriceTierToggle}
                    styleOptions={STYLE_OPTIONS}
                    selectedStyles={selectedStyles}
                    onStyleToggle={handleStyleToggle}
                    selectedRating={selectedRating}
                    onRatingChange={setSelectedRating}
                    onApply={handleApply}
                    onReset={handleReset}
                />

                {/* Results Grid */}
                <div className="flex-1 min-w-0">
                    <SearchResultsGrid
                        vendors={MOCK_VENDORS}
                        relatedCategories={RELATED_CATEGORIES}
                        articles={INSPIRATION_ARTICLES}
                        hasMore={false}
                    />
                </div>
            </div>
        </div>
    );
}

/* ─── Page Export (Server Component wrapper) ─────────────────── */
export default function SearchPage() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center py-32 text-text-muted gap-3">
                    <span className="material-symbols-outlined animate-spin" style={{ fontSize: '28px' }}>
                        refresh
                    </span>
                    Loading search results…
                </div>
            }
        >
            <SearchPageContent />
        </Suspense>
    );
}
