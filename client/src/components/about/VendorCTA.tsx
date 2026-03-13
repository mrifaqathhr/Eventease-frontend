'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// ─── Component ────────────────────────────────────────────────────────────────

export default function VendorCTA() {
    return (
        <section className="px-4 py-16 md:px-10">
            <motion.div
                className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative px-6 py-16 md:px-12 md:py-20 lg:flex lg:items-center lg:justify-between lg:px-20">
                    {/* Decorative blobs */}
                    <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary opacity-20 blur-3xl pointer-events-none" />
                    <div className="absolute -left-10 -bottom-10 size-48 rounded-full bg-rose-600 opacity-10 blur-3xl pointer-events-none" />

                    {/* Copy */}
                    <div className="relative z-10 lg:w-1/2">
                        <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                            Are you a Wedding Professional?
                        </h2>
                        <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                            Join our network of elite vendors and connect with couples who value quality.
                            Grow your business with EventEase.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="relative z-10 mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
                        <Link
                            href="/vendors/register"
                            className="flex h-12 cursor-pointer items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-all hover:bg-rose-600 hover:shadow-lg hover:shadow-primary/30"
                        >
                            Join as Vendor
                        </Link>
                        <Link
                            href="/contact"
                            className="flex h-12 cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
