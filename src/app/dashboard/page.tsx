import type { Metadata } from 'next';

import GreetingText from '@/containers/admin/GreetingText';
import RecentPurchaseContainer from '@/containers/dashboard/history/RecentPurchaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function DashboardPage() {
  return (
    <section className='layout z-20'>
      <GreetingText />
      <div className='mb-5 flex w-full flex-col gap-x-5 sm:flex-row'>
        <section className='w-full'>
          <h2 className='mb-5 font-baron text-xl text-cwhite'>Announcement</h2>
          <div className='noisy w-full rounded-lg bg-white p-4'>
            <p className='text-cblack'>
              There is no announcement at the moment. Please check back later.
            </p>
          </div>
        </section>
        <section className='w-full'>
          <h2 className='mb-5 font-baron text-xl text-cwhite'>
            Featured Ticket
          </h2>
          <div className='noisy w-full rounded-lg bg-white p-4'>
            <p className='text-cblack'>
              There is no announcement at the moment. Please check back later.
            </p>
          </div>
        </section>
      </div>
      <section className='w-full'>
        <h2 className='mb-5 font-baron text-xl text-cwhite'>Recent Purchase</h2>
        <RecentPurchaseContainer />
      </section>
    </section>
  );
}
