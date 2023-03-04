import { redirect } from 'next/navigation';
import React from 'react';

import DashboardSidebar from '@/components/layout/DashboardSidebar';
import AuthHeaderLink from '@/components/link/AuthHeaderLink';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { getCurrentUser } from '@/utils/firebase/server';

export default async function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }

  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 flex h-screen w-screen flex-col overflow-y-auto sm:flex-row'>
        <DashboardSidebar />
        <div className='w-full sm:w-5/6'>
          <section className='layout flex w-full items-center justify-end sm:h-40'>
            <div className='hidden sm:block'>
              <AuthHeaderLink />
            </div>
          </section>
          {children}
        </div>
      </div>
    </RandomStarfieldContainer>
  );
}
