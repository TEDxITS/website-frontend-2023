import type { Metadata } from 'next';
import Image from 'next/image';

import { generateTemplateMetadata } from '@/utils/metadata';

import bottomDecor from '~/images/ticketing/benefits/bottom-decoration.png';
import bottomLeftBg from '~/images/ticketing/benefits/bottom-left.png';
import bottomLeftIcon from '~/images/ticketing/benefits/bottom-left-icon.png';
import bottomRightBg from '~/images/ticketing/benefits/bottom-right.png';
import bottomRightIcon from '~/images/ticketing/benefits/bottom-right-icon.png';
import topLeftBg from '~/images/ticketing/benefits/top-left.png';
import topleftDecor from '~/images/ticketing/benefits/top-left-decoration.png';
import topLeftIcon from '~/images/ticketing/benefits/top-left-icon.png';
import toprightBg from '~/images/ticketing/benefits/top-right.png';
import toprightDecor from '~/images/ticketing/benefits/top-right-decoration.png';
import toprightIcon from '~/images/ticketing/benefits/top-right-icon.png';

const metadataObject = generateTemplateMetadata(
  'Ticket Benefit',
  '',
  '/ticket/benefit'
);
export const metadata: Metadata = {
  ...metadataObject,
};

const benefitsData = [
  {
    imgBg: topLeftBg,
    imgIcon: topLeftIcon,
    desc: 'MEANINGFUL EXPERIENCE WITH OUTSTANDING SPEAKERS AND MEMORABLE CONVERSATION',
  },

  {
    imgBg: toprightBg,
    imgIcon: toprightIcon,
    desc: 'ENGAGING AND UNFORGETTABLE INTERACTIVE EXPERIENCE',
  },

  {
    imgBg: bottomLeftBg,
    imgIcon: bottomLeftIcon,
    desc: 'VISUALLY STUNNING AND EMPATHETIC SERVICE',
  },

  {
    imgBg: bottomRightBg,
    imgIcon: bottomRightIcon,
    desc: 'MYSTERIOUS AND SPECIAL PERFORMANCES',
  },
];

export default function BenefitPage() {
  return (
    <section>
      <div className='relative'>
        <div className='absolute -top-32 left-0 overflow-hidden md:-top-48'>
          <Image src={topleftDecor} alt='decoration' className='w-24 md:w-52' />
        </div>
        <div className='absolute -top-32 right-0 overflow-hidden md:-top-48'>
          <Image
            src={toprightDecor}
            alt='decoration'
            className='w-24 md:w-44'
          />
        </div>
      </div>
      <div className='mx-auto mt-28 flex w-10/12 flex-wrap justify-center gap-4'>
        {benefitsData.map((items, i) => {
          return (
            <div
              key={i}
              className='relative w-full md:w-[450px] lg:w-[400px] xl:w-[450px]'
            >
              <div className='absolute -top-4 z-10 mx-auto w-full'>
                <Image
                  src={items.imgIcon}
                  alt='benefit card icon'
                  className='mx-auto w-24 md:w-36'
                />
                <p className='mx-auto w-9/12 text-center text-base font-semibold text-cwhite md:text-lg'>
                  {items.desc}
                </p>
              </div>
              <Image
                src={items.imgBg}
                alt='benefit card'
                className='w-full md:w-[450px] lg:w-[400px] xl:w-[450px]'
              />
            </div>
          );
        })}
      </div>
      <div>
        <Image src={bottomDecor} alt='benefits card icon' className='w-full' />
      </div>
      <div className='relative'>
        <div className='absolute bottom-0'>
          <Image
            src={bottomDecor}
            alt='benefits card icon'
            className='w-full'
          />
        </div>
      </div>
    </section>
  );
}
