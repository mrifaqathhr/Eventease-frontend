import type { Metadata } from 'next';
import LeadsStatsBar from '@/components/dashboard/LeadsStatsBar';
import LeadsTable from '@/components/dashboard/LeadsTable';

export const metadata: Metadata = {
    title: 'Leads & Inquiries | EventEase Vendor Portal',
    description: 'Manage and track your incoming client inquiries and leads from the EventEase platform.',
};

export default function LeadsPage() {
    return (
        <div className="p-6 lg:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Page header */}
                <div>
                    <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-text-main mb-1">
                        Leads &amp; Inquiries
                    </h1>
                    <p className="text-text-muted">
                        Manage and track your potential clients efficiently.
                    </p>
                </div>

                {/* Stats bar */}
                <LeadsStatsBar />

                {/* Leads table with search/filter/sort state */}
                <LeadsTable />
            </div>
        </div>
    );
}
