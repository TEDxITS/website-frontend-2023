// change the filename to loading.js if server fetch is used
import FullTEDLogo from '@/assets/logo/FullTEDLogo';

export default function Loading() {
  return (
    <main className='relative h-screen w-screen bg-black'>
      <div className='absolute z-30 flex h-full w-full flex-col items-center justify-center'>
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
