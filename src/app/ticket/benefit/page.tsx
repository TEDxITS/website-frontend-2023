import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Ticket Benefit',
  '',
  '/ticket/benefit'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function YourPurchasePage() {
  return <section></section>;
}
