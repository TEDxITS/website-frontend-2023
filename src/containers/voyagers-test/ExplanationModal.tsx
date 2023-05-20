import Image from 'next/image';
import React from 'react';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import { useTestContext } from '@/context/TestContext';

import theOpportunist from '~/images/voyagers-test/the-opportunist.png';
import theSurvivor from '~/images/voyagers-test/the-survivor.png';
import theVisioner from '~/images/voyagers-test/the-visioner.png';

const characterVariant = {
  'The Survivor': theSurvivor,
  'The Opportunist': theOpportunist,
  'The Visioner': theVisioner,
};

const characterExplanation = {
  'The Survivor': (
    <>
      <p className='mb-5 text-center'>
        The Survivor has come a long way from the pain and darkness that once
        consumed them. Despite their challenges, they found the strength to heal
        and move forward. They are a shining example of resilience and
        perseverance, a true testament to the human spirit.{' '}
      </p>
      <p className='mb-5 text-center'>
        <span className='font-bold'>To The Survivor:</span> You are doing great
        and should be proud of yourself for all you have overcome. Keep shining
        your light and inspiring others to find the strength to heal.
      </p>
    </>
  ),
  'The Opportunist': (
    <>
      <p className='mb-5 text-center'>
        The Opportunist is a resilient character who welcomes change with open
        arms. Their optimistic outlook on life allows them to see opportunities
        where others see challenges. They are a true go-getter who constantly
        seeks ways to contribute to the progress of their community.{' '}
      </p>
      <p className='mb-5 text-center'>
        <span className='font-bold'>To The Opportunist:</span> You are truly
        inspiring. Your ability to navigate change with grace and optimism is a
        testament to your resilience and strength. Keep pushing forward and know
        that your contributions to the community are invaluable.
      </p>
    </>
  ),
  'The Visioner': (
    <>
      <p className='mb-5 text-center'>
        The Visioner is a remarkable individual who possesses a unique ability
        to see beyond the present and envision a brighter future. While many
        people are afraid of the future and envision a dystopian world, they
        believe that there is still hope and that we have the power to shape our
        destiny. Their unwavering optimism and unrelenting drive to create a
        better world are truly inspirational.{' '}
      </p>
      <p className='mb-5 text-center'>
        <span className='font-bold'>To The Visioner:</span> Keep up the great
        work, the visioner! Your belief in a better future is contagious and
        will undoubtedly inspire others to follow in your footsteps.
      </p>
    </>
  ),
};

export default function ExplanationModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { getMostAnswer } = useTestContext();
  return (
    <>
      <Button className='px-10 text-center' onClick={() => setIsOpen(true)}>
        <p className='w-full text-center'>See Explanation</p>
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className='relative mb-5 h-80 w-full'>
          <Image
            src={characterVariant[getMostAnswer()]}
            alt='character'
            className='absolute object-contain'
            fill
          />
        </div>
        {characterExplanation[getMostAnswer()]}
        <div className='flex justify-center'>
          <Button variant='primary' onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
