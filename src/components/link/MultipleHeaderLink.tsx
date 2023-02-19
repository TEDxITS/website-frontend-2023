import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import { LinkType } from '@/data/links';

import clsxm from '@/utils/clsxm';

export default function MultipleHeaderLink({
  isDark = false,
  linksData,
  title,
}: {
  isDark?: boolean;
  linksData: LinkType[];
  title: string;
}) {
  return (
    <li>
      <Link href='#' className='/ font-fivo text-lg'>
        <Popover className='relative'>
          {({ open }) => (
            <>
              <Popover.Button
                className={clsxm(
                  'group inline-flex items-center px-1 text-base font-light text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                  {
                    'text-black': isDark,
                  }
                )}
              >
                <span className='font-fivo text-lg'>{title}</span>
                <HiChevronDown
                  className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-primary-500 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden='true'
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-72 max-w-sm -translate-x-1/2 transform px-4 drop-shadow-xl sm:px-0 lg:max-w-3xl'>
                  <div className='g overflow-hidden'>
                    <div className='relative grid gap-4 border-0 bg-[#efedea] bg-bottom bg-no-repeat px-5 pt-5 pb-2'>
                      {linksData.map((item, index) => (
                        <Link
                          href={item.href}
                          className={clsxm(' font-fivo text-lg text-black ', {
                            'space-y-2 divide-y-2 border-b-[3px] border-dashed border-black ':
                              index !== linksData.length - 1,
                          })}
                          key={index}
                        >
                          <span className='ml-2 pb-1'>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className='bg-ticketbottom h-48 w-full bg-no-repeat'></div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Link>
    </li>
  );
}
