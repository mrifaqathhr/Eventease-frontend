import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactTrustBar from '@/components/contact/ContactTrustBar';
import FAQSection from '@/components/contact/FAQSection';
import ContactCTA from '@/components/contact/ContactCTA';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'Contact Us — EventEase',
    description:
        'Get in touch with the EventEase support team. Whether you need help with a vendor search, billing, or have a general inquiry, we\'re here Monday–Friday, 9am–6pm EST.',
    keywords: [
        'contact EventEase',
        'wedding vendor support',
        'event planning help',
        'EventEase support team',
        'vendor inquiry',
    ],
    openGraph: {
        title: 'Contact Us — EventEase',
        description:
            'Reach out to the EventEase team for support with vendor searches, billing, and more. We\'d love to hear from you.',
        type: 'website',
        locale: 'en_US',
    },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

/**
 * Contact page — uses the same full-bleed pattern as AboutPage.
 * The -mx negative margins break out of the global layout padding
 * so sections can have edge-to-edge backgrounds while internal content
 * remains constrained via max-w-7xl within each component.
 */
export default function ContactPage() {
    return (
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 -mt-8 overflow-x-hidden">
            {/* Hero */}
            <ContactHero />

            {/* Main contact grid: Info + Form */}
            <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: contact details */}
                    <ContactInfo />

                    {/* Right: enquiry form */}
                    <ContactForm />
                </div>
            </section>

            {/* Trust strip + decorative map */}
            <ContactTrustBar />

            {/* FAQ Accordion */}
            <FAQSection />

            {/* Bottom CTA */}
            <ContactCTA />
        </div>
    );
}
