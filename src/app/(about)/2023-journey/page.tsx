import { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AlumniSection from '@/containers/about/AlumniSection';
import MainEventAchievementContainer from '@/containers/about/MainEventAchievementContainer';
import ThisYearGlorySection from '@/containers/about/ThisYearGlorySection';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'This Year’s Glory',
  '',
  '/2023-journey'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function OtherJourneyPage() {
  return (
    <div className='w-screen overflow-hidden overflow-x-clip bg-black bg-stars bg-contain bg-repeat'>
      <Header />
      <ThisYearGlorySection />
      <MainEventAchievementContainer />
      <AlumniSection />
      <NormalFooter />
    </div>
  );
}
