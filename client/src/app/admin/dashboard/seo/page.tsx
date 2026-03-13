'use client';

import { useState } from 'react';
import SeoOverviewHeader from '@/components/admin/seo/SeoOverviewHeader';
import SeoStatsGrid from '@/components/admin/seo/SeoStatsGrid';
import GlobalSeoSettingsForm from '@/components/admin/seo/GlobalSeoSettingsForm';
import SearchPreviewCard from '@/components/admin/seo/SearchPreviewCard';
import IndexManagementPanel from '@/components/admin/seo/IndexManagementPanel';
import CrawlErrorsPanel from '@/components/admin/seo/CrawlErrorsPanel';
import TopPagesTable from '@/components/admin/seo/TopPagesTable';

interface GlobalSeoForm {
  titleSuffix: string;
  robotsRule: string;
  metaDescriptionTemplate: string;
}

export default function SeoManagerPage() {
  // Global SEO settings state — ready for Appwrite wiring
  const [globalSeo, setGlobalSeo] = useState<GlobalSeoForm>({
    titleSuffix: '| EventEase Wedding Marketplace',
    robotsRule: 'standard',
    metaDescriptionTemplate:
      'Find the best {category} in {location} for your special day. Compare prices, read reviews, and book top-rated wedding vendors on EventEase.',
  });

  // Homepage meta state — ready for Appwrite wiring
  const [metaTitle, setMetaTitle] = useState('EventEase: The #1 Wedding Vendor Marketplace');
  const [metaDescription, setMetaDescription] = useState(
    'Plan your dream wedding with ease. Discover thousands of top-rated venues, photographers, florists, and more. Compare quotes and book instantly.',
  );

  const handleGlobalSeoChange = (field: keyof GlobalSeoForm, value: string) => {
    setGlobalSeo((prev) => ({ ...prev, [field]: value }));
  };

  const handleRebuildSitemap = () => {
    // TODO: call Appwrite function to rebuild sitemap
    alert('Sitemap rebuild triggered.');
  };

  const handleSaveChanges = () => {
    // TODO: persist to Appwrite seo_settings collection
    alert('SEO settings saved.');
  };

  return (
    <div className="px-6 lg:px-10 py-8 w-full max-w-[1200px] mx-auto flex flex-col gap-8">
      {/* Page Header */}
      <SeoOverviewHeader
        onRebuildSitemap={handleRebuildSitemap}
        onSaveChanges={handleSaveChanges}
      />

      {/* KPI Stats Grid */}
      <SeoStatsGrid />

      {/* Main 2-col grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column — 2/3 */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <GlobalSeoSettingsForm values={globalSeo} onChange={handleGlobalSeoChange} />
          <SearchPreviewCard
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            onMetaTitleChange={setMetaTitle}
            onMetaDescriptionChange={setMetaDescription}
          />
          <TopPagesTable />
        </div>

        {/* Right column — 1/3 */}
        <div className="flex flex-col gap-6">
          <IndexManagementPanel />
          <CrawlErrorsPanel />
        </div>
      </div>
    </div>
  );
}
