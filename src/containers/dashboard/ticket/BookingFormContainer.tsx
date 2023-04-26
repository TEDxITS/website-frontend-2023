'use client';

import BookingForm from '@/containers/dashboard/ticket/BookingForm';

import { TicketData, TicketType } from '@/types/dashboard.types';

export default function BookingFormContainer({
  ticketType,
  selectedTickets,
}: {
  ticketType: TicketType;
  selectedTickets: TicketData[];
}) {
  // const ticketTypeQuery = useQuery({
  //   queryKey: ['tickets'],
  //   queryFn: async () => {
  //     try {
  //       const { data } = await api.get(`/tickets`);
  //       return data.filter((ticket: TicketData) =>
  //         ticket.name.includes(ticketType)
  //       );
  //     } catch (error) {
  //       return Promise.reject(error);
  //     }
  //   },
  //   refetchOnWindowFocus: false,
  // });

  // if (ticketTypeQuery.isLoading) {
  //   return (
  //     <>
  //       <h2 className='mb-5 text-cwhite'>Ticket</h2>
  //       <TicketSkeleton />
  //     </>
  //   );
  // }

  return (
    <BookingForm selectedTickets={selectedTickets} ticketType={ticketType} />
  );
}
