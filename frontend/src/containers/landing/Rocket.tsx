import { AnimationControls, motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import clsxm from '@/utils/clsxm';

import lockedLock from '~/images/landing/locks/locked.png';
import unlockedLock from '~/images/landing/locks/unlock.png';

interface RocketProps {
  rocket: {
    id: number;
    src: StaticImageData;
    alt: string;
    text: string;
    href: string;
    isComingSoon: boolean;
    className?: string;
    title?: React.ReactNode;
    animationSequenceFn: (
      animationControls: AnimationControls
    ) => Promise<void>;
  };
}

const itemAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function ComingSoonLock() {
  return (
    <>
      <Image
        placeholder='blur'
        src={lockedLock}
        alt='lock'
        fill
        className='absolute object-contain transition duration-300 hover:-translate-y-2 group-hover:hidden'
      />
      <Image
        placeholder='blur'
        src={unlockedLock}
        alt='lock'
        fill
        className='absolute hidden object-contain transition duration-300 hover:-translate-y-2 group-hover:block'
      />
    </>
  );
}

export default function Rocket({ rocket }: RocketProps) {
  const animationControls = useAnimation();
  const router = useRouter();

  const handleAnimation = () => {
    rocket
      .animationSequenceFn(animationControls)
      .then(() => router.push(rocket.href));
  };

  return rocket.isComingSoon ? (
    <motion.div
      key={rocket.id}
      variants={itemAnimation}
      className='group relative flex items-end justify-center border-4 border-dashed border-cblack'
    >
      <Image
        placeholder='blur'
        src={rocket.src}
        alt={rocket.alt}
        fill
        className='absolute object-contain transition duration-300 group-hover:-translate-y-2'
      />
      <ComingSoonLock />
      <p className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '>
        {rocket.text}
      </p>
    </motion.div>
  ) : (
    <motion.div
      key={rocket.id}
      variants={itemAnimation}
      onClick={handleAnimation}
      className='group relative flex h-full w-full cursor-pointer items-end justify-center border-4 border-dashed border-cblack'
    >
      <motion.div
        animate={animationControls}
        className={clsxm(
          'relative flex h-full w-full items-end justify-center',
          rocket.className
        )}
      >
        <Image
          placeholder='blur'
          src={rocket.src}
          alt={rocket.alt}
          fill
          className='absolute z-50 object-contain transition duration-300 hover:-translate-y-2'
        />
      </motion.div>
      <p className='absolute -translate-y-4 text-center text-center font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '>
        {rocket.text}
      </p>
      {rocket.title}
    </motion.div>
  );
}
