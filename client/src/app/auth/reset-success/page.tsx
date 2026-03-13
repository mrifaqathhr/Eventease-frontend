import type { Metadata } from 'next';
import ResetSuccessMessage from '@/components/auth/ResetSuccessMessage';

export const metadata: Metadata = {
    title: 'Password Updated — EventEase',
    description: 'Your EventEase vendor password was successfully updated.',
};

export default function ResetSuccessPage() {
    return <ResetSuccessMessage />;
}
