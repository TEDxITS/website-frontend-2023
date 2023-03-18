import Image from 'next/image';

import clsxm from '@/utils/clsxm';

import bgTexturedPaper from '~/images/background/bg-textured-paper.jpg';
import smileyFace from '~/images/call-for-local-speaker/smiley-face.png';
import titleDecoration from '~/images/call-for-local-speaker/title-decoration.png';

export default function CFLSTitle({ className }: { className?: string }) {
  return (
    <div
      className={clsxm(
        'relative bg-white p-8 shadow-lg shadow-black/50',
        className
      )}
    >
      <Image
        src={bgTexturedPaper}
        alt='textured paper'
        fill
        className='absolute object-cover opacity-60'
        placeholder='blur'
      />
      <Image
        src={titleDecoration}
        alt='decoration'
        placeholder='blur'
        className='absolute right-[10%] h-16 w-16 md:h-auto md:w-auto'
      />
      <div className='relative border border-black py-5 px-8 md:py-10'>
        <h1 className='text-center font-quaker text-3xl sm:text-4xl md:text-[3.3rem] md:leading-tight'>
          ARE <span className='font-baron text-cblue'>YOU</span> THE ONE
          <br />
          WE'RE{' '}
          <div className='inline-flex whitespace-nowrap'>
            LO
            <Image
              src={smileyFace}
              alt='decoration'
              placeholder='blur'
              className='h-10 w-10 md:h-14 md:w-14'
            />
            KING
          </div>{' '}
          FOR?
        </h1>
      </div>
    </div>
  );
}
