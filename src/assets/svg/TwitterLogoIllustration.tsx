'use client';
import * as React from 'react';

import clsxm from '@/utils/clsxm';

import { LogoType } from '@/types/components';
export default function TwitterLogoIllustration({
  pathClassName,
  ...rest
}: LogoType) {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  return (
    <svg
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 31.91 31.99'
      {...rest}
    >
      <path
        fill='#efedea'
        className={clsxm(pathClassName, {
          'fill-cred': isHover,
        })}
        d='M623.72 513.46a16 16 0 1016 16 16 16 0 00-16-16zm7 12.38v.47a10.34 10.34 0 01-15.85 8.69 8.14 8.14 0 00.87.05 7.33 7.33 0 004.51-1.56 3.66 3.66 0 01-3.4-2.53 3.93 3.93 0 00.69.06 3.42 3.42 0 001-.13 3.63 3.63 0 01-2.92-3.57 3.66 3.66 0 001.65.45 3.65 3.65 0 01-1.13-4.86 10.35 10.35 0 007.49 3.81 3.86 3.86 0 01-.09-.84 3.63 3.63 0 016.28-2.49 7.1 7.1 0 002.31-.88 3.64 3.64 0 01-1.6 2 7 7 0 002.09-.57 7.43 7.43 0 01-1.86 1.9z'
        transform='translate(-607.77 -513.46)'
      ></path>
    </svg>
  );
}
