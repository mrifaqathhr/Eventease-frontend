'use client';

import { useState, useMemo } from 'react';
import CategoryHeader from '@/components/category/CategoryHeader';
import FilterSidebar, { type StyleOption } from '@/components/category/FilterSidebar';
import VendorGrid from '@/components/category/VendorGrid';
import RelatedCategories, { type RelatedCategory } from '@/components/category/RelatedCategories';
import { type VendorCardProps } from '@/components/shared/VendorCard';

// ─── Static demo data (replace with Appwrite fetch in v1) ────────────────────

interface CategoryMeta {
    name: string;
    description: string;
    styles: StyleOption[];
    relatedCategories: RelatedCategory[];
}

const CATEGORY_MAP: Record<string, CategoryMeta> = {
    photography: {
        name: 'Photography',
        description:
            'Discover the best wedding photographers to capture your special moments. From candid documentary styles to classic portraiture, find the perfect artist for your big day.',
        styles: [
            { label: 'Traditional', count: 124 },
            { label: 'Artistic', count: 85 },
            { label: 'Documentary', count: 62 },
            { label: 'Vintage', count: 30 },
        ],
        relatedCategories: [
            { label: 'Videography', icon: 'videocam', slug: 'videography' },
            { label: 'DJs & Bands', icon: 'queue_music', slug: 'djs-bands' },
            { label: 'Florists', icon: 'local_florist', slug: 'florists' },
            { label: 'Rentals', icon: 'event_seat', slug: 'rentals' },
            { label: 'Cakes', icon: 'cake', slug: 'cakes' },
            { label: 'Jewelry', icon: 'diamond', slug: 'jewelry' },
        ],
    },
    venues: {
        name: 'Venues',
        description:
            'Find the perfect setting for your wedding day. Explore ballrooms, gardens, barns, rooftops, and more across top locations.',
        styles: [
            { label: 'Ballroom', count: 48 },
            { label: 'Garden', count: 76 },
            { label: 'Barn', count: 33 },
            { label: 'Rooftop', count: 19 },
        ],
        relatedCategories: [
            { label: 'Photography', icon: 'photo_camera', slug: 'photography' },
            { label: 'Catering', icon: 'restaurant', slug: 'catering' },
            { label: 'Florists', icon: 'local_florist', slug: 'florists' },
            { label: 'DJs & Bands', icon: 'queue_music', slug: 'djs-bands' },
            { label: 'Cakes', icon: 'cake', slug: 'cakes' },
            { label: 'Jewelry', icon: 'diamond', slug: 'jewelry' },
        ],
    },
};

