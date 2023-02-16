'use client'
import * as React from 'react';

import clsxm from '@/utils/clsxm';
import { LogoType } from '@/types/components';

export default function InstagramLogoIllustration({
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
      viewBox='0 0 32.54 32.63'
      {...rest}
    >
      <g
        fill='#efedea'
        className={clsxm(pathClassName, {
          'fill-cred': isHover,
        })}
      >
        <path
          d='M605.88 526.08a4.81 4.81 0 00-.28-1.55 2.72 2.72 0 00-.63-1 2.47 2.47 0 00-1-.63 4.71 4.71 0 00-1.54-.29h-6.74a4.73 4.73 0 00-1.55.29 2.47 2.47 0 00-1 .63 2.57 2.57 0 00-.62 1 4.47 4.47 0 00-.29 1.55v6.76a4.59 4.59 0 00.29 1.55 2.72 2.72 0 001.58 1.58 4.24 4.24 0 001.55.29h6.74A4.22 4.22 0 00604 536a2.57 2.57 0 001-.62 2.72 2.72 0 00.63-1 4.94 4.94 0 00.28-1.55v-3.38c0-2.23.01-2.45-.03-3.37zm-6.78 7.67a4.3 4.3 0 114.28-4.29 4.29 4.29 0 01-4.28 4.29zm4.45-7.75a1 1 0 111-1 1 1 0 01-1 1zm-4.45.67a2.79 2.79 0 102.77 2.79 2.78 2.78 0 00-2.77-2.79z'
          transform='translate(-583.02 -513.14)'
        ></path>
        <path
          d='M599.29 513.14a16.32 16.32 0 1016.27 16.32 16.29 16.29 0 00-16.27-16.32zm8.09 19.77a6 6 0 01-.39 2 4 4 0 01-1 1.49 4.1 4.1 0 01-1.47 1 6 6 0 01-2 .39c-.89 0-1.17.05-3.43.05s-2.55 0-3.44-.05a6 6 0 01-2-.39 4.1 4.1 0 01-1.47-1 4 4 0 01-1-1.49 6 6 0 01-.39-2v-3.45-3.45a6 6 0 01.39-2 3.93 3.93 0 011-1.48 4.1 4.1 0 011.47-1 6 6 0 012-.39h6.87a6 6 0 012 .39 4.1 4.1 0 011.47 1 3.93 3.93 0 011 1.48 6 6 0 01.39 2v3.45c0 2.27.04 2.54 0 3.45z'
          transform='translate(-583.02 -513.14)'
        ></path>
      </g>
    </svg>
  );
}
