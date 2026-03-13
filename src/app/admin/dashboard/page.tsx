import StatsGrid from "@/components/admin/StatsGrid";
import RecentActivity from "@/components/admin/RecentActivity";

export default function AdminDashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-text-main sm:text-3xl">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-text-muted">
            High-level visibility into platform health, vendors, and inquiries.
          </p>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-text-muted shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Live snapshot • Last updated just now
        </div>
      </section>

      <StatsGrid />

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm">
            <h2 className="text-sm font-semibold tracking-tight text-text-main">
              Pending Promotions
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              A compact summary of outstanding promotion requests can live here
              in a future iteration.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm">
            <h2 className="text-sm font-semibold tracking-tight text-text-main">
              System Health
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              Surface uptime, latency, and incident status once backend metrics
              are connected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

