'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Input from '@/components/input/Input';
import { Modal } from '@/components/modal/Modal';

import { createShortUrl } from '@/utils/short-url';

const linkShortenerSchema = z.object({
  url: z.string().url({ message: 'The provided link is not a valid URL' }),
  short_url: z
    .string()
    .min(1, { message: 'Short link must contain at least 1 character(s)' }),
});
type LinkShortenerDataType = z.infer<typeof linkShortenerSchema>;
const linkShortenerInitialValue: LinkShortenerDataType = {
  url: '',
  short_url: '',
};

function LinkModal({
  isOpen,
  setIsOpen,
  shortLink,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shortLink: string;
}) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Modal.Title>Your Short Link</Modal.Title>
      <p>{shortLink}</p>
    </Modal>
  );
}

export default function LinkShortenerForm() {
  const methods = useForm<LinkShortenerDataType>({
    defaultValues: linkShortenerInitialValue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(linkShortenerSchema),
  });
  const { handleSubmit } = methods;
  const session = useSession();
  const router = useRouter();
  const [shortLink, setShortLink] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<LinkShortenerDataType> = async (data) => {
    let dataWithUserId;
    setIsLoading(true);
    setShortLink('');
    if (session && session.status === 'authenticated') {
      dataWithUserId = { ...data, userId: session.data.user?.id };
    }
    const createShortUrlPromise = createShortUrl(
      dataWithUserId ? dataWithUserId : data
    );
    toast
      .promise(createShortUrlPromise, {
        loading: 'Loading..',
        success: 'Short link generated successfully',
        error: (e) => e.message,
      })
      .then((res) => {
        setShortLink(res.data.short_url);
        setIsLinkModalOpen(true);
        router.refresh();
      })
      .catch((e) => e)
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {shortLink && (
        <LinkModal
          isOpen={isLinkModalOpen}
          setIsOpen={setIsLinkModalOpen}
          shortLink={shortLink}
        />
      )}
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', width: 300 }}
          noValidate
        >
          <Input
            id='url'
            type='text'
            label={<p className='font-semibold'>Link:</p>}
          />
          <p className='font-semibold'>To:</p>
          <div>
            <p>tedxits.org/links/</p>
            <Input id='short_url' type='text' />
          </div>

          <button type='submit' disabled={isLoading}>
            Shorten
          </button>
        </form>
      </FormProvider>
    </>
  );
}
