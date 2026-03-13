import type { Metadata } from 'next';
import PromotionSuccessClient from '@/components/dashboard/promotions/PromotionSuccessClient';

export const metadata: Metadata = {
    title: 'Promotion Request Submitted | EventEase Vendor Portal',
    description:
        'Your promotion request has been received. Our team will review and follow up within 24-48 hours.',
};

export default function PromotionSuccessPage() {
    return <PromotionSuccessClient />;
}
