'use client';
import { useQuery } from '@tanstack/react-query';

import TicketDatabaseTable from '@/containers/admin/tickets/TicketDatabaseTable';

import { BOOKING_STATUS } from '@/constant/ticket';
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

  if (bookingQuery.isLoading) {
    return <p className='py-10 text-center text-lg text-cwhite'>Loading...</p>;
  }

  if (bookingQuery.isError) {
    return <p className='py-10 text-center text-lg text-cwhite'>Error</p>;
  }

  const activeBooking = bookingQuery.data.filter((booking) => {
    if (
      booking.status == BOOKING_STATUS.MENUNGGU_PEMBAYARAN &&
      booking.isActive === false
    ) {
      return false;
    }
    return true;
  });

  return <TicketDatabaseTable data={activeBooking} />;
}
