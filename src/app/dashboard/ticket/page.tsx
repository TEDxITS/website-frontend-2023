import type { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/button/Button';

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
    name: 'Early Bird Without Kit',
    price: 'Rp. 100.000',
    desc: 'Early Bird Ticket',
    dateStart: '2023-04-14',
    dateEnd: '2023-04-15',
  },
  {
    name: 'Early Bird With Kit',
    price: 'Rp. 150.000',
    desc: 'Early Bird Ticket',
    dateStart: '2023-04-14',
    dateEnd: '2023-04-15',
  },
  {
    name: 'Presale Without Kit',
    price: 'Rp. 150.000',
    desc: 'Regular Ticket',
    dateStart: '2021-11-01',
    dateEnd: '2021-11-30',
  },
  {
    name: 'Presale With Kit',
    price: 'Rp. 200.000',
    desc: 'Regular Ticket',
    dateStart: '2021-11-01',
    dateEnd: '2021-11-30',
  },
  {
    name: 'Normal Without Kit',
    price: 'Rp. 200.000',
    desc: 'VIP Ticket',
    dateStart: '2021-12-01',
    dateEnd: '2021-12-31',
  },
  {
    name: 'Normal With Kit',
    price: 'Rp. 250.000',
    desc: 'VIP Ticket',
    dateStart: '2021-12-01',
    dateEnd: '2021-12-31',
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

export default function TicketsPage() {
  const filteredTicket = ticketType.filter((ticket) =>
    ticket.name.includes('With Kit')
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
              {new Date() < new Date(ticket.dateStart) && (
                <div className='absolute flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
                  <Image alt='tickets' src={comingSoon} />
                </div>
              )}

              <div className='mb-10 flex w-full flex-col items-start items-center gap-x-10 gap-y-4 lg:flex-row'>
                <div className='flex grow justify-around gap-x-3 rounded-md bg-cwhite px-3 py-5'>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <p className='font-medium text-gray-700'>Price:</p>
                    <h3 className='mb-1 font-baron text-sm leading-none text-cblack sm:text-base lg:text-xl'>
                      {ticket.price}
                    </h3>
                  </div>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <p className='font-medium text-gray-700'>Sale Period:</p>
                    <h3 className='mb-1 font-baron text-sm leading-none text-cblack sm:text-base lg:text-xl'>
                      {new Date(ticket.dateStart).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}{' '}
                      -{' '}
                      {new Date(ticket.dateEnd).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </h3>
                  </div>
                </div>
                <Button size='xl'>Buy Now</Button>
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

      <div className='relative mb-10 flex h-80 w-full'>
        <div className='noisy relative h-80 w-[75%] rounded-l-3xl border-r-2 border-dashed border-black bg-white'>
          <div className='absolute -left-5 flex h-full w-12 items-center'>
            <div className='h-12 w-12 rounded-full bg-black'></div>
          </div>
          <div className='absolute -right-6 -top-5 h-12 w-12 rounded-full bg-black'></div>
          <div className='absolute -right-6 -bottom-5 h-12 w-12 rounded-full bg-black'></div>
        </div>
        <div className='noisy w-[25%] rounded-r-3xl bg-cred p-4'>
          <div className='absolute -right-5 flex h-full w-12 items-center'>
            <div className='h-12 w-12 rounded-full bg-black'></div>
          </div>
        </div>
      </div>

      <div className='relative flex h-80 w-full flex-col'>
        <div className='noisy relative h-80 w-full rounded-t-3xl border-b-2 border-dashed border-black bg-white'>
          <div className='absolute -top-8 flex w-full justify-center'>
            <div className='h-16 w-16 rounded-full bg-black'></div>
          </div>
          <div className='absolute -left-6 -bottom-6 h-12 w-12 rounded-full bg-black'></div>
          <div className='absolute -right-6 -bottom-6 h-12 w-12 rounded-full bg-black'></div>
        </div>
        <div className='noisy h-40 w-full rounded-b-3xl bg-cred p-4'>
          <div className='absolute -bottom-8 flex w-full justify-center'>
            <div className='h-16 w-16 rounded-full bg-black'></div>
          </div>
        </div>
      </div>

      <div className='py-10'>
        <div className='relative flex h-80 w-full'>
          <div className='relative h-80 w-[75%] rounded-l-3xl border-r-2 border-dashed border-black bg-gradient-to-r from-cyellow via-corange to-cpink'>
            <div className='absolute -left-5 z-20 flex h-full w-12 items-center'>
              <div className='h-12 w-12 rounded-full bg-black'></div>
            </div>
            <div className='absolute -right-6 -top-5 z-20 h-12 w-12 rounded-full bg-black'></div>
            <div className='absolute -right-6 -bottom-5 z-20 h-12 w-12 rounded-full bg-black'></div>
            <div className='noisy absolute z-10 h-full w-full rounded-3xl opacity-[50%]'></div>
          </div>
          <div className='relative w-[25%] rounded-r-3xl bg-gradient-to-r from-cpink to-cblue'>
            <div className='absolute -right-5 z-20 flex h-full w-12 items-center'>
              <div className='h-12 w-12 rounded-full bg-black'></div>
            </div>
            <div className='noisy absolute z-10 h-full w-full rounded-3xl opacity-[50%]'></div>
          </div>
        </div>
      </div>

      <div className='py-10'>
        <div className='relative flex h-80 w-full'>
          <div
            className='relative h-80 w-[75%] rounded-l-3xl border-r-2 border-dashed border-black'
            style={{
              backgroundImage:
                'linear-gradient(to top right, #F0EFE5 0%, #939AB4 15%, #546193 30%, #354582 60%, #1D1D1E 100%)',
            }}
          >
            <div className='absolute -left-5 z-20 flex h-full w-12 items-center'>
              <div className='h-12 w-12 rounded-full bg-black'></div>
            </div>
            <div className='absolute -right-6 -top-5 z-20 h-12 w-12 rounded-full bg-black'></div>
            <div className='absolute -right-6 -bottom-5 z-20 h-12 w-12 rounded-full bg-black'></div>
            <div className='noisy absolute z-10 h-full w-full rounded-3xl opacity-[50%]'></div>
          </div>
          <div
            className='relative w-[25%] rounded-r-3xl'
            style={{
              backgroundImage:
                'linear-gradient(to bottom right, #F0EFE5 0%, #939AB4 15%, #546193 30%, #354582 60%, #1D1D1E 100%)',
            }}
          >
            <div className='absolute -right-5 z-20 flex h-full w-12 items-center'>
              <div className='h-12 w-12 rounded-full bg-black'></div>
            </div>
            <div className='noisy absolute z-10 h-full w-full rounded-3xl opacity-[50%]'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
