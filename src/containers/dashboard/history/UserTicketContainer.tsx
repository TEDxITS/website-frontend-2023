'use client';

import { useQuery } from '@tanstack/react-query';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import UserTicket from '@/containers/dashboard/history/UserTicket';

import api from '@/utils/api';

import { BookingDetailData, TicketType } from '@/types/dashboard.types';

export default function UserTicketContainer({
  bookingDetailId,
}: {
  bookingDetailId: string;
}) {
  const bookingDetailQuery = useQuery({
    queryKey: ['booking-detail', { id: bookingDetailId }],
    queryFn: async () => {
      try {
        const { data } = await api.get<{ data: BookingDetailData }>(
          `/booking/booking-detail/${bookingDetailId}`
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  if (bookingDetailQuery.isLoading) {
    return (
      <section className='z-20 flex flex-col items-center p-5'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          LOADING TICKET
        </h1>
      </section>
    );
  }

  if (bookingDetailQuery.isError) {
    return (
      <section className='z-20 flex flex-col items-center p-5'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          TICKET NOT FOUND
        </h1>
        <p className='mb-6 text-center text-cwhite'>
          Unfortunately, the ticket you are looking for is not available or not
          exist. Please check back later.
        </p>
        <UnstyledLink href='/dashboard/ticket'>
          <Button>&larr; Back</Button>
        </UnstyledLink>
      </section>
    );
  }

  return (
    <section className='z-20 p-5'>
      <h1 className='mb-10 text-center font-baron text-cwhite'>YOUR TICKET</h1>
      <UserTicket
        ticketType={bookingDetailQuery.data.ticket.name as TicketType}
        bookingDetail={bookingDetailQuery.data}
        index={0}
        onDetailPage
      />
    </section>
  );
}
