'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Types ──────────────────────────────────────────────────────────────────

interface Plan {
    id: string;
    name: string;
    price: number;
    tagline: string;
    features: { label: string; included: boolean }[];
    highlight: boolean;
}

interface CustomFormState {
    duration: string;
    budget: string;
    details: string;
}

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

// ─── Static Data ─────────────────────────────────────────────────────────────

const PLANS: Plan[] = [
    {
        id: 'basic',
        name: 'Basic Boost',
        price: 49,
        tagline: 'Essential visibility for growing businesses.',
        highlight: false,
        features: [
            { label: 'Higher search rank', included: true },
            { label: 'Standard support', included: true },
            { label: 'Featured badge', included: false },
            { label: 'Homepage feature', included: false },
        ],
    },
    {
        id: 'featured',
        name: 'Featured Listing',
        price: 99,
        tagline: 'Best value for established vendors.',
        highlight: true,
        features: [
            { label: 'Top 3 placement', included: true },
            { label: "'Featured' badge on profile", included: true },
            { label: 'Priority email support', included: true },
            { label: 'Advanced analytics dashboard', included: true },
        ],
    },
    {
        id: 'premium',
        name: 'Premium Spotlight',
        price: 199,
        tagline: 'Maximum exposure for elite vendors.',
        highlight: false,
        features: [
            { label: 'Homepage feature spot', included: true },
            { label: 'Social media shoutout', included: true },
            { label: 'Dedicated account manager', included: true },
            { label: 'Blog feature article', included: true },
        ],
    },
];

const VALUE_PROPS = [
    {
        id: 'placement',
        icon: 'trending_up',
        title: 'Higher Placement',
        description: 'Appear at the top of search results in your specific category and location.',
    },
    {
        id: 'badge',
        icon: 'verified_user',
        title: 'Priority Badge',
        description: "Earn a trusted badge that couples look for when booking premium vendors.",
    },
    {
        id: 'analytics',
        icon: 'analytics',
        title: 'Exclusive Analytics',
        description: 'Get detailed insights on your profile performance and lead generation.',
    },
];

const FAQS: FaqItem[] = [
    {
        id: 'billing',
        question: 'How does billing work?',
        answer: 'Billing occurs monthly on the date you started your subscription. You can view all invoices in your settings tab.',
    },
    {
        id: 'cancel',
        question: 'Can I cancel anytime?',
        answer: 'Yes, subscriptions can be cancelled at any time from your dashboard. Your benefits will remain active until the end of the current billing cycle.',
    },
    {
        id: 'badge',
        question: "What does the 'Featured' badge do?",
        answer: "The featured badge adds a visual indicator to your profile card in search results, increasing trust and click-through rates by up to 40%.",
    },
    {
        id: 'speed',
        question: 'How fast do changes take effect?',
        answer: 'Promotion upgrades typically take effect within 1-2 hours of purchase. You will receive a confirmation email once your boosted visibility is live.',
    },
];

const DURATION_OPTIONS = [
    '1 Month',
    '3 Months (Seasonal)',
    '6 Months',
    'Custom Duration',
];

