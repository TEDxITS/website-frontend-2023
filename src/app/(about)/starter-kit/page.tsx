import { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import StarterKitSection from '@/containers/about/StarterKitSection';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'TED and TEDx Starter Kit',
  '',
  '/starter-kit'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function AboutPage() {
  return (
    <div className='w-screen overflow-hidden overflow-x-clip bg-black bg-stars bg-contain bg-repeat'>
      <Header />
      <StarterKitSection />
      <NormalFooter />
    </div>
  );
}
