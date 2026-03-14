import Link from 'next/link';

interface FooterLinkGroup {
    title: string;
    links: { label: string; href: string }[];
}

const linkGroups: FooterLinkGroup[] = [
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/about' },
            { label: 'Press', href: '/about' },
            { label: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Discover',
        links: [
            { label: 'Venues', href: '/search?category=venues' },
            { label: 'Vendors', href: '/search' },
            { label: 'Real Weddings', href: '/blog' },
            { label: 'Expert Advice', href: '/blog' },
        ],
    },
    {
        title: 'Professionals',
        links: [
            { label: 'Vendor Login', href: '/auth/login' },
            { label: 'List Your Business', href: '/auth/register' },
            { label: 'Success Stories', href: '/blog' },
            { label: 'Vendor Support', href: '/contact' },
        ],
    },
];

const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Twitter', href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-background-dim mt-12 pt-16 pb-8 border-t border-gray-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-primary text-2xl">diversity_1</span>
                            <span className="text-xl font-serif font-bold text-text-main">EventEase</span>
                        </div>
                        <p className="text-text-muted mb-6 max-w-xs leading-relaxed">
                            The modern marketplace for wedding planning. We connect couples with the perfect vendors
                            to make their special day unforgettable.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
                                >
                                    {social.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {linkGroups.map((group) => (
                        <div key={group.title}>
                            <h4 className="font-bold text-text-main mb-4">{group.title}</h4>
                            <ul className="space-y-3 text-sm text-text-muted">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <p>© 2024 EventEase Inc. All rights reserved.</p>
                    <div className="flex gap-6 items-center">
                        <Link href="/privacy-policy" className="hover:text-text-main transition-colors">Privacy Policy</Link>
                        <Link href="/vendor-terms" className="hover:text-text-main transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-text-main transition-colors">Sitemap</Link>
                        {/* Discreet dev map link */}
                        <Link href="/dev-map" className="text-[10px] text-gray-200 hover:text-primary transition-colors ml-4" aria-label="Developer Route Map">dev</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
