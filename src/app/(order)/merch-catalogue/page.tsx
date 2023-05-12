import type { Metadata } from 'next';
import Image from 'next/image';

import MerchGridContainer from '@/containers/dashboard/merch/MerchGridContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

import BottomLeftOrnament from '~/images/merch/BottomLeftOrnament.png';
import LongOrnament from '~/images/merch/LongOrnament.png';
import TopRightOrnament from '~/images/merch/TopRightOrnament.png';

const metadataObject = generateTemplateMetadata(
  'Merch Catalogue',
  '',
  '/merch-catalogue'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function MerchCataloguePage() {
  return (
    <>
      <div className='relative max-h-fit min-h-screen overflow-hidden p-5'>
        <MerchGridContainer />
        {/* <div className='flex flex-col items-center'>
          <div className='fixed bottom-12 z-20 mx-auto mt-16 block animate-bounce'>
            <button className='inline-flex rounded-full bg-cred px-16 py-4 text-xl font-extrabold text-white shadow-2xl transition-all duration-150 ease-in-out hover:scale-105'>
              BUY NOW
            </button>
          </div>
        </div> */}

        {/* desktop bg */}
        <Image
          src={TopRightOrnament}
          alt='Left Ornament'
          className='absolute -top-64 -right-40 z-0 hidden w-[400px] lg:block'
          placeholder='blur'
        />
        {/* <Image
          src={LongOrnament}
          alt='Mid Ornament'
          className='absolute top-40 z-0 w-[2000px] md:-top-24 md:w-[400px] xl:-right-32 xl:w-[450px]'
          placeholder='blur'
        /> */}
        <div className='absolute -top-80 -right-72 z-0 h-1/2 w-full sm:-top-16 sm:-right-96'>
          <Image
            src={TopRightOrnament}
            alt='Left Ornament Mobile'
            className='absolute z-0 block scale-75 sm:scale-100 lg:hidden'
            style={{ objectFit: 'contain' }}
            fill
            placeholder='blur'
          />
        </div>
        <div className='absolute top-64 right-8 z-0 h-1/2 w-full sm:top-32 sm:right-40 lg:top-72 lg:right-10'>
          <Image
            src={LongOrnament}
            alt='Long Mobile'
            className='absolute z-0 block scale-[2.2]'
            style={{ objectFit: 'contain' }}
            fill
            placeholder='blur'
          />
        </div>
        {/* <Image
          src={BottomLeftOrnament}
          alt='Left Ornament'
          className='absolute -bottom-24 -left-40 z-0 w-[750px] md:-left-96 md:w-[900px] lg:-bottom-32 xl:w-[930px]'
          placeholder='blur'
        /> */}
        <div className='absolute -bottom-96 left-0 z-0 h-1/2 w-full sm:-bottom-64 lg:-left-64'>
          <Image
            src={BottomLeftOrnament}
            alt='Long Mobile'
            className='scale-15 absolute z-0 block'
            style={{ objectFit: 'contain' }}
            fill
            placeholder='blur'
          />
        </div>
      </div>
    </>
  );
}
