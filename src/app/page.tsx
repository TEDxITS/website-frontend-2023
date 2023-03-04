import { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LightCarousel from '@/containers/landing/LightCarousel';
import RocketsGrid from '@/containers/landing/RocketsGrid';
import ThisYearContainer from '@/containers/landing/ThisYearContainer';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Home', '', '/');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function LandingPage() {
  return (
    <div className='bg-black'>
      <Header />
      <div className='overflow-hidden'>
        <RandomStarfieldContainer
          className='relative h-[90rem] md:h-[110rem]'
          zAxis={2}
        >
          <div className='absolute z-20 h-full w-full bg-transparent-stars'>
            <LightCarousel />
            <ThisYearContainer />
          </div>
        </RandomStarfieldContainer>
        <RocketsGrid />
        <div className='w-screen bg-stars py-16'></div>
        <NormalFooter />
      </div>
    </div>
  );
}
