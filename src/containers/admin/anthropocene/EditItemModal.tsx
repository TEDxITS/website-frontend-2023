'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Anthropocene } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdEdit } from 'react-icons/md';
import { z } from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import TextAreaInput from '@/components/input/TextAreaInput';
import { Modal } from '@/components/modal/Modal';

const itemSchema = z.object({
  type: z.string().min(1, { message: 'The type cannot be empty' }),
  src: z.string().optional(),
  thumbnail: z.string().optional(),
  caption: z.string().min(1, { message: 'The caption cannot be empty' }),
  article_src: z.string().optional(),
});

type itemType = z.infer<typeof itemSchema>;

function getThumbnailLink(url: string): string {
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/[-\w]{25,}/);
    if (fileId) {
      const directLink = `https://drive.google.com/uc?export=view&id=${fileId[0]}`;
      return directLink;
    } else {
      return '';
    }
  } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoIdMatch = url.match(
      /(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11}).*/
    );
    if (videoIdMatch) {
      const videoId = videoIdMatch[1];
      const thumbnailLink = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      return thumbnailLink;
    } else {
      return '';
    }
  } else {
    return '';
  }
}

export default function EditItemModal({
  initialValue,
}: {
  initialValue: Anthropocene;
}) {
  const router = useRouter();
  const methods = useForm<itemType>({
    mode: 'onTouched',
    resolver: zodResolver(itemSchema),
  });
  const { handleSubmit, reset } = methods;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (data: itemType) => {
    setIsLoading(true);
    const updatedData = {
      ...data,
      id: initialValue.id,
    };
    if (
      updatedData.src?.includes('youtube.com') ||
      updatedData.src?.includes('youtu.be') ||
      updatedData.src?.includes('drive.google.com')
    ) {
      const thumbnailLink = getThumbnailLink(updatedData.src);
      if (thumbnailLink) {
        updatedData.thumbnail = thumbnailLink;
      }
    } else {
      updatedData.thumbnail = updatedData.src;
    }

    const editItem = async () => {
      try {
        const res = await fetch('/api/anthropocene', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
        if (!res.ok) {
          return Promise.reject('Something went wrong');
        }
      } catch (error) {
        return Promise.reject(error);
      }
    };
    const editItemPromise = editItem();
    toast
      .promise(editItemPromise, {
        loading: 'Loading..',
        success: 'Item updated successfully',
        error: (e) => `Error: ${JSON.stringify(e)}`,
      })
      .then(() => {
        router.refresh();
        setIsOpen(false);
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          reset();
        }}
        className='inline-flex gap-x-2 rounded-md bg-cgreen p-2 text-white transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cgreen focus:ring-offset-2 focus:ring-offset-gray-50'
      >
        <MdEdit className='h-5 w-5 text-white' />
        Edit
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className='text-center'>Edit Item</h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='h-full w-full space-y-2'
          >
            <SelectInput
              id='type'
              label='Type'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-300 focus:ring-red-300'
              labelClassName='block mb-2 text-sm font-medium text-gray-900'
              defaultValue={initialValue.type}
            >
              <option value='photo'>Photo</option>
              <option value='video'>Video</option>
              <option value='caption'>Caption</option>
              <option value='article'>Article</option>
            </SelectInput>
            {(initialValue.type === 'video' ||
              initialValue.type === 'photo' ||
              initialValue.type === 'article') && (
              <Input
                id='src'
                label={
                  initialValue.type === 'article'
                    ? 'Article screenshot link'
                    : `Link to ${initialValue.type}`
                }
                topHelperText={
                  <div className='text-gray-600'>
                    make sure the {initialValue.type} link is public
                  </div>
                }
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-300 focus:ring-red-300'
                labelClassName='block text-sm font-medium text-gray-900'
                defaultValue={initialValue.src || ''}
              />
            )}
            {initialValue.type === 'article' && (
              <Input
                id='article_src'
                label='Article link'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-300 focus:ring-red-300'
                labelClassName='block text-sm font-medium text-gray-900'
                defaultValue={initialValue.article_src || ''}
              />
            )}
            <TextAreaInput
              id='caption'
              label='Caption'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-300 focus:ring-red-300'
              labelClassName='block mb-2 text-sm font-medium text-gray-900'
              defaultValue={initialValue.caption}
            />
            <div className='mt-4 flex justify-end gap-x-2'>
              <Button
                type='button'
                variant='primary'
                disabled={isLoading}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                variant='primary'
                disabled={isLoading}
                className='bg-green-600'
              >
                Edit Item
              </Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
