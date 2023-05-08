import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Your Merch Cart',
  '',
  '/dashboard/merch/cart'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function UserMerchCartPage() {
  return <></>;
}
