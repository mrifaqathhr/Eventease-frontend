'use client';

import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: EASE },
    },
};

export default function VendorCTA() {
    return (
        <section className="bg-primary-light rounded-2xl p-8 md:p-16 text-center border border-primary/10 overflow-hidden">
            <motion.div
                className="max-w-3xl mx-auto flex flex-col items-center gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
            >
                <motion.span
                    variants={itemVariants}
                    className="bg-white px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider border border-primary/20"
                >
                    For Professionals
                </motion.span>

                <motion.h2
                    variants={itemVariants}
                    className="font-serif text-3xl md:text-4xl font-bold text-text-main"
                >
                    Grow your wedding business with EventEase
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-text-muted text-lg max-w-xl"
                >
                    Join thousands of wedding professionals connecting with couples every day. Showcase your
                    work and fill your calendar.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    <motion.button
                        type="button"
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-md cursor-pointer"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        List Your Business
                    </motion.button>
                    <motion.button
                        type="button"
                        className="bg-white hover:bg-gray-50 text-text-main font-bold py-3 px-8 rounded-lg shadow-sm border border-background-dim cursor-pointer"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