const DEMO_VENDORS: VendorCardProps[] = [
    {
        id: 'lumina-studios',
        name: 'Lumina Studios',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBqYxz6i6U-hUDUC7G0mtrq7D-6FNUXKvdHvRr5SulFNEMnl37PUDiBPLJRsiDClpDk4xU4r_2AlVV7UGY8DdxPonCiyBHRWc42Gj3uzn9705QhvC1Wp8PTfk6WRJ5iiMuU2kEBjciILO6HAZA1bAQNYflNw3SKiZkchLGvVRn8zSpie6wRBLLMxxCGSIcFbX5US4HJIin5-fOUUUy9v4EsLbJ0X00rZQi1pXyqwcg2JTNkRflw4RbSrVPEXsXJUFm7wM0HidtkVz-T',
        imageAlt: 'Elegant wedding couple holding hands during sunset',
        category: 'Photography',
        rating: 4.9,
        reviewCount: 128,
        price: 'From $3,500',
        location: 'San Francisco, CA',
        isFeatured: true,
        tags: ['Artistic', 'Portrait'],
        slug: 'lumina-studios',
    },
    {
        id: 'capture-the-moment',
        name: 'Capture The Moment',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD_rcmNi92LxjGxEhJ1HeIifMPpf8vw_Add_Fy0DgyMiqzWe3pSJHtpveWCIwgHQp8u3sIubgdLmkLLxe0Kdm6ti97eT9SzbmWCpA4KxNsf8UDv6WUWeCpvdoNoCO2VQElf2p_i-y-C-6wDjl7VTGRwDvdkm2ST4YFPQHKXDRmrx9FqUllArb6ZDaP-a3m79s3amqgScvJB4R30UIecZb3UE9E0dXpcOtOXLukC_QXJRQ8bDCS4wXN9eUrINoZWapoOCoAay5k3N0yn',
        imageAlt: 'Bride and groom standing in a forest setting',
        category: 'Photography',
        rating: 4.7,
        reviewCount: 84,
        price: 'From $2,200',
        location: 'Oakland, CA',
        badge: 'Best Value',
        tags: ['Candid', 'Modern'],
        slug: 'capture-the-moment',
    },
    {
        id: 'golden-hour-photo',
        name: 'Golden Hour Photo',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDHPQPhEhXxJbDJzxoNSa6R3fmSQad-sUTmof_BTCd8sl3MjSjlFUppgkYGPoCelO2Hid2L4MbNIedZ5QyH2L9GR3_o1OS0oBwQe9gbDaR0qfZxsJMWC5TG0-PRAOJqyzglyN-m0oRzFxickz5F39NQu6nsenBd_3Ph4jzT_FBZZ_XoYsWL3UI0x9UpkRBWLkoIVc_SFimfwYyzufl1fsGdbUXMhPR82s97N1SXpA0UehJ3vhnp6VgleIZAS7AvlIB0zJ1Dz37FGtst',
        imageAlt: 'Detailed shot of wedding rings and flowers',
        category: 'Photography',
        rating: 5.0,
        reviewCount: 42,
        price: 'From $5,500',
        location: 'Napa Valley, CA',
        tags: ['Luxury', 'Destination'],
        slug: 'golden-hour-photo',
    },
    {
        id: 'everlasting-memories',
        name: 'Everlasting Memories',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBGqm5AaXRRfJCAOsukrx7jbfwfF0xkci8pMkGrl9yW7yzSeKZICAVgy5mDiQmSrnQzOwFPdAxYHIyKHsSP8y_33IxyTmYr1HMliW_YeU36sC6aXNW1eYVTqedQ6pA-gea232Jb-dWGmfyl7MowXfP1hURYoKXZgj3cNjZPxEdQyoveoZOXNJOFYhvE1cqNtDpPWK5yhwuUVpvZhzpKb3ovdy4LDeH_Xd-0t2A8Nk7LSgUmbj7IncBAQr1UfySWPjYlax3HIv5i0Q_G',
        imageAlt: 'Smiling bride holding bouquet',
        category: 'Photography',
        rating: 4.6,
        reviewCount: 210,
        price: 'From $1,800',
        location: 'San Jose, CA',
        tags: ['Traditional', 'Family'],
        slug: 'everlasting-memories',
    },
    {
        id: 'noir-et-blanc',
        name: 'Noir & Blanc',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuByImONhGgpYy8ulynuK3aNJZQ9exskeT_edQq_woxo4pYh69Xe4MCTlSoS5BvGHGQGBUOXIQhNqCBZRlyR3bseTgD-y3myqphJOz8ySpmYt3McaZZaQazawDWFzhlNnUnqN7OHn8aGreQ8j5GH5gyfw1_gezv1xKW7zvKrglZ-no2UOa4IePCX9S0jZL11uOWAlhxkEcWNvbSqQoXaHBZpF6AmWAlaAaDBKRxzdpJfFXVqoHGdzT-3m-BI7GmBONDq7M2RJzLbMVMl',
        imageAlt: 'Groom adjusting tie in black and white',
        category: 'Photography',
        rating: 4.8,
        reviewCount: 36,
        price: 'From $2,800',
        location: 'Berkeley, CA',
        badge: 'Rising Star',
        tags: ['Documentary', 'B&W'],
        slug: 'noir-et-blanc',
    },
    {
        id: 'vibrant-visions',
        name: 'Vibrant Visions',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC5kHm-a1qZIfBNIfSPsvaQXm_e4r2PK2_vTWNUsVZ1RHmnxH-CAhF7lQ2hXjdeiw8HZVhd5yOgZ3JFbq2CmfdGwGgVDIFN3GVrV8Mx2uqJRQcKtBzXWZzNIIsHWCAVfHW0kyYUUOUZjjISSXxevL_2_NxSuijQo5b1eYsA4OzxtlgaEntKgpUwB6cGhEw1D6qQrCQuow85zKyYb6bq4ZDzh8uwOcgPJvwN74bqowkEpoWJ6VR9phsfzH2ur_QUTHcHrnuTKy7cePX1',
        imageAlt: 'Group of people celebrating at wedding reception',
        category: 'Photography',
        rating: 4.5,
        reviewCount: 156,
        price: 'From $2,000',
        location: 'Walnut Creek, CA',
        tags: ['Color', 'Events'],
        slug: 'vibrant-visions',
    },
];

