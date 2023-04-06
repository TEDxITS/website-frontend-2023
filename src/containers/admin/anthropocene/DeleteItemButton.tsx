'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

const deleteItem = async (id: string) => {
  const res = await fetch('/api/anthropocene', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  });
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject(await res.json());
};

function DeleteModal({
  setIsOpen,
  isOpen,
  id,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  id: string;
  sourceItem: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const deleteUrl = async () => {
    setIsOpen(true);
    setIsLoading(true);
    const deleteItemPromise = deleteItem(id);
    toast
      .promise(deleteItemPromise, {
        loading: 'Loading..',
        success: 'The item deleted successfully',
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
      <Modal.Title>Delete Item</Modal.Title>
      <Modal.Description className='text-lg'>
        Are you sure you want to delete this item?
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

export default function DeleteItemButton({
  id,
  sourceItem,
}: {
  id: string;
  sourceItem: string;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <>
      <DeleteModal
        id={id}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        sourceItem={sourceItem}
      />
      <button
        onClick={() => setIsOpen(true)}
        className='inline-flex gap-x-2 rounded-md bg-cred p-2 text-white transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cred focus:ring-offset-2 focus:ring-offset-gray-50'
      >
        <MdDelete className='h-5 w-5 text-white' />
        Delete
      </button>
    </>
  );
}
