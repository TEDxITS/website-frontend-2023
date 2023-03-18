'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import TextAreaInput from '@/components/input/TextAreaInput';
import UnderlineLink from '@/components/link/UnderlineLink';
import { Modal } from '@/components/modal/Modal';
import Tooltip from '@/components/utils/Tooltip';

import {
  BATCH_OPTION,
  DEPARTMENT_OPTION,
  ROLE_OPTION,
} from '@/constant/call-for-local-speaker';
import clsxm from '@/utils/clsxm';

const localSpeakerSchema = z.object({
  full_name: z.string().min(1, { message: 'The name cannot be empty' }),
  email: z
    .string()
    .min(1, { message: 'The email cannot be empty' })
    .email({ message: 'The provided email is not valid' }),
  department: z.string().min(1, { message: 'The department cannot be empty' }),
  batch: z.string().min(1, { message: 'The batch cannot be empty' }),
  role: z.string().min(1, { message: 'The role cannot be empty' }),
  instagram: z
    .string()
    .min(1, { message: 'The Instagram profile link cannot be empty' })
    .url({ message: 'The provided link is not a valid URL (use https://)' }),
  twibbon_link: z
    .string()
    .min(1, { message: 'The twibbon link cannot be empty' })
    .url({ message: 'The provided link is not a valid URL (use https://)' }),
  google_drive_link: z
    .string()
    .min(1, { message: 'The Google Drive link cannot be empty' })
    .url({ message: 'The provided link is not a valid URL (use https://)' }),
  reason_to_join: z
    .string()
    .min(1, { message: 'Reason to join cannot be empty' }),
});

type LocalSpeaker = z.infer<typeof localSpeakerSchema>;

const localSpeakerInitialValue: LocalSpeaker = {
  full_name: '',
  email: '',
  department: '',
  batch: '',
  role: '',
  instagram: '',
  twibbon_link: '',
  google_drive_link: '',
  reason_to_join: '',
};

