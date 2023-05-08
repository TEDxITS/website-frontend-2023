import type { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import GreetingText from '@/containers/admin/GreetingText';
import RecentPurchaseContainer from '@/containers/dashboard/history/RecentPurchaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

import preEventTicket from '~/images/dashboard/ticket-pre-event.png';
import preEventMobileTicket from '~/images/dashboard/ticket-pre-event-mobile.png';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function DashboardPage() {
  return (
    <section className='layout z-20'>
      <GreetingText />

      <div className='mb-5 flex w-full flex-col gap-5 sm:flex-row'>
        <section className='flex w-full flex-col'>
          <h2 className='mb-5 font-baron text-xl text-cwhite'>Announcement</h2>
          <div className='noisy w-full grow rounded-lg bg-white p-4'>
            <p className='text-cblack'>
              There is no announcement at the moment. Please check back later.
            </p>
          </div>
        </section>
        <section className='w-full'>
          <h2 className='mb-3 font-baron text-xl text-cwhite'>
            Featured Ticket
          </h2>
          <div className='mb-5 flex items-end justify-between'>
            <h3 className='font-baron text-cwhite'>Pre Event 3 Ticket</h3>
            <UnstyledLink href='/dashboard/ticket/pre-event-3'>
              <Button variant='primary' size='sm' className='px-3'>
                Buy Now
              </Button>
            </UnstyledLink>
          </div>
          <Image
            src={preEventTicket}
            alt='Featured Ticket'
            className='hidden sm:block'
          />
          <Image
            src={preEventMobileTicket}
            alt='Featured Ticket'
            className='mx-auto block sm:hidden'
          />
        </section>
      </div>
      <section className='w-full pb-5'>
        <h2 className='mb-5 font-baron text-xl text-cwhite'>Recent Purchase</h2>
        <RecentPurchaseContainer />
      </section>
    </section>
  );
}
