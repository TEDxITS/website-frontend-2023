'use client';
import { useQuery } from '@tanstack/react-query';

import TicketDatabaseTable from '@/containers/admin/tickets/TicketDatabaseTable';

import { adminApi } from '@/utils/api';

import { BookingData } from '@/types/dashboard.types';

export default function TicketDatabaseContainer() {
  const bookingQuery = useQuery({
    queryKey: ['booking'],
    queryFn: async () => {
      try {
        const { data } = await adminApi.get<{ data: BookingData[] }>(
          '/booking'
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    refetchOnWindowFocus: false,
  });
  // const allTickets = {
  //   data: [
  //     {
  //       id: 'c8ff63cc-8695-459b-8fd0-4ede6e2e43f2',
  //       orderingUser: '0cd5c265-2035-4b04-ab83-8f81ed5d5518',
  //       status: 'MENUNGGU_PEMBAYARAN',
  //       totalPrice: 100,
  //       paymentProof: null,
  //       verificator: null,
  //     },
  //   ],
  // };
  // if (!allTickets.data) {
  //   return <p className='py-10 text-center text-lg text-cwhite'>Error</p>;
  // }

  if (bookingQuery.isLoading) {
    return <p className='py-10 text-center text-lg text-cwhite'>Loading</p>;
  }

  if (bookingQuery.isError) {
    return <p className='py-10 text-center text-lg text-cwhite'>Error</p>;
  }

  return <TicketDatabaseTable data={bookingQuery.data} />;
}
