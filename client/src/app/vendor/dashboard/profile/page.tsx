import type { Metadata } from 'next';
import ProfilePageClient from '@/components/dashboard/ProfilePageClient';

export const metadata: Metadata = {
    title: 'Edit Business Profile | EventEase Vendor Dashboard',
    description: 'Update your vendor profile information, gallery, and service details on EventEase.',
};

export default function ProfilePage() {
    return <ProfilePageClient />;
}
