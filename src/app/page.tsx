'use client';

import React from 'react';
import HeroCarousel from '@/containers/landing/HeroCarousel';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <RandomStarfieldContainer className='relative h-[392vh] lg:h-[410vh]' zAxis={2}>
      <Header />
      <div className='relative z-30'>
        <HeroCarousel />
      </div>
      <Footer />
    </RandomStarfieldContainer>
  );
}
