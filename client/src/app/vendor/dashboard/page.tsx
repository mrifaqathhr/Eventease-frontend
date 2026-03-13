import type { Metadata } from 'next';
import StatCards from '@/components/dashboard/StatCards';
import RecentActivityFeed from '@/components/dashboard/RecentActivityFeed';
import BoostCTA from '@/components/dashboard/BoostCTA';
import ProfileViewsChart from '@/components/dashboard/ProfileViewsChart';

export const metadata: Metadata = {
    title: 'Dashboard Overview | EventEase Vendor Portal',
    description: 'Your EventEase vendor dashboard — view your leads, active listings, and profile performance at a glance.',
};

export default function VendorDashboardPage() {
    return (
        <div className="p-6 lg:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Welcome section */}
                <div>
                    <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-text-main mb-1">
                        Welcome back, <span className="text-primary">Elegant Moments</span>
                    </h1>
                    <p className="text-text-muted">
                        Here&apos;s what&apos;s happening with your wedding business today.
                    </p>
                </div>

                {/* Stat cards — staggered framer-motion (client component) */}
                <StatCards />

                {/* Main content grid: leads feed (2/3) + right column (1/3) */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Recent leads table — spans 2 columns */}
                    <div className="xl:col-span-2">
                        <RecentActivityFeed />
                    </div>

                    {/* Right column stack */}
                    <div className="flex flex-col gap-6">
                        <BoostCTA />
                        <ProfileViewsChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
