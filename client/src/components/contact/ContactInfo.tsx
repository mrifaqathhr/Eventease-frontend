'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactItem {
    icon: string;
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_ITEMS: ContactItem[] = [
    {
        icon: 'mail',
        title: 'Email Us',
        subtitle: 'For general inquiries & support',
        content: (
            <a
                href="mailto:support@eventease.com"
                className="text-primary font-medium hover:underline"
            >
                support@eventease.com
            </a>
        ),
    },
    {
        icon: 'call',
        title: 'Call Us',
        subtitle: 'Speak with a support agent',
        content: (
            <a
                href="tel:+18005550123"
                className="text-primary font-medium hover:underline"
            >
                +1 (800) 555-0123
            </a>
        ),
    },
    {
        icon: 'location_on',
        title: 'Visit Us',
        subtitle: 'EventEase HQ',
        content: (
            <span className="text-slate-700 dark:text-slate-300">
                123 Wedding Way, Suite 400
                <br />
                New York, NY 10001
            </span>
        ),
    },
];

// ─── Sub-component ────────────────────────────────────────────────────────────

function ContactItemRow({ item, index }: { item: ContactItem; index: number }) {
    return (
        <motion.div
            className="flex gap-4 items-start group"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
        >
            <div className="size-12 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                    {item.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">
                    {item.subtitle}
                </p>
                {item.content}
            </div>
        </motion.div>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactInfo() {
    return (
        <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm h-full flex flex-col">
                {/* Heading */}
                <h3 className="font-serif text-3xl font-medium text-slate-900 dark:text-white mb-2">
                    Get in Touch
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                    Reach out to us directly. Our team is available Mon–Fri, 9am–6pm EST.
                </p>

                {/* Contact items */}
                <div className="flex flex-col gap-6 flex-grow">
                    {CONTACT_ITEMS.map((item, i) => (
                        <ContactItemRow key={item.title} item={item} index={i} />
                    ))}
                </div>

                {/* FAQ Shortcut */}
                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">
                        Have a quick question?
                    </h5>
                    <Link
                        href="#faq"
                        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                    >
                        Check out our FAQ center
                        <span className="material-symbols-outlined text-sm ml-1">
                            arrow_forward
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
