'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE },
    },
};

export default function HeroSection() {
    const [searchWhat, setSearchWhat] = useState('');
    const [searchWhere, setSearchWhere] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        const query = new URLSearchParams();
        if (searchWhat) query.append('q', searchWhat);
        if (searchWhere) query.append('location', searchWhere);
        const queryString = query.toString();
        router.push(queryString ? `/search?${queryString}` : '/search');
    };

    return (
        <section className="relative w-full rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center">
            {/* Background image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9HvcswEWlXM8ITs1_KEQuBWX8FT-1Uco47HivKZ3iN532EECxSuHp-jL_jYy8NDjX48YWbAC15aMVQoMys1JWwh3zLw-nshtI-xqMeJAIkwNVM8W3cehbsBnbc2713gpcocV_ZohUkjiG6b7NiZg4ZNKvIAedPejmxBWRiy93Pv9d3HtiopVnREdeqmuBP0Jank4N2Oo2GkrrBCvFDEZhFN7hKqMLl7-4fMhIxU8ppCCPoFahIXErOninsVNLsDm5iZeFJHOCZRR')",
                }}
                role="img"
                aria-label="Elegant wedding reception table setting"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
            </div>

            {/* Hero Content — staggered fade-up on initial load */}
            <motion.div
                className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 drop-shadow-md"
                >
                    Your Dream Wedding,
                    <br />
                    Planned to Perfection.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-white/90 text-lg md:text-xl font-light mb-8 max-w-xl mx-auto drop-shadow-sm"
                >
                    Discover and book the finest local professionals for your special day, all in one elegant place.
                </motion.p>

                {/* Search Block */}
                <motion.div
                    variants={itemVariants}
                    className="w-full max-w-2xl bg-white rounded-lg p-2 shadow-xl flex flex-col sm:flex-row gap-2"
                >
                    {/* What input */}
                    <div className="flex-1 relative flex items-center">
                        <span className="absolute left-3 text-text-muted">
                            <span className="material-symbols-outlined">search</span>
                        </span>
                        <input
                            id="hero-search-what"
                            type="text"
                            value={searchWhat}
                            onChange={(e) => setSearchWhat(e.target.value)}
                            placeholder="What are you looking for? (e.g. Photographer)"
                            className="w-full border-0 bg-transparent py-3 pl-10 pr-4 text-text-main placeholder:text-text-muted focus:ring-0 outline-none text-sm"
                        />
                        <div className="hidden sm:block w-px h-8 bg-gray-200 mx-2 shrink-0" />
                    </div>

                    {/* Where input */}
                    <div className="flex-1 relative flex items-center border-t sm:border-t-0 border-gray-100">
                        <span className="absolute left-3 text-text-muted">
                            <span className="material-symbols-outlined">location_on</span>
                        </span>
                        <input
                            id="hero-search-where"
                            type="text"
                            value={searchWhere}
                            onChange={(e) => setSearchWhere(e.target.value)}
                            placeholder="Where? (e.g. New York, NY)"
                            className="w-full border-0 bg-transparent py-3 pl-10 pr-4 text-text-main placeholder:text-text-muted focus:ring-0 outline-none text-sm"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleSearch}
                        className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-md transition-colors w-full sm:w-auto cursor-pointer"
                    >
                        Search
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
