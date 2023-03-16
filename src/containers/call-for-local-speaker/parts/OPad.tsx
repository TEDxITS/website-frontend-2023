import clsxm from '@/utils/clsxm';

export default function OPad({ className }: { className?: string }) {
  return (
    <div className={clsxm('grid w-full grid-cols-2 grid-rows-3', className)}>
      <div className='col-span-2 flex justify-center'>
        <button className='w-fit rounded-full bg-[#E7E3DB] py-2 px-4 font-medium text-stone-500 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'>
          E
        </button>
      </div>
      <div className='col-span-2 flex justify-between'>
        <button className='w-fit rounded-full bg-[#E7E3DB] py-2 px-4 font-medium text-stone-500 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'>
          T
        </button>
        <button className='w-fit rounded-full bg-[#E7E3DB] py-2 px-4 font-medium text-stone-500 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'>
          D
        </button>
      </div>
      <div className='col-span-2 flex justify-center'>
        <button className='w-fit rounded-full bg-[#E7E3DB] py-2 px-4 font-medium text-stone-500 shadow-[0_3px_#c4c0b9] active:translate-y-1 active:shadow-none'>
          X
        </button>
      </div>
    </div>
  );
}
