'use client';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import React, { Fragment } from 'react';
import { toast } from 'react-hot-toast';

import { dashboardLinks } from '@/data/links';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';
import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';
import clsxm from '@/utils/clsxm';

export default function SidebarDashboard() {
  const { logOut } = useFirebaseAuthContext();
  const router = useRouter();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
  const segment = useSelectedLayoutSegment();

  const logOutHandler = () => {
    toast.loading('Logging out...', { id: 'logout' });
    router.push('/login');
    logOut().then(() => {
      toast.dismiss('logout');
      toast.success('Logged out successfully!');
    });
  };

  return (
    <>
      {/* Desktop View */}
      <aside className='noisy sticky top-0 hidden h-screen w-1/6 bg-white sm:block'>
        <FullTEDLogo className='mt-8 h-20' />
        <nav className='mt-10 h-3/4 px-4'>
          <ul className='flex h-3/4 flex-col gap-y-2'>
            {dashboardLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li
                  className={clsxm(
                    'inline-flex w-full items-center justify-center gap-x-5 rounded-md  py-1.5 text-center font-medium text-black hover:bg-cred/25',
                    link.segment === segment &&
                      'bg-cred/50 text-cwhite hover:bg-cred/50'
                  )}
                >
                  {link.logo} {link.label}
                </li>
              </Link>
            ))}
          </ul>
          <button
            className='inline-flex w-full items-center justify-center gap-x-5 rounded-md  py-1.5 text-center font-medium text-black hover:bg-cred/25'
            onClick={logOutHandler}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
              />
            </svg>
            Logout
          </button>
        </nav>
      </aside>
      {/* Mobile View */}
      <aside className='flex items-center justify-between rounded-full py-3 px-7 sm:hidden'>
        <FullTEDLogo className='mt-5 h-10 w-24' variant='text' />
        <button
          className='p-1 text-cwhite'
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-8 w-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        <Transition appear show={isMobileSidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-20'
            onClose={() => setIsMobileSidebarOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black/50' />
            </Transition.Child>
            <div className='fixed inset-0 overflow-y-auto'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-80 -translate-x-full'
                enterTo='opacity-100 translate-x-0'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-x-0'
                leaveTo='opacity-80 -translate-x-full'
              >
                <Dialog.Panel className='noisy relative flex h-screen w-[85%] flex-col bg-white shadow sm:hidden'>
                  <FullTEDLogo className='mt-8 h-20' />
                  <nav className='mt-10 h-3/4 px-4'>
                    <ul className='flex h-3/4 flex-col gap-y-2'>
                      {dashboardLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          <li
                            className={clsxm(
                              'inline-flex w-full items-center justify-center gap-x-5 rounded-md  py-1.5 text-center font-medium text-black hover:bg-cred/25',
                              link.segment === segment &&
                                'bg-cred/50 text-cwhite hover:bg-cred/50'
                            )}
                          >
                            {link.logo} {link.label}
                          </li>
                        </Link>
                      ))}
                    </ul>
                    <button
                      className='inline-flex w-full items-center justify-center gap-x-5 rounded-md  py-1.5 text-center font-medium text-black hover:bg-cred/25'
                      onClick={logOutHandler}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                        />
                      </svg>
                      Logout
                    </button>
                  </nav>
                  <button
                    className='noisy absolute -right-12 top-3 rounded-full bg-white p-2'
                    onClick={() => setIsMobileSidebarOpen(false)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </aside>
    </>
  );
}
