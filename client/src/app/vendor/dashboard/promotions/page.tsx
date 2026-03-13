import type { Metadata } from 'next';
import PromotionPageClient from '@/components/dashboard/promotions/PromotionPageClient';

export const metadata: Metadata = {
    title: 'Promotions | EventEase Vendor Portal',
    description:
        'Boost your visibility on EventEase. Choose a promotion plan to reach more couples and grow your wedding business.',
};

export default function PromotionsPage() {
    return <PromotionPageClient />;
}
