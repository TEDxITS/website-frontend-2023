import { Personality } from '@/context/TestContext';
import clsxm from '@/utils/clsxm';

//import manAvatar from '~/images/voyagers-test/man-avatar.png';
import theOpportunistCard from '~/images/voyagers-test/the-opportunist-card.png';
import theSurvivorCard from '~/images/voyagers-test/the-survivor-card.png';
import theVisionerCard from '~/images/voyagers-test/the-visioner-card.png';

interface SmallVoyagersCardProps {
  personalityType: Personality;
  className?: string;
  nameClassName?: string;
  dateClassName?: string;
}

export default function SmallVoyagersCard({
  personalityType,
  className,
  nameClassName,
  dateClassName,
}: SmallVoyagersCardProps) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const card =
    personalityType === 'The Opportunist'
      ? theOpportunistCard
      : personalityType === 'The Survivor'
      ? theSurvivorCard
      : theVisionerCard;
  return (
    <figure
      className={clsxm(
        'relative h-[20rem] w-[30rem] bg-transparent',
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/images/voyagers-test/the-opportunist-card.png'
        alt='voyagers card'
        className='absolute object-contain shadow'
      />
      <div className='absolute top-[24.5%] left-[10%] h-[48%] w-[31%] bg-cwhite p-3'>
        <div className='relative h-full w-full border-black bg-white shadow'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/images/voyagers-test/man-avatar.png'
            alt='avatar'
            className='absolute object-contain'
          />
        </div>
      </div>
      <div className='absolute top-[25%] right-[6%] w-[50%]'>
        <p
          className={clsxm(
            'w-full text-center font-quaker text-lg text-cwhite',
            personalityType === 'The Survivor' && 'text-cblack',
            nameClassName
          )}
        >
          Dear, Dhana
        </p>
      </div>
      <div className='absolute top-[11.5%] left-[23%] w-[10%]'>
        <p
          className={clsxm(
            'text-xsfont-medium w-full text-center font-primary text-cblack',
            personalityType === 'The Visioner' && 'text-white',
            dateClassName
          )}
        >
          {new Date().toLocaleDateString('id-ID')}
        </p>
      </div>
    </figure>
  );
}
