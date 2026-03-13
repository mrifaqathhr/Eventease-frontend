import CategoryListingClient from './CategoryListingClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function CategoryListingPage({ params }: PageProps) {
    const { slug } = await params;
    return <CategoryListingClient slug={slug} />;
}
