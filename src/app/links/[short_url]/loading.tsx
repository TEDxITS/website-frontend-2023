import FullTEDLogo from '@/assets/logo/FullTEDLogo';

export default function Loading() {
  return (
    <main className='relative h-screen w-screen bg-black'>
      <div className='absolute z-30 flex h-full w-full flex-col items-center justify-center'>
        {/* <div className='relative'>
      <div className='absolute -top-2 -right-2 -z-10 h-60 w-96 bg-stone-500 py-10'></div>
      <div className='z-20 h-60 w-96 border-2 bg-stone-300 p-3'>
      <div className='flex flex-col items-center justify-center bg-gray-900 p-6'></div>
      </div>
    </div> */}
        <div className='flex flex-col items-center justify-center'>
          <FullTEDLogo variant='text' className='h-16 w-72' />
          <h2 className='mb-20 font-baron text-green-300'>LINK SHORTENER</h2>
          <div className='w-fit'>
            <p className='typewriter-fast font-medium text-green-200'>
              Loading...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
