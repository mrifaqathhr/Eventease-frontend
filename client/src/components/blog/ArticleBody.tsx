import Image from 'next/image';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ArticleBodyProps {
    /**
     * Article content as a React node (for server-rendered rich text or MDX).
     * Pass raw paragraphs for static demo pages.
     */
    children: React.ReactNode;
    /** Vendor CTA config */
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonLabel?: string;
    ctaButtonHref?: string;
    /** Author info for the bio card at the bottom */
    authorName: string;
    authorAvatar: string;
    authorBio: string;
    authorPostsHref?: string;
    authorInstagramHref?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ArticleBody({
    children,
    ctaTitle = 'Still looking for the one?',
    ctaDescription = 'Browse our curated list of top-rated wedding photographers in your area.',
    ctaButtonLabel = 'Find Photographers',
    ctaButtonHref = '/categories/photographers',
    authorName,
    authorAvatar,
    authorBio,
    authorPostsHref = '/blog',
    authorInstagramHref,
}: ArticleBodyProps) {
    return (
        <article className="lg:col-span-8 flex flex-col gap-8">
            {/* ── Prose Content ── */}
            <div
                className="
          prose prose-lg max-w-3xl
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-text-main prose-headings:tracking-tight
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-slate-600 prose-p:leading-[1.8]
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-blockquote:not-italic prose-blockquote:border-l-0 prose-blockquote:p-0 prose-blockquote:m-0
        "
            >
                {children}
            </div>

            {/* ── Vendor CTA Box ── */}
            <div className="rounded-2xl bg-primary-light border border-primary/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-1.5">
                    <h4 className="text-xl font-serif font-bold text-text-main">{ctaTitle}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{ctaDescription}</p>
                </div>
                <Link
                    href={ctaButtonHref}
                    className="whitespace-nowrap rounded-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                    {ctaButtonLabel}
                </Link>
            </div>

            {/* ── Author Bio ── */}
            <div className="border-t border-slate-100 pt-8 flex gap-6 items-start">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <Image
                        src={authorAvatar}
                        alt={authorName}
                        fill
                        className="object-cover"
                        sizes="64px"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-bold text-lg text-text-main">Written by {authorName}</h5>
                    <p className="text-text-muted text-sm leading-relaxed">{authorBio}</p>
                    <div className="flex gap-5 mt-1">
                        <Link
                            href={authorPostsHref}
                            className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
                        >
                            View all posts
                        </Link>
                        {authorInstagramHref && (
                            <Link
                                href={authorInstagramHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
                            >
                                Follow on Instagram
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
