import type { Metadata } from 'next';

import UserTicketContainer from '@/containers/dashboard/history/UserTicketContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Your Ticket',
  '',
  '/dashboard/history/ticket'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function UserTicketPage({ params }: { params: { id: string } }) {
  return <UserTicketContainer bookingDetailId={params.id} />;
}
