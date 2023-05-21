/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';
import { unknown } from 'zod';

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
import { getSeatOpenDate } from '@/utils/seat';

import { BookingDetailData, SeatingData } from '@/types/dashboard.types';

const isSeatAvailable = (row: string, column: number) => {
  if (row === 'A' || row === 'B') {
    if (column > 6 && column < 16) {
      return false;
    }
  }
  return true;
};

export default function SeatingContainer({
  bookingDetailsId,
  isOnModal = false,
  setIsSeatModelOpen = () => unknown,
}: {
  bookingDetailsId: string;
  isOnModal?: boolean;
  setIsSeatModelOpen?:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => unknown);
}) {
  const queryClient = useQueryClient();
  const [selectedSeat, setSelectedSeat] = React.useState<{
    row: string;
    column: number;
  } | null>(null);
  const [isAnnouncementOpen, setIsAnnouncementOpen] =
    React.useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const router = useRouter();

  const bookingQuery = useQuery({
    queryKey: ['booking-detail', { id: bookingDetailsId }],
    queryFn: async () => {
      try {
        const { data } = await localApi.get<{ data: BookingDetailData }>(
          `/booking/booking-detail/${bookingDetailsId}`
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

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

  const seatingMutation = useMutation({
    mutationFn: async (data: any) => {
      const { data: response } = await localApi.post(
        '/booking/booking-detail/seat',
        data
      );

      return response;
    },
    onSuccess: () => {
      toast.success('Seat picked successfully', { id: 'seat' });
      isOnModal
        ? setIsSeatModelOpen(false)
        : router.push(
            `/dashboard/history/purchase/${bookingQuery.data?.booking.id}`
          );
      queryClient.invalidateQueries([
        'booking-detail',
        { id: bookingDetailsId },
      ]);
    },
    onError: (e: any) => {
      toast.error(e.response.data.message, { id: 'seat' });
    },
  });

  if (bookingQuery.isLoading) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1
          className={clsxm(
            'mb-20 text-center font-baron text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          CHOOSE SEAT
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
        <p
          className={clsxm(
            'text-center text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          Loading...
        </p>
      </section>
    );
  }

  if (seatingQuery.isLoading) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1
          className={clsxm(
            'mb-20 text-center font-baron text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          CHOOSE SEAT
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
        <p
          className={clsxm(
            'text-center text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          Loading...
        </p>
      </section>
    );
  }

  if (!bookingQuery.data || !seatingQuery.data) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1
          className={clsxm(
            'mb-10 text-center font-baron text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          TICKET NOT FOUND
        </h1>

        <p
          className={clsxm(
            'mb-5 text-center text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          There is a problem when getting your data. Please try again later
        </p>
        {!isOnModal && (
          <Link href='/dashboard/history'>
            <Button>Go Back</Button>
          </Link>
        )}
      </section>
    );
  }

  if (bookingQuery.data.booking.status !== 'TERVERIFIKASI') {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1
          className={clsxm(
            'mb-10 text-center font-baron text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          TICKET NOT FOUND
        </h1>
        <p
          className={clsxm(
            'mb-5 text-center text-cwhite',
            isOnModal && 'text-black'
          )}
        >
          The ticket you are looking for is not found. Please try again later
        </p>
        {!isOnModal && (
          <Link href='/dashboard/history'>
            <Button>Go Back</Button>
          </Link>
        )}
      </section>
    );
  }

  if (bookingQuery.data.ticket.name === 'Pre Event 3') {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          TICKET TYPE NOT VALID
        </h1>
        <p className='mb-5 text-center text-cwhite'>
          You cannot choose seat for {bookingQuery.data?.ticket.name} ticket
        </p>
        <Link href='/dashboard/history'>
          <Button>Go Back</Button>
        </Link>
      </section>
    );
  }

  if (new Date() < getSeatOpenDate(bookingQuery.data.ticket.name)) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          THE SEAT CHOOSING PERIOD IS NOT OPEN YET
        </h1>
        <p className='mb-5 text-center text-cwhite'>
          The seat choosing period for {bookingQuery.data?.ticket.name} is not
          open yet. It will be open on{' '}
          {getSeatOpenDate(
            bookingQuery.data?.ticket.name || ''
          ).toLocaleTimeString('en-EN', {
            day: 'numeric',
            year: 'numeric',
            month: 'long',
            hour: 'numeric',
          })}
        </p>
        <Link
          href={`/dashboard/history/purchase/${bookingQuery.data?.booking.id}`}
        >
          <Button>Go Back</Button>
        </Link>
      </section>
    );
  }

  if (bookingQuery.data.seatId) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          YOU ALREADY PICK A SEAT
        </h1>

        <p className='mb-5 text-center text-cwhite'>
          You already pick a seat. Please go back to see your selected seat
        </p>
        <Link
          href={`/dashboard/history/purchase/${bookingQuery.data?.booking.id}`}
        >
          <Button>Go Back</Button>
        </Link>
      </section>
    );
  }

  const handleSeat = (row: string, column: number) => {
    if (!isSeatAvailable(row, Number(column)) || isSeatTaken(row, column)) {
      toast.error('Seat not available');
      return;
    }
    setSelectedSeat({ row, column });
  };

  const handleOpenConfirmationModal = () => {
    if (!selectedSeat) {
      toast.error('Please select seat first');
      return;
    }
    setIsModalOpen(true);
  };

  const handleSelectSeat = () => {
    if (!selectedSeat) {
      toast.error('Please select seat first');
      return;
    }
    toast.loading('Picking Seat..', { id: 'seat' });
    seatingMutation.mutate({
      bookingDetailId: bookingQuery.data?.id,
      seatName: `${selectedSeat.row}${selectedSeat.column}`,
    });
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
      <SeatingConfirmationModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handleSelectSeat={handleSelectSeat}
        seatName={`${selectedSeat?.row}${selectedSeat?.column}`}
      />
      <div className='flex w-full items-start justify-between'>
        <h1
          className={clsxm(
            'mb-20 text-center font-baron text-cwhite',
            isOnModal && 'mb-10 text-black'
          )}
        >
          CHOOSE SEAT
        </h1>
        <div className='flex gap-x-3'>
          <Button
            variant='primary'
            className='bg-cred'
            onClick={() => setIsSeatModelOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleOpenConfirmationModal}>Select Seat</Button>
        </div>
      </div>
      {!isOnModal && (
        <>
          <section className='mb-10 w-full rounded-lg bg-cwhite p-10'>
            <h2 className='mb-5'>Ticket Details</h2>
            {bookingQuery.data && (
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='col-span-1 flex flex-col'>
                  <div className='mb-5 sm:text-lg'>
                    <span className='font-semibold'>Name:</span>{' '}
                    <p>{bookingQuery.data.name}</p>
                  </div>
                  <div className='mb-5 sm:text-lg'>
                    <span className='font-semibold'>Email:</span>{' '}
                    <p>{bookingQuery.data.email}</p>
                  </div>
                </div>
                <div className='col-span-1 flex flex-col'>
                  <div className='mb-5 sm:text-lg'>
                    <span className='font-semibold'>Ticket Type:</span>
                    <p>
                      {bookingQuery.data.ticket.name}{' '}
                      {bookingQuery.data.ticket.type}
                    </p>
                  </div>
                  <div className='mb-5 sm:text-lg'>
                    <span className='font-semibold'>Seat:</span>{' '}
                    <p className='text-3xl font-bold'>
                      {selectedSeat?.row}
                      {selectedSeat?.column}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
          <section
            className={clsxm(
              'mb-10 flex w-full items-center gap-x-4 rounded-lg bg-cwhite p-4',
              isAnnouncementOpen ? 'flex' : 'hidden'
            )}
          >
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6 text-cred'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                />
              </svg>
            </div>
            <div className='w-full'>
              Open in personal computer or laptop for better experience. If
              you're in a small to medium width screen, you can use scrollbar
              below the seats to move left or right. If you're in a phone
              screen, you can use your finger to move left or right.
            </div>
            <button onClick={() => setIsAnnouncementOpen(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </section>
        </>
      )}

      <section className='w-full rounded-lg bg-cwhite p-10'>
        <div className='mb-10 rounded-md bg-red-300 p-3 text-center'>Stage</div>
        <div
          className={clsxm(
            'mb-10 flex gap-x-6 overflow-x-auto 2xl:justify-center',
            '2xl:justify-start'
          )}
        >
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
                    disabled
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
                    disabled
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
                    disabled
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

function SeatingConfirmationModal({
  isOpen,
  setIsOpen,
  handleSelectSeat,
  seatName,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelectSeat: () => void;
  seatName: string;
}) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Modal.Title>Confirmation</Modal.Title>
      <p className='text-lg'>
        Are you sure you want to pick seat{' '}
        <span className='font-bold'>{seatName}</span>? You can't change your
        seat after you pick it.
      </p>
      <div className='mt-4 flex justify-end gap-x-4'>
        <Button variant='primary' onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button
          variant='primary'
          className='bg-cgreen'
          onClick={() => {
            setIsOpen(false);
            handleSelectSeat();
          }}
        >
          Pick Seat
        </Button>
      </div>
    </Modal>
  );
}
