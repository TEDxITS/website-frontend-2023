import type { Metadata } from 'next';

import MerchGridContainer from '@/containers/dashboard/merch/MerchGridContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Merch Catalogue',
  '',
  '/merch-catalogue'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function MerchCataloguePage() {
  return (
    <>
      <div className='bw max-h-fit min-h-screen'>
        <MerchGridContainer />
      </div>
    </>
  );
}
