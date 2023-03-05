import { getMetadataItems } from '@/utils/metadata';

const metadataItems = getMetadataItems();

export const BASE_METADATA = {
  title: metadataItems.title,
  description: metadataItems.description,
  creator: 'TEDxITS 2023 Website Team',
  publisher: 'TEDxITS 2023',
  keywords: [
    'TEDxITS 2023',
    'TEDxITS',
    'TEDx',
    'ITS',
    'TED',
    'Institut Teknologi Sepuluh Nopember',
    'Sepuluh Nopember Institute of Technology',
  ],
  robots: 'follow, index',
  generator: 'Next.js',
  alternates: {
    canonical: metadataItems.pathname,
  },
  icons: {
    icon: [
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
  openGraph: {
    title: metadataItems.title,
    description: metadataItems.description,
    url: metadataItems.pathname,
    siteName: 'TEDxITS 2023',
    images: {
      url: metadataItems.ogUrl,
      alt: metadataItems.title,
    },
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataItems.title,
    description: metadataItems.description,
    creator: '@TEDxITS',
    images: {
      url: metadataItems.ogUrl,
      alt: metadataItems.title,
    },
  },
};
