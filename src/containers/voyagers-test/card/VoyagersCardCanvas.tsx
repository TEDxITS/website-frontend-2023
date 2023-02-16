'use client';
import React from 'react';

import clsxm from '@/utils/clsxm';

// export default function CobaDownloadGambarPage() {
//   const printRef = React.useRef<HTMLDivElement | null>(null);

//   const handleDownloadImage = async () => {
//     const element = printRef.current;
//     if (!element) return;
//     const canvas = await html2canvas(element);

//     const data = canvas.toDataURL('image/jpg');
//     const link = document.createElement('a');

//     if (typeof link.download === 'string') {
//       link.href = data;
//       link.download = 'image.jpg';

//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       window.open(data);
//     }
//   };
//   return (
//     <>
//       <button onClick={handleDownloadImage}>Download</button>
//       <section className='my-16 overflow-hidden p-4'>
//         <DownloadableVoyagersCard
//           cardType='story'
//           ref={printRef}
//           contentClassName='h-full w-full'
//         >
//           <div className='flex justify-center pt-28'>
//             <Image src={MonochromeTedLogo} alt='TEDxITS 2023' />
//           </div>
//           <div className='relative flex h-[70%] items-center justify-center'>
//             <SmallVoyagersCard
//               personalityType='The Survivor'
//               className='absolute h-[40rem] w-[60rem] rotate-[15deg]'
//               nameClassName='text-3xl'
//               dateClassName='text-xl my-4'
//             />
//             <SmallVoyagersCard
//               personalityType='The Survivor'
//               className='absolute h-[40rem] w-[60rem] -rotate-[15deg]'
//               nameClassName='text-3xl'
//               dateClassName='text-xl my-4'
//             />
//             <SmallVoyagersCard
//               personalityType='The Survivor'
//               className='absolute h-[40rem] w-[60rem]'
//               nameClassName='text-3xl'
//               dateClassName='text-xl my-4'
//             />
//           </div>
//         </DownloadableVoyagersCard>
//         <Image src={longCard} alt='long-card' />
//       </section>
//     </>
//   );
// }

interface DownloadableVoyagersCardProps {
  cardType: 'story' | 'post';
  children?: React.ReactNode;
  contentClassName?: string;
}

// import moonFrontSide from '~/images/background/bg-moon-front.png';

const VoyagersCardCanvas = React.forwardRef<
  HTMLDivElement,
  DownloadableVoyagersCardProps
>(({ cardType, children, contentClassName, ...props }, ref) => {
  return (
    <figure
      className={clsxm(
        'sr-only',
        cardType === 'story'
          ? 'h-[1920px] w-[1080px] bg-stars'
          : 'h-[1080px] w-[1080px] bg-moon'
      )}
      ref={ref}
      {...props}
    >
      <div className='relative h-full w-full'>
        <div className={clsxm('absolute', contentClassName)}>{children}</div>
        {/* {cardType === 'post' && (
          <Image
            src={moonFrontSide}
            alt='moon front side'
            className='absolute'
          />
        )} */}
        {cardType === 'post' && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src='/images/background/bg-moon-front.png'
            alt='coba'
            className='absolute'
          />
        )}
      </div>
    </figure>
  );
});

export default VoyagersCardCanvas;
