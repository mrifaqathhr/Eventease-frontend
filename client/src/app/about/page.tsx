import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import ValueProps from '@/components/about/ValueProps';
import TeamGrid from '@/components/about/TeamGrid';
import VendorCTA from '@/components/about/VendorCTA';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'About Us — EventEase',
    description:
        'Learn how EventEase is transforming wedding planning by connecting couples with verified, elite wedding vendors across the country. Discover our story, mission, and team.',
    keywords: [
        'about EventEase',
        'wedding planning platform',
        'our mission',
        'wedding vendor marketplace',
        'wedding professionals',
    ],
    openGraph: {
        title: 'About Us — EventEase',
        description:
            'EventEase is your trusted partner in planning the perfect wedding. Learn about our mission, story, and the team behind the platform.',
        type: 'website',
        locale: 'en_US',
    },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

/**
 * The global layout.tsx wraps `{children}` in a constrained, padded container
 * (max-w-[1440px] with horizontal padding). To allow full-bleed backgrounds on
 * certain sections (Mission, WhyChoose, VendorCTA), those components apply
 * their own internal max-width logic and the outer wrapper stays -mx- agnostic.
 *
 * We remove the default horizontal padding here at the page level by using
 * -mx-4 sm:-mx-6 lg:-mx-8 and restoring content padding inside each section.
 */
export default function AboutPage() {
    return (
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 -mt-8 overflow-x-hidden">
            {/* Hero */}
            <AboutHero />

            {/* Our Story — two-column image + text */}
            <OurStory />

            {/* Mission Cards + How It Works + Why Choose Us */}
            <ValueProps />

            {/* Team Grid */}
            <TeamGrid />

            {/* Vendor CTA Banner */}
            <VendorCTA />
        </div>
    );
}
