'use client';
import { useQuery } from '@tanstack/react-query';

import TicketDatabaseTable from '@/containers/admin/tickets/TicketDatabaseTable';

import { BOOKING_STATUS } from '@/constant/ticket';
import { localApi } from '@/utils/local-api';

import { BookingDataWithTicketName } from '@/types/dashboard.types';

export default function TicketDatabaseContainer() {
  const bookingQuery = useQuery({
    queryKey: ['booking'],
    queryFn: async () => {
      try {
        const { data } = await localApi.get<{
          data: BookingDataWithTicketName[];
        }>('/booking');

        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  if (bookingQuery.isLoading) {
    return <p className='py-10 text-center text-lg text-cwhite'>Loading...</p>;
  }

  if (bookingQuery.isError) {
    return <p className='py-10 text-center text-lg text-cwhite'>Error</p>;
  }

  const activeMainEventBooking = bookingQuery.data.filter((booking) => {
    if (
      (booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN &&
        booking.isActive === false) ||
      booking.bookingDetails[0].ticket.name === 'Pre Event 3'
    ) {
      return false;
    }
    return true;
  });

  const activePreEvent3Booking = bookingQuery.data.filter((booking) => {
    if (booking.bookingDetails[0].ticket.name === 'Pre Event 3') {
      if (
        booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN &&
        booking.isActive === false
      )
        return false;
      return true;
    }
    return false;
  });

  return (
    <>
      <h3 className='mb-5 font-baron text-cwhite'>Main Event Ticket</h3>
      <TicketDatabaseTable data={activeMainEventBooking} />
      <h3 className='mb-5 font-baron text-cwhite'>Pre Event 3 Ticket</h3>
      <TicketDatabaseTable data={activePreEvent3Booking} />
    </>
  );
}
