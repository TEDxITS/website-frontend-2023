import Image from 'next/image';

import UnstyledLink from '@/components/link/UnstyledLink';

import clsxm from '@/utils/clsxm';

import BlackTedLogo from '~/images/logo/tedxits-black.png';
import MonochromeTedLogo from '~/images/logo/tedxits-monochrome.png';
import MiniTedLogo from '~/images/logo/tedxits-text.svg';
import WhiteTedLogo from '~/images/logo/tedxits-white.png';

const logoVariant = ['black', 'white', 'text', 'monochrome'] as const;
type TedLogoProps = {
  className?: string;
  variant?: (typeof logoVariant)[number];
  href?: string;
};

export default function FullTEDLogo({
  className,
  variant = 'black',
  href = '/',
}: TedLogoProps) {
  if (variant === 'text')
    return (
      <UnstyledLink href={href}>
        <MiniTedLogo className={clsxm('h-10 w-10', className)} />;
      </UnstyledLink>
    );

  return (
    <UnstyledLink href={href}>
      <figure className={clsxm('relative h-full w-full', className)}>
        <Image
          src={
            variant === 'black'
              ? BlackTedLogo
              : variant === 'white'
              ? WhiteTedLogo
              : MonochromeTedLogo
          }
          alt='TEDxITS 2023'
          className='absolute'
          fill
          style={{ objectFit: 'contain' }}
          placeholder='blur'
        />
      </figure>
    </UnstyledLink>
  );
}
