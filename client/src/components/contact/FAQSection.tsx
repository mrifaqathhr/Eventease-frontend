'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQItem {
    question: string;
    answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS: FAQItem[] = [
    {
        question: 'How do I find and book a vendor?',
        answer:
            'Browse our curated marketplace by category or location. Click on any vendor to view their full profile, portfolio, and services. Submit an inquiry through the platform — our team will connect you with the vendor within 24 hours.',
    },
    {
        question: 'Is EventEase free for couples to use?',
        answer:
            'Yes! Browsing, searching, and submitting inquiries is completely free for couples. You only pay the vendor directly, according to their individual packages.',
    },
    {
        question: 'How do I list my business as a vendor?',
        answer:
            'Sign up for a Vendor account and complete your profile with your services, portfolio, and pricing. Our team manually reviews all applications to maintain the quality of our marketplace. You\'ll receive an approval notification within 2–3 business days.',
    },
    {
        question: 'How long does it take to receive a response?',
        answer:
            'Our support team operates Monday to Friday, 9am–6pm EST, and aims to respond to all messages within 24 hours. For urgent matters, please call us directly.',
    },
    {
        question: 'What payment methods do you support?',
        answer:
            'For vendor promotion requests (Featured status, Carousel banners), we accept UPI payments. You upload a payment screenshot and our admin team verifies and activates your promotion.',
    },
];

// ─── Sub-component ────────────────────────────────────────────────────────────

function AccordionItem({
    item,
    index,
    isOpen,
    onToggle,
}: {
    item: FAQItem;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            className="border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
        >
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
            >
                <span className="font-bold text-slate-900 dark:text-white text-base">
                    {item.question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="material-symbols-outlined shrink-0 text-primary"
                >
                    add
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 py-5 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 leading-relaxed">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <section
            id="faq"
            className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20"
        >
            {/* Section Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    <span className="size-1.5 rounded-full bg-primary" />
                    FAQ
                </span>
                <h2 className="font-serif text-4xl font-medium text-slate-900 dark:text-white mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                    Can&apos;t find what you&apos;re looking for? Our support team is just a
                    message away.
                </p>
            </motion.div>

            {/* Accordion */}
            <div className="max-w-3xl mx-auto flex flex-col gap-3">
                {FAQ_ITEMS.map((item, i) => (
                    <AccordionItem
                        key={item.question}
                        item={item}
                        index={i}
                        isOpen={openIndex === i}
                        onToggle={() => toggle(i)}
                    />
                ))}
            </div>
        </section>
    );
}
