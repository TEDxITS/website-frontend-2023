import type { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';

import CustomMarquee from '@/app/dashboard/ticket/Marquee';
import { generateTemplateMetadata } from '@/utils/metadata';

import comingSoon from '~/images/dashboard/coming-soon.png';
import earlybirdTicket from '~/images/dashboard/ticket-earlybird.png';
import earlybirdMobileTicket from '~/images/dashboard/ticket-earlybird-mobile.png';
import normalTicket from '~/images/dashboard/ticket-normal.png';
import normalMobileTicket from '~/images/dashboard/ticket-normal-mobile.png';
import presaleTicket from '~/images/dashboard/ticket-presale.png';
import presaleMobileTicket from '~/images/dashboard/ticket-presale-mobile.png';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

const ticketType = [
  {
    id: '7f6df20c-1a5b-461a-adff-aae544158841',
    name: 'Early Bird',
    quota: 20,
    price: 80000,
    dateOpen: '2023-04-14 09:00:00',
    createdAt: '2023-04-16 23:33:43.846',
    updatedAt: '2023-04-16 23:33:43.846',
    type: 'Non Kit',
    dateClose: '2023-04-20 16:59:00',
  },
  {
    id: '6c91b5d2-1ddd-49e1-ac7e-5d87bd82e7f6',
    name: 'Normal',
    quota: 55,
    price: 110000,
    dateOpen: '2023-05-02 09:00:00',
    createdAt: '2023-04-16 23:33:43.847',
    updatedAt: '2023-04-16 23:33:43.847',
    type: 'Non Kit',
    dateClose: '2023-05-16 16:59:00',
  },
  {
    id: '71c66c4b-426f-4f3d-baa8-e16dafd45f42',
    name: 'Normal',
    quota: 25,
    price: 135000,
    dateOpen: '2023-05-02 09:00:00',
    createdAt: '2023-04-16 23:33:43.846',
    updatedAt: '2023-04-16 23:33:43.846',
    type: 'With Kit',
    dateClose: '2023-05-16 16:59:00',
  },
  {
    id: 'd0348384-3ab3-4f2b-bde2-20abf9bd2e6b',
    name: 'Pre Sale',
    quota: 40,
    price: 90000,
    dateOpen: '2023-04-24 09:00:00',
    createdAt: '2023-04-16 23:33:43.846',
    updatedAt: '2023-04-16 23:33:43.846',
    type: 'Non Kit',
    dateClose: '2023-04-27 16:59:00',
  },
  {
    id: '20ccb20f-9831-4b57-85bc-eef11a3fd7b1',
    name: 'Early Bird',
    quota: 10,
    price: 105000,
    dateOpen: '2023-04-14 09:00:00',
    createdAt: '2023-04-16 23:33:43.846',
    updatedAt: '2023-04-16 23:33:43.846',
    type: 'With Kit',
    dateClose: '2023-04-20 16:59:00',
  },
  {
    id: 'cedc215a-6d41-4ac0-ad0a-017272cc7e73',
    name: 'Pre Sale',
    quota: 15,
    price: 115000,
    dateOpen: '2023-04-24 09:00:00',
    createdAt: '2023-04-16 23:33:43.846',
    updatedAt: '2023-04-16 23:33:43.846',
    type: 'With Kit',
    dateClose: '2023-04-27 16:59:00',
  },
];

const getTicketImage = (ticketName: string) => {
  if (ticketName.includes('Early Bird')) {
    return earlybirdTicket;
  }
  if (ticketName.includes('Presale')) {
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
  if (ticketName.includes('Presale')) {
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

export default function TicketsPage() {
  const filteredTicket = ticketType.filter(
    (ticket) => ticket.type === 'With Kit'
  );
  return (
    <section className='layout z-20 p-5'>
      <h1 className='mb-10 text-center font-baron text-cwhite'>
        CHOOSE YOUR TICKETS!
      </h1>
      <div className='pb-1'>
        {filteredTicket.map((ticket) => (
          <div key={ticket.name} className='mb-16 flex flex-col gap-y-10'>
            <h2 className='font-baron text-cwhite'>{ticket.name}</h2>
            <div className='relative'>
              {new Date() < new Date(ticket.dateOpen) && (
                <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
                  <Image alt='tickets' src={comingSoon} />
                </div>
              )}

              <div className='mb-10 flex w-full flex-col items-start items-center gap-x-10 gap-y-4 lg:flex-row'>
                <div className='grow rounded-md border-[10px] border-cgray bg-black px-3 py-5'>
                  {new Date() < new Date(ticket.dateOpen) ? (
                    <div className='flex justify-around gap-x-3'>
                      <CustomMarquee />
                    </div>
                  ) : (
                    <div className='flex justify-around gap-x-3'>
                      <div className='flex flex-wrap items-center gap-x-4'>
                        <p className='font-medium text-green-300'>Price:</p>
                        <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                          {ticket.price}
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
                  <Button size='xl' className='whitespace-nowrap'>
                    Buy Now
                  </Button>
                </UnstyledLink>
              </div>
              <Image
                alt='tickets'
                src={getTicketMobileImage(ticket.name)}
                className='block sm:hidden'
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
