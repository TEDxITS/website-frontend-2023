import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { HiChevronDown } from 'react-icons/hi';

import { useAuthStore } from '@/store/useAuthStore';

import clsxm from '@/utils/clsxm';

export default function AuthMobileHeaderLink() {
  const user = useAuthStore((state) => state.user);
  const logOut = useAuthStore((state) => state.logOut);

  const logOutHandler = async () => {
    logOut();
    toast.success('Logged out successfully');
  };

  return (
    <li>
      {user ? (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-center font-primary text-lg'>
                <span>{user?.email}</span>
                <HiChevronDown
                  className={`${open ? '' : 'text-opacity-70'}
                  text-primary-500 my-auto ml-2 h-5 w-5 content-center transition duration-150  ease-in-out group-hover:text-opacity-80`}
                  aria-hidden='true'
                />
              </Disclosure.Button>
              <Disclosure.Panel className={clsxm('mx-5 flex flex-col gap-5')}>
                <Link
                  href='/dashboard'
                  className='text-center font-primary text-lg'
                >
                  Dashboard
                </Link>
                <button
                  className='text-center font-primary text-lg'
                  onClick={logOutHandler}
                >
                  Logout
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ) : (
        <Link href='/auth/login' className='text-2xl'>
          <span className='font-primary text-2xl'>Login</span>
        </Link>
      )}
    </li>
  );
}
