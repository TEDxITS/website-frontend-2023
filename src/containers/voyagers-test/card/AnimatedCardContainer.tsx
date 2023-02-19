import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/utils/clsxm';

export interface AnimatedCardContainerProps {
  children: React.ReactNode;
  delay?: number;
  rotateFrom?: number;
  rotateTo?: number;
  x?: string;
  className?: string;
  helperFn?: () => void;
}

export default function AnimatedCardContainer({
  children,
  delay = 0,
  rotateFrom = 0,
  rotateTo = 0,
  x = '100%',
  className,
  helperFn = () => undefined,
}: AnimatedCardContainerProps) {
  const [isTransitionOver, setIsTransitionOver] = React.useState(false);
  return (
    <motion.div
      className={clsxm('absolute h-full w-full', className)}
      initial={{ x: x, rotate: rotateFrom }}
      animate={
        isTransitionOver
          ? { x: 0, rotate: rotateTo }
          : { x: 0, rotate: rotateFrom }
      }
      transition={{
        type: 'spring',
        damping: 14,
        mass: 0.75,
        stiffness: 100,
        delay: delay,
      }}
      onAnimationComplete={() => {
        setIsTransitionOver(true);
        helperFn();
      }}
    >
      {children}
    </motion.div>
  );
}
