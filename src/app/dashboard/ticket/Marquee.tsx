'use client';
import Marquee from 'react-fast-marquee';

export default function CustomMarquee() {
  return (
    <Marquee direction='left' speed={30} gradient={false}>
      <h1 className='px-1 font-baron text-2xl text-green-300'>
        COMING SOON - COMING SOON - COMING SOON - COMING SOON - COMING SOON -
        COMING SOON -
      </h1>
    </Marquee>
  );
}
