import Image from 'next/image';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ArticleHeroProps {
    category: string;
    title: string;
    subtitle?: string;
    authorName: string;
    authorAvatar: string;
    date: string;
    readTime: string;
    coverImage: string;
    coverImageAlt: string;
    breadcrumbs?: { label: string; href?: string }[];
}

// ─── Component ────────────────────────────────────────────────────────────────
// Note: Animations use CSS keyframes (defined in globals.css) rather than
// Framer Motion to avoid SSR/hydration mismatch that caused the hero to be
// invisible on initial render.

export default function ArticleHero({
    category,
    title,
    subtitle,
    authorName,
    authorAvatar,
    date,
    readTime,
    coverImage,
    coverImageAlt,
    breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
    ],
}: ArticleHeroProps) {
    return (
        <div className="w-full max-w-6xl mx-auto mb-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 mb-7">
                {breadcrumbs.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-2">
                        {crumb.href ? (
                            <Link
                                href={crumb.href}
                                className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
                            >
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="text-text-muted text-sm font-medium">{crumb.label}</span>
                        )}
                        {i < breadcrumbs.length - 1 && (
                            <span className="text-text-muted/40 text-sm">/</span>
                        )}
                    </span>
                ))}
                <span className="text-text-muted/40 text-sm">/</span>
                <span className="text-primary text-sm font-medium">{category}</span>
            </nav>

            {/* Hero Text Block — CSS fade-up animation (SSR-safe) */}
            <div className="animate-hero-text flex flex-col items-start md:items-center md:text-center max-w-4xl mx-auto gap-5 mb-10">
                {/* Category Badge */}
                <span className="inline-flex items-center rounded-full bg-primary-light px-3.5 py-1 text-xs font-bold text-primary ring-1 ring-inset ring-primary/20 uppercase tracking-wider">
                    {category}
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-tight tracking-tight text-text-main">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-lg md:text-xl text-text-muted font-serif italic">{subtitle}</p>
                )}

                {/* Author Row */}
                <div className="flex items-center gap-4 mt-1">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                        <Image
                            src={authorAvatar}
                            alt={`${authorName} profile photo`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-sm font-bold text-text-main">{authorName}</span>
                        <span className="text-xs text-text-muted">
                            {date} &bull; {readTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Image — CSS fade-up with slight delay */}
            <div className="animate-hero-image group relative w-full">
                <div className="aspect-[2/1] w-full overflow-hidden rounded-2xl shadow-xl">
                    <Image
                        src={coverImage}
                        alt={coverImageAlt}
                        fill
                        priority
                        sizes="(max-width: 1280px) 100vw, 1152px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}
