'use client';
import * as React from 'react';

import clsxm from '@/utils/clsxm';

import { LogoType } from '@/types/components';

export default function LinkedinLogoIllustration({
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
        d='M647.54 513.46a16 16 0 1016 16 16 16 0 00-16-16zm-4.11 22.75h-3.12v-10.07h3.12zm-1.59-11.3a1.57 1.57 0 111.69-1.57 1.56 1.56 0 01-1.69 1.57zm13 11.3h-3.14v-5.58c0-1.3-.45-2.18-1.58-2.18a1.71 1.71 0 00-1.6 1.17 2.37 2.37 0 00-.1.79v5.8h-3.13v-6.86c0-1.25 0-2.3-.08-3.21h2.71l.15 1.4h.06a3.59 3.59 0 013.1-1.62c2 0 3.59 1.38 3.59 4.34z'
        transform='translate(-631.59 -513.46)'
      ></path>
    </svg>
  );
}
