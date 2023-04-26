import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/button/Button';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';
import api from '@/utils/api';
import clsxm from '@/utils/clsxm';
import { storage } from '@/utils/firebase/client';

import { BookingData, BookingDetailData } from '@/types/dashboard.types';

import BlackTedLogo from '~/images/logo/tedxits-black.png';

type UploadPaymentProps = {
  bookingId: string;
  paymentProof: string;
};

export default function UserPaymentContainer({
  booking,
}: {
  booking: BookingData;
}) {
  const queryClient = useQueryClient();

  const bookingDetailsQuery = useQuery({
    queryKey: ['booking-details', { id: booking.id }],
    queryFn: async () => {
      try {
        const { data } = await api.get<{ data: BookingDetailData[] }>(
          `/booking/booking-detail/booking/${booking.id}`
        );
        return data.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: async (data: UploadPaymentProps) => {
      const { data: response } = await api.put('/booking/upload-payment', data);

      return response;
    },
    onSuccess: () => {
      toast.success('Payment proof uploaded', { id: 'uploading' });
      queryClient.invalidateQueries({
        queryKey: ['booking', { id: booking.id }],
      });
    },
    onError: () => {
      queryClient.invalidateQueries({
        queryKey: ['booking', { id: booking.id }],
      });
    },
  });

  const [isAnnouncementOpen, setIsAnnouncementOpen] = React.useState(true);
  const [ticketCounts, setTicketCounts] = React.useState<{
    [key: string]: number;
  }>({});
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [previewImage, setPreviewImage] = React.useState<string>('');
  const imageInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(selectedImage.type)) {
        setPreviewImage(URL.createObjectURL(selectedImage));
      } else {
        if (imageInputRef.current) {
          imageInputRef.current.value = '';
        }
        toast.error('Please select an image file (JPEG/PNG/GIF)');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = imageInputRef.current?.files?.[0];

    if (!file) {
      toast.error('Please select a file');
      return;
    }

    toast.loading(`Uploading..`, { id: 'uploading' });
    const storageRef = ref(storage, `files/${file.name}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          mutation.mutate({ bookingId: booking.id, paymentProof: downloadURL });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  React.useEffect(() => {
    let price = 0;
    const counts: {
      [key: string]: number;
    } = {};
    for (const item of bookingDetailsQuery.data || []) {
      const { ticket } = item;
      if (ticket) {
        counts[JSON.stringify(ticket)] =
          (counts[JSON.stringify(ticket)] || 0) + 1;
        price += ticket.price;
      }
    }
    setTicketCounts(counts);
    setTotalPrice(price);
  }, [bookingDetailsQuery.data]);

  return (
    <section>
      <h2 className='mb-10 font-baron text-cwhite'>Payments</h2>
      <div
        className={clsxm(
          'noisy mb-5 flex w-full items-center gap-x-4 rounded-lg bg-white p-4',
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
        <div>
          Please note that your ticket reservation is not confirmed until the
          payment proof is submitted. To ensure that you secure your booking,
          please make your payment and submit the proof as soon as possible.
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
      </div>
      <div className='mb-5 flex flex-col justify-between gap-4 lg:flex-row'>
        {/* Receipt */}
        <div className="flex h-full flex-col bg-[url('/images/purchase/bg-receipt.png')] lg:sticky lg:top-5">
          <div className='flex flex-row justify-center border-b-2 border-dashed border-cblack px-4'>
            <FullTEDLogo className='h-24 w-48' />
            <p className='mt-4 text-xl font-semibold text-cblack'>
              <span>&#169;</span>2023
            </p>
          </div>
          <div className='mx-4 flex flex-col items-center justify-center'>
            <h3 className='my-4 text-center font-baron text-xl uppercase'>
              RECEIPT
            </h3>
            <div className='mb-1 flex w-full justify-between'>
              <div>
                <p className='font-bold'>DESCRIPTION</p>
              </div>
              <div>
                <p className='font-bold'>PRICE</p>
              </div>
            </div>
            <ul className='w-full'>
              {ticketCounts &&
                Object.keys(ticketCounts).map((ticket) => {
                  const ticketData = JSON.parse(ticket);
                  return (
                    <li
                      key={ticketData.id}
                      className='flex w-full items-center justify-between gap-x-2 pt-2'
                    >
                      <div>
                        <p className='text-sm'>
                          {ticketCounts[ticket]} x {ticketData.name}{' '}
                          {ticketData.type}
                        </p>
                      </div>
                      <div className='grow border-b border-dashed border-black pb-2'></div>
                      <div>
                        <p className='text-sm'>
                          Rp. {ticketData.price * ticketCounts[ticket]}
                        </p>
                      </div>
                    </li>
                  );
                })}
              <li className='mt-4 flex w-full items-center justify-between gap-x-2 border-t border-black pt-2 font-semibold'>
                <div>
                  <p className=''>Total</p>
                </div>
                <div className='grow border-b border-dashed border-black pb-2'></div>
                <div>
                  <p className=''>Rp. {totalPrice}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='my-4 flex w-full flex-col items-center justify-center px-4'>
            <h3 className='my-4 w-full border-b-2 border-dashed border-cblack pb-4 text-center font-baron text-4xl font-bold'>
              THANK YOU!
            </h3>
            <small className='text-center text-[.65rem] font-semibold'>
              <span>&#169;</span>2023 All Rights Reserved <br /> This
              independent <span className='font-bold text-cred'>TEDx</span>{' '}
              event is operated under license from TED.
            </small>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-receipt.png flex w-full flex-row bg-[url('/images/purchase/bg-receipt.png')]">
          <div className='hidden h-full w-32 items-center justify-center border-r-2 border-cblack lg:flex'>
            {/* <FullTEDLogo className='-rotate-90 w-32 h-full' /> */}
            <Image
              src={BlackTedLogo}
              alt='ted-logo-2023'
              className='w-full -rotate-90'
            />
          </div>
          <div className='flex w-full flex-col lg:mb-0'>
            <div className='flex w-full items-center justify-center border-b-2 border-cblack'>
              <h3 className='my-6 text-center font-baron text-4xl uppercase text-cblack'>
                Payment Method
              </h3>
            </div>
            <ul className='w-full space-y-3 border-b-2 border-cblack p-5'>
              <li className='flex w-full items-center justify-between gap-x-2'>
                <div>
                  <p className=''>
                    BNI a/n I Gusti Ayu Pradnya Widyanti Sandhi
                  </p>
                </div>
                <div className='grow border-b border-dashed border-black pb-2'></div>
                <div>
                  <p className='font-semibold'>1299877186</p>
                </div>
              </li>
              <li className='flex w-full items-center justify-between gap-x-2'>
                <div>
                  <p className=''>
                    DANA a/n I Gusti Ayu Pradnya Wedanti Sandhi
                  </p>
                </div>
                <div className='grow border-b border-dashed border-black pb-2'></div>
                <div>
                  <p className='font-semibold'>081238300488</p>
                </div>
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <div className='w-full grow items-center justify-center'>
                <div className='flex h-full flex-col px-4 lg:flex-row'>
                  <div className='flex w-full flex-col items-center space-y-6 py-10'>
                    <h3 className='font-baron text-base font-bold text-cblack'>
                      UPLOAD YOUR PAYMENT PROOF!
                    </h3>
                    <label className='block'>
                      <input
                        type='file'
                        accept='image/jpeg, image/png, image/gif'
                        ref={imageInputRef}
                        className='block w-full cursor-pointer text-slate-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-red-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-cwhite hover:file:bg-red-600'
                        onChange={handleImageUpload}
                      />
                    </label>
                    {previewImage && (
                      <div className='w-full grow'>
                        <p className='mb-2 font-medium'>Preview:</p>
                        <div className='flex w-full justify-center border-2 border-dashed border-cblack'>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={previewImage} alt='asuh' />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex justify-end p-4'>
                <Button size='lg' type='submit'>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
