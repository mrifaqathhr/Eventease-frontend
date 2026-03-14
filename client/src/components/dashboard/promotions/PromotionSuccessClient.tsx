'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

// ─── Timeline Step ────────────────────────────────────────────────────────────

interface TimelineStep {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'pending';
    badge?: string;
}

const STEPS: TimelineStep[] = [
    {
        id: 'review',
        title: 'Admin Review',
        description: 'Our team will review your profile and request details. This usually takes 24-48 hours.',
        status: 'active',
        badge: 'In Progress',
    },
    {
        id: 'payment',
        title: 'Payment Link Sent',
        description: "Once approved, you'll receive a secure payment link via email and dashboard notification.",
        status: 'pending',
    },
    {
        id: 'live',
        title: 'Promotion Live',
        description: "After payment, your promotion badge will be activated instantly.",
        status: 'pending',
    },
];

// ─── Inner component (uses useSearchParams) ───────────────────────────────────

function SuccessContent() {
    const params = useSearchParams();
    const planName = params.get('plan') ?? 'Featured Listing';
    const duration = params.get('duration') ?? '30 Days';

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, delay, ease: 'easeOut' as const },
    });

    return (
        <div className="p-6 lg:p-8">
            <div className="max-w-4xl mx-auto flex flex-col gap-8">

                {/* ── Page Title ── */}
                <motion.div className="flex flex-col gap-2" {...fadeUp(0)}>
                    <h1 className="font-serif text-4xl font-bold text-text-main">
                        Request Submitted
                    </h1>
                    <p className="text-text-muted text-lg">
                        We&apos;ve received your request for the &apos;{planName}&apos; plan.
                    </p>
                </motion.div>

                {/* ── Success Hero Card ── */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
                    {...fadeUp(0.08)}
                >
                    {/* Decorative blob */}
                    <div className="pointer-events-none absolute -top-20 end-0 h-80 w-80 -me-20 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 p-8">
                        {/* Text */}
                        <div className="flex-1 space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    check_circle
                                </span>
                                Success
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-text-main">
                                Request Received!
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                                Your request to boost your visibility with the{' '}
                                <strong className="text-text-main">{planName}</strong> plan is now
                                in our system. Our team reviews all vendor promotions to ensure
                                quality and relevance.
                            </p>
                        </div>

                        {/* Icon badge */}
                        <div className="shrink-0">
                            <div className="rounded-full bg-primary/10 p-5">
                                <span
                                    className="material-symbols-outlined text-primary text-6xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    verified
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-t border-border bg-background-light/60">
                        <div className="p-6">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                                Plan
                            </p>
                            <p className="font-medium text-text-main">{planName}</p>
                        </div>
                        <div className="p-6">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                                Duration
                            </p>
                            <p className="font-medium text-text-main">{duration}</p>
                        </div>
                        <div className="p-6">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                                Estimated Reach
                            </p>
                            <p className="font-medium text-text-main">5,000+ potential clients</p>
                        </div>
                    </div>
                </motion.div>

                {/* ── Next Steps Timeline ── */}
                <motion.div className="space-y-4" {...fadeUp(0.16)}>
                    <h4 className="font-serif text-xl font-bold text-text-main">
                        What happens next?
                    </h4>

                    {/* Timeline container with vertical connector line */}
                    <div className="relative ps-8 space-y-8 before:absolute before:start-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
                        {STEPS.map((step, i) => {
                            const isActive = step.status === 'active';
                            return (
                                <motion.div
                                    key={step.id}
                                    className="relative"
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                                >
                                    {/* Dot */}
                                    <div
                                        className={`absolute -start-8 top-1 size-6 rounded-full border-4 ${isActive
                                                ? 'bg-primary border-white shadow ring-2 ring-primary/30'
                                                : 'bg-white border-border'
                                            }`}
                                    />
                                    <div className={`flex flex-col gap-1 ${!isActive ? 'opacity-55' : ''}`}>
                                        <h5 className="font-bold text-base text-text-main">
                                            {step.title}
                                        </h5>
                                        <p className="text-sm text-text-muted leading-relaxed">
                                            {step.description}
                                        </p>
                                        {step.badge && isActive && (
                                            <span className="mt-1 inline-block w-fit rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                                                {step.badge}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ── Action ── */}
                <motion.div
                    className="flex justify-end border-t border-border pt-6"
                    {...fadeUp(0.4)}
                >
                    <Link
                        href="/vendor/dashboard"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-text-main shadow-sm transition-all hover:shadow-md hover:bg-background-light"
                    >
                        <span className="material-symbols-outlined text-xl">arrow_back</span>
                        Return to Dashboard
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

// ─── Default Export (wrapped in Suspense for useSearchParams) ─────────────────

export default function PromotionSuccessClient() {
    return (
        <Suspense fallback={<div className="p-10 text-text-muted">Loading…</div>}>
            <SuccessContent />
        </Suspense>
    );
}
