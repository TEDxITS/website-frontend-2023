import { currencyFormat } from '@/utils/currency';

import { MerchTypes } from '@/types/merch.types';
/* eslint-disable @next/next/no-img-element */

interface MerchProps {
  merchandise: MerchTypes[];
}

export default function MerchItemContainer(props: MerchProps) {
  const bundleMerch = props.merchandise.filter(
    (merch) => merch.type === 'Bundle'
  );
  const normalMerch = props.merchandise.filter(
    (merch) => merch.type === 'Normal'
  );
  return (
    <>
      <div className='z-20 grid grid-cols-1 justify-center gap-10 p-2 pt-6 pb-2 sm:mb-8 sm:grid-cols-2 md:mb-10 md:gap-28 lg:mb-12 lg:gap-x-48 xl:gap-x-64'>
        {normalMerch.map((merch: MerchTypes) => (
          <div
            className='flex w-full flex-col items-center p-3 md:scale-110 lg:scale-125'
            key={merch.id}
          >
            <img src={merch.image} className='h-40 w-40' alt={merch.name} />
            <div className='bg-gradient-50-years-to-r mt-5 flex cursor-pointer flex-col items-center rounded-3xl py-1 px-12 transition-all duration-300 ease-in hover:-translate-y-2 hover:scale-125'>
              <p className=' font-primary text-base font-bold'>{merch.name}</p>
              <p className='font-primary text-base'>
                {currencyFormat(merch.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-gradient-50-years-to-r z-20 rounded-[3rem] py-1 px-6 md:mb-5 md:py-2 md:px-8 lg:mb-7 lg:py-3 lg:px-10 xl:mb-9'>
        <span className='mx-auto block text-center font-quaker text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          Bundle
        </span>
      </div>
      <div className='z-20 mt-4 grid grid-cols-1 justify-center gap-10 p-2 sm:grid-cols-2 md:gap-28 lg:gap-48 xl:gap-64'>
        {bundleMerch.map((merch: MerchTypes) => (
          <div
            className='flex w-full flex-col items-center p-3 md:scale-110 lg:scale-125'
            key={merch.id}
          >
            <div className='bg-gradient-50-years-to-r p-3'>
              <img
                src={merch.image}
                className='h-40 w-40 md:scale-125'
                alt={merch.name}
              />
            </div>
            <div className='bg-gradient-50-years-to-r mt-6 flex cursor-pointer flex-col items-center rounded-3xl py-1 px-8 transition-all duration-300 ease-in hover:-translate-y-2 hover:scale-125'>
              <p className=' font-primary text-base font-bold'>{merch.name}</p>
              <p className='font-primary text-base'>
                {currencyFormat(merch.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
