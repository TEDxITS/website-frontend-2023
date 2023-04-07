import Image from 'next/image';

import { darkSocialMediaLinks, socialMediaLinks } from '@/data/links';

import UnderlineLink from '@/components/link/UnderlineLink';
import UnstyledLink from '@/components/link/UnstyledLink';

import clsxm from '@/utils/clsxm';

import footerBg from '~/images/landing/footer-bg.webp';

export default function Footer({ className }: { className?: string }) {
  return (
    <div className={clsxm('bw absolute bottom-0', className)}>
      <div className='relative h-[216px] bg-transparent'>
        <div className='absolute h-full w-screen'>
          <Image
            src={footerBg}
            alt='footer-bg'
            className='absolute h-full object-cover lg:w-screen'
            placeholder='blur'
          />
          <footer className='layout relative flex flex-col items-center justify-center gap-8 py-16'>
            <ul className='relative z-10 flex items-center gap-4'>
              {socialMediaLinks.map(({ href, label, logo }) => (
                <UnstyledLink
                  key={`${href}${label}`}
                  href={href}
                  className='transition duration-300 hover:-translate-y-1'
                >
                  {logo}
                </UnstyledLink>
              ))}
            </ul>
            <p className='relative z-10 text-center text-cwhite'>
              <span>&#169;</span>2023 All Rights Reserved · This independent{' '}
              <span className='text-cred'>
                <UnderlineLink
                  className='text-xl font-bold tracking-wider'
                  href='https://www.ted.com/about/programs-initiatives/tedx-program'
                >
                  TEDx
                </UnderlineLink>
              </span>{' '}
              event is operated under license from TED.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export function NormalFooter({
  className,
  theme = '50-years',
  textColor = 'white',
}: {
  className?: string;
  theme?: '50-years' | '7-years';
  textColor?: 'white' | 'black';
}) {
  const socmedLinks =
    textColor === 'white' ? socialMediaLinks : darkSocialMediaLinks;
  return (
    <div
      className={clsxm(
        'relative h-[216px] overflow-x-clip',
        theme === '50-years' && 'bg-stars',
        className
      )}
    >
      <div className='absolute h-full w-full'>
        <Image
          src={footerBg}
          alt='footer-bg'
          className={clsxm(
            'absolute h-full object-cover',
            theme === '7-years' && 'hidden'
          )}
          placeholder='blur'
        />
        <footer className='layout relative flex flex-col items-center justify-center gap-8 pt-16'>
          <ul className='relative z-10 flex items-center gap-4'>
            {socmedLinks.map(({ href, label, logo }) => (
              <UnstyledLink
                key={`${href}${label}`}
                href={href}
                className='transition duration-300 hover:-translate-y-1'
              >
                {logo}
              </UnstyledLink>
            ))}
          </ul>
          <p
            className={clsxm(
              'relative z-10 text-center text-cwhite',
              theme === '7-years' && 'text-cwhite',
              textColor === 'black' && 'text-cblack'
            )}
          >
            <span>&#169;</span>2023 All Rights Reserved · This independent{' '}
            <span className='text-cred'>
              <UnderlineLink
                className='text-xl font-bold tracking-wider'
                href='https://www.ted.com/about/programs-initiatives/tedx-program'
              >
                TEDx
              </UnderlineLink>
            </span>{' '}
            event is operated under license from TED.
          </p>
        </footer>
      </div>
    </div>
  );
}
