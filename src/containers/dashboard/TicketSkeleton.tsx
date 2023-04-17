export default function TicketSkeleton() {
  return (
    <div className='relative flex h-[30rem] w-full flex-col md:h-80 md:flex-row'>
      <div className='noisy relative h-[75%] animate-pulse rounded-3xl border-b-2 border-r-0 border-dashed border-black bg-gray-300 md:h-auto md:w-[75%] md:rounded-l-3xl md:border-b-0 md:border-r-2'>
        <div className='absolute -top-8 flex h-auto w-full justify-center md:top-auto md:-left-5 md:h-full md:w-auto md:items-center'>
          <div className='h-16 w-16 rounded-full bg-black md:h-12 md:w-12'></div>
        </div>
      </div>
      <div className='h-[25%] w-full animate-pulse rounded-3xl bg-gray-300 md:h-auto md:w-[25%] md:rounded-r-3xl'>
        <div className='absolute -right-5 hidden h-full items-center md:flex'>
          <div className='h-12 w-12 rounded-full bg-black'></div>
        </div>
        <div className='absolute -bottom-8 block flex w-full justify-center md:hidden'>
          <div className='h-16 w-16 rounded-full bg-black'></div>
        </div>
      </div>
    </div>
  );
}
