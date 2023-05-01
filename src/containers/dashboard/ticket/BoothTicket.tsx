'use client';
import Image from 'next/image';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import ComingSoonMarquee from '@/containers/dashboard/ticket/ComingSoonMarquee';

import { useAuthStore } from '@/store/useAuthStore';

import { TicketData } from '@/types/dashboard.types';

import comingSoon from '~/images/dashboard/coming-soon.png';
import soldOut from '~/images/dashboard/sold-out.png';
import normalTicket from '~/images/dashboard/ticket-normal.png';
import normalMobileTicket from '~/images/dashboard/ticket-normal-mobile.png';

export default function BoothTicket({
  ticketData,
}: {
  ticketData: TicketData | undefined;
}) {
  const user = useAuthStore((state) => state.user);

  if (!user || user?.email !== 'admin@tedxits.org') {
    return null;
  }

  return (
    <>
      <h2 className='mb-10 font-baron text-cwhite'>Booth Ticket</h2>
      {ticketData ? (
        <div className='relative pb-10'>
          {new Date() < new Date(ticketData.dateOpen) && (
            <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
              <Image alt='tickets' src={comingSoon} />
            </div>
          )}

          {new Date() > new Date(ticketData.dateClose) && (
            <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
              <Image alt='tickets' src={soldOut} />
            </div>
          )}

          <div className='mb-10 flex w-full flex-col gap-x-10 gap-y-4 md:flex-row md:items-center'>
            <div className='grow rounded-md border-[10px] border-cgray bg-black px-3 py-5'>
              {new Date() < new Date(ticketData.dateOpen) ? (
                <div className='flex justify-around gap-x-3'>
                  <ComingSoonMarquee />
                </div>
              ) : (
                <div className='flex justify-around gap-x-3'>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <p className='font-medium text-green-300'>Price:</p>
                    <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                      Rp. {ticketData.price}
                    </h3>
                  </div>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <p className='font-medium text-green-300'>Sale Period:</p>
                    <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                      {new Date(ticketData.dateOpen).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}{' '}
                      -{' '}
                      {new Date(ticketData.dateClose).toLocaleDateString(
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
            <UnstyledLink href='/dashboard/ticket/booth'>
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
      )}
    </>
  );
}
