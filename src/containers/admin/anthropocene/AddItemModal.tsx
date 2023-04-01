'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
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
});

type itemType = z.infer<typeof itemSchema>;

const itemInitialValue: itemType = {
  type: '',
  src: '',
  thumbnail: '',
  caption: '',
};

function getThumbnailLink(url: string): string | null {
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/[-\w]{25,}/);
    if (fileId) {
      const directLink = `https://drive.google.com/uc?export=view&id=${fileId[0]}`;
      return directLink;
    } else {
      return null;
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
      return null;
    }
  } else {
    return null;
  }
}

export default function AddItemModal() {
  const methods = useForm<itemType>({
    defaultValues: itemInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(itemSchema),
  });
  const { handleSubmit, reset, watch } = methods;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (data: itemType) => {
    setIsLoading(true);
    if (
      data.src?.includes('youtube.com') ||
      data.src?.includes('youtu.be') ||
      data.src?.includes('drive.google.com')
    ) {
      const thumbnailLink = getThumbnailLink(data.src);
      if (thumbnailLink) {
        data.thumbnail = thumbnailLink;
      }
    }
    const createItem = async () => {
      try {
        const res = await fetch('/api/anthropocene', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          return Promise.reject('Something went wrong');
        }
      } catch (error) {
        return Promise.reject(error);
      }
    };
    const createItemPromise = createItem();
    toast
      .promise(createItemPromise, {
        loading: 'Loading..',
        success: 'Item added successfully',
        error: (e) => `Error: ${JSON.stringify(e)}`,
      })
      .then(() => {
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
      <Button
        onClick={() => {
          setIsOpen(true);
          reset();
        }}
      >
        Add Item
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className='text-center'>Add Item</h2>
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
            >
              <option value='photo'>Photo</option>
              <option value='video'>Video</option>
              <option value='caption'>Caption</option>
            </SelectInput>
            {(watch('type') === 'video' || watch('type') === 'photo') && (
              <Input
                id='src'
                label={`Link to ${watch('type')}`}
                topHelperText={
                  <div className='text-gray-600'>
                    make sure the {watch('type')} link is public
                  </div>
                }
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-300 focus:ring-red-300'
                labelClassName='block text-sm font-medium text-gray-900'
              />
            )}
            <TextAreaInput
              id='caption'
              label='Caption'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-300 focus:ring-red-300'
              labelClassName='block mb-2 text-sm font-medium text-gray-900'
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
                Add Item
              </Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
