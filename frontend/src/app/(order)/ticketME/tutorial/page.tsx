/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';

import UnderlineLink from '@/components/link/UnderlineLink';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Ticket Purchase Tutorial',
  '',
  '/ticketME/tutorial'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function TutorialPage() {
  return (
    <>
      <section className='layout z-20 overflow-hidden pt-4 pb-24  lg:pl-16'>
        <div>
          <h1 className='my-5 inline rounded-full bg-gradient-to-r from-cblue to-cred py-2 px-6 text-lg font-medium italic text-cwhite lg:text-3xl'>
            TEDxITS Ticket Purchase Tutorial
          </h1>
        </div>

        <div className='flex flex-col-reverse items-center justify-center lg:flex-row'>
          <ol className='mt-6 list-disc'>
            <li className='mb-4 flex list-decimal flex-col text-base font-semibold text-cwhite lg:text-lg'>
              1. Create an account on our website and log in on
              <small className='text-sm font-light lg:text-base'>
                <UnderlineLink
                  href='https://tedxits.org/auth/login'
                  target='_blank'
                >
                  tedxits.org/auth/login
                </UnderlineLink>
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-base font-semibold text-cwhite lg:text-lg'>
              2. Open our ticket dashboard page from our website
              <small className='text-sm font-light lg:text-base'>
                <UnderlineLink
                  href='https://tedxits.org/dashboard'
                  target='_blank'
                >
                  tedxits.org/dashboard
                </UnderlineLink>
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-base font-semibold text-cwhite lg:text-lg'>
              3. Choose your desired ticket!
              <small className='text-sm font-light lg:text-base'>
                Be aware that each ticket type is available at certain period
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-base font-semibold text-cwhite lg:text-lg'>
              4. Fill out your personal data
              <small className='text-sm font-light lg:text-base'>
                Make sure the data you filled are valid
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-base font-semibold text-cwhite lg:text-lg'>
              5. Choose your seat
              <small className='text-sm font-light lg:text-base'>
                Only normal tickets are available for seat selection feature
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-base font-semibold text-cwhite lg:text-lg'>
              6. Choose your payment method
              <small className='text-sm font-light lg:text-base'>
                Make sure to double check your order details before making
                payment
              </small>
            </li>
            <li className='inline-block list-decimal text-base font-semibold text-cwhite lg:text-lg '>
              <span className='rounded-full bg-gradient-to-r from-cblue to-cred py-2 px-6'>
                {' '}
                7. You're set to go!{' '}
              </span>
            </li>
            <br />
            <p className='translate-y-4 text-sm font-light text-white lg:text-base'>
              Your transaction is a success! <br /> Please wait as our Ticketing
              Committee will confirm your payment through the website
            </p>
          </ol>

          <div className='mt-12 pr-12 lg:mt-0'>
            <a href='https://tedxits.org/dashboard'>
              <img
                src='/images/tickets/phone-bg.png'
                className='translate-x-32 transition duration-300 hover:scale-105'
                alt='phone-bg'
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
