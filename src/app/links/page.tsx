import Image from 'next/image';

import LinkShortenerForm from '@/containers/links/LinkShortenerContainer';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import linkShortenerBg from '~/images/links/link-shortener-bg-alt.png';
import linkShortenerBgMobile from '~/images/links/link-shortener-bg-mobile.png';

export default async function LinkShortenerPage() {
  return (
    <RandomStarfieldContainer>
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
      <LinkShortenerForm />
      {/* <Suspense fallback={<p>Loading...</p>}>
        <ShortLinkList />
      </Suspense> */}
    </RandomStarfieldContainer>
  );
}
