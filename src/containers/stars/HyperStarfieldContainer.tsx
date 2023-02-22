'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import redRocket from '~/images/landing/rockets/red1.png';

function Star() {
  const [x, setX] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [h, setH] = React.useState(0);

  React.useEffect(() => {
    setX(Math.floor(Math.random() * window.innerWidth));
    setDuration(Math.random() * 2);
    setH(Math.random() * 100);
  }, []);

  return (
    <div
      className='star'
      style={{
        left: `${x}px`,
        width: '1px',
        height: `${50 + h}px`,
        animationDuration: `${duration}s`,
      }}
    ></div>
  );
}

export default function HyperStarfieldContainer({
  starCount,
  isLoading,
}: {
  starCount: number;
  isLoading: boolean;
}) {
  const [stars, setStars] = React.useState<React.ReactElement[]>([]);

  React.useEffect(() => {
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push(<Star key={i} />);
    }
    setStars(newStars);
  }, [starCount]);

  return (
    <div className='scene'>
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        <h1 className='font-baron text-cwhite'>Give Us A Moment...</h1>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: isLoading ? '10%' : '-100%' }}
          className='rocket'
        >
          <Image
            src={redRocket}
            alt='rocket'
            className='ml-1 h-32 -rotate-[45deg] object-contain xl:ml-2'
            placeholder='blur'
          />
        </motion.div>
      </div>
      {stars}
    </div>
  );
}