// ─── Client Component ─────────────────────────────────────────────────────

interface CategoryListingClientProps {
    slug: string;
}

export default function CategoryListingClient({ slug }: CategoryListingClientProps) {
    const categoryMeta = CATEGORY_MAP[slug] ?? null;

    // ─── Filter state ──────────────────────────────────────────────────────
    const [searchQuery, setSearchQuery] = useState('');
    const [sortValue, setSortValue] = useState('recommended');
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState('4');
    const [availableOnly, setAvailableOnly] = useState(false);

    function handleStyleToggle(label: string) {
        setSelectedStyles((prev) =>
            prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label],
        );
    }

    // ─── Client-side filtering ──────────────────────────────────────────────
    const filteredVendors = useMemo(() => {
        let vendors = [...DEMO_VENDORS];

        if (searchQuery.trim()) {
            const q = searchQuery.trim().toLowerCase();
            vendors = vendors.filter(
                (v) =>
                    v.name.toLowerCase().includes(q) ||
                    v.location.toLowerCase().includes(q) ||
                    v.tags?.some((t) => t.toLowerCase().includes(q)),
            );
        }

        if (selectedStyles.length > 0) {
            vendors = vendors.filter((v) =>
                v.tags?.some((tag) =>
                    selectedStyles.some((s) => s.toLowerCase() === tag.toLowerCase()),
                ),
            );
        }

        const minRating = parseFloat(selectedRating);
        vendors = vendors.filter((v) => v.rating >= minRating);

        if (sortValue === 'rating') {
            vendors.sort((a, b) => b.rating - a.rating);
        } else if (sortValue === 'price_asc') {
            vendors.sort((a, b) => {
                const px = (p: string) => parseInt(p.replace(/[^0-9]/g, ''), 10) || 0;
                return px(a.price) - px(b.price);
            });
        } else if (sortValue === 'price_desc') {
            vendors.sort((a, b) => {
                const px = (p: string) => parseInt(p.replace(/[^0-9]/g, ''), 10) || 0;
                return px(b.price) - px(a.price);
            });
        }

        return vendors;
    }, [searchQuery, selectedStyles, selectedRating, sortValue]);

    // ─── Not found state ───────────────────────────────────────────────────
    if (!categoryMeta) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <span
                    className="material-symbols-outlined text-text-muted mb-4"
                    style={{ fontSize: '64px' }}
                >
                    category
                </span>
                <h1 className="text-3xl font-black text-text-main mb-3">Category Not Found</h1>
                <p className="text-text-muted mb-6">
                    The category <strong>&ldquo;{slug}&rdquo;</strong> doesn&apos;t exist yet.
                </p>
            </div>
        );
    }

    return (
        <div>
            {/* ── Page Header ─────────────────────────────────────── */}
            <CategoryHeader
                categoryName={categoryMeta.name}
                description={categoryMeta.description}
                vendorCount={filteredVendors.length}
                searchQuery={searchQuery}
                sortValue={sortValue}
                onSearchChange={setSearchQuery}
                onSortChange={setSortValue}
            />

            {/* ── Main Layout: Sidebar + Grid ─────────────────────── */}
            <div className="flex flex-col lg:flex-row gap-10">
                <FilterSidebar
                    styles={categoryMeta.styles}
                    selectedStyles={selectedStyles}
                    onStyleToggle={handleStyleToggle}
                    minPrice={1500}
                    maxPrice={5000}
                    selectedRating={selectedRating}
                    onRatingChange={setSelectedRating}
                    availableOnly={availableOnly}
                    onAvailableToggle={() => setAvailableOnly((v) => !v)}
                />

                <div className="flex-1 min-w-0">
                    <VendorGrid vendors={filteredVendors} />
                </div>
            </div>

            {/* ── Related Categories ───────────────────────────────── */}
            <RelatedCategories items={categoryMeta.relatedCategories} />
        </div>
    );
}
