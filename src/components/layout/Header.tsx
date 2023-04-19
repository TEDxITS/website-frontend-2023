'use client';
import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { aboutLinks, eventLinks, links, orderLinks } from '@/data/links';

import AuthHeaderLink from '@/components/link/AuthHeaderLink';
import AuthMobileHeaderLink from '@/components/link/AuthMobileHeaderLink';
import MultipleHeaderLink from '@/components/link/MultipleHeaderLink';
import MultipleMobileHeaderLink from '@/components/link/MultipleMobileHeaderLink';
import UnderlineLink from '@/components/link/UnderlineLink';
import UnstyledLink from '@/components/link/UnstyledLink';

import clsxm from '@/utils/clsxm';

import TedIcon from '~/images/logo/tedxits-text.svg';
import TedIconBlack from '~/images/logo/tedxits-text-black.svg';

export default function Header({
  theme = '50-years',
}: {
  theme?: '50-years' | '7-years';
}) {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
  return (
    <header
      className={clsxm(
        'top-0 z-50 bg-transparent drop-shadow-[0_45px_35px_rgba(0,0,0,0.1)] sm:relative',
        isNavOpen && 'sticky bg-transparent',
        theme === '50-years' && 'bg-black'
      )}
    >
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
            {theme === '50-years' ? (
              <TedIcon className='h-14 w-24' />
            ) : (
              <TedIconBlack className='h-14 w-24' />
            )}

            <p className='text-sm font-thin text-cwhite'>
              <span>&#169;</span>2023
            </p>
          </div>
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-14'>
            {links.map(({ href, label }, i) => {
              switch (i) {
                case 1:
                  return (
                    <MultipleHeaderLink
                      key={`${href}${label}`}
                      title='About'
                      linksData={aboutLinks}
                      theme={theme}
                    />
                  );
                case 2:
                  return (
                    <MultipleHeaderLink
                      key={`${href}${label}`}
                      title='Events'
                      linksData={eventLinks}
                      theme={theme}
                    />
                  );
                case 3:
                  return (
                    <MultipleHeaderLink
                      key={`${href}${label}`}
                      title='Order Now'
                      linksData={orderLinks}
                      theme={theme}
                    />
                  );
                default:
                  return (
                    <li key={`${href}${label}`}>
                      <UnderlineLink
                        href={href}
                        className={clsxm(
                          'font-primary text-cwhite hover:text-cred',
                          theme === '7-years' && 'text-black'
                        )}
                      >
                        {label}
                      </UnderlineLink>
                    </li>
                  );
              }
            })}
            <AuthHeaderLink theme={theme} />
          </ul>
        </nav>
      </div>

      {/* mobile view */}
      <div className='relative block h-24 items-center text-cwhite lg:hidden'>
        <div className='absolute inset-0 z-40 flex w-full items-center justify-between px-8'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <div className='group inline-flex items-center gap-x-2'>
              <Image
                src='/images/logo/red-rocket.png'
                alt='red-rocket'
                className='transition duration-300 group-hover:-translate-y-2'
                width={40}
                height={10}
              />
              {theme === '50-years' || isNavOpen ? (
                <TedIcon className='h-14 w-24' />
              ) : (
                <TedIconBlack className='h-14 w-24' />
              )}
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
              <Hamburger
                color={theme === '50-years' || isNavOpen ? '#F0EFE5' : '#000'}
              />
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
            className='fixed inset-0 z-30 h-screen bg-cblack/90 transition-all'
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
                {links.map(({ href, label }, i) => {
                  switch (i) {
                    case 1:
                      return (
                        <MultipleMobileHeaderLink
                          key={`${href}${label}`}
                          linksData={aboutLinks}
                          title='About'
                        />
                      );
                    case 2:
                      return (
                        <MultipleMobileHeaderLink
                          key={`${href}${label}`}
                          linksData={eventLinks}
                          title='Events'
                        />
                      );
                    case 3:
                      return (
                        <MultipleMobileHeaderLink
                          key={`${href}${label}`}
                          title='Order Now'
                          linksData={orderLinks}
                        />
                      );
                    default:
                      return (
                        <li key={`${href}${label}`} className='text-center'>
                          <Link href={href} className='text-2xl'>
                            <span className='font-primary text-2xl'>
                              {label}
                            </span>
                          </Link>
                        </li>
                      );
                  }
                })}
                <AuthMobileHeaderLink />
              </motion.ul>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