export default function CFLSForm() {
  const methods = useForm<LocalSpeaker>({
    defaultValues: localSpeakerInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(localSpeakerSchema),
  });
  const { handleSubmit, reset, getValues } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] =
    React.useState<boolean>(false);

  const onSubmit: SubmitHandler<LocalSpeaker> = async () => {
    setIsOpen(true);
  };

  const fetchLocalSpeaker = async (data: LocalSpeaker) => {
    setIsLoading(true);
    const localSpeakerPromise = async () => {
      try {
        const res = await fetch('/api/call-for-local-speaker', {
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
    const loginPromise = localSpeakerPromise();
    toast
      .promise(loginPromise, {
        loading: 'Loading..',
        success: 'Success!',
        error: (e) => `Error: ${JSON.stringify(e)}`,
      })
      .then(() => {
        setIsOpen(false);
        setIsSuccessModalOpen(true);
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  // const onClickSubmit = (event: any) => {
  //   handleSubmit(onSubmit)(event);
  //   setIsOpen(false);
  // };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='h-full w-full p-4 pt-6 text-cwhite'
        >
          <div className='mb-10'>
            <SectionSeparator number={1} title='Introduction' />
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2'>
              <Input
                id='full_name'
                type='text'
                label='Full Name'
                className='rounded-md text-lg'
              />
              <SelectInput
                id='role'
                label='Role'
                className='rounded-md text-lg'
              >
                {ROLE_OPTION.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </SelectInput>
              <SelectInput
                id='department'
                label='Department'
                className='rounded-md text-lg'
                topHelperText='Select "Not a Student" if you are not a student or alumni'
              >
                {DEPARTMENT_OPTION.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </SelectInput>
              <SelectInput
                id='batch'
                label='Batch'
                className='rounded-md text-lg'
                topHelperText='Select "Not a Student" if you are not a student or alumni'
              >
                {BATCH_OPTION.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </SelectInput>

              <Input
                id='email'
                type='email'
                label='Email'
                className='rounded-md text-lg'
                topHelperText='Make sure your email address is valid'
              />
              <Input
                id='instagram'
                type='url'
                label='Instagram Profile Link'
                className='rounded-md text-lg'
                topHelperText='Make sure your instagram profile is public and is a main account'
              />
            </div>
            <SectionSeparator number={2} title='Requirements' />
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2'>
              <Input
                id='twibbon_link'
                type='url'
                label={
                  <div>
                    <Tooltip
                      withUnderline={false}
                      spanClassName='flex gap-2'
                      content={
                        <div>
                          Refer to point 5b in the{' '}
                          <UnderlineLink href='/call-for-local-speaker?section=1#gamepad'>
                            {' '}
                            requirements
                          </UnderlineLink>
                        </div>
                      }
                    >
                      Twibbon Link
                      <HiOutlineExclamationCircle className='text-primary-600 mt-0.5 text-lg' />
                    </Tooltip>
                  </div>
                }
                className='rounded-md text-lg'
                topHelperText='Upload on your main instagram account and submit the post link'
              />
              <Input
                id='google_drive_link'
                type='url'
                label={
                  <div>
                    <Tooltip
                      withUnderline={false}
                      spanClassName='flex gap-2'
                      content={
                        <div>
                          Refer to point 6 in the{' '}
                          <UnderlineLink href='/call-for-local-speaker?section=1#gamepad'>
                            {' '}
                            requirements
                          </UnderlineLink>
                        </div>
                      }
                    >
                      Google Drive Link
                      <HiOutlineExclamationCircle className='text-primary-600 mt-0.5 text-lg' />
                    </Tooltip>
                  </div>
                }
                className='rounded-md text-lg'
                topHelperText='Upload the requirements in a google drive folder and submit the folder link (make sure the link is accessible)'
              />
            </div>
            <SectionSeparator number={3} title='Reason To Join' />
            <TextAreaInput
              id='reason_to_join'
              label='Reason to join as a speaker for TEDxITS 2023'
              className='h-20 rounded-md text-lg'
            />
          </div>
          <Button
            type='submit'
            className='mb-4 w-full py-3'
            disabled={isLoading}
          >
            <p className='w-full text-center'>Submit</p>
          </Button>
        </form>
      </FormProvider>
      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        className='noisy border-[10px] border-cgray bg-black'
      >
        <div className='z-20 flex flex-col items-center justify-center'>
          <h1 className='text-center font-baron text-xl text-cwhite sm:text-4xl'>
            Confirmation
          </h1>
          <p className='mt-4 mb-8 text-center text-base font-medium text-cwhite sm:text-lg'>
            Are you sure you want to submit this form? Once submitted, your
            information cannot be edited or deleted.
          </p>
        </div>
        <div className='mb-4 flex justify-center gap-x-2'>
          <Button
            onClick={() => setIsOpen(false)}
            disabled={isLoading}
            variant='primary'
            className='bg-cred hover:bg-cred'
          >
            No, Cancel
          </Button>
          <Button
            type='submit'
            disabled={isLoading}
            onClick={() => fetchLocalSpeaker(getValues())}
            variant='primary'
            className='bg-cgreen hover:bg-cgreen'
          >
            Yes, Confirm
          </Button>
        </div>
      </Modal>
      <Modal
        setIsOpen={setIsSuccessModalOpen}
        isOpen={isSuccessModalOpen}
        className='noisy border-[10px] border-cgray bg-black'
      >
        <div className='z-20 flex flex-col items-center justify-center'>
          <h1 className='text-center font-baron text-xl text-cwhite sm:text-4xl'>
            Success
          </h1>
          <p className='mt-4 mb-8 text-center text-base font-medium text-cwhite sm:text-lg'>
            Your registration form has been successfully submitted. We wish you
            good luck and stay tuned for the updates on TEDxITS 2023 social
            media.
          </p>
        </div>
        <div className='flex justify-center gap-x-2'>
          <Button
            onClick={() => {
              setIsSuccessModalOpen(false);
            }}
            variant='primary'
            className='bg-cred hover:bg-cred'
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

function SectionSeparator({
  title,
  number,
  className,
}: {
  title: string;
  number: number;
  className?: string;
}) {
  return (
    <div className={clsxm('mb-10 mt-14 flex items-center gap-x-4', className)}>
      <div className='flex h-10 w-14 items-center justify-center rounded-full bg-cwhite px-3 md:px-0'>
        <p className='font-bold text-black'>{number}</p>
      </div>
      <h2 className='mb-2 whitespace-nowrap font-baron'>{title}</h2>
      <div className='h-1 w-full rounded-md bg-gradient-to-r from-cwhite via-cwhite to-cblue sm:w-full' />
    </div>
  );
}
