import { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import GrandThemeContainer from '@/containers/about/GrandThemeContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Grand Theme',
  '',
  '/grand-theme'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function GrandTheme() {
  return (
    <div>
      <div className='w-screen overflow-hidden overflow-x-clip bg-black bg-stars bg-contain bg-repeat'>
        <Header />
        <GrandThemeContainer />
        <NormalFooter />
      </div>
    </div>
  );
}
