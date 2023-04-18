'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { MdOutlineVerified } from 'react-icons/md';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import { adminApi } from '@/utils/api';

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
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      toast.loading('Verifying purchase...', { id: 'verify-ticket' });
      const { data: response } = await adminApi.put(
        `/booking/verify-booking/${id}`
      );

      return response;
    },
    onSuccess: () => {
      toast.success('Purchase verified!', { id: 'verify-ticket' });
      queryClient.invalidateQueries({
        queryKey: ['booking'],
      });
      setIsOpen(false);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(error.response.data.message, { id: 'verify-ticket' });
    },
  });

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Modal.Title>Verify Ticket</Modal.Title>
      <Modal.Description className='text-lg'>
        Are you sure you want to verify this ticket?
      </Modal.Description>
      <div className='mt-4 flex justify-end gap-x-2'>
        <Button
          onClick={() => {
            mutation.mutate();
          }}
          disabled={mutation.isLoading}
          variant='primary'
          className='bg-cgreen hover:bg-cgreen'
        >
          Verify
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          disabled={mutation.isLoading}
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
