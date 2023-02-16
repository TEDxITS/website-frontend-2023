import html2canvas from 'html2canvas';
import React from 'react';

import Button from '@/components/button/Button';
import VoyagersCardCanvas from '@/containers/voyagers-test/card/VoyagersCardCanvas';

// import longCard from '~/images/voyagers-test/the-opportunist-long-card.png';

export default function DownloadPhotolessVoyagersCard() {
  const printRef = React.useRef<HTMLDivElement | null>(null);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (!element) return;
    const canvas = await html2canvas(element, {
      windowWidth: 800,
    });

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <>
      <Button className='w-full sm:w-auto' onClick={handleDownloadImage}>
        <p className='w-full px-5 text-center text-lg'>Download</p>
      </Button>
      <VoyagersCardCanvas
        cardType='story'
        ref={printRef}
        contentClassName='h-full w-full'
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/voyagers-test/the-opportunist-long-card.png'
          alt='long-card'
        />
        {/* <Image src={longCard} alt='long-card' /> */}
      </VoyagersCardCanvas>
    </>
  );
}
