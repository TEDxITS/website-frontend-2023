import type { Metadata } from 'next';

import UserPurchasesContainer from '@/containers/dashboard/history/UserPurchasesContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Your Ticket Purchase',
  '',
  '/dashboard/history'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function UserPurchasesPage() {
  return <UserPurchasesContainer />;
}
