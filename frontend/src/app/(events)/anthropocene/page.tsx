import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import UnstyledLink from '@/components/link/UnstyledLink';
import ItemGalleryContainer from '@/containers/anthropocene/ItemGalleryContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

import peCover1 from '~/images/anthropocene/cover-1.png';
import peCover2 from '~/images/anthropocene/cover-2.png';
import bgTexturedPaper from '~/images/background/bg-textured-paper.jpg';
import bgCircularOrnament from '~/images/call-for-local-speaker/bg-ornament-3.png';

const metadataObject = generateTemplateMetadata(
  'Cities and Anthropocene',
  '',
  '/anthropocene'
);
export const metadata: Metadata = {
  ...metadataObject,
};

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const REELS_LINKS = {
  reels1:
    'https://www.instagram.com/reel/CrIWgRKJscf/?utm_source=ig_web_copy_link',
  reels2: '#',
};

export default async function AnthropocenePage() {
  return (
    <div
      className='bg-7-years-repeat'
      style={{
        backgroundSize: '100%',
        backgroundRepeat: 'repeat-y',
      }}
    >
      <Header theme='7-years' />
      <main className='flex min-h-screen flex-col items-center overflow-x-hidden'>
        <section className='relative mt-10 mb-5 flex w-full items-center justify-center sm:mt-20 sm:w-3/4'>
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute -top-16 -right-16 h-32 w-32 animate-spin sm:h-56 sm:w-56'
            placeholder='blur'
          />
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute -left-16 top-4 h-36 w-36 animate-spin sm:h-60 sm:w-60'
            placeholder='blur'
          />
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute inset-x-1/3 -top-10 hidden h-40 w-40 animate-spin-reverse md:block'
            placeholder='blur'
          />
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute inset-x-1/2 -bottom-10 h-32 w-32 animate-spin-reverse sm:-bottom-16 sm:h-40 sm:w-40'
            placeholder='blur'
          />
          <h1 className='relative bg-white bg-textured-paper py-10 px-4 text-center font-quaker text-3xl shadow-xl sm:px-20 sm:text-6xl'>
            ANTHROPOCENE
          </h1>
        </section>
        <section className='z-20 mb-16 flex w-full flex-col justify-center gap-10 px-4 sm:w-3/4 sm:flex-row'>
          <UnstyledLink
            openNewTab
            href={REELS_LINKS.reels2}
            className='hidden w-56 rotate-[15deg] transition duration-200 ease-in hover:rotate-[30deg] lg:block'
          >
            <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
              <Image
                src={bgTexturedPaper}
                alt='textured paper'
                fill
                className='absolute z-0 object-cover opacity-100'
                placeholder='blur'
              />
              <div className='relative flex flex h-full items-center justify-center'>
                <Image
                  alt='PE 2'
                  src={peCover2}
                  className='h-full w-full object-contain'
                />
              </div>
            </div>
          </UnstyledLink>
          <div className='noisy flex w-full flex-col items-center justify-center bg-white py-3 px-5 shadow-xl lg:w-1/2'>
            <p className='mb-7 text-center text-lg font-medium'>
              The term "Anthropocene" is used to refer to the period when humans
              have had a significant effect on our planet.
            </p>
            <p className='text-center text-lg font-medium'>
              Through this campaign, our aim is to break the silence and take
              affirmative action through our curated visions about humanity’s
              current progress in the environment
            </p>
          </div>
          <UnstyledLink
            openNewTab
            href={REELS_LINKS.reels1}
            className='hidden w-56 rotate-[-15deg] transition duration-200 ease-in hover:rotate-[-30deg] lg:block'
          >
            <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
              <Image
                src={bgTexturedPaper}
                alt='textured paper'
                fill
                className='absolute z-0 object-cover opacity-100'
                placeholder='blur'
              />
              <div className='relative flex flex h-full items-center justify-center'>
                <Image
                  alt='PE 2'
                  src={peCover1}
                  className='h-full w-full object-contain'
                />
              </div>
            </div>
          </UnstyledLink>
          <div className='block flex flex-wrap justify-center gap-10 lg:hidden'>
            <UnstyledLink href={REELS_LINKS.reels2} openNewTab>
              <div className='w-56 rotate-[15deg] transition duration-200 ease-in hover:rotate-[30deg]'>
                <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
                  <Image
                    src={bgTexturedPaper}
                    alt='textured paper'
                    fill
                    className='absolute z-0 object-cover opacity-100'
                    placeholder='blur'
                  />
                  <div className='relative flex flex h-full items-center justify-center'>
                    <Image
                      alt='PE 2'
                      src={peCover2}
                      className='h-full w-full object-contain'
                    />
                  </div>
                </div>
              </div>
            </UnstyledLink>
            <UnstyledLink href={REELS_LINKS.reels1} openNewTab>
              <div className='w-56 rotate-[-15deg] transition duration-200 ease-in hover:rotate-[-30deg]'>
                <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
                  <Image
                    src={bgTexturedPaper}
                    alt='textured paper'
                    fill
                    className='absolute z-0 object-cover opacity-100'
                    placeholder='blur'
                  />
                  <div className='relative flex flex h-full items-center justify-center'>
                    <Image
                      alt='PE 2'
                      src={peCover1}
                      className='h-full w-full object-contain'
                    />
                  </div>
                </div>
              </div>
            </UnstyledLink>
          </div>
        </section>

        <Suspense
          fallback={<p className='py-10 text-center text-lg'>Loading..</p>}
        >
          {/* @ts-expect-error Server Component */}
          <ItemGalleryContainer />
        </Suspense>
      </main>
      <NormalFooter theme='7-years' textColor='black' />
    </div>
  );
}
