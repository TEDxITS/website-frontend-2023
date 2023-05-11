import type { Metadata } from 'next';

import MerchGridContainer from '@/containers/dashboard/merch/MerchGridContainer';

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
  return (
    <>
      <MerchGridContainer />
    </>
  );
}
