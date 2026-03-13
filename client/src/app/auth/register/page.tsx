import type { Metadata } from 'next';
import AuthSidebar from '@/components/auth/AuthSidebar';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
    title: 'Register as a Vendor — EventEase',
    description:
        'Join EventEase as a vendor. Create your business profile, connect with clients, and grow your event business.',
};

export default function RegisterPage() {
    return (
        <>
            {/* Left: Branding sidebar — register variant (hidden on mobile) */}
            <AuthSidebar variant="register" />

            {/* Right: Register form panel */}
            <RegisterForm />
        </>
    );
}
