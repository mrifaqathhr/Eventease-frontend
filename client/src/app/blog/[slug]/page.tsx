import type { Metadata } from 'next';
import ArticleHero from '@/components/blog/ArticleHero';
import ArticleBody from '@/components/blog/ArticleBody';
import SocialShare from '@/components/blog/SocialShare';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedArticles from '@/components/blog/RelatedArticles';
import YouMayAlsoLike from '@/components/blog/YouMayAlsoLike';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PageProps {
    params: Promise<{ slug: string }>;
}

// ─── Static Mock Data (replace with Appwrite fetch once backend is live) ──────

const MOCK_POST = {
    slug: '10-tips-wedding-photographer',
    category: 'Planning Tips',
    title: '10 Tips for Choosing the Perfect Wedding Photographer',
    subtitle: 'Everything you need to know to capture your special day perfectly.',
    authorName: 'Sarah Jenkins',
    authorAvatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
    authorBio:
        'Sarah is a former wedding planner turned editor for EventEase. She loves discovering new trends and helping couples navigate the complexities of modern wedding planning with grace and style.',
    date: 'October 24, 2023',
    readTime: '8 min read',
    coverImage:
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop&q=80',
    coverImageAlt: 'Bride and groom holding hands in a forest setting',
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    // In production: fetch post by slug from Appwrite
    const { slug } = await params;
    void slug; // used for real fetch later
    const post = MOCK_POST;

    return {
        title: `${post.title} — EventEase Blog`,
        description: post.subtitle,
        openGraph: {
            title: post.title,
            description: post.subtitle,
            images: [{ url: post.coverImage, width: 1200, height: 600, alt: post.coverImageAlt }],
            type: 'article',
            publishedTime: post.date,
            authors: [post.authorName],
        },
    };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    void slug; // used for real Appwrite fetch in production

    const post = MOCK_POST;
    const pageUrl = `https://eventease.in/blog/${slug}`;

    return (
        <div className="flex flex-col items-center w-full -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-0">
            {/* ── Hero ── */}
            <ArticleHero
                category={post.category}
                title={post.title}
                subtitle={post.subtitle}
                authorName={post.authorName}
                authorAvatar={post.authorAvatar}
                date={post.date}
                readTime={post.readTime}
                coverImage={post.coverImage}
                coverImageAlt={post.coverImageAlt}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog', href: '/blog' },
                ]}
            />

            {/* ── Content Layout ── */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
                {/* Left: Article (8/12 cols) */}
                <div className="lg:col-span-8 flex flex-col">
                    <ArticleBody
                        authorName={post.authorName}
                        authorAvatar={post.authorAvatar}
                        authorBio={post.authorBio}
                        ctaButtonHref="/categories/photographers"
                    >
                        {/* ── Article Content ── */}
                        <p className="lead text-xl text-text-main mb-6 leading-[1.8]">
                            Your wedding photos will be the most tangible memory of your big day. While the cake
                            gets eaten and the flowers wilt, your photos will last a lifetime. That&apos;s why
                            choosing the right photographer is one of the most crucial decisions you&apos;ll make
                            during the planning process.
                        </p>

                        <h3>1. Define Your Style</h3>
                        <p>
                            Before you start browsing portfolios, decide what kind of photography style you
                            prefer. Do you love bright, airy images with lots of natural light? Or do you lean
                            towards moody, dramatic shots? Perhaps you want a documentary approach that captures
                            candid moments, or maybe editorial, posed portraits are more your speed. Knowing what
                            you want will help you narrow down your search significantly.
                        </p>

                        <h3>2. Set a Realistic Budget</h3>
                        <p>
                            Wedding photography prices can vary wildly based on experience, location, and package
                            inclusions. Determine your budget early on, but be prepared to be flexible for the
                            right person. Remember, this is an investment in your memories.
                        </p>

                        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary-light/30 rounded-r-xl">
                            <p className="italic text-xl font-serif text-text-main not-italic leading-snug">
                                &ldquo;Don&apos;t just look at the highlights. Ask to see full wedding galleries to
                                understand how a photographer handles difficult lighting situations and different
                                parts of the day.&rdquo;
                            </p>
                        </blockquote>

                        <h3>3. Meet in Person (or Video Chat)</h3>
                        <p>
                            You will be spending your entire wedding day with your photographer—from getting ready
                            in the morning until the last dance. It is absolutely essential that you like them as
                            a person! Set up a meeting to see if your personalities mesh. You want someone who
                            makes you feel comfortable and relaxed in front of the camera.
                        </p>

                        <h3>4. Check Reviews and References</h3>
                        <p>
                            Past client experiences are invaluable. Look for reviews that mention not just the
                            quality of the photos, but also the photographer&apos;s professionalism, punctuality,
                            and how they handled the stress of the day. A great photographer is also a calm
                            presence in the midst of wedding chaos.
                        </p>
                    </ArticleBody>

                    {/* ── Social Share ── */}
                    <SocialShare title={post.title} url={pageUrl} />
                </div>

                {/* Right: Sticky Sidebar (4/12 cols) */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-24 flex flex-col gap-6">
                        <TableOfContents activeCategory={post.category} />
                        <RelatedArticles />
                    </div>
                </aside>
            </div>

            {/* ── You May Also Like ── */}
            <div className="w-full max-w-6xl mt-20">
                <YouMayAlsoLike />
            </div>
        </div>
    );
}
