import type { Metadata } from 'next';

import AdminSeatingContainer from '@/containers/admin/seat/AdminSeatingContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata(
  'Seat',
  '',
  '/admin/dashboard/seat'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function SeatPage() {
  return <AdminSeatingContainer />;
}
