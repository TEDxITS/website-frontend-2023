'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';

const linkDatabaseSearchBarSchema = z.object({
  keyword: z.string().min(1),
});
type LinkDatabaseSearchBarDataType = z.infer<
  typeof linkDatabaseSearchBarSchema
>;

export default function LinkDatabaseSearchBar() {
  const methods = useForm<LinkDatabaseSearchBarDataType>({
    defaultValues: { keyword: '' },
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(linkDatabaseSearchBarSchema),
  });
  const { handleSubmit } = methods;
  const router = useRouter();

  const onSubmit: SubmitHandler<LinkDatabaseSearchBarDataType> = async (
    data
  ) => {
    router.replace(`/tools/database?keyword=${data.keyword}`);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center gap-x-2 text-cwhite'
        noValidate
      >
        <Input
          id='keyword'
          type='text'
          placeholder='Search Here..'
          label={<p className='hidden font-semibold'>Search</p>}
          showError={false}
        />
        <Button type='submit' className='p-3'>
          <MdSearch className='h-5 w-5' />
        </Button>
      </form>
    </FormProvider>
  );
}
