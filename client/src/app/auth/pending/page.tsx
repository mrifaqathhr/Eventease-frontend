import type { Metadata } from 'next';
import AccountPendingMessage from '@/components/auth/AccountPendingMessage';

export const metadata: Metadata = {
    title: 'Account Pending Approval — EventEase',
    description: 'Your EventEase vendor account is currently under review.',
};

export default function AccountPendingPage() {
    return <AccountPendingMessage />;
}
