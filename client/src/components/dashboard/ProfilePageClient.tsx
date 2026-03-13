'use client';

import { useState, useCallback } from 'react';
import BasicInfoForm from '@/components/dashboard/BasicInfoForm';
import DescriptionForm from '@/components/dashboard/DescriptionForm';
import ImageUploader from '@/components/dashboard/ImageUploader';
import PricingSettings from '@/components/dashboard/PricingSettings';
import ContactLinksForm from '@/components/dashboard/ContactLinksForm';
import ProTipCard from '@/components/dashboard/ProTipCard';
import SaveProfileBar from '@/components/dashboard/SaveProfileBar';

const uid = () =>
    typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2);

// ─── Types ──────────────────────────────────────────────────────────────────

interface GalleryImage {
    id: string;
    src: string;
    file?: File;
}

interface ProfileFormState {
    // Basic info
    businessName: string;
    category: string;
    location: string;
    // Description
    description: string;
    // Media
    coverPhotoFile: File | null;
    coverPhotoPreview: string | null;
    galleryImages: GalleryImage[];
    // Pricing
    startingPrice: string;
    acceptingBookings: boolean;
    // Contact
    website: string;
    instagram: string;
    facebook: string;
}

// ─── Seed data (replace with Appwrite fetch via useEffect) ──────────────────

const INITIAL_GALLERY: GalleryImage[] = [
    {
        id: uid(),
        src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80',
    },
    {
        id: uid(),
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
    },
    {
        id: uid(),
        src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80',
    },
];

const INITIAL_STATE: ProfileFormState = {
    businessName: 'Elegant Moments Photography',
    category: 'Photography',
    location: 'Dubai, UAE',
    description: '',
    coverPhotoFile: null,
    coverPhotoPreview: null,
    galleryImages: INITIAL_GALLERY,
    startingPrice: '2500',
    acceptingBookings: true,
    website: '',
    instagram: '',
    facebook: '',
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function ProfilePageClient() {
    const [form, setForm] = useState<ProfileFormState>(INITIAL_STATE);
    const [isSaving, setIsSaving] = useState(false);

    // Basic info handler
    const handleBasicInfoChange = useCallback(
        (field: 'businessName' | 'category' | 'location', value: string) => {
            setForm((prev) => ({ ...prev, [field]: value }));
        },
        [],
    );

    // Description handler
    const handleDescriptionChange = useCallback((value: string) => {
        setForm((prev) => ({ ...prev, description: value }));
    }, []);

    // Cover photo handler
    const handleCoverPhotoChange = useCallback((file: File | null, preview: string | null) => {
        setForm((prev) => ({ ...prev, coverPhotoFile: file, coverPhotoPreview: preview }));
    }, []);

    // Gallery add
    const handleGalleryAdd = useCallback((files: File[]) => {
        const newImages: GalleryImage[] = files.map((file) => ({
            id: uid(),
            src: URL.createObjectURL(file),
            file,
        }));
        setForm((prev) => ({
            ...prev,
            galleryImages: [...prev.galleryImages, ...newImages],
        }));
    }, []);

    // Gallery remove
    const handleGalleryRemove = useCallback((id: string) => {
        setForm((prev) => ({
            ...prev,
            galleryImages: prev.galleryImages.filter((img) => img.id !== id),
        }));
    }, []);

    // Pricing handler
    const handlePricingChange = useCallback(
        (field: 'startingPrice' | 'acceptingBookings', value: string | boolean) => {
            setForm((prev) => ({ ...prev, [field]: value }));
        },
        [],
    );

    // Contact handler
    const handleContactChange = useCallback(
        (field: 'website' | 'instagram' | 'facebook', value: string) => {
            setForm((prev) => ({ ...prev, [field]: value }));
        },
        [],
    );

    // Save handler — TODO: wire to Appwrite updateDocument + Storage upload
    const handleSave = async () => {
        setIsSaving(true);
        try {
            // 1. Upload coverPhotoFile to Appwrite Storage → get fileId
            // 2. Upload each galleryImages[].file to Appwrite Storage → collect fileIds
            // 3. Call databases.updateDocument(DB_ID, VENDORS_COLLECTION_ID, vendorId, { ...form })
            console.log('Saving profile…', form);
            await new Promise((r) => setTimeout(r, 1200)); // Simulated delay
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            {/* Header + breadcrumb + action buttons */}
            <SaveProfileBar onSave={handleSave} isSaving={isSaving} />

            {/* Two-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ── Left column — main form (2/3 width) ── */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <BasicInfoForm
                        businessName={form.businessName}
                        category={form.category}
                        location={form.location}
                        onChange={handleBasicInfoChange}
                    />
                    <DescriptionForm description={form.description} onChange={handleDescriptionChange} />
                    <ImageUploader
                        coverPhotoFile={form.coverPhotoFile}
                        coverPhotoPreview={form.coverPhotoPreview}
                        galleryImages={form.galleryImages}
                        onCoverPhotoChange={handleCoverPhotoChange}
                        onGalleryAdd={handleGalleryAdd}
                        onGalleryRemove={handleGalleryRemove}
                    />
                </div>

                {/* ── Right column — sidebar panels (1/3 width) ── */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <PricingSettings
                        startingPrice={form.startingPrice}
                        acceptingBookings={form.acceptingBookings}
                        onChange={handlePricingChange}
                    />
                    <ContactLinksForm
                        website={form.website}
                        instagram={form.instagram}
                        facebook={form.facebook}
                        onChange={handleContactChange}
                    />
                    <ProTipCard />
                </div>
            </div>
        </div>
    );
}
