import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import * as React from 'react';
import { HiChevronDown } from 'react-icons/hi';

import { LinkType } from '@/data/links';

import clsxm from '@/utils/clsxm';

type MultipleMobileLinksProps = {
  linksData: LinkType[];
  title: string;
  titleClassName?: string;
  linkClassName?: string;
  linkWrapperClassName?: string;
  animated?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;
export default function MultipleMobileHeaderLinks({
  linksData,
  title,

  linkClassName,
  linkWrapperClassName,
}: MultipleMobileLinksProps) {
  return (
    <li>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex w-full justify-center font-primary text-2xl'>
              <span>{title}</span>
              <HiChevronDown
                className={`${open ? '' : 'text-opacity-70'}
                  text-primary-500 my-auto ml-2 h-5 w-5 content-center transition duration-150  ease-in-out group-hover:text-opacity-80`}
                aria-hidden='true'
              />
            </Disclosure.Button>
            <Disclosure.Panel
              className={clsxm(
                'mx-5 flex flex-col gap-5',
                linkWrapperClassName
              )}
            >
              {linksData.map((item, index) => (
                <Link
                  href={item.href}
                  className={clsxm(
                    'text-center font-primary text-lg',

                    linkClassName,
                    'animate-none hover:border-transparent'
                  )}
                  key={index}
                >
                  <span className='ml-2 pb-2'>{item.label}</span>
                </Link>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </li>
  );
}
