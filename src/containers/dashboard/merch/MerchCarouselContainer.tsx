import Image from 'next/image';
import { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { currencyFormat } from '@/utils/currency';

import { MerchTypes } from '@/types/merch.types';

// import LeftSide from '~/images/merch/left-side.png';
// import RightSide from '~/images/merch/right-side.png';

// import LeftSide from '~/images/merch/left-side.png';
// import RightSide from '~/images/merch/right-side.png';

interface MerchProps {
  merchandise: MerchTypes[];
}

export default function MerchCarouselContainer(props: MerchProps) {
  const [lastShow, setLastShow] = useState(1);
  // console.log(props.merchandise);

  return (
    <div className='mt-5 flex h-fit w-full items-center justify-center overflow-hidden sm:mt-7'>
      {/* <Image
        src={LeftSide}
        alt='LeftSide'
        className='absolute -left-72 scale-90'
      />
      <Image
        src={RightSide}
        alt='RightSide'
        className='absolute -right-72 scale-90'
      /> */}

      <GrPrevious
        onClick={() => {
          if (lastShow === 1) {
            setLastShow(2);
          } else {
            setLastShow(1);
          }
        }}
        className='z-30 cursor-pointer rounded-full bg-cwhite/50 p-1 text-xl duration-200 hover:bg-cwhite md:p-3 md:text-[50px]'
      />

      <div className='flex h-fit w-full items-center justify-center overflow-hidden md:h-screen'>
        <div
          className={`
          ${lastShow === 1 ? `z-10 scale-150` : 'z-0 opacity-70'} 
          flex translate-x-28 flex-col items-center justify-center gap-4 p-10 duration-300 md:translate-x-32
        `}
        >
          <h2
            className={`${
              lastShow == 1 ? 'flex' : 'hidden'
            } font-quaker text-base md:text-2xl`}
          >
            {props.merchandise[4].name}
          </h2>
          <div className='bg-gradient-50-years-to-r flex h-24 w-36 items-center justify-center md:h-48 md:w-72'>
            <Image
              src={props.merchandise[4].image}
              alt='...'
              width={200}
              height={200}
            />
          </div>
          <span
            className={`${
              lastShow == 1 ? 'flex' : 'hidden'
            } bg-gradient-50-years-to-r rounded-3xl px-4 py-1 font-primary text-xs font-bold md:text-lg`}
          >
            {currencyFormat(props.merchandise[4].price)}
          </span>
        </div>

        <div
          className={`
          ${lastShow === 2 ? `z-10 scale-150` : 'z-0 opacity-70'} 
          flex -translate-x-28 flex-col items-center justify-center gap-4 p-10 duration-300 md:-translate-x-32
      `}
        >
          <h2
            className={`${
              lastShow == 2 ? 'flex' : 'hidden'
            } font-quaker text-base md:text-2xl`}
          >
            {props.merchandise[5].name}
          </h2>
          <div className='bg-gradient-50-years-to-r flex h-24 w-36 items-center justify-center md:h-48 md:w-72'>
            <Image
              src={props.merchandise[4].image}
              alt='...'
              width={200}
              height={200}
            />
          </div>
          <span
            className={`${
              lastShow == 2 ? 'flex' : 'hidden'
            } bg-gradient-50-years-to-r rounded-3xl py-1 px-4 font-primary text-xs font-bold md:text-lg`}
          >
            {currencyFormat(props.merchandise[5].price)}
          </span>
        </div>
      </div>

      <GrNext
        onClick={() => {
          if (lastShow === 1) {
            setLastShow(2);
          } else {
            setLastShow(1);
          }
        }}
        className=' z-30 cursor-pointer rounded-full bg-cwhite/50 p-1 text-xl duration-200 hover:bg-cwhite md:p-3 md:text-[50px]'
      />
    </div>
  );
}
