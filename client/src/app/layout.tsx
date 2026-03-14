import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import RootMain from '@/components/layout/RootMain';
import { AuthProvider } from "../lib/AuthContext";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EventEase — Wedding Vendor Marketplace',
  description:
    'Discover and book the finest local wedding professionals for your special day. Browse vetted venues, photographers, florists, caterers, and more on EventEase.',
  keywords: ['wedding vendors', 'wedding marketplace', 'wedding planning', 'venues', 'photographers'],
  openGraph: {
    title: 'EventEase — Wedding Vendor Marketplace',
    description:
      'The modern marketplace for wedding planning. Connect with the perfect vendors to make your special day unforgettable.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background-light text-text-main font-sans min-h-screen flex flex-col antialiased">
        <AuthProvider>
          <RootMain>{children}</RootMain>
        </AuthProvider>
      </body>
    </html>
  );
}
