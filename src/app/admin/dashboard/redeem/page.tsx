import type { Metadata } from 'next';

import RedeemModal from '@/containers/admin/redeem/RedeemModal';

import { generateTemplateMetadata } from '@/utils/metadata';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata(
  'Redeem Ticket',
  '',
  '/admin/dashboard/redeem'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function RedeemPage() {
  return (
    <section className='layout z-20'>
      <h1 className='mb-5 text-center font-baron text-cwhite'>Redeem Ticket</h1>
      <section className='flex justify-center'>
        <RedeemModal />
      </section>
    </section>
  );
}
