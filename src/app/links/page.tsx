import { Suspense } from 'react';

import LinkShortenerForm from '@/containers/links/LinkShortenerForm';
import ShortLinkList from '@/containers/links/ShortLinkList';

export default async function LinkShortenerPage() {
  return (
    <main className='flex h-screen flex-col items-center justify-center gap-y-10'>
      <h1>Link Shortener</h1>
      <LinkShortenerForm />
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <ShortLinkList />
      </Suspense>
    </main>
  );
}
