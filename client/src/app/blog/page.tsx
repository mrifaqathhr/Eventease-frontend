import type { Metadata } from 'next';
import BlogPageClient from '@/components/blog/BlogPageClient';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'Blog & Real Weddings — EventEase',
    description:
        'Explore expert wedding planning advice, real wedding stories, venue spotlight features, photography tips, and style guides curated by the EventEase team.',
    keywords: [
        'wedding blog',
        'real weddings',
        'wedding planning tips',
        'bridal style',
        'wedding venues',
        'wedding photography',
    ],
    openGraph: {
        title: 'Blog & Real Weddings — EventEase',
        description:
            'Read the latest wedding inspiration, vendor spotlights, and real wedding stories from EventEase.',
        type: 'website',
        locale: 'en_US',
    },
};

// ─── Server Page ──────────────────────────────────────────────────────────────

export default function BlogPage() {
    return <BlogPageClient />;
}
