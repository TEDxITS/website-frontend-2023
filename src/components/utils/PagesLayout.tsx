'use client';
import Head from 'next/head';

import DefaultHead from '@/components/utils/DefaultHead';

// Wrapper for pages that use pages directory
export default function PagesLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const fullTitle = title ? `${title} | TEDxITS 2023` : 'TEDxITS 2023';
  return (
    <div>
      <Head>
        <title>{fullTitle}</title>
        <DefaultHead templateTitle={title} />
      </Head>
      {children}
    </div>
  );
}
