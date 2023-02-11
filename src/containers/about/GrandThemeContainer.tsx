import Image from 'next/image';

import grandThemeBg from '~/images/about/grand-theme-section.png';

export default function GrandThemeContainer() {
  return (
    <div>
      <section className='relative z-20 flex justify-center overflow-x-clip bg-black'>
        <Image
          src={grandThemeBg}
          className='scale-[110%]'
          alt='Background'
          placeholder='blur'
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute h-full w-full'>{/* Start Here */}</div>
      </section>
      <div className='h-16 w-full bg-black'></div>
    </div>
  );
}
