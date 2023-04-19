/* eslint-disable unused-imports/no-unused-vars */
'use client';

import { useQuery } from '@tanstack/react-query';

import api from '@/utils/api';

import earlybirdTicket from '~/images/dashboard/ticket-earlybird.png';
import earlybirdMobileTicket from '~/images/dashboard/ticket-earlybird-mobile.png';
import normalTicket from '~/images/dashboard/ticket-normal.png';
import normalMobileTicket from '~/images/dashboard/ticket-normal-mobile.png';
import presaleTicket from '~/images/dashboard/ticket-presale.png';
import presaleMobileTicket from '~/images/dashboard/ticket-presale-mobile.png';

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

export default function TicketList() {
  const ticketsQuery = useQuery({
    queryKey: ['tickets'],
    queryFn: async () => {
      try {
        const { data } = await api.get(`/tickets`);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className='pb-1'>
      {/* {ticketsQuery.data.map((ticket) => (
        <div key={ticket.name} className='mb-16 flex flex-col gap-y-10'>
          <h2 className='font-baron text-cwhite'>{ticket.name}</h2>
          <div className='relative'>
            {new Date() < new Date(ticket.dateStart) && (
              <div className='absolute z-20 flex h-full w-full scale-105 items-center justify-center rounded-3xl bg-black/50'>
                <Image alt='tickets' src={comingSoon} />
              </div>
            )}

            <div className='mb-10 flex w-full flex-col items-start items-center gap-x-10 gap-y-4 lg:flex-row'>
              <div className='grow rounded-md border-[10px] border-cgray bg-black px-3 py-5'>
                {new Date() < new Date(ticket.dateStart) ? (
                  <div className='flex justify-around gap-x-3'>
                    <Marquee direction='left' speed={30} gradient={false}>
                      <h1 className='px-1 font-baron text-2xl text-green-300'>
                        COMING SOON - COMING SOON - COMING SOON - COMING SOON -
                        COMING SOON - COMING SOON -
                      </h1>
                    </Marquee>
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
                      <p className='font-medium text-green-300'>Sale Period:</p>
                      <h3 className='mb-1 font-baron text-sm leading-none text-green-300 sm:text-base lg:text-xl'>
                        {new Date(ticket.dateStart).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}{' '}
                        -{' '}
                        {new Date(ticket.dateEnd).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
              <UnstyledLink
                href={`/dashboard/ticket/${makeTicketSlug(ticket.desc)}`}
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
      ))} */}
    </div>
  );
}
