import React from 'react';

import DashboardSidebar from '@/components/layout/DashboardSidebar';
import AuthHeaderLink from '@/components/link/AuthHeaderLink';

export default async function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='absolute z-20 flex h-screen w-screen flex-col overflow-y-auto sm:flex-row'>
      <DashboardSidebar isAdmin />
      <div className='w-full sm:w-5/6'>
        <section className='layout flex w-full items-center justify-end sm:h-40'>
          <div className='hidden sm:block'>
            <AuthHeaderLink isDashboard={true} />
          </div>
        </section>
        {children}
      </div>
    </div>
  );
}
