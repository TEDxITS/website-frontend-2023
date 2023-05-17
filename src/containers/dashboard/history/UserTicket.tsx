import React from 'react';
import QRCode from 'react-qr-code';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import Ticket, {
  TicketLeftSide,
  TicketRightSide,
} from '@/containers/dashboard/Ticket';

import { getSeatOpenDate } from '@/utils/seat';

import { BookingDetailData, TicketType } from '@/types/dashboard.types';

export default function UserTicket({
  ticketType,
  bookingDetail,
  index,
  onDetailPage = false,
}: {
  ticketType: TicketType;
  bookingDetail: BookingDetailData;
  index: number;
  onDetailPage?: boolean;
}) {
  const isSeatingOpen =
    new Date() > new Date(getSeatOpenDate(bookingDetail.ticket.name));
  return (
    <div>
      {!onDetailPage && (
        <div className='mb-5 flex items-center justify-between'>
          <h3 className='text-cwhite'>Ticket #{index}</h3>
          <div className='flex gap-x-3'>
            {isSeatingOpen &&
              bookingDetail.seatId === null &&
              bookingDetail.ticket.name !== 'Pre Event 3' && (
                <UnstyledLink
                  href={`/dashboard/history/seat/${bookingDetail.id}`}
                >
                  <Button variant='primary' className='bg-red-600'>
                    Pick Seat
                  </Button>
                </UnstyledLink>
              )}

            <UnstyledLink
              href={`/dashboard/history/ticket/${bookingDetail.id}`}
            >
              <Button variant='primary' className='bg-red-600'>
                See Ticket
              </Button>
            </UnstyledLink>
          </div>
        </div>
      )}
      <Ticket>
        <TicketLeftSide type={ticketType}>
          <div className='relative flex border-inherit py-10 px-2 md:py-5 md:px-10'>
            <div
              className='rotate-180 border-l-2 border-inherit pl-4 text-center font-baron text-3xl font-medium'
              style={{ writingMode: 'vertical-rl' }}
            >
              {ticketType} TICKET
            </div>
            <div className='grow border-inherit'>
              <div className='border-b-2 border-inherit px-4 pb-4'>
                <h1 className='font-baron font-medium'>BOARDING PASS</h1>
              </div>
              <div className='flex flex-col gap-x-10 gap-y-3 border-inherit p-4 md:flex-row'>
                <div className='w-full border-inherit md:w-1/2'>
                  <div className='mb-3 flex flex-col border-inherit'>
                    <p className='font-quaker'>Name</p>
                    <p className='text-xs xs:text-sm sm:text-lg'>
                      {bookingDetail.name}
                    </p>
                  </div>
                  <div className='mb-3 flex flex-col border-inherit'>
                    <p className='font-quaker'>Email</p>
                    <p className='text-xs xs:text-sm sm:text-lg'>
                      {bookingDetail.email}
                    </p>
                  </div>
                  {!onDetailPage && (
                    <div className='mb-3 flex flex-col border-inherit'>
                      <p className='font-quaker'>Phone Number</p>
                      <p className='text-lg'>{bookingDetail.phoneNumber}</p>
                    </div>
                  )}
                </div>
                <div className='flex w-full flex-col justify-center border-inherit md:w-1/2'>
                  <div className='mb-3 flex flex-col border-inherit'>
                    <p className='font-quaker'>Ticket Type</p>
                    <p className='text-lg'>
                      {bookingDetail.ticket.name} {bookingDetail.ticket.type}
                    </p>
                  </div>
                  <div className='mb-3 flex flex-col border-inherit'>
                    <p className='font-quaker'>Seat</p>
                    <p className='text-lg'>
                      {bookingDetail.seat
                        ? bookingDetail.seat.name
                        : 'Not Picked Yet'}
                    </p>
                  </div>
                  <div className='mb-3 flex flex-col border-inherit'>
                    <p className='font-quaker'>Price</p>
                    <p className='font-baron text-2xl'>
                      Rp. {bookingDetail.ticket.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TicketLeftSide>
        <TicketRightSide type={ticketType}>
          <div className='relative px-10 py-5'>
            <div className='mb-4 border-b-2 border-white px-4 pb-4'>
              <p className='text-center text-xl font-medium text-white'>
                QR Code
              </p>
            </div>
            <div className='mb-8 flex h-[12rem] w-full items-center justify-center border-2 border-dashed border-cwhite md:mb-0'>
              <div
                style={{
                  height: 'auto',
                  margin: '0 auto',
                  maxWidth: 150,
                  width: '100%',
                  background: 'white',
                  padding: '10px',
                }}
              >
                <QRCode
                  size={256}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  value={bookingDetail.id}
                  viewBox='0 0 256 256'
                />
              </div>
            </div>
          </div>
        </TicketRightSide>
      </Ticket>
    </div>
  );
}
