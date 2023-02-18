import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/utils/clsxm';

import crackedGlassBg from '~/images/about/cracked-glass-section.png';
import crackedGlassBgResponsive from '~/images/about/cracked-glass-section-responsive.png';
import beautyStandards from '~/images/about/section2/beauty-standards.png';
import comment1 from '~/images/about/section2/comment-1.png';
import comment2 from '~/images/about/section2/comment-2.png';
import comment3 from '~/images/about/section2/comment-3.png';
import kaderisasi from '~/images/about/section2/kaderisasi.png';
import preEvent1 from '~/images/about/section2/pre-event-1.png';
import sandykala from '~/images/about/section2/sandykala.png';
import story from '~/images/about/section2/story.png';

function AdditionalInformation({
  numberInfo,
  textInfo,
  textStyle = '',
  className = '',
}: {
  numberInfo: string;
  textInfo: string;
  textStyle?: string;
  className?: string;
}) {
  return (
    <div className={clsxm('mx-auto text-center', className)}>
      <p className='text-6xl font-semibold text-cwhite md:text-8xl lg:text-6xl xl:text-8xl'>
        {numberInfo}
      </p>
      <p
        className={clsxm(
          'mt-3 text-3xl font-medium md:text-5xl lg:mt-6 lg:text-3xl xl:text-5xl',
          textStyle
        )}
      >
        {textInfo}
      </p>
    </div>
  );
}

export default function StartedConversationContainer() {
  return (
    <section className='relative z-20 flex justify-center overflow-x-clip bg-black'>
      <Image
        src={crackedGlassBg}
        className='hidden scale-[115%] lg:block'
        alt='Background'
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />
      <Image
        src={crackedGlassBgResponsive}
        className='block scale-[115%] lg:hidden'
        alt='Background'
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />
      <div className='absolute h-full w-full'>
        <div className='mx-auto mt-28 w-11/12 lg:mt-32 lg:w-10/12'>
          <p className='text-center text-4xl font-semibold text-cwhite md:text-5xl lg:text-left lg:text-4xl xl:text-5xl'>
            We started <br /> the conversation
          </p>
          <hr className='mx-auto mt-6 w-56 border-2 border-cred lg:ml-0 lg:w-64' />
          <div className='lg:flex lg:justify-between'>
            <AdditionalInformation
              numberInfo='18.000+'
              textInfo='Total Pre-Event Views'
              textStyle='text-cwhite lg:text-cblack'
              className='mt-16 lg:mt-32 lg:ml-0 lg:text-left'
            />
            <div className='mt-16 flex flex-col sm:mt-40 sm:flex-row lg:mt-0'>
              <div className='relative z-50 mx-auto h-max w-10/12 sm:-right-4 sm:-top-28 sm:w-72'>
                <Image
                  src={comment1}
                  className='my-6 rounded-2xl sm:m-6'
                  alt='comment'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
                <Image
                  src={comment2}
                  className='my-6 rounded-2xl sm:m-6'
                  alt='comment'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
                <Image
                  src={comment3}
                  className='my-6 rounded-2xl sm:m-6'
                  alt='comment'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
              </div>
              <div className='z-40 mx-auto mt-6 w-10/12 sm:mx-0 sm:mt-0 sm:w-96'>
                <div className='mx-auto w-full'>
                  <Link
                    href='https://www.instagram.com/tv/CbkYEtKpD65/?igshid=YmMyMTA2M2Y%3D'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={preEvent1}
                      className='rounded-2xl'
                      alt='Pre Event 1'
                      placeholder='blur'
                      style={{ objectFit: 'fill' }}
                    />
                  </Link>
                </div>
                <div className='flex flex-row'>
                  <div className='w-1/2 p-2'>
                    <Link
                      href='https://www.instagram.com/p/CaenCtcp1-n/?igshid=YmMyMTA2M2Y%3D'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <Image
                        src={kaderisasi}
                        className='rounded-3xl'
                        alt='Pre Event 1'
                        placeholder='blur'
                        style={{ objectFit: 'fill' }}
                      />
                    </Link>
                    <p className='text-md pt-2 text-center font-medium text-cblack'>
                      contents we shared
                    </p>
                  </div>
                  <div className='w-1/2 p-2'>
                    <Link
                      href='https://www.instagram.com/p/CbcetJiJoFR/?igshid=YmMyMTA2M2Y%3D'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <Image
                        src={beautyStandards}
                        className='rounded-2xl'
                        alt='Pre Event 1'
                        placeholder='blur'
                        style={{ objectFit: 'fill' }}
                      />
                    </Link>
                    <p className='text-md pt-2 text-center font-medium text-cblack'>
                      Pre-Event
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className='mx-auto sm:relative lg:mx-0'>
              <div className='z-40 mx-auto mt-6 w-10/12 sm:absolute sm:-top-10 sm:right-0 sm:mx-0 sm:mt-0 sm:w-64 lg:-right-44 lg:mt-6 xl:mt-0'>
                <Link
                  href='https://www.instagram.com/rumahsandyakala/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Image
                    src={sandykala}
                    className='rounded-2xl'
                    alt='profile sandykala'
                    placeholder='blur'
                    style={{ objectFit: 'fill' }}
                  />
                </Link>
                <p className='pt-2 pr-6 text-center text-lg font-medium text-cblack sm:text-right'>
                  collaboration with <br />
                  @rumahsandykala
                </p>
              </div>
              <div className='z-30 mx-auto mt-6 w-10/12 sm:mt-28 sm:w-96 lg:mx-0 lg:mt-0'>
                <Image
                  src={story}
                  className='rounded-2xl'
                  alt='profile sandykala'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
              </div>
            </div>
            <div className='mx-auto mt-20 lg:mr-12 xl:mr-40'>
              <AdditionalInformation
                numberInfo='66.000'
                textInfo='Instagram Reach'
                textStyle='text-cblack'
                className='lg:right-0 lg:mt-8 lg:text-right'
              />
              <AdditionalInformation
                numberInfo='134.000+'
                textInfo='Total Reels or Videos View'
                textStyle='text-cblack'
                className='mt-20 lg:right-0 lg:mt-8 lg:text-right'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
