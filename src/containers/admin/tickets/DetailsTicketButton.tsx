'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { TbListDetails } from 'react-icons/tb';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import { adminApi } from '@/utils/api';
import { currencyFormat } from '@/utils/currency';

import { BookingDetailData } from '@/types/dashboard.types';

function DetailsTicketModal({
  setIsOpen,
  isOpen,
  id,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  id: string;
  sourceItem: string;
}) {
  const detailsQuery = useQuery({
    queryKey: ['booking', { bookingId: id }],
    queryFn: async () => {
      try {
        const { data } = await adminApi.get<{ data: BookingDetailData[] }>(
          `/booking/booking-detail/booking/${id}`
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  // const detailsTicket = async () => {
  //   await getDetailsTicket(id);
  // };
  // const detailsTicket = {
  //   data: [
  //     {
  //       id: '1d88583c-d2e6-4c15-a386-54943d1c93b7',
  //       name: 'User 1',
  //       email: 'user1@mail.com',
  //       phoneNumber: '081234567890',
  //       qrLink: null,
  //       ticket: {
  //         id: '9bbbe6af-90e4-493e-848e-49550f42a50f',
  //         name: 'VIP',
  //         price: 100000,
  //       },
  //     },
  //     {
  //       id: '2aee1621-828c-4206-a485-51573a51bf00',
  //       name: 'My Name is too long',
  //       email: 'mynameistoolong123@gmail.com',
  //       phoneNumber: '081234567890',
  //       qrLink: null,
  //       ticket: {
  //         id: '9bbbe6af-90e4-493e-848e-49550f42a50f',
  //         name: 'VIP',
  //         price: 100000,
  //       },
  //     },
  //   ],
  // };

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Modal.Title>Details Ticket</Modal.Title>
      <Modal.Description className='mt-3 flex flex-col gap-4 text-lg'>
        {detailsQuery.isLoading && <p>Loading...</p>}
        {detailsQuery.isError && <p>Error</p>}
        {detailsQuery.data?.map((detailTicket, i) => (
          <div key={detailTicket.id} className='flex gap-2'>
            <span className='mr-2 h-min rounded-full bg-cblue px-2 text-cwhite'>
              {i + 1}
            </span>
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Phone Number</li>
              <li>Category</li>
              <li>Price</li>
            </ul>
            <ul key={detailTicket.id}>
              <li>: {detailTicket.name}</li>
              <li>: {detailTicket.email}</li>
              <li>: {detailTicket.phoneNumber}</li>
              <li>
                : {detailTicket.ticket.name} {detailTicket.ticket.type}
              </li>
              <li>: {currencyFormat(detailTicket.ticket.price)}</li>
            </ul>
          </div>
        ))}
      </Modal.Description>
      <div className='flex justify-end gap-x-2'>
        <Button onClick={() => setIsOpen(false)} variant='primary'>
          Close
        </Button>
      </div>
    </Modal>
  );
}

export default function DetailsTicketButton({
  id,
  sourceItem,
}: {
  id: string;
  sourceItem: string;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <>
      <DetailsTicketModal
        id={id}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        sourceItem={sourceItem}
      />
      <Button
        onClick={() => setIsOpen(true)}
        variant='primary'
        className='flex gap-2 bg-cblue hover:bg-cblue'
      >
        <TbListDetails className='h-5 w-5 text-white' />
        Detail
      </Button>
    </>
  );
}
