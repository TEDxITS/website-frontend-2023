import React from 'react';

import { socialMediaLinks } from '@/data/links';

import UnderlineLink from '@/components/link/UnderlineLink';
import UnstyledLink from '@/components/link/UnstyledLink';
import Image from 'next/image';
import footerBg from '~/images/landing/footer-bg.webp';

export default function Footer() {
  return (
    <div className='absolute bottom-0'>
      <div className='bg-transparent relative h-[216px]'>
        <div className='absolute w-screen h-full'>
          <Image src={footerBg} alt="footer-bg" className='absolute lg:w-screen h-full' />
          <footer className='layout relative flex flex-col gap-8 justify-center items-center py-16'>
            <ul className='flex gap-4 items-center relative z-10'>
              {socialMediaLinks.map(({ href, label, logo }) => (
                <UnstyledLink key={`${href}${label}`} href={href} className='hover:-translate-y-1 transition duration-300'>
                  {logo}
                </UnstyledLink>
              ))}
            </ul>
            <p className='text-center text-cwhite relative z-10'>
              <span>&#169;</span>2023 All Rights Reserved · This independent{' '}
              <span className='text-cred'>
                <UnderlineLink className='font-bold text-xl tracking-wider' href='https://www.ted.com/about/programs-initiatives/tedx-program'>
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