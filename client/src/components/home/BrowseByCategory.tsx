'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Category {
    name: string;
    href: string;
    imageUrl: string;
    imageAlt: string;
}

const categories: Category[] = [
    {
        name: 'Venues',
        href: '/search?category=venues',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDxFCccmiEx2OHICiFWG7xbqz-CXigqxnRTxfXwcRJMWmzfasuhi8gKlXQUCXIrUXAOkzGZ7TUS3VfkqMZoFooI0E1pselwWzPSX18dsxZCKDXusqUPIlX1aX9D4orVOaYNTzBHopOwGkBB5YuUmXatTB2KP0gQQi7BWMFSGcpT9diBzTA9IO5orGxNQIqWfQeiLuSz_lctYBr4rJZrjb2d4opSHwospSuxelTjTp8U897QhSViDrpJdRIQVbYwdNH7IWPLBcCv-kD_',
        imageAlt: 'Beautiful wedding venue hall',
    },
    {
        name: 'Photographers',
        href: '/search?category=photographers',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAK9PJ5-rMcBO2R1E-_pF9wuFVGZ1TcUbtV6c1hEFcf2AT_6ZOuboGsVNYG3R4dGyiZXLvq_9qcslffe__E4aE4m9lVbZV2M2L48H71kb1YTnjoEyOGdrdy5lc8qp5STatIaqbMm6jys0w7PZpHQ6s86yUEFnFGdxilR_uPRBoqfaYE49BTZRGGt3_0H7HTFc3UkDEqPs4S3KVd-u_EZ-ki8dhl3mdei48TCqZeRa7QYX2AqkNHJyRXPYfsWUnAYdXvLPl3Vht1Xs8J',
        imageAlt: 'Photographer taking picture',
    },
    {
        name: 'Florists',
        href: '/search?category=florists',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAhjMgfFiZdfi9t87RXMDY5TekTaLFte8EDMc5lDsZfUtRWI1_B3w5K6G-RP7fMnXot3oM75tRzzJuFIb96AdbgNkbJxTdt3p89N-9-fi5Rt4fkcrja8YF3evvvt_emOpoisl5tqhOZqXi5yWUhUYNqAA-G9S6JIi1bW4ceKiM6DES47o35u_lrNmzyNnECFgddyjDfAEeO7sfNmgv8wiH4TVCTP5zuAb48nIjuwndtFTqTcn2f-n1S0364yP66VuBSB5_JX3vuajnl',
        imageAlt: 'Wedding floral arrangement',
    },
    {
        name: 'Catering',
        href: '/search?category=catering',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCs4R2FXYJbKQQePbXnjVCXtXD2nFbgY_IX_XsEJuBX4kW1tvA24FAoPvh-pF4N6hbOwZ3bs-Zl0eq6tE05fNfZsZz93uZPaYN9sQCZhN6dPG8QhMvWvFBv-6UWBAuJvSvDK0zfPySlosvj6qE7nffH2HztT5HeXrGmYbc1ASt2t3o-Gv-V2lPQQYLBL8aYdlKZ_mQYPeOuTpbAILQiWWPy-vSTbqKt97ZJl8ApAJdY4Sjx4KUcGKpO6OkgRXhGP8omRL4zT180Ix1u',
        imageAlt: 'Gourmet wedding catering food',
    },
    {
        name: 'Beauty',
        href: '/search?category=beauty',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB6kbXOzdmy5xrYlRY2HdR5bP6XUN-cVz1qLbpGr_omAdk5iXfSW_QzwxxiQK0UTCIFeppLmKvuPinvqVR4r79MtenwYo16wg1-VCZb51yXzNjN34PHByrOFawYExyFmIvr05fRWiDJkPu5dPCXPlRRBzyLh4-zmFyv4FO7-0Nimzusw--MDzlSc-uy22o2b7rIHX9mg5-kym46RJn8KUzAArHrLCTZihiu0IR_tqYRrwqY5b8c8BUsnDbppRggGZrWLSFL78VZk6Qi',
        imageAlt: 'Wedding makeup artist working',
    },
    {
        name: 'Cakes',
        href: '/search?category=cakes',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBjBvZjjs0HYg78KkD0IbTRMI8t8_tU_fmBIW0nXqG36A2rtBsD3jOi1SHcGoMnFkC-sDtBcai0PKRiWgyX27ULNB7kMTwMAwb9cUKIGf2DOUjJP4u0GwMVwTVDPRoawKiX5OmUoDpLEg7IrU-ysdx8ACmn4ECjYjs0TAjQv5L_gaPxDjekHqowItjbwQQd73IXiJ02dVJ4y0a3B5-XHpV1CsACduzsTtTYqmzzITaQLcRb8SwmB7JjK-x_iIamfvh7scQrsLPccE86',
        imageAlt: 'Wedding cake and desserts',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: EASE },
    },
};

export default function BrowseByCategory() {
    return (
        <section>
            {/* Header fades in when scrolled into view */}
            <motion.div
                className="flex items-center justify-between mb-8 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2 className="text-text-main font-serif text-3xl font-bold">Browse by Category</h2>
                <Link
                    href="/search"
                    className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-1 group"
                >
                    View all{' '}
                    <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
            </motion.div>

            {/* Staggered grid */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {categories.map((cat) => (
                    <motion.div key={cat.name} variants={cardVariants}>
                        <Link
                            href={cat.href}
                            className="group relative rounded-xl overflow-hidden aspect-square block"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                                role="img"
                                aria-label={cat.imageAlt}
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-4">
                                <p className="text-white font-bold text-lg">{cat.name}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
