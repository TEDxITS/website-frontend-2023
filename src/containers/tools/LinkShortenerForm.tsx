import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';

import { createShortUrl } from '@/utils/short-url';

const linkShortenerSchema = z.object({
  url: z.string().url({ message: 'The provided link is not a valid URL' }),
  short_url: z
    .string()
    .min(1, { message: 'Short link must contain at least 1 character(s)' }),
});
type LinkShortenerDataType = z.infer<typeof linkShortenerSchema>;

type LinkShortenerFormProps = {
  setIsLinkModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShortLink: React.Dispatch<React.SetStateAction<string>>;
};

const linkShortenerInitialValue: LinkShortenerDataType = {
  url: '',
  short_url: '',
};

export default function LinkShortenerForm({
  setIsLinkModalOpen,
  setShortLink,
}: LinkShortenerFormProps) {
  const methods = useForm<LinkShortenerDataType>({
    defaultValues: linkShortenerInitialValue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(linkShortenerSchema),
  });
  const { handleSubmit } = methods;
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<LinkShortenerDataType> = async (data) => {
    let dataWithUserId;
    setIsLoading(true);
    setShortLink('');
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
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full space-y-10 text-cwhite sm:w-1/2'
        noValidate
      >
        <Input
          id='url'
          type='text'
          label={<p className='font-semibold'>Original URL:</p>}
        />
        <div className='flex items-center gap-x-1'>
          <p>tedxits.org/links/</p>
          <Input
            id='short_url'
            label={<p className='sr-only'>Short URL:</p>}
            type='text'
          />
        </div>
        <div className='flex justify-end'>
          <Button type='submit' disabled={isLoading}>
            Generate
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
