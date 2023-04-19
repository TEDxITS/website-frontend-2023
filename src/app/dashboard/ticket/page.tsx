import type { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import ComingSoonMarquee from '@/containers/dashboard/ticket/ComingSoonMarquee';

import { generateTemplateMetadata } from '@/utils/metadata';
import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

import comingSoon from '~/images/dashboard/coming-soon.png';
import soldOut from '~/images/dashboard/sold-out.png';
import earlybirdTicket from '~/images/dashboard/ticket-earlybird.png';
import earlybirdMobileTicket from '~/images/dashboard/ticket-earlybird-mobile.png';
import normalTicket from '~/images/dashboard/ticket-normal.png';
import normalMobileTicket from '~/images/dashboard/ticket-normal-mobile.png';
import presaleTicket from '~/images/dashboard/ticket-presale.png';
import presaleMobileTicket from '~/images/dashboard/ticket-presale-mobile.png';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

const getTicketImage = (ticketName: string) => {
  if (ticketName.includes('Early Bird')) {
    return earlybirdTicket;
  }
  if (ticketName.includes('Pre Sale')) {
    return presaleTicket;
  }
  if (ticketName.includes('Normal')) {
    return normalTicket;
  }
  return earlybirdTicket;
};

const getTicketMobileImage = (ticketName: string) => {
  if (ticketName.includes('Early Bird')) {
    return earlybirdMobileTicket;
  }
  if (ticketName.includes('Pre Sale')) {
    return presaleMobileTicket;
  }
  if (ticketName.includes('Normal')) {
    return normalMobileTicket;
  }
  return earlybirdMobileTicket;
};

const makeTicketSlug = (ticketName: string) => {
  return ticketName.toLowerCase().replace(' ', '-');
};

async function getAllTicketType() {
  try {
    const result = await prisma.ticket.findMany();
    return createResponse(200, 'The tickets retrieved successfully', result);
  } catch (e) {
    return createResponse(500, 'Internal Server Error', null);
  }
}

export default async function TicketsPage() {
  const { data, status, message } = await getAllTicketType();

  if (!data) {
    return (
      <p className='py-10 text-center text-lg text-cwhite'>
        {status} | {message}
      </p>
    );
  }

  const filteredTicket = data
    .filter((ticket) => ticket.type !== 'With Kit')
    .sort(
      (a, b) => new Date(a.dateOpen).getTime() - new Date(b.dateOpen).getTime()
    );

  return (
    <section className='layout z-20 p-5'>
      <h1 className='mb-10 text-center font-baron text-cwhite'>
        CHOOSE YOUR TICKETS!
      </h1>
      <div className='pb-1'>
        {filteredTicket.map((ticket) => (
          <div
            key={ticket.name}
            className='mb-16 flex flex-col gap-y-5 sm:gap-y-10'
          >
            <h2 className='font-baron text-cwhite'>{ticket.name} Ticket</h2>
            <div className='relative'>
              {new Date() < new Date(ticket.dateOpen) && (
                <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
                  <Image alt='tickets' src={comingSoon} />
                </div>
              )}

              {new Date() > new Date(ticket.dateClose) && (
                <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
                  <Image alt='tickets' src={soldOut} />
                </div>
              )}

              <div className='mb-10 flex w-full flex-col gap-x-10 gap-y-4 md:flex-row md:items-center'>
                <div className='grow rounded-md border-[10px] border-cgray bg-black px-3 py-5'>
                  {new Date() < new Date(ticket.dateOpen) ? (
                    <div className='flex justify-around gap-x-3'>
                      <ComingSoonMarquee />
                    </div>
                  ) : (
                    <div className='flex justify-around gap-x-3'>
                      <div className='flex flex-wrap items-center gap-x-4'>
                        <p className='font-medium text-green-300'>Price:</p>
                        <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                          Rp. {ticket.price}
                        </h3>
                      </div>
                      <div className='flex flex-wrap items-center gap-x-4'>
                        <p className='font-medium text-green-300'>
                          Sale Period:
                        </p>
                        <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                          {new Date(ticket.dateOpen).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}{' '}
                          -{' '}
                          {new Date(ticket.dateClose).toLocaleDateString(
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
                <UnstyledLink
                  href={`/dashboard/ticket/${makeTicketSlug(ticket.name)}`}
                >
                  <Button size='xl' className='w-full whitespace-nowrap'>
                    <div className='w-full text-center'>Buy Now</div>
                  </Button>
                </UnstyledLink>
              </div>
              <Image
                alt='tickets'
                src={getTicketMobileImage(ticket.name)}
                className='mx-auto block sm:hidden'
              />
              <Image
                alt='tickets'
                src={getTicketImage(ticket.name)}
                className='hidden sm:block'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
