'use client';

import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface MissionCard {
    icon: string;
    title: string;
    description: string;
}

interface Step {
    icon: string;
    number: string;
    title: string;
    description: string;
}

interface TrustFeature {
    icon: string;
    title: string;
    description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const missionCards: MissionCard[] = [
    {
        icon: 'verified_user',
        title: 'Verified Vendors',
        description:
            'Every vendor on our platform is personally vetted for quality, reliability, and past performance reviews.',
    },
    {
        icon: 'forum',
        title: 'Managed Comms',
        description:
            'Streamlined messaging keeps all your contracts, quotes, and details in one secure, accessible place.',
    },
    {
        icon: 'stars',
        title: 'Quality Assurance',
        description:
            'We guarantee the highest standards for your special day with our comprehensive satisfaction promise.',
    },
];

const steps: Step[] = [
    {
        icon: 'search',
        number: '1.',
        title: 'Browse Vendors',
        description: 'Filter by style, budget, and availability.',
    },
    {
        icon: 'diversity_1',
        number: '2.',
        title: 'Connect & Plan',
        description: 'Chat directly and secure bookings.',
    },
    {
        icon: 'celebration',
        number: '3.',
        title: 'Celebrate',
        description: 'Enjoy your perfect day, worry-free.',
    },
];

const trustFeatures: TrustFeature[] = [
    { icon: 'check_circle', title: 'No Hidden Fees', description: 'Transparent pricing for everyone.' },
    { icon: 'check_circle', title: 'Secure Payments', description: 'Your funds are protected.' },
    { icon: 'check_circle', title: '24/7 Support', description: 'Real humans ready to help.' },
    { icon: 'check_circle', title: 'Planning Tools', description: 'Checklists, budgets & more.' },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] },
    },
};

const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as number[] },
    },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function MissionSection() {
    return (
        <section className="bg-rose-50/50 py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-10">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-4xl font-bold text-text-main">Our Mission</h2>
                    <p className="mt-4 text-text-muted">
                        We exist to bring peace of mind to your wedding planning experience.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {missionCards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            className="group flex flex-col gap-4 rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                        >
                            <div className="flex size-14 items-center justify-center rounded-full bg-rose-50 text-primary">
                                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                                    {card.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-text-main">{card.title}</h3>
                                <p className="mt-2 text-text-muted">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20 md:px-10">
            <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-serif text-3xl font-bold text-text-main">Planning Made Simple</h2>
            </motion.div>

            <div className="relative">
                {/* Connector line (desktop) */}
                <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-slate-200 md:block" />

                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.title}
                            variants={cardVariants}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="relative z-10 mb-4 flex size-16 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white shadow-lg">
                                <span className="material-symbols-outlined">{step.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main">
                                {step.number} {step.title}
                            </h3>
                            <p className="mt-2 text-sm text-text-muted">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function WhyChooseSection() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Text side */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="mb-6 font-serif text-4xl font-bold text-text-main">
                            Why Couples Trust Us
                        </h2>
                        <p className="mb-8 text-lg text-text-muted leading-relaxed">
                            We&apos;re more than just a directory; we&apos;re a community dedicated to
                            excellence. Here is why thousands of couples start their journey with EventEase.
                        </p>

                        <motion.div
                            className="grid gap-4 sm:grid-cols-2"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {trustFeatures.map((feature) => (
                                <motion.div
                                    key={feature.title}
                                    variants={featureVariants}
                                    className="flex items-start gap-3"
                                >
                                    <span className="material-symbols-outlined mt-0.5 text-primary">
                                        {feature.icon}
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-text-main">{feature.title}</h4>
                                        <p className="text-sm text-text-muted">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image grid side */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Offset image 1 */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBESEJ1jsm6QjqvHA_UEeYUyuZxsg4Y123856kQ3PAbzGNKRUItPa6TMFpHaYvaZQ2fHEMVMAifdSbtvOYbnYViRhkQeRMO7CPts2jrwh9mkcyjijWwyWEcT5npsmhocfvIyh_MapYOZ2uoaIivlm1oU5qh6e_zKb_6Jt70cFM6ZW-da4zZMYzR5gR6SFwuCFOAisb_JzoJqRHePyDWpLU7YyX7YBK5WfhTof0se8Y2nE4OkJjPXM7_VntgYSB9ZqqV-HohOMwdI0fR"
                                alt="Bride holding bouquet"
                                className="mt-8 rounded-xl shadow-lg w-full object-cover"
                            />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3yIvwuH-4L6jXid51aBom40eJrpTaVt7OauYFA9e7qlvsp3Qi_8JuBOeuySPX_3jYP5LbN6PA2xMaEh3XbN2s3XQRBV0mYfqadu-d8O4HnG_3Iqd5_HaRhzyZ-yJ_OzpKdcLatyc83VYlK140ZXt5TuG5MoRxy4UETfVtsYKYU2U_VfVaf5sgTuQvbK7QkHYHHcb9yH5z3KroEypai4hRRdGyXUaettErEm3CA8j0zvBrTwPnx1Jj542VKPFCyMmQbUrqKBSZ9ORJ"
                                alt="Wedding ceremony setup outdoors"
                                className="rounded-xl shadow-lg w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ValueProps() {
    return (
        <>
            <MissionSection />
            <HowItWorksSection />
            <WhyChooseSection />
        </>
    );
}
