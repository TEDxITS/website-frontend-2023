export default function Ticket() {
  return (
    <div className='relative flex h-80 w-full'>
      <div className='relative h-80 w-[75%] rounded-l-3xl border-r-2 border-dashed border-black bg-gradient-to-r from-cyellow via-corange to-cpink'>
        <div className='absolute -left-5 z-20 flex h-full w-12 items-center'>
          <div className='h-12 w-12 rounded-full bg-black' />
        </div>
        <div className='absolute -right-6 -top-5 z-20 h-12 w-12 rounded-full bg-black' />
        <div className='absolute -right-6 -bottom-5 z-20 h-12 w-12 rounded-full bg-black' />
        <div className='noisy absolute z-10 h-full w-full rounded-3xl opacity-[50%]' />
      </div>
      <div className='relative w-[25%] rounded-r-3xl bg-gradient-to-r from-cpink to-cblue'>
        <div className='absolute -right-5 z-20 flex h-full w-12 items-center'>
          <div className='h-12 w-12 rounded-full bg-black' />
        </div>
        <div className='noisy absolute z-10 h-full w-full rounded-3xl opacity-[50%]' />
      </div>
    </div>
  );
}
