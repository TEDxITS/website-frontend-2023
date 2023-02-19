'use client';
import { motion } from 'framer-motion';
import React from 'react';

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/images/voyagers-test/red-rocket.png'
            alt='rocket'
            className='-rotate-90'
          />
        </motion.div>
      </div>
      {stars}
    </div>
  );
}
