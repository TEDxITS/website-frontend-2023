'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/utils/clsxm';

type SelectInputProps = {
  id: string;
  labelClassName?: string;
  helperText?: React.ReactNode | string;
  label?: React.ReactNode | string;
  showError?: boolean;
  topHelperText?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  id,
  className,
  labelClassName,
  label = '',
  helperText,
  showError = true,
  topHelperText,
  children,
  ...rest
}: SelectInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='block w-full space-y-1'>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <p className='text-xs text-ccream'>{topHelperText}</p>
      <div className='flex items-center'>
        <select
          {...register(id)}
          {...rest}
          id={id}
          className={clsxm(
            'block w-full rounded-full border border-gray-300 bg-cwhite p-2.5 text-sm text-gray-900 transition ease-in-out focus:border-cblue focus:outline-none focus:ring-1 focus:ring-cblue',
            className
          )}
        >
          {children}
        </select>
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
