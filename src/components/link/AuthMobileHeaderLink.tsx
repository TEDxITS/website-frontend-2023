import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';

import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';
import clsxm from '@/utils/clsxm';

export default function AuthMobileHeaderLink({ email }: { email: string }) {
  const { logOut, user } = useFirebaseAuthContext();
  return (
    <li>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex w-full justify-center font-primary text-lg'>
              <span>{email}</span>
              <HiChevronDown
                className={`${open ? '' : 'text-opacity-70'}
                  text-primary-500 my-auto ml-2 h-5 w-5 content-center transition duration-150  ease-in-out group-hover:text-opacity-80`}
                aria-hidden='true'
              />
            </Disclosure.Button>
            <Disclosure.Panel className={clsxm('mx-5 flex flex-col gap-5')}>
              {user.role === 'admin' && (
                <Link
                  href='/admin'
                  className='text-center font-primary text-lg'
                >
                  Dashboard
                </Link>
              )}
              <button
                className='text-center font-primary text-lg'
                onClick={logOut}
              >
                Logout
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </li>
  );
}
