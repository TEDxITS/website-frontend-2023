/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import {
  COLUMN_NUMBER_CENTER,
  COLUMN_NUMBER_LEFT,
  COLUMN_NUMBER_RIGHT,
  ROW_ALPHABET,
} from '@/constant/seat';
import clsxm from '@/utils/clsxm';
import { localApi } from '@/utils/local-api';

import {
  SeatingData,
  SeatingWithBookingDetailData,
} from '@/types/dashboard.types';

const isSeatAvailable = (row: string, column: number) => {
  if (row === 'A' || row === 'B') {
    if (column > 6 && column < 16) {
      return false;
    }
  }
  return true;
};

export default function AdminSeatingContainer() {
  const [selectedSeat, setSelectedSeat] = React.useState<{
    row: string;
    column: number;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const seatingQuery = useQuery({
    queryKey: ['seats'],
    queryFn: async () => {
      try {
        const { data } = await localApi.get<{ data: SeatingData[] }>(
          `/booking/booking-detail/seat`
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  if (seatingQuery.isLoading) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1 className='mb-20 text-center font-baron text-cwhite'>
          ADMIN SEAT DATABASE
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

  if (!seatingQuery.data) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          ADMIN SEAT DATABASE
        </h1>

        <p className='mb-5 text-center text-cwhite'>
          There is a problem when getting your data. Please try again later
        </p>
        <Link href='/dashboard/history'>
          <Button>Go Back</Button>
        </Link>
      </section>
    );
  }

  const handleSeat = (row: string, column: number) => {
    if (!isSeatTaken(row, column)) {
      toast('Seat is not taken yet');
      return;
    }
    setSelectedSeat({ row, column });
    setIsModalOpen(true);
  };

  const isSeatTaken = (row: string, column: number) => {
    if (seatingQuery.data) {
      const seat = seatingQuery.data.find(
        (seat) => seat.BookingDetail !== null && seat.name === `${row}${column}`
      );
      if (seat) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <div className='z-20 flex flex-col items-center p-5 px-10'>
      <SeatingInfoModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        seatName={`${selectedSeat?.row}${selectedSeat?.column}`}
      />
      <div className='flex w-full items-start justify-between'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          ADMIN SEAT DATABASE
        </h1>
      </div>
      <section className='w-full rounded-lg bg-cwhite p-10'>
        <div className='mb-10 rounded-md bg-red-300 p-3 text-center'>Stage</div>
        <div className='mb-10 flex gap-x-6 overflow-x-auto 2xl:justify-center'>
          <div>
            {ROW_ALPHABET.map((alphabet, i) => (
              <div className='mb-5 flex justify-center' key={i}>
                {COLUMN_NUMBER_LEFT.map((number, j) => (
                  <button
                    className={clsxm(
                      'mr-5 flex h-7 w-7 items-center justify-center rounded-md bg-green-300 text-sm font-semibold',
                      selectedSeat?.row === alphabet &&
                        +selectedSeat?.column === number &&
                        'bg-blue-400',
                      isSeatTaken(alphabet, number) && 'bg-red-400'
                    )}
                    key={j}
                    onClick={() => handleSeat(alphabet, +number)}
                  >
                    {alphabet}
                    {number}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div>
            {ROW_ALPHABET.map((alphabet, i) => (
              <div className='mb-5 flex justify-center' key={i}>
                {COLUMN_NUMBER_CENTER.map((number, j) => (
                  <button
                    className={clsxm(
                      'mr-5 flex h-7 w-7 items-center justify-center rounded-md bg-green-300 text-sm font-semibold',
                      selectedSeat?.row === alphabet &&
                        +selectedSeat?.column === number &&
                        'bg-blue-400',
                      !isSeatAvailable(alphabet, number) && 'bg-gray-400',
                      isSeatTaken(alphabet, number) && 'bg-red-400'
                    )}
                    key={j}
                    onClick={() => handleSeat(alphabet, +number)}
                    disabled={!isSeatAvailable(alphabet, number)}
                  >
                    {!isSeatAvailable(alphabet, number)
                      ? ''
                      : `${alphabet}${number}`}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div>
            {ROW_ALPHABET.map((alphabet, i) => (
              <div className='mb-5 flex justify-center' key={i}>
                {COLUMN_NUMBER_RIGHT.map((number, j) => (
                  <button
                    className={clsxm(
                      'mr-5 flex h-7 w-7 items-center justify-center rounded-md bg-green-300 text-sm font-semibold',
                      selectedSeat?.row === alphabet &&
                        +selectedSeat?.column === number &&
                        'bg-blue-400',
                      isSeatTaken(alphabet, number) && 'bg-red-400'
                    )}
                    key={j}
                    onClick={() => handleSeat(alphabet, +number)}
                  >
                    {alphabet}
                    {number}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='mb-4'>Information</h3>
          <div className='flex gap-x-10'>
            <div className='inline-flex items-center gap-x-2'>
              <div className='h-8 w-8 rounded-md bg-red-300' />
              <p>Taken</p>
            </div>
            <div className='inline-flex items-center gap-x-2'>
              <div className='h-8 w-8 rounded-md bg-green-400' />
              <p>Available</p>
            </div>
            <div className='inline-flex items-center gap-x-2'>
              <div className='h-8 w-8 rounded-md bg-blue-400' />
              <p>Selected</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SeatingInfoModal({
  isOpen,
  setIsOpen,
  seatName,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  seatName: string;
}) {
  const bookingBySeatingQuery = useQuery({
    queryKey: ['seats', seatName],
    queryFn: async () => {
      try {
        const { data } = await localApi.get<{
          data: SeatingWithBookingDetailData;
        }>(`/booking/booking-detail/seat/${seatName}`);
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Modal.Title>Seat Owner Info</Modal.Title>
      {bookingBySeatingQuery.isLoading ? (
        <div className='flex justify-center'>
          <p>Loading...</p>
        </div>
      ) : bookingBySeatingQuery.isError ? (
        <div className='flex justify-center'>
          <p className='text-red-500'>Error</p>
        </div>
      ) : bookingBySeatingQuery.data ? (
        <div className='flex flex-col gap-y-2'>
          <div className='flex justify-between'>
            <p>Name</p>
            <p>{bookingBySeatingQuery.data.BookingDetail?.name}</p>
          </div>
          <div className='flex justify-between'>
            <p>Email</p>
            <p>{bookingBySeatingQuery.data.BookingDetail?.email}</p>
          </div>
          <div className='flex justify-between'>
            <p>Phone Number</p>
            <p>{bookingBySeatingQuery.data.BookingDetail?.phoneNumber}</p>
          </div>
          <div className='flex justify-between'>
            <p>Ticket Type</p>
            <p>
              {bookingBySeatingQuery.data.BookingDetail?.ticket.name}{' '}
              {bookingBySeatingQuery.data.BookingDetail?.ticket.type}
            </p>
          </div>
        </div>
      ) : (
        <div className='flex justify-center'>
          <p className='text-red-500'>No Data</p>
        </div>
      )}

      <div className='mt-4 flex justify-end gap-x-4'>
        <Button variant='primary' onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </div>
    </Modal>
  );
}
