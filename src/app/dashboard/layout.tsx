import React from 'react';

import DashboardSidebar from '@/components/layout/DashboardSidebar';
import AuthHeaderLink from '@/components/link/AuthHeaderLink';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

export default async function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 flex h-screen w-screen flex-col overflow-y-auto lg:flex-row'>
        <DashboardSidebar />
        <div className='w-full lg:w-5/6'>
          <section className='layout flex items-center justify-end lg:h-40'>
            <div className='hidden lg:block'>
              <AuthHeaderLink isDashboard={true} />
            </div>
          </section>
          {children}
        </div>
      </div>
    </RandomStarfieldContainer>
  );
}
