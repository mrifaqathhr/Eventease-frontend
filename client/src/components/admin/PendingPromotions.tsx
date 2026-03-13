'use client';

import Link from 'next/link';

const pendingPromos = [
    {
        id: '1',
        title: 'Summer Sale Banner',
        submittedBy: 'Luxe Decor',
        thumbnail: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=96&h=96&fit=crop',
    },
    {
        id: '2',
        title: 'Homepage Feature',
        submittedBy: 'DJ Mike',
        thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=96&h=96&fit=crop',
    },
];

export default function PendingPromotions() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-lg text-text-main mb-4">Pending Promotions</h3>

            <div className="space-y-3">
                {pendingPromos.map((promo) => (
                    <div
                        key={promo.id}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50 hover:border-primary/20 transition-colors"
                    >
                        <div
                            className="h-12 w-12 rounded-lg bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url('${promo.thumbnail}')` }}
                            aria-hidden="true"
                        />
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-text-main truncate">{promo.title}</h4>
                            <p className="text-xs text-text-muted">Submitted by: {promo.submittedBy}</p>
                        </div>
                        <button
                            type="button"
                            className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors flex-shrink-0"
                            aria-label={`View ${promo.title}`}
                        >
                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                    </div>
                ))}
            </div>

            <Link
                href="/admin/dashboard/promotions"
                className="w-full mt-4 py-2 text-sm font-bold text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            >
                View All Requests
            </Link>
        </div>
    );
}
