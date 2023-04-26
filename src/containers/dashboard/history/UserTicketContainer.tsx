'use client';

import { useQuery } from '@tanstack/react-query';

import UserTicket from '@/containers/dashboard/history/UserTicket';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';
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
        <h1 className='mb-10 inline-flex w-full flex-wrap items-start justify-center gap-y-3 text-center font-baron text-cwhite'>
          <FullTEDLogo className='mt-1 h-10 w-32' variant='white' />
          <span>MAIN EVENT E-TICKET</span>
        </h1>
        <div role='status' className='mb-4'>
          <svg
            aria-hidden='true'
            className='h-8 w-8 animate-fast-spin fill-black text-cwhite'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
        </div>
        <p className='text-center text-cwhite'>Loading...</p>
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
          exist. If you think this is a mistake, please contact us.
        </p>
        <p className='z-10 font-primary text-xs font-normal text-cwhite xl:text-lg'>
          Contact Person
        </p>
        <p className='z-10 font-primary text-[0.5rem] font-normal text-cwhite sm:text-xs xl:text-lg'>
          LINE ID : knytlth (Kinaya) | WhatsApp : 085836649611 (Kinaya)
        </p>
      </section>
    );
  }

  return (
    <section className='z-20 p-5'>
      <h1 className='mb-10 inline-flex w-full flex-wrap items-start justify-center gap-y-3 text-center font-baron text-cwhite'>
        <FullTEDLogo className='mt-1 h-10 w-32' variant='white' />
        <span>MAIN EVENT E-TICKET</span>
      </h1>
      <UserTicket
        ticketType={bookingDetailQuery.data.ticket.name as TicketType}
        bookingDetail={bookingDetailQuery.data}
        index={0}
        onDetailPage
      />
    </section>
  );
}
