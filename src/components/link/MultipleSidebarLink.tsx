import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

import clsxm from '@/utils/clsxm';

export default function MultipleSidebarLink() {
  return (
    <li>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex w-full items-center rounded-md hover:bg-cred/25'>
              <div className='inline-flex w-full items-center py-1.5 pl-8 text-center font-medium text-inherit'>
                <div className='inline-flex items-center gap-x-5'>
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
                      d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
                    />
                  </svg>
                  Tools
                </div>
              </div>
              <div className='flex w-1/6 items-center text-cred'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={clsxm(
                    'h-4 w-4 transition-transform',
                    open && 'rotate-180'
                  )}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel>
              <Link
                href='/tools'
                className='mt-1 flex rounded-md py-1.5 pl-8 text-gray-700 hover:bg-cred/25'
              >
                <p>Link Shortener</p>
              </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </li>
  );
}
