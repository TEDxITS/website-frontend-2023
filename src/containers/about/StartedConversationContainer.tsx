import Image from 'next/image';

import crackedGlassBg from '~/images/about/cracked-glass-section.png';

export default function StartedConversationContainer() {
  return (
    <section className='relative z-20 flex justify-center overflow-x-clip bg-black'>
      <Image
        src={crackedGlassBg}
        className='scale-[115%]'
        alt='Background'
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />
      <div className='absolute h-full w-full'>{/* Start Here */}</div>
    </section>
  );
}
