import type { Metadata } from 'next';

import UserPurchaseContainer from '@/containers/dashboard/history/UserPurchaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Your Purchase',
  '',
  '/dashboard/history/purchase'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function UserPurchasePage({
  params,
}: {
  params: { id: string };
}) {
  return <UserPurchaseContainer bookingId={params.id} />;
}
