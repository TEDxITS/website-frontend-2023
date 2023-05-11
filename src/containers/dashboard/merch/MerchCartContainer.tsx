'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BsCart3 } from 'react-icons/bs';

import Button from '@/components/button/Button';

import { useAuthStore } from '@/store/useAuthStore';

import { localApi } from '@/utils/local-api';

export default function MerchCartContainer() {
  const queryClient = useQueryClient();

  const user = useAuthStore((state) => state.user);
  console.log(user);
  const userEmail = user?.email;

  const merchQuery = useQuery({
    queryKey: ['merch', userEmail],
    queryFn: async () => {
      try {
        // const { data } = await localApi.get(`/merch`);
        const { data } = await localApi.get(`/merch/cart/user/${userEmail}`);
        console.log(data);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  const deleteCart = useMutation(
    async (data: any) => {
      const { data: response } = await localApi.delete(
        `/merch/cart/${data.data[0].id}`,
        data
      );
      return response;
    },
    {
      onSuccess: () => {
        toast.success('Checkout Success');
        // Ngerefresh merchQuery biar isi cartnya keupdate
        queryClient.invalidateQueries({
          queryKey: ['merch', userEmail],
        });
      },
      onError: () => {
        toast.error('Checkout Failed');
      },
    }
  );

  const mutation = useMutation(
    async (data: any) => {
      const { data: response } = await localApi.post('/merch/cart', data);
      return response;
    },
    {
      onSuccess: () => {
        toast.success('Checkout Success');
        // Ngerefresh merchQuery biar isi cartnya keupdate
        queryClient.invalidateQueries({
          queryKey: ['merch', userEmail],
        });
      },
      onError: () => {
        toast.error('Checkout Failed');
      },
    }
  );

  const [count, setCount] = useState(1);

  function incrementCount() {
    setCount(count + 1);
  }
  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  if (merchQuery.isLoading)
    return (
      <div>
        <section className='layout z-20 flex flex-col items-center p-5'>
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
      </div>
    );

  if (merchQuery.isError)
    return (
      <div className='flex w-full text-center text-cred'>
        Get request error!
      </div>
    );

  return (
    <div>
      <h1 className='mb-5 flex w-full justify-center font-baron text-2xl text-cwhite lg:text-4xl'>
        Your Merch Cart
        <BsCart3 className='translate-x-4 translate-y-1' />
      </h1>
      {/* merch detail row */}
      <div className='mt-12 flex flex-col justify-around rounded-3xl bg-white py-6 transition duration-300 hover:-translate-y-1 lg:flex-row'>
        {/* merch */}
        <div className='flex h-full flex-col items-center justify-center lg:w-[168px]'>
          <img
            src='/images/landing/rockets/red4.png'
            alt='merch'
            className='w-full'
          />
          <p className='text-xs text-cblack'>
            {JSON.stringify(merchQuery.data.data)}
          </p>
          {/* <img src={merchQuery.data.data[0].image} alt="merch" className='w-full' />
          <p className="text-xs text-cblack">{JSON.stringify(merchQuery.data.data[0].id)}</p> */}
        </div>
        {/* quantity & pricing */}
        <div className='flex flex-col items-center justify-center text-2xl'>
          {/* quantity */}
          <div className='mb-4'>
            <p className='mb-4 text-center  font-baron font-bold text-cblack lg:text-left'>
              Quantity
            </p>
            <div className=' flex font-semibold text-cblack'>
              <button
                onClick={decrementCount}
                className={`${count === 0 ? 'opacity-40' : ''}`}
              >
                -
              </button>
              <div className='ml-12'>{count}</div>
              <button onClick={incrementCount} className='ml-12'>
                +
              </button>
            </div>
          </div>
          {/* price */}
          <div className='mb-4'>
            <p className='mb-4 text-center font-baron font-bold text-cblack lg:text-left'>
              Price
            </p>
            <p className='font-semibold text-cblack'>Rp. {100000 * count}</p>
          </div>
        </div>
      </div>

      <div className='mt-24 flex justify-around'>
        <p className='font-baron text-2xl font-bold text-ccream'>Total Price</p>
        <p className='text-2xl font-bold text-cwhite'> Rp. {100000 * count}</p>
      </div>

      <div className='mt-12 mb-24 flex w-full  items-center justify-center lg:items-end lg:justify-end'>
        <Button
          onClick={() => {
            if (count > 0) {
              mutation.mutate({
                user_email: userEmail,
                merch_id: 1,
                quantity: count,
              });
            } else {
              // deleteCart.mutate({
              //   user_email: userEmail,
              //   merch_id: 1,
              //   quantity: count,
              // });
              console.log('delete');
            }
          }}
          // Ngedisabled button kalo post rqequst lagi loading
          isLoading={mutation.isLoading}
          className=' rounded-2xl py-4 px-9 font-baron text-3xl font-bold text-cwhite transition duration-300 hover:scale-105'
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
