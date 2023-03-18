import { HiHome, HiPause, HiPlay, HiPlus } from 'react-icons/hi';

import DPad from '@/containers/call-for-local-speaker/parts/DPad';
import OPad from '@/containers/call-for-local-speaker/parts/OPad';

interface GamepadProps {
  handlePrevious: () => void;
  handleNext: () => void;
  scrollUp: () => void;
  scrollDown: () => void;
  pauseScroll: () => void;
  isScrollingPaused: boolean;
  goToFirstTab: () => void;
}

export function LeftGamepad({
  handlePrevious,
  handleNext,
  scrollUp,
  scrollDown,
  pauseScroll,
  isScrollingPaused,
}: Omit<GamepadProps, 'goToFirstTab'>) {
  return (
    <section className='hidden w-[15%] flex-col items-center py-3 pr-5 pl-7 md:flex'>
      <div className='flex h-[15%] w-full items-start justify-end'>
        <button className='w-fit bg-[#E7E3DB] py-1 px-3'></button>
      </div>
      <div className='h-[45%]'>
        <button className='w-fit rounded-full bg-[#E7E3DB] p-12 shadow-[0_6px_#c4c0b9] active:translate-y-1 active:shadow-none' />
      </div>
      <div className='h-[30%] w-full'>
        <DPad
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          scrollUp={scrollUp}
          scrollDown={scrollDown}
        />
      </div>
      <div className='flex w-full justify-end'>
        <button
          className='w-fit bg-[#E7E3DB] py-1 px-1 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'
          onClick={pauseScroll}
        >
          {isScrollingPaused ? (
            <HiPlay className='text-stone-500' />
          ) : (
            <HiPause className='text-stone-500' />
          )}
        </button>
      </div>
    </section>
  );
}

export function RightGamepad({
  goToFirstTab,
}: Pick<GamepadProps, 'goToFirstTab'>) {
  return (
    <section className='hidden w-[15%] flex-col items-center py-3 pl-5 pr-7 md:flex'>
      <div className='h-[15%] w-full'>
        <button className='w-fit rounded-full bg-[#E7E3DB] py-1 px-1 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'>
          <HiPlus />
        </button>
      </div>
      <div className='h-[45%] w-full'>
        <OPad />
      </div>
      <div className='h-[30%]'>
        <button className='w-fit rounded-full bg-[#E7E3DB] p-12 shadow-[0_6px_#c4c0b9] active:translate-y-1 active:shadow-none' />
      </div>
      <div className='w-full'>
        <button
          className='w-fit rounded-full bg-[#E7E3DB] py-1 px-3 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'
          onClick={goToFirstTab}
        >
          <HiHome className='text-stone-500' />
        </button>
      </div>
    </section>
  );
}

export function BottomGamepad({
  handlePrevious,
  handleNext,
  scrollUp,
  scrollDown,
  pauseScroll,
  isScrollingPaused,
  goToFirstTab,
}: GamepadProps) {
  return (
    <section className='block md:hidden'>
      <div className='flex justify-center gap-x-3 py-5'>
        <button
          className='w-fit rounded-full bg-[#E7E3DB] py-1 px-3 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'
          onClick={goToFirstTab}
        >
          <HiHome className='text-stone-500' />
        </button>
        <button
          className='w-fit rounded-full bg-[#E7E3DB] py-1 px-3 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'
          onClick={pauseScroll}
        >
          {isScrollingPaused ? (
            <HiPlay className='text-stone-500' />
          ) : (
            <HiPause className='text-stone-500' />
          )}
        </button>
      </div>
      <div className='flex justify-around gap-x-6 px-6 pb-7 pt-3'>
        <DPad
          className='w-40'
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          scrollDown={scrollDown}
          scrollUp={scrollUp}
        />
        <OPad className='w-40' />
      </div>
    </section>
  );
}
