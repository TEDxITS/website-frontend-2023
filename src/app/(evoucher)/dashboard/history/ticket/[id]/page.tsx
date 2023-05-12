import type { Metadata } from 'next';

import UserTicketContainer from '@/containers/dashboard/history/UserTicketContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'TEDxITS 2023 E-Ticket',
  '',
  '/dashboard/history/ticket'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function UserTicketPage({ params }: { params: { id: string } }) {
  return (
    <section className='min-h-screen bg-black bg-transparent-stars py-16'>
      <div className='layout'>
        <UserTicketContainer bookingDetailId={params.id} />
        <h3 className='my-5 text-center font-baron text-cwhite'>Information</h3>
        <div className='rounded-lg border-2 border-dashed border-cwhite p-10'>
          <p className='text-cwhite'>
            Information about the ticket will be displayed here. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
}
