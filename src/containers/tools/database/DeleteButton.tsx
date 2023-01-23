'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import { deleteShortUrl } from '@/utils/short-url';

function DeleteModal({
  setIsOpen,
  isOpen,
  id,
  shortUrl,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  id: string;
  shortUrl: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const deleteUrl = async () => {
    setIsOpen(true);
    setIsLoading(true);
    const deleteShortUrlPromise = deleteShortUrl(id);
    toast
      .promise(deleteShortUrlPromise, {
        loading: 'Loading..',
        success: 'Short link deleted successfully',
        error: (e) => e.message,
      })
      .then(() => {
        router.refresh();
      })
      .catch((e) => e)
      .finally(() => {
        setIsOpen(false);
        setIsLoading(false);
      });
  };

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Modal.Title>Delete Short Url</Modal.Title>
      <Modal.Description className='text-lg'>
        Are you sure you want to delete short url tedxits.org/links/{shortUrl}
      </Modal.Description>
      <div className='mt-4 flex justify-end gap-x-2'>
        <Button
          onClick={() => setIsOpen(false)}
          disabled={isLoading}
          variant='primary'
          className='bg-cgreen hover:bg-cgreen'
        >
          Cancel
        </Button>
        <Button onClick={deleteUrl} disabled={isLoading} variant='primary'>
          Delete
        </Button>
      </div>
    </Modal>
  );
}

export default function DeleteButton({
  id,
  shortUrl,
}: {
  id: string;
  shortUrl: string;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <>
      <DeleteModal
        id={id}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        shortUrl={shortUrl}
      />
      <button
        onClick={() => setIsOpen(true)}
        className='transition duration-300 hover:-translate-y-1'
      >
        <MdDelete className='h-5 w-5 text-cred' />
      </button>
    </>
  );
}
