import type { Metadata } from 'next';
import { Suspense } from 'react';

import TicketDatabaseContainer from '@/containers/admin/tickets/TicketDatabaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata(
  'Ticket Dashboard',
  '',
  '/admin/tickets'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function TicketDashboardPage() {
  return (
    <section className='layout z-20'>
      <h1 className='mb-5 font-baron text-cwhite'>Ticket Admin Database</h1>

      <Suspense
        fallback={
          <p className='py-10 text-center text-lg text-cwhite'>Loading..</p>
        }
      >
        <TicketDatabaseContainer />
      </Suspense>
    </section>
  );
}
