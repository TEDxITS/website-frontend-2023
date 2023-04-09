import React from 'react';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

export default async function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 h-screen w-full overflow-y-auto'>
        <Header />
        {children}
        <NormalFooter className='bg-transparent' />
      </div>
    </RandomStarfieldContainer>
  );
}
