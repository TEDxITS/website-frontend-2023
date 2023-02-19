import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Carousel from '@/containers/landing/Carousel';
import RocketGrid from '@/containers/landing/RocketGrid';
import ThisYearContainer from '@/containers/landing/ThisYearContainer';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

export default function LandingPage() {
  return (
    <RandomStarfieldContainer
      className='relative h-[362vh] lg:h-[425vh]'
      zAxis={3}
    >
      <div className='absolute z-20 h-full w-full bg-transparent-stars'>
        <Header />
        <Carousel />
        <ThisYearContainer />
        <RocketGrid />
        <Footer />
      </div>
    </RandomStarfieldContainer>
  );
}
