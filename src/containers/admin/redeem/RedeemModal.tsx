/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { QrReader } from 'react-qr-reader';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import clsxm from '@/utils/clsxm';
import { localApi } from '@/utils/local-api';

export default function RedeemModal() {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedUserTicketId, setSelectedUserTicketId] = React.useState('');

  const bookingDetailQuery = useQuery({
    queryKey: ['booking-detail', { id: selectedUserTicketId }],
    queryFn: async () => {
      try {
        const { data } = await localApi.get<any>(
          `/booking/booking-detail/${selectedUserTicketId}`
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  const redeemMutation = useMutation({
    mutationFn: async (data: any) => {
      toast.loading('Redeeming ticket...', { id: 'redeem' });
      try {
        const { data: response } = await localApi.get<any>(
          `/booking/booking-detail/redeem/${data.ticketId}`
        );
        return response;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['booking-detail', { id: selectedUserTicketId }],
      });
      setIsOpen(false);
      setSelectedUserTicketId('');
      toast.success('Redeem success', { id: 'redeem' });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message, { id: 'redeem' });
    },
  });

  const redeemHandler = () => {
    redeemMutation.mutate({
      ticketId: selectedUserTicketId,
    });
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Redeem</Button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className={clsxm(selectedUserTicketId ? 'max-w-4xl' : 'max-w-lg')}
      >
        <Modal.Title className='mb-5 text-center'>Redeem Ticket</Modal.Title>
        {selectedUserTicketId ? (
          <div className='flex flex-col gap-3'>
            {bookingDetailQuery.isLoading ? (
              <div className='py-10 text-center'>Loading...</div>
            ) : bookingDetailQuery.isError ? (
              <div className='py-10 text-center'>Error</div>
            ) : (
              <div className='mb-5 grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-1'>
                  <span className='font-bold'>Ticket ID</span>
                  <span>{bookingDetailQuery.data?.id}</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-bold'>Name</span>
                  <span>{bookingDetailQuery.data?.name}</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-bold'>Email</span>
                  <span>{bookingDetailQuery.data?.email}</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-bold'>Phone Number</span>
                  <span>{bookingDetailQuery.data?.phoneNumber}</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-bold'>Ticket</span>
                  <span>{bookingDetailQuery.data?.ticket?.name}</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-bold'>Ticket Type</span>
                  <span>{bookingDetailQuery.data?.ticket?.type}</span>
                </div>
              </div>
            )}
            <div className='flex justify-center gap-x-4'>
              <Button
                onClick={() => setSelectedUserTicketId('')}
                variant='primary'
              >
                Scan Again
              </Button>
              <Button
                onClick={redeemHandler}
                variant='primary'
                className='bg-cgreen'
              >
                Redeem
              </Button>
            </div>
          </div>
        ) : (
          <QrReader
            onResult={(result) => {
              if (result) {
                setSelectedUserTicketId(result.getText());
              }
            }}
            constraints={{ facingMode: 'environment' }}
            scanDelay={1000}
          />
        )}
      </Modal>
    </>
  );
}
