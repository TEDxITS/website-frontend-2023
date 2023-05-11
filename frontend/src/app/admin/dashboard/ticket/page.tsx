import type { Metadata } from 'next';
import { Suspense } from 'react';

import { QuotaDatabaseContainer } from '@/containers/admin/tickets/QuotaDatabaseContainer';
import TicketDatabaseContainer from '@/containers/admin/tickets/TicketDatabaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata(
  'Ticket Dashboard',
  '',
  '/admin/tickets'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function TicketDashboardPage() {
  return (
    <section className='layout z-20'>
      <h1 className='mb-5 font-baron text-cwhite'>Ticket Admin Database</h1>
      <h2 className='mb-5 font-baron text-cwhite'>Quota</h2>
      <Suspense
        fallback={
          <p className='py-10 text-center text-lg text-cwhite'>Loading...</p>
        }
      >
        {/* @ts-expect-error Server Component */}
        <QuotaDatabaseContainer />
      </Suspense>

      <h2 className='mb-5 font-baron text-cwhite'>Verification</h2>
      <TicketDatabaseContainer />

      {/* <h2 className='mb-5 font-baron text-cwhite'>Booth Ticket</h2>
      {boothTicket.data ? (
        <div className='relative pb-10'>
          {new Date() < new Date(boothTicket.data.dateOpen) && (
            <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
              <Image alt='tickets' src={comingSoon} />
            </div>
          )}

          {new Date() > new Date(boothTicket.data.dateClose) && (
            <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
              <Image alt='tickets' src={soldOut} />
            </div>
          )}

          <div className='mb-10 flex w-full flex-col gap-x-10 gap-y-4 md:flex-row md:items-center'>
            <div className='grow rounded-md border-[10px] border-cgray bg-black px-3 py-5'>
              {new Date() < new Date(boothTicket.data.dateOpen) ? (
                <div className='flex justify-around gap-x-3'>
                  <ComingSoonMarquee />
                </div>
              ) : (
                <div className='flex justify-around gap-x-3'>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <p className='font-medium text-green-300'>Price:</p>
                    <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                      Rp. {boothTicket.data.price}
                    </h3>
                  </div>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <p className='font-medium text-green-300'>Sale Period:</p>
                    <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                      {new Date(boothTicket.data.dateOpen).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}{' '}
                      -{' '}
                      {new Date(boothTicket.data.dateClose).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </h3>
                  </div>
                </div>
              )}
            </div>
            <UnstyledLink href='/admin/dashboard/ticket/booth'>
              <Button size='xl' className='w-full whitespace-nowrap'>
                <div className='w-full text-center'>Buy Now</div>
              </Button>
            </UnstyledLink>
          </div>

          <Image
            alt='tickets'
            src={normalMobileTicket}
            className='mx-auto block sm:hidden'
          />
          <Image alt='tickets' src={normalTicket} className='hidden sm:block' />
        </div>
      ) : (
        <div>
          <p className='text-cwhite'>
            Ticket type not found. Please contact the administrator.
          </p>
        </div>
      )} */}
    </section>
  );
}
