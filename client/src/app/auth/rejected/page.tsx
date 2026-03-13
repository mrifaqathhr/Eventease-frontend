import type { Metadata } from 'next';
import AccountRejectedMessage from '@/components/auth/AccountRejectedMessage';

export const metadata: Metadata = {
    title: 'Account Status — EventEase',
    description: 'EventEase vendor account application status.',
};

export default function AccountRejectedPage() {
    return <AccountRejectedMessage />;
}
