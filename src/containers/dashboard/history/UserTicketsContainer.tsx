'use client';

import { useQuery } from '@tanstack/react-query';

import UserTicket from '@/containers/dashboard/history/UserTicket';

import api from '@/utils/api';

import { BookingDetailData, TicketType } from '@/types/dashboard.types';

export default function UserTicketsContainer({
  bookingId,
}: {
  bookingId: string;
}) {
  const bookingDetailsQuery = useQuery({
    queryKey: ['booking-details', { id: bookingId }],
    queryFn: async () => {
      try {
        const { data } = await api.get<{ data: BookingDetailData[] }>(
          `/booking/booking-detail/booking/${bookingId}`
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  if (bookingDetailsQuery.isLoading) {
    return (
      <section>
        <h2 className='mb-5 font-baron text-cwhite'>TICKETS</h2>
        <div className='relative flex h-80 w-full flex-col md:flex-row'>
          <div className='noisy relative w-full animate-pulse rounded-t-3xl border-b-2 border-r-0 border-dashed border-black bg-gray-300 md:w-[75%] md:rounded-l-3xl md:border-b-0 md:border-r-2'>
            <div className='absolute -top-8 flex h-auto w-full justify-center md:top-auto md:-left-5 md:h-full md:w-auto md:items-center'>
              <div className='h-16 w-16 rounded-full bg-black md:h-12 md:w-12'></div>
            </div>
            <div className='absolute -left-6 right-auto -bottom-6 h-12 w-12 rounded-full bg-black md:-right-6 md:left-auto md:-top-5'></div>
            <div className='absolute -right-6 -bottom-6 h-12 w-12 rounded-full bg-black md:-bottom-5'></div>
          </div>
          <div className='w-full animate-pulse rounded-b-3xl bg-gray-300 md:w-[25%] md:rounded-r-3xl'>
            <div className='absolute -right-5 hidden h-full items-center md:flex'>
              <div className='h-12 w-12 rounded-full bg-black'></div>
            </div>
            <div className='absolute -bottom-8 block flex w-full justify-center md:hidden'>
              <div className='h-16 w-16 rounded-full bg-black'></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (bookingDetailsQuery.isError) {
    return (
      <section>
        <h2 className='mb-5 font-baron text-cwhite'>TICKETS</h2>
        <p className='text-cwhite'>Ticket Not Found</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className='mb-5 font-baron text-cwhite'>TICKETS</h2>
      <div className='flex flex-col gap-y-5'>
        {bookingDetailsQuery.data.map((bookingDetail, i) => {
          const ticketType = bookingDetail.ticket.name;
          return (
            <UserTicket
              key={bookingDetail.id}
              ticketType={ticketType as TicketType}
              bookingDetail={bookingDetail}
              index={i + 1}
            />
          );
        })}
      </div>
    </section>
  );
}
