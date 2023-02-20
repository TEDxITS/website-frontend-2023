import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LightCarousel from '@/containers/landing/LightCarousel';
import RocketsGrid from '@/containers/landing/RocketsGrid';
import ThisYearContainer from '@/containers/landing/ThisYearContainer';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

// xs:h-[315vh] md:h-[370vh] lg:h-[335vh] xl:h-[390vh]
export default function LandingPage() {
  return (
    <div className='overflow-hidden'>
      <Header />
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
      <NormalFooter />
    </div>
  );
}
