import type { Metadata } from 'next';
import InquiryConfirmation from '@/components/shared/InquiryConfirmation';

export const metadata: Metadata = {
    title: 'Inquiry Sent — EventEase',
    description: 'Your inquiry has been sent to the vendor.',
};

export default function InquirySuccessPage() {
    return <InquiryConfirmation />;
}
