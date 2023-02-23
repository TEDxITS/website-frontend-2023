import Image from 'next/image';

import LinkShortenerContainer from '@/containers/tools/LinkShortenerContainer';

import linkShortenerBg from '~/images/links/link-shortener-bg-alt.png';
import linkShortenerBgMobile from '~/images/links/link-shortener-bg-mobile.png';

export default function LinkShortenerPage() {
  return (
    <>
      <Image
        src={linkShortenerBgMobile}
        alt='Background'
        className='absolute z-20 block shadow sm:hidden'
        fill
        placeholder='blur'
      />
      <Image
        src={linkShortenerBg}
        alt='Background'
        className='absolute z-20 hidden shadow sm:block'
        fill
        placeholder='blur'
        priority
      />
      <LinkShortenerContainer />
    </>
  );
}
