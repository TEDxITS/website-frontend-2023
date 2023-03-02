import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import toast from 'react-hot-toast';
import { HiChevronDown } from 'react-icons/hi';

import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';
import clsxm from '@/utils/clsxm';
import { handleFirebaseError } from '@/utils/firebase/shared';

export default function AuthHeaderLink({ email }: { email: string }) {
  const { logOut } = useFirebaseAuthContext();
  const [isLoading, setIsLoading] = React.useState(false);

  const logOutHandler = async () => {
    setIsLoading(true);
    const logOutPromise = logOut();
    toast
      .promise(logOutPromise, {
        loading: 'Loading..',
        success: 'Logged out successfully',
        error: (e) => handleFirebaseError(e),
      })
      .then(() => undefined)
      .catch((e) => e)
      .finally(() => setIsLoading(false));
  };

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
                {email}
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
                  <div className='relative grid border-[10px] border-cgray bg-black shadow-inner'>
                    <button
                      className='py-0.5 font-baron text-green-300 hover:bg-green-300 hover:text-black'
                      onClick={logOutHandler}
                      disabled={isLoading}
                    >
                      Logout
                    </button>
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
