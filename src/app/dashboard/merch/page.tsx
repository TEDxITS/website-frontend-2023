import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Merch',
  '',
  '/dashboard/merch'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function MerchPage() {
  return <></>;
}
