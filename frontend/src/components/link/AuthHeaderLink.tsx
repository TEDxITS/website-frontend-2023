'use client';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
import toast from 'react-hot-toast';
import { HiChevronDown } from 'react-icons/hi';

import UnderlineLink from '@/components/link/UnderlineLink';

import { useAuthStore } from '@/store/useAuthStore';

import clsxm from '@/utils/clsxm';

export default function AuthHeaderLink({
  isDashboard = false,
  theme = '50-years',
}: {
  isDashboard?: boolean;
  theme?: '50-years' | '7-years';
}) {
  const user = useAuthStore((state) => state.user);
  const logOut = useAuthStore((state) => state.logOut);
  const router = useRouter();

  const logOutHandler = async () => {
    logOut();
    toast.success('Logged out successfully');
    if (isDashboard) {
      router.push('/');
    }
  };

  return (
    <li className='relative'>
      {user ? (
        <Popover className='relative'>
          {({ open }) => (
            <>
              <Popover.Button
                className={clsxm(
                  'animated-underline custom-link border-dark group inline-flex items-center border-b border-dotted px-1 text-base font-light text-cwhite'
                )}
              >
                <span
                  className={clsxm(
                    'font-primary font-medium group-hover:text-cred',
                    theme === '7-years' && 'text-black'
                  )}
                >
                  {user.email}
                </span>
                <HiChevronDown
                  className={`${open ? '' : 'text-opacity-70'}
                  ml-1 h-5 w-5 text-cred transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden='true'
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 -translate-y-3'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in-out duration-100'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 -translate-y-3'
              >
                <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-40 max-w-sm -translate-x-1/2 transform px-4 drop-shadow-xl sm:px-0 lg:max-w-3xl'>
                  <div className='overflow-hidden rounded-b-lg shadow-lg'>
                    <div
                      className={clsxm(
                        'grid border-[10px] bg-black shadow-inner',
                        theme === '50-years' && 'border-cgray',
                        theme === '7-years' && 'border-[#457493]'
                      )}
                    >
                      <Link
                        href='/dashboard'
                        className='space-y-1 border-b border-cgray py-0.5 font-baron text-green-300 hover:bg-green-300 hover:text-black'
                      >
                        <span className='ml-2 pb-1'>Dashboard</span>
                      </Link>
                      <button
                        className='py-0.5 text-left font-baron text-green-300 hover:bg-green-300 hover:text-black'
                        onClick={logOutHandler}
                      >
                        <span className='ml-2 pb-1'>Logout</span>
                      </button>
                    </div>
                    <div
                      className={clsxm(
                        'h-4 rounded-b-lg',
                        theme === '50-years' && 'bg-cgray',
                        theme === '7-years' && 'bg-[#457493]'
                      )}
                    ></div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ) : (
        <UnderlineLink
          href='/auth/login'
          className={clsxm(
            'font-primary text-cwhite hover:text-cred',
            theme === '7-years' && 'text-black'
          )}
        >
          Login
        </UnderlineLink>
      )}
    </li>
  );
}
