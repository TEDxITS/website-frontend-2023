'use client';
import Image from 'next/image';
import React from 'react';
import { MdContentCopy } from 'react-icons/md';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';
import LinkShortenerForm from '@/containers/tools/LinkShortenerForm';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';
import copyToClipboard from '@/utils/copy';

import modalBg from '~/images/links/modal.png';

function LinkModal({
  isOpen,
  setIsOpen,
  shortLink,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shortLink: string;
}) {
  const fullShortLink = window.location.origin + '/links/' + shortLink;
  const shortLinkWithoutHttp =
    process.env.NODE_ENV === 'development'
      ? fullShortLink.split('://')[1]
      : fullShortLink.split('www.')[1];
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      customDialog={<Image src={modalBg} alt='Modal' placeholder='blur' />}
    >
      <div className='absolute flex h-full w-full flex-col items-center space-y-2 p-8 sm:space-y-4 sm:p-14'>
        <Modal.Title>
          <FullTEDLogo className='h-20 w-32 sm:h-36 sm:w-60' variant='white' />
        </Modal.Title>
        <Modal.Description className='text-center text-xs font-medium text-cwhite sm:text-sm'>
          Succesfully created shortened link from your URL
        </Modal.Description>
        <div className='flex w-full'>
          <div className='w-full overflow-auto rounded-md rounded-r-none bg-black p-3 pl-4'>
            <div className='mx-auto w-fit pl-10'>
              <p className='typewriter text-center font-baron text-green-300'>
                {shortLinkWithoutHttp || fullShortLink}
              </p>
            </div>
          </div>
          <div className='flex items-center rounded-md rounded-l-none bg-black'>
            <Button
              variant='unstyled'
              onClick={() => copyToClipboard(fullShortLink, 'Link')}
            >
              <MdContentCopy className='h-5 w-5 text-green-200' />
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function LinkShortenerContainer() {
  const [shortLink, setShortLink] = React.useState<string>('');
  const [isLinkModalOpen, setIsLinkModalOpen] = React.useState<boolean>(false);

  return (
    <>
      {shortLink && (
        <LinkModal
          isOpen={isLinkModalOpen}
          setIsOpen={setIsLinkModalOpen}
          shortLink={shortLink}
        />
      )}
      <div className='absolute z-20 h-full w-full'>
        <div className='mb-20 flex items-center justify-end px-4 sm:mb-0 sm:justify-start sm:py-16 sm:px-32'>
          <FullTEDLogo variant='white' className='h-20 w-20 sm:h-32 sm:w-32' />
        </div>
        <section className='flex h-full w-full flex-col items-start gap-y-20 px-5 sm:flex-row sm:justify-between sm:gap-y-0 sm:px-32'>
          <div className='space-y-8 sm:w-2/5'>
            <h1 className='font-baron text-cwhite'>
              Link Shortener For <br />
              <span className='text-4xl sm:text-5xl'>THE VOYAGERS!</span>
            </h1>
            <p className='font-medium text-cwhite sm:text-lg'>
              Feel free to use this URL link shortener tool to organize links
              related to our TEDxITS 2023
            </p>
          </div>
          <LinkShortenerForm
            setIsLinkModalOpen={setIsLinkModalOpen}
            setShortLink={setShortLink}
          />
        </section>
      </div>
    </>
  );
}
