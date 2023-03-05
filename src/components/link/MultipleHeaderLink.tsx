import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import { LinkType } from '@/data/links';

import clsxm from '@/utils/clsxm';

export default function MultipleHeaderLink({
  linksData,
  title,
}: {
  linksData: LinkType[];
  title: string;
}) {
  return (
    <li className='relative'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={clsxm(
                'animated-underline custom-link border-dark group inline-flex items-center border-b border-dotted px-1 text-base font-light text-cwhite'
              )}
            >
              <span className='font-primary font-medium group-hover:text-cred'>
                {title}
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
              <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-72 max-w-sm -translate-x-1/2 transform px-4 drop-shadow-xl sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-b-lg shadow-lg'>
                  <div className='grid border-[10px] border-cgray bg-black shadow-inner'>
                    {linksData.map((item, index) => (
                      <Link
                        href={item.href}
                        className={clsxm(
                          'py-0.5 font-baron text-green-300 hover:bg-green-300 hover:text-black',
                          {
                            'space-y-1 border-b border-cgray':
                              index !== linksData.length - 1,
                          }
                        )}
                        key={index}
                      >
                        <span className='ml-2 pb-1'>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                  <div className='h-4 rounded-b-lg bg-cgray'></div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </li>
  );
}
