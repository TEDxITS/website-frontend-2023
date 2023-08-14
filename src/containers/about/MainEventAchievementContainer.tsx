import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/utils/clsxm';

import beautyStandards from '~/images/about/last-year-journey/beauty-standards.png';
import comment1 from '~/images/about/last-year-journey/comment1.png';
import comment2 from '~/images/about/last-year-journey/comment2.png';
import comment3 from '~/images/about/last-year-journey/comment3.png';
import crackedGlassBg from '~/images/about/last-year-journey/cracked-glass-section.png';
import crackedGlassBgMobile from '~/images/about/last-year-journey/cracked-glass-section-mobile.png';
import crackedGlassBgResponsiveMd from '~/images/about/last-year-journey/cracked-glass-section-responsive-md.png';
import kaderisasi from '~/images/about/last-year-journey/kaderisasi.png';
import preEvent1 from '~/images/about/last-year-journey/pre-event-1.png';
import sandykala from '~/images/about/last-year-journey/sandykala.jpg';
import story from '~/images/about/last-year-journey/story.jpg';

function AdditionalInformation({
  numberInfo,
  textInfo,
  textStyle = '',
  numberStyle = '',
  className = '',
}: {
  numberInfo: string;
  textInfo: string;
  textStyle?: string;
  numberStyle?: string;
  className?: string;
}) {
  return (
    <div className={clsxm('mx-auto text-center', className)}>
      <p
        className={clsxm(
          'text-6xl font-semibold md:text-8xl lg:text-6xl xl:text-8xl',
          numberStyle
        )}
      >
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

export default function MainEventAchievementContainer() {
  return (
    <section className='relative z-20 flex justify-center overflow-x-clip bg-transparent py-44 sm:py-20'>
      <Image
        src={crackedGlassBg}
        className='hidden scale-[115%] lg:block'
        alt='Background'
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />
      <Image
        src={crackedGlassBgResponsiveMd}
        className='hidden scale-[115%] sm:block lg:hidden'
        alt='Background'
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />
      <Image
        src={crackedGlassBgMobile}
        className='block h-full scale-[115%] sm:hidden'
        alt='Background'
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />
      <div className='absolute h-full w-full'>
        <div className='mx-auto mt-0 w-11/12 md:mt-16 lg:mt-32 xl:w-10/12'>
          <p className='text-center text-4xl font-semibold text-cwhite md:text-5xl lg:text-left lg:text-4xl xl:text-5xl'>
            Early Bird and Pre-sale <br /> tickets are sold in
          </p>
          <hr className='mx-auto mt-6 w-56 border-2 border-cred md:mt-16 lg:ml-0 lg:w-64' />
          <div className='lg:flex lg:justify-between'>
            <AdditionalInformation
              numberInfo='&plusmn;1 Hour'
              textInfo=''
              numberStyle='text-cwhite'
              textStyle='text-cwhite lg:text-cblack'
              className='mt-6 lg:mt-16 lg:ml-0 lg:text-left'
            />
            <div className='mt-6 block flex justify-center gap-x-2 sm:hidden'>
              <AdditionalInformation
                numberInfo='8'
                textInfo='Expert speakers'
                numberStyle='text-cwhite text-4xl'
                textStyle='text-cwhite text-2xl'
                className=''
              />
              <AdditionalInformation
                numberInfo='134.000+'
                textInfo='Total Reels or Videos View'
                numberStyle='text-cwhite text-4xl'
                textStyle='text-cwhite text-2xl'
                className=''
              />
            </div>
            <div className='mt-10 flex flex-col sm:mt-40 sm:flex-row lg:mt-0'>
              <div className='relative z-50 mx-auto h-max w-full rounded-xl bg-cwhite/50 p-3 sm:-right-4 sm:-top-28 sm:w-72 sm:p-0'>
                <Image
                  src={comment1}
                  className='my-6 rounded-2xl shadow-2xl sm:m-6'
                  alt='comment'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
                <Image
                  src={comment2}
                  className='my-6 rounded-2xl shadow-2xl sm:m-6'
                  alt='comment'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
                <Image
                  src={comment3}
                  className='my-6 rounded-2xl shadow-2xl sm:m-6'
                  alt='comment'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
              </div>
              <div className='z-40 mx-auto mt-6 w-full rounded-xl bg-cwhite/50 sm:mx-0 sm:mt-0 sm:w-96'>
                <div className='mx-auto w-full p-3'>
                  <Link
                    href='https://www.instagram.com/tv/CbkYEtKpD65/?igshid=YmMyMTA2M2Y%3D'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={preEvent1}
                      className=' rounded-2xl shadow-2xl transition-transform hover:scale-105'
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
                        className='rounded-3xl shadow-2xl transition-transform hover:scale-105'
                        alt='Pre Event 1'
                        placeholder='blur'
                        style={{ objectFit: 'fill' }}
                      />
                    </Link>
                    <p className='text-md pt-2 text-center font-medium text-cblack'>
                      Contents We Shared
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
                        className='rounded-2xl shadow-2xl transition-transform hover:scale-105'
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
            <div className='sm:relative lg:mx-0 lg:-mt-28 xl:mt-0'>
              <div className='z-40 mx-auto mt-6 w-full rounded-xl bg-cwhite/50 p-3 sm:absolute sm:-top-12 sm:right-0 sm:mx-0 sm:mt-0 sm:w-64 lg:-right-16 lg:mt-4 lg:w-7/12 xl:-right-44 xl:mt-0 xl:w-9/12'>
                <Link
                  href='https://www.instagram.com/stories/highlights/18160993690215798/?hl=en'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Image
                    src={sandykala}
                    className='rounded-2xl shadow-2xl transition-transform hover:scale-105'
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
              <div className='z-30 mx-auto mt-6 flex w-full justify-center rounded-xl bg-cwhite/50 sm:mt-28 sm:w-96 lg:mx-0 lg:-ml-4 lg:mt-0 lg:w-9/12 xl:ml-0 xl:w-11/12'>
                <Image
                  src={story}
                  className='hidden w-[10rem] rounded-2xl shadow-2xl transition-transform hover:scale-105 xs:block sm:w-[22rem]'
                  alt='profile sandykala'
                  placeholder='blur'
                  style={{ objectFit: 'fill' }}
                />
              </div>
            </div>
            <div className='mx-auto mt-12 hidden sm:block lg:mt-0 lg:mr-12 xl:mt-20 xl:mr-40'>
              <AdditionalInformation
                numberInfo='8'
                textInfo='Expert speaker'
                numberStyle='text-cblack lg:text-cwhite'
                textStyle='text-cblack'
                className='lg:right-0 lg:mt-6 lg:text-right xl:mt-8'
              />
              <AdditionalInformation
                numberInfo='92%'
                textInfo='Overall satisfaction rate'
                numberStyle='text-cblack lg:text-cwhite'
                textStyle='text-cblack'
                className='mt-12 md:mt-20 lg:right-0 lg:mt-6 lg:text-right xl:mt-8'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
