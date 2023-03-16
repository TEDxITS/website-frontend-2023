'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/utils/clsxm';

type InputProps = {
  id: string;
  helperText?: React.ReactNode | string;
  label?: React.ReactNode | string;
  showError?: boolean;
} & React.ComponentPropsWithoutRef<'textarea'>;

export default function TextAreaInput({
  id,
  className,
  label = '',
  helperText,
  showError = true,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='block w-full space-y-1'>
      <label htmlFor={id}>{label}</label>
      <div className='flex items-center'>
        <textarea
          {...register(id)}
          {...rest}
          id={id}
          className={clsxm(
            'block w-full rounded-full border border-gray-300 bg-cwhite p-2.5 text-sm text-gray-900 transition ease-in-out focus:border-cblue focus:outline-none focus:ring-1 focus:ring-cblue',
            className
          )}
        />
      </div>
      <p className='text-xs text-gray-500'>{helperText}</p>
      {showError && (
        <p className='text-sm text-red-400'>
          {errors[id] && String(errors[id]?.message)}
        </p>
      )}
    </div>
  );
}
