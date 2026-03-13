'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdSlide {
    id: string;
    vendorName: string;
    tagline: string;
    ctaLabel: string;
    imageUrl: string;
    imageAlt: string;
    accentColor: string;
}

const slides: AdSlide[] = [
    {
        id: 'lumina-moments',
        vendorName: 'Lumina Moments Photography',
        tagline: 'Award-winning wedding photography capturing your love story forever.',
        ctaLabel: 'View Profile',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9HvcswEWlXM8ITs1_KEQuBWX8FT-1Uco47HivKZ3iN532EECxSuHp-jL_jYy8NDjX48YWbAC15aMVQoMys1JWwh3zLw-nshtI-xqMeJAIkwNVM8W3cehbsBnbc2713gpcocV_ZohUkjiG6b7NiZg4ZNKvIAedPejmxBWRiy93Pv9d3HtiopVnREdeqmuBP0Jank4N2Oo2GkrrBCvFDEZhFN7hKqMLl7-4fMhIxU8ppCCPoFahIXErOninsVNLsDm5iZeFJHOCZRR',
        imageAlt: 'Elegant wedding reception set up for photography',
        accentColor: '#ee2b5b',
    },
    {
        id: 'the-old-barn',
        vendorName: 'The Old Barn Venue',
        tagline: 'A timeless rustic retreat in the Hudson Valley — for up to 200 guests.',
        ctaLabel: 'View Profile',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCbV2U5GX6kYh182PhM5taEL3N8PEormoVdJJKROvcpWleDcZ3jnkiP_l8B9ZvzwdIszhEEG1-nK5l2u9OcaMFCreNWtDBIT4npet-EPjNtLWOhiCHd6axWKdZI_De2loWer0FqbvSAbAMvFScspEQG3t1I9PiuhZOo8YuGiD94BrZ3pYANiog0LyLH9n01QO4pjxyt8wvDnr-QoNI1HOM_TXMCoH9lUR0MDM46env1_lYkG5KsclFXFItM-M6L-O7wh_oUHybbow3O',
        imageAlt: 'Rustic barn venue exterior at golden hour',
        accentColor: '#c9793a',
    },
    {
        id: 'petal-and-stem',
        vendorName: 'Petal & Stem Floristry',
        tagline: 'Bespoke floral design that transforms your wedding into a living work of art.',
        ctaLabel: 'View Profile',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCptARd7s6bjSMpBgTgmhGrhQdonWjIgTaJH4WlwQmW5bU7tiFdNFxyGYAZIi6r9WjQhMv9s5OtbC6sVO52FABdIZapNHj7wJi-v9VLV6BSQWR-9ixGbMdmuV8sj1fhXrl55a57qpFP_LOF_ZbX7VINs3B3nRr_vLqCJ6umfGxp8HL33RgwNzNSfBSkRNxSO2xZPlzYu4q5vSQYZBv-iL8pR0U2rF7AlWpxY5XGKSPJ_muSNK6vF33PAOA5vWKyJ_wCd0KC33eYwsBg',
        imageAlt: 'Close-up of a luxury floral wedding centrepiece',
        accentColor: '#6a9e6f',
    },
];

const SLIDE_DURATION = 5000; // ms between auto-advances

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
        transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
    }),
};

const overlayTransition = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
};

function ArrowButton({
    direction,
    onClick,
}: {
    direction: 'left' | 'right';
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
            className="
        group absolute top-1/2 -translate-y-1/2 z-20
        flex items-center justify-center
        size-11 rounded-full
        bg-white/20 backdrop-blur-md border border-white/30
        text-white hover:bg-white hover:text-text-main
        shadow-lg transition-all duration-200 hover:scale-110
        cursor-pointer
      "
            style={{ [direction === 'left' ? 'left' : 'right']: '1.25rem' }}
        >
            <span className="material-symbols-outlined text-xl leading-none">
                {direction === 'left' ? 'chevron_left' : 'chevron_right'}
            </span>
        </button>
    );
}

export default function AdCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);

    const total = slides.length;

    const goTo = useCallback(
        (index: number, dir?: number) => {
            setDirection(dir ?? (index > current ? 1 : -1));
            setCurrent((index + total) % total);
        },
        [current, total],
    );

    const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

    // Auto-play
    useEffect(() => {
        if (paused) return;
        const timer = setTimeout(next, SLIDE_DURATION);
        return () => clearTimeout(timer);
    }, [current, paused, next]);

    const slide = slides[current];

    return (
        <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full"
        >
            {/* Sponsored label */}
            <div className="flex items-center gap-2 mb-4 px-2">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">
                    Featured Vendors
                </span>
                <div className="flex-1 h-px bg-background-dim" />
                <span className="text-[10px] font-semibold text-text-muted/60 uppercase tracking-widest border border-background-dim rounded-full px-2 py-0.5">
                    Sponsored
                </span>
            </div>

            {/* Carousel stage */}
            <div
                className="relative w-full rounded-2xl overflow-hidden shadow-xl"
                style={{ aspectRatio: '21 / 7', minHeight: '260px', maxHeight: '420px' }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Slides */}
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={slide.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                    >
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center scale-[1.02]"
                            style={{ backgroundImage: `url('${slide.imageUrl}')` }}
                            role="img"
                            aria-label={slide.imageAlt}
                        />

                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Slide content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${slide.id}`}
                                {...overlayTransition}
                                transition={{ delay: 0.3, duration: 0.55 }}
                                className="absolute inset-0 flex flex-col justify-end pb-10 pl-8 pr-24 sm:pl-14 sm:pr-36"
                            >
                                {/* Accent pill */}
                                <span
                                    className="inline-flex items-center self-start mb-3 px-3 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wider"
                                    style={{ backgroundColor: slide.accentColor + 'cc' }}
                                >
                                    <span className="material-symbols-outlined text-[14px] mr-1">verified</span>
                                    Featured
                                </span>

                                <h2 className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 drop-shadow-md">
                                    {slide.vendorName}
                                </h2>
                                <p className="text-white/85 text-sm sm:text-base mb-5 max-w-md leading-relaxed drop-shadow-sm">
                                    {slide.tagline}
                                </p>
                                <button
                                    type="button"
                                    className="self-start flex items-center gap-2 bg-white text-text-main text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
                                >
                                    {slide.ctaLabel}
                                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <ArrowButton direction="left" onClick={prev} />
                <ArrowButton direction="right" onClick={next} />

                {/* Pagination dots */}
                <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2">
                    {slides.map((s, i) => (
                        <button
                            key={s.id}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className="cursor-pointer transition-all duration-300 rounded-full"
                            style={{
                                width: i === current ? '24px' : '8px',
                                height: '8px',
                                backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.45)',
                            }}
                        />
                    ))}
                </div>

                {/* Progress bar */}
                {!paused && (
                    <motion.div
                        key={`progress-${current}`}
                        className="absolute bottom-0 left-0 h-[3px] z-20"
                        style={{ backgroundColor: slide.accentColor }}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                    />
                )}
            </div>
        </motion.section>
    );
}
