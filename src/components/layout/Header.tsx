'use client'
import * as React from 'react';

import UnstyledLink from '@/components/link/UnstyledLink';
import UnderlineLink from '@/components/link/UnderlineLink';
import MultipleMobileLinks from '@/components/link/MultipleMobileLinks';
import TedIcon from '~/images/logo/tedxits-text.svg';
import Image from 'next/image';
import { motion } from "framer-motion"
import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { links } from '@/data/links';

import clsxm from '@/utils/clsxm';

type HeaderProps = {
  topBreakpoint?: number;
};

export default function Header({ topBreakpoint }: HeaderProps) {


  //#region  //*=========== Navigation Mobile State ===========
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
  //#endregion  //*======== Navigation Mobile State ===========

  //#region  //*=========== Navigation Scrolled State ===========
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
    <div className='relative w-full'>
      <header className='sticky top-0 z-50 bg-transparent drop-shadow-[0_45px_35px_rgba(0,0,0,0.1)]'>
        {/* desktop view */}
        <div className='layout hidden h-14 items-center justify-between md:py-12 lg:flex'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <div className='inline-flex items-center gap-x-2 group'>
              <Image
                src={'/images/logo/red-rocket.png'}
                alt={'red-rocket'}
                className={'group-hover:-translate-y-2 transition duration-300'}
                width={40}
                height={10} />
              <TedIcon className='h-14 w-24' />
              <p className='text-cwhite text-xl font-thin'>
                <span>&#169;</span>2023
              </p>
            </div>
          </UnstyledLink>
          <nav>
            <ul className='flex items-center justify-between space-x-16'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnderlineLink href={href} className='hover:text-cred text-cwhite'>
                    {label}
                  </UnderlineLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* mobile view */}
        <div className='block relative items-center h-16 lg:hidden text-cwhite'>
          <div className='flex absolute inset-0 z-40 justify-between items-center w-full pt-10 px-8'>
            <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
              <div className='inline-flex items-center gap-x-2 group'>
                <Image
                  src={'/images/logo/red-rocket.png'}
                  alt={'red-rocket'}
                  className={'group-hover:-translate-y-2 transition duration-300'}
                  width={40}
                  height={10} />
                <TedIcon className='h-14 w-24' />
                <p className='text-cwhite text-xl font-thin'>
                  <span>&#169;</span>2023
                </p>
              </div>
            </UnstyledLink>
            <ul className='flex justify-between items-center space-x-4'>
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
              className='/ bg-cblack/90 fixed inset-0 z-30 pl-3 h-screen transition-all'
            >
              <div className='/ layout min-h-main flex flex-col justify-start pt-24'>
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
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <p className='text-left'>
                        <Link href={href} className='text-2xl'>
                          <span className='font-fivo text-2xl text-right'>
                            {label}
                          </span>
                        </Link>
                      </p>
                    </li>
                  ))}
                  {/* about */}
                </motion.ul>
                {/* <motion.ul
                  className='flex flex-row-reverse gap-4 mt-8'
                  initial={{
                    y: 60,
                  }}
                  animate={{
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.6, -0.05, 0.01, 0.99],
                      delay: 0.5,
                    },
                  }}
                >
                  {links.map(({ href, label }) => (
                    <UnstyledLink key={`${href}${label}`} href={href}>
                      #
                    </UnstyledLink>
                  ))}
                  <UnstyledLink
                    href={'#'}
                    className={clsxm(
                      'font-fivo flex gap-1 items-center px-4 py-1 text-base rounded-full transition-all duration-200 hover:bg-cred hover:text-clight '
                    )}
                  >
                    Login
                  </UnstyledLink>
                </motion.ul> */}
              </div>
            </motion.div>
          )}
        </div>
      </header >
    </div >
  );
}
