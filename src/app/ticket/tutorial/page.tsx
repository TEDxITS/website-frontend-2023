/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Ticket Purchase Tutorial',
  '',
  '/ticket/tutorial'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function TutorialPage() {
  return (
    <>
      <section className='layout z-20 overflow-hidden pt-4 pb-24'>
        <div>
          <h1 className='my-5 inline rounded-full bg-gradient-to-r from-cblue to-cred py-2 px-6 font-medium italic text-cwhite'>
            TEDxITS Ticket Purchase Tutorial
          </h1>
        </div>

        <div className='flex flex-col items-center justify-center lg:flex-row'>
          <ol className='mt-6 list-disc'>
            <li className='mb-4 flex list-decimal flex-col text-lg font-semibold text-cwhite lg:text-2xl'>
              1. Open our ticket page from our website
              <small className='text-sm font-light lg:text-lg'>
                tedxits.org/ticket
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-lg font-semibold text-cwhite lg:text-2xl'>
              2. Choose your desired ticket!
              <small className='text-sm font-light lg:text-lg'>
                Be aware that each ticket type is available at certain period
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-lg font-semibold text-cwhite lg:text-2xl'>
              3. Fill out your personal data
              <small className='text-sm font-light lg:text-lg'>
                Make sure the data you filled are valid
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-lg font-semibold text-cwhite lg:text-2xl'>
              4. Choose your seat
              <small className='text-sm font-light lg:text-lg'>
                Only tickets are available for seat selection feature
              </small>
            </li>
            <li className='mb-4 flex list-decimal flex-col text-lg font-semibold text-cwhite lg:text-2xl'>
              5. Choose your payment method
              <small className='text-sm font-light lg:text-lg'>
                Make sure to double check your order details before making
                payment
              </small>
            </li>
            <li className='inline-block list-decimal text-lg font-semibold text-cwhite lg:text-2xl '>
              <span className='rounded-full bg-gradient-to-r from-cblue to-cred py-2 px-6'>
                {' '}
                6. You're set to go!{' '}
              </span>
            </li>
            <br />
            <p className='translate-y-4 text-sm font-light text-white lg:text-lg'>
              Your transaction is a success! <br /> Please wait as our Ticketing
              Committee will confirm your payment through WhatsApp
            </p>
          </ol>

          <div>
            <img
              src='/images/tickets/phone-bg.png'
              className='translate-x-32'
              alt='phone-bg'
            />
          </div>
        </div>
        <footer></footer>
      </section>
      <img
        src='/images/tickets/footer-bg.png'
        className='translate-y-4'
        alt='footer-bg'
      />
    </>
  );
}
