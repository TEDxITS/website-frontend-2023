import TicketDatabaseTable from '@/containers/admin/tickets/TicketDatabaseTable';

import api from '@/utils/api';

async function getTickets() {
  try {
    const { data } = await api.get('/booking');
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default async function TicketDatabaseContainer() {
  const allTickets = await getTickets();
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
  if (!allTickets.data) {
    return <p className='py-10 text-center text-lg text-cwhite'>Error</p>;
  }
  return <TicketDatabaseTable data={allTickets.data ? allTickets.data : []} />;
}