const BUDGET_OPTIONS = ['$200 - $500', '$500 - $1,000', '$1,000+'];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' as const },
    }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlanCard({ plan, onRequest }: { plan: Plan; onRequest: (planName: string) => void }) {
    return (
        <motion.div
            custom={PLANS.indexOf(plan)}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`relative flex flex-col gap-6 rounded-2xl p-8 ${plan.highlight
                    ? 'border-2 border-primary bg-white shadow-xl ring-4 ring-primary/10 z-10 scale-105'
                    : 'border border-border bg-white shadow-sm'
                }`}
        >
            {plan.highlight && (
                <div className="absolute -top-4 start-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
                    Most Popular
                </div>
            )}

            {/* Header */}
            <div>
                <h3 className="font-serif text-2xl font-bold text-text-main">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-text-main">${plan.price}</span>
                    <span className="text-text-muted text-sm font-medium">/mo</span>
                </div>
                <p className="text-text-muted text-sm mt-2">{plan.tagline}</p>
            </div>

            <hr className="border-border" />

            {/* Features */}
            <ul className="flex flex-col gap-3">
                {plan.features.map((feat) => (
                    <li
                        key={feat.label}
                        className={`flex items-center gap-3 text-sm ${feat.included ? 'text-text-main' : 'text-text-muted opacity-60'
                            } ${plan.highlight && feat.included ? 'font-medium' : ''}`}
                    >
                        <span
                            className={`material-symbols-outlined text-lg flex-shrink-0 ${!feat.included
                                    ? 'text-text-muted'
                                    : plan.highlight
                                        ? 'text-primary'
                                        : 'text-green-600'
                                }`}
                        >
                            {feat.included ? 'check_circle' : 'cancel'}
                        </span>
                        {feat.label}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button
                type="button"
                onClick={() => onRequest(plan.name)}
                className={`mt-auto w-full rounded-xl py-3 px-4 font-bold text-sm transition-all duration-200 ${plan.highlight
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-primary/30 hover:shadow-lg'
                        : 'border border-border bg-transparent text-text-main hover:bg-background-light'
                    }`}
            >
                Request {plan.name.split(' ')[0]}
            </button>
        </motion.div>
    );
}

function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <div className="flex flex-col gap-3">
            {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                    <div
                        key={faq.id}
                        className="overflow-hidden rounded-xl border border-border bg-white"
                    >
                        <button
                            type="button"
                            onClick={() => toggle(faq.id)}
                            className="flex w-full items-center justify-between p-4 text-start font-bold text-text-main hover:bg-background-light transition-colors"
                            aria-expanded={isOpen}
                        >
                            <span>{faq.question}</span>
                            <span
                                className={`material-symbols-outlined text-text-muted transition-transform duration-300 flex-shrink-0 ms-4 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            >
                                expand_more
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-4 pb-4 text-sm leading-relaxed text-text-muted">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}

// ─── Main Client Component ────────────────────────────────────────────────────

export default function PromotionPageClient() {
    const router = useRouter();

    const [form, setForm] = useState<CustomFormState>({
        duration: DURATION_OPTIONS[0],
        budget: BUDGET_OPTIONS[0],
        details: '',
    });

    const handleRequest = (planName: string) => {
        router.push(
            `/vendor/dashboard/promotions/success?plan=${encodeURIComponent(planName)}`
        );
    };

    const handleCustomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(
            `/vendor/dashboard/promotions/success?plan=${encodeURIComponent('Custom')}&duration=${encodeURIComponent(form.duration)}`
        );
    };

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col gap-14">

            {/* ── Hero Section ── */}
            <section className="flex flex-col lg:flex-row justify-between gap-8 items-start">
                <motion.div
                    className="flex flex-col gap-4 max-w-2xl"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-text-main leading-tight tracking-tight">
                        Boost Your Visibility
                    </h1>
                    <p className="text-text-muted text-lg font-light leading-relaxed max-w-xl">
                        Maximize your reach and get seen by more couples planning their perfect day.
                        Choose a promotion plan that fits your business goals and stand out in crowded
                        search results.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full w-fit">
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                        </span>
                        Trusted by 5,000+ Vendors
                    </div>
                </motion.div>

                {/* Current Status Card */}
                <motion.div
                    className="w-full lg:w-auto min-w-[300px] bg-white border border-border rounded-2xl p-6 shadow-sm"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h3 className="font-serif text-lg font-bold mb-4 text-text-main">
                        Current Promotion Status
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
                            <span className="material-symbols-outlined">public_off</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-text-main">Standard Listing</p>
                            <p className="text-xs text-text-muted">No active promotion</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                        <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '25%' }}
                            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        />
                    </div>
                    <p className="text-xs text-text-muted text-end">Profile completeness: 25%</p>
                </motion.div>
            </section>

            {/* ── Value Props ── */}
            <section>
                <motion.h2
                    className="font-serif text-3xl font-bold text-text-main mb-8"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    Why Promote Your Services?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VALUE_PROPS.map((prop, i) => (
                        <motion.div
                            key={prop.id}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-4 p-5 bg-white border border-border rounded-xl hover:shadow-md transition-shadow"
                        >
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-2xl">{prop.icon}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1 text-text-main">{prop.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{prop.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Pricing Cards ── */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start py-4">
                {PLANS.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} onRequest={handleRequest} />
                ))}
            </section>

            {/* ── Custom Request + FAQ ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Custom Request Form */}
                <motion.div
                    className="flex flex-col gap-6 bg-white p-8 rounded-2xl border border-border shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                >
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-text-main">
                            Custom Promotion Request
                        </h3>
                        <p className="text-text-muted text-sm mt-2">
                            Need something tailored to your seasonal needs? Let us know.
                        </p>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleCustomSubmit}>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="campaign-duration"
                                className="text-sm font-bold text-text-main"
                            >
                                Campaign Duration
                            </label>
                            <select
                                id="campaign-duration"
                                value={form.duration}
                                onChange={(e) => setForm((p) => ({ ...p, duration: e.target.value }))}
                                className="w-full rounded-xl border border-border bg-background-light px-4 py-2.5 text-text-main text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                            >
                                {DURATION_OPTIONS.map((opt) => (
                                    <option key={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="budget-range"
                                className="text-sm font-bold text-text-main"
                            >
                                Budget Range
                            </label>
                            <select
                                id="budget-range"
                                value={form.budget}
                                onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                                className="w-full rounded-xl border border-border bg-background-light px-4 py-2.5 text-text-main text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                            >
                                {BUDGET_OPTIONS.map((opt) => (
                                    <option key={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="additional-details"
                                className="text-sm font-bold text-text-main"
                            >
                                Additional Details
                            </label>
                            <textarea
                                id="additional-details"
                                rows={4}
                                placeholder="Tell us about your campaign goals..."
                                value={form.details}
                                onChange={(e) => setForm((p) => ({ ...p, details: e.target.value }))}
                                className="w-full rounded-xl border border-border bg-background-light px-4 py-2.5 text-text-main text-sm placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 self-start rounded-xl bg-text-main text-white px-6 py-3 text-sm font-bold hover:bg-text-main/90 transition-colors"
                        >
                            Submit Request
                        </button>
                    </form>
                </motion.div>

                {/* FAQ */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                >
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-text-main">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-text-muted text-sm mt-2">
                            Common questions about promoting on EventEase.
                        </p>
                    </div>
                    <FaqAccordion faqs={FAQS} />
                </motion.div>
            </div>
        </div>
    );
}
