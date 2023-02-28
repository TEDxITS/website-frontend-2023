'use client';
import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { aboutLinks, links } from '@/data/links';

import MultipleHeaderLink from '@/components/link/MultipleHeaderLink';
import MultipleMobileHeaderLink from '@/components/link/MultipleMobileHeaderLink';
import UnderlineLink from '@/components/link/UnderlineLink';
import UnstyledLink from '@/components/link/UnstyledLink';

import clsxm from '@/utils/clsxm';

import TedIcon from '~/images/logo/tedxits-text.svg';

type HeaderProps = {
  topBreakpoint?: number;
};

export default function Header({ topBreakpoint }: HeaderProps) {
  //#region  //*=========== Navigation Mobile State ===========
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
  //#endregion  //*======== Navigation Mobile State ===========

  //#region  //*=========== Navigation Scrolled State ===========
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isNavbarScrolled, setisNavbarScrolled] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY < 64 + (topBreakpoint ? topBreakpoint : 0)
        ? setisNavbarScrolled(false)
        : setisNavbarScrolled(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className='relative top-0 z-50 bg-black drop-shadow-[0_45px_35px_rgba(0,0,0,0.1)]'>
      {/* desktop view */}
      <div className='layout hidden h-14 items-center justify-between md:py-12 lg:flex'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <div className='group inline-flex items-center gap-x-2'>
            <Image
              src='/images/logo/red-rocket.png'
              alt='red-rocket'
              className='transition duration-300 group-hover:-translate-y-2'
              width={40}
              height={10}
            />
            <TedIcon className='h-14 w-24' />
            <p className='text-sm font-thin text-cwhite'>
              <span>&#169;</span>2023
            </p>
          </div>
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-16'>
            {links.map(({ href, label }, i) =>
              i === 1 ? (
                <MultipleHeaderLink
                  key={`${href}${label}`}
                  title='About'
                  linksData={aboutLinks}
                />
              ) : (
                <li key={`${href}${label}`}>
                  <UnderlineLink
                    href={href}
                    className='font-primary text-cwhite hover:text-cred'
                  >
                    {label}
                  </UnderlineLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* mobile view */}
      <div className='relative block h-16 items-center text-cwhite lg:hidden'>
        <div className='absolute inset-0 z-40 flex w-full items-center justify-between px-8 pt-10'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <div className='group inline-flex items-center gap-x-2'>
              <Image
                src='/images/logo/red-rocket.png'
                alt='red-rocket'
                className='transition duration-300 group-hover:-translate-y-2'
                width={40}
                height={10}
              />
              <TedIcon className='h-14 w-24' />
              <p className='text-sm font-thin text-cwhite'>
                <span>&#169;</span>2023
              </p>
            </div>
          </UnstyledLink>
          <ul className='flex items-center justify-between space-x-4'>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={clsxm('cursor-pointer', {
                'text-cdark': !isNavOpen,
              })}
            >
              <Hamburger color='#F0EFE5' />
            </button>
          </ul>
        </div>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.05,
              },
            }}
            className='fixed inset-0 z-30 h-screen max-h-screen overflow-clip bg-cblack/90 transition-all'
          >
            <div className='layout min-h-main flex flex-col items-center justify-start pt-32'>
              {/* anchor link */}
              <motion.ul
                className='flex flex-col gap-8'
                initial={{
                  y: 60,
                }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  },
                }}
              >
                {/* home */}
                {links.map(({ href, label }, i) =>
                  i === 1 ? (
                    <MultipleMobileHeaderLink
                      key={`${href}${label}`}
                      linksData={aboutLinks}
                      title='About'
                    />
                  ) : (
                    <li key={`${href}${label}`} className='text-center'>
                      <Link href={href} className='text-2xl'>
                        <span className='font-primary text-2xl'>{label}</span>
                      </Link>
                    </li>
                  )
                )}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
