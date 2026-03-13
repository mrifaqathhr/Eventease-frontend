'use client';

import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Vendor {
    id: string;
    name: string;
    category: string;
    location: string;
    rating: number;
    pricingLabel: string;
    imageUrl: string;
    imageAlt: string;
    isFavorited?: boolean;
}

const featuredVendors: Vendor[] = [
    {
        id: 'lumina-moments',
        name: 'Lumina Moments',
        category: 'Photography',
        location: 'Brooklyn, NY',
        rating: 4.9,
        pricingLabel: 'Starting at $2,500',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDGfKinQraRe3Z71j9jAvLKl32GDv6hQvZ6-CwxlIvsOdtR74kLLATlH6195ij9SL3PufuKXlnfx1S3g3qR9EaSX5ZHLPQYcALR0-j1UZZcNllvCONQhxXnuJ-MDTDfbOzmEXYXKe8CUj7oUjQpaLrm8ZCUxQbvKXiyNU7zMwui3sKzMvgBFHvr6Z3LQNN2HzhAsTHqlJF5isLVR3TJ_iPyaV9tuBnYP0QGAzriZJe3qheRN6mT3HkURG1Ry-tkIDsS2jBt3nqVVhZu',
        imageAlt: 'Modern bright photography studio',
        isFavorited: true,
    },
    {
        id: 'the-old-barn',
        name: 'The Old Barn',
        category: 'Venue',
        location: 'Hudson Valley, NY',
        rating: 4.8,
        pricingLabel: 'Capacity: 200',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCbV2U5GX6kYh182PhM5taEL3N8PEormoVdJJKROvcpWleDcZ3jnkiP_l8B9ZvzwdIszhEEG1-nK5l2u9OcaMFCreNWtDBIT4npet-EPjNtLWOhiCHd6axWKdZI_De2loWer0FqbvSAbAMvFScspEQG3t1I9PiuhZOo8YuGiD94BrZ3pYANiog0LyLH9n01QO4pjxyt8wvDnr-QoNI1HOM_TXMCoH9lUR0MDM46env1_lYkG5KsclFXFItM-M6L-O7wh_oUHybbow3O',
        imageAlt: 'Rustic barn wedding venue exterior',
    },
    {
        id: 'petal-and-stem',
        name: 'Petal & Stem',
        category: 'Florist',
        location: 'Manhattan, NY',
        rating: 5.0,
        pricingLabel: 'Custom Quotes',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCptARd7s6bjSMpBgTgmhGrhQdonWjIgTaJH4WlwQmW5bU7tiFdNFxyGYAZIi6r9WjQhMv9s5OtbC6sVO52FABdIZapNHj7wJi-v9VLV6BSQWR-9ixGbMdmuV8sj1fhXrl55a57qpFP_LOF_ZbX7VINs3B3nRr_vLqCJ6umfGxp8HL33RgwNzNSfBSkRNxSO2xZPlzYu4q5vSQYZBv-iL8pR0U2rF7AlWpxY5XGKSPJ_muSNK6vF33PAOA5vWKyJ_wCd0KC33eYwsBg',
        imageAlt: 'Detailed floral centerpiece closeup',
    },
    {
        id: 'groove-collective',
        name: 'Groove Collective',
        category: 'Music',
        location: 'Jersey City, NJ',
        rating: 4.7,
        pricingLabel: 'Starting at $1,800',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8K_nb1zZxvsII-7oUUx_ORFuNGKXQvDz3QEOm8HYAgf8Ze_YtAeQes5wb0JcwhsiacQUCMiGdjJHknFU6sZp9drKlhxY2YQSClYM6exvWAf70QCnPC1ijxqMC5yPPbKydMbVSEhwd1xIyiCWajGfJe0hHd8iYiAutyV25pszxImoLdT1UjB_WLhSRGCcj5ct07cwluylKSoOejXEQwoeCbsB2EnOmwtOTwvg-b6w7tmLcqAg25jXQwCCOzRB9TgjnKodqz88D8FZ',
        imageAlt: 'Live band playing instruments',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
};

function VendorCard({ vendor }: { vendor: Vendor }) {
    return (
        <motion.div
            className="group flex flex-col bg-white rounded-xl shadow-sm border border-background-dim overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${vendor.imageUrl}')` }}
                    role="img"
                    aria-label={vendor.imageAlt}
                />
                <button
                    type="button"
                    aria-label={vendor.isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                    className={`absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-1.5 cursor-pointer hover:bg-white transition-colors ${vendor.isFavorited ? 'text-primary' : 'text-text-muted hover:text-primary'
                        }`}
                >
                    <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-text-main truncate">{vendor.name}</h3>
                    <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0 ml-2">
                        {vendor.rating.toFixed(1)}
                        <span className="material-symbols-outlined" style={{ fontSize: '10px' }}>star</span>
                    </div>
                </div>
                <p className="text-sm text-text-muted mb-3">
                    {vendor.category} • {vendor.location}
                </p>
                <div className="mt-auto pt-3 border-t border-background-dim flex items-center justify-between">
                    <span className="text-xs font-medium text-text-muted">{vendor.pricingLabel}</span>
                    <button
                        type="button"
                        className="text-primary text-sm font-bold hover:underline cursor-pointer"
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturedVendors() {
    return (
        <section>
            {/* Section header */}
            <motion.div
                className="flex flex-col gap-2 mb-8 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2 className="text-text-main font-serif text-3xl font-bold">Featured Professionals</h2>
                <p className="text-text-muted">Top-rated vendors loved by couples like you</p>
            </motion.div>

            {/* Staggered 4-col grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {featuredVendors.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                ))}
            </motion.div>
        </section>
    );
}
