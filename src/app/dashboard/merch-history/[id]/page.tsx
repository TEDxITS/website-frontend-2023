import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Your Merch Purchase',
  '',
  '/dashboard/merch-history'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function UserMerchHistoryDetailPage() {
  return <></>;
}
