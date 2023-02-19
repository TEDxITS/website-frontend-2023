import html2canvas from 'html2canvas';
import React from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/button/Button';
import VoyagersCardCanvas from '@/containers/voyagers-test/card/VoyagersCardCanvas';

import { DEFAULT_CARD_FILEPATH } from '@/constant/voyagers-test';
import { useTestContext } from '@/context/TestContext';

export default function DownloadPhotolessVoyagersCard() {
  const { getMostAnswer } = useTestContext();
  const selectedCard = DEFAULT_CARD_FILEPATH.photoless_card[getMostAnswer()];
  const printRef = React.useRef<HTMLDivElement | null>(null);

  const handleDownloadImage = async () => {
    toast.loading('Downloading...');
    const element = printRef.current;
    if (!element) return;
    try {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'voyagers-card';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.dismiss();
      } else {
        window.open(data);
        toast.dismiss();
      }
    } catch (error) {
      toast.dismiss();
      toast.error(`error ${error}`);
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
        <img src={selectedCard} alt='long-card' />
      </VoyagersCardCanvas>
    </>
  );
}
