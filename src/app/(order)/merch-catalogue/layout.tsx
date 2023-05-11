import React from 'react';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

export default async function MerchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 h-screen w-full overflow-y-auto overflow-x-hidden'>
        <Header />
        {children}
        <NormalFooter className='z-50 bg-transparent' />
      </div>
    </RandomStarfieldContainer>
  );
}
