'use client';

import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    initials: string;
    gradient: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const team: TeamMember[] = [
    {
        name: 'Priya Sharma',
        role: 'Co-Founder & CEO',
        bio: 'Former wedding planner turned tech entrepreneur. Priya built EventEase after experiencing firsthand how broken vendor discovery was.',
        initials: 'PS',
        gradient: 'from-rose-400 to-pink-600',
    },
    {
        name: 'Arjun Mehta',
        role: 'Co-Founder & CTO',
        bio: 'Full-stack engineer with a passion for elegant, scalable systems. Arjun architected the marketplace from the ground up.',
        initials: 'AM',
        gradient: 'from-slate-600 to-slate-900',
    },
    {
        name: 'Kavya Nair',
        role: 'Head of Vendor Relations',
        bio: 'Kavya brings 8 years of wedding industry experience and personally oversees all vendor onboarding and quality checks.',
        initials: 'KN',
        gradient: 'from-rose-300 to-red-500',
    },
    {
        name: 'Rohan Desai',
        role: 'Lead Designer',
        bio: 'Rohan crafted the EventEase visual identity — blending luxury aesthetics with an intuitive, modern user experience.',
        initials: 'RD',
        gradient: 'from-pink-400 to-rose-600',
    },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function TeamGrid() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-20 md:px-10">
            {/* Section header */}
            <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    The People
                </span>
                <h2 className="mt-4 font-serif text-4xl font-bold text-text-main">
                    Meet the Founders
                </h2>
                <p className="mt-4 mx-auto max-w-xl text-text-muted">
                    A small team of wedding-obsessed builders, united by the mission of simplifying
                    your journey from &ldquo;engaged&rdquo; to &ldquo;I do.&rdquo;
                </p>
            </motion.div>

            {/* Team grid */}
            <motion.div
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {team.map((member) => (
                    <motion.div
                        key={member.name}
                        variants={cardVariants}
                        className="group flex flex-col items-center gap-5 rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all hover:border-primary/20 hover:shadow-lg"
                    >
                        {/* Avatar */}
                        <div
                            className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-2xl font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                        >
                            {member.initials}
                        </div>

                        {/* Info */}
                        <div>
                            <h3 className="font-serif text-lg font-bold text-text-main">
                                {member.name}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                            <p className="mt-3 text-sm leading-relaxed text-text-muted">{member.bio}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
