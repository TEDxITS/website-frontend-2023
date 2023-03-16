import {
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
} from 'react-icons/hi';

import clsxm from '@/utils/clsxm';

export default function DPad({
  handlePrevious,
  handleNext,
  scrollUp,
  scrollDown,
  className,
}: {
  handlePrevious: () => void;
  handleNext: () => void;
  scrollUp: () => void;
  scrollDown: () => void;
  className?: string;
}) {
  return (
    <div className={clsxm('grid w-full grid-cols-3', className)}>
      <div className='col-span-3 flex justify-center'>
        <button
          className='bg-[#E7E3DB] px-1 pb-3 active:translate-y-1'
          onClick={scrollUp}
        >
          <HiChevronUp className='h-6 w-6 text-stone-600' />
        </button>
      </div>
      <div className='col-span-3 flex justify-between'>
        <button
          className='w-[37%] bg-[#E7E3DB] py-1 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'
          onClick={handlePrevious}
        >
          <HiChevronLeft className='h-6 w-6 text-stone-600' />
        </button>
        <div className='w-[26%] bg-[#E7E3DB]'></div>
        <button
          className='flex w-[37%] justify-end bg-[#E7E3DB] py-1 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'
          onClick={handleNext}
        >
          <HiChevronRight className='h-6 w-6 text-stone-600' />
        </button>
      </div>
      <div className='col-span-3 flex justify-center'>
        <button
          className='-translate-y-1 bg-[#E7E3DB] px-1 pt-4 shadow-[0_3px_#c4c0b9] active:translate-y-0 active:shadow-none'
          onClick={scrollDown}
        >
          <HiChevronDown className='h-6 w-6 text-stone-600' />
        </button>
      </div>
    </div>
  );
}
