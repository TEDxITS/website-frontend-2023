'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { MdOutlineVerified } from 'react-icons/md';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import api from '@/utils/api';
import { handleFirebaseError } from '@/utils/firebase/shared';

async function verifyBooking(id: string) {
  try {
    const { data } = await api.put(`/booking/verify-booking/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

function VerifyTicketModal({
  setIsOpen,
  isOpen,
  id,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  id: string;
  sourceItem: string;
}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [verified, setVerified] = React.useState<boolean>(false);

  const verifyTicket = async (id: string) => {
    setIsLoading(true);
    const verifyPromise = verifyBooking(id);
    toast
      .promise(verifyPromise, {
        loading: 'Loading..',
        success: 'Ticket is successfully verified',
        error: (e) => handleFirebaseError(e),
      })
      .then(() => {
        router.push('/');
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        // setVerified(true);
      });
  };

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Modal.Title>Verify Ticket</Modal.Title>
      <Modal.Description className='text-lg'>
        Are you sure you want to verify this ticket?
      </Modal.Description>
      <div className='mt-4 flex justify-end gap-x-2'>
        <Button
          onClick={() => {
            verifyTicket(id);
            setIsOpen(false);
          }}
          disabled={isLoading}
          variant='primary'
          className='bg-cgreen hover:bg-cgreen'
        >
          Verify
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          disabled={isLoading}
          variant='primary'
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
}

export default function VerificationButton({
  id,
  sourceItem,
}: {
  id: string;
  sourceItem: string;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <>
      <VerifyTicketModal
        id={id}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        sourceItem={sourceItem}
      />
      <Button
        onClick={() => setIsOpen(true)}
        variant='primary'
        className='flex gap-2 bg-cgreen hover:bg-cgreen'
      >
        <MdOutlineVerified className='h-5 w-5 text-white' />
        Verify
      </Button>
    </>
  );
}
