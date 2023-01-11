import Image from 'next/image';

import clsxm from '@/utils/clsxm';

import BlackTedLogo from '~/images/logo/tedxits-black.png';
import MiniTedLogo from '~/images/logo/tedxits-text.svg';
import WhiteTedLogo from '~/images/logo/tedxits-white.png';

const logoVariant = ['black', 'white', 'text'] as const;
type TedLogoProps = {
  className?: string;
  variant?: typeof logoVariant[number];
};

export default function FullTEDLogo({
  className,
  variant = 'black',
}: TedLogoProps) {
  if (variant === 'text')
    return <MiniTedLogo className={clsxm('h-10 w-10', className)} />;
  return (
    <div className={clsxm('relative h-full w-full', className)}>
      <Image
        src={variant === 'black' ? BlackTedLogo : WhiteTedLogo}
        alt='TEDxITS 2023'
        className='absolute'
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
