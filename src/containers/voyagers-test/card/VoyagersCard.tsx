import React from 'react';

import AnimatedCardContainer, {
  AnimatedCardContainerProps,
} from '@/containers/voyagers-test/card/AnimatedCardContainer';

import { DEFAULT_CARD_FILEPATH } from '@/constant/voyagers-test';
import { useTestContext } from '@/context/TestContext';
import clsxm from '@/utils/clsxm';

interface VoyagersCardProps {
  className?: string;
  nameClassName?: string;
  dateClassName?: string;
}

interface AnimatedVoyagersCardProps
  extends Omit<AnimatedCardContainerProps, 'children'> {
  cardClassName: string;
}

export default function VoyagersCard({
  className,
  nameClassName,
  dateClassName,
}: VoyagersCardProps) {
  const { getMostAnswer, userName, userPhoto, handleUserPhotoChange } =
    useTestContext();
  const selectedCard = DEFAULT_CARD_FILEPATH.card[getMostAnswer()];

  return (
    <figure
      className={clsxm(
        'relative h-[20rem] w-[30rem] bg-transparent',
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={selectedCard}
        alt='voyagers card'
        className='absolute object-contain shadow'
      />
      <div className='absolute top-[24.5%] left-[10%] z-30 h-[48%] w-[31%]'>
        <input
          type='file'
          id='avatar'
          className='sr-only'
          onChange={handleUserPhotoChange}
        />
        <label
          htmlFor='avatar'
          className='absolute z-40 h-full w-full cursor-pointer'
        ></label>
        {userPhoto && (
          <div className='h-full w-full bg-cwhite p-2 shadow-xl'>
            <div className='relative h-full w-full overflow-hidden'>
              <div
                style={{
                  backgroundImage: `url(${
                    userPhoto || '/images/voyagers-test/avatar.png'
                  })`,
                }}
                className='absolute h-full w-full bg-cover bg-center'
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/images/background/bg-transparent-plastic.png'
                alt='avatar'
                className='absolute h-full w-full object-cover opacity-[40%]'
              />
            </div>
          </div>
        )}
      </div>
      <div className='absolute top-[25%] right-[6%] w-[50%]'>
        <p
          className={clsxm(
            'w-full text-center font-quaker text-lg text-cwhite',
            getMostAnswer() === 'The Survivor' && 'text-cblack',
            nameClassName
          )}
        >
          Dear, {userName}
        </p>
      </div>
      <div className='absolute top-[11.5%] left-[23%] w-[10%]'>
        <p
          className={clsxm(
            'text-xsfont-medium w-full text-center font-primary text-cblack',
            getMostAnswer() === 'The Visioner' && 'text-white',
            dateClassName
          )}
        >
          {new Date().toLocaleDateString('id-ID')}
        </p>
      </div>
    </figure>
  );
}

export function AnimatedVoyagersCard({
  delay = 0,
  rotateFrom = 0,
  rotateTo = 0,
  className,
  cardClassName,
}: AnimatedVoyagersCardProps) {
  return (
    <AnimatedCardContainer
      className={clsxm('h-auto w-auto', className)}
      delay={delay}
      rotateFrom={rotateFrom}
      rotateTo={rotateTo}
      x='350%'
    >
      <VoyagersCard className={clsxm(cardClassName)} />;
    </AnimatedCardContainer>
  );
}
