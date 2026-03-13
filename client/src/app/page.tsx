import HeroSection from '@/components/home/HeroSection';
import BrowseByCategory from '@/components/home/BrowseByCategory';
import FeaturedVendors from '@/components/home/FeaturedVendors';
import AdCarousel from '@/components/home/AdCarousel';
import VendorCTA from '@/components/home/VendorCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <BrowseByCategory />
      <FeaturedVendors />
      <AdCarousel />
      <VendorCTA />
    </div>
  );
}
