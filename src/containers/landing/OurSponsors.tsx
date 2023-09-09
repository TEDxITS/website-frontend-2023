import Image from 'next/image';

import cimbniaga from '~/images/landing/sponsors/cimb-niaga.png';
import posindonesia from '~/images/landing/sponsors/pos-indonesia.png';
import sls from '~/images/landing/sponsors/sls.png';

export default function OurSponsors() {
  return (
    <section className='bg-stars px-6 pb-24 pt-12 sm:px-24'>
      <h3 className='pb-16 text-center font-baron text-4xl text-cwhite lg:text-6xl'>
        Our Sponsors
      </h3>
      <section className='relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-cblack via-cblue to-cwhite'>
        <div className='noisy h-full w-full rounded-[3rem] px-4 py-16 sm:py-20 sm:px-10'>
          <div className='flex h-full w-full flex-col'>
            <div className='mb-8 flex w-full justify-center'>
              <Image
                src={sls}
                alt='SLS'
                width={400}
                height={400}
                className='rounded-xl object-contain'
              />
            </div>
            <div className='flex w-full flex-col items-center justify-around gap-x-4 gap-y-8 sm:flex-row'>
              <Image
                src={posindonesia}
                alt='Pos Indonesia'
                width={300}
                height={300}
                className='object-contain'
              />
              <Image
                src={cimbniaga}
                alt='CIMB Niaga'
                width={300}
                height={300}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
