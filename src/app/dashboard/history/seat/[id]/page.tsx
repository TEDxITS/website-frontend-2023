import type { Metadata } from 'next';

import SeatingContainer from '@/containers/dashboard/history/SeatingContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Choose Seat',
  '',
  '/dashboard/history/seat'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function SeatingPage({ params }: { params: { id: string } }) {
  return <SeatingContainer bookingDetailsId={params.id} />;
}
