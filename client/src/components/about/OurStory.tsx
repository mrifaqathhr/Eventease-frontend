'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// ─── Component ────────────────────────────────────────────────────────────────

export default function OurStory() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                {/* Image Column */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.01 }}
                >
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqzFSVwTl_--JGllIUgpu-MsMA6aunZ-vxtokBbleDq4XKk-sHdGZ82SO7M8_XSTrr8nSux7DxwZ6AkhwMUdeCg4Yy9zzs0F2TQB3GK4grpWrSwbO3rcgvEw_d9LvFjz3B9sDVgSEC8k0HpnDwGHT_8gSizEsmbtarSOCYWhA90zXcz4uYwyBSSvyUxOvVU5BntBND8xCYhPr7PsCl_kITlqGNoRpcuizHEJcezzcrs73nNoeDgCBpc3Ov4iQaR_7tUIoJ68qsPJGT"
                        alt="Elegant wedding table setting with flowers and candles"
                        width={800}
                        height={500}
                        className="h-[500px] w-full object-cover"
                        unoptimized
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                {/* Text Column */}
                <motion.div
                    className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm md:p-12"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                    <h2 className="font-serif text-4xl font-bold text-text-main">
                        Our Story
                    </h2>

                    {/* Accent bar */}
                    <div className="h-1 w-20 rounded-full bg-primary" />

                    <div className="space-y-4 text-lg leading-relaxed text-text-muted">
                        <p>
                            Founded with a passion for love and logistics, EventEase started
                            as a small idea to simplify the complex world of wedding planning.
                            We realized that while love is simple, planning a celebration
                            often isn&apos;t.
                        </p>
                        <p>
                            What began as a local directory has blossomed into the nation&apos;s
                            leading vendor marketplace. We believe every couple deserves a
                            stress-free journey to the altar, and every talented vendor
                            deserves a platform to shine.
                        </p>
                        <p>
                            Today, our story is built on trust, transparency, and the
                            thousands of &ldquo;I do&rdquo; moments we&apos;ve helped make possible.
                        </p>
                    </div>

                    {/* CTA link */}
                    <div className="pt-4">
                        <button className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-rose-700 transition-colors">
                            <span>Read Full History</span>
                            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
