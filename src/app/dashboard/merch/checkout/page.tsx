import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Merch Checkout',
  '',
  '/dashboard/merch/checkout'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function UserMerchCheckoutPage() {
  return <></>;
}
