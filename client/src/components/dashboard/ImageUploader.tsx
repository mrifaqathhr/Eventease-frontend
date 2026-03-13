'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, type Transition } from 'framer-motion';

interface GalleryImage {
    id: string;
    src: string;
    file?: File;
}

interface ImageUploaderProps {
    coverPhotoFile: File | null;
    coverPhotoPreview: string | null;
    galleryImages: GalleryImage[];
    onCoverPhotoChange: (file: File | null, preview: string | null) => void;
    onGalleryAdd: (files: File[]) => void;
    onGalleryRemove: (id: string) => void;
}

const transition: Transition = { duration: 0.45, ease: 'easeOut', delay: 0.15 };

export default function ImageUploader({
    coverPhotoFile,
    coverPhotoPreview,
    galleryImages,
    onCoverPhotoChange,
    onGalleryAdd,
    onGalleryRemove,
}: ImageUploaderProps) {
    const coverInputRef = useRef<HTMLInputElement>(null);
    const galleryInputRef = useRef<HTMLInputElement>(null);

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            const preview = URL.createObjectURL(file);
            onCoverPhotoChange(file, preview);
        } else {
            onCoverPhotoChange(null, null);
        }
        e.target.value = '';
    };

    const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);
        if (files.length > 0) onGalleryAdd(files);
        e.target.value = '';
    };

    // Suppress unused variable warning — coverPhotoFile is intentionally kept for parent state
    void coverPhotoFile;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-border-color dark:border-white/5 p-6 md:p-8"
        >
            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl text-primary">
                        <span className="material-symbols-outlined" aria-hidden="true">imagesmode</span>
                    </div>
                    <h2 className="text-2xl font-bold text-text-main dark:text-white font-serif">
                        Media &amp; Branding
                    </h2>
                </div>
                <button
                    type="button"
                    onClick={() => galleryInputRef.current?.click()}
                    className="text-sm font-semibold text-primary hover:underline"
                >
                    Manage Gallery
                </button>
            </div>

            {/* Cover Photo */}
            <div className="mb-8">
                <label className="block text-sm font-semibold text-text-main dark:text-slate-200 mb-2">
                    Cover Photo
                </label>

                <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCoverChange}
                    className="sr-only"
                    aria-label="Upload cover photo"
                />

                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => coverInputRef.current?.click()}
                    onKeyDown={(e) => e.key === 'Enter' && coverInputRef.current?.click()}
                    className="relative w-full h-48 bg-gray-100 dark:bg-white/5 rounded-xl border-2 border-dashed border-border-color dark:border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors group overflow-hidden"
                    aria-label="Click to upload a cover photo"
                >
                    <Image
                        src={
                            coverPhotoPreview ??
                            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80'
                        }
                        alt={coverPhotoPreview ? 'Cover photo preview' : 'Default cover photo'}
                        fill
                        className={`object-cover transition-opacity ${coverPhotoPreview
                                ? 'opacity-60 group-hover:opacity-40'
                                : 'opacity-40 group-hover:opacity-30'
                            }`}
                        unoptimized
                    />
                    <div className="relative z-10 flex flex-col items-center pointer-events-none">
                        <div className="bg-white/80 dark:bg-black/50 p-3 rounded-full mb-2 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-text-main dark:text-white" aria-hidden="true">
                                cloud_upload
                            </span>
                        </div>
                        <span className="text-sm font-medium text-text-main dark:text-white bg-white/60 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                            {coverPhotoPreview ? 'Change Cover Photo' : 'Upload Cover Photo'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Portfolio Gallery */}
            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-slate-200 mb-2">
                    Portfolio Gallery
                </label>

                <input
                    ref={galleryInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryChange}
                    className="sr-only"
                    aria-label="Add gallery photos"
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {galleryImages.map((img) => (
                        <div key={img.id} className="aspect-square rounded-xl overflow-hidden relative group">
                            <Image
                                src={img.src}
                                alt="Portfolio image"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={() => onGalleryRemove(img.id)}
                                    aria-label="Remove image"
                                    className="text-white hover:text-red-400 transition-colors p-1"
                                >
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Add Photo tile */}
                    <button
                        type="button"
                        onClick={() => galleryInputRef.current?.click()}
                        className="aspect-square rounded-xl border-2 border-dashed border-border-color dark:border-white/10 flex flex-col items-center justify-center text-text-muted hover:text-primary hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
                        aria-label="Add more photos"
                    >
                        <span className="material-symbols-outlined text-3xl mb-1" aria-hidden="true">
                            add_photo_alternate
                        </span>
                        <span className="text-xs font-medium">Add Photo</span>
                    </button>
                </div>
            </div>
        </motion.section>
    );
}
