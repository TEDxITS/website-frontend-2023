'use client';

import BookingForm from '@/containers/dashboard/ticket/BookingForm';

import { TicketData, TicketType } from '@/types/dashboard.types';

// eslint-disable-next-line unused-imports/no-unused-vars
const ticketData = [
  {
    id: '52e79553-c157-48c3-8c6f-4c5bec2929b8',
    name: 'Early Bird',
    quota: 20,
    price: 80000,
    dateOpen: '2023-04-14 09:00:00',
    createdAt: '2023-04-16 23:33:43.846',
    updatedAt: '2023-04-16 23:33:43.846',
    type: 'With Kit',
    dateClose: '2023-04-20 16:59:00',
  },
  {
    id: 'c6cb7c39-904d-4fca-9c42-2f53903f3b7e',
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
    id: '1ca3c769-1ba8-4398-b6e8-a0d42afd48ef',
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
    id: 'bf3312d8-b5d8-43ea-af6e-c5feb461bb73',
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
    id: 'be08ac0d-41a8-4bec-bae2-59a866500d7c',
    name: 'Early Bird',
    quota: 10,
    price: 105000,
    dateOpen: '2023-04-14 09:00:00',
    createdAt: '2023-04-16 23:33:43.846',
    updatedAt: '2023-04-16 23:33:43.846',
    type: 'Non Kit',
    dateClose: '2023-04-20 16:59:00',
  },
  {
    id: '503c21a9-a199-42ce-be58-8dffc631ee50',
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
