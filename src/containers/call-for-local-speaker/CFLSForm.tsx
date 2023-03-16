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
  student_id: z.string().min(1, { message: 'The student ID cannot be empty' }),
  instagram: z
    .string()
    .min(1, { message: 'The Instagram profile link cannot be empty' })
    .url({ message: 'The provided link is not a valid URL (use https://)' }),
  reels_link: z
    .string()
    .min(1, { message: 'The Instagram reels link cannot be empty' })
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
  student_id: '',
  instagram: '',
  reels_link: '',
  google_drive_link: '',
  reason_to_join: '',
};

export default function CFLSForm() {
  const methods = useForm<LocalSpeaker>({
    defaultValues: localSpeakerInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(localSpeakerSchema),
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<LocalSpeaker> = async (data) => {
    // setIsLoading(true);
    try {
      const loginPromise = fetch('/api/call-for-local-speaker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      toast
        .promise(loginPromise, {
          loading: 'Loading..',
          success: 'The form has been submitted successfully',
          error: (e) => e,
        })
        .then(() => undefined)
        .catch((e) => e)
        .finally(() => {
          setIsLoading(false);
          reset();
        });
      return { success: true };
    } catch (error) {
      toast.error('Please check the form again, there has been some mistake!');
      return { success: false };
    }
  };

  const onClickSubmit = (event: any) => {
    handleSubmit(onSubmit)(event);
    setIsOpen(false);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='h-full w-full p-4 pt-6 text-cwhite'
        >
          <div className='mb-10'>
            <SectionSeparator number={1} title='Introduction' />
            <div className='grid grid-cols-2 gap-x-8 gap-y-10'>
              <Input
                id='full_name'
                type='text'
                label='Full Name'
                className='rounded-md text-lg'
              />
              <Input
                id='student_id'
                type='text'
                label='Student ID (NRP)'
                className='rounded-md text-lg'
              />
              <SelectInput
                id='department'
                label='Department'
                className='rounded-md text-lg'
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
                topHelperText='Make sure your email address are valid'
              />
              <Input
                id='instagram'
                type='url'
                label='Instagram Profile Link'
                className='rounded-md text-lg'
                topHelperText='Make sure your instagram profile are public and are a main account'
              />
            </div>
            <SectionSeparator number={2} title='Requirements' />
            <div className='grid grid-cols-2 gap-x-8 gap-y-10'>
              <Input
                id='reels_link'
                type='url'
                label='Instagram Reels Link'
                className='rounded-md text-lg'
                topHelperText='Upload on your main instagram account and submit the post link (Link)'
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
                          follow the requirement list{' '}
                          <UnderlineLink href='/call-for-local-speaker?section=1#gamepad'>
                            {' '}
                            here
                          </UnderlineLink>
                        </div>
                      }
                    >
                      Google Drive Link
                      <HiOutlineExclamationCircle className='text-primary-600 text-lg' />
                    </Tooltip>
                  </div>
                }
                className='rounded-md text-lg'
                topHelperText='Upload the requirements in a google drive folder and submit the folder link (Link)'
              />
            </div>
            <SectionSeparator number={3} title='Reason To Join' />
            <TextAreaInput
              id='reason_to_join'
              label='Reason to join as a speaker for TEDxITS'
              className='h-20 rounded-md text-lg'
            />
          </div>
          <Button
            type='button'
            onClick={() => setIsOpen(true)}
            className='mb-4 w-full py-3'
            disabled={isLoading}
          >
            <p className='w-full text-center'>Submit</p>
          </Button>
          <Modal setIsOpen={setIsOpen} isOpen={isOpen} className='bg-cwhite'>
            <Modal.Title className='mb-4'>Submit Confirmation</Modal.Title>
            <Modal.Description className='flex text-lg'>
              <>
                Are you sure you want to submit this form? <br /> Once
                submitted, your information cannot be edited or deleted.
              </>
            </Modal.Description>
            <div className='mt-4 flex justify-end gap-x-2'>
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
                onClick={onClickSubmit}
                disabled={isLoading}
                variant='primary'
                className='bg-cgreen hover:bg-cgreen'
              >
                Yes, Confirm
              </Button>
            </div>
          </Modal>
        </form>
      </FormProvider>
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
      <div className='flex h-10 w-14 items-center justify-center rounded-full bg-cwhite'>
        <p className='font-bold text-black'>{number}</p>
      </div>
      <h2 className='mb-2 whitespace-nowrap font-baron'>{title}</h2>
      <div className='h-1 w-full rounded-md bg-gradient-to-r from-cwhite via-cwhite to-cblue' />
    </div>
  );
}
