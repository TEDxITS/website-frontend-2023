import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

export default function TransferPurchaseModal({
  bookingId,
}: {
  bookingId: string;
}) {
  const queryClient = useQueryClient();
  const transferMutation = useMutation({
    mutationFn: async (email: string) => {
      try {
        const res = await fetch('/api/ticket/transfer', {
          method: 'POST',
          body: JSON.stringify({ id: bookingId, orderingUser: email }),
        });
        const data = await res.json();
        if (!res.ok) return Promise.reject(data);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.loading('Transferring purchase...', { id: 'transfer' });
    transferMutation.mutate(email, {
      onSuccess: () => {
        toast.success('Purchase transferred!', { id: 'transfer' });
        queryClient.invalidateQueries({
          queryKey: ['bookings'],
        });
        setIsOpen(false);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        toast.error(err.message, { id: 'transfer' });
      },
    });
  };

  return (
    <>
      <Button
        variant='primary'
        className='w-full'
        onClick={() => {
          setIsOpen(true);
          setEmail('');
        }}
      >
        <p className='w-full text-center'>Transfer Purchase</p>
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Modal.Title className='mb-3'>Transfer Purchase</Modal.Title>
        <form onSubmit={handleSubmit}>
          <label className='mb-2 font-medium'>New Email</label>
          <input
            type='email'
            className='mb-3 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className='flex justify-end gap-x-3'>
            <Button variant='primary' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant='primary' className='bg-cgreen' type='submit'>
              Transfer
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
