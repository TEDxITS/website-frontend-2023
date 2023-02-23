import React from 'react';

import AnimatedCardContainer, {
  AnimatedCardContainerProps,
} from '@/containers/voyagers-test/card/AnimatedCardContainer';

import { DEFAULT_CARD_FILEPATH } from '@/constant/voyagers-test';
import { Personality, useTestContext } from '@/context/TestContext';
import clsxm from '@/utils/clsxm';

interface VoyagersCardProps {
  personality?: Personality;
  className?: string;
  nameClassName?: string;
  dateClassName?: string;
  nameContainerClassName?: string;
  dateContainerClassName?: string;
}

interface AnimatedVoyagersCardProps
  extends Omit<AnimatedCardContainerProps, 'children'>,
    VoyagersCardProps {
  cardClassName: string;
}

export default function VoyagersCard({
  personality,
  className,
  nameClassName,
  dateClassName,
  nameContainerClassName,
  dateContainerClassName,
}: VoyagersCardProps) {
  const { getMostAnswer, userName, userPhoto, handleUserPhotoChange } =
    useTestContext();
  const selectedCard =
    DEFAULT_CARD_FILEPATH.card[personality || getMostAnswer()];
  const newUsername = 'Dear, ' + userName.replace(/\s/g, '<span> </span>');
  const isNameLong = userName.length > 18;

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
        className='absolute object-contain'
        loading='eager'
      />
      <div className='absolute top-[24.5%] left-[10%] z-30 h-[47%] w-[31%]'>
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
                className='absolute h-full w-full object-cover opacity-[30%]'
              />
            </div>
          </div>
        )}
      </div>
      <div
        className={clsxm(
          'absolute top-[25%] right-[7%] w-[48%]',
          isNameLong && 'top-[22%]',
          nameContainerClassName
        )}
      >
        <p
          style={{
            wordBreak: 'break-word',
            whiteSpace: 'normal',
          }}
          className={clsxm(
            'w-full text-center font-quaker text-lg text-cwhite',
            getMostAnswer() === 'The Survivor' && 'text-cblack',
            nameClassName
          )}
          dangerouslySetInnerHTML={{ __html: newUsername }}
        ></p>
      </div>
      <div
        className={clsxm(
          'absolute top-[12%] left-[23%] w-[10%]',
          dateContainerClassName
        )}
      >
        <p
          className={clsxm(
            'w-full text-center font-primary text-xs font-semibold text-cblack',
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
  ...props
}: AnimatedVoyagersCardProps) {
  return (
    <AnimatedCardContainer
      className={clsxm('h-auto w-auto', className)}
      delay={delay}
      rotateFrom={rotateFrom}
      rotateTo={rotateTo}
      x='350%'
    >
      <VoyagersCard className={cardClassName} {...props} />;
    </AnimatedCardContainer>
  );
}
