import PlatformStats from '@/components/admin/PlatformStats';
import UrgentAlerts from '@/components/admin/UrgentAlerts';
import RecentVendorsWidget from '@/components/admin/RecentVendorsWidget';
import PendingPromotions from '@/components/admin/PendingPromotions';
import SystemHealth from '@/components/admin/SystemHealth';

export const metadata = {
    title: 'Dashboard Overview — EventEase Admin',
    description: 'Admin overview: platform stats, recent vendor activity, urgent alerts, and system health.',
};

export default function AdminOverviewPage() {
    return (
        <div className="p-4 lg:p-8 bg-[#f8f6f6] min-h-full">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Welcome header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-bold text-text-main">Welcome back, Sarah!</h3>
                        <p className="text-text-muted mt-1 text-sm">Here&apos;s what&apos;s happening with your vendors today.</p>
                    </div>
                    <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1 shadow-sm self-start sm:self-auto">
                        <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 text-text-main shadow-sm">
                            Today
                        </button>
                        <button className="px-3 py-1.5 text-sm font-medium rounded-md text-text-muted hover:text-text-main transition-colors">
                            Week
                        </button>
                        <button className="px-3 py-1.5 text-sm font-medium rounded-md text-text-muted hover:text-text-main transition-colors">
                            Month
                        </button>
                    </div>
                </div>

                {/* KPI Stats */}
                <PlatformStats />

                {/* Main split layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column — alerts + activity table */}
                    <div className="lg:col-span-2 space-y-6">
                        <UrgentAlerts />
                        <RecentVendorsWidget />
                    </div>

                    {/* Right column — pending promotions, system health */}
                    <div className="space-y-6">
                        <PendingPromotions />
                        <SystemHealth />
                    </div>
                </div>

                {/* Footer spacing */}
                <div className="h-8" />
            </div>
        </div>
    );
}
